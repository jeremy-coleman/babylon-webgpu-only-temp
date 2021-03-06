import { Constants } from '../../Engines/constants.js';
import { InternalTexture } from './internalTexture.js';

/**
 * Class used to store an external texture (like GPUExternalTexture in WebGPU)
 */
class ExternalTexture {
    /**
     * Constructs the texture
     * @param video The video the texture should be wrapped around
     */
    constructor(video) {
        /**
         * Gets a boolean indicating if the texture uses mipmaps
         */
        this.useMipMaps = false;
        /**
         * The type of the underlying texture is implementation dependent, so return "UNDEFINED" for the type
         */
        this.type = Constants.TEXTURETYPE_UNDEFINED;
        this._video = video;
        this.uniqueId = InternalTexture._Counter++;
    }
    /**
     * Checks if a texture is an external or internal texture
     * @param texture the external or internal texture
     * @returns true if the texture is an external texture, else false
     */
    static IsExternalTexture(texture) {
        return texture.underlyingResource !== undefined;
    }
    /**
     * Get the class name of the texture.
     * @returns "ExternalTexture"
     */
    getClassName() {
        return "ExternalTexture";
    }
    /**
     * Gets the underlying texture object
     */
    get underlyingResource() {
        return this._video;
    }
    /**
     * Get if the texture is ready to be used (downloaded, converted, mip mapped...).
     * @returns true if fully ready
     */
    isReady() {
        return this._video.readyState >= this._video.HAVE_CURRENT_DATA;
    }
    /**
     * Dispose the texture and release its associated resources.
     */
    dispose() {
    }
}

export { ExternalTexture };
