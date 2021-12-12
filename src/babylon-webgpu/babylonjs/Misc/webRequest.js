/** @hidden */
function createXMLHttpRequest() {
    // If running in Babylon Native, then defer to the native XMLHttpRequest, which has the same public contract
    if (typeof _native !== 'undefined' && _native.XMLHttpRequest) {
        return new _native.XMLHttpRequest();
    }
    else {
        return new XMLHttpRequest();
    }
}
/**
 * Extended version of XMLHttpRequest with support for customizations (headers, ...)
 */
class WebRequest {
    constructor() {
        this._xhr = createXMLHttpRequest();
    }
    _injectCustomRequestHeaders() {
        for (let key in WebRequest.CustomRequestHeaders) {
            const val = WebRequest.CustomRequestHeaders[key];
            if (val) {
                this._xhr.setRequestHeader(key, val);
            }
        }
    }
    /**
     * Gets or sets a function to be called when loading progress changes
     */
    get onprogress() {
        return this._xhr.onprogress;
    }
    set onprogress(value) {
        this._xhr.onprogress = value;
    }
    /**
     * Returns client's state
     */
    get readyState() {
        return this._xhr.readyState;
    }
    /**
     * Returns client's status
     */
    get status() {
        return this._xhr.status;
    }
    /**
     * Returns client's status as a text
     */
    get statusText() {
        return this._xhr.statusText;
    }
    /**
     * Returns client's response
     */
    get response() {
        return this._xhr.response;
    }
    /**
     * Returns client's response url
     */
    get responseURL() {
        return this._xhr.responseURL;
    }
    /**
     * Returns client's response as text
     */
    get responseText() {
        return this._xhr.responseText;
    }
    /**
     * Gets or sets the expected response type
     */
    get responseType() {
        return this._xhr.responseType;
    }
    set responseType(value) {
        this._xhr.responseType = value;
    }
    /**
     * Gets or sets the timeout value in milliseconds
     */
    get timeout() {
        return this._xhr.timeout;
    }
    set timeout(value) {
        this._xhr.timeout = value;
    }
    addEventListener(type, listener, options) {
        this._xhr.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        this._xhr.removeEventListener(type, listener, options);
    }
    /**
     * Cancels any network activity
     */
    abort() {
        this._xhr.abort();
    }
    /**
     * Initiates the request. The optional argument provides the request body. The argument is ignored if request method is GET or HEAD
     * @param body defines an optional request body
     */
    send(body) {
        if (WebRequest.CustomRequestHeaders) {
            this._injectCustomRequestHeaders();
        }
        this._xhr.send(body);
    }
    /**
     * Sets the request method, request URL
     * @param method defines the method to use (GET, POST, etc..)
     * @param url defines the url to connect with
     */
    open(method, url) {
        for (var update of WebRequest.CustomRequestModifiers) {
            update(this._xhr, url);
        }
        // Clean url
        url = url.replace("file:http:", "http:");
        url = url.replace("file:https:", "https:");
        return this._xhr.open(method, url, true);
    }
    /**
     * Sets the value of a request header.
     * @param name The name of the header whose value is to be set
     * @param value The value to set as the body of the header
     */
    setRequestHeader(name, value) {
        this._xhr.setRequestHeader(name, value);
    }
    /**
     * Get the string containing the text of a particular header's value.
     * @param name The name of the header
     * @returns The string containing the text of the given header name
     */
    getResponseHeader(name) {
        return this._xhr.getResponseHeader(name);
    }
}
/**
 * Custom HTTP Request Headers to be sent with XMLHttpRequests
 * i.e. when loading files, where the server/service expects an Authorization header
 */
WebRequest.CustomRequestHeaders = {};
/**
 * Add callback functions in this array to update all the requests before they get sent to the network
 */
WebRequest.CustomRequestModifiers = new Array();

export { WebRequest };
