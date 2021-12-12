class Constants {
}
Constants.ALPHA_DISABLE = 0;
Constants.ALPHA_ADD = 1;
Constants.ALPHA_COMBINE = 2;
Constants.ALPHA_SUBTRACT = 3;
Constants.ALPHA_MULTIPLY = 4;
Constants.ALPHA_MAXIMIZED = 5;
Constants.ALPHA_ONEONE = 6;
Constants.ALPHA_PREMULTIPLIED = 7;
Constants.ALPHA_PREMULTIPLIED_PORTERDUFF = 8;
Constants.ALPHA_INTERPOLATE = 9;
Constants.ALPHA_SCREENMODE = 10;
Constants.ALPHA_ONEONE_ONEONE = 11;
Constants.ALPHA_ALPHATOCOLOR = 12;
Constants.ALPHA_REVERSEONEMINUS = 13;
Constants.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14;
Constants.ALPHA_ONEONE_ONEZERO = 15;
Constants.ALPHA_EXCLUSION = 16;
Constants.ALPHA_LAYER_ACCUMULATE = 17;
Constants.ALPHA_EQUATION_ADD = 0;
Constants.ALPHA_EQUATION_SUBSTRACT = 1;
Constants.ALPHA_EQUATION_REVERSE_SUBTRACT = 2;
Constants.ALPHA_EQUATION_MAX = 3;
Constants.ALPHA_EQUATION_MIN = 4;
Constants.ALPHA_EQUATION_DARKEN = 5;
Constants.DELAYLOADSTATE_NONE = 0;
Constants.DELAYLOADSTATE_LOADED = 1;
Constants.DELAYLOADSTATE_LOADING = 2;
Constants.DELAYLOADSTATE_NOTLOADED = 4;
Constants.NEVER = 0x0200;
Constants.ALWAYS = 0x0207;
Constants.LESS = 0x0201;
Constants.EQUAL = 0x0202;
Constants.LEQUAL = 0x0203;
Constants.GREATER = 0x0204;
Constants.GEQUAL = 0x0206;
Constants.NOTEQUAL = 0x0205;
Constants.KEEP = 0x1E00;
Constants.ZERO = 0x0000;
Constants.REPLACE = 0x1E01;
Constants.INCR = 0x1E02;
Constants.DECR = 0x1E03;
Constants.INVERT = 0x150A;
Constants.INCR_WRAP = 0x8507;
Constants.DECR_WRAP = 0x8508;
Constants.TEXTURE_CLAMP_ADDRESSMODE = 0;
Constants.TEXTURE_WRAP_ADDRESSMODE = 1;
Constants.TEXTURE_MIRROR_ADDRESSMODE = 2;
Constants.TEXTURE_CREATIONFLAG_STORAGE = 1;
Constants.TEXTUREFORMAT_ALPHA = 0;
Constants.TEXTUREFORMAT_LUMINANCE = 1;
Constants.TEXTUREFORMAT_LUMINANCE_ALPHA = 2;
Constants.TEXTUREFORMAT_RGB = 4;
Constants.TEXTUREFORMAT_RGBA = 5;
Constants.TEXTUREFORMAT_RED = 6;
Constants.TEXTUREFORMAT_R = 6;
Constants.TEXTUREFORMAT_RG = 7;
Constants.TEXTUREFORMAT_RED_INTEGER = 8;
Constants.TEXTUREFORMAT_R_INTEGER = 8;
Constants.TEXTUREFORMAT_RG_INTEGER = 9;
Constants.TEXTUREFORMAT_RGB_INTEGER = 10;
Constants.TEXTUREFORMAT_RGBA_INTEGER = 11;
Constants.TEXTUREFORMAT_BGRA = 12;
Constants.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13;
Constants.TEXTUREFORMAT_DEPTH32_FLOAT = 14;
Constants.TEXTUREFORMAT_DEPTH16 = 15;
Constants.TEXTUREFORMAT_DEPTH24 = 16;
Constants.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492;
Constants.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495;
Constants.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494;
Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779;
Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778;
Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777;
Constants.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776;
Constants.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808;
Constants.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196;
Constants.TEXTURETYPE_UNSIGNED_BYTE = 0;
Constants.TEXTURETYPE_UNSIGNED_INT = 0;
Constants.TEXTURETYPE_FLOAT = 1;
Constants.TEXTURETYPE_HALF_FLOAT = 2;
Constants.TEXTURETYPE_BYTE = 3;
Constants.TEXTURETYPE_SHORT = 4;
Constants.TEXTURETYPE_UNSIGNED_SHORT = 5;
Constants.TEXTURETYPE_INT = 6;
Constants.TEXTURETYPE_UNSIGNED_INTEGER = 7;
Constants.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8;
Constants.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9;
Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10;
Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11;
Constants.TEXTURETYPE_UNSIGNED_INT_24_8 = 12;
Constants.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13;
Constants.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14;
Constants.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15;
Constants.TEXTURETYPE_UNDEFINED = 16;
Constants.TEXTURE_NEAREST_SAMPLINGMODE = 1;
Constants.TEXTURE_NEAREST_NEAREST = 1;
Constants.TEXTURE_BILINEAR_SAMPLINGMODE = 2;
Constants.TEXTURE_LINEAR_LINEAR = 2;
Constants.TEXTURE_TRILINEAR_SAMPLINGMODE = 3;
Constants.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3;
Constants.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4;
Constants.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5;
Constants.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6;
Constants.TEXTURE_NEAREST_LINEAR = 7;
Constants.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8;
Constants.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9;
Constants.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10;
Constants.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11;
Constants.TEXTURE_LINEAR_NEAREST = 12;
Constants.TEXTURE_EXPLICIT_MODE = 0;
Constants.TEXTURE_SPHERICAL_MODE = 1;
Constants.TEXTURE_PLANAR_MODE = 2;
Constants.TEXTURE_CUBIC_MODE = 3;
Constants.TEXTURE_PROJECTION_MODE = 4;
Constants.TEXTURE_SKYBOX_MODE = 5;
Constants.TEXTURE_INVCUBIC_MODE = 6;
Constants.TEXTURE_EQUIRECTANGULAR_MODE = 7;
Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8;
Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
Constants.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096;
Constants.TEXTURE_FILTERING_QUALITY_HIGH = 64;
Constants.TEXTURE_FILTERING_QUALITY_MEDIUM = 16;
Constants.TEXTURE_FILTERING_QUALITY_LOW = 8;
Constants.SCALEMODE_FLOOR = 1;
Constants.SCALEMODE_NEAREST = 2;
Constants.SCALEMODE_CEILING = 3;
Constants.MATERIAL_TextureDirtyFlag = 1;
Constants.MATERIAL_LightDirtyFlag = 2;
Constants.MATERIAL_FresnelDirtyFlag = 4;
Constants.MATERIAL_AttributesDirtyFlag = 8;
Constants.MATERIAL_MiscDirtyFlag = 16;
Constants.MATERIAL_PrePassDirtyFlag = 32;
Constants.MATERIAL_AllDirtyFlag = 63;
Constants.MATERIAL_TriangleFillMode = 0;
Constants.MATERIAL_WireFrameFillMode = 1;
Constants.MATERIAL_PointFillMode = 2;
Constants.MATERIAL_PointListDrawMode = 3;
Constants.MATERIAL_LineListDrawMode = 4;
Constants.MATERIAL_LineLoopDrawMode = 5;
Constants.MATERIAL_LineStripDrawMode = 6;
Constants.MATERIAL_TriangleStripDrawMode = 7;
Constants.MATERIAL_TriangleFanDrawMode = 8;
Constants.MATERIAL_ClockWiseSideOrientation = 0;
Constants.MATERIAL_CounterClockWiseSideOrientation = 1;
Constants.ACTION_NothingTrigger = 0;
Constants.ACTION_OnPickTrigger = 1;
Constants.ACTION_OnLeftPickTrigger = 2;
Constants.ACTION_OnRightPickTrigger = 3;
Constants.ACTION_OnCenterPickTrigger = 4;
Constants.ACTION_OnPickDownTrigger = 5;
Constants.ACTION_OnDoublePickTrigger = 6;
Constants.ACTION_OnPickUpTrigger = 7;
Constants.ACTION_OnPickOutTrigger = 16;
Constants.ACTION_OnLongPressTrigger = 8;
Constants.ACTION_OnPointerOverTrigger = 9;
Constants.ACTION_OnPointerOutTrigger = 10;
Constants.ACTION_OnEveryFrameTrigger = 11;
Constants.ACTION_OnIntersectionEnterTrigger = 12;
Constants.ACTION_OnIntersectionExitTrigger = 13;
Constants.ACTION_OnKeyDownTrigger = 14;
Constants.ACTION_OnKeyUpTrigger = 15;
Constants.PARTICLES_BILLBOARDMODE_Y = 2;
Constants.PARTICLES_BILLBOARDMODE_ALL = 7;
Constants.PARTICLES_BILLBOARDMODE_STRETCHED = 8;
Constants.MESHES_CULLINGSTRATEGY_STANDARD = 0;
Constants.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
Constants.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
Constants.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
Constants.SCENELOADER_NO_LOGGING = 0;
Constants.SCENELOADER_MINIMAL_LOGGING = 1;
Constants.SCENELOADER_SUMMARY_LOGGING = 2;
Constants.SCENELOADER_DETAILED_LOGGING = 3;
Constants.PREPASS_IRRADIANCE_TEXTURE_TYPE = 0;
Constants.PREPASS_POSITION_TEXTURE_TYPE = 1;
Constants.PREPASS_VELOCITY_TEXTURE_TYPE = 2;
Constants.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3;
Constants.PREPASS_COLOR_TEXTURE_TYPE = 4;
Constants.PREPASS_DEPTH_TEXTURE_TYPE = 5;
Constants.PREPASS_NORMAL_TEXTURE_TYPE = 6;
Constants.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7;
Constants.BUFFER_CREATIONFLAG_READ = 1;
Constants.BUFFER_CREATIONFLAG_WRITE = 2;
Constants.BUFFER_CREATIONFLAG_READWRITE = 3;
Constants.BUFFER_CREATIONFLAG_UNIFORM = 4;
Constants.BUFFER_CREATIONFLAG_VERTEX = 8;
Constants.BUFFER_CREATIONFLAG_INDEX = 16;
Constants.BUFFER_CREATIONFLAG_STORAGE = 32;
Constants.RENDERPASS_MAIN = 0;
Constants.INPUT_ALT_KEY = 18;
Constants.INPUT_CTRL_KEY = 17;
Constants.INPUT_META_KEY1 = 91;
Constants.INPUT_META_KEY2 = 92;
Constants.INPUT_META_KEY3 = 93;
Constants.INPUT_SHIFT_KEY = 16;
Constants.SNAPSHOTRENDERING_STANDARD = 0;
Constants.SNAPSHOTRENDERING_FAST = 1;
Constants.PERSPECTIVE_CAMERA = 0;
Constants.ORTHOGRAPHIC_CAMERA = 1;
Constants.FOVMODE_VERTICAL_FIXED = 0;
Constants.FOVMODE_HORIZONTAL_FIXED = 1;
Constants.RIG_MODE_NONE = 0;
Constants.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
Constants.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
Constants.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
Constants.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
Constants.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
Constants.RIG_MODE_VR = 20;
Constants.RIG_MODE_WEBVR = 21;
Constants.RIG_MODE_CUSTOM = 22;
Constants.MAX_SUPPORTED_UV_SETS = 6;
Constants.GL_ALPHA_EQUATION_ADD = 0x8006;
Constants.GL_ALPHA_EQUATION_MIN = 0x8007;
Constants.GL_ALPHA_EQUATION_MAX = 0x8008;
Constants.GL_ALPHA_EQUATION_SUBTRACT = 0x800A;
Constants.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 0x800B;
Constants.GL_ALPHA_FUNCTION_SRC = 0x0300;
Constants.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 0x0301;
Constants.GL_ALPHA_FUNCTION_SRC_ALPHA = 0x0302;
Constants.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 0x0303;
Constants.GL_ALPHA_FUNCTION_DST_ALPHA = 0x0304;
Constants.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 0x0305;
Constants.GL_ALPHA_FUNCTION_DST_COLOR = 0x0306;
Constants.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 0x0307;
Constants.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 0x0308;
Constants.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 0x8001;
Constants.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 0x8002;
Constants.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 0x8003;
Constants.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 0x8004;
class EventState {
    constructor(mask, skipNextObservers = false, target, currentTarget) {
        this.initialize(mask, skipNextObservers, target, currentTarget);
    }
    initialize(mask, skipNextObservers = false, target, currentTarget) {
        this.mask = mask;
        this.skipNextObservers = skipNextObservers;
        this.target = target;
        this.currentTarget = currentTarget;
        return this;
    }
}
class Observer {
    constructor(callback, mask, scope = null) {
        this.callback = callback;
        this.mask = mask;
        this.scope = scope;
        this._willBeUnregistered = false;
        this.unregisterOnNextCall = false;
    }
}
class Observable {
    constructor(onObserverAdded) {
        this._observers = new Array();
        this._eventState = new EventState(0);
        if (onObserverAdded) {
            this._onObserverAdded = onObserverAdded;
        }
    }
    static FromPromise(promise, onErrorObservable) {
        let observable = new Observable();
        promise
            .then((ret) => {
            observable.notifyObservers(ret);
        })
            .catch((err) => {
            if (onErrorObservable) {
                onErrorObservable.notifyObservers(err);
            }
            else {
                throw err;
            }
        });
        return observable;
    }
    get observers() {
        return this._observers;
    }
    add(callback, mask = -1, insertFirst = false, scope = null, unregisterOnFirstCall = false) {
        if (!callback) {
            return null;
        }
        var observer = new Observer(callback, mask, scope);
        observer.unregisterOnNextCall = unregisterOnFirstCall;
        if (insertFirst) {
            this._observers.unshift(observer);
        }
        else {
            this._observers.push(observer);
        }
        if (this._onObserverAdded) {
            this._onObserverAdded(observer);
        }
        return observer;
    }
    addOnce(callback) {
        return this.add(callback, undefined, undefined, undefined, true);
    }
    remove(observer) {
        if (!observer) {
            return false;
        }
        var index = this._observers.indexOf(observer);
        if (index !== -1) {
            this._deferUnregister(observer);
            return true;
        }
        return false;
    }
    removeCallback(callback, scope) {
        for (var index = 0; index < this._observers.length; index++) {
            const observer = this._observers[index];
            if (observer._willBeUnregistered) {
                continue;
            }
            if (observer.callback === callback && (!scope || scope === observer.scope)) {
                this._deferUnregister(observer);
                return true;
            }
        }
        return false;
    }
    _deferUnregister(observer) {
        observer.unregisterOnNextCall = false;
        observer._willBeUnregistered = true;
        setTimeout(() => {
            this._remove(observer);
        }, 0);
    }
    _remove(observer) {
        if (!observer) {
            return false;
        }
        var index = this._observers.indexOf(observer);
        if (index !== -1) {
            this._observers.splice(index, 1);
            return true;
        }
        return false;
    }
    makeObserverTopPriority(observer) {
        this._remove(observer);
        this._observers.unshift(observer);
    }
    makeObserverBottomPriority(observer) {
        this._remove(observer);
        this._observers.push(observer);
    }
    notifyObservers(eventData, mask = -1, target, currentTarget, userInfo) {
        if (!this._observers.length) {
            return true;
        }
        let state = this._eventState;
        state.mask = mask;
        state.target = target;
        state.currentTarget = currentTarget;
        state.skipNextObservers = false;
        state.lastReturnValue = eventData;
        state.userInfo = userInfo;
        for (var obs of this._observers) {
            if (obs._willBeUnregistered) {
                continue;
            }
            if (obs.mask & mask) {
                if (obs.scope) {
                    state.lastReturnValue = obs.callback.apply(obs.scope, [eventData, state]);
                }
                else {
                    state.lastReturnValue = obs.callback(eventData, state);
                }
                if (obs.unregisterOnNextCall) {
                    this._deferUnregister(obs);
                }
            }
            if (state.skipNextObservers) {
                return false;
            }
        }
        return true;
    }
    notifyObserversWithPromise(eventData, mask = -1, target, currentTarget, userInfo) {
        let p = Promise.resolve(eventData);
        if (!this._observers.length) {
            return p;
        }
        let state = this._eventState;
        state.mask = mask;
        state.target = target;
        state.currentTarget = currentTarget;
        state.skipNextObservers = false;
        state.userInfo = userInfo;
        this._observers.forEach((obs) => {
            if (state.skipNextObservers) {
                return;
            }
            if (obs._willBeUnregistered) {
                return;
            }
            if (obs.mask & mask) {
                if (obs.scope) {
                    p = p.then((lastReturnedValue) => {
                        state.lastReturnValue = lastReturnedValue;
                        return obs.callback.apply(obs.scope, [eventData, state]);
                    });
                }
                else {
                    p = p.then((lastReturnedValue) => {
                        state.lastReturnValue = lastReturnedValue;
                        return obs.callback(eventData, state);
                    });
                }
                if (obs.unregisterOnNextCall) {
                    this._deferUnregister(obs);
                }
            }
        });
        return p.then(() => { return eventData; });
    }
    notifyObserver(observer, eventData, mask = -1) {
        if (observer._willBeUnregistered) {
            return;
        }
        let state = this._eventState;
        state.mask = mask;
        state.skipNextObservers = false;
        observer.callback(eventData, state);
        if (observer.unregisterOnNextCall) {
            this._deferUnregister(observer);
        }
    }
    hasObservers() {
        return this._observers.length > 0;
    }
    clear() {
        this._observers = new Array();
        this._onObserverAdded = null;
    }
    clone() {
        var result = new Observable();
        result._observers = this._observers.slice(0);
        return result;
    }
    hasSpecificMask(mask = -1) {
        for (var obs of this._observers) {
            if (obs.mask & mask || obs.mask === mask) {
                return true;
            }
        }
        return false;
    }
}
class Scalar {
    static WithinEpsilon(a, b, epsilon = 1.401298E-45) {
        return Math.abs(a - b) <= epsilon;
    }
    static ToHex(i) {
        var str = i.toString(16);
        if (i <= 15) {
            return ("0" + str).toUpperCase();
        }
        return str.toUpperCase();
    }
    static Sign(value) {
        value = +value;
        if (value === 0 || isNaN(value)) {
            return value;
        }
        return value > 0 ? 1 : -1;
    }
    static Clamp(value, min = 0, max = 1) {
        return Math.min(max, Math.max(min, value));
    }
    static Log2(value) {
        return Math.log(value) * Math.LOG2E;
    }
    static ILog2(value) {
        if (Math.log2) {
            return Math.floor(Math.log2(value));
        }
        if (value < 0) {
            return NaN;
        }
        else if (value === 0) {
            return -Infinity;
        }
        let n = 0;
        if (value < 1) {
            while (value < 1) {
                n++;
                value = value * 2;
            }
            n = -n;
        }
        else if (value > 1) {
            while (value > 1) {
                n++;
                value = Math.floor(value / 2);
            }
        }
        return n;
    }
    static Repeat(value, length) {
        return value - Math.floor(value / length) * length;
    }
    static Normalize(value, min, max) {
        return (value - min) / (max - min);
    }
    static Denormalize(normalized, min, max) {
        return (normalized * (max - min) + min);
    }
    static DeltaAngle(current, target) {
        var num = Scalar.Repeat(target - current, 360.0);
        if (num > 180.0) {
            num -= 360.0;
        }
        return num;
    }
    static PingPong(tx, length) {
        var t = Scalar.Repeat(tx, length * 2.0);
        return length - Math.abs(t - length);
    }
    static SmoothStep(from, to, tx) {
        var t = Scalar.Clamp(tx);
        t = -2.0 * t * t * t + 3.0 * t * t;
        return to * t + from * (1.0 - t);
    }
    static MoveTowards(current, target, maxDelta) {
        var result = 0;
        if (Math.abs(target - current) <= maxDelta) {
            result = target;
        }
        else {
            result = current + Scalar.Sign(target - current) * maxDelta;
        }
        return result;
    }
    static MoveTowardsAngle(current, target, maxDelta) {
        var num = Scalar.DeltaAngle(current, target);
        var result = 0;
        if (-maxDelta < num && num < maxDelta) {
            result = target;
        }
        else {
            target = current + num;
            result = Scalar.MoveTowards(current, target, maxDelta);
        }
        return result;
    }
    static Lerp(start, end, amount) {
        return start + ((end - start) * amount);
    }
    static LerpAngle(start, end, amount) {
        var num = Scalar.Repeat(end - start, 360.0);
        if (num > 180.0) {
            num -= 360.0;
        }
        return start + num * Scalar.Clamp(amount);
    }
    static InverseLerp(a, b, value) {
        var result = 0;
        if (a != b) {
            result = Scalar.Clamp((value - a) / (b - a));
        }
        else {
            result = 0.0;
        }
        return result;
    }
    static Hermite(value1, tangent1, value2, tangent2, amount) {
        var squared = amount * amount;
        var cubed = amount * squared;
        var part1 = ((2.0 * cubed) - (3.0 * squared)) + 1.0;
        var part2 = (-2.0 * cubed) + (3.0 * squared);
        var part3 = (cubed - (2.0 * squared)) + amount;
        var part4 = cubed - squared;
        return (((value1 * part1) + (value2 * part2)) + (tangent1 * part3)) + (tangent2 * part4);
    }
    static Hermite1stDerivative(value1, tangent1, value2, tangent2, time) {
        const t2 = time * time;
        return ((t2 - time) * 6 * value1 +
            (3 * t2 - 4 * time + 1) * tangent1 +
            (-t2 + time) * 6 * value2 +
            (3 * t2 - 2 * time) * tangent2);
    }
    static RandomRange(min, max) {
        if (min === max) {
            return min;
        }
        return ((Math.random() * (max - min)) + min);
    }
    static RangeToPercent(number, min, max) {
        return ((number - min) / (max - min));
    }
    static PercentToRange(percent, min, max) {
        return ((max - min) * percent + min);
    }
    static NormalizeRadians(angle) {
        angle -= (Scalar.TwoPi * Math.floor((angle + Math.PI) / Scalar.TwoPi));
        return angle;
    }
    static HCF(a, b) {
        const r = a % b;
        if (r === 0) {
            return b;
        }
        return Scalar.HCF(b, r);
    }
}
Scalar.TwoPi = Math.PI * 2;
const ToGammaSpace = 1 / 2.2;
const ToLinearSpace = 2.2;
class ArrayTools {
    static BuildArray(size, itemBuilder) {
        const a = [];
        for (let i = 0; i < size; ++i) {
            a.push(itemBuilder());
        }
        return a;
    }
    static BuildTuple(size, itemBuilder) {
        return ArrayTools.BuildArray(size, itemBuilder);
    }
}
const _RegisteredTypes = {};
function RegisterClass(className, type) {
    _RegisteredTypes[className] = type;
}
function GetClass(fqdn) {
    return _RegisteredTypes[fqdn];
}
class PerformanceConfigurator {
    static SetMatrixPrecision(use64bits) {
        PerformanceConfigurator.MatrixTrackPrecisionChange = false;
        if (use64bits && !PerformanceConfigurator.MatrixUse64Bits) {
            if (PerformanceConfigurator.MatrixTrackedMatrices) {
                for (let m = 0; m < PerformanceConfigurator.MatrixTrackedMatrices.length; ++m) {
                    const matrix = PerformanceConfigurator.MatrixTrackedMatrices[m];
                    const values = matrix._m;
                    matrix._m = new Array(16);
                    for (let i = 0; i < 16; ++i) {
                        matrix._m[i] = values[i];
                    }
                }
            }
        }
        PerformanceConfigurator.MatrixUse64Bits = use64bits;
        PerformanceConfigurator.MatrixCurrentType = PerformanceConfigurator.MatrixUse64Bits ? Array : Float32Array;
        PerformanceConfigurator.MatrixTrackedMatrices = null;
    }
}
PerformanceConfigurator.MatrixUse64Bits = false;
PerformanceConfigurator.MatrixTrackPrecisionChange = true;
PerformanceConfigurator.MatrixCurrentType = Float32Array;
PerformanceConfigurator.MatrixTrackedMatrices = [];
class Color3 {
    constructor(r = 0, g = 0, b = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}";
    }
    getClassName() {
        return "Color3";
    }
    getHashCode() {
        let hash = (this.r * 255) | 0;
        hash = (hash * 397) ^ ((this.g * 255) | 0);
        hash = (hash * 397) ^ ((this.b * 255) | 0);
        return hash;
    }
    toArray(array, index = 0) {
        array[index] = this.r;
        array[index + 1] = this.g;
        array[index + 2] = this.b;
        return this;
    }
    fromArray(array, offset = 0) {
        Color3.FromArrayToRef(array, offset, this);
        return this;
    }
    toColor4(alpha = 1) {
        return new Color4(this.r, this.g, this.b, alpha);
    }
    asArray() {
        var result = new Array();
        this.toArray(result, 0);
        return result;
    }
    toLuminance() {
        return this.r * 0.3 + this.g * 0.59 + this.b * 0.11;
    }
    multiply(otherColor) {
        return new Color3(this.r * otherColor.r, this.g * otherColor.g, this.b * otherColor.b);
    }
    multiplyToRef(otherColor, result) {
        result.r = this.r * otherColor.r;
        result.g = this.g * otherColor.g;
        result.b = this.b * otherColor.b;
        return this;
    }
    equals(otherColor) {
        return otherColor && this.r === otherColor.r && this.g === otherColor.g && this.b === otherColor.b;
    }
    equalsFloats(r, g, b) {
        return this.r === r && this.g === g && this.b === b;
    }
    scale(scale) {
        return new Color3(this.r * scale, this.g * scale, this.b * scale);
    }
    scaleToRef(scale, result) {
        result.r = this.r * scale;
        result.g = this.g * scale;
        result.b = this.b * scale;
        return this;
    }
    scaleAndAddToRef(scale, result) {
        result.r += this.r * scale;
        result.g += this.g * scale;
        result.b += this.b * scale;
        return this;
    }
    clampToRef(min = 0, max = 1, result) {
        result.r = Scalar.Clamp(this.r, min, max);
        result.g = Scalar.Clamp(this.g, min, max);
        result.b = Scalar.Clamp(this.b, min, max);
        return this;
    }
    add(otherColor) {
        return new Color3(this.r + otherColor.r, this.g + otherColor.g, this.b + otherColor.b);
    }
    addToRef(otherColor, result) {
        result.r = this.r + otherColor.r;
        result.g = this.g + otherColor.g;
        result.b = this.b + otherColor.b;
        return this;
    }
    subtract(otherColor) {
        return new Color3(this.r - otherColor.r, this.g - otherColor.g, this.b - otherColor.b);
    }
    subtractToRef(otherColor, result) {
        result.r = this.r - otherColor.r;
        result.g = this.g - otherColor.g;
        result.b = this.b - otherColor.b;
        return this;
    }
    clone() {
        return new Color3(this.r, this.g, this.b);
    }
    copyFrom(source) {
        this.r = source.r;
        this.g = source.g;
        this.b = source.b;
        return this;
    }
    copyFromFloats(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        return this;
    }
    set(r, g, b) {
        return this.copyFromFloats(r, g, b);
    }
    toHexString() {
        var intR = Math.round(this.r * 255);
        var intG = Math.round(this.g * 255);
        var intB = Math.round(this.b * 255);
        return "#" + Scalar.ToHex(intR) + Scalar.ToHex(intG) + Scalar.ToHex(intB);
    }
    toLinearSpace() {
        var convertedColor = new Color3();
        this.toLinearSpaceToRef(convertedColor);
        return convertedColor;
    }
    toHSV() {
        let result = new Color3();
        this.toHSVToRef(result);
        return result;
    }
    toHSVToRef(result) {
        var r = this.r;
        var g = this.g;
        var b = this.b;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h = 0;
        var s = 0;
        var v = max;
        var dm = max - min;
        if (max !== 0) {
            s = dm / max;
        }
        if (max != min) {
            if (max == r) {
                h = (g - b) / dm;
                if (g < b) {
                    h += 6;
                }
            }
            else if (max == g) {
                h = (b - r) / dm + 2;
            }
            else if (max == b) {
                h = (r - g) / dm + 4;
            }
            h *= 60;
        }
        result.r = h;
        result.g = s;
        result.b = v;
    }
    toLinearSpaceToRef(convertedColor) {
        convertedColor.r = Math.pow(this.r, ToLinearSpace);
        convertedColor.g = Math.pow(this.g, ToLinearSpace);
        convertedColor.b = Math.pow(this.b, ToLinearSpace);
        return this;
    }
    toGammaSpace() {
        var convertedColor = new Color3();
        this.toGammaSpaceToRef(convertedColor);
        return convertedColor;
    }
    toGammaSpaceToRef(convertedColor) {
        convertedColor.r = Math.pow(this.r, ToGammaSpace);
        convertedColor.g = Math.pow(this.g, ToGammaSpace);
        convertedColor.b = Math.pow(this.b, ToGammaSpace);
        return this;
    }
    static HSVtoRGBToRef(hue, saturation, value, result) {
        var chroma = value * saturation;
        var h = hue / 60;
        var x = chroma * (1 - Math.abs((h % 2) - 1));
        var r = 0;
        var g = 0;
        var b = 0;
        if (h >= 0 && h <= 1) {
            r = chroma;
            g = x;
        }
        else if (h >= 1 && h <= 2) {
            r = x;
            g = chroma;
        }
        else if (h >= 2 && h <= 3) {
            g = chroma;
            b = x;
        }
        else if (h >= 3 && h <= 4) {
            g = x;
            b = chroma;
        }
        else if (h >= 4 && h <= 5) {
            r = x;
            b = chroma;
        }
        else if (h >= 5 && h <= 6) {
            r = chroma;
            b = x;
        }
        var m = value - chroma;
        result.set((r + m), (g + m), (b + m));
    }
    static FromHexString(hex) {
        if (hex.substring(0, 1) !== "#" || hex.length !== 7) {
            return new Color3(0, 0, 0);
        }
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5, 7), 16);
        return Color3.FromInts(r, g, b);
    }
    static FromArray(array, offset = 0) {
        return new Color3(array[offset], array[offset + 1], array[offset + 2]);
    }
    static FromArrayToRef(array, offset = 0, result) {
        result.r = array[offset];
        result.g = array[offset + 1];
        result.b = array[offset + 2];
    }
    static FromInts(r, g, b) {
        return new Color3(r / 255.0, g / 255.0, b / 255.0);
    }
    static Lerp(start, end, amount) {
        var result = new Color3(0.0, 0.0, 0.0);
        Color3.LerpToRef(start, end, amount, result);
        return result;
    }
    static LerpToRef(left, right, amount, result) {
        result.r = left.r + ((right.r - left.r) * amount);
        result.g = left.g + ((right.g - left.g) * amount);
        result.b = left.b + ((right.b - left.b) * amount);
    }
    static Hermite(value1, tangent1, value2, tangent2, amount) {
        const squared = amount * amount;
        const cubed = amount * squared;
        const part1 = ((2.0 * cubed) - (3.0 * squared)) + 1.0;
        const part2 = (-2.0 * cubed) + (3.0 * squared);
        const part3 = (cubed - (2.0 * squared)) + amount;
        const part4 = cubed - squared;
        const r = (((value1.r * part1) + (value2.r * part2)) + (tangent1.r * part3)) + (tangent2.r * part4);
        const g = (((value1.g * part1) + (value2.g * part2)) + (tangent1.g * part3)) + (tangent2.g * part4);
        const b = (((value1.b * part1) + (value2.b * part2)) + (tangent1.b * part3)) + (tangent2.b * part4);
        return new Color3(r, g, b);
    }
    static Hermite1stDerivative(value1, tangent1, value2, tangent2, time) {
        let result = Color3.Black();
        this.Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result);
        return result;
    }
    static Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result) {
        const t2 = time * time;
        result.r = (t2 - time) * 6 * value1.r + (3 * t2 - 4 * time + 1) * tangent1.r + (-t2 + time) * 6 * value2.r + (3 * t2 - 2 * time) * tangent2.r;
        result.g = (t2 - time) * 6 * value1.g + (3 * t2 - 4 * time + 1) * tangent1.g + (-t2 + time) * 6 * value2.g + (3 * t2 - 2 * time) * tangent2.g;
        result.b = (t2 - time) * 6 * value1.b + (3 * t2 - 4 * time + 1) * tangent1.b + (-t2 + time) * 6 * value2.b + (3 * t2 - 2 * time) * tangent2.b;
    }
    static Red() { return new Color3(1, 0, 0); }
    static Green() { return new Color3(0, 1, 0); }
    static Blue() { return new Color3(0, 0, 1); }
    static Black() { return new Color3(0, 0, 0); }
    static get BlackReadOnly() {
        return Color3._BlackReadOnly;
    }
    static White() { return new Color3(1, 1, 1); }
    static Purple() { return new Color3(0.5, 0, 0.5); }
    static Magenta() { return new Color3(1, 0, 1); }
    static Yellow() { return new Color3(1, 1, 0); }
    static Gray() { return new Color3(0.5, 0.5, 0.5); }
    static Teal() { return new Color3(0, 1.0, 1.0); }
    static Random() { return new Color3(Math.random(), Math.random(), Math.random()); }
}
Color3._BlackReadOnly = Color3.Black();
class Color4 {
    constructor(r = 0, g = 0, b = 0, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    addInPlace(right) {
        this.r += right.r;
        this.g += right.g;
        this.b += right.b;
        this.a += right.a;
        return this;
    }
    asArray() {
        var result = new Array();
        this.toArray(result, 0);
        return result;
    }
    toArray(array, index = 0) {
        array[index] = this.r;
        array[index + 1] = this.g;
        array[index + 2] = this.b;
        array[index + 3] = this.a;
        return this;
    }
    fromArray(array, offset = 0) {
        Color4.FromArrayToRef(array, offset, this);
        return this;
    }
    equals(otherColor) {
        return otherColor && this.r === otherColor.r && this.g === otherColor.g && this.b === otherColor.b && this.a === otherColor.a;
    }
    add(right) {
        return new Color4(this.r + right.r, this.g + right.g, this.b + right.b, this.a + right.a);
    }
    subtract(right) {
        return new Color4(this.r - right.r, this.g - right.g, this.b - right.b, this.a - right.a);
    }
    subtractToRef(right, result) {
        result.r = this.r - right.r;
        result.g = this.g - right.g;
        result.b = this.b - right.b;
        result.a = this.a - right.a;
        return this;
    }
    scale(scale) {
        return new Color4(this.r * scale, this.g * scale, this.b * scale, this.a * scale);
    }
    scaleToRef(scale, result) {
        result.r = this.r * scale;
        result.g = this.g * scale;
        result.b = this.b * scale;
        result.a = this.a * scale;
        return this;
    }
    scaleAndAddToRef(scale, result) {
        result.r += this.r * scale;
        result.g += this.g * scale;
        result.b += this.b * scale;
        result.a += this.a * scale;
        return this;
    }
    clampToRef(min = 0, max = 1, result) {
        result.r = Scalar.Clamp(this.r, min, max);
        result.g = Scalar.Clamp(this.g, min, max);
        result.b = Scalar.Clamp(this.b, min, max);
        result.a = Scalar.Clamp(this.a, min, max);
        return this;
    }
    multiply(color) {
        return new Color4(this.r * color.r, this.g * color.g, this.b * color.b, this.a * color.a);
    }
    multiplyToRef(color, result) {
        result.r = this.r * color.r;
        result.g = this.g * color.g;
        result.b = this.b * color.b;
        result.a = this.a * color.a;
        return result;
    }
    toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}";
    }
    getClassName() {
        return "Color4";
    }
    getHashCode() {
        let hash = (this.r * 255) | 0;
        hash = (hash * 397) ^ ((this.g * 255) | 0);
        hash = (hash * 397) ^ ((this.b * 255) | 0);
        hash = (hash * 397) ^ ((this.a * 255) | 0);
        return hash;
    }
    clone() {
        return new Color4(this.r, this.g, this.b, this.a);
    }
    copyFrom(source) {
        this.r = source.r;
        this.g = source.g;
        this.b = source.b;
        this.a = source.a;
        return this;
    }
    copyFromFloats(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        return this;
    }
    set(r, g, b, a) {
        return this.copyFromFloats(r, g, b, a);
    }
    toHexString(returnAsColor3 = false) {
        var intR = Math.round(this.r * 255);
        var intG = Math.round(this.g * 255);
        var intB = Math.round(this.b * 255);
        if (returnAsColor3) {
            return "#" + Scalar.ToHex(intR) + Scalar.ToHex(intG) + Scalar.ToHex(intB);
        }
        var intA = Math.round(this.a * 255);
        return "#" + Scalar.ToHex(intR) + Scalar.ToHex(intG) + Scalar.ToHex(intB) + Scalar.ToHex(intA);
    }
    toLinearSpace() {
        var convertedColor = new Color4();
        this.toLinearSpaceToRef(convertedColor);
        return convertedColor;
    }
    toLinearSpaceToRef(convertedColor) {
        convertedColor.r = Math.pow(this.r, ToLinearSpace);
        convertedColor.g = Math.pow(this.g, ToLinearSpace);
        convertedColor.b = Math.pow(this.b, ToLinearSpace);
        convertedColor.a = this.a;
        return this;
    }
    toGammaSpace() {
        var convertedColor = new Color4();
        this.toGammaSpaceToRef(convertedColor);
        return convertedColor;
    }
    toGammaSpaceToRef(convertedColor) {
        convertedColor.r = Math.pow(this.r, ToGammaSpace);
        convertedColor.g = Math.pow(this.g, ToGammaSpace);
        convertedColor.b = Math.pow(this.b, ToGammaSpace);
        convertedColor.a = this.a;
        return this;
    }
    static FromHexString(hex) {
        if (hex.substring(0, 1) !== "#" || (hex.length !== 9 && hex.length !== 7)) {
            return new Color4(0.0, 0.0, 0.0, 0.0);
        }
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5, 7), 16);
        var a = hex.length === 9 ? parseInt(hex.substring(7, 9), 16) : 255;
        return Color4.FromInts(r, g, b, a);
    }
    static Lerp(left, right, amount) {
        var result = new Color4(0.0, 0.0, 0.0, 0.0);
        Color4.LerpToRef(left, right, amount, result);
        return result;
    }
    static LerpToRef(left, right, amount, result) {
        result.r = left.r + (right.r - left.r) * amount;
        result.g = left.g + (right.g - left.g) * amount;
        result.b = left.b + (right.b - left.b) * amount;
        result.a = left.a + (right.a - left.a) * amount;
    }
    static Hermite(value1, tangent1, value2, tangent2, amount) {
        const squared = amount * amount;
        const cubed = amount * squared;
        const part1 = ((2.0 * cubed) - (3.0 * squared)) + 1.0;
        const part2 = (-2.0 * cubed) + (3.0 * squared);
        const part3 = (cubed - (2.0 * squared)) + amount;
        const part4 = cubed - squared;
        const r = (((value1.r * part1) + (value2.r * part2)) + (tangent1.r * part3)) + (tangent2.r * part4);
        const g = (((value1.g * part1) + (value2.g * part2)) + (tangent1.g * part3)) + (tangent2.g * part4);
        const b = (((value1.b * part1) + (value2.b * part2)) + (tangent1.b * part3)) + (tangent2.b * part4);
        const a = (((value1.a * part1) + (value2.a * part2)) + (tangent1.a * part3)) + (tangent2.a * part4);
        return new Color4(r, g, b, a);
    }
    static Hermite1stDerivative(value1, tangent1, value2, tangent2, time) {
        let result = new Color4();
        this.Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result);
        return result;
    }
    static Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result) {
        const t2 = time * time;
        result.r = (t2 - time) * 6 * value1.r + (3 * t2 - 4 * time + 1) * tangent1.r + (-t2 + time) * 6 * value2.r + (3 * t2 - 2 * time) * tangent2.r;
        result.g = (t2 - time) * 6 * value1.g + (3 * t2 - 4 * time + 1) * tangent1.g + (-t2 + time) * 6 * value2.g + (3 * t2 - 2 * time) * tangent2.g;
        result.b = (t2 - time) * 6 * value1.b + (3 * t2 - 4 * time + 1) * tangent1.b + (-t2 + time) * 6 * value2.b + (3 * t2 - 2 * time) * tangent2.b;
        result.a = (t2 - time) * 6 * value1.a + (3 * t2 - 4 * time + 1) * tangent1.a + (-t2 + time) * 6 * value2.a + (3 * t2 - 2 * time) * tangent2.a;
    }
    static FromColor3(color3, alpha = 1.0) {
        return new Color4(color3.r, color3.g, color3.b, alpha);
    }
    static FromArray(array, offset = 0) {
        return new Color4(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
    }
    static FromArrayToRef(array, offset = 0, result) {
        result.r = array[offset];
        result.g = array[offset + 1];
        result.b = array[offset + 2];
        result.a = array[offset + 3];
    }
    static FromInts(r, g, b, a) {
        return new Color4(r / 255.0, g / 255.0, b / 255.0, a / 255.0);
    }
    static CheckColors4(colors, count) {
        if (colors.length === count * 3) {
            var colors4 = [];
            for (var index = 0; index < colors.length; index += 3) {
                var newIndex = (index / 3) * 4;
                colors4[newIndex] = colors[index];
                colors4[newIndex + 1] = colors[index + 1];
                colors4[newIndex + 2] = colors[index + 2];
                colors4[newIndex + 3] = 1.0;
            }
            return colors4;
        }
        return colors;
    }
}
ArrayTools.BuildArray(3, Color3.Black);
ArrayTools.BuildArray(3, () => new Color4(0, 0, 0, 0));
RegisterClass("BABYLON.Color3", Color3);
RegisterClass("BABYLON.Color4", Color4);
class Logger {
    static _CheckLimit(message, limit) {
        let entry = Logger._LogLimitOutputs[message];
        if (!entry) {
            entry = { limit, current: 1 };
            Logger._LogLimitOutputs[message] = entry;
        }
        else {
            entry.current++;
        }
        return entry.current <= entry.limit;
    }
    static _GenerateLimitMessage(message, messageType) {
        let entry = Logger._LogLimitOutputs[message];
        if (!entry || !Logger.MessageLimitReached) {
            return;
        }
        if (entry.current === entry.limit) {
            switch (messageType) {
                case 0:
                    Logger.Log(Logger.MessageLimitReached.replace(/%LIMIT%/g, "" + entry.limit).replace(/%TYPE%/g, "log"));
                    break;
                case 1:
                    Logger.Warn(Logger.MessageLimitReached.replace(/%LIMIT%/g, "" + entry.limit).replace(/%TYPE%/g, "warning"));
                    break;
                case 2:
                    Logger.Error(Logger.MessageLimitReached.replace(/%LIMIT%/g, "" + entry.limit).replace(/%TYPE%/g, "error"));
                    break;
            }
        }
    }
    static _AddLogEntry(entry) {
        Logger._LogCache = entry + Logger._LogCache;
        if (Logger.OnNewCacheEntry) {
            Logger.OnNewCacheEntry(entry);
        }
    }
    static _FormatMessage(message) {
        var padStr = (i) => (i < 10) ? "0" + i : "" + i;
        var date = new Date();
        return "[" + padStr(date.getHours()) + ":" + padStr(date.getMinutes()) + ":" + padStr(date.getSeconds()) + "]: " + message;
    }
    static _LogDisabled(message, limit) {
    }
    static _LogEnabled(message, limit) {
        if (limit !== undefined && !Logger._CheckLimit(message, limit)) {
            return;
        }
        var formattedMessage = Logger._FormatMessage(message);
        console.log("BJS - " + formattedMessage);
        var entry = "<div style='color:white'>" + formattedMessage + "</div><br>";
        Logger._AddLogEntry(entry);
        Logger._GenerateLimitMessage(message, 0);
    }
    static _WarnDisabled(message, limit) {
    }
    static _WarnEnabled(message, limit) {
        if (limit !== undefined && !Logger._CheckLimit(message, limit)) {
            return;
        }
        var formattedMessage = Logger._FormatMessage(message);
        console.warn("BJS - " + formattedMessage);
        var entry = "<div style='color:orange'>" + message + "</div><br>";
        Logger._AddLogEntry(entry);
        Logger._GenerateLimitMessage(message, 1);
    }
    static _ErrorDisabled(message, limit) {
    }
    static _ErrorEnabled(message, limit) {
        if (limit !== undefined && !Logger._CheckLimit(message, limit)) {
            return;
        }
        var formattedMessage = Logger._FormatMessage(message);
        Logger.errorsCount++;
        console.error("BJS - " + formattedMessage);
        var entry = "<div style='color:red'>" + formattedMessage + "</div><br>";
        Logger._AddLogEntry(entry);
        Logger._GenerateLimitMessage(message, 2);
    }
    static get LogCache() {
        return Logger._LogCache;
    }
    static ClearLogCache() {
        Logger._LogCache = "";
        Logger._LogLimitOutputs = {};
        Logger.errorsCount = 0;
    }
    static set LogLevels(level) {
        if ((level & Logger.MessageLogLevel) === Logger.MessageLogLevel) {
            Logger.Log = Logger._LogEnabled;
        }
        else {
            Logger.Log = Logger._LogDisabled;
        }
        if ((level & Logger.WarningLogLevel) === Logger.WarningLogLevel) {
            Logger.Warn = Logger._WarnEnabled;
        }
        else {
            Logger.Warn = Logger._WarnDisabled;
        }
        if ((level & Logger.ErrorLogLevel) === Logger.ErrorLogLevel) {
            Logger.Error = Logger._ErrorEnabled;
        }
        else {
            Logger.Error = Logger._ErrorDisabled;
        }
    }
}
Logger.NoneLogLevel = 0;
Logger.MessageLogLevel = 1;
Logger.WarningLogLevel = 2;
Logger.ErrorLogLevel = 4;
Logger.AllLogLevel = 7;
Logger.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.";
Logger._LogCache = "";
Logger._LogLimitOutputs = {};
Logger.errorsCount = 0;
Logger.Log = Logger._LogEnabled;
Logger.Warn = Logger._WarnEnabled;
Logger.Error = Logger._ErrorEnabled;
class EngineStore {
    static get LastCreatedEngine() {
        if (this.Instances.length === 0) {
            return null;
        }
        return this.Instances[this.Instances.length - 1];
    }
    static get LastCreatedScene() {
        return this._LastCreatedScene;
    }
}
EngineStore.Instances = new Array();
EngineStore._LastCreatedScene = null;
EngineStore.UseFallbackTexture = true;
EngineStore.FallbackTexture = "";
const EndsWith = (str, suffix) => {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
};
const StartsWith = (str, suffix) => {
    if (!str) {
        return false;
    }
    return str.indexOf(suffix) === 0;
};
const EncodeArrayBufferToBase64 = (buffer) => {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    var bytes = ArrayBuffer.isView(buffer) ? new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) : new Uint8Array(buffer);
    while (i < bytes.length) {
        chr1 = bytes[i++];
        chr2 = i < bytes.length ? bytes[i++] : Number.NaN;
        chr3 = i < bytes.length ? bytes[i++] : Number.NaN;
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        }
        else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
            keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
};
const DecodeBase64ToString = (base64Data) => {
    return atob(base64Data);
};
const DecodeBase64ToBinary = (base64Data) => {
    const decodedString = DecodeBase64ToString(base64Data);
    const bufferLength = decodedString.length;
    const bufferView = new Uint8Array(new ArrayBuffer(bufferLength));
    for (let i = 0; i < bufferLength; i++) {
        bufferView[i] = decodedString.charCodeAt(i);
    }
    return bufferView.buffer;
};
const cloneValue = (source, destinationObject) => {
    if (!source) {
        return null;
    }
    if (source.getClassName && source.getClassName() === "Mesh") {
        return null;
    }
    if (source.getClassName && source.getClassName() === "SubMesh") {
        return source.clone(destinationObject);
    }
    else if (source.clone) {
        return source.clone();
    }
    return null;
};
function getAllPropertyNames(obj) {
    const props = [];
    do {
        Object.getOwnPropertyNames(obj).forEach(function (prop) {
            if (props.indexOf(prop) === -1) {
                props.push(prop);
            }
        });
    } while (obj = Object.getPrototypeOf(obj));
    return props;
}
class DeepCopier {
    static DeepCopy(source, destination, doNotCopyList, mustCopyList) {
        const proerties = getAllPropertyNames(source);
        for (var prop of proerties) {
            if (prop[0] === "_" && (!mustCopyList || mustCopyList.indexOf(prop) === -1)) {
                continue;
            }
            if (EndsWith(prop, "Observable")) {
                continue;
            }
            if (doNotCopyList && doNotCopyList.indexOf(prop) !== -1) {
                continue;
            }
            var sourceValue = source[prop];
            var typeOfSourceValue = typeof sourceValue;
            if (typeOfSourceValue === "function") {
                continue;
            }
            try {
                if (typeOfSourceValue === "object") {
                    if (sourceValue instanceof Array) {
                        destination[prop] = [];
                        if (sourceValue.length > 0) {
                            if (typeof sourceValue[0] == "object") {
                                for (var index = 0; index < sourceValue.length; index++) {
                                    var clonedValue = cloneValue(sourceValue[index], destination);
                                    if (destination[prop].indexOf(clonedValue) === -1) {
                                        destination[prop].push(clonedValue);
                                    }
                                }
                            }
                            else {
                                destination[prop] = sourceValue.slice(0);
                            }
                        }
                    }
                    else {
                        destination[prop] = cloneValue(sourceValue, destination);
                    }
                }
                else {
                    destination[prop] = sourceValue;
                }
            }
            catch (e) {
                Logger.Warn(e.message);
            }
        }
    }
}
function _WarnImport(name) {
    return `${name} needs to be imported before as it contains a side-effect required by your code.`;
}
function createXMLHttpRequest() {
    if (typeof _native !== 'undefined' && _native.XMLHttpRequest) {
        return new _native.XMLHttpRequest();
    }
    else {
        return new XMLHttpRequest();
    }
}
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
    get onprogress() {
        return this._xhr.onprogress;
    }
    set onprogress(value) {
        this._xhr.onprogress = value;
    }
    get readyState() {
        return this._xhr.readyState;
    }
    get status() {
        return this._xhr.status;
    }
    get statusText() {
        return this._xhr.statusText;
    }
    get response() {
        return this._xhr.response;
    }
    get responseURL() {
        return this._xhr.responseURL;
    }
    get responseText() {
        return this._xhr.responseText;
    }
    get responseType() {
        return this._xhr.responseType;
    }
    set responseType(value) {
        this._xhr.responseType = value;
    }
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
    abort() {
        this._xhr.abort();
    }
    send(body) {
        if (WebRequest.CustomRequestHeaders) {
            this._injectCustomRequestHeaders();
        }
        this._xhr.send(body);
    }
    open(method, url) {
        for (var update of WebRequest.CustomRequestModifiers) {
            update(this._xhr, url);
        }
        url = url.replace("file:http:", "http:");
        url = url.replace("file:https:", "https:");
        return this._xhr.open(method, url, true);
    }
    setRequestHeader(name, value) {
        this._xhr.setRequestHeader(name, value);
    }
    getResponseHeader(name) {
        return this._xhr.getResponseHeader(name);
    }
}
WebRequest.CustomRequestHeaders = {};
WebRequest.CustomRequestModifiers = new Array();
function IsWindowObjectExist() {
    return (typeof window) !== "undefined";
}
function IsNavigatorAvailable() {
    return (typeof navigator) !== "undefined";
}
function IsDocumentAvailable() {
    return (typeof document) !== "undefined";
}
function GetDOMTextContent(element) {
    var result = "";
    var child = element.firstChild;
    while (child) {
        if (child.nodeType === 3) {
            result += child.textContent;
        }
        child = (child.nextSibling);
    }
    return result;
}
const DomManagement = {
    IsWindowObjectExist,
    IsNavigatorAvailable,
    IsDocumentAvailable,
    GetDOMTextContent
};
class PrecisionDate {
    static get Now() {
        if (DomManagement.IsWindowObjectExist() && window.performance && window.performance.now) {
            return window.performance.now();
        }
        return Date.now();
    }
}
class FilesInputStore {
}
FilesInputStore.FilesToLoad = {};
class RetryStrategy {
    static ExponentialBackoff(maxRetries = 3, baseInterval = 500) {
        return (url, request, retryIndex) => {
            if (request.status !== 0 || retryIndex >= maxRetries || url.indexOf("file:") !== -1) {
                return -1;
            }
            return Math.pow(2, retryIndex) * baseInterval;
        };
    }
}
class BaseError extends Error {
}
BaseError._setPrototypeOf = Object.setPrototypeOf || ((o, proto) => { o.__proto__ = proto; return o; });
class ShaderCodeNode {
    constructor() {
        this.children = [];
    }
    isValid(preprocessors) {
        return true;
    }
    process(preprocessors, options) {
        let result = "";
        if (this.line) {
            let value = this.line;
            let processor = options.processor;
            if (processor) {
                if (processor.lineProcessor) {
                    value = processor.lineProcessor(value, options.isFragment, options.processingContext);
                }
                if (processor.attributeProcessor && StartsWith(this.line, "attribute")) {
                    value = processor.attributeProcessor(this.line, preprocessors, options.processingContext);
                }
                else if (processor.varyingProcessor && StartsWith(this.line, "varying")) {
                    value = processor.varyingProcessor(this.line, options.isFragment, preprocessors, options.processingContext);
                }
                else if (processor.uniformProcessor && processor.uniformRegexp && processor.uniformRegexp.test(this.line)) {
                    if (!options.lookForClosingBracketForUniformBuffer) {
                        value = processor.uniformProcessor(this.line, options.isFragment, preprocessors, options.processingContext);
                    }
                }
                else if (processor.uniformBufferProcessor && processor.uniformBufferRegexp && processor.uniformBufferRegexp.test(this.line)) {
                    if (!options.lookForClosingBracketForUniformBuffer) {
                        value = processor.uniformBufferProcessor(this.line, options.isFragment, options.processingContext);
                        options.lookForClosingBracketForUniformBuffer = true;
                    }
                }
                else if (processor.textureProcessor && processor.textureRegexp && processor.textureRegexp.test(this.line)) {
                    value = processor.textureProcessor(this.line, options.isFragment, preprocessors, options.processingContext);
                }
                else if ((processor.uniformProcessor || processor.uniformBufferProcessor) && StartsWith(this.line, "uniform") && !options.lookForClosingBracketForUniformBuffer) {
                    let regex = /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/;
                    if (regex.test(this.line)) {
                        if (processor.uniformProcessor) {
                            value = processor.uniformProcessor(this.line, options.isFragment, preprocessors, options.processingContext);
                        }
                    }
                    else {
                        if (processor.uniformBufferProcessor) {
                            value = processor.uniformBufferProcessor(this.line, options.isFragment, options.processingContext);
                            options.lookForClosingBracketForUniformBuffer = true;
                        }
                    }
                }
                if (options.lookForClosingBracketForUniformBuffer && this.line.indexOf("}") !== -1) {
                    options.lookForClosingBracketForUniformBuffer = false;
                    if (processor.endOfUniformBufferProcessor) {
                        value = processor.endOfUniformBufferProcessor(this.line, options.isFragment, options.processingContext);
                    }
                }
            }
            result += value + "\r\n";
        }
        this.children.forEach((child) => {
            result += child.process(preprocessors, options);
        });
        if (this.additionalDefineKey) {
            preprocessors[this.additionalDefineKey] = this.additionalDefineValue || "true";
        }
        return result;
    }
}
class ShaderCodeCursor {
    get currentLine() {
        return this._lines[this.lineIndex];
    }
    get canRead() {
        return this.lineIndex < this._lines.length - 1;
    }
    set lines(value) {
        this._lines = [];
        for (var line of value) {
            if (line[0] === "#") {
                this._lines.push(line);
                continue;
            }
            const split = line.split(";");
            for (var index = 0; index < split.length; index++) {
                let subLine = split[index];
                subLine = subLine.trim();
                if (!subLine) {
                    continue;
                }
                this._lines.push(subLine + (index !== split.length - 1 ? ";" : ""));
            }
        }
    }
}
class ShaderCodeConditionNode extends ShaderCodeNode {
    process(preprocessors, options) {
        for (var index = 0; index < this.children.length; index++) {
            let node = this.children[index];
            if (node.isValid(preprocessors)) {
                return node.process(preprocessors, options);
            }
        }
        return "";
    }
}
class ShaderCodeTestNode extends ShaderCodeNode {
    isValid(preprocessors) {
        return this.testExpression.isTrue(preprocessors);
    }
}
class ShaderDefineExpression {
    isTrue(preprocessors) {
        return true;
    }
    static postfixToInfix(postfix) {
        const stack = [];
        for (let c of postfix) {
            if (ShaderDefineExpression._OperatorPriority[c] === undefined) {
                stack.push(c);
            }
            else {
                const v1 = stack[stack.length - 1], v2 = stack[stack.length - 2];
                stack.length -= 2;
                stack.push(`(${v2}${c}${v1})`);
            }
        }
        return stack[stack.length - 1];
    }
    static infixToPostfix(infix) {
        const result = [];
        let stackIdx = -1;
        const pushOperand = () => {
            operand = operand.trim();
            if (operand !== '') {
                result.push(operand);
                operand = '';
            }
        };
        const push = (s) => {
            if (stackIdx < ShaderDefineExpression._Stack.length - 1) {
                ShaderDefineExpression._Stack[++stackIdx] = s;
            }
        };
        const peek = () => ShaderDefineExpression._Stack[stackIdx];
        const pop = () => stackIdx === -1 ? '!!INVALID EXPRESSION!!' : ShaderDefineExpression._Stack[stackIdx--];
        let idx = 0, operand = '';
        while (idx < infix.length) {
            const c = infix.charAt(idx), token = idx < infix.length - 1 ? infix.substr(idx, 2) : '';
            if (c === '(') {
                operand = '';
                push(c);
            }
            else if (c === ')') {
                pushOperand();
                while (stackIdx !== -1 && peek() !== '(') {
                    result.push(pop());
                }
                pop();
            }
            else if (ShaderDefineExpression._OperatorPriority[token] > 1) {
                pushOperand();
                while (stackIdx !== -1 && ShaderDefineExpression._OperatorPriority[peek()] >= ShaderDefineExpression._OperatorPriority[token]) {
                    result.push(pop());
                }
                push(token);
                idx++;
            }
            else {
                operand += c;
            }
            idx++;
        }
        pushOperand();
        while (stackIdx !== -1) {
            if (peek() === '(') {
                pop();
            }
            else {
                result.push(pop());
            }
        }
        return result;
    }
}
ShaderDefineExpression._OperatorPriority = {
    ")": 0,
    "(": 1,
    "||": 2,
    "&&": 3,
};
ShaderDefineExpression._Stack = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
class ShaderDefineIsDefinedOperator extends ShaderDefineExpression {
    constructor(define, not = false) {
        super();
        this.define = define;
        this.not = not;
    }
    isTrue(preprocessors) {
        let condition = preprocessors[this.define] !== undefined;
        if (this.not) {
            condition = !condition;
        }
        return condition;
    }
}
class ShaderDefineOrOperator extends ShaderDefineExpression {
    isTrue(preprocessors) {
        return this.leftOperand.isTrue(preprocessors) || this.rightOperand.isTrue(preprocessors);
    }
}
class ShaderDefineAndOperator extends ShaderDefineExpression {
    isTrue(preprocessors) {
        return this.leftOperand.isTrue(preprocessors) && this.rightOperand.isTrue(preprocessors);
    }
}
class ShaderDefineArithmeticOperator extends ShaderDefineExpression {
    constructor(define, operand, testValue) {
        super();
        this.define = define;
        this.operand = operand;
        this.testValue = testValue;
    }
    isTrue(preprocessors) {
        let value = preprocessors[this.define];
        if (value === undefined) {
            value = this.define;
        }
        let condition = false;
        let left = parseInt(value);
        let right = parseInt(this.testValue);
        switch (this.operand) {
            case ">":
                condition = left > right;
                break;
            case "<":
                condition = left < right;
                break;
            case "<=":
                condition = left <= right;
                break;
            case ">=":
                condition = left >= right;
                break;
            case "==":
                condition = left === right;
                break;
        }
        return condition;
    }
}
var ShaderLanguage;
(function (ShaderLanguage) {
    ShaderLanguage[ShaderLanguage["GLSL"] = 0] = "GLSL";
    ShaderLanguage[ShaderLanguage["WGSL"] = 1] = "WGSL";
})(ShaderLanguage || (ShaderLanguage = {}));
const regexSE = /defined\s*?\((.+?)\)/g;
const regexSERevert = /defined\s*?\[(.+?)\]/g;
class ShaderProcessor {
    static Initialize(options) {
        if (options.processor && options.processor.initializeShaders) {
            options.processor.initializeShaders(options.processingContext);
        }
    }
    static Process(sourceCode, options, callback, engine) {
        var _a;
        if ((_a = options.processor) === null || _a === void 0 ? void 0 : _a.preProcessShaderCode) {
            sourceCode = options.processor.preProcessShaderCode(sourceCode, options.isFragment);
        }
        this._ProcessIncludes(sourceCode, options, (codeWithIncludes) => {
            let migratedCode = this._ProcessShaderConversion(codeWithIncludes, options, engine);
            callback(migratedCode);
        });
    }
    static PreProcess(sourceCode, options, callback, engine) {
        var _a;
        if ((_a = options.processor) === null || _a === void 0 ? void 0 : _a.preProcessShaderCode) {
            sourceCode = options.processor.preProcessShaderCode(sourceCode, options.isFragment);
        }
        this._ProcessIncludes(sourceCode, options, (codeWithIncludes) => {
            let migratedCode = this._ApplyPreProcessing(codeWithIncludes, options, engine);
            callback(migratedCode);
        });
    }
    static Finalize(vertexCode, fragmentCode, options) {
        if (!options.processor || !options.processor.finalizeShaders) {
            return { vertexCode, fragmentCode };
        }
        return options.processor.finalizeShaders(vertexCode, fragmentCode, options.processingContext);
    }
    static _ProcessPrecision(source, options) {
        var _a;
        if ((_a = options.processor) === null || _a === void 0 ? void 0 : _a.noPrecision) {
            return source;
        }
        const shouldUseHighPrecisionShader = options.shouldUseHighPrecisionShader;
        if (source.indexOf("precision highp float") === -1) {
            if (!shouldUseHighPrecisionShader) {
                source = "precision mediump float;\n" + source;
            }
            else {
                source = "precision highp float;\n" + source;
            }
        }
        else {
            if (!shouldUseHighPrecisionShader) {
                source = source.replace("precision highp float", "precision mediump float");
            }
        }
        return source;
    }
    static _ExtractOperation(expression) {
        let regex = /defined\((.+)\)/;
        let match = regex.exec(expression);
        if (match && match.length) {
            return new ShaderDefineIsDefinedOperator(match[1].trim(), expression[0] === "!");
        }
        let operators = ["==", ">=", "<=", "<", ">"];
        let operator = "";
        let indexOperator = 0;
        for (operator of operators) {
            indexOperator = expression.indexOf(operator);
            if (indexOperator > -1) {
                break;
            }
        }
        if (indexOperator === -1) {
            return new ShaderDefineIsDefinedOperator(expression);
        }
        let define = expression.substring(0, indexOperator).trim();
        let value = expression.substring(indexOperator + operator.length).trim();
        return new ShaderDefineArithmeticOperator(define, operator, value);
    }
    static _BuildSubExpression(expression) {
        expression = expression.replace(regexSE, "defined[$1]");
        const postfix = ShaderDefineExpression.infixToPostfix(expression);
        const stack = [];
        for (let c of postfix) {
            if (c !== '||' && c !== '&&') {
                stack.push(c);
            }
            else if (stack.length >= 2) {
                let v1 = stack[stack.length - 1], v2 = stack[stack.length - 2];
                stack.length -= 2;
                let operator = c == '&&' ? new ShaderDefineAndOperator() : new ShaderDefineOrOperator();
                if (typeof (v1) === 'string') {
                    v1 = v1.replace(regexSERevert, "defined($1)");
                }
                if (typeof (v2) === 'string') {
                    v2 = v2.replace(regexSERevert, "defined($1)");
                }
                operator.leftOperand = typeof (v2) === 'string' ? this._ExtractOperation(v2) : v2;
                operator.rightOperand = typeof (v1) === 'string' ? this._ExtractOperation(v1) : v1;
                stack.push(operator);
            }
        }
        let result = stack[stack.length - 1];
        if (typeof (result) === 'string') {
            result = result.replace(regexSERevert, "defined($1)");
        }
        return typeof (result) === 'string' ? this._ExtractOperation(result) : result;
    }
    static _BuildExpression(line, start) {
        let node = new ShaderCodeTestNode();
        let command = line.substring(0, start);
        let expression = line.substring(start);
        expression = expression.substring(0, ((expression.indexOf("//") + 1) || (expression.length + 1)) - 1).trim();
        if (command === "#ifdef") {
            node.testExpression = new ShaderDefineIsDefinedOperator(expression);
        }
        else if (command === "#ifndef") {
            node.testExpression = new ShaderDefineIsDefinedOperator(expression, true);
        }
        else {
            node.testExpression = this._BuildSubExpression(expression);
        }
        return node;
    }
    static _MoveCursorWithinIf(cursor, rootNode, ifNode) {
        let line = cursor.currentLine;
        while (this._MoveCursor(cursor, ifNode)) {
            line = cursor.currentLine;
            let first5 = line.substring(0, 5).toLowerCase();
            if (first5 === "#else") {
                let elseNode = new ShaderCodeNode();
                rootNode.children.push(elseNode);
                this._MoveCursor(cursor, elseNode);
                return;
            }
            else if (first5 === "#elif") {
                let elifNode = this._BuildExpression(line, 5);
                rootNode.children.push(elifNode);
                ifNode = elifNode;
            }
        }
    }
    static _MoveCursor(cursor, rootNode) {
        while (cursor.canRead) {
            cursor.lineIndex++;
            let line = cursor.currentLine;
            const keywords = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
            const matches = keywords.exec(line);
            if (matches && matches.length) {
                let keyword = matches[0];
                switch (keyword) {
                    case "#ifdef": {
                        let newRootNode = new ShaderCodeConditionNode();
                        rootNode.children.push(newRootNode);
                        let ifNode = this._BuildExpression(line, 6);
                        newRootNode.children.push(ifNode);
                        this._MoveCursorWithinIf(cursor, newRootNode, ifNode);
                        break;
                    }
                    case "#else":
                    case "#elif":
                        return true;
                    case "#endif":
                        return false;
                    case "#ifndef": {
                        let newRootNode = new ShaderCodeConditionNode();
                        rootNode.children.push(newRootNode);
                        let ifNode = this._BuildExpression(line, 7);
                        newRootNode.children.push(ifNode);
                        this._MoveCursorWithinIf(cursor, newRootNode, ifNode);
                        break;
                    }
                    case "#if": {
                        let newRootNode = new ShaderCodeConditionNode();
                        let ifNode = this._BuildExpression(line, 3);
                        rootNode.children.push(newRootNode);
                        newRootNode.children.push(ifNode);
                        this._MoveCursorWithinIf(cursor, newRootNode, ifNode);
                        break;
                    }
                }
            }
            else {
                let newNode = new ShaderCodeNode();
                newNode.line = line;
                rootNode.children.push(newNode);
                if (line[0] === "#" && line[1] === "d") {
                    let split = line.replace(";", "").split(" ");
                    newNode.additionalDefineKey = split[1];
                    if (split.length === 3) {
                        newNode.additionalDefineValue = split[2];
                    }
                }
            }
        }
        return false;
    }
    static _EvaluatePreProcessors(sourceCode, preprocessors, options) {
        const rootNode = new ShaderCodeNode();
        let cursor = new ShaderCodeCursor();
        cursor.lineIndex = -1;
        cursor.lines = sourceCode.split("\n");
        this._MoveCursor(cursor, rootNode);
        return rootNode.process(preprocessors, options);
    }
    static _PreparePreProcessors(options, engine) {
        var _a;
        let defines = options.defines;
        let preprocessors = {};
        for (var define of defines) {
            let keyValue = define.replace("#define", "").replace(";", "").trim();
            let split = keyValue.split(" ");
            preprocessors[split[0]] = split.length > 1 ? split[1] : "";
        }
        if (((_a = options.processor) === null || _a === void 0 ? void 0 : _a.shaderLanguage) === ShaderLanguage.GLSL) {
            preprocessors["GL_ES"] = "true";
        }
        preprocessors["__VERSION__"] = options.version;
        preprocessors[options.platformName] = "true";
        engine._getGlobalDefines(preprocessors);
        return preprocessors;
    }
    static _ProcessShaderConversion(sourceCode, options, engine) {
        var preparedSourceCode = this._ProcessPrecision(sourceCode, options);
        if (!options.processor) {
            return preparedSourceCode;
        }
        if (options.processor.shaderLanguage === ShaderLanguage.GLSL && preparedSourceCode.indexOf("#version 3") !== -1) {
            return preparedSourceCode.replace("#version 300 es", "");
        }
        let defines = options.defines;
        let preprocessors = this._PreparePreProcessors(options, engine);
        if (options.processor.preProcessor) {
            preparedSourceCode = options.processor.preProcessor(preparedSourceCode, defines, options.isFragment, options.processingContext);
        }
        preparedSourceCode = this._EvaluatePreProcessors(preparedSourceCode, preprocessors, options);
        if (options.processor.postProcessor) {
            preparedSourceCode = options.processor.postProcessor(preparedSourceCode, defines, options.isFragment, options.processingContext, engine);
        }
        if (engine._features.needShaderCodeInlining) {
            preparedSourceCode = engine.inlineShaderCode(preparedSourceCode);
        }
        return preparedSourceCode;
    }
    static _ApplyPreProcessing(sourceCode, options, engine) {
        var _a, _b;
        let preparedSourceCode = sourceCode;
        const defines = options.defines;
        let preprocessors = this._PreparePreProcessors(options, engine);
        if ((_a = options.processor) === null || _a === void 0 ? void 0 : _a.preProcessor) {
            preparedSourceCode = options.processor.preProcessor(preparedSourceCode, defines, options.isFragment, options.processingContext);
        }
        preparedSourceCode = this._EvaluatePreProcessors(preparedSourceCode, preprocessors, options);
        if ((_b = options.processor) === null || _b === void 0 ? void 0 : _b.postProcessor) {
            preparedSourceCode = options.processor.postProcessor(preparedSourceCode, defines, options.isFragment, options.processingContext, engine);
        }
        if (engine._features.needShaderCodeInlining) {
            preparedSourceCode = engine.inlineShaderCode(preparedSourceCode);
        }
        return preparedSourceCode;
    }
    static _ProcessIncludes(sourceCode, options, callback) {
        const regexShaderInclude = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g;
        var match = regexShaderInclude.exec(sourceCode);
        var returnValue = new String(sourceCode);
        var keepProcessing = false;
        while (match != null) {
            var includeFile = match[1];
            if (includeFile.indexOf("__decl__") !== -1) {
                includeFile = includeFile.replace(/__decl__/, "");
                if (options.supportsUniformBuffers) {
                    includeFile = includeFile.replace(/Vertex/, "Ubo");
                    includeFile = includeFile.replace(/Fragment/, "Ubo");
                }
                includeFile = includeFile + "Declaration";
            }
            if (options.includesShadersStore[includeFile]) {
                var includeContent = options.includesShadersStore[includeFile];
                if (match[2]) {
                    var splits = match[3].split(",");
                    for (var index = 0; index < splits.length; index += 2) {
                        var source = new RegExp(splits[index], "g");
                        var dest = splits[index + 1];
                        includeContent = includeContent.replace(source, dest);
                    }
                }
                if (match[4]) {
                    var indexString = match[5];
                    if (indexString.indexOf("..") !== -1) {
                        var indexSplits = indexString.split("..");
                        var minIndex = parseInt(indexSplits[0]);
                        var maxIndex = parseInt(indexSplits[1]);
                        var sourceIncludeContent = includeContent.slice(0);
                        includeContent = "";
                        if (isNaN(maxIndex)) {
                            maxIndex = options.indexParameters[indexSplits[1]];
                        }
                        for (var i = minIndex; i < maxIndex; i++) {
                            if (!options.supportsUniformBuffers) {
                                sourceIncludeContent = sourceIncludeContent.replace(/light\{X\}.(\w*)/g, (str, p1) => {
                                    return p1 + "{X}";
                                });
                            }
                            includeContent += sourceIncludeContent.replace(/\{X\}/g, i.toString()) + "\n";
                        }
                    }
                    else {
                        if (!options.supportsUniformBuffers) {
                            includeContent = includeContent.replace(/light\{X\}.(\w*)/g, (str, p1) => {
                                return p1 + "{X}";
                            });
                        }
                        includeContent = includeContent.replace(/\{X\}/g, indexString);
                    }
                }
                returnValue = returnValue.replace(match[0], includeContent);
                keepProcessing =
                    keepProcessing ||
                        includeContent.indexOf("#include<") >= 0 ||
                        includeContent.indexOf("#include <") >= 0;
            }
            else {
                var includeShaderUrl = options.shadersRepository + "ShadersInclude/" + includeFile + ".fx";
                ShaderProcessor._FileToolsLoadFile(includeShaderUrl, (fileContent) => {
                    options.includesShadersStore[includeFile] = fileContent;
                    this._ProcessIncludes(returnValue, options, callback);
                });
                return;
            }
            match = regexShaderInclude.exec(sourceCode);
        }
        if (keepProcessing) {
            this._ProcessIncludes(returnValue.toString(), options, callback);
        }
        else {
            callback(returnValue);
        }
    }
    static _FileToolsLoadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError) {
        throw _WarnImport("FileTools");
    }
}
class ShaderStore {
    static GetShadersRepository(shaderLanguage = ShaderLanguage.GLSL) {
        return shaderLanguage === ShaderLanguage.GLSL ? ShaderStore.ShadersRepository : ShaderStore.ShadersRepositoryWGSL;
    }
    static GetShadersStore(shaderLanguage = ShaderLanguage.GLSL) {
        return shaderLanguage === ShaderLanguage.GLSL ? ShaderStore.ShadersStore : ShaderStore.ShadersStoreWGSL;
    }
    static GetIncludesShadersStore(shaderLanguage = ShaderLanguage.GLSL) {
        return shaderLanguage === ShaderLanguage.GLSL ? ShaderStore.IncludesShadersStore : ShaderStore.IncludesShadersStoreWGSL;
    }
}
ShaderStore.ShadersRepository = "src/Shaders/";
ShaderStore.ShadersStore = {};
ShaderStore.IncludesShadersStore = {};
ShaderStore.ShadersRepositoryWGSL = "src/ShadersWGSL/";
ShaderStore.ShadersStoreWGSL = {};
ShaderStore.IncludesShadersStoreWGSL = {};
class Effect {
    constructor(baseName, attributesNamesOrOptions, uniformsNamesOrEngine, samplers = null, engine, defines = null, fallbacks = null, onCompiled = null, onError = null, indexParameters, key = "", shaderLanguage = ShaderLanguage.GLSL) {
        var _a, _b;
        this.name = null;
        this.defines = "";
        this.onCompiled = null;
        this.onError = null;
        this.onBind = null;
        this.uniqueId = 0;
        this.onCompileObservable = new Observable();
        this.onErrorObservable = new Observable();
        this._onBindObservable = null;
        this._wasPreviouslyReady = false;
        this._bonesComputationForcedToCPU = false;
        this._uniformBuffersNames = {};
        this._multiTarget = false;
        this._samplers = {};
        this._isReady = false;
        this._compilationError = "";
        this._allFallbacksProcessed = false;
        this._uniforms = {};
        this._key = "";
        this._fallbacks = null;
        this._vertexSourceCodeOverride = "";
        this._fragmentSourceCodeOverride = "";
        this._transformFeedbackVaryings = null;
        this._pipelineContext = null;
        this._vertexSourceCode = "";
        this._fragmentSourceCode = "";
        this._rawVertexSourceCode = "";
        this._rawFragmentSourceCode = "";
        this.name = baseName;
        this._key = key;
        let processFinalCode = null;
        if (attributesNamesOrOptions.attributes) {
            var options = attributesNamesOrOptions;
            this._engine = uniformsNamesOrEngine;
            this._attributesNames = options.attributes;
            this._uniformsNames = options.uniformsNames.concat(options.samplers);
            this._samplerList = options.samplers.slice();
            this.defines = options.defines;
            this.onError = options.onError;
            this.onCompiled = options.onCompiled;
            this._fallbacks = options.fallbacks;
            this._indexParameters = options.indexParameters;
            this._transformFeedbackVaryings = options.transformFeedbackVaryings || null;
            this._multiTarget = !!options.multiTarget;
            this._shaderLanguage = (_a = options.shaderLanguage) !== null && _a !== void 0 ? _a : ShaderLanguage.GLSL;
            if (options.uniformBuffersNames) {
                this._uniformBuffersNamesList = options.uniformBuffersNames.slice();
                for (var i = 0; i < options.uniformBuffersNames.length; i++) {
                    this._uniformBuffersNames[options.uniformBuffersNames[i]] = i;
                }
            }
            processFinalCode = (_b = options.processFinalCode) !== null && _b !== void 0 ? _b : null;
        }
        else {
            this._engine = engine;
            this.defines = (defines == null ? "" : defines);
            this._uniformsNames = uniformsNamesOrEngine.concat(samplers);
            this._samplerList = samplers ? samplers.slice() : [];
            this._attributesNames = attributesNamesOrOptions;
            this._uniformBuffersNamesList = [];
            this._shaderLanguage = shaderLanguage;
            this.onError = onError;
            this.onCompiled = onCompiled;
            this._indexParameters = indexParameters;
            this._fallbacks = fallbacks;
        }
        this._attributeLocationByName = {};
        this.uniqueId = Effect._uniqueIdSeed++;
        var vertexSource;
        var fragmentSource;
        let hostDocument = IsWindowObjectExist() ? this._engine.getHostDocument() : null;
        if (baseName.vertexSource) {
            vertexSource = "source:" + baseName.vertexSource;
        }
        else if (baseName.vertexElement) {
            vertexSource = hostDocument ? hostDocument.getElementById(baseName.vertexElement) : null;
            if (!vertexSource) {
                vertexSource = baseName.vertexElement;
            }
        }
        else {
            vertexSource = baseName.vertex || baseName;
        }
        if (baseName.fragmentSource) {
            fragmentSource = "source:" + baseName.fragmentSource;
        }
        else if (baseName.fragmentElement) {
            fragmentSource = hostDocument ? hostDocument.getElementById(baseName.fragmentElement) : null;
            if (!fragmentSource) {
                fragmentSource = baseName.fragmentElement;
            }
        }
        else {
            fragmentSource = baseName.fragment || baseName;
        }
        this._processingContext = this._engine._getShaderProcessingContext(this._shaderLanguage);
        const processorOptions = {
            defines: this.defines.split("\n"),
            indexParameters: this._indexParameters,
            isFragment: false,
            shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
            processor: this._engine._getShaderProcessor(this._shaderLanguage),
            supportsUniformBuffers: this._engine.supportsUniformBuffers,
            shadersRepository: ShaderStore.GetShadersRepository(this._shaderLanguage),
            includesShadersStore: ShaderStore.GetIncludesShadersStore(this._shaderLanguage),
            version: (this._engine.version * 100).toString(),
            platformName: this._engine.shaderPlatformName,
            processingContext: this._processingContext,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            useReverseDepthBuffer: this._engine.useReverseDepthBuffer,
        };
        let shaderCodes = [undefined, undefined];
        let shadersLoaded = () => {
            if (shaderCodes[0] && shaderCodes[1]) {
                processorOptions.isFragment = true;
                let [migratedVertexCode, fragmentCode] = shaderCodes;
                ShaderProcessor.Process(fragmentCode, processorOptions, (migratedFragmentCode) => {
                    if (processFinalCode) {
                        migratedFragmentCode = processFinalCode("fragment", migratedFragmentCode);
                    }
                    const finalShaders = ShaderProcessor.Finalize(migratedVertexCode, migratedFragmentCode, processorOptions);
                    this._useFinalCode(finalShaders.vertexCode, finalShaders.fragmentCode, baseName);
                }, this._engine);
            }
        };
        this._loadShader(vertexSource, "Vertex", "", (vertexCode) => {
            ShaderProcessor.Initialize(processorOptions);
            ShaderProcessor.Process(vertexCode, processorOptions, (migratedVertexCode) => {
                this._rawVertexSourceCode = vertexCode;
                if (processFinalCode) {
                    migratedVertexCode = processFinalCode("vertex", migratedVertexCode);
                }
                shaderCodes[0] = migratedVertexCode;
                shadersLoaded();
            }, this._engine);
        });
        this._loadShader(fragmentSource, "Fragment", "Pixel", (fragmentCode) => {
            this._rawFragmentSourceCode = fragmentCode;
            shaderCodes[1] = fragmentCode;
            shadersLoaded();
        });
    }
    static get ShadersRepository() {
        return ShaderStore.ShadersRepository;
    }
    static set ShadersRepository(repo) {
        ShaderStore.ShadersRepository = repo;
    }
    get onBindObservable() {
        if (!this._onBindObservable) {
            this._onBindObservable = new Observable();
        }
        return this._onBindObservable;
    }
    _useFinalCode(migratedVertexCode, migratedFragmentCode, baseName) {
        if (baseName) {
            var vertex = baseName.vertexElement || baseName.vertex || baseName.spectorName || baseName;
            var fragment = baseName.fragmentElement || baseName.fragment || baseName.spectorName || baseName;
            this._vertexSourceCode = (this._shaderLanguage === ShaderLanguage.WGSL ? "//" : "") + "#define SHADER_NAME vertex:" + vertex + "\n" + migratedVertexCode;
            this._fragmentSourceCode = (this._shaderLanguage === ShaderLanguage.WGSL ? "//" : "") + "#define SHADER_NAME fragment:" + fragment + "\n" + migratedFragmentCode;
        }
        else {
            this._vertexSourceCode = migratedVertexCode;
            this._fragmentSourceCode = migratedFragmentCode;
        }
        this._prepareEffect();
    }
    get key() {
        return this._key;
    }
    isReady() {
        try {
            return this._isReadyInternal();
        }
        catch {
            return false;
        }
    }
    _isReadyInternal() {
        if (this._isReady) {
            return true;
        }
        if (this._pipelineContext) {
            return this._pipelineContext.isReady;
        }
        return false;
    }
    getEngine() {
        return this._engine;
    }
    getPipelineContext() {
        return this._pipelineContext;
    }
    getAttributesNames() {
        return this._attributesNames;
    }
    getAttributeLocation(index) {
        return this._attributes[index];
    }
    getAttributeLocationByName(name) {
        return this._attributeLocationByName[name];
    }
    getAttributesCount() {
        return this._attributes.length;
    }
    getUniformIndex(uniformName) {
        return this._uniformsNames.indexOf(uniformName);
    }
    getUniform(uniformName) {
        return this._uniforms[uniformName];
    }
    getSamplers() {
        return this._samplerList;
    }
    getUniformNames() {
        return this._uniformsNames;
    }
    getUniformBuffersNames() {
        return this._uniformBuffersNamesList;
    }
    getIndexParameters() {
        return this._indexParameters;
    }
    getCompilationError() {
        return this._compilationError;
    }
    allFallbacksProcessed() {
        return this._allFallbacksProcessed;
    }
    executeWhenCompiled(func) {
        if (this.isReady()) {
            func(this);
            return;
        }
        this.onCompileObservable.add((effect) => {
            func(effect);
        });
        if (!this._pipelineContext || this._pipelineContext.isAsync) {
            setTimeout(() => {
                this._checkIsReady(null);
            }, 16);
        }
    }
    _checkIsReady(previousPipelineContext) {
        try {
            if (this._isReadyInternal()) {
                return;
            }
        }
        catch (e) {
            this._processCompilationErrors(e, previousPipelineContext);
            return;
        }
        setTimeout(() => {
            this._checkIsReady(previousPipelineContext);
        }, 16);
    }
    _loadShader(shader, key, optionalKey, callback) {
        if (typeof (HTMLElement) !== "undefined") {
            if (shader instanceof HTMLElement) {
                var shaderCode = GetDOMTextContent(shader);
                callback(shaderCode);
                return;
            }
        }
        if (shader.substr(0, 7) === "source:") {
            callback(shader.substr(7));
            return;
        }
        if (shader.substr(0, 7) === "base64:") {
            var shaderBinary = window.atob(shader.substr(7));
            callback(shaderBinary);
            return;
        }
        const shaderStore = ShaderStore.GetShadersStore(this._shaderLanguage);
        if (shaderStore[shader + key + "Shader"]) {
            callback(shaderStore[shader + key + "Shader"]);
            return;
        }
        if (optionalKey && shaderStore[shader + optionalKey + "Shader"]) {
            callback(shaderStore[shader + optionalKey + "Shader"]);
            return;
        }
        var shaderUrl;
        if (shader[0] === "." || shader[0] === "/" || shader.indexOf("http") > -1) {
            shaderUrl = shader;
        }
        else {
            shaderUrl = ShaderStore.GetShadersRepository(this._shaderLanguage) + shader;
        }
        this._engine._loadFile(shaderUrl + "." + key.toLowerCase() + ".fx", callback);
    }
    get vertexSourceCode() {
        var _a, _b;
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : ((_b = (_a = this._pipelineContext) === null || _a === void 0 ? void 0 : _a._getVertexShaderCode()) !== null && _b !== void 0 ? _b : this._vertexSourceCode);
    }
    get fragmentSourceCode() {
        var _a, _b;
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : ((_b = (_a = this._pipelineContext) === null || _a === void 0 ? void 0 : _a._getFragmentShaderCode()) !== null && _b !== void 0 ? _b : this._fragmentSourceCode);
    }
    get rawVertexSourceCode() {
        return this._rawVertexSourceCode;
    }
    get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode;
    }
    _rebuildProgram(vertexSourceCode, fragmentSourceCode, onCompiled, onError) {
        this._isReady = false;
        this._vertexSourceCodeOverride = vertexSourceCode;
        this._fragmentSourceCodeOverride = fragmentSourceCode;
        this.onError = (effect, error) => {
            if (onError) {
                onError(error);
            }
        };
        this.onCompiled = () => {
            var scenes = this.getEngine().scenes;
            if (scenes) {
                for (var i = 0; i < scenes.length; i++) {
                    scenes[i].markAllMaterialsAsDirty(Constants.MATERIAL_AllDirtyFlag);
                }
            }
            this._pipelineContext._handlesSpectorRebuildCallback(onCompiled);
        };
        this._fallbacks = null;
        this._prepareEffect();
    }
    _prepareEffect() {
        let attributesNames = this._attributesNames;
        let defines = this.defines;
        var previousPipelineContext = this._pipelineContext;
        this._isReady = false;
        try {
            let engine = this._engine;
            this._pipelineContext = engine.createPipelineContext(this._processingContext);
            this._pipelineContext._name = this._key;
            let rebuildRebind = this._rebuildProgram.bind(this);
            if (this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride) {
                engine._preparePipelineContext(this._pipelineContext, this._vertexSourceCodeOverride, this._fragmentSourceCodeOverride, true, this._rawVertexSourceCode, this._rawFragmentSourceCode, rebuildRebind, null, this._transformFeedbackVaryings, this._key);
            }
            else {
                engine._preparePipelineContext(this._pipelineContext, this._vertexSourceCode, this._fragmentSourceCode, false, this._rawVertexSourceCode, this._rawFragmentSourceCode, rebuildRebind, defines, this._transformFeedbackVaryings, this._key);
            }
            engine._executeWhenRenderingStateIsCompiled(this._pipelineContext, () => {
                this._attributes = [];
                this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, attributesNames, this._attributes);
                if (attributesNames) {
                    for (let i = 0; i < attributesNames.length; i++) {
                        const name = attributesNames[i];
                        this._attributeLocationByName[name] = this._attributes[i];
                    }
                }
                engine.bindSamplers(this);
                this._compilationError = "";
                this._isReady = true;
                if (this.onCompiled) {
                    this.onCompiled(this);
                }
                this.onCompileObservable.notifyObservers(this);
                this.onCompileObservable.clear();
                if (this._fallbacks) {
                    this._fallbacks.unBindMesh();
                }
                if (previousPipelineContext) {
                    this.getEngine()._deletePipelineContext(previousPipelineContext);
                }
            });
            if (this._pipelineContext.isAsync) {
                this._checkIsReady(previousPipelineContext);
            }
        }
        catch (e) {
            this._processCompilationErrors(e, previousPipelineContext);
        }
    }
    _getShaderCodeAndErrorLine(code, error, isFragment) {
        const regexp = isFragment ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let errorLine = null;
        if (error && code) {
            const res = error.match(regexp);
            if (res && res.length === 2) {
                const lineNumber = parseInt(res[1]);
                const lines = code.split("\n", -1);
                if (lines.length >= lineNumber) {
                    errorLine = `Offending line [${lineNumber}] in ${isFragment ? "fragment" : "vertex"} code: ${lines[lineNumber - 1]}`;
                }
            }
        }
        return [code, errorLine];
    }
    _processCompilationErrors(e, previousPipelineContext = null) {
        var _a, _b, _c;
        this._compilationError = e.message;
        let attributesNames = this._attributesNames;
        let fallbacks = this._fallbacks;
        Logger.Error("Unable to compile effect:");
        Logger.Error("Uniforms: " + this._uniformsNames.map(function (uniform) {
            return " " + uniform;
        }));
        Logger.Error("Attributes: " + attributesNames.map(function (attribute) {
            return " " + attribute;
        }));
        Logger.Error("Defines:\r\n" + this.defines);
        if (Effect.LogShaderCodeOnCompilationError) {
            let lineErrorVertex = null, lineErrorFragment = null, code = null;
            if ((_a = this._pipelineContext) === null || _a === void 0 ? void 0 : _a._getVertexShaderCode()) {
                [code, lineErrorVertex] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, false);
                if (code) {
                    Logger.Error("Vertex code:");
                    Logger.Error(code);
                }
            }
            if ((_b = this._pipelineContext) === null || _b === void 0 ? void 0 : _b._getFragmentShaderCode()) {
                [code, lineErrorFragment] = this._getShaderCodeAndErrorLine((_c = this._pipelineContext) === null || _c === void 0 ? void 0 : _c._getFragmentShaderCode(), this._compilationError, true);
                if (code) {
                    Logger.Error("Fragment code:");
                    Logger.Error(code);
                }
            }
            if (lineErrorVertex) {
                Logger.Error(lineErrorVertex);
            }
            if (lineErrorFragment) {
                Logger.Error(lineErrorFragment);
            }
        }
        Logger.Error("Error: " + this._compilationError);
        if (previousPipelineContext) {
            this._pipelineContext = previousPipelineContext;
            this._isReady = true;
            if (this.onError) {
                this.onError(this, this._compilationError);
            }
            this.onErrorObservable.notifyObservers(this);
        }
        if (fallbacks) {
            this._pipelineContext = null;
            if (fallbacks.hasMoreFallbacks) {
                this._allFallbacksProcessed = false;
                Logger.Error("Trying next fallback.");
                this.defines = fallbacks.reduce(this.defines, this);
                this._prepareEffect();
            }
            else {
                this._allFallbacksProcessed = true;
                if (this.onError) {
                    this.onError(this, this._compilationError);
                }
                this.onErrorObservable.notifyObservers(this);
                this.onErrorObservable.clear();
                if (this._fallbacks) {
                    this._fallbacks.unBindMesh();
                }
            }
        }
        else {
            this._allFallbacksProcessed = true;
        }
    }
    get isSupported() {
        return this._compilationError === "";
    }
    _bindTexture(channel, texture) {
        this._engine._bindTexture(this._samplers[channel], texture, channel);
    }
    setTexture(channel, texture) {
        this._engine.setTexture(this._samplers[channel], this._uniforms[channel], texture, channel);
    }
    setDepthStencilTexture(channel, texture) {
        this._engine.setDepthStencilTexture(this._samplers[channel], this._uniforms[channel], texture, channel);
    }
    setTextureArray(channel, textures) {
        let exName = channel + "Ex";
        if (this._samplerList.indexOf(exName + "0") === -1) {
            const initialPos = this._samplerList.indexOf(channel);
            for (var index = 1; index < textures.length; index++) {
                const currentExName = exName + (index - 1).toString();
                this._samplerList.splice(initialPos + index, 0, currentExName);
            }
            let channelIndex = 0;
            for (var key of this._samplerList) {
                this._samplers[key] = channelIndex;
                channelIndex += 1;
            }
        }
        this._engine.setTextureArray(this._samplers[channel], this._uniforms[channel], textures, channel);
    }
    setTextureFromPostProcess(channel, postProcess) {
        this._engine.setTextureFromPostProcess(this._samplers[channel], postProcess, channel);
    }
    setTextureFromPostProcessOutput(channel, postProcess) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[channel], postProcess, channel);
    }
    bindUniformBuffer(buffer, name) {
        let bufferName = this._uniformBuffersNames[name];
        if (bufferName === undefined || (Effect._baseCache[bufferName] === buffer && this._engine._features.useUBOBindingCache)) {
            return;
        }
        Effect._baseCache[bufferName] = buffer;
        this._engine.bindUniformBufferBase(buffer, bufferName, name);
    }
    bindUniformBlock(blockName, index) {
        this._engine.bindUniformBlock(this._pipelineContext, blockName, index);
    }
    setInt(uniformName, value) {
        this._pipelineContext.setInt(uniformName, value);
        return this;
    }
    setInt2(uniformName, x, y) {
        this._pipelineContext.setInt2(uniformName, x, y);
        return this;
    }
    setInt3(uniformName, x, y, z) {
        this._pipelineContext.setInt3(uniformName, x, y, z);
        return this;
    }
    setInt4(uniformName, x, y, z, w) {
        this._pipelineContext.setInt4(uniformName, x, y, z, w);
        return this;
    }
    setIntArray(uniformName, array) {
        this._pipelineContext.setIntArray(uniformName, array);
        return this;
    }
    setIntArray2(uniformName, array) {
        this._pipelineContext.setIntArray2(uniformName, array);
        return this;
    }
    setIntArray3(uniformName, array) {
        this._pipelineContext.setIntArray3(uniformName, array);
        return this;
    }
    setIntArray4(uniformName, array) {
        this._pipelineContext.setIntArray4(uniformName, array);
        return this;
    }
    setFloatArray(uniformName, array) {
        this._pipelineContext.setArray(uniformName, array);
        return this;
    }
    setFloatArray2(uniformName, array) {
        this._pipelineContext.setArray2(uniformName, array);
        return this;
    }
    setFloatArray3(uniformName, array) {
        this._pipelineContext.setArray3(uniformName, array);
        return this;
    }
    setFloatArray4(uniformName, array) {
        this._pipelineContext.setArray4(uniformName, array);
        return this;
    }
    setArray(uniformName, array) {
        this._pipelineContext.setArray(uniformName, array);
        return this;
    }
    setArray2(uniformName, array) {
        this._pipelineContext.setArray2(uniformName, array);
        return this;
    }
    setArray3(uniformName, array) {
        this._pipelineContext.setArray3(uniformName, array);
        return this;
    }
    setArray4(uniformName, array) {
        this._pipelineContext.setArray4(uniformName, array);
        return this;
    }
    setMatrices(uniformName, matrices) {
        this._pipelineContext.setMatrices(uniformName, matrices);
        return this;
    }
    setMatrix(uniformName, matrix) {
        this._pipelineContext.setMatrix(uniformName, matrix);
        return this;
    }
    setMatrix3x3(uniformName, matrix) {
        this._pipelineContext.setMatrix3x3(uniformName, matrix);
        return this;
    }
    setMatrix2x2(uniformName, matrix) {
        this._pipelineContext.setMatrix2x2(uniformName, matrix);
        return this;
    }
    setFloat(uniformName, value) {
        this._pipelineContext.setFloat(uniformName, value);
        return this;
    }
    setBool(uniformName, bool) {
        this._pipelineContext.setInt(uniformName, bool ? 1 : 0);
        return this;
    }
    setVector2(uniformName, vector2) {
        this._pipelineContext.setVector2(uniformName, vector2);
        return this;
    }
    setFloat2(uniformName, x, y) {
        this._pipelineContext.setFloat2(uniformName, x, y);
        return this;
    }
    setVector3(uniformName, vector3) {
        this._pipelineContext.setVector3(uniformName, vector3);
        return this;
    }
    setFloat3(uniformName, x, y, z) {
        this._pipelineContext.setFloat3(uniformName, x, y, z);
        return this;
    }
    setVector4(uniformName, vector4) {
        this._pipelineContext.setVector4(uniformName, vector4);
        return this;
    }
    setFloat4(uniformName, x, y, z, w) {
        this._pipelineContext.setFloat4(uniformName, x, y, z, w);
        return this;
    }
    setColor3(uniformName, color3) {
        this._pipelineContext.setColor3(uniformName, color3);
        return this;
    }
    setColor4(uniformName, color3, alpha) {
        this._pipelineContext.setColor4(uniformName, color3, alpha);
        return this;
    }
    setDirectColor4(uniformName, color4) {
        this._pipelineContext.setDirectColor4(uniformName, color4);
        return this;
    }
    dispose() {
        if (this._pipelineContext) {
            this._pipelineContext.dispose();
        }
        this._engine._releaseEffect(this);
    }
    static RegisterShader(name, pixelShader, vertexShader, shaderLanguage = ShaderLanguage.GLSL) {
        if (pixelShader) {
            ShaderStore.GetShadersStore(shaderLanguage)[`${name}PixelShader`] = pixelShader;
        }
        if (vertexShader) {
            ShaderStore.GetShadersStore(shaderLanguage)[`${name}VertexShader`] = vertexShader;
        }
    }
    static ResetCache() {
        Effect._baseCache = {};
    }
}
Effect.LogShaderCodeOnCompilationError = true;
Effect._uniqueIdSeed = 0;
Effect._baseCache = {};
Effect.ShadersStore = ShaderStore.ShadersStore;
Effect.IncludesShadersStore = ShaderStore.IncludesShadersStore;
class DepthCullingState {
    constructor(reset = true) {
        this._isDepthTestDirty = false;
        this._isDepthMaskDirty = false;
        this._isDepthFuncDirty = false;
        this._isCullFaceDirty = false;
        this._isCullDirty = false;
        this._isZOffsetDirty = false;
        this._isFrontFaceDirty = false;
        if (reset) {
            this.reset();
        }
    }
    get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty;
    }
    get zOffset() {
        return this._zOffset;
    }
    set zOffset(value) {
        if (this._zOffset === value) {
            return;
        }
        this._zOffset = value;
        this._isZOffsetDirty = true;
    }
    get zOffsetUnits() {
        return this._zOffsetUnits;
    }
    set zOffsetUnits(value) {
        if (this._zOffsetUnits === value) {
            return;
        }
        this._zOffsetUnits = value;
        this._isZOffsetDirty = true;
    }
    get cullFace() {
        return this._cullFace;
    }
    set cullFace(value) {
        if (this._cullFace === value) {
            return;
        }
        this._cullFace = value;
        this._isCullFaceDirty = true;
    }
    get cull() {
        return this._cull;
    }
    set cull(value) {
        if (this._cull === value) {
            return;
        }
        this._cull = value;
        this._isCullDirty = true;
    }
    get depthFunc() {
        return this._depthFunc;
    }
    set depthFunc(value) {
        if (this._depthFunc === value) {
            return;
        }
        this._depthFunc = value;
        this._isDepthFuncDirty = true;
    }
    get depthMask() {
        return this._depthMask;
    }
    set depthMask(value) {
        if (this._depthMask === value) {
            return;
        }
        this._depthMask = value;
        this._isDepthMaskDirty = true;
    }
    get depthTest() {
        return this._depthTest;
    }
    set depthTest(value) {
        if (this._depthTest === value) {
            return;
        }
        this._depthTest = value;
        this._isDepthTestDirty = true;
    }
    get frontFace() {
        return this._frontFace;
    }
    set frontFace(value) {
        if (this._frontFace === value) {
            return;
        }
        this._frontFace = value;
        this._isFrontFaceDirty = true;
    }
    reset() {
        this._depthMask = true;
        this._depthTest = true;
        this._depthFunc = null;
        this._cullFace = null;
        this._cull = null;
        this._zOffset = 0;
        this._zOffsetUnits = 0;
        this._frontFace = null;
        this._isDepthTestDirty = true;
        this._isDepthMaskDirty = true;
        this._isDepthFuncDirty = false;
        this._isCullFaceDirty = false;
        this._isCullDirty = false;
        this._isZOffsetDirty = true;
        this._isFrontFaceDirty = false;
    }
    apply(gl) {
        if (!this.isDirty) {
            return;
        }
        if (this._isCullDirty) {
            if (this.cull) {
                gl.enable(gl.CULL_FACE);
            }
            else {
                gl.disable(gl.CULL_FACE);
            }
            this._isCullDirty = false;
        }
        if (this._isCullFaceDirty) {
            gl.cullFace(this.cullFace);
            this._isCullFaceDirty = false;
        }
        if (this._isDepthMaskDirty) {
            gl.depthMask(this.depthMask);
            this._isDepthMaskDirty = false;
        }
        if (this._isDepthTestDirty) {
            if (this.depthTest) {
                gl.enable(gl.DEPTH_TEST);
            }
            else {
                gl.disable(gl.DEPTH_TEST);
            }
            this._isDepthTestDirty = false;
        }
        if (this._isDepthFuncDirty) {
            gl.depthFunc(this.depthFunc);
            this._isDepthFuncDirty = false;
        }
        if (this._isZOffsetDirty) {
            if (this.zOffset || this.zOffsetUnits) {
                gl.enable(gl.POLYGON_OFFSET_FILL);
                gl.polygonOffset(this.zOffset, this.zOffsetUnits);
            }
            else {
                gl.disable(gl.POLYGON_OFFSET_FILL);
            }
            this._isZOffsetDirty = false;
        }
        if (this._isFrontFaceDirty) {
            gl.frontFace(this.frontFace);
            this._isFrontFaceDirty = false;
        }
    }
}
class StencilState {
    constructor() {
        this.reset();
    }
    reset() {
        this.enabled = false;
        this.mask = 0xFF;
        this.func = StencilState.ALWAYS;
        this.funcRef = 1;
        this.funcMask = 0xFF;
        this.opStencilFail = StencilState.KEEP;
        this.opDepthFail = StencilState.KEEP;
        this.opStencilDepthPass = StencilState.REPLACE;
    }
    get stencilFunc() {
        return this.func;
    }
    set stencilFunc(value) {
        this.func = value;
    }
    get stencilFuncRef() {
        return this.funcRef;
    }
    set stencilFuncRef(value) {
        this.funcRef = value;
    }
    get stencilFuncMask() {
        return this.funcMask;
    }
    set stencilFuncMask(value) {
        this.funcMask = value;
    }
    get stencilOpStencilFail() {
        return this.opStencilFail;
    }
    set stencilOpStencilFail(value) {
        this.opStencilFail = value;
    }
    get stencilOpDepthFail() {
        return this.opDepthFail;
    }
    set stencilOpDepthFail(value) {
        this.opDepthFail = value;
    }
    get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass;
    }
    set stencilOpStencilDepthPass(value) {
        this.opStencilDepthPass = value;
    }
    get stencilMask() {
        return this.mask;
    }
    set stencilMask(value) {
        this.mask = value;
    }
    get stencilTest() {
        return this.enabled;
    }
    set stencilTest(value) {
        this.enabled = value;
    }
}
StencilState.ALWAYS = Constants.ALWAYS;
StencilState.KEEP = Constants.KEEP;
StencilState.REPLACE = Constants.REPLACE;
class AlphaState {
    constructor() {
        this._blendFunctionParameters = new Array(4);
        this._blendEquationParameters = new Array(2);
        this._blendConstants = new Array(4);
        this._isBlendConstantsDirty = false;
        this._alphaBlend = false;
        this._isAlphaBlendDirty = false;
        this._isBlendFunctionParametersDirty = false;
        this._isBlendEquationParametersDirty = false;
        this.reset();
    }
    get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty;
    }
    get alphaBlend() {
        return this._alphaBlend;
    }
    set alphaBlend(value) {
        if (this._alphaBlend === value) {
            return;
        }
        this._alphaBlend = value;
        this._isAlphaBlendDirty = true;
    }
    setAlphaBlendConstants(r, g, b, a) {
        if (this._blendConstants[0] === r &&
            this._blendConstants[1] === g &&
            this._blendConstants[2] === b &&
            this._blendConstants[3] === a) {
            return;
        }
        this._blendConstants[0] = r;
        this._blendConstants[1] = g;
        this._blendConstants[2] = b;
        this._blendConstants[3] = a;
        this._isBlendConstantsDirty = true;
    }
    setAlphaBlendFunctionParameters(value0, value1, value2, value3) {
        if (this._blendFunctionParameters[0] === value0 &&
            this._blendFunctionParameters[1] === value1 &&
            this._blendFunctionParameters[2] === value2 &&
            this._blendFunctionParameters[3] === value3) {
            return;
        }
        this._blendFunctionParameters[0] = value0;
        this._blendFunctionParameters[1] = value1;
        this._blendFunctionParameters[2] = value2;
        this._blendFunctionParameters[3] = value3;
        this._isBlendFunctionParametersDirty = true;
    }
    setAlphaEquationParameters(rgb, alpha) {
        if (this._blendEquationParameters[0] === rgb &&
            this._blendEquationParameters[1] === alpha) {
            return;
        }
        this._blendEquationParameters[0] = rgb;
        this._blendEquationParameters[1] = alpha;
        this._isBlendEquationParametersDirty = true;
    }
    reset() {
        this._alphaBlend = false;
        this._blendFunctionParameters[0] = null;
        this._blendFunctionParameters[1] = null;
        this._blendFunctionParameters[2] = null;
        this._blendFunctionParameters[3] = null;
        this._blendEquationParameters[0] = null;
        this._blendEquationParameters[1] = null;
        this._blendConstants[0] = null;
        this._blendConstants[1] = null;
        this._blendConstants[2] = null;
        this._blendConstants[3] = null;
        this._isAlphaBlendDirty = true;
        this._isBlendFunctionParametersDirty = false;
        this._isBlendEquationParametersDirty = false;
        this._isBlendConstantsDirty = false;
    }
    apply(gl) {
        if (!this.isDirty) {
            return;
        }
        if (this._isAlphaBlendDirty) {
            if (this._alphaBlend) {
                gl.enable(gl.BLEND);
            }
            else {
                gl.disable(gl.BLEND);
            }
            this._isAlphaBlendDirty = false;
        }
        if (this._isBlendFunctionParametersDirty) {
            gl.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]);
            this._isBlendFunctionParametersDirty = false;
        }
        if (this._isBlendEquationParametersDirty) {
            gl.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]);
            this._isBlendEquationParametersDirty = false;
        }
        if (this._isBlendConstantsDirty) {
            gl.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]);
            this._isBlendConstantsDirty = false;
        }
    }
}
class TextureSampler {
    constructor() {
        this.samplingMode = -1;
        this._useMipMaps = true;
        this._cachedWrapU = null;
        this._cachedWrapV = null;
        this._cachedWrapR = null;
        this._cachedAnisotropicFilteringLevel = null;
        this._comparisonFunction = 0;
    }
    get wrapU() {
        return this._cachedWrapU;
    }
    set wrapU(value) {
        this._cachedWrapU = value;
    }
    get wrapV() {
        return this._cachedWrapV;
    }
    set wrapV(value) {
        this._cachedWrapV = value;
    }
    get wrapR() {
        return this._cachedWrapR;
    }
    set wrapR(value) {
        this._cachedWrapR = value;
    }
    get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel;
    }
    set anisotropicFilteringLevel(value) {
        this._cachedAnisotropicFilteringLevel = value;
    }
    get comparisonFunction() {
        return this._comparisonFunction;
    }
    set comparisonFunction(value) {
        this._comparisonFunction = value;
    }
    get useMipMaps() {
        return this._useMipMaps;
    }
    set useMipMaps(value) {
        this._useMipMaps = value;
    }
    setParameters(wrapU = Constants.TEXTURE_WRAP_ADDRESSMODE, wrapV = Constants.TEXTURE_WRAP_ADDRESSMODE, wrapR = Constants.TEXTURE_WRAP_ADDRESSMODE, anisotropicFilteringLevel = 1, samplingMode = Constants.TEXTURE_BILINEAR_SAMPLINGMODE, comparisonFunction = 0) {
        this._cachedWrapU = wrapU;
        this._cachedWrapV = wrapV;
        this._cachedWrapR = wrapR;
        this._cachedAnisotropicFilteringLevel = anisotropicFilteringLevel;
        this.samplingMode = samplingMode;
        this._comparisonFunction = comparisonFunction;
        return this;
    }
    compareSampler(other) {
        return this._cachedWrapU === other._cachedWrapU &&
            this._cachedWrapV === other._cachedWrapV &&
            this._cachedWrapR === other._cachedWrapR &&
            this._cachedAnisotropicFilteringLevel === other._cachedAnisotropicFilteringLevel &&
            this.samplingMode === other.samplingMode &&
            this._comparisonFunction === other._comparisonFunction &&
            this._useMipMaps === other._useMipMaps;
    }
}
var InternalTextureSource;
(function (InternalTextureSource) {
    InternalTextureSource[InternalTextureSource["Unknown"] = 0] = "Unknown";
    InternalTextureSource[InternalTextureSource["Url"] = 1] = "Url";
    InternalTextureSource[InternalTextureSource["Temp"] = 2] = "Temp";
    InternalTextureSource[InternalTextureSource["Raw"] = 3] = "Raw";
    InternalTextureSource[InternalTextureSource["Dynamic"] = 4] = "Dynamic";
    InternalTextureSource[InternalTextureSource["RenderTarget"] = 5] = "RenderTarget";
    InternalTextureSource[InternalTextureSource["MultiRenderTarget"] = 6] = "MultiRenderTarget";
    InternalTextureSource[InternalTextureSource["Cube"] = 7] = "Cube";
    InternalTextureSource[InternalTextureSource["CubeRaw"] = 8] = "CubeRaw";
    InternalTextureSource[InternalTextureSource["CubePrefiltered"] = 9] = "CubePrefiltered";
    InternalTextureSource[InternalTextureSource["Raw3D"] = 10] = "Raw3D";
    InternalTextureSource[InternalTextureSource["Raw2DArray"] = 11] = "Raw2DArray";
    InternalTextureSource[InternalTextureSource["DepthStencil"] = 12] = "DepthStencil";
    InternalTextureSource[InternalTextureSource["CubeRawRGBD"] = 13] = "CubeRawRGBD";
    InternalTextureSource[InternalTextureSource["Depth"] = 14] = "Depth";
})(InternalTextureSource || (InternalTextureSource = {}));
class InternalTexture extends TextureSampler {
    constructor(engine, source, delayAllocation = false) {
        super();
        this.isReady = false;
        this.isCube = false;
        this.is3D = false;
        this.is2DArray = false;
        this.isMultiview = false;
        this.url = "";
        this.generateMipMaps = false;
        this.samples = 0;
        this.type = -1;
        this.format = -1;
        this.onLoadedObservable = new Observable();
        this.onErrorObservable = new Observable();
        this.onRebuildCallback = null;
        this.width = 0;
        this.height = 0;
        this.depth = 0;
        this.baseWidth = 0;
        this.baseHeight = 0;
        this.baseDepth = 0;
        this.invertY = false;
        this._invertVScale = false;
        this._associatedChannel = -1;
        this._source = InternalTextureSource.Unknown;
        this._buffer = null;
        this._bufferView = null;
        this._bufferViewArray = null;
        this._bufferViewArrayArray = null;
        this._size = 0;
        this._extension = "";
        this._files = null;
        this._workingCanvas = null;
        this._workingContext = null;
        this._cachedCoordinatesMode = null;
        this._isDisabled = false;
        this._compression = null;
        this._sphericalPolynomial = null;
        this._sphericalPolynomialPromise = null;
        this._sphericalPolynomialComputed = false;
        this._lodGenerationScale = 0;
        this._lodGenerationOffset = 0;
        this._useSRGBBuffer = false;
        this._lodTextureHigh = null;
        this._lodTextureMid = null;
        this._lodTextureLow = null;
        this._isRGBD = false;
        this._linearSpecularLOD = false;
        this._irradianceTexture = null;
        this._hardwareTexture = null;
        this._references = 1;
        this._gammaSpace = null;
        this._engine = engine;
        this._source = source;
        this._uniqueId = InternalTexture._Counter++;
        if (!delayAllocation) {
            this._hardwareTexture = engine._createHardwareTexture();
        }
    }
    get useMipMaps() {
        return this.generateMipMaps;
    }
    set useMipMaps(value) {
        this.generateMipMaps = value;
    }
    get uniqueId() {
        return this._uniqueId;
    }
    getEngine() {
        return this._engine;
    }
    get source() {
        return this._source;
    }
    incrementReferences() {
        this._references++;
    }
    updateSize(width, height, depth = 1) {
        this._engine.updateTextureDimensions(this, width, height, depth);
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.baseWidth = width;
        this.baseHeight = height;
        this.baseDepth = depth;
        this._size = width * height * depth;
    }
    _rebuild() {
        var _a;
        this.isReady = false;
        this._cachedCoordinatesMode = null;
        this._cachedWrapU = null;
        this._cachedWrapV = null;
        this._cachedWrapR = null;
        this._cachedAnisotropicFilteringLevel = null;
        if (this.onRebuildCallback) {
            const data = this.onRebuildCallback(this);
            const swapAndSetIsReady = (proxyInternalTexture) => {
                proxyInternalTexture._swapAndDie(this, false);
                this.isReady = data.isReady;
            };
            if (data.isAsync) {
                data.proxy.then(swapAndSetIsReady);
            }
            else {
                swapAndSetIsReady(data.proxy);
            }
            return;
        }
        let proxy;
        switch (this.source) {
            case InternalTextureSource.Temp:
                break;
            case InternalTextureSource.Url:
                proxy = this._engine.createTexture((_a = this._originalUrl) !== null && _a !== void 0 ? _a : this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, () => {
                    proxy._swapAndDie(this, false);
                    this.isReady = true;
                }, null, this._buffer, undefined, this.format, this._extension, undefined, undefined, undefined, this._useSRGBBuffer);
                return;
            case InternalTextureSource.Raw:
                proxy = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type);
                proxy._swapAndDie(this, false);
                this.isReady = true;
                break;
            case InternalTextureSource.Raw3D:
                proxy = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type);
                proxy._swapAndDie(this, false);
                this.isReady = true;
                break;
            case InternalTextureSource.Raw2DArray:
                proxy = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type);
                proxy._swapAndDie(this, false);
                this.isReady = true;
                break;
            case InternalTextureSource.Dynamic:
                proxy = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode);
                proxy._swapAndDie(this, false);
                this._engine.updateDynamicTexture(this, this._engine.getRenderingCanvas(), this.invertY, undefined, undefined, true);
                break;
            case InternalTextureSource.Cube:
                proxy = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, () => {
                    proxy._swapAndDie(this, false);
                    this.isReady = true;
                }, null, this.format, this._extension, false, 0, 0, null, undefined, this._useSRGBBuffer);
                return;
            case InternalTextureSource.CubeRaw:
                proxy = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression);
                proxy._swapAndDie(this, false);
                this.isReady = true;
                break;
            case InternalTextureSource.CubeRawRGBD:
                return;
            case InternalTextureSource.CubePrefiltered:
                proxy = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (proxy) => {
                    if (proxy) {
                        proxy._swapAndDie(this, false);
                    }
                    this.isReady = true;
                }, null, this.format, this._extension);
                proxy._sphericalPolynomial = this._sphericalPolynomial;
                return;
        }
    }
    _swapAndDie(target, swapAll = true) {
        var _a;
        (_a = this._hardwareTexture) === null || _a === void 0 ? void 0 : _a.setUsage(target._source, this.generateMipMaps, this.isCube, this.width, this.height);
        target._hardwareTexture = this._hardwareTexture;
        if (swapAll) {
            target._isRGBD = this._isRGBD;
        }
        if (this._lodTextureHigh) {
            if (target._lodTextureHigh) {
                target._lodTextureHigh.dispose();
            }
            target._lodTextureHigh = this._lodTextureHigh;
        }
        if (this._lodTextureMid) {
            if (target._lodTextureMid) {
                target._lodTextureMid.dispose();
            }
            target._lodTextureMid = this._lodTextureMid;
        }
        if (this._lodTextureLow) {
            if (target._lodTextureLow) {
                target._lodTextureLow.dispose();
            }
            target._lodTextureLow = this._lodTextureLow;
        }
        if (this._irradianceTexture) {
            if (target._irradianceTexture) {
                target._irradianceTexture.dispose();
            }
            target._irradianceTexture = this._irradianceTexture;
        }
        let cache = this._engine.getLoadedTexturesCache();
        var index = cache.indexOf(this);
        if (index !== -1) {
            cache.splice(index, 1);
        }
        var index = cache.indexOf(target);
        if (index === -1) {
            cache.push(target);
        }
    }
    dispose() {
        this._references--;
        this.onLoadedObservable.clear();
        this.onErrorObservable.clear();
        if (this._references === 0) {
            this._engine._releaseTexture(this);
            this._hardwareTexture = null;
        }
    }
}
InternalTexture._Counter = 0;
class WebGLShaderProcessor {
    constructor() {
        this.shaderLanguage = ShaderLanguage.GLSL;
    }
    postProcessor(code, defines, isFragment, processingContext, engine) {
        if (!engine.getCaps().drawBuffersExtension) {
            var regex = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
            code = code.replace(regex, "");
        }
        return code;
    }
}
class WebGL2ShaderProcessor {
    constructor() {
        this.shaderLanguage = ShaderLanguage.GLSL;
    }
    attributeProcessor(attribute) {
        return attribute.replace("attribute", "in");
    }
    varyingProcessor(varying, isFragment) {
        return varying.replace("varying", isFragment ? "in" : "out");
    }
    postProcessor(code, defines, isFragment, processingContext, engine) {
        const hasDrawBuffersExtension = code.search(/#extension.+GL_EXT_draw_buffers.+require/) !== -1;
        var regex = /#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g;
        code = code.replace(regex, "");
        code = code.replace(/texture2D\s*\(/g, "texture(");
        if (isFragment) {
            code = code.replace(/texture2DLodEXT\s*\(/g, "textureLod(");
            code = code.replace(/textureCubeLodEXT\s*\(/g, "textureLod(");
            code = code.replace(/textureCube\s*\(/g, "texture(");
            code = code.replace(/gl_FragDepthEXT/g, "gl_FragDepth");
            code = code.replace(/gl_FragColor/g, "glFragColor");
            code = code.replace(/gl_FragData/g, "glFragData");
            code = code.replace(/void\s+?main\s*\(/g, (hasDrawBuffersExtension ? "" : "out vec4 glFragColor;\n") + "void main(");
        }
        else {
            var hasMultiviewExtension = defines.indexOf("#define MULTIVIEW") !== -1;
            if (hasMultiviewExtension) {
                return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + code;
            }
        }
        return code;
    }
}
class DataBuffer {
    constructor() {
        this.references = 0;
        this.capacity = 0;
        this.is32Bits = false;
        this.uniqueId = DataBuffer._Counter++;
    }
    get underlyingResource() {
        return null;
    }
}
DataBuffer._Counter = 0;
class WebGLDataBuffer extends DataBuffer {
    constructor(resource) {
        super();
        this._buffer = resource;
    }
    get underlyingResource() {
        return this._buffer;
    }
}
class WebGLPipelineContext {
    constructor() {
        this._valueCache = {};
        this.vertexCompilationError = null;
        this.fragmentCompilationError = null;
        this.programLinkError = null;
        this.programValidationError = null;
    }
    get isAsync() {
        return this.isParallelCompiled;
    }
    get isReady() {
        if (this.program) {
            if (this.isParallelCompiled) {
                return this.engine._isRenderingStateCompiled(this);
            }
            return true;
        }
        return false;
    }
    _handlesSpectorRebuildCallback(onCompiled) {
        if (onCompiled && this.program) {
            onCompiled(this.program);
        }
    }
    _fillEffectInformation(effect, uniformBuffersNames, uniformsNames, uniforms, samplerList, samplers, attributesNames, attributes) {
        const engine = this.engine;
        if (engine.supportsUniformBuffers) {
            for (var name in uniformBuffersNames) {
                effect.bindUniformBlock(name, uniformBuffersNames[name]);
            }
        }
        const effectAvailableUniforms = this.engine.getUniforms(this, uniformsNames);
        effectAvailableUniforms.forEach((uniform, index) => {
            uniforms[uniformsNames[index]] = uniform;
        });
        this._uniforms = uniforms;
        let index;
        for (index = 0; index < samplerList.length; index++) {
            const sampler = effect.getUniform(samplerList[index]);
            if (sampler == null) {
                samplerList.splice(index, 1);
                index--;
            }
        }
        samplerList.forEach((name, index) => {
            samplers[name] = index;
        });
        for (let attr of engine.getAttributes(this, attributesNames)) {
            attributes.push(attr);
        }
    }
    dispose() {
        this._uniforms = {};
    }
    _cacheMatrix(uniformName, matrix) {
        var cache = this._valueCache[uniformName];
        var flag = matrix.updateFlag;
        if (cache !== undefined && cache === flag) {
            return false;
        }
        this._valueCache[uniformName] = flag;
        return true;
    }
    _cacheFloat2(uniformName, x, y) {
        var cache = this._valueCache[uniformName];
        if (!cache || cache.length !== 2) {
            cache = [x, y];
            this._valueCache[uniformName] = cache;
            return true;
        }
        var changed = false;
        if (cache[0] !== x) {
            cache[0] = x;
            changed = true;
        }
        if (cache[1] !== y) {
            cache[1] = y;
            changed = true;
        }
        return changed;
    }
    _cacheFloat3(uniformName, x, y, z) {
        var cache = this._valueCache[uniformName];
        if (!cache || cache.length !== 3) {
            cache = [x, y, z];
            this._valueCache[uniformName] = cache;
            return true;
        }
        var changed = false;
        if (cache[0] !== x) {
            cache[0] = x;
            changed = true;
        }
        if (cache[1] !== y) {
            cache[1] = y;
            changed = true;
        }
        if (cache[2] !== z) {
            cache[2] = z;
            changed = true;
        }
        return changed;
    }
    _cacheFloat4(uniformName, x, y, z, w) {
        var cache = this._valueCache[uniformName];
        if (!cache || cache.length !== 4) {
            cache = [x, y, z, w];
            this._valueCache[uniformName] = cache;
            return true;
        }
        var changed = false;
        if (cache[0] !== x) {
            cache[0] = x;
            changed = true;
        }
        if (cache[1] !== y) {
            cache[1] = y;
            changed = true;
        }
        if (cache[2] !== z) {
            cache[2] = z;
            changed = true;
        }
        if (cache[3] !== w) {
            cache[3] = w;
            changed = true;
        }
        return changed;
    }
    setInt(uniformName, value) {
        var cache = this._valueCache[uniformName];
        if (cache !== undefined && cache === value) {
            return;
        }
        if (this.engine.setInt(this._uniforms[uniformName], value)) {
            this._valueCache[uniformName] = value;
        }
    }
    setInt2(uniformName, x, y) {
        if (this._cacheFloat2(uniformName, x, y)) {
            if (!this.engine.setInt2(this._uniforms[uniformName], x, y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setInt3(uniformName, x, y, z) {
        if (this._cacheFloat3(uniformName, x, y, z)) {
            if (!this.engine.setInt3(this._uniforms[uniformName], x, y, z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setInt4(uniformName, x, y, z, w) {
        if (this._cacheFloat4(uniformName, x, y, z, w)) {
            if (!this.engine.setInt4(this._uniforms[uniformName], x, y, z, w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setIntArray(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setIntArray(this._uniforms[uniformName], array);
    }
    setIntArray2(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setIntArray2(this._uniforms[uniformName], array);
    }
    setIntArray3(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setIntArray3(this._uniforms[uniformName], array);
    }
    setIntArray4(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setIntArray4(this._uniforms[uniformName], array);
    }
    setArray(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setArray(this._uniforms[uniformName], array);
    }
    setArray2(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setArray2(this._uniforms[uniformName], array);
    }
    setArray3(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setArray3(this._uniforms[uniformName], array);
    }
    setArray4(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setArray4(this._uniforms[uniformName], array);
    }
    setMatrices(uniformName, matrices) {
        if (!matrices) {
            return;
        }
        this._valueCache[uniformName] = null;
        this.engine.setMatrices(this._uniforms[uniformName], matrices);
    }
    setMatrix(uniformName, matrix) {
        if (this._cacheMatrix(uniformName, matrix)) {
            if (!this.engine.setMatrices(this._uniforms[uniformName], matrix.toArray())) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setMatrix3x3(uniformName, matrix) {
        this._valueCache[uniformName] = null;
        this.engine.setMatrix3x3(this._uniforms[uniformName], matrix);
    }
    setMatrix2x2(uniformName, matrix) {
        this._valueCache[uniformName] = null;
        this.engine.setMatrix2x2(this._uniforms[uniformName], matrix);
    }
    setFloat(uniformName, value) {
        var cache = this._valueCache[uniformName];
        if (cache !== undefined && cache === value) {
            return;
        }
        if (this.engine.setFloat(this._uniforms[uniformName], value)) {
            this._valueCache[uniformName] = value;
        }
    }
    setVector2(uniformName, vector2) {
        if (this._cacheFloat2(uniformName, vector2.x, vector2.y)) {
            if (!this.engine.setFloat2(this._uniforms[uniformName], vector2.x, vector2.y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setFloat2(uniformName, x, y) {
        if (this._cacheFloat2(uniformName, x, y)) {
            if (!this.engine.setFloat2(this._uniforms[uniformName], x, y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setVector3(uniformName, vector3) {
        if (this._cacheFloat3(uniformName, vector3.x, vector3.y, vector3.z)) {
            if (!this.engine.setFloat3(this._uniforms[uniformName], vector3.x, vector3.y, vector3.z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setFloat3(uniformName, x, y, z) {
        if (this._cacheFloat3(uniformName, x, y, z)) {
            if (!this.engine.setFloat3(this._uniforms[uniformName], x, y, z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setVector4(uniformName, vector4) {
        if (this._cacheFloat4(uniformName, vector4.x, vector4.y, vector4.z, vector4.w)) {
            if (!this.engine.setFloat4(this._uniforms[uniformName], vector4.x, vector4.y, vector4.z, vector4.w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setFloat4(uniformName, x, y, z, w) {
        if (this._cacheFloat4(uniformName, x, y, z, w)) {
            if (!this.engine.setFloat4(this._uniforms[uniformName], x, y, z, w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setColor3(uniformName, color3) {
        if (this._cacheFloat3(uniformName, color3.r, color3.g, color3.b)) {
            if (!this.engine.setFloat3(this._uniforms[uniformName], color3.r, color3.g, color3.b)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setColor4(uniformName, color3, alpha) {
        if (this._cacheFloat4(uniformName, color3.r, color3.g, color3.b, alpha)) {
            if (!this.engine.setFloat4(this._uniforms[uniformName], color3.r, color3.g, color3.b, alpha)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    setDirectColor4(uniformName, color4) {
        if (this._cacheFloat4(uniformName, color4.r, color4.g, color4.b, color4.a)) {
            if (!this.engine.setFloat4(this._uniforms[uniformName], color4.r, color4.g, color4.b, color4.a)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null;
    }
    _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null;
    }
}
class WebGLHardwareTexture {
    constructor(existingTexture = null, context) {
        this._MSAARenderBuffer = null;
        this._context = context;
        if (!existingTexture) {
            existingTexture = context.createTexture();
            if (!existingTexture) {
                throw new Error("Unable to create webGL texture");
            }
        }
        this.set(existingTexture);
    }
    get underlyingResource() {
        return this._webGLTexture;
    }
    setUsage(textureSource, generateMipMaps, isCube, width, height) {
    }
    set(hardwareTexture) {
        this._webGLTexture = hardwareTexture;
    }
    reset() {
        this._webGLTexture = null;
        this._MSAARenderBuffer = null;
    }
    release() {
        if (this._MSAARenderBuffer) {
            this._context.deleteRenderbuffer(this._MSAARenderBuffer);
            this._MSAARenderBuffer = null;
        }
        if (this._webGLTexture) {
            this._context.deleteTexture(this._webGLTexture);
        }
        this.reset();
    }
}
class DrawWrapper {
    constructor(engine, createMaterialContext = true) {
        this.effect = null;
        this.defines = null;
        this.drawContext = engine.createDrawContext();
        if (createMaterialContext) {
            this.materialContext = engine.createMaterialContext();
        }
    }
    static IsWrapper(effect) {
        return effect.getPipelineContext === undefined;
    }
    static GetEffect(effect) {
        return effect.getPipelineContext === undefined ? effect.effect : effect;
    }
    setEffect(effect, defines, resetContext = true) {
        var _a;
        this.effect = effect;
        if (defines !== undefined) {
            this.defines = defines;
        }
        if (resetContext) {
            (_a = this.drawContext) === null || _a === void 0 ? void 0 : _a.reset();
        }
    }
    dispose() {
        var _a;
        (_a = this.drawContext) === null || _a === void 0 ? void 0 : _a.dispose();
    }
}
class StencilStateComposer {
    constructor(reset = true) {
        this._isStencilTestDirty = false;
        this._isStencilMaskDirty = false;
        this._isStencilFuncDirty = false;
        this._isStencilOpDirty = false;
        this.useStencilGlobalOnly = false;
        if (reset) {
            this.reset();
        }
    }
    get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty;
    }
    get func() {
        return this._func;
    }
    set func(value) {
        if (this._func === value) {
            return;
        }
        this._func = value;
        this._isStencilFuncDirty = true;
    }
    get funcRef() {
        return this._funcRef;
    }
    set funcRef(value) {
        if (this._funcRef === value) {
            return;
        }
        this._funcRef = value;
        this._isStencilFuncDirty = true;
    }
    get funcMask() {
        return this._funcMask;
    }
    set funcMask(value) {
        if (this._funcMask === value) {
            return;
        }
        this._funcMask = value;
        this._isStencilFuncDirty = true;
    }
    get opStencilFail() {
        return this._opStencilFail;
    }
    set opStencilFail(value) {
        if (this._opStencilFail === value) {
            return;
        }
        this._opStencilFail = value;
        this._isStencilOpDirty = true;
    }
    get opDepthFail() {
        return this._opDepthFail;
    }
    set opDepthFail(value) {
        if (this._opDepthFail === value) {
            return;
        }
        this._opDepthFail = value;
        this._isStencilOpDirty = true;
    }
    get opStencilDepthPass() {
        return this._opStencilDepthPass;
    }
    set opStencilDepthPass(value) {
        if (this._opStencilDepthPass === value) {
            return;
        }
        this._opStencilDepthPass = value;
        this._isStencilOpDirty = true;
    }
    get mask() {
        return this._mask;
    }
    set mask(value) {
        if (this._mask === value) {
            return;
        }
        this._mask = value;
        this._isStencilMaskDirty = true;
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        if (this._enabled === value) {
            return;
        }
        this._enabled = value;
        this._isStencilTestDirty = true;
    }
    reset() {
        var _a;
        this.stencilMaterial = undefined;
        (_a = this.stencilGlobal) === null || _a === void 0 ? void 0 : _a.reset();
        this._isStencilTestDirty = true;
        this._isStencilMaskDirty = true;
        this._isStencilFuncDirty = true;
        this._isStencilOpDirty = true;
    }
    apply(gl) {
        var _a;
        if (!gl) {
            return;
        }
        const stencilMaterialEnabled = !this.useStencilGlobalOnly && !!((_a = this.stencilMaterial) === null || _a === void 0 ? void 0 : _a.enabled);
        this.enabled = stencilMaterialEnabled ? this.stencilMaterial.enabled : this.stencilGlobal.enabled;
        this.func = stencilMaterialEnabled ? this.stencilMaterial.func : this.stencilGlobal.func;
        this.funcRef = stencilMaterialEnabled ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef;
        this.funcMask = stencilMaterialEnabled ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask;
        this.opStencilFail = stencilMaterialEnabled ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail;
        this.opDepthFail = stencilMaterialEnabled ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail;
        this.opStencilDepthPass = stencilMaterialEnabled ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass;
        this.mask = stencilMaterialEnabled ? this.stencilMaterial.mask : this.stencilGlobal.mask;
        if (!this.isDirty) {
            return;
        }
        if (this._isStencilTestDirty) {
            if (this.enabled) {
                gl.enable(gl.STENCIL_TEST);
            }
            else {
                gl.disable(gl.STENCIL_TEST);
            }
            this._isStencilTestDirty = false;
        }
        if (this._isStencilMaskDirty) {
            gl.stencilMask(this.mask);
            this._isStencilMaskDirty = false;
        }
        if (this._isStencilFuncDirty) {
            gl.stencilFunc(this.func, this.funcRef, this.funcMask);
            this._isStencilFuncDirty = false;
        }
        if (this._isStencilOpDirty) {
            gl.stencilOp(this.opStencilFail, this.opDepthFail, this.opStencilDepthPass);
            this._isStencilOpDirty = false;
        }
    }
}
class BufferPointer {
}
class ThinEngine {
    constructor(canvasOrContext, antialias, options, adaptToDeviceRatio) {
        this.forcePOTTextures = false;
        this.isFullscreen = false;
        this.cullBackFaces = null;
        this.renderEvenInBackground = true;
        this.preventCacheWipeBetweenFrames = false;
        this.validateShaderPrograms = false;
        this._useReverseDepthBuffer = false;
        this.isNDCHalfZRange = false;
        this.hasOriginBottomLeft = true;
        this.disableUniformBuffers = false;
        this.onDisposeObservable = new Observable();
        this._frameId = 0;
        this._uniformBuffers = new Array();
        this._storageBuffers = new Array();
        this._webGLVersion = 1.0;
        this._windowIsBackground = false;
        this._highPrecisionShadersAllowed = true;
        this._badOS = false;
        this._badDesktopOS = false;
        this._renderingQueueLaunched = false;
        this._activeRenderLoops = new Array();
        this.onContextLostObservable = new Observable();
        this.onContextRestoredObservable = new Observable();
        this._contextWasLost = false;
        this._doNotHandleContextLost = false;
        this.disableVertexArrayObjects = false;
        this._colorWrite = true;
        this._colorWriteChanged = true;
        this._depthCullingState = new DepthCullingState();
        this._stencilStateComposer = new StencilStateComposer();
        this._stencilState = new StencilState();
        this._alphaState = new AlphaState();
        this._alphaMode = Constants.ALPHA_ADD;
        this._alphaEquation = Constants.ALPHA_DISABLE;
        this._internalTexturesCache = new Array();
        this._renderTargetWrapperCache = new Array();
        this._activeChannel = 0;
        this._currentTextureChannel = -1;
        this._boundTexturesCache = {};
        this._compiledEffects = {};
        this._vertexAttribArraysEnabled = [];
        this._uintIndicesCurrentlySet = false;
        this._currentBoundBuffer = new Array();
        this._currentFramebuffer = null;
        this._dummyFramebuffer = null;
        this._currentBufferPointers = new Array();
        this._currentInstanceLocations = new Array();
        this._currentInstanceBuffers = new Array();
        this._vaoRecordInProgress = false;
        this._mustWipeVertexAttributes = false;
        this._nextFreeTextureSlots = new Array();
        this._maxSimultaneousTextures = 0;
        this._activeRequests = new Array();
        this._transformTextureUrl = null;
        this.hostInformation = {
            isMobile: false
        };
        this.premultipliedAlpha = true;
        this.onBeforeTextureInitObservable = new Observable();
        this._isWebGPU = false;
        this._snapshotRenderingMode = Constants.SNAPSHOTRENDERING_STANDARD;
        this._viewportCached = { x: 0, y: 0, z: 0, w: 0 };
        this._unpackFlipYCached = null;
        this.enableUnpackFlipYCached = true;
        this._boundUniforms = {};
        let canvas = null;
        options = options || {};
        this._stencilStateComposer.stencilGlobal = this._stencilState;
        PerformanceConfigurator.SetMatrixPrecision(!!options.useHighPrecisionMatrix);
        if (!canvasOrContext) {
            return;
        }
        adaptToDeviceRatio = adaptToDeviceRatio || options.adaptToDeviceRatio || false;
        if (canvasOrContext.getContext) {
            canvas = canvasOrContext;
            this._renderingCanvas = canvas;
            if (antialias !== undefined) {
                options.antialias = antialias;
            }
            if (options.deterministicLockstep === undefined) {
                options.deterministicLockstep = false;
            }
            if (options.lockstepMaxSteps === undefined) {
                options.lockstepMaxSteps = 4;
            }
            if (options.timeStep === undefined) {
                options.timeStep = 1 / 60;
            }
            if (options.preserveDrawingBuffer === undefined) {
                options.preserveDrawingBuffer = false;
            }
            if (options.audioEngine === undefined) {
                options.audioEngine = true;
            }
            if (options.audioEngineOptions !== undefined && options.audioEngineOptions.audioContext !== undefined) {
                this._audioContext = options.audioEngineOptions.audioContext;
            }
            if (options.audioEngineOptions !== undefined && options.audioEngineOptions.audioDestination !== undefined) {
                this._audioDestination = options.audioEngineOptions.audioDestination;
            }
            if (options.stencil === undefined) {
                options.stencil = true;
            }
            if (options.premultipliedAlpha === false) {
                this.premultipliedAlpha = false;
            }
            if (options.xrCompatible === undefined) {
                options.xrCompatible = true;
            }
            this._doNotHandleContextLost = options.doNotHandleContextLost ? true : false;
            if (navigator && navigator.userAgent) {
                this._checkForMobile = () => {
                    let currentUA = navigator.userAgent;
                    this.hostInformation.isMobile = currentUA.indexOf("Mobile") !== -1 ||
                        (currentUA.indexOf("Mac") !== -1 && IsDocumentAvailable() && "ontouchend" in document);
                };
                this._checkForMobile();
                if (IsWindowObjectExist()) {
                    window.addEventListener("resize", this._checkForMobile);
                }
                let ua = navigator.userAgent;
                for (var exception of ThinEngine.ExceptionList) {
                    let key = exception.key;
                    let targets = exception.targets;
                    let check = new RegExp(key);
                    if (check.test(ua)) {
                        if (exception.capture && exception.captureConstraint) {
                            let capture = exception.capture;
                            let constraint = exception.captureConstraint;
                            let regex = new RegExp(capture);
                            let matches = regex.exec(ua);
                            if (matches && matches.length > 0) {
                                let capturedValue = parseInt(matches[matches.length - 1]);
                                if (capturedValue >= constraint) {
                                    continue;
                                }
                            }
                        }
                        for (var target of targets) {
                            switch (target) {
                                case "uniformBuffer":
                                    this.disableUniformBuffers = true;
                                    break;
                                case "vao":
                                    this.disableVertexArrayObjects = true;
                                    break;
                            }
                        }
                    }
                }
            }
            if (!this._doNotHandleContextLost) {
                this._onContextLost = (evt) => {
                    evt.preventDefault();
                    this._contextWasLost = true;
                    Logger.Warn("WebGL context lost.");
                    this.onContextLostObservable.notifyObservers(this);
                };
                this._onContextRestored = () => {
                    this._restoreEngineAfterContextLost(this._initGLContext.bind(this));
                };
                canvas.addEventListener("webglcontextlost", this._onContextLost, false);
                canvas.addEventListener("webglcontextrestored", this._onContextRestored, false);
                options.powerPreference = "high-performance";
            }
            this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (this._badDesktopOS) {
                options.xrCompatible = false;
            }
            if (!options.disableWebGL2Support) {
                try {
                    this._gl = (canvas.getContext("webgl2", options) || canvas.getContext("experimental-webgl2", options));
                    if (this._gl) {
                        this._webGLVersion = 2.0;
                        this._shaderPlatformName = "WEBGL2";
                        if (!this._gl.deleteQuery) {
                            this._webGLVersion = 1.0;
                            this._shaderPlatformName = "WEBGL1";
                        }
                    }
                }
                catch (e) {
                }
            }
            if (!this._gl) {
                if (!canvas) {
                    throw new Error("The provided canvas is null or undefined.");
                }
                try {
                    this._gl = (canvas.getContext("webgl", options) || canvas.getContext("experimental-webgl", options));
                }
                catch (e) {
                    throw new Error("WebGL not supported");
                }
            }
            if (!this._gl) {
                throw new Error("WebGL not supported");
            }
        }
        else {
            this._gl = canvasOrContext;
            this._renderingCanvas = this._gl.canvas;
            if (this._gl.renderbufferStorageMultisample) {
                this._webGLVersion = 2.0;
                this._shaderPlatformName = "WEBGL2";
            }
            else {
                this._shaderPlatformName = "WEBGL1";
            }
            const attributes = this._gl.getContextAttributes();
            if (attributes) {
                options.stencil = attributes.stencil;
            }
        }
        this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE);
        if (options.useHighPrecisionFloats !== undefined) {
            this._highPrecisionShadersAllowed = options.useHighPrecisionFloats;
        }
        const devicePixelRatio = IsWindowObjectExist() ? (window.devicePixelRatio || 1.0) : 1.0;
        var limitDeviceRatio = options.limitDeviceRatio || devicePixelRatio;
        this._hardwareScalingLevel = adaptToDeviceRatio ? 1.0 / Math.min(limitDeviceRatio, devicePixelRatio) : 1.0;
        this.resize();
        this._isStencilEnable = options.stencil ? true : false;
        this._initGLContext();
        this._initFeatures();
        for (var i = 0; i < this._caps.maxVertexAttribs; i++) {
            this._currentBufferPointers[i] = new BufferPointer();
        }
        this._shaderProcessor = this.webGLVersion > 1 ? new WebGL2ShaderProcessor() : new WebGLShaderProcessor();
        this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent);
        this._creationOptions = options;
        const versionToLog = `Babylon.js v${ThinEngine.Version}`;
        console.log(versionToLog + ` - ${this.description}`);
        if (this._renderingCanvas && this._renderingCanvas.setAttribute) {
            this._renderingCanvas.setAttribute('data-engine', versionToLog);
        }
    }
    static get NpmPackage() {
        return "babylonjs@5.0.0-alpha.63";
    }
    static get Version() {
        return "5.0.0-alpha.63";
    }
    get description() {
        let description = this.name + this.webGLVersion;
        if (this._caps.parallelShaderCompile) {
            description += " - Parallel shader compilation";
        }
        return description;
    }
    get name() {
        return "WebGL";
    }
    get version() {
        return this._webGLVersion;
    }
    static get ShadersRepository() {
        return Effect.ShadersRepository;
    }
    static set ShadersRepository(value) {
        Effect.ShadersRepository = value;
    }
    _getShaderProcessor(shaderLanguage) {
        return this._shaderProcessor;
    }
    get useReverseDepthBuffer() {
        return this._useReverseDepthBuffer;
    }
    set useReverseDepthBuffer(useReverse) {
        if (useReverse === this._useReverseDepthBuffer) {
            return;
        }
        this._useReverseDepthBuffer = useReverse;
        if (useReverse) {
            this._depthCullingState.depthFunc = Constants.GEQUAL;
        }
        else {
            this._depthCullingState.depthFunc = Constants.LEQUAL;
        }
    }
    get frameId() {
        return this._frameId;
    }
    get supportsUniformBuffers() {
        return this.webGLVersion > 1 && !this.disableUniformBuffers;
    }
    get _shouldUseHighPrecisionShader() {
        return !!(this._caps.highPrecisionShaderSupported && this._highPrecisionShadersAllowed);
    }
    get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures;
    }
    get activeRenderLoops() {
        return this._activeRenderLoops;
    }
    get doNotHandleContextLost() {
        return this._doNotHandleContextLost;
    }
    set doNotHandleContextLost(value) {
        this._doNotHandleContextLost = value;
    }
    get _supportsHardwareTextureRescaling() {
        return false;
    }
    set framebufferDimensionsObject(dimensions) {
        this._framebufferDimensionsObject = dimensions;
    }
    get currentViewport() {
        return this._cachedViewport;
    }
    get emptyTexture() {
        if (!this._emptyTexture) {
            this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, Constants.TEXTUREFORMAT_RGBA, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE);
        }
        return this._emptyTexture;
    }
    get emptyTexture3D() {
        if (!this._emptyTexture3D) {
            this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, Constants.TEXTUREFORMAT_RGBA, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE);
        }
        return this._emptyTexture3D;
    }
    get emptyTexture2DArray() {
        if (!this._emptyTexture2DArray) {
            this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, Constants.TEXTUREFORMAT_RGBA, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE);
        }
        return this._emptyTexture2DArray;
    }
    get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
            var faceData = new Uint8Array(4);
            var cubeData = [faceData, faceData, faceData, faceData, faceData, faceData];
            this._emptyCubeTexture = this.createRawCubeTexture(cubeData, 1, Constants.TEXTUREFORMAT_RGBA, Constants.TEXTURETYPE_UNSIGNED_INT, false, false, Constants.TEXTURE_NEAREST_SAMPLINGMODE);
        }
        return this._emptyCubeTexture;
    }
    get isWebGPU() {
        return this._isWebGPU;
    }
    get shaderPlatformName() {
        return this._shaderPlatformName;
    }
    get snapshotRendering() {
        return false;
    }
    set snapshotRendering(activate) {
    }
    get snapshotRenderingMode() {
        return this._snapshotRenderingMode;
    }
    set snapshotRenderingMode(mode) {
        this._snapshotRenderingMode = mode;
    }
    snapshotRenderingReset() {
        this.snapshotRendering = false;
    }
    static _createCanvas(width, height) {
        if (typeof document === "undefined") {
            return (new OffscreenCanvas(width, height));
        }
        let canvas = (document.createElement("canvas"));
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
    createCanvas(width, height) {
        return ThinEngine._createCanvas(width, height);
    }
    createCanvasImage() {
        return document.createElement("img");
    }
    _restoreEngineAfterContextLost(initEngine) {
        setTimeout(async () => {
            var _a;
            this._dummyFramebuffer = null;
            const depthTest = this._depthCullingState.depthTest;
            const depthFunc = this._depthCullingState.depthFunc;
            const depthMask = this._depthCullingState.depthMask;
            const stencilTest = this._stencilState.stencilTest;
            await initEngine();
            this._rebuildEffects();
            (_a = this._rebuildComputeEffects) === null || _a === void 0 ? void 0 : _a.call(this);
            this._rebuildInternalTextures();
            this._rebuildRenderTargetWrappers();
            this._rebuildBuffers();
            this.wipeCaches(true);
            this._depthCullingState.depthTest = depthTest;
            this._depthCullingState.depthFunc = depthFunc;
            this._depthCullingState.depthMask = depthMask;
            this._stencilState.stencilTest = stencilTest;
            Logger.Warn(this.name + " context successfully restored.");
            this.onContextRestoredObservable.notifyObservers(this);
            this._contextWasLost = false;
        }, 0);
    }
    _sharedInit(canvas, doNotHandleTouchAction, audioEngine) {
        this._renderingCanvas = canvas;
    }
    _getShaderProcessingContext(shaderLanguage) {
        return null;
    }
    _rebuildInternalTextures() {
        let currentState = this._internalTexturesCache.slice();
        for (var internalTexture of currentState) {
            internalTexture._rebuild();
        }
    }
    _rebuildRenderTargetWrappers() {
        let currentState = this._renderTargetWrapperCache.slice();
        for (const renderTargetWrapper of currentState) {
            renderTargetWrapper._rebuild();
        }
    }
    _rebuildEffects() {
        for (var key in this._compiledEffects) {
            let effect = this._compiledEffects[key];
            effect._pipelineContext = null;
            effect._wasPreviouslyReady = false;
            effect._prepareEffect();
        }
        Effect.ResetCache();
    }
    areAllEffectsReady() {
        for (var key in this._compiledEffects) {
            let effect = this._compiledEffects[key];
            if (!effect.isReady()) {
                return false;
            }
        }
        return true;
    }
    _rebuildBuffers() {
        for (const uniformBuffer of this._uniformBuffers) {
            uniformBuffer._rebuild();
        }
        for (const storageBuffer of this._storageBuffers) {
            storageBuffer._rebuild();
        }
    }
    _initGLContext() {
        this._caps = {
            maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
            maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
            maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
            maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
            maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
            maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
            maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
            maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
            maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
            parallelShaderCompile: this._gl.getExtension('KHR_parallel_shader_compile') || undefined,
            standardDerivatives: this._webGLVersion > 1 || (this._gl.getExtension('OES_standard_derivatives') !== null),
            maxAnisotropy: 1,
            astc: this._gl.getExtension('WEBGL_compressed_texture_astc') || this._gl.getExtension('WEBKIT_WEBGL_compressed_texture_astc'),
            bptc: this._gl.getExtension('EXT_texture_compression_bptc') || this._gl.getExtension('WEBKIT_EXT_texture_compression_bptc'),
            s3tc: this._gl.getExtension('WEBGL_compressed_texture_s3tc') || this._gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc'),
            s3tc_srgb: this._gl.getExtension('WEBGL_compressed_texture_s3tc_srgb') || this._gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc_srgb'),
            pvrtc: this._gl.getExtension('WEBGL_compressed_texture_pvrtc') || this._gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
            etc1: this._gl.getExtension('WEBGL_compressed_texture_etc1') || this._gl.getExtension('WEBKIT_WEBGL_compressed_texture_etc1'),
            etc2: this._gl.getExtension('WEBGL_compressed_texture_etc') || this._gl.getExtension('WEBKIT_WEBGL_compressed_texture_etc') ||
                this._gl.getExtension('WEBGL_compressed_texture_es3_0'),
            textureAnisotropicFilterExtension: this._gl.getExtension('EXT_texture_filter_anisotropic') || this._gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || this._gl.getExtension('MOZ_EXT_texture_filter_anisotropic'),
            uintIndices: this._webGLVersion > 1 || this._gl.getExtension('OES_element_index_uint') !== null,
            fragmentDepthSupported: this._webGLVersion > 1 || this._gl.getExtension('EXT_frag_depth') !== null,
            highPrecisionShaderSupported: false,
            timerQuery: this._gl.getExtension('EXT_disjoint_timer_query_webgl2') || this._gl.getExtension("EXT_disjoint_timer_query"),
            supportOcclusionQuery: this._webGLVersion > 1,
            canUseTimestampForTimerQuery: false,
            drawBuffersExtension: false,
            maxMSAASamples: 1,
            colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension('EXT_color_buffer_float')),
            textureFloat: (this._webGLVersion > 1 || this._gl.getExtension('OES_texture_float')) ? true : false,
            textureHalfFloat: (this._webGLVersion > 1 || this._gl.getExtension('OES_texture_half_float')) ? true : false,
            textureHalfFloatRender: false,
            textureFloatLinearFiltering: false,
            textureFloatRender: false,
            textureHalfFloatLinearFiltering: false,
            vertexArrayObject: false,
            instancedArrays: false,
            textureLOD: (this._webGLVersion > 1 || this._gl.getExtension('EXT_shader_texture_lod')) ? true : false,
            blendMinMax: false,
            multiview: this._gl.getExtension('OVR_multiview2'),
            oculusMultiview: this._gl.getExtension('OCULUS_multiview'),
            depthTextureExtension: false,
            canUseGLInstanceID: this._webGLVersion > 1,
            canUseGLVertexID: this._webGLVersion > 1,
            supportComputeShaders: false,
            supportSRGBBuffers: false,
        };
        this._glVersion = this._gl.getParameter(this._gl.VERSION);
        var rendererInfo = this._gl.getExtension("WEBGL_debug_renderer_info");
        if (rendererInfo != null) {
            this._glRenderer = this._gl.getParameter(rendererInfo.UNMASKED_RENDERER_WEBGL);
            this._glVendor = this._gl.getParameter(rendererInfo.UNMASKED_VENDOR_WEBGL);
        }
        if (!this._glVendor) {
            this._glVendor = "Unknown vendor";
        }
        if (!this._glRenderer) {
            this._glRenderer = "Unknown renderer";
        }
        if (this._gl.HALF_FLOAT_OES !== 0x8D61) {
            this._gl.HALF_FLOAT_OES = 0x8D61;
        }
        if (this._gl.RGBA16F !== 0x881A) {
            this._gl.RGBA16F = 0x881A;
        }
        if (this._gl.RGBA32F !== 0x8814) {
            this._gl.RGBA32F = 0x8814;
        }
        if (this._gl.DEPTH24_STENCIL8 !== 35056) {
            this._gl.DEPTH24_STENCIL8 = 35056;
        }
        if (this._caps.timerQuery) {
            if (this._webGLVersion === 1) {
                this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery);
            }
            this._caps.canUseTimestampForTimerQuery = this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) > 0;
        }
        this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
        this._caps.textureFloatLinearFiltering = this._caps.textureFloat && this._gl.getExtension('OES_texture_float_linear') ? true : false;
        this._caps.textureFloatRender = this._caps.textureFloat && this._canRenderToFloatFramebuffer() ? true : false;
        this._caps.textureHalfFloatLinearFiltering = (this._webGLVersion > 1 || (this._caps.textureHalfFloat && this._gl.getExtension('OES_texture_half_float_linear'))) ? true : false;
        if (this._caps.astc) {
            this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
        }
        if (this._caps.bptc) {
            this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
        }
        if (this._caps.s3tc_srgb) {
            this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        }
        if (this._webGLVersion > 1) {
            if (this._gl.HALF_FLOAT_OES !== 0x140B) {
                this._gl.HALF_FLOAT_OES = 0x140B;
            }
        }
        this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer();
        if (this._webGLVersion > 1) {
            this._caps.drawBuffersExtension = true;
            this._caps.maxMSAASamples = this._gl.getParameter(this._gl.MAX_SAMPLES);
        }
        else {
            var drawBuffersExtension = this._gl.getExtension('WEBGL_draw_buffers');
            if (drawBuffersExtension !== null) {
                this._caps.drawBuffersExtension = true;
                this._gl.drawBuffers = drawBuffersExtension.drawBuffersWEBGL.bind(drawBuffersExtension);
                this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
                for (var i = 0; i < 16; i++) {
                    this._gl["COLOR_ATTACHMENT" + i + "_WEBGL"] = drawBuffersExtension["COLOR_ATTACHMENT" + i + "_WEBGL"];
                }
            }
        }
        if (this._webGLVersion > 1) {
            this._caps.depthTextureExtension = true;
        }
        else {
            var depthTextureExtension = this._gl.getExtension('WEBGL_depth_texture');
            if (depthTextureExtension != null) {
                this._caps.depthTextureExtension = true;
                this._gl.UNSIGNED_INT_24_8 = depthTextureExtension.UNSIGNED_INT_24_8_WEBGL;
            }
        }
        if (this.disableVertexArrayObjects) {
            this._caps.vertexArrayObject = false;
        }
        else if (this._webGLVersion > 1) {
            this._caps.vertexArrayObject = true;
        }
        else {
            var vertexArrayObjectExtension = this._gl.getExtension('OES_vertex_array_object');
            if (vertexArrayObjectExtension != null) {
                this._caps.vertexArrayObject = true;
                this._gl.createVertexArray = vertexArrayObjectExtension.createVertexArrayOES.bind(vertexArrayObjectExtension);
                this._gl.bindVertexArray = vertexArrayObjectExtension.bindVertexArrayOES.bind(vertexArrayObjectExtension);
                this._gl.deleteVertexArray = vertexArrayObjectExtension.deleteVertexArrayOES.bind(vertexArrayObjectExtension);
            }
        }
        if (this._webGLVersion > 1) {
            this._caps.instancedArrays = true;
        }
        else {
            var instanceExtension = this._gl.getExtension('ANGLE_instanced_arrays');
            if (instanceExtension != null) {
                this._caps.instancedArrays = true;
                this._gl.drawArraysInstanced = instanceExtension.drawArraysInstancedANGLE.bind(instanceExtension);
                this._gl.drawElementsInstanced = instanceExtension.drawElementsInstancedANGLE.bind(instanceExtension);
                this._gl.vertexAttribDivisor = instanceExtension.vertexAttribDivisorANGLE.bind(instanceExtension);
            }
            else {
                this._caps.instancedArrays = false;
            }
        }
        if (this._gl.getShaderPrecisionFormat) {
            var vertex_highp = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT);
            var fragment_highp = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
            if (vertex_highp && fragment_highp) {
                this._caps.highPrecisionShaderSupported = vertex_highp.precision !== 0 && fragment_highp.precision !== 0;
            }
        }
        if (this._webGLVersion > 1) {
            this._caps.blendMinMax = true;
        }
        else {
            const blendMinMaxExtension = this._gl.getExtension('EXT_blend_minmax');
            if (blendMinMaxExtension != null) {
                this._caps.blendMinMax = true;
                this._gl.MAX = blendMinMaxExtension.MAX_EXT;
                this._gl.MIN = blendMinMaxExtension.MIN_EXT;
            }
        }
        if (this._webGLVersion > 1) {
            this._caps.supportSRGBBuffers = true;
        }
        else {
            const sRGBExtension = this._gl.getExtension('EXT_sRGB');
            if (sRGBExtension != null) {
                this._caps.supportSRGBBuffers = true;
                this._gl.SRGB = sRGBExtension.SRGB_EXT;
                this._gl.SRGB8 = sRGBExtension.SRGB_ALPHA_EXT;
                this._gl.SRGB8_ALPHA8 = sRGBExtension.SRGB_ALPHA_EXT;
            }
        }
        this._depthCullingState.depthTest = true;
        this._depthCullingState.depthFunc = this._gl.LEQUAL;
        this._depthCullingState.depthMask = true;
        this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let slot = 0; slot < this._maxSimultaneousTextures; slot++) {
            this._nextFreeTextureSlots.push(slot);
        }
    }
    _initFeatures() {
        this._features = {
            forceBitmapOverHTMLImageElement: false,
            supportRenderAndCopyToLodForFloatTextures: this._webGLVersion !== 1,
            supportDepthStencilTexture: this._webGLVersion !== 1,
            supportShadowSamplers: this._webGLVersion !== 1,
            uniformBufferHardCheckMatrix: false,
            allowTexturePrefiltering: this._webGLVersion !== 1,
            trackUbosInFrame: false,
            checkUbosContentBeforeUpload: false,
            supportCSM: this._webGLVersion !== 1,
            basisNeedsPOT: this._webGLVersion === 1,
            support3DTextures: this._webGLVersion !== 1,
            needTypeSuffixInShaderConstants: this._webGLVersion !== 1,
            supportMSAA: this._webGLVersion !== 1,
            supportSSAO2: this._webGLVersion !== 1,
            supportExtendedTextureFormats: this._webGLVersion !== 1,
            supportSwitchCaseInShader: this._webGLVersion !== 1,
            supportSyncTextureRead: true,
            needsInvertingBitmap: true,
            useUBOBindingCache: true,
            needShaderCodeInlining: false,
            needToAlwaysBindUniformBuffers: false,
            supportRenderPasses: false,
            _collectUbosUpdatedInFrame: false,
        };
    }
    get webGLVersion() {
        return this._webGLVersion;
    }
    getClassName() {
        return "ThinEngine";
    }
    get isStencilEnable() {
        return this._isStencilEnable;
    }
    _prepareWorkingCanvas() {
        if (this._workingCanvas) {
            return;
        }
        this._workingCanvas = this.createCanvas(1, 1);
        let context = this._workingCanvas.getContext("2d");
        if (context) {
            this._workingContext = context;
        }
    }
    resetTextureCache() {
        for (var key in this._boundTexturesCache) {
            if (!this._boundTexturesCache.hasOwnProperty(key)) {
                continue;
            }
            this._boundTexturesCache[key] = null;
        }
        this._currentTextureChannel = -1;
    }
    getInfo() {
        return this.getGlInfo();
    }
    getGlInfo() {
        return {
            vendor: this._glVendor,
            renderer: this._glRenderer,
            version: this._glVersion
        };
    }
    setHardwareScalingLevel(level) {
        this._hardwareScalingLevel = level;
        this.resize();
    }
    getHardwareScalingLevel() {
        return this._hardwareScalingLevel;
    }
    getLoadedTexturesCache() {
        return this._internalTexturesCache;
    }
    getCaps() {
        return this._caps;
    }
    stopRenderLoop(renderFunction) {
        if (!renderFunction) {
            this._activeRenderLoops = [];
            return;
        }
        var index = this._activeRenderLoops.indexOf(renderFunction);
        if (index >= 0) {
            this._activeRenderLoops.splice(index, 1);
        }
    }
    _renderLoop() {
        if (!this._contextWasLost) {
            var shouldRender = true;
            if (!this.renderEvenInBackground && this._windowIsBackground) {
                shouldRender = false;
            }
            if (shouldRender) {
                this.beginFrame();
                for (var index = 0; index < this._activeRenderLoops.length; index++) {
                    var renderFunction = this._activeRenderLoops[index];
                    renderFunction();
                }
                this.endFrame();
            }
        }
        if (this._activeRenderLoops.length > 0) {
            this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow());
        }
        else {
            this._renderingQueueLaunched = false;
        }
    }
    getRenderingCanvas() {
        return this._renderingCanvas;
    }
    getAudioContext() {
        return this._audioContext;
    }
    getAudioDestination() {
        return this._audioDestination;
    }
    getHostWindow() {
        if (!IsWindowObjectExist()) {
            return null;
        }
        if (this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView) {
            return this._renderingCanvas.ownerDocument.defaultView;
        }
        return window;
    }
    getRenderWidth(useScreen = false) {
        if (!useScreen && this._currentRenderTarget) {
            return this._currentRenderTarget.width;
        }
        return this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth;
    }
    getRenderHeight(useScreen = false) {
        if (!useScreen && this._currentRenderTarget) {
            return this._currentRenderTarget.height;
        }
        return this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight;
    }
    _queueNewFrame(bindedRenderFunction, requester) {
        return ThinEngine.QueueNewFrame(bindedRenderFunction, requester);
    }
    runRenderLoop(renderFunction) {
        if (this._activeRenderLoops.indexOf(renderFunction) !== -1) {
            return;
        }
        this._activeRenderLoops.push(renderFunction);
        if (!this._renderingQueueLaunched) {
            this._renderingQueueLaunched = true;
            this._boundRenderFunction = this._renderLoop.bind(this);
            this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow());
        }
    }
    clear(color, backBuffer, depth, stencil = false) {
        const useStencilGlobalOnly = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = true;
        this.applyStates();
        this.stencilStateComposer.useStencilGlobalOnly = useStencilGlobalOnly;
        var mode = 0;
        if (backBuffer && color) {
            this._gl.clearColor(color.r, color.g, color.b, color.a !== undefined ? color.a : 1.0);
            mode |= this._gl.COLOR_BUFFER_BIT;
        }
        if (depth) {
            if (this.useReverseDepthBuffer) {
                this._depthCullingState.depthFunc = this._gl.GEQUAL;
                this._gl.clearDepth(0.0);
            }
            else {
                this._gl.clearDepth(1.0);
            }
            mode |= this._gl.DEPTH_BUFFER_BIT;
        }
        if (stencil) {
            this._gl.clearStencil(0);
            mode |= this._gl.STENCIL_BUFFER_BIT;
        }
        this._gl.clear(mode);
    }
    _viewport(x, y, width, height) {
        if (x !== this._viewportCached.x ||
            y !== this._viewportCached.y ||
            width !== this._viewportCached.z ||
            height !== this._viewportCached.w) {
            this._viewportCached.x = x;
            this._viewportCached.y = y;
            this._viewportCached.z = width;
            this._viewportCached.w = height;
            this._gl.viewport(x, y, width, height);
        }
    }
    setViewport(viewport, requiredWidth, requiredHeight) {
        var width = requiredWidth || this.getRenderWidth();
        var height = requiredHeight || this.getRenderHeight();
        var x = viewport.x || 0;
        var y = viewport.y || 0;
        this._cachedViewport = viewport;
        this._viewport(x * width, y * height, width * viewport.width, height * viewport.height);
    }
    beginFrame() {
    }
    endFrame() {
        if (this._badOS) {
            this.flushFramebuffer();
        }
        this._frameId++;
    }
    resize(forceSetSize = false) {
        let width;
        let height;
        if (IsWindowObjectExist()) {
            width = this._renderingCanvas ? (this._renderingCanvas.clientWidth || this._renderingCanvas.width) : window.innerWidth;
            height = this._renderingCanvas ? (this._renderingCanvas.clientHeight || this._renderingCanvas.height) : window.innerHeight;
        }
        else {
            width = this._renderingCanvas ? this._renderingCanvas.width : 100;
            height = this._renderingCanvas ? this._renderingCanvas.height : 100;
        }
        this.setSize(width / this._hardwareScalingLevel, height / this._hardwareScalingLevel, forceSetSize);
    }
    setSize(width, height, forceSetSize = false) {
        if (!this._renderingCanvas) {
            return false;
        }
        width = width | 0;
        height = height | 0;
        if (!forceSetSize && this._renderingCanvas.width === width && this._renderingCanvas.height === height) {
            return false;
        }
        this._renderingCanvas.width = width;
        this._renderingCanvas.height = height;
        return true;
    }
    bindFramebuffer(texture, faceIndex = 0, requiredWidth, requiredHeight, forceFullscreenViewport, lodLevel = 0, layer = 0) {
        var _a, _b, _c, _d, _e;
        const webglRTWrapper = texture;
        if (this._currentRenderTarget) {
            this.unBindFramebuffer(this._currentRenderTarget);
        }
        this._currentRenderTarget = texture;
        this._bindUnboundFramebuffer(webglRTWrapper._MSAAFramebuffer ? webglRTWrapper._MSAAFramebuffer : webglRTWrapper._framebuffer);
        const gl = this._gl;
        if (texture.is2DArray) {
            gl.framebufferTextureLayer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, (_a = texture.texture._hardwareTexture) === null || _a === void 0 ? void 0 : _a.underlyingResource, lodLevel, layer);
        }
        else if (texture.isCube) {
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, (_b = texture.texture._hardwareTexture) === null || _b === void 0 ? void 0 : _b.underlyingResource, lodLevel);
        }
        const depthStencilTexture = texture._depthStencilTexture;
        if (depthStencilTexture) {
            const attachment = (texture._depthStencilTextureWithStencil) ? gl.DEPTH_STENCIL_ATTACHMENT : gl.DEPTH_ATTACHMENT;
            if (texture.is2DArray) {
                gl.framebufferTextureLayer(gl.FRAMEBUFFER, attachment, (_c = depthStencilTexture._hardwareTexture) === null || _c === void 0 ? void 0 : _c.underlyingResource, lodLevel, layer);
            }
            else if (texture.isCube) {
                gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, (_d = depthStencilTexture._hardwareTexture) === null || _d === void 0 ? void 0 : _d.underlyingResource, lodLevel);
            }
            else {
                gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, (_e = depthStencilTexture._hardwareTexture) === null || _e === void 0 ? void 0 : _e.underlyingResource, lodLevel);
            }
        }
        if (this._cachedViewport && !forceFullscreenViewport) {
            this.setViewport(this._cachedViewport, requiredWidth, requiredHeight);
        }
        else {
            if (!requiredWidth) {
                requiredWidth = texture.width;
                if (lodLevel) {
                    requiredWidth = requiredWidth / Math.pow(2, lodLevel);
                }
            }
            if (!requiredHeight) {
                requiredHeight = texture.height;
                if (lodLevel) {
                    requiredHeight = requiredHeight / Math.pow(2, lodLevel);
                }
            }
            this._viewport(0, 0, requiredWidth, requiredHeight);
        }
        this.wipeCaches();
    }
    setState(culling, zOffset = 0, force, reverseSide = false, cullBackFaces, stencil, zOffsetUnits = 0) {
        var _a, _b;
        if (this._depthCullingState.cull !== culling || force) {
            this._depthCullingState.cull = culling;
        }
        var cullFace = ((_b = (_a = this.cullBackFaces) !== null && _a !== void 0 ? _a : cullBackFaces) !== null && _b !== void 0 ? _b : true) ? this._gl.BACK : this._gl.FRONT;
        if (this._depthCullingState.cullFace !== cullFace || force) {
            this._depthCullingState.cullFace = cullFace;
        }
        this.setZOffset(zOffset);
        this.setZOffsetUnits(zOffsetUnits);
        var frontFace = reverseSide ? this._gl.CW : this._gl.CCW;
        if (this._depthCullingState.frontFace !== frontFace || force) {
            this._depthCullingState.frontFace = frontFace;
        }
        this._stencilStateComposer.stencilMaterial = stencil;
    }
    setZOffset(value) {
        this._depthCullingState.zOffset = this.useReverseDepthBuffer ? -value : value;
    }
    getZOffset() {
        const zOffset = this._depthCullingState.zOffset;
        return this.useReverseDepthBuffer ? -zOffset : zOffset;
    }
    setZOffsetUnits(value) {
        this._depthCullingState.zOffsetUnits = this.useReverseDepthBuffer ? -value : value;
    }
    getZOffsetUnits() {
        const zOffsetUnits = this._depthCullingState.zOffsetUnits;
        return this.useReverseDepthBuffer ? -zOffsetUnits : zOffsetUnits;
    }
    _bindUnboundFramebuffer(framebuffer) {
        if (this._currentFramebuffer !== framebuffer) {
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, framebuffer);
            this._currentFramebuffer = framebuffer;
        }
    }
    _currentFrameBufferIsDefaultFrameBuffer() {
        return this._currentFramebuffer === null;
    }
    generateMipmaps(texture) {
        this._bindTextureDirectly(this._gl.TEXTURE_2D, texture, true);
        this._gl.generateMipmap(this._gl.TEXTURE_2D);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
    }
    unBindFramebuffer(texture, disableGenerateMipMaps = false, onBeforeUnbind) {
        var _a;
        const webglRTWrapper = texture;
        this._currentRenderTarget = null;
        var gl = this._gl;
        if (webglRTWrapper._MSAAFramebuffer) {
            if (texture.isMulti) {
                this.unBindMultiColorAttachmentFramebuffer(texture, disableGenerateMipMaps, onBeforeUnbind);
                return;
            }
            gl.bindFramebuffer(gl.READ_FRAMEBUFFER, webglRTWrapper._MSAAFramebuffer);
            gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, webglRTWrapper._framebuffer);
            gl.blitFramebuffer(0, 0, texture.width, texture.height, 0, 0, texture.width, texture.height, gl.COLOR_BUFFER_BIT, gl.NEAREST);
        }
        if (((_a = texture.texture) === null || _a === void 0 ? void 0 : _a.generateMipMaps) && !disableGenerateMipMaps && !texture.isCube) {
            this.generateMipmaps(texture.texture);
        }
        if (onBeforeUnbind) {
            if (webglRTWrapper._MSAAFramebuffer) {
                this._bindUnboundFramebuffer(webglRTWrapper._framebuffer);
            }
            onBeforeUnbind();
        }
        this._bindUnboundFramebuffer(null);
    }
    flushFramebuffer() {
        this._gl.flush();
    }
    restoreDefaultFramebuffer() {
        if (this._currentRenderTarget) {
            this.unBindFramebuffer(this._currentRenderTarget);
        }
        else {
            this._bindUnboundFramebuffer(null);
        }
        if (this._cachedViewport) {
            this.setViewport(this._cachedViewport);
        }
        this.wipeCaches();
    }
    _resetVertexBufferBinding() {
        this.bindArrayBuffer(null);
        this._cachedVertexBuffers = null;
    }
    createVertexBuffer(data) {
        return this._createVertexBuffer(data, this._gl.STATIC_DRAW);
    }
    _createVertexBuffer(data, usage) {
        var vbo = this._gl.createBuffer();
        if (!vbo) {
            throw new Error("Unable to create vertex buffer");
        }
        let dataBuffer = new WebGLDataBuffer(vbo);
        this.bindArrayBuffer(dataBuffer);
        if (data instanceof Array) {
            this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(data), usage);
        }
        else {
            this._gl.bufferData(this._gl.ARRAY_BUFFER, data, usage);
        }
        this._resetVertexBufferBinding();
        dataBuffer.references = 1;
        return dataBuffer;
    }
    createDynamicVertexBuffer(data) {
        return this._createVertexBuffer(data, this._gl.DYNAMIC_DRAW);
    }
    _resetIndexBufferBinding() {
        this.bindIndexBuffer(null);
        this._cachedIndexBuffer = null;
    }
    createIndexBuffer(indices, updatable) {
        var vbo = this._gl.createBuffer();
        let dataBuffer = new WebGLDataBuffer(vbo);
        if (!vbo) {
            throw new Error("Unable to create index buffer");
        }
        this.bindIndexBuffer(dataBuffer);
        const data = this._normalizeIndexData(indices);
        this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, data, updatable ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW);
        this._resetIndexBufferBinding();
        dataBuffer.references = 1;
        dataBuffer.is32Bits = (data.BYTES_PER_ELEMENT === 4);
        return dataBuffer;
    }
    _normalizeIndexData(indices) {
        const bytesPerElement = indices.BYTES_PER_ELEMENT;
        if (bytesPerElement === 2) {
            return indices;
        }
        if (this._caps.uintIndices) {
            if (indices instanceof Uint32Array) {
                return indices;
            }
            else {
                for (var index = 0; index < indices.length; index++) {
                    if (indices[index] >= 65535) {
                        return new Uint32Array(indices);
                    }
                }
                return new Uint16Array(indices);
            }
        }
        return new Uint16Array(indices);
    }
    bindArrayBuffer(buffer) {
        if (!this._vaoRecordInProgress) {
            this._unbindVertexArrayObject();
        }
        this.bindBuffer(buffer, this._gl.ARRAY_BUFFER);
    }
    bindUniformBlock(pipelineContext, blockName, index) {
        let program = pipelineContext.program;
        var uniformLocation = this._gl.getUniformBlockIndex(program, blockName);
        this._gl.uniformBlockBinding(program, uniformLocation, index);
    }
    bindIndexBuffer(buffer) {
        if (!this._vaoRecordInProgress) {
            this._unbindVertexArrayObject();
        }
        this.bindBuffer(buffer, this._gl.ELEMENT_ARRAY_BUFFER);
    }
    bindBuffer(buffer, target) {
        if (this._vaoRecordInProgress || this._currentBoundBuffer[target] !== buffer) {
            this._gl.bindBuffer(target, buffer ? buffer.underlyingResource : null);
            this._currentBoundBuffer[target] = buffer;
        }
    }
    updateArrayBuffer(data) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, data);
    }
    _vertexAttribPointer(buffer, indx, size, type, normalized, stride, offset) {
        var pointer = this._currentBufferPointers[indx];
        if (!pointer) {
            return;
        }
        var changed = false;
        if (!pointer.active) {
            changed = true;
            pointer.active = true;
            pointer.index = indx;
            pointer.size = size;
            pointer.type = type;
            pointer.normalized = normalized;
            pointer.stride = stride;
            pointer.offset = offset;
            pointer.buffer = buffer;
        }
        else {
            if (pointer.buffer !== buffer) {
                pointer.buffer = buffer;
                changed = true;
            }
            if (pointer.size !== size) {
                pointer.size = size;
                changed = true;
            }
            if (pointer.type !== type) {
                pointer.type = type;
                changed = true;
            }
            if (pointer.normalized !== normalized) {
                pointer.normalized = normalized;
                changed = true;
            }
            if (pointer.stride !== stride) {
                pointer.stride = stride;
                changed = true;
            }
            if (pointer.offset !== offset) {
                pointer.offset = offset;
                changed = true;
            }
        }
        if (changed || this._vaoRecordInProgress) {
            this.bindArrayBuffer(buffer);
            this._gl.vertexAttribPointer(indx, size, type, normalized, stride, offset);
        }
    }
    _bindIndexBufferWithCache(indexBuffer) {
        if (indexBuffer == null) {
            return;
        }
        if (this._cachedIndexBuffer !== indexBuffer) {
            this._cachedIndexBuffer = indexBuffer;
            this.bindIndexBuffer(indexBuffer);
            this._uintIndicesCurrentlySet = indexBuffer.is32Bits;
        }
    }
    _bindVertexBuffersAttributes(vertexBuffers, effect, overrideVertexBuffers) {
        var attributes = effect.getAttributesNames();
        if (!this._vaoRecordInProgress) {
            this._unbindVertexArrayObject();
        }
        this.unbindAllAttributes();
        for (var index = 0; index < attributes.length; index++) {
            var order = effect.getAttributeLocation(index);
            if (order >= 0) {
                var ai = attributes[index];
                var vertexBuffer = null;
                if (overrideVertexBuffers) {
                    vertexBuffer = overrideVertexBuffers[ai];
                }
                if (!vertexBuffer) {
                    vertexBuffer = vertexBuffers[ai];
                }
                if (!vertexBuffer) {
                    continue;
                }
                this._gl.enableVertexAttribArray(order);
                if (!this._vaoRecordInProgress) {
                    this._vertexAttribArraysEnabled[order] = true;
                }
                var buffer = vertexBuffer.getBuffer();
                if (buffer) {
                    this._vertexAttribPointer(buffer, order, vertexBuffer.getSize(), vertexBuffer.type, vertexBuffer.normalized, vertexBuffer.byteStride, vertexBuffer.byteOffset);
                    if (vertexBuffer.getIsInstanced()) {
                        this._gl.vertexAttribDivisor(order, vertexBuffer.getInstanceDivisor());
                        if (!this._vaoRecordInProgress) {
                            this._currentInstanceLocations.push(order);
                            this._currentInstanceBuffers.push(buffer);
                        }
                    }
                }
            }
        }
    }
    recordVertexArrayObject(vertexBuffers, indexBuffer, effect, overrideVertexBuffers) {
        var vao = this._gl.createVertexArray();
        this._vaoRecordInProgress = true;
        this._gl.bindVertexArray(vao);
        this._mustWipeVertexAttributes = true;
        this._bindVertexBuffersAttributes(vertexBuffers, effect, overrideVertexBuffers);
        this.bindIndexBuffer(indexBuffer);
        this._vaoRecordInProgress = false;
        this._gl.bindVertexArray(null);
        return vao;
    }
    bindVertexArrayObject(vertexArrayObject, indexBuffer) {
        if (this._cachedVertexArrayObject !== vertexArrayObject) {
            this._cachedVertexArrayObject = vertexArrayObject;
            this._gl.bindVertexArray(vertexArrayObject);
            this._cachedVertexBuffers = null;
            this._cachedIndexBuffer = null;
            this._uintIndicesCurrentlySet = indexBuffer != null && indexBuffer.is32Bits;
            this._mustWipeVertexAttributes = true;
        }
    }
    bindBuffersDirectly(vertexBuffer, indexBuffer, vertexDeclaration, vertexStrideSize, effect) {
        if (this._cachedVertexBuffers !== vertexBuffer || this._cachedEffectForVertexBuffers !== effect) {
            this._cachedVertexBuffers = vertexBuffer;
            this._cachedEffectForVertexBuffers = effect;
            let attributesCount = effect.getAttributesCount();
            this._unbindVertexArrayObject();
            this.unbindAllAttributes();
            var offset = 0;
            for (var index = 0; index < attributesCount; index++) {
                if (index < vertexDeclaration.length) {
                    var order = effect.getAttributeLocation(index);
                    if (order >= 0) {
                        this._gl.enableVertexAttribArray(order);
                        this._vertexAttribArraysEnabled[order] = true;
                        this._vertexAttribPointer(vertexBuffer, order, vertexDeclaration[index], this._gl.FLOAT, false, vertexStrideSize, offset);
                    }
                    offset += vertexDeclaration[index] * 4;
                }
            }
        }
        this._bindIndexBufferWithCache(indexBuffer);
    }
    _unbindVertexArrayObject() {
        if (!this._cachedVertexArrayObject) {
            return;
        }
        this._cachedVertexArrayObject = null;
        this._gl.bindVertexArray(null);
    }
    bindBuffers(vertexBuffers, indexBuffer, effect, overrideVertexBuffers) {
        if (this._cachedVertexBuffers !== vertexBuffers || this._cachedEffectForVertexBuffers !== effect) {
            this._cachedVertexBuffers = vertexBuffers;
            this._cachedEffectForVertexBuffers = effect;
            this._bindVertexBuffersAttributes(vertexBuffers, effect, overrideVertexBuffers);
        }
        this._bindIndexBufferWithCache(indexBuffer);
    }
    unbindInstanceAttributes() {
        var boundBuffer;
        for (var i = 0, ul = this._currentInstanceLocations.length; i < ul; i++) {
            var instancesBuffer = this._currentInstanceBuffers[i];
            if (boundBuffer != instancesBuffer && instancesBuffer.references) {
                boundBuffer = instancesBuffer;
                this.bindArrayBuffer(instancesBuffer);
            }
            var offsetLocation = this._currentInstanceLocations[i];
            this._gl.vertexAttribDivisor(offsetLocation, 0);
        }
        this._currentInstanceBuffers.length = 0;
        this._currentInstanceLocations.length = 0;
    }
    releaseVertexArrayObject(vao) {
        this._gl.deleteVertexArray(vao);
    }
    _releaseBuffer(buffer) {
        buffer.references--;
        if (buffer.references === 0) {
            this._deleteBuffer(buffer);
            return true;
        }
        return false;
    }
    _deleteBuffer(buffer) {
        this._gl.deleteBuffer(buffer.underlyingResource);
    }
    updateAndBindInstancesBuffer(instancesBuffer, data, offsetLocations) {
        this.bindArrayBuffer(instancesBuffer);
        if (data) {
            this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, data);
        }
        if (offsetLocations[0].index !== undefined) {
            this.bindInstancesBuffer(instancesBuffer, offsetLocations, true);
        }
        else {
            for (let index = 0; index < 4; index++) {
                let offsetLocation = offsetLocations[index];
                if (!this._vertexAttribArraysEnabled[offsetLocation]) {
                    this._gl.enableVertexAttribArray(offsetLocation);
                    this._vertexAttribArraysEnabled[offsetLocation] = true;
                }
                this._vertexAttribPointer(instancesBuffer, offsetLocation, 4, this._gl.FLOAT, false, 64, index * 16);
                this._gl.vertexAttribDivisor(offsetLocation, 1);
                this._currentInstanceLocations.push(offsetLocation);
                this._currentInstanceBuffers.push(instancesBuffer);
            }
        }
    }
    bindInstancesBuffer(instancesBuffer, attributesInfo, computeStride = true) {
        this.bindArrayBuffer(instancesBuffer);
        let stride = 0;
        if (computeStride) {
            for (let i = 0; i < attributesInfo.length; i++) {
                let ai = attributesInfo[i];
                stride += ai.attributeSize * 4;
            }
        }
        for (let i = 0; i < attributesInfo.length; i++) {
            let ai = attributesInfo[i];
            if (ai.index === undefined) {
                ai.index = this._currentEffect.getAttributeLocationByName(ai.attributeName);
            }
            if (ai.index < 0) {
                continue;
            }
            if (!this._vertexAttribArraysEnabled[ai.index]) {
                this._gl.enableVertexAttribArray(ai.index);
                this._vertexAttribArraysEnabled[ai.index] = true;
            }
            this._vertexAttribPointer(instancesBuffer, ai.index, ai.attributeSize, ai.attributeType || this._gl.FLOAT, ai.normalized || false, stride, ai.offset);
            this._gl.vertexAttribDivisor(ai.index, ai.divisor === undefined ? 1 : ai.divisor);
            this._currentInstanceLocations.push(ai.index);
            this._currentInstanceBuffers.push(instancesBuffer);
        }
    }
    disableInstanceAttributeByName(name) {
        if (!this._currentEffect) {
            return;
        }
        const attributeLocation = this._currentEffect.getAttributeLocationByName(name);
        this.disableInstanceAttribute(attributeLocation);
    }
    disableInstanceAttribute(attributeLocation) {
        let shouldClean = false;
        let index;
        while ((index = this._currentInstanceLocations.indexOf(attributeLocation)) !== -1) {
            this._currentInstanceLocations.splice(index, 1);
            this._currentInstanceBuffers.splice(index, 1);
            shouldClean = true;
            index = this._currentInstanceLocations.indexOf(attributeLocation);
        }
        if (shouldClean) {
            this._gl.vertexAttribDivisor(attributeLocation, 0);
            this.disableAttributeByIndex(attributeLocation);
        }
    }
    disableAttributeByIndex(attributeLocation) {
        this._gl.disableVertexAttribArray(attributeLocation);
        this._vertexAttribArraysEnabled[attributeLocation] = false;
        this._currentBufferPointers[attributeLocation].active = false;
    }
    draw(useTriangles, indexStart, indexCount, instancesCount) {
        this.drawElementsType(useTriangles ? Constants.MATERIAL_TriangleFillMode : Constants.MATERIAL_WireFrameFillMode, indexStart, indexCount, instancesCount);
    }
    drawPointClouds(verticesStart, verticesCount, instancesCount) {
        this.drawArraysType(Constants.MATERIAL_PointFillMode, verticesStart, verticesCount, instancesCount);
    }
    drawUnIndexed(useTriangles, verticesStart, verticesCount, instancesCount) {
        this.drawArraysType(useTriangles ? Constants.MATERIAL_TriangleFillMode : Constants.MATERIAL_WireFrameFillMode, verticesStart, verticesCount, instancesCount);
    }
    drawElementsType(fillMode, indexStart, indexCount, instancesCount) {
        this.applyStates();
        this._reportDrawCall();
        const drawMode = this._drawMode(fillMode);
        var indexFormat = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT;
        var mult = this._uintIndicesCurrentlySet ? 4 : 2;
        if (instancesCount) {
            this._gl.drawElementsInstanced(drawMode, indexCount, indexFormat, indexStart * mult, instancesCount);
        }
        else {
            this._gl.drawElements(drawMode, indexCount, indexFormat, indexStart * mult);
        }
    }
    drawArraysType(fillMode, verticesStart, verticesCount, instancesCount) {
        this.applyStates();
        this._reportDrawCall();
        const drawMode = this._drawMode(fillMode);
        if (instancesCount) {
            this._gl.drawArraysInstanced(drawMode, verticesStart, verticesCount, instancesCount);
        }
        else {
            this._gl.drawArrays(drawMode, verticesStart, verticesCount);
        }
    }
    _drawMode(fillMode) {
        switch (fillMode) {
            case Constants.MATERIAL_TriangleFillMode:
                return this._gl.TRIANGLES;
            case Constants.MATERIAL_PointFillMode:
                return this._gl.POINTS;
            case Constants.MATERIAL_WireFrameFillMode:
                return this._gl.LINES;
            case Constants.MATERIAL_PointListDrawMode:
                return this._gl.POINTS;
            case Constants.MATERIAL_LineListDrawMode:
                return this._gl.LINES;
            case Constants.MATERIAL_LineLoopDrawMode:
                return this._gl.LINE_LOOP;
            case Constants.MATERIAL_LineStripDrawMode:
                return this._gl.LINE_STRIP;
            case Constants.MATERIAL_TriangleStripDrawMode:
                return this._gl.TRIANGLE_STRIP;
            case Constants.MATERIAL_TriangleFanDrawMode:
                return this._gl.TRIANGLE_FAN;
            default:
                return this._gl.TRIANGLES;
        }
    }
    _reportDrawCall() {
    }
    _releaseEffect(effect) {
        if (this._compiledEffects[effect._key]) {
            delete this._compiledEffects[effect._key];
            const pipelineContext = effect.getPipelineContext();
            if (pipelineContext) {
                this._deletePipelineContext(pipelineContext);
            }
        }
    }
    _deletePipelineContext(pipelineContext) {
        const webGLPipelineContext = pipelineContext;
        if (webGLPipelineContext && webGLPipelineContext.program) {
            webGLPipelineContext.program.__SPECTOR_rebuildProgram = null;
            this._gl.deleteProgram(webGLPipelineContext.program);
        }
    }
    _getGlobalDefines(defines) {
        if (defines) {
            if (this.isNDCHalfZRange) {
                defines["IS_NDC_HALF_ZRANGE"] = "";
            }
            else {
                delete defines["IS_NDC_HALF_ZRANGE"];
            }
            if (this.useReverseDepthBuffer) {
                defines["USE_REVERSE_DEPTHBUFFER"] = "";
            }
            else {
                delete defines["USE_REVERSE_DEPTHBUFFER"];
            }
            return;
        }
        else {
            let s = "";
            if (this.isNDCHalfZRange) {
                s += "#define IS_NDC_HALF_ZRANGE";
            }
            if (this.useReverseDepthBuffer) {
                if (s) {
                    s += "\n";
                }
                s += "#define USE_REVERSE_DEPTHBUFFER";
            }
            return s;
        }
    }
    createEffect(baseName, attributesNamesOrOptions, uniformsNamesOrEngine, samplers, defines, fallbacks, onCompiled, onError, indexParameters, shaderLanguage = ShaderLanguage.GLSL) {
        var _a;
        var vertex = baseName.vertexElement || baseName.vertex || baseName.vertexToken || baseName.vertexSource || baseName;
        var fragment = baseName.fragmentElement || baseName.fragment || baseName.fragmentToken || baseName.fragmentSource || baseName;
        const globalDefines = this._getGlobalDefines();
        let fullDefines = (_a = defines !== null && defines !== void 0 ? defines : attributesNamesOrOptions.defines) !== null && _a !== void 0 ? _a : "";
        if (globalDefines) {
            fullDefines += globalDefines;
        }
        var name = vertex + "+" + fragment + "@" + fullDefines;
        if (this._compiledEffects[name]) {
            var compiledEffect = this._compiledEffects[name];
            if (onCompiled && compiledEffect.isReady()) {
                onCompiled(compiledEffect);
            }
            return compiledEffect;
        }
        var effect = new Effect(baseName, attributesNamesOrOptions, uniformsNamesOrEngine, samplers, this, defines, fallbacks, onCompiled, onError, indexParameters, name, shaderLanguage);
        this._compiledEffects[name] = effect;
        return effect;
    }
    static _ConcatenateShader(source, defines, shaderVersion = "") {
        return shaderVersion + (defines ? defines + "\n" : "") + source;
    }
    _compileShader(source, type, defines, shaderVersion) {
        return this._compileRawShader(ThinEngine._ConcatenateShader(source, defines, shaderVersion), type);
    }
    _compileRawShader(source, type) {
        var gl = this._gl;
        while (gl.getError() != gl.NO_ERROR) { }
        var shader = gl.createShader(type === "vertex" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER);
        if (!shader) {
            throw new Error(`Something went wrong while creating a gl ${type} shader object. gl error=${gl.getError()}, gl isContextLost=${gl.isContextLost()}, _contextWasLost=${this._contextWasLost}`);
        }
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    }
    _getShaderSource(shader) {
        return this._gl.getShaderSource(shader);
    }
    createRawShaderProgram(pipelineContext, vertexCode, fragmentCode, context, transformFeedbackVaryings = null) {
        context = context || this._gl;
        var vertexShader = this._compileRawShader(vertexCode, "vertex");
        var fragmentShader = this._compileRawShader(fragmentCode, "fragment");
        return this._createShaderProgram(pipelineContext, vertexShader, fragmentShader, context, transformFeedbackVaryings);
    }
    createShaderProgram(pipelineContext, vertexCode, fragmentCode, defines, context, transformFeedbackVaryings = null) {
        context = context || this._gl;
        var shaderVersion = (this._webGLVersion > 1) ? "#version 300 es\n#define WEBGL2 \n" : "";
        var vertexShader = this._compileShader(vertexCode, "vertex", defines, shaderVersion);
        var fragmentShader = this._compileShader(fragmentCode, "fragment", defines, shaderVersion);
        return this._createShaderProgram(pipelineContext, vertexShader, fragmentShader, context, transformFeedbackVaryings);
    }
    inlineShaderCode(code) {
        return code;
    }
    createPipelineContext(shaderProcessingContext) {
        var pipelineContext = new WebGLPipelineContext();
        pipelineContext.engine = this;
        if (this._caps.parallelShaderCompile) {
            pipelineContext.isParallelCompiled = true;
        }
        return pipelineContext;
    }
    createMaterialContext() {
        return undefined;
    }
    createDrawContext() {
        return undefined;
    }
    _createShaderProgram(pipelineContext, vertexShader, fragmentShader, context, transformFeedbackVaryings = null) {
        var shaderProgram = context.createProgram();
        pipelineContext.program = shaderProgram;
        if (!shaderProgram) {
            throw new Error("Unable to create program");
        }
        context.attachShader(shaderProgram, vertexShader);
        context.attachShader(shaderProgram, fragmentShader);
        context.linkProgram(shaderProgram);
        pipelineContext.context = context;
        pipelineContext.vertexShader = vertexShader;
        pipelineContext.fragmentShader = fragmentShader;
        if (!pipelineContext.isParallelCompiled) {
            this._finalizePipelineContext(pipelineContext);
        }
        return shaderProgram;
    }
    _finalizePipelineContext(pipelineContext) {
        const context = pipelineContext.context;
        const vertexShader = pipelineContext.vertexShader;
        const fragmentShader = pipelineContext.fragmentShader;
        const program = pipelineContext.program;
        var linked = context.getProgramParameter(program, context.LINK_STATUS);
        if (!linked) {
            if (!this._gl.getShaderParameter(vertexShader, this._gl.COMPILE_STATUS)) {
                const log = this._gl.getShaderInfoLog(vertexShader);
                if (log) {
                    pipelineContext.vertexCompilationError = log;
                    throw new Error("VERTEX SHADER " + log);
                }
            }
            if (!this._gl.getShaderParameter(fragmentShader, this._gl.COMPILE_STATUS)) {
                const log = this._gl.getShaderInfoLog(fragmentShader);
                if (log) {
                    pipelineContext.fragmentCompilationError = log;
                    throw new Error("FRAGMENT SHADER " + log);
                }
            }
            var error = context.getProgramInfoLog(program);
            if (error) {
                pipelineContext.programLinkError = error;
                throw new Error(error);
            }
        }
        if (this.validateShaderPrograms) {
            context.validateProgram(program);
            var validated = context.getProgramParameter(program, context.VALIDATE_STATUS);
            if (!validated) {
                var error = context.getProgramInfoLog(program);
                if (error) {
                    pipelineContext.programValidationError = error;
                    throw new Error(error);
                }
            }
        }
        context.deleteShader(vertexShader);
        context.deleteShader(fragmentShader);
        pipelineContext.vertexShader = undefined;
        pipelineContext.fragmentShader = undefined;
        if (pipelineContext.onCompiled) {
            pipelineContext.onCompiled();
            pipelineContext.onCompiled = undefined;
        }
    }
    _preparePipelineContext(pipelineContext, vertexSourceCode, fragmentSourceCode, createAsRaw, rawVertexSourceCode, rawFragmentSourceCode, rebuildRebind, defines, transformFeedbackVaryings, key) {
        let webGLRenderingState = pipelineContext;
        if (createAsRaw) {
            webGLRenderingState.program = this.createRawShaderProgram(webGLRenderingState, vertexSourceCode, fragmentSourceCode, undefined, transformFeedbackVaryings);
        }
        else {
            webGLRenderingState.program = this.createShaderProgram(webGLRenderingState, vertexSourceCode, fragmentSourceCode, defines, undefined, transformFeedbackVaryings);
        }
        webGLRenderingState.program.__SPECTOR_rebuildProgram = rebuildRebind;
    }
    _isRenderingStateCompiled(pipelineContext) {
        let webGLPipelineContext = pipelineContext;
        if (this._gl.getProgramParameter(webGLPipelineContext.program, this._caps.parallelShaderCompile.COMPLETION_STATUS_KHR)) {
            this._finalizePipelineContext(webGLPipelineContext);
            return true;
        }
        return false;
    }
    _executeWhenRenderingStateIsCompiled(pipelineContext, action) {
        let webGLPipelineContext = pipelineContext;
        if (!webGLPipelineContext.isParallelCompiled) {
            action();
            return;
        }
        let oldHandler = webGLPipelineContext.onCompiled;
        if (oldHandler) {
            webGLPipelineContext.onCompiled = () => {
                oldHandler();
                action();
            };
        }
        else {
            webGLPipelineContext.onCompiled = action;
        }
    }
    getUniforms(pipelineContext, uniformsNames) {
        var results = new Array();
        let webGLPipelineContext = pipelineContext;
        for (var index = 0; index < uniformsNames.length; index++) {
            results.push(this._gl.getUniformLocation(webGLPipelineContext.program, uniformsNames[index]));
        }
        return results;
    }
    getAttributes(pipelineContext, attributesNames) {
        var results = [];
        let webGLPipelineContext = pipelineContext;
        for (var index = 0; index < attributesNames.length; index++) {
            try {
                results.push(this._gl.getAttribLocation(webGLPipelineContext.program, attributesNames[index]));
            }
            catch (e) {
                results.push(-1);
            }
        }
        return results;
    }
    enableEffect(effect) {
        effect = effect !== null && DrawWrapper.IsWrapper(effect) ? effect.effect : effect;
        if (!effect || effect === this._currentEffect) {
            return;
        }
        this._stencilStateComposer.stencilMaterial = undefined;
        effect = effect;
        this.bindSamplers(effect);
        this._currentEffect = effect;
        if (effect.onBind) {
            effect.onBind(effect);
        }
        if (effect._onBindObservable) {
            effect._onBindObservable.notifyObservers(effect);
        }
    }
    setInt(uniform, value) {
        if (!uniform) {
            return false;
        }
        this._gl.uniform1i(uniform, value);
        return true;
    }
    setInt2(uniform, x, y) {
        if (!uniform) {
            return false;
        }
        this._gl.uniform2i(uniform, x, y);
        return true;
    }
    setInt3(uniform, x, y, z) {
        if (!uniform) {
            return false;
        }
        this._gl.uniform3i(uniform, x, y, z);
        return true;
    }
    setInt4(uniform, x, y, z, w) {
        if (!uniform) {
            return false;
        }
        this._gl.uniform4i(uniform, x, y, z, w);
        return true;
    }
    setIntArray(uniform, array) {
        if (!uniform) {
            return false;
        }
        this._gl.uniform1iv(uniform, array);
        return true;
    }
    setIntArray2(uniform, array) {
        if (!uniform || array.length % 2 !== 0) {
            return false;
        }
        this._gl.uniform2iv(uniform, array);
        return true;
    }
    setIntArray3(uniform, array) {
        if (!uniform || array.length % 3 !== 0) {
            return false;
        }
        this._gl.uniform3iv(uniform, array);
        return true;
    }
    setIntArray4(uniform, array) {
        if (!uniform || array.length % 4 !== 0) {
            return false;
        }
        this._gl.uniform4iv(uniform, array);
        return true;
    }
    setArray(uniform, array) {
        if (!uniform) {
            return false;
        }
        if (array.length < 1) {
            return false;
        }
        this._gl.uniform1fv(uniform, array);
        return true;
    }
    setArray2(uniform, array) {
        if (!uniform || array.length % 2 !== 0) {
            return false;
        }
        this._gl.uniform2fv(uniform, array);
        return true;
    }
    setArray3(uniform, array) {
        if (!uniform || array.length % 3 !== 0) {
            return false;
        }
        this._gl.uniform3fv(uniform, array);
        return true;
    }
    setArray4(uniform, array) {
        if (!uniform || array.length % 4 !== 0) {
            return false;
        }
        this._gl.uniform4fv(uniform, array);
        return true;
    }
    setMatrices(uniform, matrices) {
        if (!uniform) {
            return false;
        }
        this._gl.uniformMatrix4fv(uniform, false, matrices);
        return true;
    }
    setMatrix3x3(uniform, matrix) {
        if (!uniform) {
            return false;
        }
        this._gl.uniformMatrix3fv(uniform, false, matrix);
        return true;
    }
    setMatrix2x2(uniform, matrix) {
        if (!uniform) {
            return false;
        }
        this._gl.uniformMatrix2fv(uniform, false, matrix);
        return true;
    }
    setFloat(uniform, value) {
        if (!uniform) {
            return false;
        }
        this._gl.uniform1f(uniform, value);
        return true;
    }
    setFloat2(uniform, x, y) {
        if (!uniform) {
            return false;
        }
        this._gl.uniform2f(uniform, x, y);
        return true;
    }
    setFloat3(uniform, x, y, z) {
        if (!uniform) {
            return false;
        }
        this._gl.uniform3f(uniform, x, y, z);
        return true;
    }
    setFloat4(uniform, x, y, z, w) {
        if (!uniform) {
            return false;
        }
        this._gl.uniform4f(uniform, x, y, z, w);
        return true;
    }
    applyStates() {
        this._depthCullingState.apply(this._gl);
        this._stencilStateComposer.apply(this._gl);
        this._alphaState.apply(this._gl);
        if (this._colorWriteChanged) {
            this._colorWriteChanged = false;
            const enable = this._colorWrite;
            this._gl.colorMask(enable, enable, enable, enable);
        }
    }
    setColorWrite(enable) {
        if (enable !== this._colorWrite) {
            this._colorWriteChanged = true;
            this._colorWrite = enable;
        }
    }
    getColorWrite() {
        return this._colorWrite;
    }
    get depthCullingState() {
        return this._depthCullingState;
    }
    get alphaState() {
        return this._alphaState;
    }
    get stencilState() {
        return this._stencilState;
    }
    get stencilStateComposer() {
        return this._stencilStateComposer;
    }
    clearInternalTexturesCache() {
        this._internalTexturesCache = [];
    }
    wipeCaches(bruteForce) {
        if (this.preventCacheWipeBetweenFrames && !bruteForce) {
            return;
        }
        this._currentEffect = null;
        this._viewportCached.x = 0;
        this._viewportCached.y = 0;
        this._viewportCached.z = 0;
        this._viewportCached.w = 0;
        this._unbindVertexArrayObject();
        if (bruteForce) {
            this._currentProgram = null;
            this.resetTextureCache();
            this._stencilStateComposer.reset();
            this._depthCullingState.reset();
            this._depthCullingState.depthFunc = this._gl.LEQUAL;
            this._alphaState.reset();
            this._alphaMode = Constants.ALPHA_ADD;
            this._alphaEquation = Constants.ALPHA_DISABLE;
            this._colorWrite = true;
            this._colorWriteChanged = true;
            this._unpackFlipYCached = null;
            this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE);
            this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
            this._mustWipeVertexAttributes = true;
            this.unbindAllAttributes();
        }
        this._resetVertexBufferBinding();
        this._cachedIndexBuffer = null;
        this._cachedEffectForVertexBuffers = null;
        this.bindIndexBuffer(null);
    }
    _getSamplingParameters(samplingMode, generateMipMaps) {
        var gl = this._gl;
        var magFilter = gl.NEAREST;
        var minFilter = gl.NEAREST;
        switch (samplingMode) {
            case Constants.TEXTURE_LINEAR_LINEAR_MIPNEAREST:
                magFilter = gl.LINEAR;
                if (generateMipMaps) {
                    minFilter = gl.LINEAR_MIPMAP_NEAREST;
                }
                else {
                    minFilter = gl.LINEAR;
                }
                break;
            case Constants.TEXTURE_LINEAR_LINEAR_MIPLINEAR:
                magFilter = gl.LINEAR;
                if (generateMipMaps) {
                    minFilter = gl.LINEAR_MIPMAP_LINEAR;
                }
                else {
                    minFilter = gl.LINEAR;
                }
                break;
            case Constants.TEXTURE_NEAREST_NEAREST_MIPLINEAR:
                magFilter = gl.NEAREST;
                if (generateMipMaps) {
                    minFilter = gl.NEAREST_MIPMAP_LINEAR;
                }
                else {
                    minFilter = gl.NEAREST;
                }
                break;
            case Constants.TEXTURE_NEAREST_NEAREST_MIPNEAREST:
                magFilter = gl.NEAREST;
                if (generateMipMaps) {
                    minFilter = gl.NEAREST_MIPMAP_NEAREST;
                }
                else {
                    minFilter = gl.NEAREST;
                }
                break;
            case Constants.TEXTURE_NEAREST_LINEAR_MIPNEAREST:
                magFilter = gl.NEAREST;
                if (generateMipMaps) {
                    minFilter = gl.LINEAR_MIPMAP_NEAREST;
                }
                else {
                    minFilter = gl.LINEAR;
                }
                break;
            case Constants.TEXTURE_NEAREST_LINEAR_MIPLINEAR:
                magFilter = gl.NEAREST;
                if (generateMipMaps) {
                    minFilter = gl.LINEAR_MIPMAP_LINEAR;
                }
                else {
                    minFilter = gl.LINEAR;
                }
                break;
            case Constants.TEXTURE_NEAREST_LINEAR:
                magFilter = gl.NEAREST;
                minFilter = gl.LINEAR;
                break;
            case Constants.TEXTURE_NEAREST_NEAREST:
                magFilter = gl.NEAREST;
                minFilter = gl.NEAREST;
                break;
            case Constants.TEXTURE_LINEAR_NEAREST_MIPNEAREST:
                magFilter = gl.LINEAR;
                if (generateMipMaps) {
                    minFilter = gl.NEAREST_MIPMAP_NEAREST;
                }
                else {
                    minFilter = gl.NEAREST;
                }
                break;
            case Constants.TEXTURE_LINEAR_NEAREST_MIPLINEAR:
                magFilter = gl.LINEAR;
                if (generateMipMaps) {
                    minFilter = gl.NEAREST_MIPMAP_LINEAR;
                }
                else {
                    minFilter = gl.NEAREST;
                }
                break;
            case Constants.TEXTURE_LINEAR_LINEAR:
                magFilter = gl.LINEAR;
                minFilter = gl.LINEAR;
                break;
            case Constants.TEXTURE_LINEAR_NEAREST:
                magFilter = gl.LINEAR;
                minFilter = gl.NEAREST;
                break;
        }
        return {
            min: minFilter,
            mag: magFilter
        };
    }
    _createTexture() {
        let texture = this._gl.createTexture();
        if (!texture) {
            throw new Error("Unable to create texture");
        }
        return texture;
    }
    _createHardwareTexture() {
        return new WebGLHardwareTexture(this._createTexture(), this._gl);
    }
    _createInternalTexture(size, options, delayGPUTextureCreation = true, source = InternalTextureSource.Unknown) {
        const fullOptions = {};
        if (options !== undefined && typeof options === "object") {
            fullOptions.generateMipMaps = options.generateMipMaps;
            fullOptions.type = options.type === undefined ? Constants.TEXTURETYPE_UNSIGNED_INT : options.type;
            fullOptions.samplingMode = options.samplingMode === undefined ? Constants.TEXTURE_TRILINEAR_SAMPLINGMODE : options.samplingMode;
            fullOptions.format = options.format === undefined ? Constants.TEXTUREFORMAT_RGBA : options.format;
        }
        else {
            fullOptions.generateMipMaps = options;
            fullOptions.type = Constants.TEXTURETYPE_UNSIGNED_INT;
            fullOptions.samplingMode = Constants.TEXTURE_TRILINEAR_SAMPLINGMODE;
            fullOptions.format = Constants.TEXTUREFORMAT_RGBA;
        }
        if (fullOptions.type === Constants.TEXTURETYPE_FLOAT && !this._caps.textureFloatLinearFiltering) {
            fullOptions.samplingMode = Constants.TEXTURE_NEAREST_SAMPLINGMODE;
        }
        else if (fullOptions.type === Constants.TEXTURETYPE_HALF_FLOAT && !this._caps.textureHalfFloatLinearFiltering) {
            fullOptions.samplingMode = Constants.TEXTURE_NEAREST_SAMPLINGMODE;
        }
        if (fullOptions.type === Constants.TEXTURETYPE_FLOAT && !this._caps.textureFloat) {
            fullOptions.type = Constants.TEXTURETYPE_UNSIGNED_INT;
            Logger.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE");
        }
        const gl = this._gl;
        const texture = new InternalTexture(this, source);
        const width = size.width || size;
        const height = size.height || size;
        const layers = size.layers || 0;
        const filters = this._getSamplingParameters(fullOptions.samplingMode, fullOptions.generateMipMaps ? true : false);
        const target = layers !== 0 ? gl.TEXTURE_2D_ARRAY : gl.TEXTURE_2D;
        const sizedFormat = this._getRGBABufferInternalSizedFormat(fullOptions.type, fullOptions.format);
        const internalFormat = this._getInternalFormat(fullOptions.format);
        const type = this._getWebGLTextureType(fullOptions.type);
        this._bindTextureDirectly(target, texture);
        if (layers !== 0) {
            texture.is2DArray = true;
            gl.texImage3D(target, 0, sizedFormat, width, height, layers, 0, internalFormat, type, null);
        }
        else {
            gl.texImage2D(target, 0, sizedFormat, width, height, 0, internalFormat, type, null);
        }
        gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, filters.mag);
        gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, filters.min);
        gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        if (fullOptions.generateMipMaps) {
            this._gl.generateMipmap(target);
        }
        this._bindTextureDirectly(target, null);
        texture.baseWidth = width;
        texture.baseHeight = height;
        texture.width = width;
        texture.height = height;
        texture.depth = layers;
        texture.isReady = true;
        texture.samples = 1;
        texture.generateMipMaps = fullOptions.generateMipMaps ? true : false;
        texture.samplingMode = fullOptions.samplingMode;
        texture.type = fullOptions.type;
        texture.format = fullOptions.format;
        this._internalTexturesCache.push(texture);
        return texture;
    }
    _getUseSRGBBuffer(useSRGBBuffer, noMipmap) {
        return useSRGBBuffer && this._caps.supportSRGBBuffers && (this.webGLVersion > 1 || this.isWebGPU || noMipmap);
    }
    _createTextureBase(url, noMipmap, invertY, scene, samplingMode = Constants.TEXTURE_TRILINEAR_SAMPLINGMODE, onLoad = null, onError = null, prepareTexture, prepareTextureProcessFunction, buffer = null, fallback = null, format = null, forcedExtension = null, mimeType, loaderOptions, useSRGBBuffer) {
        url = url || "";
        const fromData = url.substr(0, 5) === "data:";
        const fromBlob = url.substr(0, 5) === "blob:";
        const isBase64 = fromData && url.indexOf(";base64,") !== -1;
        let texture = fallback ? fallback : new InternalTexture(this, InternalTextureSource.Url);
        const originalUrl = url;
        if (this._transformTextureUrl && !isBase64 && !fallback && !buffer) {
            url = this._transformTextureUrl(url);
        }
        if (originalUrl !== url) {
            texture._originalUrl = originalUrl;
        }
        const lastDot = url.lastIndexOf('.');
        let extension = forcedExtension ? forcedExtension : (lastDot > -1 ? url.substring(lastDot).toLowerCase() : "");
        let loader = null;
        let queryStringIndex = extension.indexOf("?");
        if (queryStringIndex > -1) {
            extension = extension.split("?")[0];
        }
        for (const availableLoader of ThinEngine._TextureLoaders) {
            if (availableLoader.canLoad(extension, mimeType)) {
                loader = availableLoader;
                break;
            }
        }
        if (scene) {
            scene._addPendingData(texture);
        }
        texture.url = url;
        texture.generateMipMaps = !noMipmap;
        texture.samplingMode = samplingMode;
        texture.invertY = invertY;
        texture._useSRGBBuffer = this._getUseSRGBBuffer(!!useSRGBBuffer, noMipmap);
        if (!this._doNotHandleContextLost) {
            texture._buffer = buffer;
        }
        let onLoadObserver = null;
        if (onLoad && !fallback) {
            onLoadObserver = texture.onLoadedObservable.add(onLoad);
        }
        if (!fallback) {
            this._internalTexturesCache.push(texture);
        }
        const onInternalError = (message, exception) => {
            if (scene) {
                scene._removePendingData(texture);
            }
            if (url === originalUrl) {
                if (onLoadObserver) {
                    texture.onLoadedObservable.remove(onLoadObserver);
                }
                if (EngineStore.UseFallbackTexture) {
                    this._createTextureBase(EngineStore.FallbackTexture, noMipmap, texture.invertY, scene, samplingMode, null, onError, prepareTexture, prepareTextureProcessFunction, buffer, texture);
                }
                message = (message || "Unknown error") + (EngineStore.UseFallbackTexture ? " - Fallback texture was used" : "");
                texture.onErrorObservable.notifyObservers({ message, exception });
                if (onError) {
                    onError(message, exception);
                }
            }
            else {
                Logger.Warn(`Failed to load ${url}, falling back to ${originalUrl}`);
                this._createTextureBase(originalUrl, noMipmap, texture.invertY, scene, samplingMode, onLoad, onError, prepareTexture, prepareTextureProcessFunction, buffer, texture, format, forcedExtension, mimeType, loaderOptions, useSRGBBuffer);
            }
        };
        if (loader) {
            const callback = (data) => {
                loader.loadData(data, texture, (width, height, loadMipmap, isCompressed, done, loadFailed) => {
                    if (loadFailed) {
                        onInternalError("TextureLoader failed to load data");
                    }
                    else {
                        prepareTexture(texture, extension, scene, { width, height }, texture.invertY, !loadMipmap, isCompressed, () => {
                            done();
                            return false;
                        }, samplingMode);
                    }
                }, loaderOptions);
            };
            if (!buffer) {
                this._loadFile(url, (data) => callback(new Uint8Array(data)), undefined, scene ? scene.offlineProvider : undefined, true, (request, exception) => {
                    onInternalError("Unable to load " + (exception));
                });
            }
            else {
                if (buffer instanceof ArrayBuffer) {
                    callback(new Uint8Array(buffer));
                }
                else if (ArrayBuffer.isView(buffer)) {
                    callback(buffer);
                }
                else {
                    if (onError) {
                        onError("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null);
                    }
                }
            }
        }
        else {
            const onload = (img) => {
                if (fromBlob && !this._doNotHandleContextLost) {
                    texture._buffer = img;
                }
                prepareTexture(texture, extension, scene, img, texture.invertY, noMipmap, false, prepareTextureProcessFunction, samplingMode);
            };
            if (!fromData || isBase64) {
                if (buffer && (typeof buffer.decoding === "string" || buffer.close)) {
                    onload(buffer);
                }
                else {
                    ThinEngine._FileToolsLoadImage(url, onload, onInternalError, scene ? scene.offlineProvider : null, mimeType, texture.invertY && this._features.needsInvertingBitmap ? { imageOrientation: "flipY" } : undefined);
                }
            }
            else if (typeof buffer === "string" || buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer) || buffer instanceof Blob) {
                ThinEngine._FileToolsLoadImage(buffer, onload, onInternalError, scene ? scene.offlineProvider : null, mimeType, texture.invertY && this._features.needsInvertingBitmap ? { imageOrientation: "flipY" } : undefined);
            }
            else if (buffer) {
                onload(buffer);
            }
        }
        return texture;
    }
    createTexture(url, noMipmap, invertY, scene, samplingMode = Constants.TEXTURE_TRILINEAR_SAMPLINGMODE, onLoad = null, onError = null, buffer = null, fallback = null, format = null, forcedExtension = null, mimeType, loaderOptions, creationFlags, useSRGBBuffer) {
        return this._createTextureBase(url, noMipmap, invertY, scene, samplingMode, onLoad, onError, this._prepareWebGLTexture.bind(this), (potWidth, potHeight, img, extension, texture, continuationCallback) => {
            let gl = this._gl;
            var isPot = (img.width === potWidth && img.height === potHeight);
            let internalFormat = format ?
                this._getInternalFormat(format, texture._useSRGBBuffer) :
                ((extension === ".jpg" && !texture._useSRGBBuffer) ? gl.RGB : (texture._useSRGBBuffer ? gl.SRGB8_ALPHA8 : gl.RGBA));
            let texelFormat = format ? this._getInternalFormat(format) : ((extension === ".jpg" && !texture._useSRGBBuffer) ? gl.RGB : gl.RGBA);
            if (texture._useSRGBBuffer && this.webGLVersion === 1) {
                texelFormat = internalFormat;
            }
            if (isPot) {
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, texelFormat, gl.UNSIGNED_BYTE, img);
                return false;
            }
            let maxTextureSize = this._caps.maxTextureSize;
            if (img.width > maxTextureSize || img.height > maxTextureSize || !this._supportsHardwareTextureRescaling) {
                this._prepareWorkingCanvas();
                if (!this._workingCanvas || !this._workingContext) {
                    return false;
                }
                this._workingCanvas.width = potWidth;
                this._workingCanvas.height = potHeight;
                this._workingContext.drawImage(img, 0, 0, img.width, img.height, 0, 0, potWidth, potHeight);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, texelFormat, gl.UNSIGNED_BYTE, this._workingCanvas);
                texture.width = potWidth;
                texture.height = potHeight;
                return false;
            }
            else {
                let source = new InternalTexture(this, InternalTextureSource.Temp);
                this._bindTextureDirectly(gl.TEXTURE_2D, source, true);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, texelFormat, gl.UNSIGNED_BYTE, img);
                this._rescaleTexture(source, texture, scene, internalFormat, () => {
                    this._releaseTexture(source);
                    this._bindTextureDirectly(gl.TEXTURE_2D, texture, true);
                    continuationCallback();
                });
            }
            return true;
        }, buffer, fallback, format, forcedExtension, mimeType, loaderOptions, useSRGBBuffer);
    }
    static _FileToolsLoadImage(input, onLoad, onError, offlineProvider, mimeType, imageBitmapOptions) {
        throw _WarnImport("FileTools");
    }
    _rescaleTexture(source, destination, scene, internalFormat, onComplete) {
    }
    createRawTexture(data, width, height, format, generateMipMaps, invertY, samplingMode, compression = null, type = Constants.TEXTURETYPE_UNSIGNED_INT) {
        throw _WarnImport("Engine.RawTexture");
    }
    createRawCubeTexture(data, size, format, type, generateMipMaps, invertY, samplingMode, compression = null) {
        throw _WarnImport("Engine.RawTexture");
    }
    createRawTexture3D(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, compression = null, textureType = Constants.TEXTURETYPE_UNSIGNED_INT) {
        throw _WarnImport("Engine.RawTexture");
    }
    createRawTexture2DArray(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, compression = null, textureType = Constants.TEXTURETYPE_UNSIGNED_INT) {
        throw _WarnImport("Engine.RawTexture");
    }
    _unpackFlipY(value) {
        if (this._unpackFlipYCached !== value) {
            this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, value ? 1 : 0);
            if (this.enableUnpackFlipYCached) {
                this._unpackFlipYCached = value;
            }
        }
    }
    _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT);
    }
    _getTextureTarget(texture) {
        if (texture.isCube) {
            return this._gl.TEXTURE_CUBE_MAP;
        }
        else if (texture.is3D) {
            return this._gl.TEXTURE_3D;
        }
        else if (texture.is2DArray || texture.isMultiview) {
            return this._gl.TEXTURE_2D_ARRAY;
        }
        return this._gl.TEXTURE_2D;
    }
    updateTextureSamplingMode(samplingMode, texture, generateMipMaps = false) {
        const target = this._getTextureTarget(texture);
        var filters = this._getSamplingParameters(samplingMode, texture.generateMipMaps || generateMipMaps);
        this._setTextureParameterInteger(target, this._gl.TEXTURE_MAG_FILTER, filters.mag, texture);
        this._setTextureParameterInteger(target, this._gl.TEXTURE_MIN_FILTER, filters.min);
        if (generateMipMaps) {
            texture.generateMipMaps = true;
            this._gl.generateMipmap(target);
        }
        this._bindTextureDirectly(target, null);
        texture.samplingMode = samplingMode;
    }
    updateTextureDimensions(texture, width, height, depth = 1) {
    }
    updateTextureWrappingMode(texture, wrapU, wrapV = null, wrapR = null) {
        const target = this._getTextureTarget(texture);
        if (wrapU !== null) {
            this._setTextureParameterInteger(target, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(wrapU), texture);
            texture._cachedWrapU = wrapU;
        }
        if (wrapV !== null) {
            this._setTextureParameterInteger(target, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(wrapV), texture);
            texture._cachedWrapV = wrapV;
        }
        if ((texture.is2DArray || texture.is3D) && (wrapR !== null)) {
            this._setTextureParameterInteger(target, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(wrapR), texture);
            texture._cachedWrapR = wrapR;
        }
        this._bindTextureDirectly(target, null);
    }
    _setupDepthStencilTexture(internalTexture, size, generateStencil, bilinearFiltering, comparisonFunction, samples = 1) {
        const width = size.width || size;
        const height = size.height || size;
        const layers = size.layers || 0;
        internalTexture.baseWidth = width;
        internalTexture.baseHeight = height;
        internalTexture.width = width;
        internalTexture.height = height;
        internalTexture.is2DArray = layers > 0;
        internalTexture.depth = layers;
        internalTexture.isReady = true;
        internalTexture.samples = samples;
        internalTexture.generateMipMaps = false;
        internalTexture.samplingMode = bilinearFiltering ? Constants.TEXTURE_BILINEAR_SAMPLINGMODE : Constants.TEXTURE_NEAREST_SAMPLINGMODE;
        internalTexture.type = Constants.TEXTURETYPE_UNSIGNED_INT;
        internalTexture._comparisonFunction = comparisonFunction;
        const gl = this._gl;
        const target = this._getTextureTarget(internalTexture);
        const samplingParameters = this._getSamplingParameters(internalTexture.samplingMode, false);
        gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, samplingParameters.mag);
        gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, samplingParameters.min);
        gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        if (comparisonFunction === 0) {
            gl.texParameteri(target, gl.TEXTURE_COMPARE_FUNC, Constants.LEQUAL);
            gl.texParameteri(target, gl.TEXTURE_COMPARE_MODE, gl.NONE);
        }
        else {
            gl.texParameteri(target, gl.TEXTURE_COMPARE_FUNC, comparisonFunction);
            gl.texParameteri(target, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
        }
    }
    _uploadCompressedDataToTextureDirectly(texture, internalFormat, width, height, data, faceIndex = 0, lod = 0) {
        var gl = this._gl;
        var target = gl.TEXTURE_2D;
        if (texture.isCube) {
            target = gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex;
        }
        if (texture._useSRGBBuffer) {
            switch (internalFormat) {
                case Constants.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM:
                    internalFormat = gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
                    break;
                case Constants.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4:
                    internalFormat = gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
                    break;
                case Constants.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1:
                    if (this._caps.s3tc_srgb) {
                        internalFormat = gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    }
                    else {
                        texture._useSRGBBuffer = false;
                    }
                    break;
                case Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5:
                    if (this._caps.s3tc_srgb) {
                        internalFormat = gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                    }
                    else {
                        texture._useSRGBBuffer = false;
                    }
                    break;
                default:
                    texture._useSRGBBuffer = false;
                    break;
            }
        }
        this._gl.compressedTexImage2D(target, lod, internalFormat, width, height, 0, data);
    }
    _uploadDataToTextureDirectly(texture, imageData, faceIndex = 0, lod = 0, babylonInternalFormat, useTextureWidthAndHeight = false) {
        var gl = this._gl;
        var textureType = this._getWebGLTextureType(texture.type);
        var format = this._getInternalFormat(texture.format);
        var internalFormat = babylonInternalFormat === undefined ? this._getRGBABufferInternalSizedFormat(texture.type, texture.format, texture._useSRGBBuffer) : this._getInternalFormat(babylonInternalFormat, texture._useSRGBBuffer);
        this._unpackFlipY(texture.invertY);
        var target = gl.TEXTURE_2D;
        if (texture.isCube) {
            target = gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex;
        }
        const lodMaxWidth = Math.round(Math.log(texture.width) * Math.LOG2E);
        const lodMaxHeight = Math.round(Math.log(texture.height) * Math.LOG2E);
        const width = useTextureWidthAndHeight ? texture.width : Math.pow(2, Math.max(lodMaxWidth - lod, 0));
        const height = useTextureWidthAndHeight ? texture.height : Math.pow(2, Math.max(lodMaxHeight - lod, 0));
        gl.texImage2D(target, lod, internalFormat, width, height, 0, format, textureType, imageData);
    }
    updateTextureData(texture, imageData, xOffset, yOffset, width, height, faceIndex = 0, lod = 0) {
        var gl = this._gl;
        var textureType = this._getWebGLTextureType(texture.type);
        var format = this._getInternalFormat(texture.format);
        this._unpackFlipY(texture.invertY);
        var target = gl.TEXTURE_2D;
        if (texture.isCube) {
            target = gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex;
        }
        gl.texSubImage2D(target, lod, xOffset, yOffset, width, height, format, textureType, imageData);
    }
    _uploadArrayBufferViewToTexture(texture, imageData, faceIndex = 0, lod = 0) {
        var gl = this._gl;
        var bindTarget = texture.isCube ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D;
        this._bindTextureDirectly(bindTarget, texture, true);
        this._uploadDataToTextureDirectly(texture, imageData, faceIndex, lod);
        this._bindTextureDirectly(bindTarget, null, true);
    }
    _prepareWebGLTextureContinuation(texture, scene, noMipmap, isCompressed, samplingMode) {
        var gl = this._gl;
        if (!gl) {
            return;
        }
        var filters = this._getSamplingParameters(samplingMode, !noMipmap);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filters.mag);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filters.min);
        if (!noMipmap && !isCompressed) {
            gl.generateMipmap(gl.TEXTURE_2D);
        }
        this._bindTextureDirectly(gl.TEXTURE_2D, null);
        if (scene) {
            scene._removePendingData(texture);
        }
        texture.onLoadedObservable.notifyObservers(texture);
        texture.onLoadedObservable.clear();
    }
    _prepareWebGLTexture(texture, extension, scene, img, invertY, noMipmap, isCompressed, processFunction, samplingMode = Constants.TEXTURE_TRILINEAR_SAMPLINGMODE) {
        var maxTextureSize = this.getCaps().maxTextureSize;
        var potWidth = Math.min(maxTextureSize, this.needPOTTextures ? ThinEngine.GetExponentOfTwo(img.width, maxTextureSize) : img.width);
        var potHeight = Math.min(maxTextureSize, this.needPOTTextures ? ThinEngine.GetExponentOfTwo(img.height, maxTextureSize) : img.height);
        var gl = this._gl;
        if (!gl) {
            return;
        }
        if (!texture._hardwareTexture) {
            if (scene) {
                scene._removePendingData(texture);
            }
            return;
        }
        this._bindTextureDirectly(gl.TEXTURE_2D, texture, true);
        this._unpackFlipY(invertY === undefined ? true : (invertY ? true : false));
        texture.baseWidth = img.width;
        texture.baseHeight = img.height;
        texture.width = potWidth;
        texture.height = potHeight;
        texture.isReady = true;
        if (processFunction(potWidth, potHeight, img, extension, texture, () => {
            this._prepareWebGLTextureContinuation(texture, scene, noMipmap, isCompressed, samplingMode);
        })) {
            return;
        }
        this._prepareWebGLTextureContinuation(texture, scene, noMipmap, isCompressed, samplingMode);
    }
    _setupFramebufferDepthAttachments(generateStencilBuffer, generateDepthBuffer, width, height, samples = 1) {
        var gl = this._gl;
        if (generateStencilBuffer && generateDepthBuffer) {
            return this._createRenderBuffer(width, height, samples, gl.DEPTH_STENCIL, gl.DEPTH24_STENCIL8, gl.DEPTH_STENCIL_ATTACHMENT);
        }
        if (generateDepthBuffer) {
            let depthFormat = gl.DEPTH_COMPONENT16;
            if (this._webGLVersion > 1) {
                depthFormat = gl.DEPTH_COMPONENT32F;
            }
            return this._createRenderBuffer(width, height, samples, depthFormat, depthFormat, gl.DEPTH_ATTACHMENT);
        }
        if (generateStencilBuffer) {
            return this._createRenderBuffer(width, height, samples, gl.STENCIL_INDEX8, gl.STENCIL_INDEX8, gl.STENCIL_ATTACHMENT);
        }
        return null;
    }
    _createRenderBuffer(width, height, samples, internalFormat, msInternalFormat, attachment, unbindBuffer = true) {
        const gl = this._gl;
        const renderBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer);
        if (samples > 1 && gl.renderbufferStorageMultisample) {
            gl.renderbufferStorageMultisample(gl.RENDERBUFFER, samples, msInternalFormat, width, height);
        }
        else {
            gl.renderbufferStorage(gl.RENDERBUFFER, internalFormat, width, height);
        }
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, attachment, gl.RENDERBUFFER, renderBuffer);
        if (unbindBuffer) {
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        }
        return renderBuffer;
    }
    _releaseTexture(texture) {
        var _a;
        this._deleteTexture((_a = texture._hardwareTexture) === null || _a === void 0 ? void 0 : _a.underlyingResource);
        this.unbindAllTextures();
        var index = this._internalTexturesCache.indexOf(texture);
        if (index !== -1) {
            this._internalTexturesCache.splice(index, 1);
        }
        if (texture._lodTextureHigh) {
            texture._lodTextureHigh.dispose();
        }
        if (texture._lodTextureMid) {
            texture._lodTextureMid.dispose();
        }
        if (texture._lodTextureLow) {
            texture._lodTextureLow.dispose();
        }
        if (texture._irradianceTexture) {
            texture._irradianceTexture.dispose();
        }
    }
    _releaseRenderTargetWrapper(rtWrapper) {
        const index = this._renderTargetWrapperCache.indexOf(rtWrapper);
        if (index !== -1) {
            this._renderTargetWrapperCache.splice(index, 1);
        }
    }
    _deleteTexture(texture) {
        if (texture) {
            this._gl.deleteTexture(texture);
        }
    }
    _setProgram(program) {
        if (this._currentProgram !== program) {
            this._gl.useProgram(program);
            this._currentProgram = program;
        }
    }
    bindSamplers(effect) {
        let webGLPipelineContext = effect.getPipelineContext();
        this._setProgram(webGLPipelineContext.program);
        var samplers = effect.getSamplers();
        for (var index = 0; index < samplers.length; index++) {
            var uniform = effect.getUniform(samplers[index]);
            if (uniform) {
                this._boundUniforms[index] = uniform;
            }
        }
        this._currentEffect = null;
    }
    _activateCurrentTexture() {
        if (this._currentTextureChannel !== this._activeChannel) {
            this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel);
            this._currentTextureChannel = this._activeChannel;
        }
    }
    _bindTextureDirectly(target, texture, forTextureDataUpdate = false, force = false) {
        var _a, _b;
        var wasPreviouslyBound = false;
        let isTextureForRendering = texture && texture._associatedChannel > -1;
        if (forTextureDataUpdate && isTextureForRendering) {
            this._activeChannel = texture._associatedChannel;
        }
        let currentTextureBound = this._boundTexturesCache[this._activeChannel];
        if (currentTextureBound !== texture || force) {
            this._activateCurrentTexture();
            if (texture && texture.isMultiview) {
                console.error(target, texture);
                throw "_bindTextureDirectly called with a multiview texture!";
            }
            else {
                this._gl.bindTexture(target, (_b = (_a = texture === null || texture === void 0 ? void 0 : texture._hardwareTexture) === null || _a === void 0 ? void 0 : _a.underlyingResource) !== null && _b !== void 0 ? _b : null);
            }
            this._boundTexturesCache[this._activeChannel] = texture;
            if (texture) {
                texture._associatedChannel = this._activeChannel;
            }
        }
        else if (forTextureDataUpdate) {
            wasPreviouslyBound = true;
            this._activateCurrentTexture();
        }
        if (isTextureForRendering && !forTextureDataUpdate) {
            this._bindSamplerUniformToChannel(texture._associatedChannel, this._activeChannel);
        }
        return wasPreviouslyBound;
    }
    _bindTexture(channel, texture, name) {
        if (channel === undefined) {
            return;
        }
        if (texture) {
            texture._associatedChannel = channel;
        }
        this._activeChannel = channel;
        const target = texture ? this._getTextureTarget(texture) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(target, texture);
    }
    unbindAllTextures() {
        for (var channel = 0; channel < this._maxSimultaneousTextures; channel++) {
            this._activeChannel = channel;
            this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
            this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
            if (this.webGLVersion > 1) {
                this._bindTextureDirectly(this._gl.TEXTURE_3D, null);
                this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null);
            }
        }
    }
    setTexture(channel, uniform, texture, name) {
        if (channel === undefined) {
            return;
        }
        if (uniform) {
            this._boundUniforms[channel] = uniform;
        }
        this._setTexture(channel, texture);
    }
    _bindSamplerUniformToChannel(sourceSlot, destination) {
        let uniform = this._boundUniforms[sourceSlot];
        if (!uniform || uniform._currentState === destination) {
            return;
        }
        this._gl.uniform1i(uniform, destination);
        uniform._currentState = destination;
    }
    _getTextureWrapMode(mode) {
        switch (mode) {
            case Constants.TEXTURE_WRAP_ADDRESSMODE:
                return this._gl.REPEAT;
            case Constants.TEXTURE_CLAMP_ADDRESSMODE:
                return this._gl.CLAMP_TO_EDGE;
            case Constants.TEXTURE_MIRROR_ADDRESSMODE:
                return this._gl.MIRRORED_REPEAT;
        }
        return this._gl.REPEAT;
    }
    _setTexture(channel, texture, isPartOfTextureArray = false, depthStencilTexture = false, name = "") {
        if (!texture) {
            if (this._boundTexturesCache[channel] != null) {
                this._activeChannel = channel;
                this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
                this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
                if (this.webGLVersion > 1) {
                    this._bindTextureDirectly(this._gl.TEXTURE_3D, null);
                    this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null);
                }
            }
            return false;
        }
        if (texture.video) {
            this._activeChannel = channel;
            texture.update();
        }
        else if (texture.delayLoadState === Constants.DELAYLOADSTATE_NOTLOADED) {
            texture.delayLoad();
            return false;
        }
        let internalTexture;
        if (depthStencilTexture) {
            internalTexture = texture.depthStencilTexture;
        }
        else if (texture.isReady()) {
            internalTexture = texture.getInternalTexture();
        }
        else if (texture.isCube) {
            internalTexture = this.emptyCubeTexture;
        }
        else if (texture.is3D) {
            internalTexture = this.emptyTexture3D;
        }
        else if (texture.is2DArray) {
            internalTexture = this.emptyTexture2DArray;
        }
        else {
            internalTexture = this.emptyTexture;
        }
        if (!isPartOfTextureArray && internalTexture) {
            internalTexture._associatedChannel = channel;
        }
        let needToBind = true;
        if (this._boundTexturesCache[channel] === internalTexture) {
            if (!isPartOfTextureArray) {
                this._bindSamplerUniformToChannel(internalTexture._associatedChannel, channel);
            }
            needToBind = false;
        }
        this._activeChannel = channel;
        const target = this._getTextureTarget(internalTexture);
        if (needToBind) {
            this._bindTextureDirectly(target, internalTexture, isPartOfTextureArray);
        }
        if (internalTexture && !internalTexture.isMultiview) {
            if (internalTexture.isCube && internalTexture._cachedCoordinatesMode !== texture.coordinatesMode) {
                internalTexture._cachedCoordinatesMode = texture.coordinatesMode;
                var textureWrapMode = (texture.coordinatesMode !== Constants.TEXTURE_CUBIC_MODE && texture.coordinatesMode !== Constants.TEXTURE_SKYBOX_MODE) ? Constants.TEXTURE_WRAP_ADDRESSMODE : Constants.TEXTURE_CLAMP_ADDRESSMODE;
                texture.wrapU = textureWrapMode;
                texture.wrapV = textureWrapMode;
            }
            if (internalTexture._cachedWrapU !== texture.wrapU) {
                internalTexture._cachedWrapU = texture.wrapU;
                this._setTextureParameterInteger(target, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(texture.wrapU), internalTexture);
            }
            if (internalTexture._cachedWrapV !== texture.wrapV) {
                internalTexture._cachedWrapV = texture.wrapV;
                this._setTextureParameterInteger(target, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(texture.wrapV), internalTexture);
            }
            if (internalTexture.is3D && internalTexture._cachedWrapR !== texture.wrapR) {
                internalTexture._cachedWrapR = texture.wrapR;
                this._setTextureParameterInteger(target, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(texture.wrapR), internalTexture);
            }
            this._setAnisotropicLevel(target, internalTexture, texture.anisotropicFilteringLevel);
        }
        return true;
    }
    setTextureArray(channel, uniform, textures, name) {
        if (channel === undefined || !uniform) {
            return;
        }
        if (!this._textureUnits || this._textureUnits.length !== textures.length) {
            this._textureUnits = new Int32Array(textures.length);
        }
        for (let i = 0; i < textures.length; i++) {
            let texture = textures[i].getInternalTexture();
            if (texture) {
                this._textureUnits[i] = channel + i;
                texture._associatedChannel = channel + i;
            }
            else {
                this._textureUnits[i] = -1;
            }
        }
        this._gl.uniform1iv(uniform, this._textureUnits);
        for (var index = 0; index < textures.length; index++) {
            this._setTexture(this._textureUnits[index], textures[index], true);
        }
    }
    _setAnisotropicLevel(target, internalTexture, anisotropicFilteringLevel) {
        var anisotropicFilterExtension = this._caps.textureAnisotropicFilterExtension;
        if (internalTexture.samplingMode !== Constants.TEXTURE_LINEAR_LINEAR_MIPNEAREST
            && internalTexture.samplingMode !== Constants.TEXTURE_LINEAR_LINEAR_MIPLINEAR
            && internalTexture.samplingMode !== Constants.TEXTURE_LINEAR_LINEAR) {
            anisotropicFilteringLevel = 1;
        }
        if (anisotropicFilterExtension && internalTexture._cachedAnisotropicFilteringLevel !== anisotropicFilteringLevel) {
            this._setTextureParameterFloat(target, anisotropicFilterExtension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(anisotropicFilteringLevel, this._caps.maxAnisotropy), internalTexture);
            internalTexture._cachedAnisotropicFilteringLevel = anisotropicFilteringLevel;
        }
    }
    _setTextureParameterFloat(target, parameter, value, texture) {
        this._bindTextureDirectly(target, texture, true, true);
        this._gl.texParameterf(target, parameter, value);
    }
    _setTextureParameterInteger(target, parameter, value, texture) {
        if (texture) {
            this._bindTextureDirectly(target, texture, true, true);
        }
        this._gl.texParameteri(target, parameter, value);
    }
    unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
            this._mustWipeVertexAttributes = false;
            for (var i = 0; i < this._caps.maxVertexAttribs; i++) {
                this.disableAttributeByIndex(i);
            }
            return;
        }
        for (var i = 0, ul = this._vertexAttribArraysEnabled.length; i < ul; i++) {
            if (i >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[i]) {
                continue;
            }
            this.disableAttributeByIndex(i);
        }
    }
    releaseEffects() {
        for (var name in this._compiledEffects) {
            let webGLPipelineContext = this._compiledEffects[name].getPipelineContext();
            this._deletePipelineContext(webGLPipelineContext);
        }
        this._compiledEffects = {};
    }
    dispose() {
        var _a;
        this.stopRenderLoop();
        if (this.onBeforeTextureInitObservable) {
            this.onBeforeTextureInitObservable.clear();
        }
        if (this._emptyTexture) {
            this._releaseTexture(this._emptyTexture);
            this._emptyTexture = null;
        }
        if (this._emptyCubeTexture) {
            this._releaseTexture(this._emptyCubeTexture);
            this._emptyCubeTexture = null;
        }
        if (this._dummyFramebuffer) {
            this._gl.deleteFramebuffer(this._dummyFramebuffer);
        }
        this.releaseEffects();
        (_a = this.releaseComputeEffects) === null || _a === void 0 ? void 0 : _a.call(this);
        this.unbindAllAttributes();
        this._boundUniforms = [];
        if (IsWindowObjectExist()) {
            if (this._renderingCanvas) {
                if (!this._doNotHandleContextLost) {
                    this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost);
                    this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored);
                }
                window.removeEventListener("resize", this._checkForMobile);
            }
        }
        this._workingCanvas = null;
        this._workingContext = null;
        this._currentBufferPointers = [];
        this._renderingCanvas = null;
        this._currentProgram = null;
        this._boundRenderFunction = null;
        Effect.ResetCache();
        for (let request of this._activeRequests) {
            request.abort();
        }
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
    }
    attachContextLostEvent(callback) {
        if (this._renderingCanvas) {
            this._renderingCanvas.addEventListener("webglcontextlost", callback, false);
        }
    }
    attachContextRestoredEvent(callback) {
        if (this._renderingCanvas) {
            this._renderingCanvas.addEventListener("webglcontextrestored", callback, false);
        }
    }
    getError() {
        return this._gl.getError();
    }
    _canRenderToFloatFramebuffer() {
        if (this._webGLVersion > 1) {
            return this._caps.colorBufferFloat;
        }
        return this._canRenderToFramebuffer(Constants.TEXTURETYPE_FLOAT);
    }
    _canRenderToHalfFloatFramebuffer() {
        if (this._webGLVersion > 1) {
            return this._caps.colorBufferFloat;
        }
        return this._canRenderToFramebuffer(Constants.TEXTURETYPE_HALF_FLOAT);
    }
    _canRenderToFramebuffer(type) {
        let gl = this._gl;
        while (gl.getError() !== gl.NO_ERROR) { }
        let successful = true;
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(type), 1, 1, 0, gl.RGBA, this._getWebGLTextureType(type), null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        let fb = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        successful = successful && (status === gl.FRAMEBUFFER_COMPLETE);
        successful = successful && (gl.getError() === gl.NO_ERROR);
        if (successful) {
            gl.clear(gl.COLOR_BUFFER_BIT);
            successful = successful && (gl.getError() === gl.NO_ERROR);
        }
        if (successful) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            let readFormat = gl.RGBA;
            let readType = gl.UNSIGNED_BYTE;
            let buffer = new Uint8Array(4);
            gl.readPixels(0, 0, 1, 1, readFormat, readType, buffer);
            successful = successful && (gl.getError() === gl.NO_ERROR);
        }
        gl.deleteTexture(texture);
        gl.deleteFramebuffer(fb);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        while (!successful && (gl.getError() !== gl.NO_ERROR)) { }
        return successful;
    }
    _getWebGLTextureType(type) {
        if (this._webGLVersion === 1) {
            switch (type) {
                case Constants.TEXTURETYPE_FLOAT:
                    return this._gl.FLOAT;
                case Constants.TEXTURETYPE_HALF_FLOAT:
                    return this._gl.HALF_FLOAT_OES;
                case Constants.TEXTURETYPE_UNSIGNED_BYTE:
                    return this._gl.UNSIGNED_BYTE;
                case Constants.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4:
                    return this._gl.UNSIGNED_SHORT_4_4_4_4;
                case Constants.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1:
                    return this._gl.UNSIGNED_SHORT_5_5_5_1;
                case Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5:
                    return this._gl.UNSIGNED_SHORT_5_6_5;
            }
            return this._gl.UNSIGNED_BYTE;
        }
        switch (type) {
            case Constants.TEXTURETYPE_BYTE:
                return this._gl.BYTE;
            case Constants.TEXTURETYPE_UNSIGNED_BYTE:
                return this._gl.UNSIGNED_BYTE;
            case Constants.TEXTURETYPE_SHORT:
                return this._gl.SHORT;
            case Constants.TEXTURETYPE_UNSIGNED_SHORT:
                return this._gl.UNSIGNED_SHORT;
            case Constants.TEXTURETYPE_INT:
                return this._gl.INT;
            case Constants.TEXTURETYPE_UNSIGNED_INTEGER:
                return this._gl.UNSIGNED_INT;
            case Constants.TEXTURETYPE_FLOAT:
                return this._gl.FLOAT;
            case Constants.TEXTURETYPE_HALF_FLOAT:
                return this._gl.HALF_FLOAT;
            case Constants.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4:
                return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case Constants.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1:
                return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5:
                return this._gl.UNSIGNED_SHORT_5_6_5;
            case Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV:
                return this._gl.UNSIGNED_INT_2_10_10_10_REV;
            case Constants.TEXTURETYPE_UNSIGNED_INT_24_8:
                return this._gl.UNSIGNED_INT_24_8;
            case Constants.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV:
                return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
            case Constants.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV:
                return this._gl.UNSIGNED_INT_5_9_9_9_REV;
            case Constants.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV:
                return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV;
        }
        return this._gl.UNSIGNED_BYTE;
    }
    _getInternalFormat(format, useSRGBBuffer = false) {
        var internalFormat = useSRGBBuffer ? this._gl.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (format) {
            case Constants.TEXTUREFORMAT_ALPHA:
                internalFormat = this._gl.ALPHA;
                break;
            case Constants.TEXTUREFORMAT_LUMINANCE:
                internalFormat = this._gl.LUMINANCE;
                break;
            case Constants.TEXTUREFORMAT_LUMINANCE_ALPHA:
                internalFormat = this._gl.LUMINANCE_ALPHA;
                break;
            case Constants.TEXTUREFORMAT_RED:
                internalFormat = this._gl.RED;
                break;
            case Constants.TEXTUREFORMAT_RG:
                internalFormat = this._gl.RG;
                break;
            case Constants.TEXTUREFORMAT_RGB:
                internalFormat = useSRGBBuffer ? this._gl.SRGB : this._gl.RGB;
                break;
            case Constants.TEXTUREFORMAT_RGBA:
                internalFormat = useSRGBBuffer ? this._gl.SRGB8_ALPHA8 : this._gl.RGBA;
                break;
        }
        if (this._webGLVersion > 1) {
            switch (format) {
                case Constants.TEXTUREFORMAT_RED_INTEGER:
                    internalFormat = this._gl.RED_INTEGER;
                    break;
                case Constants.TEXTUREFORMAT_RG_INTEGER:
                    internalFormat = this._gl.RG_INTEGER;
                    break;
                case Constants.TEXTUREFORMAT_RGB_INTEGER:
                    internalFormat = this._gl.RGB_INTEGER;
                    break;
                case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                    internalFormat = this._gl.RGBA_INTEGER;
                    break;
            }
        }
        return internalFormat;
    }
    _getRGBABufferInternalSizedFormat(type, format, useSRGBBuffer = false) {
        if (this._webGLVersion === 1) {
            if (format !== undefined) {
                switch (format) {
                    case Constants.TEXTUREFORMAT_ALPHA:
                        return this._gl.ALPHA;
                    case Constants.TEXTUREFORMAT_LUMINANCE:
                        return this._gl.LUMINANCE;
                    case Constants.TEXTUREFORMAT_LUMINANCE_ALPHA:
                        return this._gl.LUMINANCE_ALPHA;
                    case Constants.TEXTUREFORMAT_RGB:
                        return useSRGBBuffer ? this._gl.SRGB : this._gl.RGB;
                }
            }
            return this._gl.RGBA;
        }
        switch (type) {
            case Constants.TEXTURETYPE_BYTE:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED:
                        return this._gl.R8_SNORM;
                    case Constants.TEXTUREFORMAT_RG:
                        return this._gl.RG8_SNORM;
                    case Constants.TEXTUREFORMAT_RGB:
                        return this._gl.RGB8_SNORM;
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return this._gl.R8I;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return this._gl.RG8I;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        return this._gl.RGB8I;
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return this._gl.RGBA8I;
                    default:
                        return this._gl.RGBA8_SNORM;
                }
            case Constants.TEXTURETYPE_UNSIGNED_BYTE:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED:
                        return this._gl.R8;
                    case Constants.TEXTUREFORMAT_RG:
                        return this._gl.RG8;
                    case Constants.TEXTUREFORMAT_RGB:
                        return useSRGBBuffer ? this._gl.SRGB8 : this._gl.RGB8;
                    case Constants.TEXTUREFORMAT_RGBA:
                        return useSRGBBuffer ? this._gl.SRGB8_ALPHA8 : this._gl.RGBA8;
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return this._gl.R8UI;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return this._gl.RG8UI;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        return this._gl.RGB8UI;
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return this._gl.RGBA8UI;
                    case Constants.TEXTUREFORMAT_ALPHA:
                        return this._gl.ALPHA;
                    case Constants.TEXTUREFORMAT_LUMINANCE:
                        return this._gl.LUMINANCE;
                    case Constants.TEXTUREFORMAT_LUMINANCE_ALPHA:
                        return this._gl.LUMINANCE_ALPHA;
                    default:
                        return this._gl.RGBA8;
                }
            case Constants.TEXTURETYPE_SHORT:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return this._gl.R16I;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return this._gl.RG16I;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        return this._gl.RGB16I;
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return this._gl.RGBA16I;
                    default:
                        return this._gl.RGBA16I;
                }
            case Constants.TEXTURETYPE_UNSIGNED_SHORT:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return this._gl.R16UI;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return this._gl.RG16UI;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        return this._gl.RGB16UI;
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return this._gl.RGBA16UI;
                    default:
                        return this._gl.RGBA16UI;
                }
            case Constants.TEXTURETYPE_INT:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return this._gl.R32I;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return this._gl.RG32I;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        return this._gl.RGB32I;
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return this._gl.RGBA32I;
                    default:
                        return this._gl.RGBA32I;
                }
            case Constants.TEXTURETYPE_UNSIGNED_INTEGER:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return this._gl.R32UI;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return this._gl.RG32UI;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        return this._gl.RGB32UI;
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return this._gl.RGBA32UI;
                    default:
                        return this._gl.RGBA32UI;
                }
            case Constants.TEXTURETYPE_FLOAT:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED:
                        return this._gl.R32F;
                    case Constants.TEXTUREFORMAT_RG:
                        return this._gl.RG32F;
                    case Constants.TEXTUREFORMAT_RGB:
                        return this._gl.RGB32F;
                    case Constants.TEXTUREFORMAT_RGBA:
                        return this._gl.RGBA32F;
                    default:
                        return this._gl.RGBA32F;
                }
            case Constants.TEXTURETYPE_HALF_FLOAT:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED:
                        return this._gl.R16F;
                    case Constants.TEXTUREFORMAT_RG:
                        return this._gl.RG16F;
                    case Constants.TEXTUREFORMAT_RGB:
                        return this._gl.RGB16F;
                    case Constants.TEXTUREFORMAT_RGBA:
                        return this._gl.RGBA16F;
                    default:
                        return this._gl.RGBA16F;
                }
            case Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5:
                return this._gl.RGB565;
            case Constants.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV:
                return this._gl.R11F_G11F_B10F;
            case Constants.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV:
                return this._gl.RGB9_E5;
            case Constants.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4:
                return this._gl.RGBA4;
            case Constants.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1:
                return this._gl.RGB5_A1;
            case Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RGBA:
                        return this._gl.RGB10_A2;
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return this._gl.RGB10_A2UI;
                    default:
                        return this._gl.RGB10_A2;
                }
        }
        return useSRGBBuffer ? this._gl.SRGB8_ALPHA8 : this._gl.RGBA8;
    }
    _getRGBAMultiSampleBufferFormat(type) {
        if (type === Constants.TEXTURETYPE_FLOAT) {
            return this._gl.RGBA32F;
        }
        else if (type === Constants.TEXTURETYPE_HALF_FLOAT) {
            return this._gl.RGBA16F;
        }
        return this._gl.RGBA8;
    }
    _loadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError) {
        let request = ThinEngine._FileToolsLoadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError);
        this._activeRequests.push(request);
        request.onCompleteObservable.add((request) => {
            this._activeRequests.splice(this._activeRequests.indexOf(request), 1);
        });
        return request;
    }
    static _FileToolsLoadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError) {
        throw _WarnImport("FileTools");
    }
    readPixels(x, y, width, height, hasAlpha = true, flushRenderer = true) {
        const numChannels = hasAlpha ? 4 : 3;
        const format = hasAlpha ? this._gl.RGBA : this._gl.RGB;
        const data = new Uint8Array(height * width * numChannels);
        if (flushRenderer) {
            this.flushFramebuffer();
        }
        this._gl.readPixels(x, y, width, height, format, this._gl.UNSIGNED_BYTE, data);
        return Promise.resolve(data);
    }
    static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported());
    }
    static get IsSupported() {
        return this.isSupported();
    }
    static isSupported() {
        if (this._HasMajorPerformanceCaveat !== null) {
            return !this._HasMajorPerformanceCaveat;
        }
        if (this._IsSupported === null) {
            try {
                var tempcanvas = this._createCanvas(1, 1);
                var gl = tempcanvas.getContext("webgl") || tempcanvas.getContext("experimental-webgl");
                this._IsSupported = gl != null && !!window.WebGLRenderingContext;
            }
            catch (e) {
                this._IsSupported = false;
            }
        }
        return this._IsSupported;
    }
    static get HasMajorPerformanceCaveat() {
        if (this._HasMajorPerformanceCaveat === null) {
            try {
                var tempcanvas = this._createCanvas(1, 1);
                var gl = tempcanvas.getContext("webgl", { failIfMajorPerformanceCaveat: true }) || tempcanvas.getContext("experimental-webgl", { failIfMajorPerformanceCaveat: true });
                this._HasMajorPerformanceCaveat = !gl;
            }
            catch (e) {
                this._HasMajorPerformanceCaveat = false;
            }
        }
        return this._HasMajorPerformanceCaveat;
    }
    static CeilingPOT(x) {
        x--;
        x |= x >> 1;
        x |= x >> 2;
        x |= x >> 4;
        x |= x >> 8;
        x |= x >> 16;
        x++;
        return x;
    }
    static FloorPOT(x) {
        x = x | (x >> 1);
        x = x | (x >> 2);
        x = x | (x >> 4);
        x = x | (x >> 8);
        x = x | (x >> 16);
        return x - (x >> 1);
    }
    static NearestPOT(x) {
        var c = ThinEngine.CeilingPOT(x);
        var f = ThinEngine.FloorPOT(x);
        return (c - x) > (x - f) ? f : c;
    }
    static GetExponentOfTwo(value, max, mode = Constants.SCALEMODE_NEAREST) {
        let pot;
        switch (mode) {
            case Constants.SCALEMODE_FLOOR:
                pot = ThinEngine.FloorPOT(value);
                break;
            case Constants.SCALEMODE_NEAREST:
                pot = ThinEngine.NearestPOT(value);
                break;
            case Constants.SCALEMODE_CEILING:
            default:
                pot = ThinEngine.CeilingPOT(value);
                break;
        }
        return Math.min(pot, max);
    }
    static QueueNewFrame(func, requester) {
        if (!IsWindowObjectExist()) {
            if (typeof requestAnimationFrame !== "undefined") {
                return requestAnimationFrame(func);
            }
            return setTimeout(func, 16);
        }
        if (!requester) {
            requester = window;
        }
        if (requester.requestPostAnimationFrame) {
            return requester.requestPostAnimationFrame(func);
        }
        else if (requester.requestAnimationFrame) {
            return requester.requestAnimationFrame(func);
        }
        else if (requester.msRequestAnimationFrame) {
            return requester.msRequestAnimationFrame(func);
        }
        else if (requester.webkitRequestAnimationFrame) {
            return requester.webkitRequestAnimationFrame(func);
        }
        else if (requester.mozRequestAnimationFrame) {
            return requester.mozRequestAnimationFrame(func);
        }
        else if (requester.oRequestAnimationFrame) {
            return requester.oRequestAnimationFrame(func);
        }
        else {
            return window.setTimeout(func, 16);
        }
    }
    getHostDocument() {
        if (this._renderingCanvas && this._renderingCanvas.ownerDocument) {
            return this._renderingCanvas.ownerDocument;
        }
        return document;
    }
}
ThinEngine.ExceptionList = [
    { key: "Chrome\/63\.0", capture: "63\\.0\\.3239\\.(\\d+)", captureConstraint: 108, targets: ["uniformBuffer"] },
    { key: "Firefox\/58", capture: null, captureConstraint: null, targets: ["uniformBuffer"] },
    { key: "Firefox\/59", capture: null, captureConstraint: null, targets: ["uniformBuffer"] },
    { key: "Chrome\/72.+?Mobile", capture: null, captureConstraint: null, targets: ["vao"] },
    { key: "Chrome\/73.+?Mobile", capture: null, captureConstraint: null, targets: ["vao"] },
    { key: "Chrome\/74.+?Mobile", capture: null, captureConstraint: null, targets: ["vao"] },
    { key: "Mac OS.+Chrome\/71", capture: null, captureConstraint: null, targets: ["vao"] },
    { key: "Mac OS.+Chrome\/72", capture: null, captureConstraint: null, targets: ["vao"] }
];
ThinEngine._TextureLoaders = [];
ThinEngine.CollisionsEpsilon = 0.001;
ThinEngine._IsSupported = null;
ThinEngine._HasMajorPerformanceCaveat = null;
class TimingTools {
    static SetImmediate(action) {
        if (IsWindowObjectExist() && window.setImmediate) {
            window.setImmediate(action);
        }
        else {
            setTimeout(action, 1);
        }
    }
}
let FileTools;
const _injectLTSFileTools = (DecodeBase64UrlToBinary, DecodeBase64UrlToString, FileToolsOptions, IsBase64DataUrl, IsFileURL, LoadFile, LoadImage, ReadFile, RequestFile, SetCorsBehavior) => {
    FileTools = {
        DecodeBase64UrlToBinary,
        DecodeBase64UrlToString,
        DefaultRetryStrategy: FileToolsOptions.DefaultRetryStrategy,
        BaseUrl: FileToolsOptions.BaseUrl,
        CorsBehavior: FileToolsOptions.CorsBehavior,
        PreprocessUrl: FileToolsOptions.PreprocessUrl,
        IsBase64DataUrl,
        IsFileURL,
        LoadFile,
        LoadImage,
        ReadFile,
        RequestFile,
        SetCorsBehavior,
    };
    Object.defineProperty(FileTools, "DefaultRetryStrategy", {
        get: function () {
            return FileToolsOptions.DefaultRetryStrategy;
        },
        set: function (value) {
            FileToolsOptions.DefaultRetryStrategy = value;
        }
    });
    Object.defineProperty(FileTools, "BaseUrl", {
        get: function () {
            return FileToolsOptions.BaseUrl;
        },
        set: function (value) {
            FileToolsOptions.BaseUrl = value;
        }
    });
    Object.defineProperty(FileTools, "PreprocessUrl", {
        get: function () {
            return FileToolsOptions.PreprocessUrl;
        },
        set: function (value) {
            FileToolsOptions.PreprocessUrl = value;
        }
    });
    Object.defineProperty(FileTools, "CorsBehavior", {
        get: function () {
            return FileToolsOptions.CorsBehavior;
        },
        set: function (value) {
            FileToolsOptions.CorsBehavior = value;
        }
    });
};
const base64DataUrlRegEx = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
class LoadFileError extends BaseError {
    constructor(message, object) {
        super(message);
        this.name = "LoadFileError";
        BaseError._setPrototypeOf(this, LoadFileError.prototype);
        if (object instanceof WebRequest) {
            this.request = object;
        }
        else {
            this.file = object;
        }
    }
}
class RequestFileError extends BaseError {
    constructor(message, request) {
        super(message);
        this.request = request;
        this.name = "RequestFileError";
        BaseError._setPrototypeOf(this, RequestFileError.prototype);
    }
}
class ReadFileError extends BaseError {
    constructor(message, file) {
        super(message);
        this.file = file;
        this.name = "ReadFileError";
        BaseError._setPrototypeOf(this, ReadFileError.prototype);
    }
}
const FileToolsOptions = {
    DefaultRetryStrategy: RetryStrategy.ExponentialBackoff(),
    BaseUrl: "",
    CorsBehavior: "anonymous",
    PreprocessUrl: (url) => {
        return url;
    }
};
const _CleanUrl = (url) => {
    url = url.replace(/#/mg, "%23");
    return url;
};
const SetCorsBehavior = (url, element) => {
    if (url && url.indexOf("data:") === 0) {
        return;
    }
    if (FileToolsOptions.CorsBehavior) {
        if (typeof (FileToolsOptions.CorsBehavior) === 'string' || FileToolsOptions.CorsBehavior instanceof String) {
            element.crossOrigin = FileToolsOptions.CorsBehavior;
        }
        else {
            var result = FileToolsOptions.CorsBehavior(url);
            if (result) {
                element.crossOrigin = result;
            }
        }
    }
};
const LoadImage = (input, onLoad, onError, offlineProvider, mimeType = "", imageBitmapOptions) => {
    var _a;
    let url;
    let usingObjectURL = false;
    if (input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
        if (typeof Blob !== 'undefined') {
            url = URL.createObjectURL(new Blob([input], { type: mimeType }));
            usingObjectURL = true;
        }
        else {
            url = `data:${mimeType};base64,` + EncodeArrayBufferToBase64(input);
        }
    }
    else if (input instanceof Blob) {
        url = URL.createObjectURL(input);
        usingObjectURL = true;
    }
    else {
        url = _CleanUrl(input);
        url = FileToolsOptions.PreprocessUrl(input);
    }
    const engine = EngineStore.LastCreatedEngine;
    const onErrorHandler = (exception) => {
        if (onError) {
            const inputText = url || input.toString();
            onError(`Error while trying to load image: ${((inputText.indexOf('http') === 0 || inputText.length <= 128) ? inputText : inputText.slice(0, 128) + "...")}`, exception);
        }
    };
    if (typeof Image === "undefined" || ((_a = engine === null || engine === void 0 ? void 0 : engine._features.forceBitmapOverHTMLImageElement) !== null && _a !== void 0 ? _a : false)) {
        LoadFile(url, (data) => {
            engine.createImageBitmap(new Blob([data], { type: mimeType }), { premultiplyAlpha: "none", ...imageBitmapOptions }).then((imgBmp) => {
                onLoad(imgBmp);
                if (usingObjectURL) {
                    URL.revokeObjectURL(url);
                }
            }).catch((reason) => {
                if (onError) {
                    onError("Error while trying to load image: " + input, reason);
                }
            });
        }, undefined, offlineProvider || undefined, true, (request, exception) => {
            onErrorHandler(exception);
        });
        return null;
    }
    var img = new Image();
    SetCorsBehavior(url, img);
    const loadHandler = () => {
        img.removeEventListener("load", loadHandler);
        img.removeEventListener("error", errorHandler);
        onLoad(img);
        if (usingObjectURL && img.src) {
            URL.revokeObjectURL(img.src);
        }
    };
    const errorHandler = (err) => {
        img.removeEventListener("load", loadHandler);
        img.removeEventListener("error", errorHandler);
        onErrorHandler(err);
        if (usingObjectURL && img.src) {
            URL.revokeObjectURL(img.src);
        }
    };
    img.addEventListener("load", loadHandler);
    img.addEventListener("error", errorHandler);
    var noOfflineSupport = () => {
        img.src = url;
    };
    var loadFromOfflineSupport = () => {
        if (offlineProvider) {
            offlineProvider.loadImage(url, img);
        }
    };
    if (url.substr(0, 5) !== "data:" && offlineProvider && offlineProvider.enableTexturesOffline) {
        offlineProvider.open(loadFromOfflineSupport, noOfflineSupport);
    }
    else {
        if (url.indexOf("file:") !== -1) {
            var textureName = decodeURIComponent(url.substring(5).toLowerCase());
            if (FilesInputStore.FilesToLoad[textureName]) {
                try {
                    var blobURL;
                    try {
                        blobURL = URL.createObjectURL(FilesInputStore.FilesToLoad[textureName]);
                    }
                    catch (ex) {
                        blobURL = URL.createObjectURL(FilesInputStore.FilesToLoad[textureName]);
                    }
                    img.src = blobURL;
                    usingObjectURL = true;
                }
                catch (e) {
                    img.src = "";
                }
                return img;
            }
        }
        noOfflineSupport();
    }
    return img;
};
const ReadFile = (file, onSuccess, onProgress, useArrayBuffer, onError) => {
    const reader = new FileReader();
    const fileRequest = {
        onCompleteObservable: new Observable(),
        abort: () => reader.abort(),
    };
    reader.onloadend = (e) => fileRequest.onCompleteObservable.notifyObservers(fileRequest);
    if (onError) {
        reader.onerror = (e) => {
            onError(new ReadFileError(`Unable to read ${file.name}`, file));
        };
    }
    reader.onload = (e) => {
        onSuccess(e.target['result']);
    };
    if (onProgress) {
        reader.onprogress = onProgress;
    }
    if (!useArrayBuffer) {
        reader.readAsText(file);
    }
    else {
        reader.readAsArrayBuffer(file);
    }
    return fileRequest;
};
const LoadFile = (fileOrUrl, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError, onOpened) => {
    if (fileOrUrl.name) {
        return ReadFile(fileOrUrl, onSuccess, onProgress, useArrayBuffer, onError ? (error) => {
            onError(undefined, error);
        } : undefined);
    }
    const url = fileOrUrl;
    if (url.indexOf("file:") !== -1) {
        let fileName = decodeURIComponent(url.substring(5).toLowerCase());
        if (fileName.indexOf('./') === 0) {
            fileName = fileName.substring(2);
        }
        const file = FilesInputStore.FilesToLoad[fileName];
        if (file) {
            return ReadFile(file, onSuccess, onProgress, useArrayBuffer, onError ? (error) => onError(undefined, new LoadFileError(error.message, error.file)) : undefined);
        }
    }
    if (IsBase64DataUrl(url)) {
        const fileRequest = {
            onCompleteObservable: new Observable(),
            abort: () => () => { },
        };
        try {
            onSuccess(useArrayBuffer ? DecodeBase64UrlToBinary(url) : DecodeBase64UrlToString(url));
        }
        catch (error) {
            if (onError) {
                onError(undefined, error);
            }
            else {
                Logger.Error(error.message || "Failed to parse the Data URL");
            }
        }
        TimingTools.SetImmediate(() => {
            fileRequest.onCompleteObservable.notifyObservers(fileRequest);
        });
        return fileRequest;
    }
    return RequestFile(url, (data, request) => {
        onSuccess(data, request ? request.responseURL : undefined);
    }, onProgress, offlineProvider, useArrayBuffer, onError ? (error) => {
        onError(error.request, new LoadFileError(error.message, error.request));
    } : undefined, onOpened);
};
const RequestFile = (url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError, onOpened) => {
    url = _CleanUrl(url);
    url = FileToolsOptions.PreprocessUrl(url);
    const loadUrl = FileToolsOptions.BaseUrl + url;
    let aborted = false;
    const fileRequest = {
        onCompleteObservable: new Observable(),
        abort: () => aborted = true,
    };
    const requestFile = () => {
        let request = new WebRequest();
        let retryHandle = null;
        fileRequest.abort = () => {
            aborted = true;
            if (request.readyState !== (XMLHttpRequest.DONE || 4)) {
                request.abort();
            }
            if (retryHandle !== null) {
                clearTimeout(retryHandle);
                retryHandle = null;
            }
        };
        const handleError = (error) => {
            const message = error.message || "Unknown error";
            if (onError) {
                onError(new RequestFileError(message, request));
            }
            else {
                Logger.Error(message);
            }
        };
        const retryLoop = (retryIndex) => {
            request.open('GET', loadUrl);
            if (onOpened) {
                try {
                    onOpened(request);
                }
                catch (e) {
                    handleError(e);
                    return;
                }
            }
            if (useArrayBuffer) {
                request.responseType = "arraybuffer";
            }
            if (onProgress) {
                request.addEventListener("progress", onProgress);
            }
            const onLoadEnd = () => {
                request.removeEventListener("loadend", onLoadEnd);
                fileRequest.onCompleteObservable.notifyObservers(fileRequest);
                fileRequest.onCompleteObservable.clear();
            };
            request.addEventListener("loadend", onLoadEnd);
            const onReadyStateChange = () => {
                if (aborted) {
                    return;
                }
                if (request.readyState === (XMLHttpRequest.DONE || 4)) {
                    request.removeEventListener("readystatechange", onReadyStateChange);
                    if ((request.status >= 200 && request.status < 300) || (request.status === 0 && (!IsWindowObjectExist() || IsFileURL()))) {
                        try {
                            onSuccess(useArrayBuffer ? request.response : request.responseText, request);
                        }
                        catch (e) {
                            handleError(e);
                        }
                        return;
                    }
                    let retryStrategy = FileToolsOptions.DefaultRetryStrategy;
                    if (retryStrategy) {
                        let waitTime = retryStrategy(loadUrl, request, retryIndex);
                        if (waitTime !== -1) {
                            request.removeEventListener("loadend", onLoadEnd);
                            request = new WebRequest();
                            retryHandle = setTimeout(() => retryLoop(retryIndex + 1), waitTime);
                            return;
                        }
                    }
                    const error = new RequestFileError("Error status: " + request.status + " " + request.statusText + " - Unable to load " + loadUrl, request);
                    if (onError) {
                        onError(error);
                    }
                }
            };
            request.addEventListener("readystatechange", onReadyStateChange);
            request.send();
        };
        retryLoop(0);
    };
    if (offlineProvider && offlineProvider.enableSceneOffline) {
        const noOfflineSupport = (request) => {
            if (request && request.status > 400) {
                if (onError) {
                    onError(request);
                }
            }
            else {
                requestFile();
            }
        };
        const loadFromOfflineSupport = () => {
            if (offlineProvider) {
                offlineProvider.loadFile(FileToolsOptions.BaseUrl + url, (data) => {
                    if (!aborted) {
                        onSuccess(data);
                    }
                    fileRequest.onCompleteObservable.notifyObservers(fileRequest);
                }, onProgress ? (event) => {
                    if (!aborted) {
                        onProgress(event);
                    }
                } : undefined, noOfflineSupport, useArrayBuffer);
            }
        };
        offlineProvider.open(loadFromOfflineSupport, noOfflineSupport);
    }
    else {
        requestFile();
    }
    return fileRequest;
};
const IsFileURL = () => {
    return typeof location !== "undefined" && location.protocol === "file:";
};
const IsBase64DataUrl = (uri) => {
    return base64DataUrlRegEx.test(uri);
};
function DecodeBase64UrlToBinary(uri) {
    return DecodeBase64ToBinary(uri.split(",")[1]);
}
const DecodeBase64UrlToString = (uri) => {
    return DecodeBase64ToString(uri.split(",")[1]);
};
const initSideEffects = () => {
    ThinEngine._FileToolsLoadImage = LoadImage;
    ThinEngine._FileToolsLoadFile = LoadFile;
    ShaderProcessor._FileToolsLoadFile = LoadFile;
};
initSideEffects();
_injectLTSFileTools(DecodeBase64UrlToBinary, DecodeBase64UrlToString, FileToolsOptions, IsBase64DataUrl, IsFileURL, LoadFile, LoadImage, ReadFile, RequestFile, SetCorsBehavior);
var PromiseStates;
(function (PromiseStates) {
    PromiseStates[PromiseStates["Pending"] = 0] = "Pending";
    PromiseStates[PromiseStates["Fulfilled"] = 1] = "Fulfilled";
    PromiseStates[PromiseStates["Rejected"] = 2] = "Rejected";
})(PromiseStates || (PromiseStates = {}));
class FulFillmentAgregator {
    constructor() {
        this.count = 0;
        this.target = 0;
        this.results = [];
    }
}
class InternalPromise {
    constructor(resolver) {
        this._state = PromiseStates.Pending;
        this._children = new Array();
        this._rejectWasConsumed = false;
        if (!resolver) {
            return;
        }
        try {
            resolver((value) => {
                this._resolve(value);
            }, (reason) => {
                this._reject(reason);
            });
        }
        catch (e) {
            this._reject(e);
        }
    }
    get _result() {
        return this._resultValue;
    }
    set _result(value) {
        this._resultValue = value;
        if (this._parent && this._parent._result === undefined) {
            this._parent._result = value;
        }
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    then(onFulfilled, onRejected) {
        let newPromise = new InternalPromise();
        newPromise._onFulfilled = onFulfilled;
        newPromise._onRejected = onRejected;
        this._children.push(newPromise);
        newPromise._parent = this;
        if (this._state !== PromiseStates.Pending) {
            setTimeout(() => {
                if (this._state === PromiseStates.Fulfilled || this._rejectWasConsumed) {
                    newPromise._resolve(this._result);
                }
                else {
                    newPromise._reject(this._reason);
                }
            });
        }
        return newPromise;
    }
    _moveChildren(children) {
        this._children.push(...children.splice(0, children.length));
        this._children.forEach((child) => {
            child._parent = this;
        });
        if (this._state === PromiseStates.Fulfilled) {
            for (var child of this._children) {
                child._resolve(this._result);
            }
        }
        else if (this._state === PromiseStates.Rejected) {
            for (var child of this._children) {
                child._reject(this._reason);
            }
        }
    }
    _resolve(value) {
        try {
            this._state = PromiseStates.Fulfilled;
            let returnedValue = null;
            if (this._onFulfilled) {
                returnedValue = this._onFulfilled(value);
            }
            if (returnedValue !== undefined && returnedValue !== null) {
                if (returnedValue._state !== undefined) {
                    let returnedPromise = returnedValue;
                    returnedPromise._parent = this;
                    returnedPromise._moveChildren(this._children);
                    value = returnedPromise._result;
                }
                else {
                    value = returnedValue;
                }
            }
            this._result = value;
            for (var child of this._children) {
                child._resolve(value);
            }
            this._children.length = 0;
            delete this._onFulfilled;
            delete this._onRejected;
        }
        catch (e) {
            this._reject(e, true);
        }
    }
    _reject(reason, onLocalThrow = false) {
        this._state = PromiseStates.Rejected;
        this._reason = reason;
        if (this._onRejected && !onLocalThrow) {
            try {
                this._onRejected(reason);
                this._rejectWasConsumed = true;
            }
            catch (e) {
                reason = e;
            }
        }
        for (var child of this._children) {
            if (this._rejectWasConsumed) {
                child._resolve(null);
            }
            else {
                child._reject(reason);
            }
        }
        this._children.length = 0;
        delete this._onFulfilled;
        delete this._onRejected;
    }
    static resolve(value) {
        let newPromise = new InternalPromise();
        newPromise._resolve(value);
        return newPromise;
    }
    static _RegisterForFulfillment(promise, agregator, index) {
        promise.then((value) => {
            agregator.results[index] = value;
            agregator.count++;
            if (agregator.count === agregator.target) {
                agregator.rootPromise._resolve(agregator.results);
            }
            return null;
        }, (reason) => {
            if (agregator.rootPromise._state !== PromiseStates.Rejected) {
                agregator.rootPromise._reject(reason);
            }
        });
    }
    static all(promises) {
        let newPromise = new InternalPromise();
        let agregator = new FulFillmentAgregator();
        agregator.target = promises.length;
        agregator.rootPromise = newPromise;
        if (promises.length) {
            for (var index = 0; index < promises.length; index++) {
                InternalPromise._RegisterForFulfillment(promises[index], agregator, index);
            }
        }
        else {
            newPromise._resolve([]);
        }
        return newPromise;
    }
    static race(promises) {
        let newPromise = new InternalPromise();
        if (promises.length) {
            for (const promise of promises) {
                promise.then((value) => {
                    if (newPromise) {
                        newPromise._resolve(value);
                        newPromise = null;
                    }
                    return null;
                }, (reason) => {
                    if (newPromise) {
                        newPromise._reject(reason);
                        newPromise = null;
                    }
                });
            }
        }
        return newPromise;
    }
}
class PromisePolyfill {
    static Apply(force = false) {
        if (force || typeof Promise === 'undefined') {
            let root = window;
            root.Promise = InternalPromise;
        }
    }
}
class InstantiationTools {
    static Instantiate(className) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[className]) {
            return this.RegisteredExternalClasses[className];
        }
        const internalClass = GetClass(className);
        if (internalClass) {
            return internalClass;
        }
        Logger.Warn(className + " not found, you may have missed an import.");
        var arr = className.split(".");
        var fn = (window || this);
        for (var i = 0, len = arr.length; i < len; i++) {
            fn = fn[arr[i]];
        }
        if (typeof fn !== "function") {
            return null;
        }
        return fn;
    }
}
InstantiationTools.RegisteredExternalClasses = {};
function RandomGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
class SliceTools {
    static Slice(data, start, end) {
        if (data.slice) {
            return data.slice(start, end);
        }
        return Array.prototype.slice.call(data, start, end);
    }
    static SliceToArray(data, start, end) {
        if (Array.isArray(data)) {
            return data.slice(start, end);
        }
        return Array.prototype.slice.call(data, start, end);
    }
}
class Tools {
    static get BaseUrl() {
        return FileToolsOptions.BaseUrl;
    }
    static set BaseUrl(value) {
        FileToolsOptions.BaseUrl = value;
    }
    static get DefaultRetryStrategy() {
        return FileToolsOptions.DefaultRetryStrategy;
    }
    static set DefaultRetryStrategy(strategy) {
        FileToolsOptions.DefaultRetryStrategy = strategy;
    }
    static get CorsBehavior() {
        return FileToolsOptions.CorsBehavior;
    }
    static set CorsBehavior(value) {
        FileToolsOptions.CorsBehavior = value;
    }
    static get UseFallbackTexture() {
        return EngineStore.UseFallbackTexture;
    }
    static set UseFallbackTexture(value) {
        EngineStore.UseFallbackTexture = value;
    }
    static get RegisteredExternalClasses() {
        return InstantiationTools.RegisteredExternalClasses;
    }
    static set RegisteredExternalClasses(classes) {
        InstantiationTools.RegisteredExternalClasses = classes;
    }
    static get fallbackTexture() {
        return EngineStore.FallbackTexture;
    }
    static set fallbackTexture(value) {
        EngineStore.FallbackTexture = value;
    }
    static FetchToRef(u, v, width, height, pixels, color) {
        let wrappedU = (Math.abs(u) * width) % width | 0;
        let wrappedV = (Math.abs(v) * height) % height | 0;
        let position = (wrappedU + wrappedV * width) * 4;
        color.r = pixels[position] / 255;
        color.g = pixels[position + 1] / 255;
        color.b = pixels[position + 2] / 255;
        color.a = pixels[position + 3] / 255;
    }
    static Mix(a, b, alpha) {
        return a * (1 - alpha) + b * alpha;
    }
    static Instantiate(className) {
        return InstantiationTools.Instantiate(className);
    }
    static Slice(data, start, end) {
        return SliceTools.Slice(data, start, end);
    }
    static SliceToArray(data, start, end) {
        return SliceTools.SliceToArray(data, start, end);
    }
    static SetImmediate(action) {
        TimingTools.SetImmediate(action);
    }
    static IsExponentOfTwo(value) {
        var count = 1;
        do {
            count *= 2;
        } while (count < value);
        return count === value;
    }
    static FloatRound(value) {
        if (Math.fround) {
            return Math.fround(value);
        }
        return Tools._tmpFloatArray[0] = value, Tools._tmpFloatArray[0];
    }
    static GetFilename(path) {
        var index = path.lastIndexOf("/");
        if (index < 0) {
            return path;
        }
        return path.substring(index + 1);
    }
    static GetFolderPath(uri, returnUnchangedIfNoSlash = false) {
        var index = uri.lastIndexOf("/");
        if (index < 0) {
            if (returnUnchangedIfNoSlash) {
                return uri;
            }
            return "";
        }
        return uri.substring(0, index + 1);
    }
    static ToDegrees(angle) {
        return (angle * 180) / Math.PI;
    }
    static ToRadians(angle) {
        return (angle * Math.PI) / 180;
    }
    static MakeArray(obj, allowsNullUndefined) {
        if (allowsNullUndefined !== true && (obj === undefined || obj == null)) {
            return null;
        }
        return Array.isArray(obj) ? obj : [obj];
    }
    static GetPointerPrefix(engine) {
        var eventPrefix = "pointer";
        if (IsWindowObjectExist() && !window.PointerEvent && IsNavigatorAvailable() && !navigator.pointerEnabled) {
            eventPrefix = "mouse";
        }
        if (engine._badDesktopOS &&
            !engine._badOS &&
            !(document && "ontouchend" in document)) {
            eventPrefix = "mouse";
        }
        return eventPrefix;
    }
    static SetCorsBehavior(url, element) {
        SetCorsBehavior(url, element);
    }
    static CleanUrl(url) {
        url = url.replace(/#/gm, "%23");
        return url;
    }
    static get PreprocessUrl() {
        return FileToolsOptions.PreprocessUrl;
    }
    static set PreprocessUrl(processor) {
        FileToolsOptions.PreprocessUrl = processor;
    }
    static LoadImage(input, onLoad, onError, offlineProvider, mimeType, imageBitmapOptions) {
        return LoadImage(input, onLoad, onError, offlineProvider, mimeType, imageBitmapOptions);
    }
    static LoadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError) {
        return LoadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError);
    }
    static LoadFileAsync(url, useArrayBuffer = true) {
        return new Promise((resolve, reject) => {
            LoadFile(url, (data) => {
                resolve(data);
            }, undefined, undefined, useArrayBuffer, (request, exception) => {
                reject(exception);
            });
        });
    }
    static LoadScript(scriptUrl, onSuccess, onError, scriptId) {
        if (!IsWindowObjectExist()) {
            return;
        }
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", scriptUrl);
        if (scriptId) {
            script.id = scriptId;
        }
        script.onload = () => {
            if (onSuccess) {
                onSuccess();
            }
        };
        script.onerror = (e) => {
            if (onError) {
                onError(`Unable to load script '${scriptUrl}'`, e);
            }
        };
        head.appendChild(script);
    }
    static LoadScriptAsync(scriptUrl, scriptId) {
        return new Promise((resolve, reject) => {
            this.LoadScript(scriptUrl, () => {
                resolve();
            }, (message, exception) => {
                reject(exception);
            });
        });
    }
    static ReadFileAsDataURL(fileToLoad, callback, progressCallback) {
        let reader = new FileReader();
        let request = {
            onCompleteObservable: new Observable(),
            abort: () => reader.abort(),
        };
        reader.onloadend = (e) => {
            request.onCompleteObservable.notifyObservers(request);
        };
        reader.onload = (e) => {
            callback(e.target["result"]);
        };
        reader.onprogress = progressCallback;
        reader.readAsDataURL(fileToLoad);
        return request;
    }
    static ReadFile(file, onSuccess, onProgress, useArrayBuffer, onError) {
        return ReadFile(file, onSuccess, onProgress, useArrayBuffer, onError);
    }
    static FileAsURL(content) {
        var fileBlob = new Blob([content]);
        var url = window.URL || window.webkitURL;
        var link = url.createObjectURL(fileBlob);
        return link;
    }
    static Format(value, decimals = 2) {
        return value.toFixed(decimals);
    }
    static DeepCopy(source, destination, doNotCopyList, mustCopyList) {
        DeepCopier.DeepCopy(source, destination, doNotCopyList, mustCopyList);
    }
    static IsEmpty(obj) {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                return false;
            }
        }
        return true;
    }
    static RegisterTopRootEvents(windowElement, events) {
        for (var index = 0; index < events.length; index++) {
            var event = events[index];
            windowElement.addEventListener(event.name, event.handler, false);
            try {
                if (window.parent) {
                    window.parent.addEventListener(event.name, event.handler, false);
                }
            }
            catch (e) {
            }
        }
    }
    static UnregisterTopRootEvents(windowElement, events) {
        for (var index = 0; index < events.length; index++) {
            var event = events[index];
            windowElement.removeEventListener(event.name, event.handler);
            try {
                if (windowElement.parent) {
                    windowElement.parent.removeEventListener(event.name, event.handler);
                }
            }
            catch (e) {
            }
        }
    }
    static async DumpFramebuffer(width, height, engine, successCallback, mimeType = "image/png", fileName) {
        let bufferView = await engine.readPixels(0, 0, width, height);
        const data = new Uint8Array(bufferView.buffer);
        Tools.DumpData(width, height, data, successCallback, mimeType, fileName, true);
    }
    static DumpData(width, height, data, successCallback, mimeType = "image/png", fileName, invertY = false, toArrayBuffer = false, quality) {
        if (!Tools._ScreenshotCanvas) {
            Tools._ScreenshotCanvas = document.createElement("canvas");
        }
        Tools._ScreenshotCanvas.width = width;
        Tools._ScreenshotCanvas.height = height;
        var context = Tools._ScreenshotCanvas.getContext("2d");
        if (context) {
            if (data instanceof Float32Array) {
                const data2 = new Uint8Array(data.length);
                let n = data.length;
                while (n--) {
                    let v = data[n];
                    data2[n] = v < 0 ? 0 : v > 1 ? 1 : Math.round(v * 255);
                }
                data = data2;
            }
            var imageData = context.createImageData(width, height);
            var castData = imageData.data;
            castData.set(data);
            context.putImageData(imageData, 0, 0);
            let canvas = Tools._ScreenshotCanvas;
            if (invertY) {
                var canvas2 = document.createElement('canvas');
                canvas2.width = width;
                canvas2.height = height;
                var ctx2 = canvas2.getContext('2d');
                if (!ctx2) {
                    return;
                }
                ctx2.translate(0, height);
                ctx2.scale(1, -1);
                ctx2.drawImage(Tools._ScreenshotCanvas, 0, 0);
                canvas = canvas2;
            }
            if (toArrayBuffer) {
                Tools.ToBlob(canvas, (blob) => {
                    let fileReader = new FileReader();
                    fileReader.onload = (event) => {
                        let arrayBuffer = event.target.result;
                        if (successCallback) {
                            successCallback(arrayBuffer);
                        }
                    };
                    fileReader.readAsArrayBuffer(blob);
                }, mimeType, quality);
            }
            else {
                Tools.EncodeScreenshotCanvasData(successCallback, mimeType, fileName, canvas, quality);
            }
        }
    }
    static DumpDataAsync(width, height, data, mimeType = "image/png", fileName, invertY = false, toArrayBuffer = false, quality) {
        return new Promise((resolve) => {
            Tools.DumpData(width, height, data, (result) => resolve(result), mimeType, fileName, invertY, toArrayBuffer, quality);
        });
    }
    static ToBlob(canvas, successCallback, mimeType = "image/png", quality) {
        if (!canvas.toBlob) {
            canvas.toBlob = function (callback, type, quality) {
                setTimeout(() => {
                    var binStr = atob(this.toDataURL(type, quality).split(",")[1]), len = binStr.length, arr = new Uint8Array(len);
                    for (var i = 0; i < len; i++) {
                        arr[i] = binStr.charCodeAt(i);
                    }
                    callback(new Blob([arr]));
                });
            };
        }
        canvas.toBlob(function (blob) {
            successCallback(blob);
        }, mimeType, quality);
    }
    static EncodeScreenshotCanvasData(successCallback, mimeType = "image/png", fileName, canvas, quality) {
        if (successCallback) {
            var base64Image = (canvas !== null && canvas !== void 0 ? canvas : Tools._ScreenshotCanvas).toDataURL(mimeType, quality);
            successCallback(base64Image);
        }
        else {
            this.ToBlob(canvas !== null && canvas !== void 0 ? canvas : Tools._ScreenshotCanvas, function (blob) {
                if (("download" in document.createElement("a"))) {
                    if (!fileName) {
                        var date = new Date();
                        var stringDate = (date.getFullYear() + "-" + (date.getMonth() + 1)).slice(2) + "-" + date.getDate() + "_" + date.getHours() + "-" + ('0' + date.getMinutes()).slice(-2);
                        fileName = "screenshot_" + stringDate + ".png";
                    }
                    Tools.Download(blob, fileName);
                }
                else {
                    var url = URL.createObjectURL(blob);
                    var newWindow = window.open("");
                    if (!newWindow) {
                        return;
                    }
                    var img = newWindow.document.createElement("img");
                    img.onload = function () {
                        URL.revokeObjectURL(url);
                    };
                    img.src = url;
                    newWindow.document.body.appendChild(img);
                }
            }, mimeType, quality);
        }
    }
    static Download(blob, fileName) {
        if (navigator && navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, fileName);
            return;
        }
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style.display = "none";
        a.href = url;
        a.download = fileName;
        a.addEventListener("click", () => {
            if (a.parentElement) {
                a.parentElement.removeChild(a);
            }
        });
        a.click();
        window.URL.revokeObjectURL(url);
    }
    static BackCompatCameraNoPreventDefault(args) {
        if (typeof args[0] === "boolean") {
            return args[0];
        }
        else if (typeof args[1] === "boolean") {
            return args[1];
        }
        return false;
    }
    static CreateScreenshot(engine, camera, size, successCallback, mimeType = "image/png") {
        throw _WarnImport("ScreenshotTools");
    }
    static CreateScreenshotAsync(engine, camera, size, mimeType = "image/png") {
        throw _WarnImport("ScreenshotTools");
    }
    static CreateScreenshotUsingRenderTarget(engine, camera, size, successCallback, mimeType = "image/png", samples = 1, antialiasing = false, fileName) {
        throw _WarnImport("ScreenshotTools");
    }
    static CreateScreenshotUsingRenderTargetAsync(engine, camera, size, mimeType = "image/png", samples = 1, antialiasing = false, fileName) {
        throw _WarnImport("ScreenshotTools");
    }
    static RandomId() {
        return RandomGUID();
    }
    static IsBase64(uri) {
        return IsBase64DataUrl(uri);
    }
    static DecodeBase64(uri) {
        return DecodeBase64UrlToBinary(uri);
    }
    static get errorsCount() {
        return Logger.errorsCount;
    }
    static Log(message) {
        Logger.Log(message);
    }
    static Warn(message) {
        Logger.Warn(message);
    }
    static Error(message) {
        Logger.Error(message);
    }
    static get LogCache() {
        return Logger.LogCache;
    }
    static ClearLogCache() {
        Logger.ClearLogCache();
    }
    static set LogLevels(level) {
        Logger.LogLevels = level;
    }
    static set PerformanceLogLevel(level) {
        if ((level & Tools.PerformanceUserMarkLogLevel) === Tools.PerformanceUserMarkLogLevel) {
            Tools.StartPerformanceCounter = Tools._StartUserMark;
            Tools.EndPerformanceCounter = Tools._EndUserMark;
            return;
        }
        if ((level & Tools.PerformanceConsoleLogLevel) === Tools.PerformanceConsoleLogLevel) {
            Tools.StartPerformanceCounter = Tools._StartPerformanceConsole;
            Tools.EndPerformanceCounter = Tools._EndPerformanceConsole;
            return;
        }
        Tools.StartPerformanceCounter = Tools._StartPerformanceCounterDisabled;
        Tools.EndPerformanceCounter = Tools._EndPerformanceCounterDisabled;
    }
    static _StartPerformanceCounterDisabled(counterName, condition) { }
    static _EndPerformanceCounterDisabled(counterName, condition) { }
    static _StartUserMark(counterName, condition = true) {
        if (!Tools._performance) {
            if (!IsWindowObjectExist()) {
                return;
            }
            Tools._performance = window.performance;
        }
        if (!condition || !Tools._performance.mark) {
            return;
        }
        Tools._performance.mark(counterName + "-Begin");
    }
    static _EndUserMark(counterName, condition = true) {
        if (!condition || !Tools._performance.mark) {
            return;
        }
        Tools._performance.mark(counterName + "-End");
        Tools._performance.measure(counterName, counterName + "-Begin", counterName + "-End");
    }
    static _StartPerformanceConsole(counterName, condition = true) {
        if (!condition) {
            return;
        }
        Tools._StartUserMark(counterName, condition);
        if (console.time) {
            console.time(counterName);
        }
    }
    static _EndPerformanceConsole(counterName, condition = true) {
        if (!condition) {
            return;
        }
        Tools._EndUserMark(counterName, condition);
        console.timeEnd(counterName);
    }
    static get Now() {
        return PrecisionDate.Now;
    }
    static GetClassName(object, isType = false) {
        let name = null;
        if (!isType && object.getClassName) {
            name = object.getClassName();
        }
        else {
            if (object instanceof Object) {
                let classObj = isType ? object : Object.getPrototypeOf(object);
                name = classObj.constructor["__bjsclassName__"];
            }
            if (!name) {
                name = typeof object;
            }
        }
        return name;
    }
    static First(array, predicate) {
        for (let el of array) {
            if (predicate(el)) {
                return el;
            }
        }
        return null;
    }
    static getFullClassName(object, isType = false) {
        let className = null;
        let moduleName = null;
        if (!isType && object.getClassName) {
            className = object.getClassName();
        }
        else {
            if (object instanceof Object) {
                let classObj = isType ? object : Object.getPrototypeOf(object);
                className = classObj.constructor["__bjsclassName__"];
                moduleName = classObj.constructor["__bjsmoduleName__"];
            }
            if (!className) {
                className = typeof object;
            }
        }
        if (!className) {
            return null;
        }
        return (moduleName != null ? moduleName + "." : "") + className;
    }
    static DelayAsync(delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    }
    static IsSafari() {
        if (!IsNavigatorAvailable()) {
            return false;
        }
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
}
Tools.UseCustomRequestHeaders = false;
Tools.CustomRequestHeaders = WebRequest.CustomRequestHeaders;
Tools._tmpFloatArray = new Float32Array(1);
Tools.GetDOMTextContent = GetDOMTextContent;
Tools.GetAbsoluteUrl = (typeof document === "object") ? (url) => { const a = document.createElement("a"); a.href = url; return a.href; } :
    (typeof URL === "function" && typeof location === "object") ? (url) => new URL(url, location.origin).href :
        (url) => { throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context."); };
Tools.NoneLogLevel = Logger.NoneLogLevel;
Tools.MessageLogLevel = Logger.MessageLogLevel;
Tools.WarningLogLevel = Logger.WarningLogLevel;
Tools.ErrorLogLevel = Logger.ErrorLogLevel;
Tools.AllLogLevel = Logger.AllLogLevel;
Tools.IsWindowObjectExist = IsWindowObjectExist;
Tools.PerformanceNoneLogLevel = 0;
Tools.PerformanceUserMarkLogLevel = 1;
Tools.PerformanceConsoleLogLevel = 2;
Tools.StartPerformanceCounter = Tools._StartPerformanceCounterDisabled;
Tools.EndPerformanceCounter = Tools._EndPerformanceCounterDisabled;
EngineStore.FallbackTexture =
    "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z";
PromisePolyfill.Apply();
class UniformBuffer {
    constructor(engine, data, dynamic, name) {
        this._valueCache = {};
        this._engine = engine;
        this._noUBO = !engine.supportsUniformBuffers;
        this._dynamic = dynamic;
        this._name = name !== null && name !== void 0 ? name : "no-name";
        this._data = data || [];
        this._uniformLocations = {};
        this._uniformSizes = {};
        this._uniformArraySizes = {};
        this._uniformLocationPointer = 0;
        this._needSync = false;
        if (this._engine._features.trackUbosInFrame) {
            this._buffers = [];
            this._bufferIndex = -1;
            this._createBufferOnWrite = false;
            this._currentFrameId = 0;
        }
        if (this._noUBO) {
            this.updateMatrix3x3 = this._updateMatrix3x3ForEffect;
            this.updateMatrix2x2 = this._updateMatrix2x2ForEffect;
            this.updateFloat = this._updateFloatForEffect;
            this.updateFloat2 = this._updateFloat2ForEffect;
            this.updateFloat3 = this._updateFloat3ForEffect;
            this.updateFloat4 = this._updateFloat4ForEffect;
            this.updateFloatArray = this._updateFloatArrayForEffect;
            this.updateArray = this._updateArrayForEffect;
            this.updateIntArray = this._updateIntArrayForEffect;
            this.updateMatrix = this._updateMatrixForEffect;
            this.updateMatrices = this._updateMatricesForEffect;
            this.updateVector3 = this._updateVector3ForEffect;
            this.updateVector4 = this._updateVector4ForEffect;
            this.updateColor3 = this._updateColor3ForEffect;
            this.updateColor4 = this._updateColor4ForEffect;
            this.updateDirectColor4 = this._updateDirectColor4ForEffect;
            this.updateInt = this._updateIntForEffect;
            this.updateInt2 = this._updateInt2ForEffect;
            this.updateInt3 = this._updateInt3ForEffect;
            this.updateInt4 = this._updateInt4ForEffect;
        }
        else {
            this._engine._uniformBuffers.push(this);
            this.updateMatrix3x3 = this._updateMatrix3x3ForUniform;
            this.updateMatrix2x2 = this._updateMatrix2x2ForUniform;
            this.updateFloat = this._updateFloatForUniform;
            this.updateFloat2 = this._updateFloat2ForUniform;
            this.updateFloat3 = this._updateFloat3ForUniform;
            this.updateFloat4 = this._updateFloat4ForUniform;
            this.updateFloatArray = this._updateFloatArrayForUniform;
            this.updateArray = this._updateArrayForUniform;
            this.updateIntArray = this._updateIntArrayForUniform;
            this.updateMatrix = this._updateMatrixForUniform;
            this.updateMatrices = this._updateMatricesForUniform;
            this.updateVector3 = this._updateVector3ForUniform;
            this.updateVector4 = this._updateVector4ForUniform;
            this.updateColor3 = this._updateColor3ForUniform;
            this.updateColor4 = this._updateColor4ForUniform;
            this.updateDirectColor4 = this._updateDirectColor4ForUniform;
            this.updateInt = this._updateIntForUniform;
            this.updateInt2 = this._updateInt2ForUniform;
            this.updateInt3 = this._updateInt3ForUniform;
            this.updateInt4 = this._updateInt4ForUniform;
        }
    }
    get useUbo() {
        return !this._noUBO;
    }
    get isSync() {
        return !this._needSync;
    }
    isDynamic() {
        return this._dynamic !== undefined;
    }
    getData() {
        return this._bufferData;
    }
    getBuffer() {
        return this._buffer;
    }
    _fillAlignment(size) {
        var alignment;
        if (size <= 2) {
            alignment = size;
        }
        else {
            alignment = 4;
        }
        if ((this._uniformLocationPointer % alignment) !== 0) {
            var oldPointer = this._uniformLocationPointer;
            this._uniformLocationPointer += alignment - (this._uniformLocationPointer % alignment);
            var diff = this._uniformLocationPointer - oldPointer;
            for (var i = 0; i < diff; i++) {
                this._data.push(0);
            }
        }
    }
    addUniform(name, size, arraySize = 0) {
        if (this._noUBO) {
            return;
        }
        if (this._uniformLocations[name] !== undefined) {
            return;
        }
        var data;
        if (arraySize > 0) {
            if (size instanceof Array) {
                throw "addUniform should not be use with Array in UBO: " + name;
            }
            this._fillAlignment(4);
            this._uniformArraySizes[name] = { strideSize: size, arraySize };
            if (size == 16) {
                size = size * arraySize;
            }
            else {
                const perElementPadding = 4 - size;
                const totalPadding = perElementPadding * arraySize;
                size = size * arraySize + totalPadding;
            }
            data = [];
            for (var i = 0; i < size; i++) {
                data.push(0);
            }
        }
        else {
            if (size instanceof Array) {
                data = size;
                size = data.length;
            }
            else {
                size = size;
                data = [];
                for (var i = 0; i < size; i++) {
                    data.push(0);
                }
            }
            this._fillAlignment(size);
        }
        this._uniformSizes[name] = size;
        this._uniformLocations[name] = this._uniformLocationPointer;
        this._uniformLocationPointer += size;
        for (var i = 0; i < size; i++) {
            this._data.push(data[i]);
        }
        this._needSync = true;
    }
    addMatrix(name, mat) {
        this.addUniform(name, Array.prototype.slice.call(mat.toArray()));
    }
    addFloat2(name, x, y) {
        var temp = [x, y];
        this.addUniform(name, temp);
    }
    addFloat3(name, x, y, z) {
        var temp = [x, y, z];
        this.addUniform(name, temp);
    }
    addColor3(name, color) {
        var temp = [color.r, color.g, color.b];
        this.addUniform(name, temp);
    }
    addColor4(name, color, alpha) {
        var temp = [color.r, color.g, color.b, alpha];
        this.addUniform(name, temp);
    }
    addVector3(name, vector) {
        var temp = [vector.x, vector.y, vector.z];
        this.addUniform(name, temp);
    }
    addMatrix3x3(name) {
        this.addUniform(name, 12);
    }
    addMatrix2x2(name) {
        this.addUniform(name, 8);
    }
    create() {
        if (this._noUBO) {
            return;
        }
        if (this._buffer) {
            return;
        }
        this._fillAlignment(4);
        this._bufferData = new Float32Array(this._data);
        this._rebuild();
        this._needSync = true;
    }
    _rebuild() {
        if (this._noUBO || !this._bufferData) {
            return;
        }
        if (this._dynamic) {
            this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData);
        }
        else {
            this._buffer = this._engine.createUniformBuffer(this._bufferData);
        }
        if (this._engine._features.trackUbosInFrame) {
            this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : undefined]);
            this._bufferIndex = this._buffers.length - 1;
            this._createBufferOnWrite = false;
        }
    }
    get _numBuffers() {
        return this._buffers.length;
    }
    get _indexBuffer() {
        return this._bufferIndex;
    }
    get name() {
        return this._name;
    }
    _buffersEqual(buf1, buf2) {
        for (let i = 0; i < buf1.length; ++i) {
            if (buf1[i] !== buf2[i]) {
                return false;
            }
        }
        return true;
    }
    _copyBuffer(src, dst) {
        for (let i = 0; i < src.length; ++i) {
            dst[i] = src[i];
        }
    }
    update() {
        this.bindUniformBuffer();
        if (!this._buffer) {
            this.create();
            return;
        }
        if (!this._dynamic && !this._needSync) {
            this._createBufferOnWrite = this._engine._features.trackUbosInFrame;
            return;
        }
        if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
            if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) {
                this._needSync = false;
                this._createBufferOnWrite = this._engine._features.trackUbosInFrame;
                return;
            }
            else {
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1]);
            }
        }
        this._engine.updateUniformBuffer(this._buffer, this._bufferData);
        if (this._engine._features._collectUbosUpdatedInFrame) {
            if (!UniformBuffer._updatedUbosInFrame[this._name]) {
                UniformBuffer._updatedUbosInFrame[this._name] = 0;
            }
            UniformBuffer._updatedUbosInFrame[this._name]++;
        }
        this._needSync = false;
        this._createBufferOnWrite = this._engine._features.trackUbosInFrame;
    }
    _createNewBuffer() {
        if (this._bufferIndex + 1 < this._buffers.length) {
            this._bufferIndex++;
            this._buffer = this._buffers[this._bufferIndex][0];
            this._createBufferOnWrite = false;
            this._needSync = true;
        }
        else {
            this._rebuild();
        }
    }
    _checkNewFrame() {
        if (this._engine._features.trackUbosInFrame && this._currentFrameId !== this._engine.frameId) {
            this._currentFrameId = this._engine.frameId;
            this._createBufferOnWrite = false;
            if (this._buffers && this._buffers.length > 0) {
                this._needSync = this._bufferIndex !== 0;
                this._bufferIndex = 0;
                this._buffer = this._buffers[this._bufferIndex][0];
            }
            else {
                this._bufferIndex = -1;
            }
        }
    }
    updateUniform(uniformName, data, size) {
        this._checkNewFrame();
        var location = this._uniformLocations[uniformName];
        if (location === undefined) {
            if (this._buffer) {
                Logger.Error("Cannot add an uniform after UBO has been created.");
                return;
            }
            this.addUniform(uniformName, size);
            location = this._uniformLocations[uniformName];
        }
        if (!this._buffer) {
            this.create();
        }
        if (!this._dynamic) {
            var changed = false;
            for (var i = 0; i < size; i++) {
                if ((size === 16 && !this._engine._features.uniformBufferHardCheckMatrix) || this._bufferData[location + i] !== Tools.FloatRound(data[i])) {
                    changed = true;
                    if (this._createBufferOnWrite) {
                        this._createNewBuffer();
                    }
                    this._bufferData[location + i] = data[i];
                }
            }
            this._needSync = this._needSync || changed;
        }
        else {
            for (var i = 0; i < size; i++) {
                this._bufferData[location + i] = data[i];
            }
        }
    }
    updateUniformArray(uniformName, data, size) {
        this._checkNewFrame();
        var location = this._uniformLocations[uniformName];
        if (location === undefined) {
            Logger.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform.");
            return;
        }
        if (!this._buffer) {
            this.create();
        }
        const arraySizes = this._uniformArraySizes[uniformName];
        if (!this._dynamic) {
            var changed = false;
            let countToFour = 0;
            let baseStride = 0;
            for (var i = 0; i < size; i++) {
                if (this._bufferData[location + baseStride * 4 + countToFour] !== Tools.FloatRound(data[i])) {
                    changed = true;
                    if (this._createBufferOnWrite) {
                        this._createNewBuffer();
                    }
                    this._bufferData[location + baseStride * 4 + countToFour] = data[i];
                }
                countToFour++;
                if (countToFour === arraySizes.strideSize) {
                    for (; countToFour < 4; countToFour++) {
                        this._bufferData[location + baseStride * 4 + countToFour] = 0;
                    }
                    countToFour = 0;
                    baseStride++;
                }
            }
            this._needSync = this._needSync || changed;
        }
        else {
            for (var i = 0; i < size; i++) {
                this._bufferData[location + i] = data[i];
            }
        }
    }
    _cacheMatrix(name, matrix) {
        this._checkNewFrame();
        const cache = this._valueCache[name];
        const flag = matrix.updateFlag;
        if (cache !== undefined && cache === flag) {
            return false;
        }
        this._valueCache[name] = flag;
        return true;
    }
    _updateMatrix3x3ForUniform(name, matrix) {
        for (var i = 0; i < 3; i++) {
            UniformBuffer._tempBuffer[i * 4] = matrix[i * 3];
            UniformBuffer._tempBuffer[i * 4 + 1] = matrix[i * 3 + 1];
            UniformBuffer._tempBuffer[i * 4 + 2] = matrix[i * 3 + 2];
            UniformBuffer._tempBuffer[i * 4 + 3] = 0.0;
        }
        this.updateUniform(name, UniformBuffer._tempBuffer, 12);
    }
    _updateMatrix3x3ForEffect(name, matrix) {
        this._currentEffect.setMatrix3x3(name, matrix);
    }
    _updateMatrix2x2ForEffect(name, matrix) {
        this._currentEffect.setMatrix2x2(name, matrix);
    }
    _updateMatrix2x2ForUniform(name, matrix) {
        for (var i = 0; i < 2; i++) {
            UniformBuffer._tempBuffer[i * 4] = matrix[i * 2];
            UniformBuffer._tempBuffer[i * 4 + 1] = matrix[i * 2 + 1];
            UniformBuffer._tempBuffer[i * 4 + 2] = 0.0;
            UniformBuffer._tempBuffer[i * 4 + 3] = 0.0;
        }
        this.updateUniform(name, UniformBuffer._tempBuffer, 8);
    }
    _updateFloatForEffect(name, x) {
        this._currentEffect.setFloat(name, x);
    }
    _updateFloatForUniform(name, x) {
        UniformBuffer._tempBuffer[0] = x;
        this.updateUniform(name, UniformBuffer._tempBuffer, 1);
    }
    _updateFloat2ForEffect(name, x, y, suffix = "") {
        this._currentEffect.setFloat2(name + suffix, x, y);
    }
    _updateFloat2ForUniform(name, x, y) {
        UniformBuffer._tempBuffer[0] = x;
        UniformBuffer._tempBuffer[1] = y;
        this.updateUniform(name, UniformBuffer._tempBuffer, 2);
    }
    _updateFloat3ForEffect(name, x, y, z, suffix = "") {
        this._currentEffect.setFloat3(name + suffix, x, y, z);
    }
    _updateFloat3ForUniform(name, x, y, z) {
        UniformBuffer._tempBuffer[0] = x;
        UniformBuffer._tempBuffer[1] = y;
        UniformBuffer._tempBuffer[2] = z;
        this.updateUniform(name, UniformBuffer._tempBuffer, 3);
    }
    _updateFloat4ForEffect(name, x, y, z, w, suffix = "") {
        this._currentEffect.setFloat4(name + suffix, x, y, z, w);
    }
    _updateFloat4ForUniform(name, x, y, z, w) {
        UniformBuffer._tempBuffer[0] = x;
        UniformBuffer._tempBuffer[1] = y;
        UniformBuffer._tempBuffer[2] = z;
        UniformBuffer._tempBuffer[3] = w;
        this.updateUniform(name, UniformBuffer._tempBuffer, 4);
    }
    _updateFloatArrayForEffect(name, array) {
        this._currentEffect.setFloatArray(name, array);
    }
    _updateFloatArrayForUniform(name, array) {
        this.updateUniformArray(name, array, array.length);
    }
    _updateArrayForEffect(name, array) {
        this._currentEffect.setArray(name, array);
    }
    _updateArrayForUniform(name, array) {
        this.updateUniformArray(name, array, array.length);
    }
    _updateIntArrayForEffect(name, array) {
        this._currentEffect.setIntArray(name, array);
    }
    _updateIntArrayForUniform(name, array) {
        UniformBuffer._tempBufferInt32View.set(array);
        this.updateUniformArray(name, UniformBuffer._tempBuffer, array.length);
    }
    _updateMatrixForEffect(name, mat) {
        this._currentEffect.setMatrix(name, mat);
    }
    _updateMatrixForUniform(name, mat) {
        if (this._cacheMatrix(name, mat)) {
            this.updateUniform(name, mat.toArray(), 16);
        }
    }
    _updateMatricesForEffect(name, mat) {
        this._currentEffect.setMatrices(name, mat);
    }
    _updateMatricesForUniform(name, mat) {
        this.updateUniform(name, mat, mat.length);
    }
    _updateVector3ForEffect(name, vector) {
        this._currentEffect.setVector3(name, vector);
    }
    _updateVector3ForUniform(name, vector) {
        UniformBuffer._tempBuffer[0] = vector.x;
        UniformBuffer._tempBuffer[1] = vector.y;
        UniformBuffer._tempBuffer[2] = vector.z;
        this.updateUniform(name, UniformBuffer._tempBuffer, 3);
    }
    _updateVector4ForEffect(name, vector) {
        this._currentEffect.setVector4(name, vector);
    }
    _updateVector4ForUniform(name, vector) {
        UniformBuffer._tempBuffer[0] = vector.x;
        UniformBuffer._tempBuffer[1] = vector.y;
        UniformBuffer._tempBuffer[2] = vector.z;
        UniformBuffer._tempBuffer[3] = vector.w;
        this.updateUniform(name, UniformBuffer._tempBuffer, 4);
    }
    _updateColor3ForEffect(name, color, suffix = "") {
        this._currentEffect.setColor3(name + suffix, color);
    }
    _updateColor3ForUniform(name, color) {
        UniformBuffer._tempBuffer[0] = color.r;
        UniformBuffer._tempBuffer[1] = color.g;
        UniformBuffer._tempBuffer[2] = color.b;
        this.updateUniform(name, UniformBuffer._tempBuffer, 3);
    }
    _updateColor4ForEffect(name, color, alpha, suffix = "") {
        this._currentEffect.setColor4(name + suffix, color, alpha);
    }
    _updateDirectColor4ForEffect(name, color, suffix = "") {
        this._currentEffect.setDirectColor4(name + suffix, color);
    }
    _updateColor4ForUniform(name, color, alpha) {
        UniformBuffer._tempBuffer[0] = color.r;
        UniformBuffer._tempBuffer[1] = color.g;
        UniformBuffer._tempBuffer[2] = color.b;
        UniformBuffer._tempBuffer[3] = alpha;
        this.updateUniform(name, UniformBuffer._tempBuffer, 4);
    }
    _updateDirectColor4ForUniform(name, color) {
        UniformBuffer._tempBuffer[0] = color.r;
        UniformBuffer._tempBuffer[1] = color.g;
        UniformBuffer._tempBuffer[2] = color.b;
        UniformBuffer._tempBuffer[3] = color.a;
        this.updateUniform(name, UniformBuffer._tempBuffer, 4);
    }
    _updateIntForEffect(name, x, suffix = "") {
        this._currentEffect.setInt(name + suffix, x);
    }
    _updateIntForUniform(name, x) {
        UniformBuffer._tempBufferInt32View[0] = x;
        this.updateUniform(name, UniformBuffer._tempBuffer, 1);
    }
    _updateInt2ForEffect(name, x, y, suffix = "") {
        this._currentEffect.setInt2(name + suffix, x, y);
    }
    _updateInt2ForUniform(name, x, y) {
        UniformBuffer._tempBufferInt32View[0] = x;
        UniformBuffer._tempBufferInt32View[1] = y;
        this.updateUniform(name, UniformBuffer._tempBuffer, 2);
    }
    _updateInt3ForEffect(name, x, y, z, suffix = "") {
        this._currentEffect.setInt3(name + suffix, x, y, z);
    }
    _updateInt3ForUniform(name, x, y, z) {
        UniformBuffer._tempBufferInt32View[0] = x;
        UniformBuffer._tempBufferInt32View[1] = y;
        UniformBuffer._tempBufferInt32View[2] = z;
        this.updateUniform(name, UniformBuffer._tempBuffer, 3);
    }
    _updateInt4ForEffect(name, x, y, z, w, suffix = "") {
        this._currentEffect.setInt4(name + suffix, x, y, z, w);
    }
    _updateInt4ForUniform(name, x, y, z, w) {
        UniformBuffer._tempBufferInt32View[0] = x;
        UniformBuffer._tempBufferInt32View[1] = y;
        UniformBuffer._tempBufferInt32View[2] = z;
        UniformBuffer._tempBufferInt32View[3] = w;
        this.updateUniform(name, UniformBuffer._tempBuffer, 4);
    }
    setTexture(name, texture) {
        this._currentEffect.setTexture(name, texture);
    }
    updateUniformDirectly(uniformName, data) {
        this.updateUniform(uniformName, data, data.length);
        this.update();
    }
    bindToEffect(effect, name) {
        this._currentEffect = effect;
        this._currentEffectName = name;
    }
    bindUniformBuffer() {
        if (!this._noUBO && this._buffer && this._currentEffect) {
            this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName);
        }
    }
    unbindEffect() {
        this._currentEffect = undefined;
        this._currentEffectName = undefined;
    }
    dispose() {
        if (this._noUBO) {
            return;
        }
        const uniformBuffers = this._engine._uniformBuffers;
        let index = uniformBuffers.indexOf(this);
        if (index !== -1) {
            uniformBuffers[index] = uniformBuffers[uniformBuffers.length - 1];
            uniformBuffers.pop();
        }
        if (this._engine._features.trackUbosInFrame && this._buffers) {
            for (let i = 0; i < this._buffers.length; ++i) {
                const buffer = this._buffers[i][0];
                this._engine._releaseBuffer(buffer);
            }
        }
        else if (this._buffer && this._engine._releaseBuffer(this._buffer)) {
            this._buffer = null;
        }
    }
}
UniformBuffer._updatedUbosInFrame = {};
UniformBuffer._MAX_UNIFORM_SIZE = 256;
UniformBuffer._tempBuffer = new Float32Array(UniformBuffer._MAX_UNIFORM_SIZE);
UniformBuffer._tempBufferInt32View = new Uint32Array(UniformBuffer._tempBuffer.buffer);
class Buffer {
    constructor(engine, data, updatable, stride = 0, postponeInternalCreation = false, instanced = false, useBytes = false, divisor) {
        this._isAlreadyOwned = false;
        if (engine.getScene) {
            this._engine = engine.getScene().getEngine();
        }
        else {
            this._engine = engine;
        }
        this._updatable = updatable;
        this._instanced = instanced;
        this._divisor = divisor || 1;
        if (data instanceof DataBuffer) {
            this._data = null;
            this._buffer = data;
        }
        else {
            this._data = data;
            this._buffer = null;
        }
        this.byteStride = useBytes ? stride : stride * Float32Array.BYTES_PER_ELEMENT;
        if (!postponeInternalCreation) {
            this.create();
        }
    }
    createVertexBuffer(kind, offset, size, stride, instanced, useBytes = false, divisor) {
        const byteOffset = useBytes ? offset : offset * Float32Array.BYTES_PER_ELEMENT;
        const byteStride = stride ? (useBytes ? stride : stride * Float32Array.BYTES_PER_ELEMENT) : this.byteStride;
        return new VertexBuffer(this._engine, this, kind, this._updatable, true, byteStride, instanced === undefined ? this._instanced : instanced, byteOffset, size, undefined, undefined, true, this._divisor || divisor);
    }
    isUpdatable() {
        return this._updatable;
    }
    getData() {
        return this._data;
    }
    getBuffer() {
        return this._buffer;
    }
    getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT;
    }
    create(data = null) {
        if (!data && this._buffer) {
            return;
        }
        data = data || this._data;
        if (!data) {
            return;
        }
        if (!this._buffer) {
            if (this._updatable) {
                this._buffer = this._engine.createDynamicVertexBuffer(data);
                this._data = data;
            }
            else {
                this._buffer = this._engine.createVertexBuffer(data);
            }
        }
        else if (this._updatable) {
            this._engine.updateDynamicVertexBuffer(this._buffer, data);
            this._data = data;
        }
    }
    _rebuild() {
        this._buffer = null;
        this.create(this._data);
    }
    update(data) {
        this.create(data);
    }
    updateDirectly(data, offset, vertexCount, useBytes = false) {
        if (!this._buffer) {
            return;
        }
        if (this._updatable) {
            this._engine.updateDynamicVertexBuffer(this._buffer, data, useBytes ? offset : offset * Float32Array.BYTES_PER_ELEMENT, (vertexCount ? vertexCount * this.byteStride : undefined));
            this._data = null;
        }
    }
    _increaseReferences() {
        if (!this._buffer) {
            return;
        }
        if (!this._isAlreadyOwned) {
            this._isAlreadyOwned = true;
            return;
        }
        this._buffer.references++;
    }
    dispose() {
        if (!this._buffer) {
            return;
        }
        if (this._engine._releaseBuffer(this._buffer)) {
            this._buffer = null;
            this._data = null;
        }
    }
}
class VertexBuffer {
    constructor(engine, data, kind, updatable, postponeInternalCreation, stride, instanced, offset, size, type, normalized = false, useBytes = false, divisor = 1, takeBufferOwnership = false) {
        if (data instanceof Buffer) {
            this._buffer = data;
            this._ownsBuffer = takeBufferOwnership;
        }
        else {
            this._buffer = new Buffer(engine, data, updatable, stride, postponeInternalCreation, instanced, useBytes);
            this._ownsBuffer = true;
        }
        this.uniqueId = VertexBuffer._Counter++;
        this._kind = kind;
        if (type == undefined) {
            const data = this.getData();
            this.type = VertexBuffer.FLOAT;
            if (data instanceof Int8Array) {
                this.type = VertexBuffer.BYTE;
            }
            else if (data instanceof Uint8Array) {
                this.type = VertexBuffer.UNSIGNED_BYTE;
            }
            else if (data instanceof Int16Array) {
                this.type = VertexBuffer.SHORT;
            }
            else if (data instanceof Uint16Array) {
                this.type = VertexBuffer.UNSIGNED_SHORT;
            }
            else if (data instanceof Int32Array) {
                this.type = VertexBuffer.INT;
            }
            else if (data instanceof Uint32Array) {
                this.type = VertexBuffer.UNSIGNED_INT;
            }
        }
        else {
            this.type = type;
        }
        const typeByteLength = VertexBuffer.GetTypeByteLength(this.type);
        if (useBytes) {
            this._size = size || (stride ? (stride / typeByteLength) : VertexBuffer.DeduceStride(kind));
            this.byteStride = stride || this._buffer.byteStride || (this._size * typeByteLength);
            this.byteOffset = offset || 0;
        }
        else {
            this._size = size || stride || VertexBuffer.DeduceStride(kind);
            this.byteStride = stride ? (stride * typeByteLength) : (this._buffer.byteStride || (this._size * typeByteLength));
            this.byteOffset = (offset || 0) * typeByteLength;
        }
        this.normalized = normalized;
        this._instanced = instanced !== undefined ? instanced : false;
        this._instanceDivisor = instanced ? divisor : 0;
        this._computeHashCode();
    }
    get instanceDivisor() {
        return this._instanceDivisor;
    }
    set instanceDivisor(value) {
        this._instanceDivisor = value;
        if (value == 0) {
            this._instanced = false;
        }
        else {
            this._instanced = true;
        }
        this._computeHashCode();
    }
    _computeHashCode() {
        this.hashCode =
            (((this.type - 5120) << 0) +
                ((this.normalized ? 1 : 0) << 3) +
                (this._size << 4) +
                ((this._instanced ? 1 : 0) << 6) +
                (this.byteStride << 12));
    }
    _rebuild() {
        if (!this._buffer) {
            return;
        }
        this._buffer._rebuild();
    }
    getKind() {
        return this._kind;
    }
    isUpdatable() {
        return this._buffer.isUpdatable();
    }
    getData() {
        return this._buffer.getData();
    }
    getFloatData(totalVertices, forceCopy) {
        let data = this.getData();
        if (!data) {
            return null;
        }
        const tightlyPackedByteStride = this.getSize() * VertexBuffer.GetTypeByteLength(this.type);
        const count = totalVertices * this.getSize();
        if (this.type !== VertexBuffer.FLOAT || this.byteStride !== tightlyPackedByteStride) {
            const copy = new Float32Array(count);
            this.forEach(count, (value, index) => copy[index] = value);
            return copy;
        }
        if (!(data instanceof Array || data instanceof Float32Array) || this.byteOffset !== 0 || data.length !== count) {
            if (data instanceof Array) {
                const offset = this.byteOffset / 4;
                return SliceTools.Slice(data, offset, offset + count);
            }
            else if (data instanceof ArrayBuffer) {
                return new Float32Array(data, this.byteOffset, count);
            }
            else {
                let offset = data.byteOffset + this.byteOffset;
                if (forceCopy) {
                    let result = new Float32Array(count);
                    let source = new Float32Array(data.buffer, offset, count);
                    result.set(source);
                    return result;
                }
                let remainder = offset % 4;
                if (remainder) {
                    offset = Math.max(0, offset - remainder);
                }
                return new Float32Array(data.buffer, offset, count);
            }
        }
        if (forceCopy) {
            return SliceTools.Slice(data);
        }
        return data;
    }
    getBuffer() {
        return this._buffer.getBuffer();
    }
    getStrideSize() {
        return this.byteStride / VertexBuffer.GetTypeByteLength(this.type);
    }
    getOffset() {
        return this.byteOffset / VertexBuffer.GetTypeByteLength(this.type);
    }
    getSize(sizeInBytes = false) {
        return sizeInBytes ? this._size * VertexBuffer.GetTypeByteLength(this.type) : this._size;
    }
    getIsInstanced() {
        return this._instanced;
    }
    getInstanceDivisor() {
        return this._instanceDivisor;
    }
    create(data) {
        this._buffer.create(data);
    }
    update(data) {
        this._buffer.update(data);
    }
    updateDirectly(data, offset, useBytes = false) {
        this._buffer.updateDirectly(data, offset, undefined, useBytes);
    }
    dispose() {
        if (this._ownsBuffer) {
            this._buffer.dispose();
        }
    }
    forEach(count, callback) {
        VertexBuffer.ForEach(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, count, this.normalized, callback);
    }
    static DeduceStride(kind) {
        switch (kind) {
            case VertexBuffer.UVKind:
            case VertexBuffer.UV2Kind:
            case VertexBuffer.UV3Kind:
            case VertexBuffer.UV4Kind:
            case VertexBuffer.UV5Kind:
            case VertexBuffer.UV6Kind:
                return 2;
            case VertexBuffer.NormalKind:
            case VertexBuffer.PositionKind:
                return 3;
            case VertexBuffer.ColorKind:
            case VertexBuffer.MatricesIndicesKind:
            case VertexBuffer.MatricesIndicesExtraKind:
            case VertexBuffer.MatricesWeightsKind:
            case VertexBuffer.MatricesWeightsExtraKind:
            case VertexBuffer.TangentKind:
                return 4;
            default:
                throw new Error("Invalid kind '" + kind + "'");
        }
    }
    static GetTypeByteLength(type) {
        switch (type) {
            case VertexBuffer.BYTE:
            case VertexBuffer.UNSIGNED_BYTE:
                return 1;
            case VertexBuffer.SHORT:
            case VertexBuffer.UNSIGNED_SHORT:
                return 2;
            case VertexBuffer.INT:
            case VertexBuffer.UNSIGNED_INT:
            case VertexBuffer.FLOAT:
                return 4;
            default:
                throw new Error(`Invalid type '${type}'`);
        }
    }
    static ForEach(data, byteOffset, byteStride, componentCount, componentType, count, normalized, callback) {
        if (data instanceof Array) {
            let offset = byteOffset / 4;
            const stride = byteStride / 4;
            for (let index = 0; index < count; index += componentCount) {
                for (let componentIndex = 0; componentIndex < componentCount; componentIndex++) {
                    callback(data[offset + componentIndex], index + componentIndex);
                }
                offset += stride;
            }
        }
        else {
            const dataView = data instanceof ArrayBuffer ? new DataView(data) : new DataView(data.buffer, data.byteOffset, data.byteLength);
            const componentByteLength = VertexBuffer.GetTypeByteLength(componentType);
            for (let index = 0; index < count; index += componentCount) {
                let componentByteOffset = byteOffset;
                for (let componentIndex = 0; componentIndex < componentCount; componentIndex++) {
                    const value = VertexBuffer._GetFloatValue(dataView, componentType, componentByteOffset, normalized);
                    callback(value, index + componentIndex);
                    componentByteOffset += componentByteLength;
                }
                byteOffset += byteStride;
            }
        }
    }
    static _GetFloatValue(dataView, type, byteOffset, normalized) {
        switch (type) {
            case VertexBuffer.BYTE: {
                let value = dataView.getInt8(byteOffset);
                if (normalized) {
                    value = Math.max(value / 127, -1);
                }
                return value;
            }
            case VertexBuffer.UNSIGNED_BYTE: {
                let value = dataView.getUint8(byteOffset);
                if (normalized) {
                    value = value / 255;
                }
                return value;
            }
            case VertexBuffer.SHORT: {
                let value = dataView.getInt16(byteOffset, true);
                if (normalized) {
                    value = Math.max(value / 32767, -1);
                }
                return value;
            }
            case VertexBuffer.UNSIGNED_SHORT: {
                let value = dataView.getUint16(byteOffset, true);
                if (normalized) {
                    value = value / 65535;
                }
                return value;
            }
            case VertexBuffer.INT: {
                return dataView.getInt32(byteOffset, true);
            }
            case VertexBuffer.UNSIGNED_INT: {
                return dataView.getUint32(byteOffset, true);
            }
            case VertexBuffer.FLOAT: {
                return dataView.getFloat32(byteOffset, true);
            }
            default: {
                throw new Error(`Invalid component type ${type}`);
            }
        }
    }
}
VertexBuffer._Counter = 0;
VertexBuffer.BYTE = 5120;
VertexBuffer.UNSIGNED_BYTE = 5121;
VertexBuffer.SHORT = 5122;
VertexBuffer.UNSIGNED_SHORT = 5123;
VertexBuffer.INT = 5124;
VertexBuffer.UNSIGNED_INT = 5125;
VertexBuffer.FLOAT = 5126;
VertexBuffer.PositionKind = "position";
VertexBuffer.NormalKind = "normal";
VertexBuffer.TangentKind = "tangent";
VertexBuffer.UVKind = "uv";
VertexBuffer.UV2Kind = "uv2";
VertexBuffer.UV3Kind = "uv3";
VertexBuffer.UV4Kind = "uv4";
VertexBuffer.UV5Kind = "uv5";
VertexBuffer.UV6Kind = "uv6";
VertexBuffer.ColorKind = "color";
VertexBuffer.MatricesIndicesKind = "matricesIndices";
VertexBuffer.MatricesWeightsKind = "matricesWeights";
VertexBuffer.MatricesIndicesExtraKind = "matricesIndicesExtra";
VertexBuffer.MatricesWeightsExtraKind = "matricesWeightsExtra";
class PerfCounter {
    constructor() {
        this._startMonitoringTime = 0;
        this._min = 0;
        this._max = 0;
        this._average = 0;
        this._lastSecAverage = 0;
        this._current = 0;
        this._totalValueCount = 0;
        this._totalAccumulated = 0;
        this._lastSecAccumulated = 0;
        this._lastSecTime = 0;
        this._lastSecValueCount = 0;
    }
    get min() {
        return this._min;
    }
    get max() {
        return this._max;
    }
    get average() {
        return this._average;
    }
    get lastSecAverage() {
        return this._lastSecAverage;
    }
    get current() {
        return this._current;
    }
    get total() {
        return this._totalAccumulated;
    }
    get count() {
        return this._totalValueCount;
    }
    fetchNewFrame() {
        this._totalValueCount++;
        this._current = 0;
        this._lastSecValueCount++;
    }
    addCount(newCount, fetchResult) {
        if (!PerfCounter.Enabled) {
            return;
        }
        this._current += newCount;
        if (fetchResult) {
            this._fetchResult();
        }
    }
    beginMonitoring() {
        if (!PerfCounter.Enabled) {
            return;
        }
        this._startMonitoringTime = PrecisionDate.Now;
    }
    endMonitoring(newFrame = true) {
        if (!PerfCounter.Enabled) {
            return;
        }
        if (newFrame) {
            this.fetchNewFrame();
        }
        let currentTime = PrecisionDate.Now;
        this._current = currentTime - this._startMonitoringTime;
        if (newFrame) {
            this._fetchResult();
        }
    }
    _fetchResult() {
        this._totalAccumulated += this._current;
        this._lastSecAccumulated += this._current;
        this._min = Math.min(this._min, this._current);
        this._max = Math.max(this._max, this._current);
        this._average = this._totalAccumulated / this._totalValueCount;
        let now = PrecisionDate.Now;
        if ((now - this._lastSecTime) > 1000) {
            this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount;
            this._lastSecTime = now;
            this._lastSecAccumulated = 0;
            this._lastSecValueCount = 0;
        }
    }
}
PerfCounter.Enabled = true;
class PerformanceMonitor {
    constructor(frameSampleSize = 30) {
        this._enabled = true;
        this._rollingFrameTime = new RollingAverage(frameSampleSize);
    }
    sampleFrame(timeMs = PrecisionDate.Now) {
        if (!this._enabled) {
            return;
        }
        if (this._lastFrameTimeMs != null) {
            let dt = timeMs - this._lastFrameTimeMs;
            this._rollingFrameTime.add(dt);
        }
        this._lastFrameTimeMs = timeMs;
    }
    get averageFrameTime() {
        return this._rollingFrameTime.average;
    }
    get averageFrameTimeVariance() {
        return this._rollingFrameTime.variance;
    }
    get instantaneousFrameTime() {
        return this._rollingFrameTime.history(0);
    }
    get averageFPS() {
        return 1000.0 / this._rollingFrameTime.average;
    }
    get instantaneousFPS() {
        let history = this._rollingFrameTime.history(0);
        if (history === 0) {
            return 0;
        }
        return 1000.0 / history;
    }
    get isSaturated() {
        return this._rollingFrameTime.isSaturated();
    }
    enable() {
        this._enabled = true;
    }
    disable() {
        this._enabled = false;
        this._lastFrameTimeMs = null;
    }
    get isEnabled() {
        return this._enabled;
    }
    reset() {
        this._lastFrameTimeMs = null;
        this._rollingFrameTime.reset();
    }
}
class RollingAverage {
    constructor(length) {
        this._samples = new Array(length);
        this.reset();
    }
    add(v) {
        let delta;
        if (this.isSaturated()) {
            let bottomValue = this._samples[this._pos];
            delta = bottomValue - this.average;
            this.average -= delta / (this._sampleCount - 1);
            this._m2 -= delta * (bottomValue - this.average);
        }
        else {
            this._sampleCount++;
        }
        delta = v - this.average;
        this.average += delta / (this._sampleCount);
        this._m2 += delta * (v - this.average);
        this.variance = this._m2 / (this._sampleCount - 1);
        this._samples[this._pos] = v;
        this._pos++;
        this._pos %= this._samples.length;
    }
    history(i) {
        if ((i >= this._sampleCount) || (i >= this._samples.length)) {
            return 0;
        }
        let i0 = this._wrapPosition(this._pos - 1.0);
        return this._samples[this._wrapPosition(i0 - i)];
    }
    isSaturated() {
        return this._sampleCount >= this._samples.length;
    }
    reset() {
        this.average = 0;
        this.variance = 0;
        this._sampleCount = 0;
        this._pos = 0;
        this._m2 = 0;
    }
    _wrapPosition(i) {
        let max = this._samples.length;
        return ((i % max) + max) % max;
    }
}
function allocateAndCopyTypedBuffer(type, sizeOrDstBuffer, sizeInBytes = false, copyBuffer) {
    switch (type) {
        case Constants.TEXTURETYPE_BYTE: {
            const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Int8Array(sizeOrDstBuffer) : new Int8Array(sizeOrDstBuffer);
            if (copyBuffer) {
                buffer.set(new Int8Array(copyBuffer));
            }
            return buffer;
        }
        case Constants.TEXTURETYPE_UNSIGNED_BYTE: {
            const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Uint8Array(sizeOrDstBuffer) : new Uint8Array(sizeOrDstBuffer);
            if (copyBuffer) {
                buffer.set(new Uint8Array(copyBuffer));
            }
            return buffer;
        }
        case Constants.TEXTURETYPE_SHORT: {
            const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Int16Array(sizeOrDstBuffer) : new Int16Array(sizeInBytes ? sizeOrDstBuffer / 2 : sizeOrDstBuffer);
            if (copyBuffer) {
                buffer.set(new Int16Array(copyBuffer));
            }
            return buffer;
        }
        case Constants.TEXTURETYPE_UNSIGNED_SHORT:
        case Constants.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4:
        case Constants.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1:
        case Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5:
        case Constants.TEXTURETYPE_HALF_FLOAT: {
            const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Uint16Array(sizeOrDstBuffer) : new Uint16Array(sizeInBytes ? sizeOrDstBuffer / 2 : sizeOrDstBuffer);
            if (copyBuffer) {
                buffer.set(new Uint16Array(copyBuffer));
            }
            return buffer;
        }
        case Constants.TEXTURETYPE_INT: {
            const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Int32Array(sizeOrDstBuffer) : new Int32Array(sizeInBytes ? sizeOrDstBuffer / 4 : sizeOrDstBuffer);
            if (copyBuffer) {
                buffer.set(new Int32Array(copyBuffer));
            }
            return buffer;
        }
        case Constants.TEXTURETYPE_UNSIGNED_INTEGER:
        case Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV:
        case Constants.TEXTURETYPE_UNSIGNED_INT_24_8:
        case Constants.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV:
        case Constants.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV:
        case Constants.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV: {
            const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Uint32Array(sizeOrDstBuffer) : new Uint32Array(sizeInBytes ? sizeOrDstBuffer / 4 : sizeOrDstBuffer);
            if (copyBuffer) {
                buffer.set(new Uint32Array(copyBuffer));
            }
            return buffer;
        }
        case Constants.TEXTURETYPE_FLOAT: {
            const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Float32Array(sizeOrDstBuffer) : new Float32Array(sizeInBytes ? sizeOrDstBuffer / 4 : sizeOrDstBuffer);
            if (copyBuffer) {
                buffer.set(new Float32Array(copyBuffer));
            }
            return buffer;
        }
    }
    const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Uint8Array(sizeOrDstBuffer) : new Uint8Array(sizeOrDstBuffer);
    if (copyBuffer) {
        buffer.set(new Uint8Array(copyBuffer));
    }
    return buffer;
}
ThinEngine.prototype._readTexturePixelsSync = function (texture, width, height, faceIndex = -1, level = 0, buffer = null, flushRenderer = true, noDataConversion = false) {
    var _a, _b;
    let gl = this._gl;
    if (!gl) {
        throw new Error("Engine does not have gl rendering context.");
    }
    if (!this._dummyFramebuffer) {
        let dummy = gl.createFramebuffer();
        if (!dummy) {
            throw new Error("Unable to create dummy framebuffer");
        }
        this._dummyFramebuffer = dummy;
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._dummyFramebuffer);
    if (faceIndex > -1) {
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, (_a = texture._hardwareTexture) === null || _a === void 0 ? void 0 : _a.underlyingResource, level);
    }
    else {
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, (_b = texture._hardwareTexture) === null || _b === void 0 ? void 0 : _b.underlyingResource, level);
    }
    let readType = (texture.type !== undefined) ? this._getWebGLTextureType(texture.type) : gl.UNSIGNED_BYTE;
    if (!noDataConversion) {
        switch (readType) {
            case gl.UNSIGNED_BYTE:
                if (!buffer) {
                    buffer = new Uint8Array(4 * width * height);
                }
                readType = gl.UNSIGNED_BYTE;
                break;
            default:
                if (!buffer) {
                    buffer = new Float32Array(4 * width * height);
                }
                readType = gl.FLOAT;
                break;
        }
    }
    else if (!buffer) {
        buffer = allocateAndCopyTypedBuffer(texture.type, 4 * width * height);
    }
    if (flushRenderer) {
        this.flushFramebuffer();
    }
    gl.readPixels(0, 0, width, height, gl.RGBA, readType, buffer);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._currentFramebuffer);
    return buffer;
};
ThinEngine.prototype._readTexturePixels = function (texture, width, height, faceIndex = -1, level = 0, buffer = null, flushRenderer = true, noDataConversion = false) {
    return Promise.resolve(this._readTexturePixelsSync(texture, width, height, faceIndex, level, buffer, flushRenderer, noDataConversion));
};
class Engine extends ThinEngine {
    constructor(canvasOrContext, antialias, options, adaptToDeviceRatio = false) {
        super(canvasOrContext, antialias, options, adaptToDeviceRatio);
        this.enableOfflineSupport = false;
        this.disableManifestCheck = false;
        this.scenes = new Array();
        this._virtualScenes = new Array();
        this.onNewSceneAddedObservable = new Observable();
        this.postProcesses = new Array();
        this.isPointerLock = false;
        this.onResizeObservable = new Observable();
        this.onCanvasBlurObservable = new Observable();
        this.onCanvasFocusObservable = new Observable();
        this.onCanvasPointerOutObservable = new Observable();
        this.onBeginFrameObservable = new Observable();
        this.customAnimationFrameRequester = null;
        this.onEndFrameObservable = new Observable();
        this.onBeforeShaderCompilationObservable = new Observable();
        this.onAfterShaderCompilationObservable = new Observable();
        this._deterministicLockstep = false;
        this._lockstepMaxSteps = 4;
        this._timeStep = 1 / 60;
        this._fps = 60;
        this._deltaTime = 0;
        this._drawCalls = new PerfCounter();
        this.canvasTabIndex = 1;
        this.disablePerformanceMonitorInBackground = false;
        this._performanceMonitor = new PerformanceMonitor();
        this._compatibilityMode = true;
        this.currentRenderPassId = Constants.RENDERPASS_MAIN;
        this._renderPassNames = ["main"];
        Engine.Instances.push(this);
        if (!canvasOrContext) {
            return;
        }
        this._features.supportRenderPasses = true;
        options = this._creationOptions;
        if (canvasOrContext.getContext) {
            let canvas = canvasOrContext;
            this._sharedInit(canvas, !!options.doNotHandleTouchAction, options.audioEngine);
            if (IsWindowObjectExist()) {
                const anyDoc = document;
                this._onFullscreenChange = () => {
                    if (anyDoc.fullscreen !== undefined) {
                        this.isFullscreen = anyDoc.fullscreen;
                    }
                    else if (anyDoc.mozFullScreen !== undefined) {
                        this.isFullscreen = anyDoc.mozFullScreen;
                    }
                    else if (anyDoc.webkitIsFullScreen !== undefined) {
                        this.isFullscreen = anyDoc.webkitIsFullScreen;
                    }
                    else if (anyDoc.msIsFullScreen !== undefined) {
                        this.isFullscreen = anyDoc.msIsFullScreen;
                    }
                    if (this.isFullscreen && this._pointerLockRequested && canvas) {
                        Engine._RequestPointerlock(canvas);
                    }
                };
                document.addEventListener("fullscreenchange", this._onFullscreenChange, false);
                document.addEventListener("mozfullscreenchange", this._onFullscreenChange, false);
                document.addEventListener("webkitfullscreenchange", this._onFullscreenChange, false);
                document.addEventListener("msfullscreenchange", this._onFullscreenChange, false);
                this._onPointerLockChange = () => {
                    this.isPointerLock = (anyDoc.mozPointerLockElement === canvas ||
                        anyDoc.webkitPointerLockElement === canvas ||
                        anyDoc.msPointerLockElement === canvas ||
                        anyDoc.pointerLockElement === canvas);
                };
                document.addEventListener("pointerlockchange", this._onPointerLockChange, false);
                document.addEventListener("mspointerlockchange", this._onPointerLockChange, false);
                document.addEventListener("mozpointerlockchange", this._onPointerLockChange, false);
                document.addEventListener("webkitpointerlockchange", this._onPointerLockChange, false);
                if (!Engine.audioEngine && options.audioEngine && Engine.AudioEngineFactory) {
                    Engine.audioEngine = Engine.AudioEngineFactory(this.getRenderingCanvas(), this.getAudioContext(), this.getAudioDestination());
                }
            }
            this._connectVREvents();
            this.enableOfflineSupport = Engine.OfflineProviderFactory !== undefined;
            this._deterministicLockstep = !!options.deterministicLockstep;
            this._lockstepMaxSteps = options.lockstepMaxSteps || 0;
            this._timeStep = options.timeStep || 1 / 60;
        }
        this._prepareVRComponent();
        if (options.autoEnableWebVR) {
            this.initWebVR();
        }
    }
    static get NpmPackage() {
        return ThinEngine.NpmPackage;
    }
    static get Version() {
        return ThinEngine.Version;
    }
    static get Instances() {
        return EngineStore.Instances;
    }
    static get LastCreatedEngine() {
        return EngineStore.LastCreatedEngine;
    }
    static get LastCreatedScene() {
        return EngineStore.LastCreatedScene;
    }
    createImageBitmap(image, options) {
        return createImageBitmap(image, options);
    }
    resizeImageBitmap(image, bufferWidth, bufferHeight) {
        var canvas = this.createCanvas(bufferWidth, bufferHeight);
        var context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Unable to get 2d context for resizeImageBitmap");
        }
        context.drawImage(image, 0, 0);
        var buffer = context.getImageData(0, 0, bufferWidth, bufferHeight).data;
        return buffer;
    }
    static MarkAllMaterialsAsDirty(flag, predicate) {
        for (var engineIndex = 0; engineIndex < Engine.Instances.length; engineIndex++) {
            var engine = Engine.Instances[engineIndex];
            for (var sceneIndex = 0; sceneIndex < engine.scenes.length; sceneIndex++) {
                engine.scenes[sceneIndex].markAllMaterialsAsDirty(flag, predicate);
            }
        }
    }
    static DefaultLoadingScreenFactory(canvas) {
        throw _WarnImport("LoadingScreen");
    }
    get _supportsHardwareTextureRescaling() {
        return !!Engine._RescalePostProcessFactory;
    }
    get performanceMonitor() {
        return this._performanceMonitor;
    }
    get compatibilityMode() {
        return this._compatibilityMode;
    }
    set compatibilityMode(mode) {
        this._compatibilityMode = true;
    }
    getInputElement() {
        return this._renderingCanvas;
    }
    _sharedInit(canvas, doNotHandleTouchAction, audioEngine) {
        super._sharedInit(canvas, doNotHandleTouchAction, audioEngine);
        this._onCanvasFocus = () => {
            this.onCanvasFocusObservable.notifyObservers(this);
        };
        this._onCanvasBlur = () => {
            this.onCanvasBlurObservable.notifyObservers(this);
        };
        canvas.addEventListener("focus", this._onCanvasFocus);
        canvas.addEventListener("blur", this._onCanvasBlur);
        this._onBlur = () => {
            if (this.disablePerformanceMonitorInBackground) {
                this._performanceMonitor.disable();
            }
            this._windowIsBackground = true;
        };
        this._onFocus = () => {
            if (this.disablePerformanceMonitorInBackground) {
                this._performanceMonitor.enable();
            }
            this._windowIsBackground = false;
        };
        this._onCanvasPointerOut = (ev) => {
            if (document.elementFromPoint(ev.clientX, ev.clientY) !== canvas) {
                this.onCanvasPointerOutObservable.notifyObservers(ev);
            }
        };
        if (IsWindowObjectExist()) {
            const hostWindow = this.getHostWindow();
            if (hostWindow) {
                hostWindow.addEventListener("blur", this._onBlur);
                hostWindow.addEventListener("focus", this._onFocus);
            }
        }
        canvas.addEventListener("pointerout", this._onCanvasPointerOut);
        if (!doNotHandleTouchAction) {
            this._disableTouchAction();
        }
        if (!Engine.audioEngine && audioEngine && Engine.AudioEngineFactory) {
            Engine.audioEngine = Engine.AudioEngineFactory(this.getRenderingCanvas(), this.getAudioContext(), this.getAudioDestination());
        }
    }
    getAspectRatio(viewportOwner, useScreen = false) {
        var viewport = viewportOwner.viewport;
        return (this.getRenderWidth(useScreen) * viewport.width) / (this.getRenderHeight(useScreen) * viewport.height);
    }
    getScreenAspectRatio() {
        return (this.getRenderWidth(true)) / (this.getRenderHeight(true));
    }
    getRenderingCanvasClientRect() {
        if (!this._renderingCanvas) {
            return null;
        }
        return this._renderingCanvas.getBoundingClientRect();
    }
    getInputElementClientRect() {
        if (!this._renderingCanvas) {
            return null;
        }
        return this.getInputElement().getBoundingClientRect();
    }
    isDeterministicLockStep() {
        return this._deterministicLockstep;
    }
    getLockstepMaxSteps() {
        return this._lockstepMaxSteps;
    }
    getTimeStep() {
        return this._timeStep * 1000;
    }
    generateMipMapsForCubemap(texture, unbind = true) {
        if (texture.generateMipMaps) {
            var gl = this._gl;
            this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, texture, true);
            gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
            if (unbind) {
                this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, null);
            }
        }
    }
    getDepthBuffer() {
        return this._depthCullingState.depthTest;
    }
    setDepthBuffer(enable) {
        this._depthCullingState.depthTest = enable;
    }
    getDepthWrite() {
        return this._depthCullingState.depthMask;
    }
    setDepthWrite(enable) {
        this._depthCullingState.depthMask = enable;
    }
    getStencilBuffer() {
        return this._stencilState.stencilTest;
    }
    setStencilBuffer(enable) {
        this._stencilState.stencilTest = enable;
    }
    getStencilMask() {
        return this._stencilState.stencilMask;
    }
    setStencilMask(mask) {
        this._stencilState.stencilMask = mask;
    }
    getStencilFunction() {
        return this._stencilState.stencilFunc;
    }
    getStencilFunctionReference() {
        return this._stencilState.stencilFuncRef;
    }
    getStencilFunctionMask() {
        return this._stencilState.stencilFuncMask;
    }
    setStencilFunction(stencilFunc) {
        this._stencilState.stencilFunc = stencilFunc;
    }
    setStencilFunctionReference(reference) {
        this._stencilState.stencilFuncRef = reference;
    }
    setStencilFunctionMask(mask) {
        this._stencilState.stencilFuncMask = mask;
    }
    getStencilOperationFail() {
        return this._stencilState.stencilOpStencilFail;
    }
    getStencilOperationDepthFail() {
        return this._stencilState.stencilOpDepthFail;
    }
    getStencilOperationPass() {
        return this._stencilState.stencilOpStencilDepthPass;
    }
    setStencilOperationFail(operation) {
        this._stencilState.stencilOpStencilFail = operation;
    }
    setStencilOperationDepthFail(operation) {
        this._stencilState.stencilOpDepthFail = operation;
    }
    setStencilOperationPass(operation) {
        this._stencilState.stencilOpStencilDepthPass = operation;
    }
    setDitheringState(value) {
        if (value) {
            this._gl.enable(this._gl.DITHER);
        }
        else {
            this._gl.disable(this._gl.DITHER);
        }
    }
    setRasterizerState(value) {
        if (value) {
            this._gl.disable(this._gl.RASTERIZER_DISCARD);
        }
        else {
            this._gl.enable(this._gl.RASTERIZER_DISCARD);
        }
    }
    getDepthFunction() {
        return this._depthCullingState.depthFunc;
    }
    setDepthFunction(depthFunc) {
        this._depthCullingState.depthFunc = depthFunc;
    }
    setDepthFunctionToGreater() {
        this.setDepthFunction(Constants.GREATER);
    }
    setDepthFunctionToGreaterOrEqual() {
        this.setDepthFunction(Constants.GEQUAL);
    }
    setDepthFunctionToLess() {
        this.setDepthFunction(Constants.LESS);
    }
    setDepthFunctionToLessOrEqual() {
        this.setDepthFunction(Constants.LEQUAL);
    }
    cacheStencilState() {
        this._cachedStencilBuffer = this.getStencilBuffer();
        this._cachedStencilFunction = this.getStencilFunction();
        this._cachedStencilMask = this.getStencilMask();
        this._cachedStencilOperationPass = this.getStencilOperationPass();
        this._cachedStencilOperationFail = this.getStencilOperationFail();
        this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail();
        this._cachedStencilReference = this.getStencilFunctionReference();
    }
    restoreStencilState() {
        this.setStencilFunction(this._cachedStencilFunction);
        this.setStencilMask(this._cachedStencilMask);
        this.setStencilBuffer(this._cachedStencilBuffer);
        this.setStencilOperationPass(this._cachedStencilOperationPass);
        this.setStencilOperationFail(this._cachedStencilOperationFail);
        this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail);
        this.setStencilFunctionReference(this._cachedStencilReference);
    }
    setDirectViewport(x, y, width, height) {
        let currentViewport = this._cachedViewport;
        this._cachedViewport = null;
        this._viewport(x, y, width, height);
        return currentViewport;
    }
    scissorClear(x, y, width, height, clearColor) {
        this.enableScissor(x, y, width, height);
        this.clear(clearColor, true, true, true);
        this.disableScissor();
    }
    enableScissor(x, y, width, height) {
        let gl = this._gl;
        gl.enable(gl.SCISSOR_TEST);
        gl.scissor(x, y, width, height);
    }
    disableScissor() {
        let gl = this._gl;
        gl.disable(gl.SCISSOR_TEST);
    }
    _reportDrawCall(numDrawCalls = 1) {
        this._drawCalls.addCount(numDrawCalls, false);
    }
    initWebVR() {
        throw _WarnImport("WebVRCamera");
    }
    _prepareVRComponent() {
    }
    _connectVREvents(canvas, document) {
    }
    _submitVRFrame() {
    }
    disableVR() {
    }
    isVRPresenting() {
        return false;
    }
    _requestVRFrame() {
    }
    _loadFileAsync(url, offlineProvider, useArrayBuffer) {
        return new Promise((resolve, reject) => {
            this._loadFile(url, (data) => {
                resolve(data);
            }, undefined, offlineProvider, useArrayBuffer, (request, exception) => {
                reject(exception);
            });
        });
    }
    getVertexShaderSource(program) {
        var shaders = this._gl.getAttachedShaders(program);
        if (!shaders) {
            return null;
        }
        return this._gl.getShaderSource(shaders[0]);
    }
    getFragmentShaderSource(program) {
        var shaders = this._gl.getAttachedShaders(program);
        if (!shaders) {
            return null;
        }
        return this._gl.getShaderSource(shaders[1]);
    }
    setDepthStencilTexture(channel, uniform, texture, name) {
        if (channel === undefined) {
            return;
        }
        if (uniform) {
            this._boundUniforms[channel] = uniform;
        }
        if (!texture || !texture.depthStencilTexture) {
            this._setTexture(channel, null, undefined, undefined, name);
        }
        else {
            this._setTexture(channel, texture, false, true, name);
        }
    }
    setTextureFromPostProcess(channel, postProcess, name) {
        var _a;
        let postProcessInput = null;
        if (postProcess) {
            if (postProcess._textures.data[postProcess._currentRenderTextureInd]) {
                postProcessInput = postProcess._textures.data[postProcess._currentRenderTextureInd];
            }
            else if (postProcess._forcedOutputTexture) {
                postProcessInput = postProcess._forcedOutputTexture;
            }
        }
        this._bindTexture(channel, (_a = postProcessInput === null || postProcessInput === void 0 ? void 0 : postProcessInput.texture) !== null && _a !== void 0 ? _a : null, name);
    }
    setTextureFromPostProcessOutput(channel, postProcess, name) {
        var _a, _b;
        this._bindTexture(channel, (_b = (_a = postProcess === null || postProcess === void 0 ? void 0 : postProcess._outputTexture) === null || _a === void 0 ? void 0 : _a.texture) !== null && _b !== void 0 ? _b : null, name);
    }
    _rebuildBuffers() {
        for (var scene of this.scenes) {
            scene.resetCachedMaterial();
            scene._rebuildGeometries();
            scene._rebuildTextures();
        }
        for (var scene of this._virtualScenes) {
            scene.resetCachedMaterial();
            scene._rebuildGeometries();
            scene._rebuildTextures();
        }
        super._rebuildBuffers();
    }
    _renderFrame() {
        for (var index = 0; index < this._activeRenderLoops.length; index++) {
            var renderFunction = this._activeRenderLoops[index];
            renderFunction();
        }
    }
    _renderLoop() {
        if (!this._contextWasLost) {
            var shouldRender = true;
            if (!this.renderEvenInBackground && this._windowIsBackground) {
                shouldRender = false;
            }
            if (shouldRender) {
                this.beginFrame();
                if (!this._renderViews()) {
                    this._renderFrame();
                }
                this.endFrame();
            }
        }
        if (this._activeRenderLoops.length > 0) {
            if (this.customAnimationFrameRequester) {
                this.customAnimationFrameRequester.requestID = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester);
                this._frameHandler = this.customAnimationFrameRequester.requestID;
            }
            else if (this.isVRPresenting()) {
                this._requestVRFrame();
            }
            else {
                this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow());
            }
        }
        else {
            this._renderingQueueLaunched = false;
        }
    }
    _renderViews() {
        return false;
    }
    switchFullscreen(requestPointerLock) {
        if (this.isFullscreen) {
            this.exitFullscreen();
        }
        else {
            this.enterFullscreen(requestPointerLock);
        }
    }
    enterFullscreen(requestPointerLock) {
        if (!this.isFullscreen) {
            this._pointerLockRequested = requestPointerLock;
            if (this._renderingCanvas) {
                Engine._RequestFullscreen(this._renderingCanvas);
            }
        }
    }
    exitFullscreen() {
        if (this.isFullscreen) {
            Engine._ExitFullscreen();
        }
    }
    enterPointerlock() {
        if (this._renderingCanvas) {
            Engine._RequestPointerlock(this._renderingCanvas);
        }
    }
    exitPointerlock() {
        Engine._ExitPointerlock();
    }
    beginFrame() {
        this._measureFps();
        this.onBeginFrameObservable.notifyObservers(this);
        super.beginFrame();
    }
    endFrame() {
        super.endFrame();
        this._submitVRFrame();
        this.onEndFrameObservable.notifyObservers(this);
    }
    resize(forceSetSize = false) {
        if (this.isVRPresenting()) {
            return;
        }
        super.resize(forceSetSize);
    }
    setSize(width, height, forceSetSize = false) {
        if (!this._renderingCanvas) {
            return false;
        }
        if (!super.setSize(width, height, forceSetSize)) {
            return false;
        }
        if (this.scenes) {
            for (var index = 0; index < this.scenes.length; index++) {
                var scene = this.scenes[index];
                for (var camIndex = 0; camIndex < scene.cameras.length; camIndex++) {
                    var cam = scene.cameras[camIndex];
                    cam._currentRenderId = 0;
                }
            }
            if (this.onResizeObservable.hasObservers()) {
                this.onResizeObservable.notifyObservers(this);
            }
        }
        return true;
    }
    _deletePipelineContext(pipelineContext) {
        let webGLPipelineContext = pipelineContext;
        if (webGLPipelineContext && webGLPipelineContext.program) {
            if (webGLPipelineContext.transformFeedback) {
                this.deleteTransformFeedback(webGLPipelineContext.transformFeedback);
                webGLPipelineContext.transformFeedback = null;
            }
        }
        super._deletePipelineContext(pipelineContext);
    }
    createShaderProgram(pipelineContext, vertexCode, fragmentCode, defines, context, transformFeedbackVaryings = null) {
        context = context || this._gl;
        this.onBeforeShaderCompilationObservable.notifyObservers(this);
        let program = super.createShaderProgram(pipelineContext, vertexCode, fragmentCode, defines, context, transformFeedbackVaryings);
        this.onAfterShaderCompilationObservable.notifyObservers(this);
        return program;
    }
    _createShaderProgram(pipelineContext, vertexShader, fragmentShader, context, transformFeedbackVaryings = null) {
        var shaderProgram = context.createProgram();
        pipelineContext.program = shaderProgram;
        if (!shaderProgram) {
            throw new Error("Unable to create program");
        }
        context.attachShader(shaderProgram, vertexShader);
        context.attachShader(shaderProgram, fragmentShader);
        if (this.webGLVersion > 1 && transformFeedbackVaryings) {
            let transformFeedback = this.createTransformFeedback();
            this.bindTransformFeedback(transformFeedback);
            this.setTranformFeedbackVaryings(shaderProgram, transformFeedbackVaryings);
            pipelineContext.transformFeedback = transformFeedback;
        }
        context.linkProgram(shaderProgram);
        if (this.webGLVersion > 1 && transformFeedbackVaryings) {
            this.bindTransformFeedback(null);
        }
        pipelineContext.context = context;
        pipelineContext.vertexShader = vertexShader;
        pipelineContext.fragmentShader = fragmentShader;
        if (!pipelineContext.isParallelCompiled) {
            this._finalizePipelineContext(pipelineContext);
        }
        return shaderProgram;
    }
    _releaseTexture(texture) {
        super._releaseTexture(texture);
    }
    _releaseRenderTargetWrapper(rtWrapper) {
        super._releaseRenderTargetWrapper(rtWrapper);
        this.scenes.forEach((scene) => {
            scene.postProcesses.forEach((postProcess) => {
                if (postProcess._outputTexture === rtWrapper) {
                    postProcess._outputTexture = null;
                }
            });
            scene.cameras.forEach((camera) => {
                camera._postProcesses.forEach((postProcess) => {
                    if (postProcess) {
                        if (postProcess._outputTexture === rtWrapper) {
                            postProcess._outputTexture = null;
                        }
                    }
                });
            });
        });
    }
    getRenderPassNames() {
        return this._renderPassNames;
    }
    getCurrentRenderPassName() {
        return this._renderPassNames[this.currentRenderPassId];
    }
    createRenderPassId(name) {
        const id = ++Engine._RenderPassIdCounter;
        this._renderPassNames[id] = name !== null && name !== void 0 ? name : "NONAME";
        return id;
    }
    releaseRenderPassId(id) {
        this._renderPassNames[id] = undefined;
        for (let s = 0; s < this.scenes.length; ++s) {
            const scene = this.scenes[s];
            for (let m = 0; m < scene.meshes.length; ++m) {
                const mesh = scene.meshes[m];
                if (mesh.subMeshes) {
                    for (let b = 0; b < mesh.subMeshes.length; ++b) {
                        const subMesh = mesh.subMeshes[b];
                        subMesh._removeDrawWrapper(id);
                    }
                }
            }
        }
    }
    _rescaleTexture(source, destination, scene, internalFormat, onComplete) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        let rtt = this.createRenderTargetTexture({
            width: destination.width,
            height: destination.height,
        }, {
            generateMipMaps: false,
            type: Constants.TEXTURETYPE_UNSIGNED_INT,
            samplingMode: Constants.TEXTURE_BILINEAR_SAMPLINGMODE,
            generateDepthBuffer: false,
            generateStencilBuffer: false
        });
        if (!this._rescalePostProcess && Engine._RescalePostProcessFactory) {
            this._rescalePostProcess = Engine._RescalePostProcessFactory(this);
        }
        this._rescalePostProcess.externalTextureSamplerBinding = true;
        this._rescalePostProcess.getEffect().executeWhenCompiled(() => {
            this._rescalePostProcess.onApply = function (effect) {
                effect._bindTexture("textureSampler", source);
            };
            let hostingScene = scene;
            if (!hostingScene) {
                hostingScene = this.scenes[this.scenes.length - 1];
            }
            hostingScene.postProcessManager.directRender([this._rescalePostProcess], rtt, true);
            this._bindTextureDirectly(this._gl.TEXTURE_2D, destination, true);
            this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, internalFormat, 0, 0, destination.width, destination.height, 0);
            this.unBindFramebuffer(rtt);
            rtt.dispose();
            if (onComplete) {
                onComplete();
            }
        });
    }
    getFps() {
        return this._fps;
    }
    getDeltaTime() {
        return this._deltaTime;
    }
    _measureFps() {
        this._performanceMonitor.sampleFrame();
        this._fps = this._performanceMonitor.averageFPS;
        this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0;
    }
    _uploadImageToTexture(texture, image, faceIndex = 0, lod = 0) {
        var gl = this._gl;
        var textureType = this._getWebGLTextureType(texture.type);
        var format = this._getInternalFormat(texture.format);
        var internalFormat = this._getRGBABufferInternalSizedFormat(texture.type, format);
        var bindTarget = texture.isCube ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D;
        this._bindTextureDirectly(bindTarget, texture, true);
        this._unpackFlipY(texture.invertY);
        var target = gl.TEXTURE_2D;
        if (texture.isCube) {
            target = gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex;
        }
        gl.texImage2D(target, lod, internalFormat, format, textureType, image);
        this._bindTextureDirectly(bindTarget, null, true);
    }
    updateTextureComparisonFunction(texture, comparisonFunction) {
        if (this.webGLVersion === 1) {
            Logger.Error("WebGL 1 does not support texture comparison.");
            return;
        }
        var gl = this._gl;
        if (texture.isCube) {
            this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, texture, true);
            if (comparisonFunction === 0) {
                gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_FUNC, Constants.LEQUAL);
                gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_MODE, gl.NONE);
            }
            else {
                gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_FUNC, comparisonFunction);
                gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
            }
            this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
        }
        else {
            this._bindTextureDirectly(this._gl.TEXTURE_2D, texture, true);
            if (comparisonFunction === 0) {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, Constants.LEQUAL);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.NONE);
            }
            else {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, comparisonFunction);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
            }
            this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
        }
        texture._comparisonFunction = comparisonFunction;
    }
    createInstancesBuffer(capacity) {
        var buffer = this._gl.createBuffer();
        if (!buffer) {
            throw new Error("Unable to create instance buffer");
        }
        var result = new WebGLDataBuffer(buffer);
        result.capacity = capacity;
        this.bindArrayBuffer(result);
        this._gl.bufferData(this._gl.ARRAY_BUFFER, capacity, this._gl.DYNAMIC_DRAW);
        result.references = 1;
        return result;
    }
    deleteInstancesBuffer(buffer) {
        this._gl.deleteBuffer(buffer);
    }
    _clientWaitAsync(sync, flags = 0, interval_ms = 10) {
        let gl = this._gl;
        return new Promise((resolve, reject) => {
            let check = () => {
                const res = gl.clientWaitSync(sync, flags, 0);
                if (res == gl.WAIT_FAILED) {
                    reject();
                    return;
                }
                if (res == gl.TIMEOUT_EXPIRED) {
                    setTimeout(check, interval_ms);
                    return;
                }
                resolve();
            };
            check();
        });
    }
    _readPixelsAsync(x, y, w, h, format, type, outputBuffer) {
        if (this._webGLVersion < 2) {
            throw new Error("_readPixelsAsync only work on WebGL2+");
        }
        let gl = this._gl;
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, buf);
        gl.bufferData(gl.PIXEL_PACK_BUFFER, outputBuffer.byteLength, gl.STREAM_READ);
        gl.readPixels(x, y, w, h, format, type, 0);
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
        const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
        if (!sync) {
            return null;
        }
        gl.flush();
        return this._clientWaitAsync(sync, 0, 10).then(() => {
            gl.deleteSync(sync);
            gl.bindBuffer(gl.PIXEL_PACK_BUFFER, buf);
            gl.getBufferSubData(gl.PIXEL_PACK_BUFFER, 0, outputBuffer);
            gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
            gl.deleteBuffer(buf);
            return outputBuffer;
        });
    }
    dispose() {
        this.hideLoadingUI();
        this.onNewSceneAddedObservable.clear();
        while (this.postProcesses.length) {
            this.postProcesses[0].dispose();
        }
        if (this._rescalePostProcess) {
            this._rescalePostProcess.dispose();
        }
        while (this.scenes.length) {
            this.scenes[0].dispose();
        }
        while (this._virtualScenes.length) {
            this._virtualScenes[0].dispose();
        }
        if (Engine.Instances.length === 1 && Engine.audioEngine) {
            Engine.audioEngine.dispose();
            Engine.audioEngine = null;
        }
        this.disableVR();
        if (this.deviceInputSystem) {
            this.deviceInputSystem.dispose();
        }
        if (IsWindowObjectExist()) {
            window.removeEventListener("blur", this._onBlur);
            window.removeEventListener("focus", this._onFocus);
            if (this._renderingCanvas) {
                this._renderingCanvas.removeEventListener("focus", this._onCanvasFocus);
                this._renderingCanvas.removeEventListener("blur", this._onCanvasBlur);
                this._renderingCanvas.removeEventListener("pointerout", this._onCanvasPointerOut);
            }
            if (IsDocumentAvailable()) {
                document.removeEventListener("fullscreenchange", this._onFullscreenChange);
                document.removeEventListener("mozfullscreenchange", this._onFullscreenChange);
                document.removeEventListener("webkitfullscreenchange", this._onFullscreenChange);
                document.removeEventListener("msfullscreenchange", this._onFullscreenChange);
                document.removeEventListener("pointerlockchange", this._onPointerLockChange);
                document.removeEventListener("mspointerlockchange", this._onPointerLockChange);
                document.removeEventListener("mozpointerlockchange", this._onPointerLockChange);
                document.removeEventListener("webkitpointerlockchange", this._onPointerLockChange);
            }
        }
        super.dispose();
        var index = Engine.Instances.indexOf(this);
        if (index >= 0) {
            Engine.Instances.splice(index, 1);
        }
        this.onResizeObservable.clear();
        this.onCanvasBlurObservable.clear();
        this.onCanvasFocusObservable.clear();
        this.onCanvasPointerOutObservable.clear();
        this.onBeginFrameObservable.clear();
        this.onEndFrameObservable.clear();
    }
    _disableTouchAction() {
        if (!this._renderingCanvas || !this._renderingCanvas.setAttribute) {
            return;
        }
        this._renderingCanvas.setAttribute("touch-action", "none");
        this._renderingCanvas.style.touchAction = "none";
        this._renderingCanvas.style.msTouchAction = "none";
    }
    displayLoadingUI() {
        if (!IsWindowObjectExist()) {
            return;
        }
        const loadingScreen = this.loadingScreen;
        if (loadingScreen) {
            loadingScreen.displayLoadingUI();
        }
    }
    hideLoadingUI() {
        if (!IsWindowObjectExist()) {
            return;
        }
        const loadingScreen = this._loadingScreen;
        if (loadingScreen) {
            loadingScreen.hideLoadingUI();
        }
    }
    get loadingScreen() {
        if (!this._loadingScreen && this._renderingCanvas) {
            this._loadingScreen = Engine.DefaultLoadingScreenFactory(this._renderingCanvas);
        }
        return this._loadingScreen;
    }
    set loadingScreen(loadingScreen) {
        this._loadingScreen = loadingScreen;
    }
    set loadingUIText(text) {
        this.loadingScreen.loadingUIText = text;
    }
    set loadingUIBackgroundColor(color) {
        this.loadingScreen.loadingUIBackgroundColor = color;
    }
    createVideoElement(constraints) {
        return document.createElement("video");
    }
    static _RequestPointerlock(element) {
        element.requestPointerLock = element.requestPointerLock || element.msRequestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
        if (element.requestPointerLock) {
            element.requestPointerLock();
        }
    }
    static _ExitPointerlock() {
        let anyDoc = document;
        document.exitPointerLock = document.exitPointerLock || anyDoc.msExitPointerLock || anyDoc.mozExitPointerLock || anyDoc.webkitExitPointerLock;
        if (document.exitPointerLock) {
            document.exitPointerLock();
        }
    }
    static _RequestFullscreen(element) {
        var requestFunction = element.requestFullscreen || element.msRequestFullscreen || element.webkitRequestFullscreen || element.mozRequestFullScreen;
        if (!requestFunction) {
            return;
        }
        requestFunction.call(element);
    }
    static _ExitFullscreen() {
        let anyDoc = document;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (anyDoc.mozCancelFullScreen) {
            anyDoc.mozCancelFullScreen();
        }
        else if (anyDoc.webkitCancelFullScreen) {
            anyDoc.webkitCancelFullScreen();
        }
        else if (anyDoc.msCancelFullScreen) {
            anyDoc.msCancelFullScreen();
        }
    }
    getFontOffset(font) {
        var text = document.createElement("span");
        text.innerHTML = "Hg";
        text.setAttribute('style', `font: ${font} !important`);
        var block = document.createElement("div");
        block.style.display = "inline-block";
        block.style.width = "1px";
        block.style.height = "0px";
        block.style.verticalAlign = "bottom";
        var div = document.createElement("div");
        div.style.whiteSpace = "nowrap";
        div.appendChild(text);
        div.appendChild(block);
        document.body.appendChild(div);
        var fontAscent = 0;
        var fontHeight = 0;
        try {
            fontHeight = block.getBoundingClientRect().top - text.getBoundingClientRect().top;
            block.style.verticalAlign = "baseline";
            fontAscent = block.getBoundingClientRect().top - text.getBoundingClientRect().top;
        }
        finally {
            document.body.removeChild(div);
        }
        return { ascent: fontAscent, height: fontHeight, descent: fontHeight - fontAscent };
    }
}
Engine.ALPHA_DISABLE = Constants.ALPHA_DISABLE;
Engine.ALPHA_ADD = Constants.ALPHA_ADD;
Engine.ALPHA_COMBINE = Constants.ALPHA_COMBINE;
Engine.ALPHA_SUBTRACT = Constants.ALPHA_SUBTRACT;
Engine.ALPHA_MULTIPLY = Constants.ALPHA_MULTIPLY;
Engine.ALPHA_MAXIMIZED = Constants.ALPHA_MAXIMIZED;
Engine.ALPHA_ONEONE = Constants.ALPHA_ONEONE;
Engine.ALPHA_PREMULTIPLIED = Constants.ALPHA_PREMULTIPLIED;
Engine.ALPHA_PREMULTIPLIED_PORTERDUFF = Constants.ALPHA_PREMULTIPLIED_PORTERDUFF;
Engine.ALPHA_INTERPOLATE = Constants.ALPHA_INTERPOLATE;
Engine.ALPHA_SCREENMODE = Constants.ALPHA_SCREENMODE;
Engine.DELAYLOADSTATE_NONE = Constants.DELAYLOADSTATE_NONE;
Engine.DELAYLOADSTATE_LOADED = Constants.DELAYLOADSTATE_LOADED;
Engine.DELAYLOADSTATE_LOADING = Constants.DELAYLOADSTATE_LOADING;
Engine.DELAYLOADSTATE_NOTLOADED = Constants.DELAYLOADSTATE_NOTLOADED;
Engine.NEVER = Constants.NEVER;
Engine.ALWAYS = Constants.ALWAYS;
Engine.LESS = Constants.LESS;
Engine.EQUAL = Constants.EQUAL;
Engine.LEQUAL = Constants.LEQUAL;
Engine.GREATER = Constants.GREATER;
Engine.GEQUAL = Constants.GEQUAL;
Engine.NOTEQUAL = Constants.NOTEQUAL;
Engine.KEEP = Constants.KEEP;
Engine.REPLACE = Constants.REPLACE;
Engine.INCR = Constants.INCR;
Engine.DECR = Constants.DECR;
Engine.INVERT = Constants.INVERT;
Engine.INCR_WRAP = Constants.INCR_WRAP;
Engine.DECR_WRAP = Constants.DECR_WRAP;
Engine.TEXTURE_CLAMP_ADDRESSMODE = Constants.TEXTURE_CLAMP_ADDRESSMODE;
Engine.TEXTURE_WRAP_ADDRESSMODE = Constants.TEXTURE_WRAP_ADDRESSMODE;
Engine.TEXTURE_MIRROR_ADDRESSMODE = Constants.TEXTURE_MIRROR_ADDRESSMODE;
Engine.TEXTUREFORMAT_ALPHA = Constants.TEXTUREFORMAT_ALPHA;
Engine.TEXTUREFORMAT_LUMINANCE = Constants.TEXTUREFORMAT_LUMINANCE;
Engine.TEXTUREFORMAT_LUMINANCE_ALPHA = Constants.TEXTUREFORMAT_LUMINANCE_ALPHA;
Engine.TEXTUREFORMAT_RGB = Constants.TEXTUREFORMAT_RGB;
Engine.TEXTUREFORMAT_RGBA = Constants.TEXTUREFORMAT_RGBA;
Engine.TEXTUREFORMAT_RED = Constants.TEXTUREFORMAT_RED;
Engine.TEXTUREFORMAT_R = Constants.TEXTUREFORMAT_R;
Engine.TEXTUREFORMAT_RG = Constants.TEXTUREFORMAT_RG;
Engine.TEXTUREFORMAT_RED_INTEGER = Constants.TEXTUREFORMAT_RED_INTEGER;
Engine.TEXTUREFORMAT_R_INTEGER = Constants.TEXTUREFORMAT_R_INTEGER;
Engine.TEXTUREFORMAT_RG_INTEGER = Constants.TEXTUREFORMAT_RG_INTEGER;
Engine.TEXTUREFORMAT_RGB_INTEGER = Constants.TEXTUREFORMAT_RGB_INTEGER;
Engine.TEXTUREFORMAT_RGBA_INTEGER = Constants.TEXTUREFORMAT_RGBA_INTEGER;
Engine.TEXTURETYPE_UNSIGNED_BYTE = Constants.TEXTURETYPE_UNSIGNED_BYTE;
Engine.TEXTURETYPE_UNSIGNED_INT = Constants.TEXTURETYPE_UNSIGNED_INT;
Engine.TEXTURETYPE_FLOAT = Constants.TEXTURETYPE_FLOAT;
Engine.TEXTURETYPE_HALF_FLOAT = Constants.TEXTURETYPE_HALF_FLOAT;
Engine.TEXTURETYPE_BYTE = Constants.TEXTURETYPE_BYTE;
Engine.TEXTURETYPE_SHORT = Constants.TEXTURETYPE_SHORT;
Engine.TEXTURETYPE_UNSIGNED_SHORT = Constants.TEXTURETYPE_UNSIGNED_SHORT;
Engine.TEXTURETYPE_INT = Constants.TEXTURETYPE_INT;
Engine.TEXTURETYPE_UNSIGNED_INTEGER = Constants.TEXTURETYPE_UNSIGNED_INTEGER;
Engine.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = Constants.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4;
Engine.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = Constants.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1;
Engine.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5;
Engine.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV;
Engine.TEXTURETYPE_UNSIGNED_INT_24_8 = Constants.TEXTURETYPE_UNSIGNED_INT_24_8;
Engine.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = Constants.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV;
Engine.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = Constants.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV;
Engine.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = Constants.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV;
Engine.TEXTURE_NEAREST_SAMPLINGMODE = Constants.TEXTURE_NEAREST_SAMPLINGMODE;
Engine.TEXTURE_BILINEAR_SAMPLINGMODE = Constants.TEXTURE_BILINEAR_SAMPLINGMODE;
Engine.TEXTURE_TRILINEAR_SAMPLINGMODE = Constants.TEXTURE_TRILINEAR_SAMPLINGMODE;
Engine.TEXTURE_NEAREST_NEAREST_MIPLINEAR = Constants.TEXTURE_NEAREST_NEAREST_MIPLINEAR;
Engine.TEXTURE_LINEAR_LINEAR_MIPNEAREST = Constants.TEXTURE_LINEAR_LINEAR_MIPNEAREST;
Engine.TEXTURE_LINEAR_LINEAR_MIPLINEAR = Constants.TEXTURE_LINEAR_LINEAR_MIPLINEAR;
Engine.TEXTURE_NEAREST_NEAREST_MIPNEAREST = Constants.TEXTURE_NEAREST_NEAREST_MIPNEAREST;
Engine.TEXTURE_NEAREST_LINEAR_MIPNEAREST = Constants.TEXTURE_NEAREST_LINEAR_MIPNEAREST;
Engine.TEXTURE_NEAREST_LINEAR_MIPLINEAR = Constants.TEXTURE_NEAREST_LINEAR_MIPLINEAR;
Engine.TEXTURE_NEAREST_LINEAR = Constants.TEXTURE_NEAREST_LINEAR;
Engine.TEXTURE_NEAREST_NEAREST = Constants.TEXTURE_NEAREST_NEAREST;
Engine.TEXTURE_LINEAR_NEAREST_MIPNEAREST = Constants.TEXTURE_LINEAR_NEAREST_MIPNEAREST;
Engine.TEXTURE_LINEAR_NEAREST_MIPLINEAR = Constants.TEXTURE_LINEAR_NEAREST_MIPLINEAR;
Engine.TEXTURE_LINEAR_LINEAR = Constants.TEXTURE_LINEAR_LINEAR;
Engine.TEXTURE_LINEAR_NEAREST = Constants.TEXTURE_LINEAR_NEAREST;
Engine.TEXTURE_EXPLICIT_MODE = Constants.TEXTURE_EXPLICIT_MODE;
Engine.TEXTURE_SPHERICAL_MODE = Constants.TEXTURE_SPHERICAL_MODE;
Engine.TEXTURE_PLANAR_MODE = Constants.TEXTURE_PLANAR_MODE;
Engine.TEXTURE_CUBIC_MODE = Constants.TEXTURE_CUBIC_MODE;
Engine.TEXTURE_PROJECTION_MODE = Constants.TEXTURE_PROJECTION_MODE;
Engine.TEXTURE_SKYBOX_MODE = Constants.TEXTURE_SKYBOX_MODE;
Engine.TEXTURE_INVCUBIC_MODE = Constants.TEXTURE_INVCUBIC_MODE;
Engine.TEXTURE_EQUIRECTANGULAR_MODE = Constants.TEXTURE_EQUIRECTANGULAR_MODE;
Engine.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MODE;
Engine.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE;
Engine.SCALEMODE_FLOOR = Constants.SCALEMODE_FLOOR;
Engine.SCALEMODE_NEAREST = Constants.SCALEMODE_NEAREST;
Engine.SCALEMODE_CEILING = Constants.SCALEMODE_CEILING;
Engine._RescalePostProcessFactory = null;
Engine._RenderPassIdCounter = 0;
function FromHalfFloat(value) {
    const s = (value & 0x8000) >> 15;
    const e = (value & 0x7C00) >> 10;
    const f = value & 0x03FF;
    if (e === 0) {
        return (s ? -1 : 1) * Math.pow(2, -14) * (f / Math.pow(2, 10));
    }
    else if (e == 0x1F) {
        return f ? NaN : ((s ? -1 : 1) * Infinity);
    }
    return (s ? -1 : 1) * Math.pow(2, e - 15) * (1 + (f / Math.pow(2, 10)));
}
function ExtractBetweenMarkers(markerOpen, markerClose, block, startIndex) {
    let currPos = startIndex, openMarkers = 0, waitForChar = '';
    while (currPos < block.length) {
        let currChar = block.charAt(currPos);
        if (!waitForChar) {
            switch (currChar) {
                case markerOpen:
                    openMarkers++;
                    break;
                case markerClose:
                    openMarkers--;
                    break;
                case '"':
                case "'":
                case "`":
                    waitForChar = currChar;
                    break;
                case '/':
                    if (currPos + 1 < block.length) {
                        const nextChar = block.charAt(currPos + 1);
                        if (nextChar === '/') {
                            waitForChar = '\n';
                        }
                        else if (nextChar === '*') {
                            waitForChar = '*/';
                        }
                    }
                    break;
            }
        }
        else {
            if (currChar === waitForChar) {
                if (waitForChar === '"' || waitForChar === "'") {
                    block.charAt(currPos - 1) !== '\\' && (waitForChar = '');
                }
                else {
                    waitForChar = '';
                }
            }
            else if (waitForChar === '*/' && currChar === '*' && currPos + 1 < block.length) {
                block.charAt(currPos + 1) === '/' && (waitForChar = '');
                if (waitForChar === '') {
                    currPos++;
                }
            }
        }
        currPos++;
        if (openMarkers === 0) {
            break;
        }
    }
    return openMarkers === 0 ? currPos - 1 : -1;
}
function SkipWhitespaces(s, index) {
    while (index < s.length) {
        const c = s[index];
        if (c !== ' ' && c !== '\n' && c !== '\r' && c !== '\t' && c !== '\u000a' && c !== '\u00a0') {
            break;
        }
        index++;
    }
    return index;
}
function IsIdentifierChar(c) {
    const v = c.charCodeAt(0);
    return (v >= 48 && v <= 57) ||
        (v >= 65 && v <= 90) ||
        (v >= 97 && v <= 122) ||
        (v == 95);
}
function RemoveComments(block) {
    let currPos = 0, waitForChar = '', inComments = false, s = [];
    while (currPos < block.length) {
        let currChar = block.charAt(currPos);
        if (!waitForChar) {
            switch (currChar) {
                case '"':
                case "'":
                case "`":
                    waitForChar = currChar;
                    break;
                case '/':
                    if (currPos + 1 < block.length) {
                        const nextChar = block.charAt(currPos + 1);
                        if (nextChar === '/') {
                            waitForChar = '\n';
                            inComments = true;
                        }
                        else if (nextChar === '*') {
                            waitForChar = '*/';
                            inComments = true;
                        }
                    }
                    break;
            }
            if (!inComments) {
                s.push(currChar);
            }
        }
        else {
            if (currChar === waitForChar) {
                if (waitForChar === '"' || waitForChar === "'") {
                    block.charAt(currPos - 1) !== '\\' && (waitForChar = '');
                    s.push(currChar);
                }
                else {
                    waitForChar = '';
                    inComments = false;
                }
            }
            else if (waitForChar === '*/' && currChar === '*' && currPos + 1 < block.length) {
                block.charAt(currPos + 1) === '/' && (waitForChar = '');
                if (waitForChar === '') {
                    inComments = false;
                    currPos++;
                }
            }
            else {
                if (!inComments) {
                    s.push(currChar);
                }
            }
        }
        currPos++;
    }
    return s.join('');
}
function FindBackward(s, index, c) {
    while (index >= 0 && s.charAt(index) !== c) {
        index--;
    }
    return index;
}
function EscapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
class ShaderCodeInliner {
    constructor(sourceCode, numMaxIterations = 20) {
        this.debug = false;
        this._sourceCode = sourceCode;
        this._numMaxIterations = numMaxIterations;
        this._functionDescr = [];
        this.inlineToken = "#define inline";
    }
    get code() {
        return this._sourceCode;
    }
    processCode() {
        if (this.debug) {
            console.log(`Start inlining process (code size=${this._sourceCode.length})...`);
        }
        this._collectFunctions();
        this._processInlining(this._numMaxIterations);
        if (this.debug) {
            console.log("End of inlining process.");
        }
    }
    _collectFunctions() {
        let startIndex = 0;
        while (startIndex < this._sourceCode.length) {
            const inlineTokenIndex = this._sourceCode.indexOf(this.inlineToken, startIndex);
            if (inlineTokenIndex < 0) {
                break;
            }
            const funcParamsStartIndex = this._sourceCode.indexOf("(", inlineTokenIndex + this.inlineToken.length);
            if (funcParamsStartIndex < 0) {
                if (this.debug) {
                    console.warn(`Could not find the opening parenthesis after the token. startIndex=${startIndex}`);
                }
                startIndex = inlineTokenIndex + this.inlineToken.length;
                continue;
            }
            const funcNameMatch = ShaderCodeInliner._RegexpFindFunctionNameAndType.exec(this._sourceCode.substring(inlineTokenIndex + this.inlineToken.length, funcParamsStartIndex));
            if (!funcNameMatch) {
                if (this.debug) {
                    console.warn(`Could not extract the name/type of the function from: ${this._sourceCode.substring(inlineTokenIndex + this.inlineToken.length, funcParamsStartIndex)}`);
                }
                startIndex = inlineTokenIndex + this.inlineToken.length;
                continue;
            }
            const [funcType, funcName] = [funcNameMatch[3], funcNameMatch[4]];
            const funcParamsEndIndex = ExtractBetweenMarkers('(', ')', this._sourceCode, funcParamsStartIndex);
            if (funcParamsEndIndex < 0) {
                if (this.debug) {
                    console.warn(`Could not extract the parameters the function '${funcName}' (type=${funcType}). funcParamsStartIndex=${funcParamsStartIndex}`);
                }
                startIndex = inlineTokenIndex + this.inlineToken.length;
                continue;
            }
            const funcParams = this._sourceCode.substring(funcParamsStartIndex + 1, funcParamsEndIndex);
            const funcBodyStartIndex = SkipWhitespaces(this._sourceCode, funcParamsEndIndex + 1);
            if (funcBodyStartIndex === this._sourceCode.length) {
                if (this.debug) {
                    console.warn(`Could not extract the body of the function '${funcName}' (type=${funcType}). funcParamsEndIndex=${funcParamsEndIndex}`);
                }
                startIndex = inlineTokenIndex + this.inlineToken.length;
                continue;
            }
            const funcBodyEndIndex = ExtractBetweenMarkers('{', '}', this._sourceCode, funcBodyStartIndex);
            if (funcBodyEndIndex < 0) {
                if (this.debug) {
                    console.warn(`Could not extract the body of the function '${funcName}' (type=${funcType}). funcBodyStartIndex=${funcBodyStartIndex}`);
                }
                startIndex = inlineTokenIndex + this.inlineToken.length;
                continue;
            }
            const funcBody = this._sourceCode.substring(funcBodyStartIndex, funcBodyEndIndex + 1);
            const params = RemoveComments(funcParams).split(",");
            const paramNames = [];
            for (let p = 0; p < params.length; ++p) {
                const param = params[p].trim();
                const idx = param.lastIndexOf(" ");
                if (idx >= 0) {
                    paramNames.push(param.substring(idx + 1));
                }
            }
            if (funcType !== 'void') {
                paramNames.push('return');
            }
            this._functionDescr.push({
                "name": funcName,
                "type": funcType,
                "parameters": paramNames,
                "body": funcBody,
                "callIndex": 0,
            });
            startIndex = funcBodyEndIndex + 1;
            const partBefore = inlineTokenIndex > 0 ? this._sourceCode.substring(0, inlineTokenIndex) : "";
            const partAfter = funcBodyEndIndex + 1 < this._sourceCode.length - 1 ? this._sourceCode.substring(funcBodyEndIndex + 1) : "";
            this._sourceCode = partBefore + partAfter;
            startIndex -= funcBodyEndIndex + 1 - inlineTokenIndex;
        }
        if (this.debug) {
            console.log(`Collect functions: ${this._functionDescr.length} functions found. functionDescr=`, this._functionDescr);
        }
    }
    _processInlining(numMaxIterations = 20) {
        while (numMaxIterations-- >= 0) {
            if (!this._replaceFunctionCallsByCode()) {
                break;
            }
        }
        if (this.debug) {
            console.log(`numMaxIterations is ${numMaxIterations} after inlining process`);
        }
        return numMaxIterations >= 0;
    }
    _replaceFunctionCallsByCode() {
        let doAgain = false;
        for (const func of this._functionDescr) {
            const { name, type, parameters, body } = func;
            let startIndex = 0;
            while (startIndex < this._sourceCode.length) {
                const functionCallIndex = this._sourceCode.indexOf(name, startIndex);
                if (functionCallIndex < 0) {
                    break;
                }
                if (functionCallIndex === 0 || IsIdentifierChar(this._sourceCode.charAt(functionCallIndex - 1))) {
                    startIndex = functionCallIndex + name.length;
                    continue;
                }
                const callParamsStartIndex = SkipWhitespaces(this._sourceCode, functionCallIndex + name.length);
                if (callParamsStartIndex === this._sourceCode.length || this._sourceCode.charAt(callParamsStartIndex) !== '(') {
                    startIndex = functionCallIndex + name.length;
                    continue;
                }
                const callParamsEndIndex = ExtractBetweenMarkers('(', ')', this._sourceCode, callParamsStartIndex);
                if (callParamsEndIndex < 0) {
                    if (this.debug) {
                        console.warn(`Could not extract the parameters of the function call. Function '${name}' (type=${type}). callParamsStartIndex=${callParamsStartIndex}`);
                    }
                    startIndex = functionCallIndex + name.length;
                    continue;
                }
                const callParams = this._sourceCode.substring(callParamsStartIndex + 1, callParamsEndIndex);
                const splitParameterCall = (s) => {
                    const parameters = [];
                    let curIdx = 0, startParamIdx = 0;
                    while (curIdx < s.length) {
                        if (s.charAt(curIdx) === '(') {
                            const idx2 = ExtractBetweenMarkers('(', ')', s, curIdx);
                            if (idx2 < 0) {
                                return null;
                            }
                            curIdx = idx2;
                        }
                        else if (s.charAt(curIdx) === ',') {
                            parameters.push(s.substring(startParamIdx, curIdx));
                            startParamIdx = curIdx + 1;
                        }
                        curIdx++;
                    }
                    if (startParamIdx < curIdx) {
                        parameters.push(s.substring(startParamIdx, curIdx));
                    }
                    return parameters;
                };
                const params = splitParameterCall(RemoveComments(callParams));
                if (params === null) {
                    if (this.debug) {
                        console.warn(`Invalid function call: can't extract the parameters of the function call. Function '${name}' (type=${type}). callParamsStartIndex=${callParamsStartIndex}, callParams=` + callParams);
                    }
                    startIndex = functionCallIndex + name.length;
                    continue;
                }
                const paramNames = [];
                for (let p = 0; p < params.length; ++p) {
                    const param = params[p].trim();
                    paramNames.push(param);
                }
                const retParamName = type !== 'void' ? name + '_' + (func.callIndex++) : null;
                if (retParamName) {
                    paramNames.push(retParamName + ' =');
                }
                if (paramNames.length !== parameters.length) {
                    if (this.debug) {
                        console.warn(`Invalid function call: not the same number of parameters for the call than the number expected by the function. Function '${name}' (type=${type}). function parameters=${parameters}, call parameters=${paramNames}`);
                    }
                    startIndex = functionCallIndex + name.length;
                    continue;
                }
                startIndex = callParamsEndIndex + 1;
                const funcBody = this._replaceNames(body, parameters, paramNames);
                let partBefore = functionCallIndex > 0 ? this._sourceCode.substring(0, functionCallIndex) : "";
                let partAfter = callParamsEndIndex + 1 < this._sourceCode.length - 1 ? this._sourceCode.substring(callParamsEndIndex + 1) : "";
                if (retParamName) {
                    const injectDeclarationIndex = FindBackward(this._sourceCode, functionCallIndex - 1, '\n');
                    partBefore = this._sourceCode.substring(0, injectDeclarationIndex + 1);
                    let partBetween = this._sourceCode.substring(injectDeclarationIndex + 1, functionCallIndex);
                    this._sourceCode = partBefore + type + " " + retParamName + ";\n" + funcBody + "\n" + partBetween + retParamName + partAfter;
                    if (this.debug) {
                        console.log(`Replace function call by code. Function '${name}' (type=${type}). injectDeclarationIndex=${injectDeclarationIndex}, call parameters=${paramNames}`);
                    }
                }
                else {
                    this._sourceCode = partBefore + funcBody + partAfter;
                    startIndex += funcBody.length - (callParamsEndIndex + 1 - functionCallIndex);
                    if (this.debug) {
                        console.log(`Replace function call by code. Function '${name}' (type=${type}). functionCallIndex=${functionCallIndex}, call parameters=${paramNames}`);
                    }
                }
                doAgain = true;
            }
        }
        return doAgain;
    }
    _replaceNames(code, sources, destinations) {
        for (let i = 0; i < sources.length; ++i) {
            const source = new RegExp(EscapeRegExp(sources[i]), 'g'), sourceLen = sources[i].length, destination = destinations[i];
            code = code.replace(source, (match, ...args) => {
                const offset = args[0];
                if (IsIdentifierChar(code.charAt(offset - 1)) || IsIdentifierChar(code.charAt(offset + sourceLen))) {
                    return sources[i];
                }
                return destination;
            });
        }
        return code;
    }
}
ShaderCodeInliner._RegexpFindFunctionNameAndType = /((\s+?)(\w+)\s+(\w+)\s*?)$/;
var PowerPreference;
(function (PowerPreference) {
    PowerPreference["SRGB"] = "srgb";
})(PowerPreference || (PowerPreference = {}));
(function (PowerPreference) {
    PowerPreference["LowPower"] = "low-power";
    PowerPreference["HighPerformance"] = "high-performance";
})(PowerPreference || (PowerPreference = {}));
var FeatureName;
(function (FeatureName) {
    FeatureName["DepthClipControl"] = "depth-clip-control";
    FeatureName["Depth24UnormStencil8"] = "depth24unorm-stencil8";
    FeatureName["Depth32FloatStencil8"] = "depth32float-stencil8";
    FeatureName["TextureCompressionBC"] = "texture-compression-bc";
    FeatureName["TextureCompressionETC2"] = "texture-compression-etc2";
    FeatureName["TextureCompressionASTC"] = "texture-compression-astc";
    FeatureName["TimestampQuery"] = "timestamp-query";
    FeatureName["IndirectFirstInstance"] = "indirect-first-instance";
})(FeatureName || (FeatureName = {}));
var BufferUsage;
(function (BufferUsage) {
    BufferUsage[BufferUsage["MapRead"] = 1] = "MapRead";
    BufferUsage[BufferUsage["MapWrite"] = 2] = "MapWrite";
    BufferUsage[BufferUsage["CopySrc"] = 4] = "CopySrc";
    BufferUsage[BufferUsage["CopyDst"] = 8] = "CopyDst";
    BufferUsage[BufferUsage["Index"] = 16] = "Index";
    BufferUsage[BufferUsage["Vertex"] = 32] = "Vertex";
    BufferUsage[BufferUsage["Uniform"] = 64] = "Uniform";
    BufferUsage[BufferUsage["Storage"] = 128] = "Storage";
    BufferUsage[BufferUsage["Indirect"] = 256] = "Indirect";
    BufferUsage[BufferUsage["QueryResolve"] = 512] = "QueryResolve";
})(BufferUsage || (BufferUsage = {}));
var MapMode;
(function (MapMode) {
    MapMode[MapMode["Read"] = 1] = "Read";
    MapMode[MapMode["Write"] = 2] = "Write";
})(MapMode || (MapMode = {}));
var TextureDimension;
(function (TextureDimension) {
    TextureDimension["E1d"] = "1d";
    TextureDimension["E2d"] = "2d";
    TextureDimension["E3d"] = "3d";
})(TextureDimension || (TextureDimension = {}));
var TextureUsage;
(function (TextureUsage) {
    TextureUsage[TextureUsage["CopySrc"] = 1] = "CopySrc";
    TextureUsage[TextureUsage["CopyDst"] = 2] = "CopyDst";
    TextureUsage[TextureUsage["TextureBinding"] = 4] = "TextureBinding";
    TextureUsage[TextureUsage["StorageBinding"] = 8] = "StorageBinding";
    TextureUsage[TextureUsage["RenderAttachment"] = 16] = "RenderAttachment";
})(TextureUsage || (TextureUsage = {}));
var TextureViewDimension;
(function (TextureViewDimension) {
    TextureViewDimension["E1d"] = "1d";
    TextureViewDimension["E2d"] = "2d";
    TextureViewDimension["E2dArray"] = "2d-array";
    TextureViewDimension["Cube"] = "cube";
    TextureViewDimension["CubeArray"] = "cube-array";
    TextureViewDimension["E3d"] = "3d";
})(TextureViewDimension || (TextureViewDimension = {}));
var TextureAspect;
(function (TextureAspect) {
    TextureAspect["All"] = "all";
    TextureAspect["StencilOnly"] = "stencil-only";
    TextureAspect["DepthOnly"] = "depth-only";
})(TextureAspect || (TextureAspect = {}));
var TextureFormat;
(function (TextureFormat) {
    TextureFormat["R8Unorm"] = "r8unorm";
    TextureFormat["R8Snorm"] = "r8snorm";
    TextureFormat["R8Uint"] = "r8uint";
    TextureFormat["R8Sint"] = "r8sint";
    TextureFormat["R16Uint"] = "r16uint";
    TextureFormat["R16Sint"] = "r16sint";
    TextureFormat["R16Float"] = "r16float";
    TextureFormat["RG8Unorm"] = "rg8unorm";
    TextureFormat["RG8Snorm"] = "rg8snorm";
    TextureFormat["RG8Uint"] = "rg8uint";
    TextureFormat["RG8Sint"] = "rg8sint";
    TextureFormat["R32Uint"] = "r32uint";
    TextureFormat["R32Sint"] = "r32sint";
    TextureFormat["R32Float"] = "r32float";
    TextureFormat["RG16Uint"] = "rg16uint";
    TextureFormat["RG16Sint"] = "rg16sint";
    TextureFormat["RG16Float"] = "rg16float";
    TextureFormat["RGBA8Unorm"] = "rgba8unorm";
    TextureFormat["RGBA8UnormSRGB"] = "rgba8unorm-srgb";
    TextureFormat["RGBA8Snorm"] = "rgba8snorm";
    TextureFormat["RGBA8Uint"] = "rgba8uint";
    TextureFormat["RGBA8Sint"] = "rgba8sint";
    TextureFormat["BGRA8Unorm"] = "bgra8unorm";
    TextureFormat["BGRA8UnormSRGB"] = "bgra8unorm-srgb";
    TextureFormat["RGB9E5UFloat"] = "rgb9e5ufloat";
    TextureFormat["RGB10A2Unorm"] = "rgb10a2unorm";
    TextureFormat["RG11B10UFloat"] = "rg11b10ufloat";
    TextureFormat["RG32Uint"] = "rg32uint";
    TextureFormat["RG32Sint"] = "rg32sint";
    TextureFormat["RG32Float"] = "rg32float";
    TextureFormat["RGBA16Uint"] = "rgba16uint";
    TextureFormat["RGBA16Sint"] = "rgba16sint";
    TextureFormat["RGBA16Float"] = "rgba16float";
    TextureFormat["RGBA32Uint"] = "rgba32uint";
    TextureFormat["RGBA32Sint"] = "rgba32sint";
    TextureFormat["RGBA32Float"] = "rgba32float";
    TextureFormat["Stencil8"] = "stencil8";
    TextureFormat["Depth16Unorm"] = "depth16unorm";
    TextureFormat["Depth24Plus"] = "depth24plus";
    TextureFormat["Depth24PlusStencil8"] = "depth24plus-stencil8";
    TextureFormat["Depth32Float"] = "depth32float";
    TextureFormat["BC1RGBAUnorm"] = "bc1-rgba-unorm";
    TextureFormat["BC1RGBAUnormSRGB"] = "bc1-rgba-unorm-srgb";
    TextureFormat["BC2RGBAUnorm"] = "bc2-rgba-unorm";
    TextureFormat["BC2RGBAUnormSRGB"] = "bc2-rgba-unorm-srgb";
    TextureFormat["BC3RGBAUnorm"] = "bc3-rgba-unorm";
    TextureFormat["BC3RGBAUnormSRGB"] = "bc3-rgba-unorm-srgb";
    TextureFormat["BC4RUnorm"] = "bc4-r-unorm";
    TextureFormat["BC4RSnorm"] = "bc4-r-snorm";
    TextureFormat["BC5RGUnorm"] = "bc5-rg-unorm";
    TextureFormat["BC5RGSnorm"] = "bc5-rg-snorm";
    TextureFormat["BC6HRGBUFloat"] = "bc6h-rgb-ufloat";
    TextureFormat["BC6HRGBFloat"] = "bc6h-rgb-float";
    TextureFormat["BC7RGBAUnorm"] = "bc7-rgba-unorm";
    TextureFormat["BC7RGBAUnormSRGB"] = "bc7-rgba-unorm-srgb";
    TextureFormat["ETC2RGB8Unorm"] = "etc2-rgb8unorm";
    TextureFormat["ETC2RGB8UnormSRGB"] = "etc2-rgb8unorm-srgb";
    TextureFormat["ETC2RGB8A1Unorm"] = "etc2-rgb8a1unorm";
    TextureFormat["ETC2RGB8A1UnormSRGB"] = "etc2-rgb8a1unorm-srgb";
    TextureFormat["ETC2RGBA8Unorm"] = "etc2-rgba8unorm";
    TextureFormat["ETC2RGBA8UnormSRGB"] = "etc2-rgba8unorm-srgb";
    TextureFormat["EACR11Unorm"] = "eac-r11unorm";
    TextureFormat["EACR11Snorm"] = "eac-r11snorm";
    TextureFormat["EACRG11Unorm"] = "eac-rg11unorm";
    TextureFormat["EACRG11Snorm"] = "eac-rg11snorm";
    TextureFormat["ASTC4x4Unorm"] = "astc-4x4-unorm";
    TextureFormat["ASTC4x4UnormSRGB"] = "astc-4x4-unorm-srgb";
    TextureFormat["ASTC5x4Unorm"] = "astc-5x4-unorm";
    TextureFormat["ASTC5x4UnormSRGB"] = "astc-5x4-unorm-srgb";
    TextureFormat["ASTC5x5Unorm"] = "astc-5x5-unorm";
    TextureFormat["ASTC5x5UnormSRGB"] = "astc-5x5-unorm-srgb";
    TextureFormat["ASTC6x5Unorm"] = "astc-6x5-unorm";
    TextureFormat["ASTC6x5UnormSRGB"] = "astc-6x5-unorm-srgb";
    TextureFormat["ASTC6x6Unorm"] = "astc-6x6-unorm";
    TextureFormat["ASTC6x6UnormSRGB"] = "astc-6x6-unorm-srgb";
    TextureFormat["ASTC8x5Unorm"] = "astc-8x5-unorm";
    TextureFormat["ASTC8x5UnormSRGB"] = "astc-8x5-unorm-srgb";
    TextureFormat["ASTC8x6Unorm"] = "astc-8x6-unorm";
    TextureFormat["ASTC8x6UnormSRGB"] = "astc-8x6-unorm-srgb";
    TextureFormat["ASTC8x8Unorm"] = "astc-8x8-unorm";
    TextureFormat["ASTC8x8UnormSRGB"] = "astc-8x8-unorm-srgb";
    TextureFormat["ASTC10x5Unorm"] = "astc-10x5-unorm";
    TextureFormat["ASTC10x5UnormSRGB"] = "astc-10x5-unorm-srgb";
    TextureFormat["ASTC10x6Unorm"] = "astc-10x6-unorm";
    TextureFormat["ASTC10x6UnormSRGB"] = "astc-10x6-unorm-srgb";
    TextureFormat["ASTC10x8Unorm"] = "astc-10x8-unorm";
    TextureFormat["ASTC10x8UnormSRGB"] = "astc-10x8-unorm-srgb";
    TextureFormat["ASTC10x10Unorm"] = "astc-10x10-unorm";
    TextureFormat["ASTC10x10UnormSRGB"] = "astc-10x10-unorm-srgb";
    TextureFormat["ASTC12x10Unorm"] = "astc-12x10-unorm";
    TextureFormat["ASTC12x10UnormSRGB"] = "astc-12x10-unorm-srgb";
    TextureFormat["ASTC12x12Unorm"] = "astc-12x12-unorm";
    TextureFormat["ASTC12x12UnormSRGB"] = "astc-12x12-unorm-srgb";
    TextureFormat["Depth24UnormStencil8"] = "depth24unorm-stencil8";
    TextureFormat["Depth32FloatStencil8"] = "depth32float-stencil8";
})(TextureFormat || (TextureFormat = {}));
var AddressMode;
(function (AddressMode) {
    AddressMode["ClampToEdge"] = "clamp-to-edge";
    AddressMode["Repeat"] = "repeat";
    AddressMode["MirrorRepeat"] = "mirror-repeat";
})(AddressMode || (AddressMode = {}));
var FilterMode;
(function (FilterMode) {
    FilterMode["Nearest"] = "nearest";
    FilterMode["Linear"] = "linear";
})(FilterMode || (FilterMode = {}));
var CompareFunction;
(function (CompareFunction) {
    CompareFunction["Never"] = "never";
    CompareFunction["Less"] = "less";
    CompareFunction["Equal"] = "equal";
    CompareFunction["LessEqual"] = "less-equal";
    CompareFunction["Greater"] = "greater";
    CompareFunction["NotEqual"] = "not-equal";
    CompareFunction["GreaterEqual"] = "greater-equal";
    CompareFunction["Always"] = "always";
})(CompareFunction || (CompareFunction = {}));
var ShaderStage;
(function (ShaderStage) {
    ShaderStage[ShaderStage["Vertex"] = 1] = "Vertex";
    ShaderStage[ShaderStage["Fragment"] = 2] = "Fragment";
    ShaderStage[ShaderStage["Compute"] = 4] = "Compute";
})(ShaderStage || (ShaderStage = {}));
var BufferBindingType;
(function (BufferBindingType) {
    BufferBindingType["Uniform"] = "uniform";
    BufferBindingType["Storage"] = "storage";
    BufferBindingType["ReadOnlyStorage"] = "read-only-storage";
})(BufferBindingType || (BufferBindingType = {}));
var SamplerBindingType;
(function (SamplerBindingType) {
    SamplerBindingType["Filtering"] = "filtering";
    SamplerBindingType["NonFiltering"] = "non-filtering";
    SamplerBindingType["Comparison"] = "comparison";
})(SamplerBindingType || (SamplerBindingType = {}));
var TextureSampleType;
(function (TextureSampleType) {
    TextureSampleType["Float"] = "float";
    TextureSampleType["UnfilterableFloat"] = "unfilterable-float";
    TextureSampleType["Depth"] = "depth";
    TextureSampleType["Sint"] = "sint";
    TextureSampleType["Uint"] = "uint";
})(TextureSampleType || (TextureSampleType = {}));
var StorageTextureAccess;
(function (StorageTextureAccess) {
    StorageTextureAccess["WriteOnly"] = "write-only";
})(StorageTextureAccess || (StorageTextureAccess = {}));
var CompilationMessageType;
(function (CompilationMessageType) {
    CompilationMessageType["Error"] = "error";
    CompilationMessageType["Warning"] = "warning";
    CompilationMessageType["Info"] = "info";
})(CompilationMessageType || (CompilationMessageType = {}));
var PrimitiveTopology;
(function (PrimitiveTopology) {
    PrimitiveTopology["PointList"] = "point-list";
    PrimitiveTopology["LineList"] = "line-list";
    PrimitiveTopology["LineStrip"] = "line-strip";
    PrimitiveTopology["TriangleList"] = "triangle-list";
    PrimitiveTopology["TriangleStrip"] = "triangle-strip";
})(PrimitiveTopology || (PrimitiveTopology = {}));
var FrontFace;
(function (FrontFace) {
    FrontFace["CCW"] = "ccw";
    FrontFace["CW"] = "cw";
})(FrontFace || (FrontFace = {}));
var CullMode;
(function (CullMode) {
    CullMode["None"] = "none";
    CullMode["Front"] = "front";
    CullMode["Back"] = "back";
})(CullMode || (CullMode = {}));
var ColorWrite;
(function (ColorWrite) {
    ColorWrite[ColorWrite["Red"] = 1] = "Red";
    ColorWrite[ColorWrite["Green"] = 2] = "Green";
    ColorWrite[ColorWrite["Blue"] = 4] = "Blue";
    ColorWrite[ColorWrite["Alpha"] = 8] = "Alpha";
    ColorWrite[ColorWrite["All"] = 15] = "All";
})(ColorWrite || (ColorWrite = {}));
var BlendFactor;
(function (BlendFactor) {
    BlendFactor["Zero"] = "zero";
    BlendFactor["One"] = "one";
    BlendFactor["Src"] = "src";
    BlendFactor["OneMinusSrc"] = "one-minus-src";
    BlendFactor["SrcAlpha"] = "src-alpha";
    BlendFactor["OneMinusSrcAlpha"] = "one-minus-src-alpha";
    BlendFactor["Dst"] = "dst";
    BlendFactor["OneMinusDst"] = "one-minus-dst";
    BlendFactor["DstAlpha"] = "dst-alpha";
    BlendFactor["OneMinusDstAlpha"] = "one-minus-dst-alpha";
    BlendFactor["SrcAlphaSaturated"] = "src-alpha-saturated";
    BlendFactor["Constant"] = "constant";
    BlendFactor["OneMinusConstant"] = "one-minus-constant";
})(BlendFactor || (BlendFactor = {}));
var BlendOperation;
(function (BlendOperation) {
    BlendOperation["Add"] = "add";
    BlendOperation["Subtract"] = "subtract";
    BlendOperation["ReverseSubtract"] = "reverse-subtract";
    BlendOperation["Min"] = "min";
    BlendOperation["Max"] = "max";
})(BlendOperation || (BlendOperation = {}));
var StencilOperation;
(function (StencilOperation) {
    StencilOperation["Keep"] = "keep";
    StencilOperation["Zero"] = "zero";
    StencilOperation["Replace"] = "replace";
    StencilOperation["Invert"] = "invert";
    StencilOperation["IncrementClamp"] = "increment-clamp";
    StencilOperation["DecrementClamp"] = "decrement-clamp";
    StencilOperation["IncrementWrap"] = "increment-wrap";
    StencilOperation["DecrementWrap"] = "decrement-wrap";
})(StencilOperation || (StencilOperation = {}));
var IndexFormat;
(function (IndexFormat) {
    IndexFormat["Uint16"] = "uint16";
    IndexFormat["Uint32"] = "uint32";
})(IndexFormat || (IndexFormat = {}));
var VertexFormat;
(function (VertexFormat) {
    VertexFormat["Uint8x2"] = "uint8x2";
    VertexFormat["Uint8x4"] = "uint8x4";
    VertexFormat["Sint8x2"] = "sint8x2";
    VertexFormat["Sint8x4"] = "sint8x4";
    VertexFormat["Unorm8x2"] = "unorm8x2";
    VertexFormat["Unorm8x4"] = "unorm8x4";
    VertexFormat["Snorm8x2"] = "snorm8x2";
    VertexFormat["Snorm8x4"] = "snorm8x4";
    VertexFormat["Uint16x2"] = "uint16x2";
    VertexFormat["Uint16x4"] = "uint16x4";
    VertexFormat["Sint16x2"] = "sint16x2";
    VertexFormat["Sint16x4"] = "sint16x4";
    VertexFormat["Unorm16x2"] = "unorm16x2";
    VertexFormat["Unorm16x4"] = "unorm16x4";
    VertexFormat["Snorm16x2"] = "snorm16x2";
    VertexFormat["Snorm16x4"] = "snorm16x4";
    VertexFormat["Float16x2"] = "float16x2";
    VertexFormat["Float16x4"] = "float16x4";
    VertexFormat["Float32"] = "float32";
    VertexFormat["Float32x2"] = "float32x2";
    VertexFormat["Float32x3"] = "float32x3";
    VertexFormat["Float32x4"] = "float32x4";
    VertexFormat["Uint32"] = "uint32";
    VertexFormat["Uint32x2"] = "uint32x2";
    VertexFormat["Uint32x3"] = "uint32x3";
    VertexFormat["Uint32x4"] = "uint32x4";
    VertexFormat["Sint32"] = "sint32";
    VertexFormat["Sint32x2"] = "sint32x2";
    VertexFormat["Sint32x3"] = "sint32x3";
    VertexFormat["Sint32x4"] = "sint32x4";
})(VertexFormat || (VertexFormat = {}));
var InputStepMode;
(function (InputStepMode) {
    InputStepMode["Vertex"] = "vertex";
    InputStepMode["Instance"] = "instance";
})(InputStepMode || (InputStepMode = {}));
var ComputePassTimestampLocation;
(function (ComputePassTimestampLocation) {
    ComputePassTimestampLocation["Beginning"] = "beginning";
    ComputePassTimestampLocation["End"] = "end";
})(ComputePassTimestampLocation || (ComputePassTimestampLocation = {}));
var RenderPassTimestampLocation;
(function (RenderPassTimestampLocation) {
    RenderPassTimestampLocation["Beginning"] = "beginning";
    RenderPassTimestampLocation["End"] = "end";
})(RenderPassTimestampLocation || (RenderPassTimestampLocation = {}));
var LoadOp;
(function (LoadOp) {
    LoadOp["Load"] = "load";
})(LoadOp || (LoadOp = {}));
var StoreOp;
(function (StoreOp) {
    StoreOp["Store"] = "store";
    StoreOp["Discard"] = "discard";
})(StoreOp || (StoreOp = {}));
var QueryType;
(function (QueryType) {
    QueryType["Occlusion"] = "occlusion";
    QueryType["Timestamp"] = "timestamp";
})(QueryType || (QueryType = {}));
var CanvasCompositingAlphaMode;
(function (CanvasCompositingAlphaMode) {
    CanvasCompositingAlphaMode["Opaque"] = "opaque";
    CanvasCompositingAlphaMode["Premultiplied"] = "premultiplied";
})(CanvasCompositingAlphaMode || (CanvasCompositingAlphaMode = {}));
var DeviceLostReason;
(function (DeviceLostReason) {
    DeviceLostReason["Destroyed"] = "destroyed";
})(DeviceLostReason || (DeviceLostReason = {}));
var ErrorFilter;
(function (ErrorFilter) {
    ErrorFilter["OutOfMemory"] = "out-of-memory";
    ErrorFilter["Validation"] = "validation";
})(ErrorFilter || (ErrorFilter = {}));
class WebGPUShaderProcessor {
    constructor() {
        this.shaderLanguage = ShaderLanguage.GLSL;
    }
    _addUniformToLeftOverUBO(name, uniformType, preProcessors) {
        let length = 0;
        [name, uniformType, length] = this._getArraySize(name, uniformType, preProcessors);
        for (let i = 0; i < this.webgpuProcessingContext.leftOverUniforms.length; i++) {
            if (this.webgpuProcessingContext.leftOverUniforms[i].name === name) {
                return;
            }
        }
        this.webgpuProcessingContext.leftOverUniforms.push({
            name,
            type: uniformType,
            length
        });
    }
    _buildLeftOverUBO() {
        if (!this.webgpuProcessingContext.leftOverUniforms.length) {
            return "";
        }
        const name = WebGPUShaderProcessor.LeftOvertUBOName;
        let availableUBO = this.webgpuProcessingContext.availableBuffers[name];
        if (!availableUBO) {
            availableUBO = {
                binding: this.webgpuProcessingContext.getNextFreeUBOBinding(),
            };
            this.webgpuProcessingContext.availableBuffers[name] = availableUBO;
            this._addBufferBindingDescription(name, availableUBO, BufferBindingType.Uniform, true);
            this._addBufferBindingDescription(name, availableUBO, BufferBindingType.Uniform, false);
        }
        return this._generateLeftOverUBOCode(name, availableUBO);
    }
    _collectBindingNames() {
        for (let i = 0; i < this.webgpuProcessingContext.bindGroupLayoutEntries.length; i++) {
            const setDefinition = this.webgpuProcessingContext.bindGroupLayoutEntries[i];
            if (setDefinition === undefined) {
                this.webgpuProcessingContext.bindGroupLayoutEntries[i] = [];
                continue;
            }
            for (let j = 0; j < setDefinition.length; j++) {
                const entry = this.webgpuProcessingContext.bindGroupLayoutEntries[i][j];
                const name = this.webgpuProcessingContext.bindGroupLayoutEntryInfo[i][entry.binding].name;
                const nameInArrayOfTexture = this.webgpuProcessingContext.bindGroupLayoutEntryInfo[i][entry.binding].nameInArrayOfTexture;
                if (entry) {
                    if (entry.texture || entry.externalTexture || entry.storageTexture) {
                        this.webgpuProcessingContext.textureNames.push(nameInArrayOfTexture);
                    }
                    else if (entry.sampler) {
                        this.webgpuProcessingContext.samplerNames.push(name);
                    }
                    else if (entry.buffer) {
                        this.webgpuProcessingContext.bufferNames.push(name);
                    }
                }
            }
        }
    }
    _preCreateBindGroupEntries() {
        const bindGroupEntries = this.webgpuProcessingContext.bindGroupEntries;
        for (let i = 0; i < this.webgpuProcessingContext.bindGroupLayoutEntries.length; i++) {
            const setDefinition = this.webgpuProcessingContext.bindGroupLayoutEntries[i];
            const entries = [];
            for (let j = 0; j < setDefinition.length; j++) {
                const entry = this.webgpuProcessingContext.bindGroupLayoutEntries[i][j];
                if (entry.sampler || entry.texture || entry.storageTexture || entry.externalTexture) {
                    entries.push({
                        binding: entry.binding,
                        resource: undefined,
                    });
                }
                else if (entry.buffer) {
                    entries.push({
                        binding: entry.binding,
                        resource: {
                            buffer: undefined,
                            offset: 0,
                            size: 0,
                        },
                    });
                }
            }
            bindGroupEntries[i] = entries;
        }
    }
    _addTextureBindingDescription(name, textureInfo, textureIndex, dimension, format, isVertex) {
        let { groupIndex, bindingIndex } = textureInfo.textures[textureIndex];
        if (!this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex]) {
            this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex] = [];
            this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex] = [];
        }
        if (!this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex]) {
            let len;
            if (dimension === null) {
                len = this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex].push({
                    binding: bindingIndex,
                    visibility: 0,
                    externalTexture: {},
                });
            }
            else if (format) {
                len = this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex].push({
                    binding: bindingIndex,
                    visibility: 0,
                    storageTexture: {
                        access: StorageTextureAccess.WriteOnly,
                        format,
                        viewDimension: dimension,
                    },
                });
            }
            else {
                len = this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex].push({
                    binding: bindingIndex,
                    visibility: 0,
                    texture: {
                        sampleType: textureInfo.sampleType,
                        viewDimension: dimension,
                        multisampled: false,
                    },
                });
            }
            const textureName = textureInfo.isTextureArray ? name + textureIndex : name;
            this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex] = { name, index: len - 1, nameInArrayOfTexture: textureName };
        }
        bindingIndex = this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex].index;
        if (isVertex) {
            this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= ShaderStage.Vertex;
        }
        else {
            this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= ShaderStage.Fragment;
        }
    }
    _addSamplerBindingDescription(name, samplerInfo, isVertex) {
        let { groupIndex, bindingIndex } = samplerInfo.binding;
        if (!this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex]) {
            this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex] = [];
            this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex] = [];
        }
        if (!this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex]) {
            const len = this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex].push({
                binding: bindingIndex,
                visibility: 0,
                sampler: {
                    type: samplerInfo.type,
                },
            });
            this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex] = { name, index: len - 1 };
        }
        bindingIndex = this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex].index;
        if (isVertex) {
            this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= ShaderStage.Vertex;
        }
        else {
            this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= ShaderStage.Fragment;
        }
    }
    _addBufferBindingDescription(name, uniformBufferInfo, bufferType, isVertex) {
        let { groupIndex, bindingIndex } = uniformBufferInfo.binding;
        if (!this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex]) {
            this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex] = [];
            this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex] = [];
        }
        if (!this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex]) {
            const len = this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex].push({
                binding: bindingIndex,
                visibility: 0,
                buffer: {
                    type: bufferType,
                },
            });
            this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex] = { name, index: len - 1 };
        }
        bindingIndex = this.webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex].index;
        if (isVertex) {
            this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= ShaderStage.Vertex;
        }
        else {
            this.webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= ShaderStage.Fragment;
        }
    }
    _injectStartingAndEndingCode(code, mainFuncDecl, startingCode, endingCode) {
        if (startingCode) {
            let idx = code.indexOf(mainFuncDecl);
            if (idx >= 0) {
                while (idx++ < code.length && code.charAt(idx) != '{') { }
                if (idx < code.length) {
                    while (idx++ < code.length && code.charAt(idx) != '\n') { }
                    if (idx < code.length) {
                        const part1 = code.substring(0, idx + 1);
                        const part2 = code.substring(idx + 1);
                        code = part1 + startingCode + part2;
                    }
                }
            }
        }
        if (endingCode) {
            const lastClosingCurly = code.lastIndexOf("}");
            code = code.substring(0, lastClosingCurly);
            code += endingCode + "\n}";
        }
        return code;
    }
}
WebGPUShaderProcessor.AutoSamplerSuffix = "Sampler";
WebGPUShaderProcessor.LeftOvertUBOName = "LeftOver";
WebGPUShaderProcessor.InternalsUBOName = "Internals";
WebGPUShaderProcessor.UniformSizes = {
    "bool": 1,
    "int": 1,
    "float": 1,
    "vec2": 2,
    "ivec2": 2,
    "vec3": 3,
    "ivec3": 3,
    "vec4": 4,
    "ivec4": 4,
    "mat2": 4,
    "mat3": 12,
    "mat4": 16,
    "i32": 1,
    "u32": 1,
    "f32": 1,
    "mat2x2": 4,
    "mat3x3": 12,
    "mat4x4": 16
};
WebGPUShaderProcessor._SamplerFunctionByWebGLSamplerType = {
    "sampler2D": "sampler2D",
    "sampler2DArray": "sampler2DArray",
    "sampler2DShadow": "sampler2DShadow",
    "sampler2DArrayShadow": "sampler2DArrayShadow",
    "samplerCube": "samplerCube",
    "sampler3D": "sampler3D",
};
WebGPUShaderProcessor._TextureTypeByWebGLSamplerType = {
    "sampler2D": "texture2D",
    "sampler2DArray": "texture2DArray",
    "sampler2DShadow": "texture2D",
    "sampler2DArrayShadow": "texture2DArray",
    "samplerCube": "textureCube",
    "samplerCubeArray": "textureCubeArray",
    "sampler3D": "texture3D",
};
WebGPUShaderProcessor._GpuTextureViewDimensionByWebGPUTextureType = {
    "textureCube": TextureViewDimension.Cube,
    "textureCubeArray": TextureViewDimension.CubeArray,
    "texture2D": TextureViewDimension.E2d,
    "texture2DArray": TextureViewDimension.E2dArray,
    "texture3D": TextureViewDimension.E3d,
};
WebGPUShaderProcessor._SamplerTypeByWebGLSamplerType = {
    "sampler2DShadow": "samplerShadow",
    "sampler2DArrayShadow": "samplerShadow",
};
WebGPUShaderProcessor._IsComparisonSamplerByWebGPUSamplerType = {
    "samplerShadow": true,
    "samplerArrayShadow": true,
    "sampler": false,
};
class WebGPUPipelineContext {
    constructor(shaderProcessingContext, engine) {
        this._name = "unnamed";
        this.shaderProcessingContext = shaderProcessingContext;
        this._leftOverUniformsByName = {};
        this.engine = engine;
    }
    get isAsync() {
        return false;
    }
    get isReady() {
        if (this.stages) {
            return true;
        }
        return false;
    }
    _handlesSpectorRebuildCallback(onCompiled) {
    }
    _fillEffectInformation(effect, uniformBuffersNames, uniformsNames, uniforms, samplerList, samplers, attributesNames, attributes) {
        const engine = this.engine;
        effect._fragmentSourceCode = "";
        effect._vertexSourceCode = "";
        const foundSamplers = this.shaderProcessingContext.availableTextures;
        let index;
        for (index = 0; index < samplerList.length; index++) {
            const name = samplerList[index];
            const sampler = foundSamplers[samplerList[index]];
            if (sampler == null || sampler == undefined) {
                samplerList.splice(index, 1);
                index--;
            }
            else {
                samplers[name] = index;
            }
        }
        for (let attr of engine.getAttributes(this, attributesNames)) {
            attributes.push(attr);
        }
        this.buildUniformLayout();
        let attributeNamesFromEffect = [];
        let attributeLocationsFromEffect = [];
        for (index = 0; index < attributesNames.length; index++) {
            const location = attributes[index];
            if (location >= 0) {
                attributeNamesFromEffect.push(attributesNames[index]);
                attributeLocationsFromEffect.push(location);
            }
        }
        this.shaderProcessingContext.attributeNamesFromEffect = attributeNamesFromEffect;
        this.shaderProcessingContext.attributeLocationsFromEffect = attributeLocationsFromEffect;
    }
    buildUniformLayout() {
        if (!this.shaderProcessingContext.leftOverUniforms.length) {
            return;
        }
        this.uniformBuffer = new UniformBuffer(this.engine, undefined, undefined, "leftOver-" + this._name);
        for (let leftOverUniform of this.shaderProcessingContext.leftOverUniforms) {
            const type = leftOverUniform.type.replace(/^(.*?)(<.*>)?$/, "$1");
            const size = WebGPUShaderProcessor.UniformSizes[type];
            this.uniformBuffer.addUniform(leftOverUniform.name, size, leftOverUniform.length);
            this._leftOverUniformsByName[leftOverUniform.name] = leftOverUniform.type;
        }
        this.uniformBuffer.create();
    }
    dispose() {
        if (this.uniformBuffer) {
            this.uniformBuffer.dispose();
        }
    }
    setInt(uniformName, value) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateInt(uniformName, value);
    }
    setInt2(uniformName, x, y) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateInt2(uniformName, x, y);
    }
    setInt3(uniformName, x, y, z) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateInt3(uniformName, x, y, z);
    }
    setInt4(uniformName, x, y, z, w) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateInt4(uniformName, x, y, z, w);
    }
    setIntArray(uniformName, array) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateIntArray(uniformName, array);
    }
    setIntArray2(uniformName, array) {
        this.setIntArray(uniformName, array);
    }
    setIntArray3(uniformName, array) {
        this.setIntArray(uniformName, array);
    }
    setIntArray4(uniformName, array) {
        this.setIntArray(uniformName, array);
    }
    setArray(uniformName, array) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateArray(uniformName, array);
    }
    setArray2(uniformName, array) {
        this.setArray(uniformName, array);
    }
    setArray3(uniformName, array) {
        this.setArray(uniformName, array);
    }
    setArray4(uniformName, array) {
        this.setArray(uniformName, array);
    }
    setMatrices(uniformName, matrices) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateMatrices(uniformName, matrices);
    }
    setMatrix(uniformName, matrix) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateMatrix(uniformName, matrix);
    }
    setMatrix3x3(uniformName, matrix) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateMatrix3x3(uniformName, matrix);
    }
    setMatrix2x2(uniformName, matrix) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateMatrix2x2(uniformName, matrix);
    }
    setFloat(uniformName, value) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateFloat(uniformName, value);
    }
    setVector2(uniformName, vector2) {
        this.setFloat2(uniformName, vector2.x, vector2.y);
    }
    setFloat2(uniformName, x, y) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateFloat2(uniformName, x, y);
    }
    setVector3(uniformName, vector3) {
        this.setFloat3(uniformName, vector3.x, vector3.y, vector3.z);
    }
    setFloat3(uniformName, x, y, z) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateFloat3(uniformName, x, y, z);
    }
    setVector4(uniformName, vector4) {
        this.setFloat4(uniformName, vector4.x, vector4.y, vector4.z, vector4.w);
    }
    setFloat4(uniformName, x, y, z, w) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateFloat4(uniformName, x, y, z, w);
    }
    setColor3(uniformName, color3) {
        this.setFloat3(uniformName, color3.r, color3.g, color3.b);
    }
    setColor4(uniformName, color3, alpha) {
        this.setFloat4(uniformName, color3.r, color3.g, color3.b, alpha);
    }
    setDirectColor4(uniformName, color4) {
        this.setFloat4(uniformName, color4.r, color4.g, color4.b, color4.a);
    }
    _getVertexShaderCode() {
        var _a;
        return (_a = this.sources) === null || _a === void 0 ? void 0 : _a.vertex;
    }
    _getFragmentShaderCode() {
        var _a;
        return (_a = this.sources) === null || _a === void 0 ? void 0 : _a.fragment;
    }
}
const _maxGroups = 4;
const _maxBindingsPerGroup = 1 << 16;
const _typeToLocationSize = {
    "mat2": 2,
    "mat3": 3,
    "mat4": 4,
    "mat2x2": 2,
    "mat3x3": 3,
    "mat4x4": 4,
};
class WebGPUShaderProcessingContext {
    constructor(shaderLanguage) {
        this.shaderLanguage = shaderLanguage;
        this._attributeNextLocation = 0;
        this._varyingNextLocation = 0;
        this.freeGroupIndex = 0;
        this.freeBindingIndex = 0;
        this.availableVaryings = {};
        this.availableAttributes = {};
        this.availableBuffers = {};
        this.availableTextures = {};
        this.availableSamplers = {};
        this.orderedAttributes = [];
        this.bindGroupLayoutEntries = [];
        this.bindGroupLayoutEntryInfo = [];
        this.bindGroupEntries = [];
        this.bufferNames = [];
        this.textureNames = [];
        this.samplerNames = [];
        this.leftOverUniforms = [];
        this._findStartingGroupBinding();
    }
    static get KnownUBOs() {
        return WebGPUShaderProcessingContext._SimplifiedKnownBindings ? WebGPUShaderProcessingContext._SimplifiedKnownUBOs : WebGPUShaderProcessingContext._KnownUBOs;
    }
    _findStartingGroupBinding() {
        const knownUBOs = WebGPUShaderProcessingContext.KnownUBOs;
        const groups = [];
        for (const name in knownUBOs) {
            const binding = knownUBOs[name].binding;
            if (binding.groupIndex === -1) {
                continue;
            }
            if (groups[binding.groupIndex] === undefined) {
                groups[binding.groupIndex] = binding.bindingIndex;
            }
            else {
                groups[binding.groupIndex] = Math.max(groups[binding.groupIndex], binding.bindingIndex);
            }
        }
        this.freeGroupIndex = groups.length - 1;
        if (this.freeGroupIndex === 0) {
            this.freeGroupIndex++;
            this.freeBindingIndex = 0;
        }
        else {
            this.freeBindingIndex = groups[groups.length - 1] + 1;
        }
    }
    getAttributeNextLocation(dataType, arrayLength = 0) {
        var _a;
        const index = this._attributeNextLocation;
        this._attributeNextLocation += ((_a = _typeToLocationSize[dataType]) !== null && _a !== void 0 ? _a : 1) * (arrayLength || 1);
        return index;
    }
    getVaryingNextLocation(dataType, arrayLength = 0) {
        var _a;
        const index = this._varyingNextLocation;
        this._varyingNextLocation += ((_a = _typeToLocationSize[dataType]) !== null && _a !== void 0 ? _a : 1) * (arrayLength || 1);
        return index;
    }
    getNextFreeUBOBinding() {
        return this._getNextFreeBinding(1);
    }
    _getNextFreeBinding(bindingCount) {
        if (this.freeBindingIndex > _maxBindingsPerGroup - bindingCount) {
            this.freeGroupIndex++;
            this.freeBindingIndex = 0;
        }
        if (this.freeGroupIndex === _maxGroups) {
            throw "Too many textures or UBOs have been declared and it is not supported in WebGPU.";
        }
        const returnValue = {
            groupIndex: this.freeGroupIndex,
            bindingIndex: this.freeBindingIndex
        };
        this.freeBindingIndex += bindingCount;
        return returnValue;
    }
}
WebGPUShaderProcessingContext._SimplifiedKnownBindings = true;
WebGPUShaderProcessingContext._SimplifiedKnownUBOs = {
    "Scene": { binding: { groupIndex: 0, bindingIndex: 0 } },
    "Light0": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light1": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light2": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light3": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light4": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light5": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light6": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light7": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light8": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light9": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light10": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light11": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light12": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light13": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light14": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light15": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light16": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light17": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light18": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light19": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light20": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light21": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light22": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light23": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light24": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light25": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light26": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light27": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light28": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light29": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light30": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Light31": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Material": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Mesh": { binding: { groupIndex: -1, bindingIndex: -1 } },
    "Internals": { binding: { groupIndex: -1, bindingIndex: -1 } },
};
WebGPUShaderProcessingContext._KnownUBOs = {
    "Scene": { binding: { groupIndex: 0, bindingIndex: 0 } },
    "Light0": { binding: { groupIndex: 1, bindingIndex: 0 } },
    "Light1": { binding: { groupIndex: 1, bindingIndex: 1 } },
    "Light2": { binding: { groupIndex: 1, bindingIndex: 2 } },
    "Light3": { binding: { groupIndex: 1, bindingIndex: 3 } },
    "Light4": { binding: { groupIndex: 1, bindingIndex: 4 } },
    "Light5": { binding: { groupIndex: 1, bindingIndex: 5 } },
    "Light6": { binding: { groupIndex: 1, bindingIndex: 6 } },
    "Light7": { binding: { groupIndex: 1, bindingIndex: 7 } },
    "Light8": { binding: { groupIndex: 1, bindingIndex: 8 } },
    "Light9": { binding: { groupIndex: 1, bindingIndex: 9 } },
    "Light10": { binding: { groupIndex: 1, bindingIndex: 10 } },
    "Light11": { binding: { groupIndex: 1, bindingIndex: 11 } },
    "Light12": { binding: { groupIndex: 1, bindingIndex: 12 } },
    "Light13": { binding: { groupIndex: 1, bindingIndex: 13 } },
    "Light14": { binding: { groupIndex: 1, bindingIndex: 14 } },
    "Light15": { binding: { groupIndex: 1, bindingIndex: 15 } },
    "Light16": { binding: { groupIndex: 1, bindingIndex: 16 } },
    "Light17": { binding: { groupIndex: 1, bindingIndex: 17 } },
    "Light18": { binding: { groupIndex: 1, bindingIndex: 18 } },
    "Light19": { binding: { groupIndex: 1, bindingIndex: 19 } },
    "Light20": { binding: { groupIndex: 1, bindingIndex: 20 } },
    "Light21": { binding: { groupIndex: 1, bindingIndex: 21 } },
    "Light22": { binding: { groupIndex: 1, bindingIndex: 22 } },
    "Light23": { binding: { groupIndex: 1, bindingIndex: 23 } },
    "Light24": { binding: { groupIndex: 1, bindingIndex: 24 } },
    "Light25": { binding: { groupIndex: 1, bindingIndex: 25 } },
    "Light26": { binding: { groupIndex: 1, bindingIndex: 26 } },
    "Light27": { binding: { groupIndex: 1, bindingIndex: 27 } },
    "Light28": { binding: { groupIndex: 1, bindingIndex: 28 } },
    "Light29": { binding: { groupIndex: 1, bindingIndex: 29 } },
    "Light30": { binding: { groupIndex: 1, bindingIndex: 30 } },
    "Light31": { binding: { groupIndex: 1, bindingIndex: 31 } },
    "Material": { binding: { groupIndex: 2, bindingIndex: 0 } },
    "Mesh": { binding: { groupIndex: 2, bindingIndex: 1 } },
    "Internals": { binding: { groupIndex: 2, bindingIndex: 2 } },
};
class WebGPUShaderProcessorGLSL extends WebGPUShaderProcessor {
    constructor() {
        super(...arguments);
        this._missingVaryings = [];
        this._textureArrayProcessing = [];
        this.shaderLanguage = ShaderLanguage.GLSL;
    }
    _getArraySize(name, type, preProcessors) {
        let length = 0;
        const startArray = name.indexOf("[");
        const endArray = name.indexOf("]");
        if (startArray > 0 && endArray > 0) {
            const lengthInString = name.substring(startArray + 1, endArray);
            length = +(lengthInString);
            if (isNaN(length)) {
                length = +(preProcessors[lengthInString.trim()]);
            }
            name = name.substr(0, startArray);
        }
        return [name, type, length];
    }
    initializeShaders(processingContext) {
        this.webgpuProcessingContext = processingContext;
        this._missingVaryings.length = 0;
        this._textureArrayProcessing.length = 0;
    }
    preProcessShaderCode(code, isFragment) {
        const ubDeclaration = `uniform ${WebGPUShaderProcessor.InternalsUBOName} {\nfloat yFactor__;\nfloat textureOutputHeight__;\n};\n`;
        if (isFragment) {
            return ubDeclaration + "##INJECTCODE##\n" + code;
        }
        return ubDeclaration + code;
    }
    varyingProcessor(varying, isFragment, preProcessors, processingContext) {
        this._preProcessors = preProcessors;
        const varyingRegex = /\s*varying\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/gm;
        const match = varyingRegex.exec(varying);
        if (match != null) {
            const varyingType = match[1];
            const name = match[2];
            let location;
            if (isFragment) {
                location = this.webgpuProcessingContext.availableVaryings[name];
                this._missingVaryings[location] = "";
                if (location === undefined) {
                    Logger.Warn(`Invalid fragment shader: The varying named "${name}" is not declared in the vertex shader! This declaration will be ignored.`);
                }
            }
            else {
                location = this.webgpuProcessingContext.getVaryingNextLocation(varyingType, this._getArraySize(name, varyingType, preProcessors)[2]);
                this.webgpuProcessingContext.availableVaryings[name] = location;
                this._missingVaryings[location] = `layout(location = ${location}) in ${varyingType} ${name};`;
            }
            varying = varying.replace(match[0], location === undefined ? "" : `layout(location = ${location}) ${isFragment ? "in" : "out"} ${varyingType} ${name};`);
        }
        return varying;
    }
    attributeProcessor(attribute, preProcessors, processingContext) {
        this._preProcessors = preProcessors;
        const attribRegex = /\s*attribute\s+(\S+)\s+(\S+)\s*;/gm;
        const match = attribRegex.exec(attribute);
        if (match != null) {
            const attributeType = match[1];
            const name = match[2];
            const location = this.webgpuProcessingContext.getAttributeNextLocation(attributeType, this._getArraySize(name, attributeType, preProcessors)[2]);
            this.webgpuProcessingContext.availableAttributes[name] = location;
            this.webgpuProcessingContext.orderedAttributes[location] = name;
            attribute = attribute.replace(match[0], `layout(location = ${location}) in ${attributeType} ${name};`);
        }
        return attribute;
    }
    uniformProcessor(uniform, isFragment, preProcessors, processingContext) {
        var _a;
        this._preProcessors = preProcessors;
        const uniformRegex = /\s*uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/gm;
        const match = uniformRegex.exec(uniform);
        if (match != null) {
            let uniformType = match[1];
            let name = match[2];
            if (uniformType.indexOf("sampler") === 0 || uniformType.indexOf("sampler") === 1) {
                let arraySize = 0;
                [name, uniformType, arraySize] = this._getArraySize(name, uniformType, preProcessors);
                let textureInfo = this.webgpuProcessingContext.availableTextures[name];
                if (!textureInfo) {
                    textureInfo = {
                        autoBindSampler: true,
                        isTextureArray: arraySize > 0,
                        isStorageTexture: false,
                        textures: [],
                        sampleType: TextureSampleType.Float,
                    };
                    for (let i = 0; i < (arraySize || 1); ++i) {
                        textureInfo.textures.push(this.webgpuProcessingContext.getNextFreeUBOBinding());
                    }
                }
                const samplerType = (_a = WebGPUShaderProcessor._SamplerTypeByWebGLSamplerType[uniformType]) !== null && _a !== void 0 ? _a : "sampler";
                const isComparisonSampler = !!WebGPUShaderProcessor._IsComparisonSamplerByWebGPUSamplerType[samplerType];
                const samplerBindingType = isComparisonSampler ? SamplerBindingType.Comparison : SamplerBindingType.Filtering;
                const samplerName = name + WebGPUShaderProcessor.AutoSamplerSuffix;
                let samplerInfo = this.webgpuProcessingContext.availableSamplers[samplerName];
                if (!samplerInfo) {
                    samplerInfo = {
                        binding: this.webgpuProcessingContext.getNextFreeUBOBinding(),
                        type: samplerBindingType,
                    };
                }
                const componentType = uniformType.charAt(0) === 'u' ? 'u' : uniformType.charAt(0) === 'i' ? 'i' : '';
                if (componentType) {
                    uniformType = uniformType.substr(1);
                }
                const sampleType = isComparisonSampler ? TextureSampleType.Depth :
                    componentType === 'u' ? TextureSampleType.Uint :
                        componentType === 'i' ? TextureSampleType.Sint : TextureSampleType.Float;
                textureInfo.sampleType = sampleType;
                const isTextureArray = arraySize > 0;
                const samplerGroupIndex = samplerInfo.binding.groupIndex;
                const samplerBindingIndex = samplerInfo.binding.bindingIndex;
                const samplerFunction = WebGPUShaderProcessor._SamplerFunctionByWebGLSamplerType[uniformType];
                const textureType = WebGPUShaderProcessor._TextureTypeByWebGLSamplerType[uniformType];
                const textureDimension = WebGPUShaderProcessor._GpuTextureViewDimensionByWebGPUTextureType[textureType];
                if (!isTextureArray) {
                    arraySize = 1;
                    uniform = `layout(set = ${samplerGroupIndex}, binding = ${samplerBindingIndex}) uniform ${componentType}${samplerType} ${samplerName};
                        layout(set = ${textureInfo.textures[0].groupIndex}, binding = ${textureInfo.textures[0].bindingIndex}) uniform ${textureType} ${name}Texture;
                        #define ${name} ${componentType}${samplerFunction}(${name}Texture, ${samplerName})`;
                }
                else {
                    let layouts = [];
                    layouts.push(`layout(set = ${samplerGroupIndex}, binding = ${samplerBindingIndex}) uniform ${componentType}${samplerType} ${samplerName};`);
                    uniform = `\r\n`;
                    for (let i = 0; i < arraySize; ++i) {
                        const textureSetIndex = textureInfo.textures[i].groupIndex;
                        const textureBindingIndex = textureInfo.textures[i].bindingIndex;
                        layouts.push(`layout(set = ${textureSetIndex}, binding = ${textureBindingIndex}) uniform ${textureType} ${name}Texture${i};`);
                        uniform += `${i > 0 ? '\r\n' : ''}#define ${name}${i} ${componentType}${samplerFunction}(${name}Texture${i}, ${samplerName})`;
                    }
                    uniform = layouts.join('\r\n') + uniform;
                    this._textureArrayProcessing.push(name);
                }
                this.webgpuProcessingContext.availableTextures[name] = textureInfo;
                this.webgpuProcessingContext.availableSamplers[samplerName] = samplerInfo;
                this._addSamplerBindingDescription(samplerName, samplerInfo, !isFragment);
                for (let i = 0; i < arraySize; ++i) {
                    this._addTextureBindingDescription(name, textureInfo, i, textureDimension, null, !isFragment);
                }
            }
            else {
                this._addUniformToLeftOverUBO(name, uniformType, preProcessors);
                uniform = "";
            }
        }
        return uniform;
    }
    uniformBufferProcessor(uniformBuffer, isFragment, processingContext) {
        const uboRegex = /uniform\s+(\w+)/gm;
        const match = uboRegex.exec(uniformBuffer);
        if (match != null) {
            const name = match[1];
            let uniformBufferInfo = this.webgpuProcessingContext.availableBuffers[name];
            if (!uniformBufferInfo) {
                const knownUBO = WebGPUShaderProcessingContext.KnownUBOs[name];
                let binding;
                if (knownUBO && knownUBO.binding.groupIndex !== -1) {
                    binding = knownUBO.binding;
                }
                else {
                    binding = this.webgpuProcessingContext.getNextFreeUBOBinding();
                }
                uniformBufferInfo = { binding };
                this.webgpuProcessingContext.availableBuffers[name] = uniformBufferInfo;
            }
            this._addBufferBindingDescription(name, uniformBufferInfo, BufferBindingType.Uniform, !isFragment);
            uniformBuffer = uniformBuffer.replace("uniform", `layout(set = ${uniformBufferInfo.binding.groupIndex}, binding = ${uniformBufferInfo.binding.bindingIndex}) uniform`);
        }
        return uniformBuffer;
    }
    postProcessor(code, defines, isFragment, processingContext, engine) {
        const hasDrawBuffersExtension = code.search(/#extension.+GL_EXT_draw_buffers.+require/) !== -1;
        var regex = /#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g;
        code = code.replace(regex, "");
        code = code.replace(/texture2D\s*\(/g, "texture(");
        if (isFragment) {
            const hasFragCoord = code.indexOf("gl_FragCoord") >= 0;
            const fragCoordCode = `
                glFragCoord__ = gl_FragCoord;
                if (yFactor__ == 1.) {
                    glFragCoord__.y = textureOutputHeight__ - glFragCoord__.y;
                }
            `;
            const injectCode = hasFragCoord ? "vec4 glFragCoord__;\n" : "";
            code = code.replace(/texture2DLodEXT\s*\(/g, "textureLod(");
            code = code.replace(/textureCubeLodEXT\s*\(/g, "textureLod(");
            code = code.replace(/textureCube\s*\(/g, "texture(");
            code = code.replace(/gl_FragDepthEXT/g, "gl_FragDepth");
            code = code.replace(/gl_FragColor/g, "glFragColor");
            code = code.replace(/gl_FragData/g, "glFragData");
            code = code.replace(/gl_FragCoord/g, "glFragCoord__");
            code = code.replace(/void\s+?main\s*\(/g, (hasDrawBuffersExtension ? "" : "layout(location = 0) out vec4 glFragColor;\n") + "void main(");
            code = code.replace(/dFdy/g, "(-yFactor__)*dFdy");
            code = code.replace("##INJECTCODE##", injectCode);
            if (hasFragCoord) {
                code = this._injectStartingAndEndingCode(code, "void main", fragCoordCode);
            }
        }
        else {
            code = code.replace(/gl_InstanceID/g, "gl_InstanceIndex");
            code = code.replace(/gl_VertexID/g, "gl_VertexIndex");
            var hasMultiviewExtension = defines.indexOf("#define MULTIVIEW") !== -1;
            if (hasMultiviewExtension) {
                return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + code;
            }
        }
        if (!isFragment) {
            const lastClosingCurly = code.lastIndexOf("}");
            code = code.substring(0, lastClosingCurly);
            code += "gl_Position.y *= yFactor__;\n";
            if (!engine.isNDCHalfZRange) {
                code += "gl_Position.z = (gl_Position.z + gl_Position.w) / 2.0;\n";
            }
            code += "}";
        }
        return code;
    }
    _applyTextureArrayProcessing(code, name) {
        const regex = new RegExp(name + "\\s*\\[(.+)?\\]", "gm");
        let match = regex.exec(code);
        while (match != null) {
            let index = match[1];
            let iindex = +(index);
            if (this._preProcessors && isNaN(iindex)) {
                iindex = +(this._preProcessors[index.trim()]);
            }
            code = code.replace(match[0], name + iindex);
            match = regex.exec(code);
        }
        return code;
    }
    _generateLeftOverUBOCode(name, uniformBufferDescription) {
        let ubo = `layout(set = ${uniformBufferDescription.binding.groupIndex}, binding = ${uniformBufferDescription.binding.bindingIndex}) uniform ${name} {\n    `;
        for (let leftOverUniform of this.webgpuProcessingContext.leftOverUniforms) {
            if (leftOverUniform.length > 0) {
                ubo += `    ${leftOverUniform.type} ${leftOverUniform.name}[${leftOverUniform.length}];\n`;
            }
            else {
                ubo += `    ${leftOverUniform.type} ${leftOverUniform.name};\n`;
            }
        }
        ubo += "};\n\n";
        return ubo;
    }
    finalizeShaders(vertexCode, fragmentCode, processingContext) {
        for (let i = 0; i < this._textureArrayProcessing.length; ++i) {
            const name = this._textureArrayProcessing[i];
            vertexCode = this._applyTextureArrayProcessing(vertexCode, name);
            fragmentCode = this._applyTextureArrayProcessing(fragmentCode, name);
        }
        for (let i = 0; i < this._missingVaryings.length; ++i) {
            const decl = this._missingVaryings[i];
            if (decl && decl.length > 0) {
                fragmentCode = decl + "\n" + fragmentCode;
            }
        }
        const leftOverUBO = this._buildLeftOverUBO();
        vertexCode = leftOverUBO + vertexCode;
        fragmentCode = leftOverUBO + fragmentCode;
        this._collectBindingNames();
        this._preCreateBindGroupEntries();
        this._preProcessors = null;
        return { vertexCode, fragmentCode };
    }
}
const builtInName_vertex_index = "gl_VertexID";
const builtInName_instance_index = "gl_InstanceID";
const builtInName_position = "gl_Position";
const builtInName_position_frag = "gl_FragCoord";
const builtInName_front_facing = "gl_FrontFacing";
const builtInName_frag_depth = "gl_FragDepth";
const builtInName_FragColor = "gl_FragColor";
const leftOverVarName = "uniforms";
const internalsVarName = "internals";
const gpuTextureViewDimensionByWebGPUTextureFunction = {
    "texture_1d": TextureViewDimension.E1d,
    "texture_2d": TextureViewDimension.E2d,
    "texture_2d_array": TextureViewDimension.E2dArray,
    "texture_3d": TextureViewDimension.E3d,
    "texture_cube": TextureViewDimension.Cube,
    "texture_cube_array": TextureViewDimension.CubeArray,
    "texture_multisampled_2d": TextureViewDimension.E2d,
    "texture_depth_2d": TextureViewDimension.E2d,
    "texture_depth_2d_array": TextureViewDimension.E2dArray,
    "texture_depth_cube": TextureViewDimension.Cube,
    "texture_depth_cube_array": TextureViewDimension.CubeArray,
    "texture_depth_multisampled_2d": TextureViewDimension.E2d,
    "texture_storage_1d": TextureViewDimension.E1d,
    "texture_storage_2d": TextureViewDimension.E2d,
    "texture_storage_2d_array": TextureViewDimension.E2dArray,
    "texture_storage_3d": TextureViewDimension.E3d,
    "texture_external": null
};
class WebGPUShaderProcessorWGSL extends WebGPUShaderProcessor {
    constructor() {
        super(...arguments);
        this.shaderLanguage = ShaderLanguage.WGSL;
        this.uniformRegexp = /uniform\s+(\w+)\s*:\s*(.+)\s*;/;
        this.textureRegexp = /var\s+(\w+)\s*:\s*((array<\s*)?(texture_\w+)\s*(<\s*(.+)\s*>)?\s*(,\s*\w+\s*>\s*)?);/;
        this.noPrecision = true;
    }
    _getArraySize(name, uniformType, preProcessors) {
        let length = 0;
        const endArray = uniformType.lastIndexOf(">");
        if (uniformType.indexOf("array") >= 0 && endArray > 0) {
            let startArray = endArray;
            while (startArray > 0 && uniformType.charAt(startArray) !== ' ' && uniformType.charAt(startArray) !== ',') {
                startArray--;
            }
            const lengthInString = uniformType.substring(startArray + 1, endArray);
            length = +(lengthInString);
            if (isNaN(length)) {
                length = +(preProcessors[lengthInString.trim()]);
            }
            while (startArray > 0 && (uniformType.charAt(startArray) === ' ' || uniformType.charAt(startArray) === ',')) {
                startArray--;
            }
            uniformType = uniformType.substring(uniformType.indexOf("<") + 1, startArray + 1);
        }
        return [name, uniformType, length];
    }
    initializeShaders(processingContext) {
        this.webgpuProcessingContext = processingContext;
        this._attributesWGSL = [];
        this._attributesDeclWGSL = [];
        this._attributeNamesWGSL = [];
        this._varyingsWGSL = [];
        this._varyingsDeclWGSL = [];
        this._varyingNamesWGSL = [];
    }
    preProcessShaderCode(code, isFragment) {
        return `[[block]] struct ${WebGPUShaderProcessor.InternalsUBOName} {\nyFactor__: f32;\ntextureOutputHeight__: f32;\n};\nvar<uniform> ${internalsVarName} : ${WebGPUShaderProcessor.InternalsUBOName};\n` + RemoveComments(code);
    }
    varyingProcessor(varying, isFragment, preProcessors, processingContext) {
        const varyingRegex = /\s*varying\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s*:\s*(.+)\s*;/gm;
        const match = varyingRegex.exec(varying);
        if (match !== null) {
            const varyingType = match[2];
            const name = match[1];
            let location;
            if (isFragment) {
                location = this.webgpuProcessingContext.availableVaryings[name];
                if (location === undefined) {
                    Logger.Warn(`Invalid fragment shader: The varying named "${name}" is not declared in the vertex shader! This declaration will be ignored.`);
                }
            }
            else {
                location = this.webgpuProcessingContext.getVaryingNextLocation(varyingType, this._getArraySize(name, varyingType, preProcessors)[2]);
                this.webgpuProcessingContext.availableVaryings[name] = location;
                this._varyingsWGSL.push(`[[location(${location})]] ${name} : ${varyingType};`);
                this._varyingsDeclWGSL.push(`var<private> ${name} : ${varyingType};`);
                this._varyingNamesWGSL.push(name);
            }
            varying = "";
        }
        return varying;
    }
    attributeProcessor(attribute, preProcessors, processingContext) {
        const attribRegex = /\s*attribute\s+(\S+)\s*:\s*(.+)\s*;/gm;
        const match = attribRegex.exec(attribute);
        if (match !== null) {
            const attributeType = match[2];
            const name = match[1];
            const location = this.webgpuProcessingContext.getAttributeNextLocation(attributeType, this._getArraySize(name, attributeType, preProcessors)[2]);
            this.webgpuProcessingContext.availableAttributes[name] = location;
            this.webgpuProcessingContext.orderedAttributes[location] = name;
            this._attributesWGSL.push(`[[location(${location})]] ${name} : ${attributeType};`);
            this._attributesDeclWGSL.push(`var<private> ${name} : ${attributeType};`);
            this._attributeNamesWGSL.push(name);
            attribute = "";
        }
        return attribute;
    }
    uniformProcessor(uniform, isFragment, preProcessors, processingContext) {
        const match = this.uniformRegexp.exec(uniform);
        if (match !== null) {
            let uniformType = match[2];
            let name = match[1];
            this._addUniformToLeftOverUBO(name, uniformType, preProcessors);
            uniform = "";
        }
        return uniform;
    }
    textureProcessor(texture, isFragment, preProcessors, processingContext) {
        const match = this.textureRegexp.exec(texture);
        if (match !== null) {
            const name = match[1];
            const type = match[2];
            const isArrayOfTexture = !!match[3];
            const textureFunc = match[4];
            const isStorageTexture = textureFunc.indexOf("storage") > 0;
            const componentType = match[6];
            const storageTextureFormat = isStorageTexture ? componentType.substring(0, componentType.indexOf(",")).trim() : null;
            let arraySize = isArrayOfTexture ? this._getArraySize(name, type, preProcessors)[2] : 0;
            let textureInfo = this.webgpuProcessingContext.availableTextures[name];
            if (!textureInfo) {
                textureInfo = {
                    isTextureArray: arraySize > 0,
                    isStorageTexture,
                    textures: [],
                    sampleType: TextureSampleType.Float,
                };
                arraySize = arraySize || 1;
                for (let i = 0; i < arraySize; ++i) {
                    textureInfo.textures.push(this.webgpuProcessingContext.getNextFreeUBOBinding());
                }
            }
            else {
                arraySize = textureInfo.textures.length;
            }
            this.webgpuProcessingContext.availableTextures[name] = textureInfo;
            const isDepthTexture = textureFunc.indexOf("depth") > 0;
            const textureDimension = gpuTextureViewDimensionByWebGPUTextureFunction[textureFunc];
            const sampleType = isDepthTexture ? TextureSampleType.Depth :
                componentType === 'u32' ? TextureSampleType.Uint :
                    componentType === 'i32' ? TextureSampleType.Sint : TextureSampleType.Float;
            textureInfo.sampleType = sampleType;
            if (textureDimension === undefined) {
                throw `Can't get the texture dimension corresponding to the texture function "${textureFunc}"!`;
            }
            for (let i = 0; i < arraySize; ++i) {
                const { groupIndex, bindingIndex } = textureInfo.textures[i];
                if (i === 0) {
                    texture = `[[group(${groupIndex}), binding(${bindingIndex})]] ${texture}`;
                }
                this._addTextureBindingDescription(name, textureInfo, i, textureDimension, storageTextureFormat, !isFragment);
            }
        }
        return texture;
    }
    postProcessor(code, defines, isFragment, processingContext, engine) {
        return code;
    }
    finalizeShaders(vertexCode, fragmentCode, processingContext) {
        const fragCoordCode = fragmentCode.indexOf("gl_FragCoord") >= 0 ? `
            if (internals.yFactor__ == 1.) {
                gl_FragCoord.y = internals.textureOutputHeight__ - gl_FragCoord.y;
            }
        ` : "";
        vertexCode = this._processSamplers(vertexCode, true);
        fragmentCode = this._processSamplers(fragmentCode, false);
        vertexCode = this._processCustomBuffers(vertexCode, true);
        fragmentCode = this._processCustomBuffers(fragmentCode, false);
        const leftOverUBO = this._buildLeftOverUBO();
        vertexCode = leftOverUBO + vertexCode;
        fragmentCode = leftOverUBO + fragmentCode;
        vertexCode = vertexCode.replace(/#define /g, "//#define ");
        let varyingsDecl = this._varyingsDeclWGSL.join("\n") + "\n";
        let vertexBuiltinDecl = `var<private> ${builtInName_vertex_index} : u32;\nvar<private> ${builtInName_instance_index} : u32;\nvar<private> ${builtInName_position} : vec4<f32>;\n`;
        let vertexAttributesDecl = this._attributesDeclWGSL.join("\n") + "\n";
        let vertexInputs = "struct VertexInputs {\n  [[builtin(vertex_index)]] vertexIndex : u32;\n  [[builtin(instance_index)]] instanceIndex : u32;\n";
        if (this._attributesWGSL.length > 0) {
            vertexInputs += this._attributesWGSL.join("\n");
        }
        vertexInputs += "\n};\n";
        let vertexFragmentInputs = "struct FragmentInputs {\n  [[builtin(position)]] position : vec4<f32>;\n";
        if (this._varyingsWGSL.length > 0) {
            vertexFragmentInputs += this._varyingsWGSL.join("\n");
        }
        vertexFragmentInputs += "\n};\n";
        vertexCode = vertexBuiltinDecl + vertexInputs + vertexAttributesDecl + vertexFragmentInputs + varyingsDecl + vertexCode;
        let vertexStartingCode = `  var output : FragmentInputs;\n  ${builtInName_vertex_index} = input.vertexIndex;\n  ${builtInName_instance_index} = input.instanceIndex;\n`;
        for (let i = 0; i < this._attributeNamesWGSL.length; ++i) {
            const name = this._attributeNamesWGSL[i];
            vertexStartingCode += `  ${name} = input.${name};\n`;
        }
        let vertexEndingCode = `  output.position = ${builtInName_position};\n  output.position.y = output.position.y * internals.yFactor__;\n`;
        for (let i = 0; i < this._varyingNamesWGSL.length; ++i) {
            const name = this._varyingNamesWGSL[i];
            vertexEndingCode += `  output.${name} = ${name};\n`;
        }
        vertexEndingCode += "  return output;";
        vertexCode = this._injectStartingAndEndingCode(vertexCode, "fn main", vertexStartingCode, vertexEndingCode);
        fragmentCode = fragmentCode.replace(/#define /g, "//#define ");
        fragmentCode = fragmentCode.replace(/dpdy/g, "(-internals.yFactor__)*dpdy");
        let fragmentBuiltinDecl = `var<private> ${builtInName_position_frag} : vec4<f32>;\nvar<private> ${builtInName_front_facing} : bool;\nvar<private> ${builtInName_FragColor} : vec4<f32>;\nvar<private> ${builtInName_frag_depth} : f32;\n`;
        let fragmentFragmentInputs = "struct FragmentInputs {\n  [[builtin(position)]] position : vec4<f32>;\n  [[builtin(front_facing)]] frontFacing : bool;\n";
        if (this._varyingsWGSL.length > 0) {
            fragmentFragmentInputs += this._varyingsWGSL.join("\n");
        }
        fragmentFragmentInputs += "\n};\n";
        let fragmentOutputs = "struct FragmentOutputs {\n  [[location(0)]] color : vec4<f32>;\n";
        let hasFragDepth = false;
        let idx = 0;
        while (!hasFragDepth) {
            idx = fragmentCode.indexOf(builtInName_frag_depth, idx);
            if (idx < 0) {
                break;
            }
            const saveIndex = idx;
            hasFragDepth = true;
            while (idx > 1 && fragmentCode.charAt(idx) !== '\n') {
                if (fragmentCode.charAt(idx) === '/' && fragmentCode.charAt(idx - 1) === '/') {
                    hasFragDepth = false;
                    break;
                }
                idx--;
            }
            idx = saveIndex + builtInName_frag_depth.length;
        }
        if (hasFragDepth) {
            fragmentOutputs += "  [[builtin(frag_depth)]] fragDepth: f32;\n";
        }
        fragmentOutputs += "};\n";
        fragmentCode = fragmentBuiltinDecl + fragmentFragmentInputs + varyingsDecl + fragmentOutputs + fragmentCode;
        let fragmentStartingCode = `  var output : FragmentOutputs;\n  ${builtInName_position_frag} = input.position;\n  ${builtInName_front_facing} = input.frontFacing;\n` + fragCoordCode;
        for (let i = 0; i < this._varyingNamesWGSL.length; ++i) {
            const name = this._varyingNamesWGSL[i];
            fragmentStartingCode += `  ${name} = input.${name};\n`;
        }
        let fragmentEndingCode = `  output.color = ${builtInName_FragColor};\n`;
        if (hasFragDepth) {
            fragmentEndingCode += `  output.fragDepth = ${builtInName_frag_depth};\n`;
        }
        fragmentEndingCode += "  return output;";
        fragmentCode = this._injectStartingAndEndingCode(fragmentCode, "fn main", fragmentStartingCode, fragmentEndingCode);
        this._collectBindingNames();
        this._preCreateBindGroupEntries();
        return { vertexCode, fragmentCode };
    }
    _generateLeftOverUBOCode(name, uniformBufferDescription) {
        let ubo = `[[block]] struct ${name} {\n`;
        for (let leftOverUniform of this.webgpuProcessingContext.leftOverUniforms) {
            const type = leftOverUniform.type.replace(/^(.*?)(<.*>)?$/, "$1");
            const size = WebGPUShaderProcessor.UniformSizes[type];
            if (leftOverUniform.length > 0) {
                if (size <= 2) {
                    ubo += ` [[align(16)]] ${leftOverUniform.name} : [[stride(16)]] array<${leftOverUniform.type}, ${leftOverUniform.length}>;\n`;
                }
                else {
                    ubo += ` ${leftOverUniform.name} : array<${leftOverUniform.type}, ${leftOverUniform.length}>;\n`;
                }
            }
            else {
                ubo += `  ${leftOverUniform.name} : ${leftOverUniform.type};\n`;
            }
        }
        ubo += "};\n";
        ubo += `[[group(${uniformBufferDescription.binding.groupIndex}), binding(${uniformBufferDescription.binding.bindingIndex})]] var<uniform> ${leftOverVarName} : ${name};\n`;
        return ubo;
    }
    _processSamplers(code, isVertex) {
        const samplerRegexp = /var\s+(\w+Sampler)\s*:\s*(sampler|sampler_comparison)\s*;/gm;
        while (true) {
            const match = samplerRegexp.exec(code);
            if (match === null) {
                break;
            }
            const name = match[1];
            const samplerType = match[2];
            const textureName = name.indexOf(WebGPUShaderProcessor.AutoSamplerSuffix) === name.length - WebGPUShaderProcessor.AutoSamplerSuffix.length ? name.substring(0, name.indexOf(WebGPUShaderProcessor.AutoSamplerSuffix)) : null;
            const samplerBindingType = samplerType === "sampler_comparison" ? SamplerBindingType.Comparison : SamplerBindingType.Filtering;
            if (textureName) {
                const textureInfo = this.webgpuProcessingContext.availableTextures[textureName];
                if (textureInfo) {
                    textureInfo.autoBindSampler = true;
                }
            }
            let samplerInfo = this.webgpuProcessingContext.availableSamplers[name];
            if (!samplerInfo) {
                samplerInfo = {
                    binding: this.webgpuProcessingContext.getNextFreeUBOBinding(),
                    type: samplerBindingType,
                };
                this.webgpuProcessingContext.availableSamplers[name] = samplerInfo;
            }
            this._addSamplerBindingDescription(name, samplerInfo, isVertex);
            const part1 = code.substring(0, match.index);
            const insertPart = `[[group(${samplerInfo.binding.groupIndex}), binding(${samplerInfo.binding.bindingIndex})]] `;
            const part2 = code.substring(match.index);
            code = part1 + insertPart + part2;
            samplerRegexp.lastIndex += insertPart.length;
        }
        return code;
    }
    _processCustomBuffers(code, isVertex) {
        const instantiateBufferRegexp = /var<\s*(uniform|storage)\s*(,\s*(read|read_write)\s*)?>\s+(\S+)\s*:\s*(\S+)\s*;/gm;
        while (true) {
            const match = instantiateBufferRegexp.exec(code);
            if (match === null) {
                break;
            }
            let type = match[1];
            let decoration = match[3];
            let name = match[4];
            const structName = match[5];
            let bufferInfo = this.webgpuProcessingContext.availableBuffers[name];
            if (!bufferInfo) {
                const knownUBO = type === "uniform" ? WebGPUShaderProcessingContext.KnownUBOs[structName] : null;
                let binding;
                if (knownUBO) {
                    name = structName;
                    binding = knownUBO.binding;
                    if (binding.groupIndex === -1) {
                        binding = this.webgpuProcessingContext.getNextFreeUBOBinding();
                    }
                }
                else {
                    binding = this.webgpuProcessingContext.getNextFreeUBOBinding();
                }
                bufferInfo = { binding };
                this.webgpuProcessingContext.availableBuffers[name] = bufferInfo;
            }
            this._addBufferBindingDescription(name, this.webgpuProcessingContext.availableBuffers[name], decoration === "read_write" ? BufferBindingType.Storage : type === "storage" ? BufferBindingType.ReadOnlyStorage : BufferBindingType.Uniform, isVertex);
            const groupIndex = bufferInfo.binding.groupIndex;
            const bindingIndex = bufferInfo.binding.bindingIndex;
            const part1 = code.substring(0, match.index);
            const insertPart = `[[group(${groupIndex}), binding(${bindingIndex})]] `;
            const part2 = code.substring(match.index);
            code = part1 + insertPart + part2;
            instantiateBufferRegexp.lastIndex += insertPart.length;
        }
        return code;
    }
}
class WebGPUHardwareTexture {
    constructor(existingTexture = null) {
        this.format = TextureFormat.RGBA8Unorm;
        this.textureUsages = 0;
        this.textureAdditionalUsages = 0;
        this._webgpuTexture = existingTexture;
        this._webgpuMSAATexture = null;
        this.view = null;
        this.viewForWriting = null;
    }
    get underlyingResource() {
        return this._webgpuTexture;
    }
    get msaaTexture() {
        return this._webgpuMSAATexture;
    }
    set msaaTexture(texture) {
        this._webgpuMSAATexture = texture;
    }
    set(hardwareTexture) {
        this._webgpuTexture = hardwareTexture;
    }
    setMSAATexture(hardwareTexture) {
        this._webgpuMSAATexture = hardwareTexture;
    }
    setUsage(textureSource, generateMipMaps, isCube, width, height) {
        generateMipMaps = textureSource === InternalTextureSource.RenderTarget ? false : generateMipMaps;
        this.createView({
            format: this.format,
            dimension: isCube ? TextureViewDimension.Cube : TextureViewDimension.E2d,
            mipLevelCount: generateMipMaps ? Scalar.ILog2(Math.max(width, height)) + 1 : 1,
            baseArrayLayer: 0,
            baseMipLevel: 0,
            arrayLayerCount: isCube ? 6 : 1,
            aspect: TextureAspect.All
        });
    }
    createView(descriptor, createViewForWriting = false) {
        this.view = this._webgpuTexture.createView(descriptor);
        if (createViewForWriting && descriptor) {
            const saveNumMipMaps = descriptor.mipLevelCount;
            descriptor.mipLevelCount = 1;
            this.viewForWriting = this._webgpuTexture.createView(descriptor);
            descriptor.mipLevelCount = saveNumMipMaps;
        }
    }
    reset() {
        this._webgpuTexture = null;
        this._webgpuMSAATexture = null;
        this.view = null;
        this.viewForWriting = null;
    }
    release() {
        var _a, _b, _c;
        (_a = this._webgpuTexture) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this._webgpuMSAATexture) === null || _b === void 0 ? void 0 : _b.destroy();
        (_c = this._copyInvertYTempTexture) === null || _c === void 0 ? void 0 : _c.destroy();
        this.reset();
    }
}
const mipmapVertexSource = `
    const vec2 pos[4] = vec2[4](vec2(-1.0f, 1.0f), vec2(1.0f, 1.0f), vec2(-1.0f, -1.0f), vec2(1.0f, -1.0f));
    const vec2 tex[4] = vec2[4](vec2(0.0f, 0.0f), vec2(1.0f, 0.0f), vec2(0.0f, 1.0f), vec2(1.0f, 1.0f));

    layout(location = 0) out vec2 vTex;

    void main() {
        vTex = tex[gl_VertexIndex];
        gl_Position = vec4(pos[gl_VertexIndex], 0.0, 1.0);
    }
    `;
const mipmapFragmentSource = `
    layout(set = 0, binding = 0) uniform sampler imgSampler;
    layout(set = 0, binding = 1) uniform texture2D img;

    layout(location = 0) in vec2 vTex;
    layout(location = 0) out vec4 outColor;

    void main() {
        outColor = texture(sampler2D(img, imgSampler), vTex);
    }
    `;
const invertYPreMultiplyAlphaVertexSource = `
    #extension GL_EXT_samplerless_texture_functions : enable

    const vec2 pos[4] = vec2[4](vec2(-1.0f, 1.0f), vec2(1.0f, 1.0f), vec2(-1.0f, -1.0f), vec2(1.0f, -1.0f));
    const vec2 tex[4] = vec2[4](vec2(0.0f, 0.0f), vec2(1.0f, 0.0f), vec2(0.0f, 1.0f), vec2(1.0f, 1.0f));

    layout(set = 0, binding = 0) uniform texture2D img;

    #ifdef INVERTY
        layout(location = 0) out flat ivec2 vTextureSize;
    #endif

    void main() {
        #ifdef INVERTY
            vTextureSize = textureSize(img, 0);
        #endif
        gl_Position = vec4(pos[gl_VertexIndex], 0.0, 1.0);
    }
    `;
const invertYPreMultiplyAlphaFragmentSource = `
    #extension GL_EXT_samplerless_texture_functions : enable

    layout(set = 0, binding = 0) uniform texture2D img;

    #ifdef INVERTY
        layout(location = 0) in flat ivec2 vTextureSize;
    #endif
    layout(location = 0) out vec4 outColor;

    void main() {
    #ifdef INVERTY
        vec4 color = texelFetch(img, ivec2(gl_FragCoord.x, vTextureSize.y - gl_FragCoord.y), 0);
    #else
        vec4 color = texelFetch(img, ivec2(gl_FragCoord.xy), 0);
    #endif
    #ifdef PREMULTIPLYALPHA
        color.rgb *= color.a;
    #endif
        outColor = color;
    }
    `;
const clearVertexSource = `
    const vec2 pos[4] = vec2[4](vec2(-1.0f, 1.0f), vec2(1.0f, 1.0f), vec2(-1.0f, -1.0f), vec2(1.0f, -1.0f));

    void main() {
        gl_Position = vec4(pos[gl_VertexIndex], 0.0, 1.0);
    }
    `;
const clearFragmentSource = `
    layout(set = 0, binding = 0) uniform Uniforms {
        uniform vec4 color;
    };

    layout(location = 0) out vec4 outColor;

    void main() {
        outColor = color;
    }
    `;
var PipelineType;
(function (PipelineType) {
    PipelineType[PipelineType["MipMap"] = 0] = "MipMap";
    PipelineType[PipelineType["InvertYPremultiplyAlpha"] = 1] = "InvertYPremultiplyAlpha";
    PipelineType[PipelineType["Clear"] = 2] = "Clear";
})(PipelineType || (PipelineType = {}));
const shadersForPipelineType = [
    { vertex: mipmapVertexSource, fragment: mipmapFragmentSource },
    { vertex: invertYPreMultiplyAlphaVertexSource, fragment: invertYPreMultiplyAlphaFragmentSource },
    { vertex: clearVertexSource, fragment: clearFragmentSource },
];
class WebGPUTextureHelper {
    constructor(device, glslang, tintWASM, bufferManager) {
        this._pipelines = {};
        this._compiledShaders = [];
        this._deferredReleaseTextures = [];
        this._device = device;
        this._glslang = glslang;
        this._tintWASM = tintWASM;
        this._bufferManager = bufferManager;
        this._mipmapSampler = device.createSampler({ minFilter: FilterMode.Linear });
        this._getPipeline(TextureFormat.RGBA8Unorm);
    }
    static ComputeNumMipmapLevels(width, height) {
        return Scalar.ILog2(Math.max(width, height)) + 1;
    }
    _getPipeline(format, type = PipelineType.MipMap, params) {
        const index = type === PipelineType.MipMap ? 1 << 0 :
            type === PipelineType.InvertYPremultiplyAlpha ? ((params.invertY ? 1 : 0) << 1) + ((params.premultiplyAlpha ? 1 : 0) << 2) :
                type === PipelineType.Clear ? 1 << 3 : 0;
        if (!this._pipelines[format]) {
            this._pipelines[format] = [];
        }
        let pipelineAndBGL = this._pipelines[format][index];
        if (!pipelineAndBGL) {
            let defines = "#version 450\r\n";
            if (type === PipelineType.InvertYPremultiplyAlpha) {
                if (params.invertY) {
                    defines += "#define INVERTY\r\n";
                }
                if (params.premultiplyAlpha) {
                    defines += "#define PREMULTIPLYALPHA\r\n";
                }
            }
            let modules = this._compiledShaders[index];
            if (!modules) {
                let vertexCode = this._glslang.compileGLSL(defines + shadersForPipelineType[type].vertex, 'vertex');
                let fragmentCode = this._glslang.compileGLSL(defines + shadersForPipelineType[type].fragment, 'fragment');
                if (this._tintWASM) {
                    vertexCode = this._tintWASM.convertSpirV2WGSL(vertexCode);
                    fragmentCode = this._tintWASM.convertSpirV2WGSL(fragmentCode);
                }
                const vertexModule = this._device.createShaderModule({
                    code: vertexCode
                });
                const fragmentModule = this._device.createShaderModule({
                    code: fragmentCode
                });
                modules = this._compiledShaders[index] = [vertexModule, fragmentModule];
            }
            const pipeline = this._device.createRenderPipeline({
                vertex: {
                    module: modules[0],
                    entryPoint: 'main',
                },
                fragment: {
                    module: modules[1],
                    entryPoint: 'main',
                    targets: [{
                            format,
                        }],
                },
                primitive: {
                    topology: PrimitiveTopology.TriangleStrip,
                    stripIndexFormat: IndexFormat.Uint16,
                },
            });
            pipelineAndBGL = this._pipelines[format][index] = [pipeline, pipeline.getBindGroupLayout(0)];
        }
        return pipelineAndBGL;
    }
    static _GetTextureTypeFromFormat(format) {
        switch (format) {
            case TextureFormat.R8Unorm:
            case TextureFormat.R8Snorm:
            case TextureFormat.R8Uint:
            case TextureFormat.R8Sint:
            case TextureFormat.RG8Unorm:
            case TextureFormat.RG8Snorm:
            case TextureFormat.RG8Uint:
            case TextureFormat.RG8Sint:
            case TextureFormat.RGBA8Unorm:
            case TextureFormat.RGBA8UnormSRGB:
            case TextureFormat.RGBA8Snorm:
            case TextureFormat.RGBA8Uint:
            case TextureFormat.RGBA8Sint:
            case TextureFormat.BGRA8Unorm:
            case TextureFormat.BGRA8UnormSRGB:
            case TextureFormat.RGB10A2Unorm:
            case TextureFormat.RGB9E5UFloat:
            case TextureFormat.RG11B10UFloat:
            case TextureFormat.Depth24UnormStencil8:
            case TextureFormat.Depth32FloatStencil8:
            case TextureFormat.BC7RGBAUnorm:
            case TextureFormat.BC7RGBAUnormSRGB:
            case TextureFormat.BC6HRGBUFloat:
            case TextureFormat.BC6HRGBFloat:
            case TextureFormat.BC5RGUnorm:
            case TextureFormat.BC5RGSnorm:
            case TextureFormat.BC3RGBAUnorm:
            case TextureFormat.BC3RGBAUnormSRGB:
            case TextureFormat.BC2RGBAUnorm:
            case TextureFormat.BC2RGBAUnormSRGB:
            case TextureFormat.BC4RUnorm:
            case TextureFormat.BC4RSnorm:
            case TextureFormat.BC1RGBAUnorm:
            case TextureFormat.BC1RGBAUnormSRGB:
            case TextureFormat.ETC2RGB8Unorm:
            case TextureFormat.ETC2RGB8UnormSRGB:
            case TextureFormat.ETC2RGB8A1Unorm:
            case TextureFormat.ETC2RGB8A1UnormSRGB:
            case TextureFormat.ETC2RGBA8Unorm:
            case TextureFormat.ETC2RGBA8UnormSRGB:
            case TextureFormat.EACR11Unorm:
            case TextureFormat.EACR11Snorm:
            case TextureFormat.EACRG11Unorm:
            case TextureFormat.EACRG11Snorm:
            case TextureFormat.ASTC4x4Unorm:
            case TextureFormat.ASTC4x4UnormSRGB:
            case TextureFormat.ASTC5x4Unorm:
            case TextureFormat.ASTC5x4UnormSRGB:
            case TextureFormat.ASTC5x5Unorm:
            case TextureFormat.ASTC5x5UnormSRGB:
            case TextureFormat.ASTC6x5Unorm:
            case TextureFormat.ASTC6x5UnormSRGB:
            case TextureFormat.ASTC6x6Unorm:
            case TextureFormat.ASTC6x6UnormSRGB:
            case TextureFormat.ASTC8x5Unorm:
            case TextureFormat.ASTC8x5UnormSRGB:
            case TextureFormat.ASTC8x6Unorm:
            case TextureFormat.ASTC8x6UnormSRGB:
            case TextureFormat.ASTC8x8Unorm:
            case TextureFormat.ASTC8x8UnormSRGB:
            case TextureFormat.ASTC10x5Unorm:
            case TextureFormat.ASTC10x5UnormSRGB:
            case TextureFormat.ASTC10x6Unorm:
            case TextureFormat.ASTC10x6UnormSRGB:
            case TextureFormat.ASTC10x8Unorm:
            case TextureFormat.ASTC10x8UnormSRGB:
            case TextureFormat.ASTC10x10Unorm:
            case TextureFormat.ASTC10x10UnormSRGB:
            case TextureFormat.ASTC12x10Unorm:
            case TextureFormat.ASTC12x10UnormSRGB:
            case TextureFormat.ASTC12x12Unorm:
            case TextureFormat.ASTC12x12UnormSRGB:
                return Constants.TEXTURETYPE_UNSIGNED_BYTE;
            case TextureFormat.R16Uint:
            case TextureFormat.R16Sint:
            case TextureFormat.RG16Uint:
            case TextureFormat.RG16Sint:
            case TextureFormat.RGBA16Uint:
            case TextureFormat.RGBA16Sint:
            case TextureFormat.Depth16Unorm:
                return Constants.TEXTURETYPE_UNSIGNED_SHORT;
            case TextureFormat.R16Float:
            case TextureFormat.RG16Float:
            case TextureFormat.RGBA16Float:
                return Constants.TEXTURETYPE_HALF_FLOAT;
            case TextureFormat.R32Uint:
            case TextureFormat.R32Sint:
            case TextureFormat.RG32Uint:
            case TextureFormat.RG32Sint:
            case TextureFormat.RGBA32Uint:
            case TextureFormat.RGBA32Sint:
                return Constants.TEXTURETYPE_UNSIGNED_INTEGER;
            case TextureFormat.R32Float:
            case TextureFormat.RG32Float:
            case TextureFormat.RGBA32Float:
            case TextureFormat.Depth32Float:
                return Constants.TEXTURETYPE_FLOAT;
            case TextureFormat.Stencil8:
                throw "No fixed size for Stencil8 format!";
            case TextureFormat.Depth24Plus:
                throw "No fixed size for Depth24Plus format!";
            case TextureFormat.Depth24PlusStencil8:
                throw "No fixed size for Depth24PlusStencil8 format!";
        }
        return Constants.TEXTURETYPE_UNSIGNED_BYTE;
    }
    static _GetBlockInformationFromFormat(format) {
        switch (format) {
            case TextureFormat.R8Unorm:
            case TextureFormat.R8Snorm:
            case TextureFormat.R8Uint:
            case TextureFormat.R8Sint:
                return { width: 1, height: 1, length: 1 };
            case TextureFormat.R16Uint:
            case TextureFormat.R16Sint:
            case TextureFormat.R16Float:
            case TextureFormat.RG8Unorm:
            case TextureFormat.RG8Snorm:
            case TextureFormat.RG8Uint:
            case TextureFormat.RG8Sint:
                return { width: 1, height: 1, length: 2 };
            case TextureFormat.R32Uint:
            case TextureFormat.R32Sint:
            case TextureFormat.R32Float:
            case TextureFormat.RG16Uint:
            case TextureFormat.RG16Sint:
            case TextureFormat.RG16Float:
            case TextureFormat.RGBA8Unorm:
            case TextureFormat.RGBA8UnormSRGB:
            case TextureFormat.RGBA8Snorm:
            case TextureFormat.RGBA8Uint:
            case TextureFormat.RGBA8Sint:
            case TextureFormat.BGRA8Unorm:
            case TextureFormat.BGRA8UnormSRGB:
            case TextureFormat.RGB9E5UFloat:
            case TextureFormat.RGB10A2Unorm:
            case TextureFormat.RG11B10UFloat:
                return { width: 1, height: 1, length: 4 };
            case TextureFormat.RG32Uint:
            case TextureFormat.RG32Sint:
            case TextureFormat.RG32Float:
            case TextureFormat.RGBA16Uint:
            case TextureFormat.RGBA16Sint:
            case TextureFormat.RGBA16Float:
                return { width: 1, height: 1, length: 8 };
            case TextureFormat.RGBA32Uint:
            case TextureFormat.RGBA32Sint:
            case TextureFormat.RGBA32Float:
                return { width: 1, height: 1, length: 16 };
            case TextureFormat.Stencil8:
                throw "No fixed size for Stencil8 format!";
            case TextureFormat.Depth16Unorm:
                return { width: 1, height: 1, length: 2 };
            case TextureFormat.Depth24Plus:
                throw "No fixed size for Depth24Plus format!";
            case TextureFormat.Depth24PlusStencil8:
                throw "No fixed size for Depth24PlusStencil8 format!";
            case TextureFormat.Depth32Float:
                return { width: 1, height: 1, length: 4 };
            case TextureFormat.Depth24UnormStencil8:
                return { width: 1, height: 1, length: 4 };
            case TextureFormat.Depth32FloatStencil8:
                return { width: 1, height: 1, length: 5 };
            case TextureFormat.BC7RGBAUnorm:
            case TextureFormat.BC7RGBAUnormSRGB:
            case TextureFormat.BC6HRGBUFloat:
            case TextureFormat.BC6HRGBFloat:
            case TextureFormat.BC5RGUnorm:
            case TextureFormat.BC5RGSnorm:
            case TextureFormat.BC3RGBAUnorm:
            case TextureFormat.BC3RGBAUnormSRGB:
            case TextureFormat.BC2RGBAUnorm:
            case TextureFormat.BC2RGBAUnormSRGB:
                return { width: 4, height: 4, length: 16 };
            case TextureFormat.BC4RUnorm:
            case TextureFormat.BC4RSnorm:
            case TextureFormat.BC1RGBAUnorm:
            case TextureFormat.BC1RGBAUnormSRGB:
                return { width: 4, height: 4, length: 8 };
            case TextureFormat.ETC2RGB8Unorm:
            case TextureFormat.ETC2RGB8UnormSRGB:
            case TextureFormat.ETC2RGB8A1Unorm:
            case TextureFormat.ETC2RGB8A1UnormSRGB:
            case TextureFormat.EACR11Unorm:
            case TextureFormat.EACR11Snorm:
                return { width: 4, height: 4, length: 8 };
            case TextureFormat.ETC2RGBA8Unorm:
            case TextureFormat.ETC2RGBA8UnormSRGB:
            case TextureFormat.EACRG11Unorm:
            case TextureFormat.EACRG11Snorm:
                return { width: 4, height: 4, length: 16 };
            case TextureFormat.ASTC4x4Unorm:
            case TextureFormat.ASTC4x4UnormSRGB:
                return { width: 4, height: 4, length: 16 };
            case TextureFormat.ASTC5x4Unorm:
            case TextureFormat.ASTC5x4UnormSRGB:
                return { width: 5, height: 4, length: 16 };
            case TextureFormat.ASTC5x5Unorm:
            case TextureFormat.ASTC5x5UnormSRGB:
                return { width: 5, height: 5, length: 16 };
            case TextureFormat.ASTC6x5Unorm:
            case TextureFormat.ASTC6x5UnormSRGB:
                return { width: 6, height: 5, length: 16 };
            case TextureFormat.ASTC6x6Unorm:
            case TextureFormat.ASTC6x6UnormSRGB:
                return { width: 6, height: 6, length: 16 };
            case TextureFormat.ASTC8x5Unorm:
            case TextureFormat.ASTC8x5UnormSRGB:
                return { width: 8, height: 5, length: 16 };
            case TextureFormat.ASTC8x6Unorm:
            case TextureFormat.ASTC8x6UnormSRGB:
                return { width: 8, height: 6, length: 16 };
            case TextureFormat.ASTC8x8Unorm:
            case TextureFormat.ASTC8x8UnormSRGB:
                return { width: 8, height: 8, length: 16 };
            case TextureFormat.ASTC10x5Unorm:
            case TextureFormat.ASTC10x5UnormSRGB:
                return { width: 10, height: 5, length: 16 };
            case TextureFormat.ASTC10x6Unorm:
            case TextureFormat.ASTC10x6UnormSRGB:
                return { width: 10, height: 6, length: 16 };
            case TextureFormat.ASTC10x8Unorm:
            case TextureFormat.ASTC10x8UnormSRGB:
                return { width: 10, height: 8, length: 16 };
            case TextureFormat.ASTC10x10Unorm:
            case TextureFormat.ASTC10x10UnormSRGB:
                return { width: 10, height: 10, length: 16 };
            case TextureFormat.ASTC12x10Unorm:
            case TextureFormat.ASTC12x10UnormSRGB:
                return { width: 12, height: 10, length: 16 };
            case TextureFormat.ASTC12x12Unorm:
            case TextureFormat.ASTC12x12UnormSRGB:
                return { width: 12, height: 12, length: 16 };
        }
        return { width: 1, height: 1, length: 4 };
    }
    static _IsHardwareTexture(texture) {
        return !!texture.release;
    }
    static _IsInternalTexture(texture) {
        return !!texture.dispose;
    }
    static GetCompareFunction(compareFunction) {
        switch (compareFunction) {
            case Constants.ALWAYS:
                return CompareFunction.Always;
            case Constants.EQUAL:
                return CompareFunction.Equal;
            case Constants.GREATER:
                return CompareFunction.Greater;
            case Constants.GEQUAL:
                return CompareFunction.GreaterEqual;
            case Constants.LESS:
                return CompareFunction.Less;
            case Constants.LEQUAL:
                return CompareFunction.LessEqual;
            case Constants.NEVER:
                return CompareFunction.Never;
            case Constants.NOTEQUAL:
                return CompareFunction.NotEqual;
            default:
                return CompareFunction.Less;
        }
    }
    static IsImageBitmap(imageBitmap) {
        return imageBitmap.close !== undefined;
    }
    static IsImageBitmapArray(imageBitmap) {
        return Array.isArray(imageBitmap) && imageBitmap[0].close !== undefined;
    }
    setCommandEncoder(encoder) {
        this._commandEncoderForCreation = encoder;
    }
    static IsCompressedFormat(format) {
        switch (format) {
            case TextureFormat.BC7RGBAUnormSRGB:
            case TextureFormat.BC7RGBAUnorm:
            case TextureFormat.BC6HRGBFloat:
            case TextureFormat.BC6HRGBUFloat:
            case TextureFormat.BC5RGSnorm:
            case TextureFormat.BC5RGUnorm:
            case TextureFormat.BC4RSnorm:
            case TextureFormat.BC4RUnorm:
            case TextureFormat.BC3RGBAUnormSRGB:
            case TextureFormat.BC3RGBAUnorm:
            case TextureFormat.BC2RGBAUnormSRGB:
            case TextureFormat.BC2RGBAUnorm:
            case TextureFormat.BC1RGBAUnormSRGB:
            case TextureFormat.BC1RGBAUnorm:
            case TextureFormat.ETC2RGB8Unorm:
            case TextureFormat.ETC2RGB8UnormSRGB:
            case TextureFormat.ETC2RGB8A1Unorm:
            case TextureFormat.ETC2RGB8A1UnormSRGB:
            case TextureFormat.ETC2RGBA8Unorm:
            case TextureFormat.ETC2RGBA8UnormSRGB:
            case TextureFormat.EACR11Unorm:
            case TextureFormat.EACR11Snorm:
            case TextureFormat.EACRG11Unorm:
            case TextureFormat.EACRG11Snorm:
            case TextureFormat.ASTC4x4Unorm:
            case TextureFormat.ASTC4x4UnormSRGB:
            case TextureFormat.ASTC5x4Unorm:
            case TextureFormat.ASTC5x4UnormSRGB:
            case TextureFormat.ASTC5x5Unorm:
            case TextureFormat.ASTC5x5UnormSRGB:
            case TextureFormat.ASTC6x5Unorm:
            case TextureFormat.ASTC6x5UnormSRGB:
            case TextureFormat.ASTC6x6Unorm:
            case TextureFormat.ASTC6x6UnormSRGB:
            case TextureFormat.ASTC8x5Unorm:
            case TextureFormat.ASTC8x5UnormSRGB:
            case TextureFormat.ASTC8x6Unorm:
            case TextureFormat.ASTC8x6UnormSRGB:
            case TextureFormat.ASTC8x8Unorm:
            case TextureFormat.ASTC8x8UnormSRGB:
            case TextureFormat.ASTC10x5Unorm:
            case TextureFormat.ASTC10x5UnormSRGB:
            case TextureFormat.ASTC10x6Unorm:
            case TextureFormat.ASTC10x6UnormSRGB:
            case TextureFormat.ASTC10x8Unorm:
            case TextureFormat.ASTC10x8UnormSRGB:
            case TextureFormat.ASTC10x10Unorm:
            case TextureFormat.ASTC10x10UnormSRGB:
            case TextureFormat.ASTC12x10Unorm:
            case TextureFormat.ASTC12x10UnormSRGB:
            case TextureFormat.ASTC12x12Unorm:
            case TextureFormat.ASTC12x12UnormSRGB:
                return true;
        }
        return false;
    }
    static GetWebGPUTextureFormat(type, format, useSRGBBuffer = false) {
        switch (format) {
            case Constants.TEXTUREFORMAT_DEPTH16:
                return TextureFormat.Depth16Unorm;
            case Constants.TEXTUREFORMAT_DEPTH24_STENCIL8:
                return TextureFormat.Depth24PlusStencil8;
            case Constants.TEXTUREFORMAT_DEPTH32_FLOAT:
                return TextureFormat.Depth32Float;
            case Constants.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM:
                return useSRGBBuffer ? TextureFormat.BC7RGBAUnormSRGB : TextureFormat.BC7RGBAUnorm;
            case Constants.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT:
                return TextureFormat.BC6HRGBUFloat;
            case Constants.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT:
                return TextureFormat.BC6HRGBFloat;
            case Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5:
                return useSRGBBuffer ? TextureFormat.BC3RGBAUnormSRGB : TextureFormat.BC3RGBAUnorm;
            case Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3:
                return useSRGBBuffer ? TextureFormat.BC2RGBAUnormSRGB : TextureFormat.BC2RGBAUnorm;
            case Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1:
            case Constants.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1:
                return useSRGBBuffer ? TextureFormat.BC1RGBAUnormSRGB : TextureFormat.BC1RGBAUnorm;
            case Constants.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4:
                return useSRGBBuffer ? TextureFormat.ASTC4x4UnormSRGB : TextureFormat.ASTC4x4Unorm;
            case Constants.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL:
                return useSRGBBuffer ? TextureFormat.ETC2RGB8UnormSRGB : TextureFormat.ETC2RGB8Unorm;
        }
        switch (type) {
            case Constants.TEXTURETYPE_BYTE:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED:
                        return TextureFormat.R8Snorm;
                    case Constants.TEXTUREFORMAT_RG:
                        return TextureFormat.RG8Snorm;
                    case Constants.TEXTUREFORMAT_RGB:
                        throw "RGB format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return TextureFormat.R8Sint;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return TextureFormat.RG8Sint;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        throw "RGB_INTEGER format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return TextureFormat.RGBA8Sint;
                    default:
                        return TextureFormat.RGBA8Snorm;
                }
            case Constants.TEXTURETYPE_UNSIGNED_BYTE:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED:
                        return TextureFormat.R8Unorm;
                    case Constants.TEXTUREFORMAT_RG:
                        return TextureFormat.RG8Unorm;
                    case Constants.TEXTUREFORMAT_RGB:
                        throw "TEXTUREFORMAT_RGB format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_RGBA:
                        return useSRGBBuffer ? TextureFormat.RGBA8UnormSRGB : TextureFormat.RGBA8Unorm;
                    case Constants.TEXTUREFORMAT_BGRA:
                        return useSRGBBuffer ? TextureFormat.BGRA8UnormSRGB : TextureFormat.BGRA8Unorm;
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return TextureFormat.R8Uint;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return TextureFormat.RG8Uint;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        throw "RGB_INTEGER format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return TextureFormat.RGBA8Uint;
                    case Constants.TEXTUREFORMAT_ALPHA:
                        throw "TEXTUREFORMAT_ALPHA format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_LUMINANCE:
                        throw "TEXTUREFORMAT_LUMINANCE format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_LUMINANCE_ALPHA:
                        throw "TEXTUREFORMAT_LUMINANCE_ALPHA format not supported in WebGPU";
                    default:
                        return TextureFormat.RGBA8Unorm;
                }
            case Constants.TEXTURETYPE_SHORT:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return TextureFormat.R16Sint;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return TextureFormat.RG16Sint;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        throw "TEXTUREFORMAT_RGB_INTEGER format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return TextureFormat.RGBA16Sint;
                    default:
                        return TextureFormat.RGBA16Sint;
                }
            case Constants.TEXTURETYPE_UNSIGNED_SHORT:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return TextureFormat.R16Uint;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return TextureFormat.RG16Uint;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        throw "TEXTUREFORMAT_RGB_INTEGER format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return TextureFormat.RGBA16Uint;
                    default:
                        return TextureFormat.RGBA16Uint;
                }
            case Constants.TEXTURETYPE_INT:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return TextureFormat.R32Sint;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return TextureFormat.RG32Sint;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        throw "TEXTUREFORMAT_RGB_INTEGER format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return TextureFormat.RGBA32Sint;
                    default:
                        return TextureFormat.RGBA32Sint;
                }
            case Constants.TEXTURETYPE_UNSIGNED_INTEGER:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED_INTEGER:
                        return TextureFormat.R32Uint;
                    case Constants.TEXTUREFORMAT_RG_INTEGER:
                        return TextureFormat.RG32Uint;
                    case Constants.TEXTUREFORMAT_RGB_INTEGER:
                        throw "TEXTUREFORMAT_RGB_INTEGER format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        return TextureFormat.RGBA32Uint;
                    default:
                        return TextureFormat.RGBA32Uint;
                }
            case Constants.TEXTURETYPE_FLOAT:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED:
                        return TextureFormat.R32Float;
                    case Constants.TEXTUREFORMAT_RG:
                        return TextureFormat.RG32Float;
                    case Constants.TEXTUREFORMAT_RGB:
                        throw "TEXTUREFORMAT_RGB format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_RGBA:
                        return TextureFormat.RGBA32Float;
                    default:
                        return TextureFormat.RGBA32Float;
                }
            case Constants.TEXTURETYPE_HALF_FLOAT:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RED:
                        return TextureFormat.R16Float;
                    case Constants.TEXTUREFORMAT_RG:
                        return TextureFormat.RG16Float;
                    case Constants.TEXTUREFORMAT_RGB:
                        throw "TEXTUREFORMAT_RGB format not supported in WebGPU";
                    case Constants.TEXTUREFORMAT_RGBA:
                        return TextureFormat.RGBA16Float;
                    default:
                        return TextureFormat.RGBA16Float;
                }
            case Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5:
                throw "TEXTURETYPE_UNSIGNED_SHORT_5_6_5 format not supported in WebGPU";
            case Constants.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV:
                throw "TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV format not supported in WebGPU";
            case Constants.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV:
                throw "TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV format not supported in WebGPU";
            case Constants.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4:
                throw "TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 format not supported in WebGPU";
            case Constants.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1:
                throw "TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 format not supported in WebGPU";
            case Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV:
                switch (format) {
                    case Constants.TEXTUREFORMAT_RGBA:
                        return TextureFormat.RGB10A2Unorm;
                    case Constants.TEXTUREFORMAT_RGBA_INTEGER:
                        throw "TEXTUREFORMAT_RGBA_INTEGER format not supported in WebGPU when type is TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV";
                    default:
                        return TextureFormat.RGB10A2Unorm;
                }
        }
        return useSRGBBuffer ? TextureFormat.RGBA8UnormSRGB : TextureFormat.RGBA8Unorm;
    }
    static GetNumChannelsFromWebGPUTextureFormat(format) {
        switch (format) {
            case TextureFormat.R8Unorm:
            case TextureFormat.R8Snorm:
            case TextureFormat.R8Uint:
            case TextureFormat.R8Sint:
            case TextureFormat.BC4RUnorm:
            case TextureFormat.BC4RSnorm:
            case TextureFormat.R16Uint:
            case TextureFormat.R16Sint:
            case TextureFormat.Depth16Unorm:
            case TextureFormat.R16Float:
            case TextureFormat.R32Uint:
            case TextureFormat.R32Sint:
            case TextureFormat.R32Float:
            case TextureFormat.Depth32Float:
            case TextureFormat.Stencil8:
            case TextureFormat.Depth24Plus:
            case TextureFormat.EACR11Unorm:
            case TextureFormat.EACR11Snorm:
                return 1;
            case TextureFormat.RG8Unorm:
            case TextureFormat.RG8Snorm:
            case TextureFormat.RG8Uint:
            case TextureFormat.RG8Sint:
            case TextureFormat.Depth24UnormStencil8:
            case TextureFormat.Depth32FloatStencil8:
            case TextureFormat.BC5RGUnorm:
            case TextureFormat.BC5RGSnorm:
            case TextureFormat.RG16Uint:
            case TextureFormat.RG16Sint:
            case TextureFormat.RG16Float:
            case TextureFormat.RG32Uint:
            case TextureFormat.RG32Sint:
            case TextureFormat.RG32Float:
            case TextureFormat.Depth24PlusStencil8:
            case TextureFormat.EACRG11Unorm:
            case TextureFormat.EACRG11Snorm:
                return 2;
            case TextureFormat.RGB9E5UFloat:
            case TextureFormat.RG11B10UFloat:
            case TextureFormat.BC6HRGBUFloat:
            case TextureFormat.BC6HRGBFloat:
            case TextureFormat.ETC2RGB8Unorm:
            case TextureFormat.ETC2RGB8UnormSRGB:
                return 3;
            case TextureFormat.RGBA8Unorm:
            case TextureFormat.RGBA8UnormSRGB:
            case TextureFormat.RGBA8Snorm:
            case TextureFormat.RGBA8Uint:
            case TextureFormat.RGBA8Sint:
            case TextureFormat.BGRA8Unorm:
            case TextureFormat.BGRA8UnormSRGB:
            case TextureFormat.RGB10A2Unorm:
            case TextureFormat.BC7RGBAUnorm:
            case TextureFormat.BC7RGBAUnormSRGB:
            case TextureFormat.BC3RGBAUnorm:
            case TextureFormat.BC3RGBAUnormSRGB:
            case TextureFormat.BC2RGBAUnorm:
            case TextureFormat.BC2RGBAUnormSRGB:
            case TextureFormat.BC1RGBAUnorm:
            case TextureFormat.BC1RGBAUnormSRGB:
            case TextureFormat.RGBA16Uint:
            case TextureFormat.RGBA16Sint:
            case TextureFormat.RGBA16Float:
            case TextureFormat.RGBA32Uint:
            case TextureFormat.RGBA32Sint:
            case TextureFormat.RGBA32Float:
            case TextureFormat.ETC2RGB8A1Unorm:
            case TextureFormat.ETC2RGB8A1UnormSRGB:
            case TextureFormat.ETC2RGBA8Unorm:
            case TextureFormat.ETC2RGBA8UnormSRGB:
            case TextureFormat.ASTC4x4Unorm:
            case TextureFormat.ASTC4x4UnormSRGB:
            case TextureFormat.ASTC5x4Unorm:
            case TextureFormat.ASTC5x4UnormSRGB:
            case TextureFormat.ASTC5x5Unorm:
            case TextureFormat.ASTC5x5UnormSRGB:
            case TextureFormat.ASTC6x5Unorm:
            case TextureFormat.ASTC6x5UnormSRGB:
            case TextureFormat.ASTC6x6Unorm:
            case TextureFormat.ASTC6x6UnormSRGB:
            case TextureFormat.ASTC8x5Unorm:
            case TextureFormat.ASTC8x5UnormSRGB:
            case TextureFormat.ASTC8x6Unorm:
            case TextureFormat.ASTC8x6UnormSRGB:
            case TextureFormat.ASTC8x8Unorm:
            case TextureFormat.ASTC8x8UnormSRGB:
            case TextureFormat.ASTC10x5Unorm:
            case TextureFormat.ASTC10x5UnormSRGB:
            case TextureFormat.ASTC10x6Unorm:
            case TextureFormat.ASTC10x6UnormSRGB:
            case TextureFormat.ASTC10x8Unorm:
            case TextureFormat.ASTC10x8UnormSRGB:
            case TextureFormat.ASTC10x10Unorm:
            case TextureFormat.ASTC10x10UnormSRGB:
            case TextureFormat.ASTC12x10Unorm:
            case TextureFormat.ASTC12x10UnormSRGB:
            case TextureFormat.ASTC12x12Unorm:
            case TextureFormat.ASTC12x12UnormSRGB:
                return 4;
        }
        throw `Unknown format ${format}!`;
    }
    invertYPreMultiplyAlpha(gpuOrHdwTexture, width, height, format, invertY = false, premultiplyAlpha = false, faceIndex = 0, mipLevel = 0, layers = 1, commandEncoder, allowGPUOptimization) {
        var _a, _b, _c, _d, _e, _f, _g;
        const useOwnCommandEncoder = commandEncoder === undefined;
        const [pipeline, bindGroupLayout] = this._getPipeline(format, PipelineType.InvertYPremultiplyAlpha, { invertY, premultiplyAlpha });
        faceIndex = Math.max(faceIndex, 0);
        if (useOwnCommandEncoder) {
            commandEncoder = this._device.createCommandEncoder({});
        }
        (_b = (_a = commandEncoder).pushDebugGroup) === null || _b === void 0 ? void 0 : _b.call(_a, `internal process texture - invertY=${invertY} premultiplyAlpha=${premultiplyAlpha}`);
        let gpuTexture;
        if (WebGPUTextureHelper._IsHardwareTexture(gpuOrHdwTexture)) {
            gpuTexture = gpuOrHdwTexture.underlyingResource;
            if (!(invertY && !premultiplyAlpha && layers === 1 && faceIndex === 0)) {
                gpuOrHdwTexture = undefined;
            }
        }
        else {
            gpuTexture = gpuOrHdwTexture;
            gpuOrHdwTexture = undefined;
        }
        if (!gpuTexture) {
            return;
        }
        const webgpuHardwareTexture = gpuOrHdwTexture;
        const outputTexture = (_c = webgpuHardwareTexture === null || webgpuHardwareTexture === void 0 ? void 0 : webgpuHardwareTexture._copyInvertYTempTexture) !== null && _c !== void 0 ? _c : this.createTexture({ width, height, layers: 1 }, false, false, false, false, false, format, 1, commandEncoder, TextureUsage.CopySrc | TextureUsage.RenderAttachment | TextureUsage.TextureBinding);
        const renderPassDescriptor = (_d = webgpuHardwareTexture === null || webgpuHardwareTexture === void 0 ? void 0 : webgpuHardwareTexture._copyInvertYRenderPassDescr) !== null && _d !== void 0 ? _d : {
            colorAttachments: [{
                    view: outputTexture.createView({
                        format,
                        dimension: TextureViewDimension.E2d,
                        baseMipLevel: 0,
                        mipLevelCount: 1,
                        arrayLayerCount: 1,
                        baseArrayLayer: 0,
                    }),
                    loadValue: LoadOp.Load,
                    storeOp: StoreOp.Store,
                }],
        };
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        const bindGroup = (_e = webgpuHardwareTexture === null || webgpuHardwareTexture === void 0 ? void 0 : webgpuHardwareTexture._copyInvertYBindGroupd) !== null && _e !== void 0 ? _e : this._device.createBindGroup({
            layout: bindGroupLayout,
            entries: [{
                    binding: 0,
                    resource: gpuTexture.createView({
                        format,
                        dimension: TextureViewDimension.E2d,
                        baseMipLevel: mipLevel,
                        mipLevelCount: 1,
                        arrayLayerCount: layers,
                        baseArrayLayer: faceIndex,
                    }),
                }],
        });
        passEncoder.setPipeline(pipeline);
        passEncoder.setBindGroup(0, bindGroup);
        passEncoder.draw(4, 1, 0, 0);
        passEncoder.endPass();
        commandEncoder.copyTextureToTexture({
            texture: outputTexture,
        }, {
            texture: gpuTexture,
            mipLevel,
            origin: {
                x: 0,
                y: 0,
                z: faceIndex,
            }
        }, {
            width,
            height,
            depthOrArrayLayers: 1,
        });
        if (webgpuHardwareTexture) {
            webgpuHardwareTexture._copyInvertYTempTexture = outputTexture;
            webgpuHardwareTexture._copyInvertYRenderPassDescr = renderPassDescriptor;
            webgpuHardwareTexture._copyInvertYBindGroupd = bindGroup;
        }
        else {
            this._deferredReleaseTextures.push([outputTexture, null]);
        }
        (_g = (_f = commandEncoder).popDebugGroup) === null || _g === void 0 ? void 0 : _g.call(_f);
        if (useOwnCommandEncoder) {
            this._device.queue.submit([commandEncoder.finish()]);
            commandEncoder = null;
        }
    }
    copyWithInvertY(srcTextureView, format, renderPassDescriptor, commandEncoder) {
        var _a, _b, _c, _d;
        const useOwnCommandEncoder = commandEncoder === undefined;
        const [pipeline, bindGroupLayout] = this._getPipeline(format, PipelineType.InvertYPremultiplyAlpha, { invertY: true, premultiplyAlpha: false });
        if (useOwnCommandEncoder) {
            commandEncoder = this._device.createCommandEncoder({});
        }
        (_b = (_a = commandEncoder).pushDebugGroup) === null || _b === void 0 ? void 0 : _b.call(_a, `internal copy texture with invertY`);
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        const bindGroup = this._device.createBindGroup({
            layout: bindGroupLayout,
            entries: [{
                    binding: 0,
                    resource: srcTextureView,
                }],
        });
        passEncoder.setPipeline(pipeline);
        passEncoder.setBindGroup(0, bindGroup);
        passEncoder.draw(4, 1, 0, 0);
        passEncoder.endPass();
        (_d = (_c = commandEncoder).popDebugGroup) === null || _d === void 0 ? void 0 : _d.call(_c);
        if (useOwnCommandEncoder) {
            this._device.queue.submit([commandEncoder.finish()]);
            commandEncoder = null;
        }
    }
    createTexture(imageBitmap, hasMipmaps = false, generateMipmaps = false, invertY = false, premultiplyAlpha = false, is3D = false, format = TextureFormat.RGBA8Unorm, sampleCount = 1, commandEncoder, usage = -1, additionalUsages = 0) {
        const layerCount = imageBitmap.layers || 1;
        let textureSize = {
            width: imageBitmap.width,
            height: imageBitmap.height,
            depthOrArrayLayers: layerCount,
        };
        const isCompressedFormat = WebGPUTextureHelper.IsCompressedFormat(format);
        const mipLevelCount = hasMipmaps ? WebGPUTextureHelper.ComputeNumMipmapLevels(imageBitmap.width, imageBitmap.height) : 1;
        const usages = usage >= 0 ? usage : TextureUsage.CopySrc | TextureUsage.CopyDst | TextureUsage.TextureBinding;
        additionalUsages |= hasMipmaps && !isCompressedFormat ? TextureUsage.CopySrc | TextureUsage.RenderAttachment : 0;
        if (!isCompressedFormat) {
            additionalUsages |= TextureUsage.RenderAttachment | TextureUsage.CopyDst;
        }
        const gpuTexture = this._device.createTexture({
            size: textureSize,
            dimension: is3D ? TextureDimension.E3d : TextureDimension.E2d,
            format,
            usage: usages | additionalUsages,
            sampleCount,
            mipLevelCount
        });
        if (WebGPUTextureHelper.IsImageBitmap(imageBitmap)) {
            this.updateTexture(imageBitmap, gpuTexture, imageBitmap.width, imageBitmap.height, layerCount, format, 0, 0, invertY, premultiplyAlpha, 0, 0, commandEncoder);
            if (hasMipmaps && generateMipmaps) {
                this.generateMipmaps(gpuTexture, format, mipLevelCount, 0, commandEncoder);
            }
        }
        return gpuTexture;
    }
    createCubeTexture(imageBitmaps, hasMipmaps = false, generateMipmaps = false, invertY = false, premultiplyAlpha = false, format = TextureFormat.RGBA8Unorm, sampleCount = 1, commandEncoder, usage = -1, additionalUsages = 0) {
        const width = WebGPUTextureHelper.IsImageBitmapArray(imageBitmaps) ? imageBitmaps[0].width : imageBitmaps.width;
        const height = WebGPUTextureHelper.IsImageBitmapArray(imageBitmaps) ? imageBitmaps[0].height : imageBitmaps.height;
        const isCompressedFormat = WebGPUTextureHelper.IsCompressedFormat(format);
        const mipLevelCount = hasMipmaps ? WebGPUTextureHelper.ComputeNumMipmapLevels(width, height) : 1;
        const usages = usage >= 0 ? usage : TextureUsage.CopySrc | TextureUsage.CopyDst | TextureUsage.TextureBinding;
        additionalUsages |= hasMipmaps && !isCompressedFormat ? TextureUsage.CopySrc | TextureUsage.RenderAttachment : 0;
        if (!isCompressedFormat) {
            additionalUsages |= TextureUsage.RenderAttachment | TextureUsage.CopyDst;
        }
        const gpuTexture = this._device.createTexture({
            size: {
                width,
                height,
                depthOrArrayLayers: 6,
            },
            dimension: TextureDimension.E2d,
            format,
            usage: usages | additionalUsages,
            sampleCount,
            mipLevelCount
        });
        if (WebGPUTextureHelper.IsImageBitmapArray(imageBitmaps)) {
            this.updateCubeTextures(imageBitmaps, gpuTexture, width, height, format, invertY, premultiplyAlpha, 0, 0, commandEncoder);
            if (hasMipmaps && generateMipmaps) {
                this.generateCubeMipmaps(gpuTexture, format, mipLevelCount, commandEncoder);
            }
        }
        return gpuTexture;
    }
    generateCubeMipmaps(gpuTexture, format, mipLevelCount, commandEncoder) {
        var _a, _b, _c, _d;
        const useOwnCommandEncoder = commandEncoder === undefined;
        if (useOwnCommandEncoder) {
            commandEncoder = this._device.createCommandEncoder({});
        }
        (_b = (_a = commandEncoder).pushDebugGroup) === null || _b === void 0 ? void 0 : _b.call(_a, `create cube mipmaps - ${mipLevelCount} levels`);
        for (let f = 0; f < 6; ++f) {
            this.generateMipmaps(gpuTexture, format, mipLevelCount, f, commandEncoder);
        }
        (_d = (_c = commandEncoder).popDebugGroup) === null || _d === void 0 ? void 0 : _d.call(_c);
        if (useOwnCommandEncoder) {
            this._device.queue.submit([commandEncoder.finish()]);
            commandEncoder = null;
        }
    }
    generateMipmaps(gpuOrHdwTexture, format, mipLevelCount, faceIndex = 0, commandEncoder) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const useOwnCommandEncoder = commandEncoder === undefined;
        const [pipeline, bindGroupLayout] = this._getPipeline(format);
        faceIndex = Math.max(faceIndex, 0);
        if (useOwnCommandEncoder) {
            commandEncoder = this._device.createCommandEncoder({});
        }
        (_b = (_a = commandEncoder).pushDebugGroup) === null || _b === void 0 ? void 0 : _b.call(_a, `create mipmaps for face #${faceIndex} - ${mipLevelCount} levels`);
        let gpuTexture;
        if (WebGPUTextureHelper._IsHardwareTexture(gpuOrHdwTexture)) {
            gpuTexture = gpuOrHdwTexture.underlyingResource;
            gpuOrHdwTexture._mipmapGenRenderPassDescr = gpuOrHdwTexture._mipmapGenRenderPassDescr || [];
            gpuOrHdwTexture._mipmapGenBindGroup = gpuOrHdwTexture._mipmapGenBindGroup || [];
        }
        else {
            gpuTexture = gpuOrHdwTexture;
            gpuOrHdwTexture = undefined;
        }
        if (!gpuTexture) {
            return;
        }
        const webgpuHardwareTexture = gpuOrHdwTexture;
        for (let i = 1; i < mipLevelCount; ++i) {
            const renderPassDescriptor = (_d = (_c = webgpuHardwareTexture === null || webgpuHardwareTexture === void 0 ? void 0 : webgpuHardwareTexture._mipmapGenRenderPassDescr[faceIndex]) === null || _c === void 0 ? void 0 : _c[i - 1]) !== null && _d !== void 0 ? _d : {
                colorAttachments: [{
                        view: gpuTexture.createView({
                            format,
                            dimension: TextureViewDimension.E2d,
                            baseMipLevel: i,
                            mipLevelCount: 1,
                            arrayLayerCount: 1,
                            baseArrayLayer: faceIndex,
                        }),
                        loadValue: LoadOp.Load,
                        storeOp: StoreOp.Store,
                    }],
            };
            if (webgpuHardwareTexture) {
                webgpuHardwareTexture._mipmapGenRenderPassDescr[faceIndex] = webgpuHardwareTexture._mipmapGenRenderPassDescr[faceIndex] || [];
                webgpuHardwareTexture._mipmapGenRenderPassDescr[faceIndex][i - 1] = renderPassDescriptor;
            }
            const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
            const bindGroup = (_f = (_e = webgpuHardwareTexture === null || webgpuHardwareTexture === void 0 ? void 0 : webgpuHardwareTexture._mipmapGenBindGroup[faceIndex]) === null || _e === void 0 ? void 0 : _e[i - 1]) !== null && _f !== void 0 ? _f : this._device.createBindGroup({
                layout: bindGroupLayout,
                entries: [{
                        binding: 0,
                        resource: this._mipmapSampler,
                    }, {
                        binding: 1,
                        resource: gpuTexture.createView({
                            format,
                            dimension: TextureViewDimension.E2d,
                            baseMipLevel: i - 1,
                            mipLevelCount: 1,
                            arrayLayerCount: 1,
                            baseArrayLayer: faceIndex,
                        }),
                    }],
            });
            if (webgpuHardwareTexture) {
                webgpuHardwareTexture._mipmapGenBindGroup[faceIndex] = webgpuHardwareTexture._mipmapGenBindGroup[faceIndex] || [];
                webgpuHardwareTexture._mipmapGenBindGroup[faceIndex][i - 1] = bindGroup;
            }
            passEncoder.setPipeline(pipeline);
            passEncoder.setBindGroup(0, bindGroup);
            passEncoder.draw(4, 1, 0, 0);
            passEncoder.endPass();
        }
        (_h = (_g = commandEncoder).popDebugGroup) === null || _h === void 0 ? void 0 : _h.call(_g);
        if (useOwnCommandEncoder) {
            this._device.queue.submit([commandEncoder.finish()]);
            commandEncoder = null;
        }
    }
    createGPUTextureForInternalTexture(texture, width, height, depth, creationFlags) {
        if (!texture._hardwareTexture) {
            texture._hardwareTexture = new WebGPUHardwareTexture();
        }
        if (width === undefined) {
            width = texture.width;
        }
        if (height === undefined) {
            height = texture.height;
        }
        if (depth === undefined) {
            depth = texture.depth;
        }
        const gpuTextureWrapper = texture._hardwareTexture;
        const isStorageTexture = ((creationFlags !== null && creationFlags !== void 0 ? creationFlags : 0) & Constants.TEXTURE_CREATIONFLAG_STORAGE) !== 0;
        gpuTextureWrapper.format = WebGPUTextureHelper.GetWebGPUTextureFormat(texture.type, texture.format, texture._useSRGBBuffer);
        gpuTextureWrapper.textureUsages =
            texture._source === InternalTextureSource.RenderTarget || texture.source === InternalTextureSource.MultiRenderTarget ? TextureUsage.TextureBinding | TextureUsage.CopySrc | TextureUsage.RenderAttachment :
                texture._source === InternalTextureSource.DepthStencil ? TextureUsage.TextureBinding | TextureUsage.RenderAttachment : -1;
        gpuTextureWrapper.textureAdditionalUsages = isStorageTexture ? TextureUsage.StorageBinding : 0;
        const hasMipMaps = texture.generateMipMaps;
        const layerCount = depth || 1;
        if (texture.isCube) {
            const gpuTexture = this.createCubeTexture({ width, height }, texture.generateMipMaps, texture.generateMipMaps, texture.invertY, false, gpuTextureWrapper.format, 1, this._commandEncoderForCreation, gpuTextureWrapper.textureUsages, gpuTextureWrapper.textureAdditionalUsages);
            gpuTextureWrapper.set(gpuTexture);
            gpuTextureWrapper.createView({
                format: gpuTextureWrapper.format,
                dimension: TextureViewDimension.Cube,
                mipLevelCount: hasMipMaps ? WebGPUTextureHelper.ComputeNumMipmapLevels(width, height) : 1,
                baseArrayLayer: 0,
                baseMipLevel: 0,
                arrayLayerCount: 6,
                aspect: TextureAspect.All
            }, isStorageTexture);
        }
        else {
            const gpuTexture = this.createTexture({ width, height, layers: layerCount }, texture.generateMipMaps, texture.generateMipMaps, texture.invertY, false, texture.is3D, gpuTextureWrapper.format, 1, this._commandEncoderForCreation, gpuTextureWrapper.textureUsages, gpuTextureWrapper.textureAdditionalUsages);
            gpuTextureWrapper.set(gpuTexture);
            gpuTextureWrapper.createView({
                format: gpuTextureWrapper.format,
                dimension: texture.is2DArray ? TextureViewDimension.E2dArray : texture.is3D ? TextureDimension.E3d : TextureViewDimension.E2d,
                mipLevelCount: hasMipMaps ? WebGPUTextureHelper.ComputeNumMipmapLevels(width, height) : 1,
                baseArrayLayer: 0,
                baseMipLevel: 0,
                arrayLayerCount: texture.is3D ? 1 : layerCount,
                aspect: TextureAspect.All
            }, isStorageTexture);
        }
        texture.width = texture.baseWidth = width;
        texture.height = texture.baseHeight = height;
        texture.depth = texture.baseDepth = depth;
        this.createMSAATexture(texture, texture.samples);
        return gpuTextureWrapper;
    }
    createMSAATexture(texture, samples) {
        const gpuTextureWrapper = texture._hardwareTexture;
        if (gpuTextureWrapper === null || gpuTextureWrapper === void 0 ? void 0 : gpuTextureWrapper.msaaTexture) {
            this.releaseTexture(gpuTextureWrapper.msaaTexture);
            gpuTextureWrapper.msaaTexture = null;
        }
        if (!gpuTextureWrapper || (samples !== null && samples !== void 0 ? samples : 1) <= 1) {
            return;
        }
        const width = texture.width;
        const height = texture.height;
        const layerCount = texture.depth || 1;
        if (texture.isCube) {
            const gpuMSAATexture = this.createCubeTexture({ width, height }, false, false, texture.invertY, false, gpuTextureWrapper.format, samples, this._commandEncoderForCreation, gpuTextureWrapper.textureUsages, gpuTextureWrapper.textureAdditionalUsages);
            gpuTextureWrapper.setMSAATexture(gpuMSAATexture);
        }
        else {
            const gpuMSAATexture = this.createTexture({ width, height, layers: layerCount }, false, false, texture.invertY, false, texture.is3D, gpuTextureWrapper.format, samples, this._commandEncoderForCreation, gpuTextureWrapper.textureUsages, gpuTextureWrapper.textureAdditionalUsages);
            gpuTextureWrapper.setMSAATexture(gpuMSAATexture);
        }
    }
    updateCubeTextures(imageBitmaps, gpuTexture, width, height, format, invertY = false, premultiplyAlpha = false, offsetX = 0, offsetY = 0, commandEncoder) {
        const faces = [0, 3, 1, 4, 2, 5];
        for (let f = 0; f < faces.length; ++f) {
            let imageBitmap = imageBitmaps[faces[f]];
            this.updateTexture(imageBitmap, gpuTexture, width, height, 1, format, f, 0, invertY, premultiplyAlpha, offsetX, offsetY, commandEncoder);
        }
    }
    updateTexture(imageBitmap, texture, width, height, layers, format, faceIndex = 0, mipLevel = 0, invertY = false, premultiplyAlpha = false, offsetX = 0, offsetY = 0, commandEncoder, allowGPUOptimization) {
        const gpuTexture = WebGPUTextureHelper._IsInternalTexture(texture) ? texture._hardwareTexture.underlyingResource : texture;
        const blockInformation = WebGPUTextureHelper._GetBlockInformationFromFormat(format);
        const gpuOrHdwTexture = WebGPUTextureHelper._IsInternalTexture(texture) ? texture._hardwareTexture : texture;
        const textureCopyView = {
            texture: gpuTexture,
            origin: {
                x: offsetX,
                y: offsetY,
                z: Math.max(faceIndex, 0)
            },
            mipLevel: mipLevel,
            premultipliedAlpha: premultiplyAlpha,
        };
        const textureExtent = {
            width: Math.ceil(width / blockInformation.width) * blockInformation.width,
            height: Math.ceil(height / blockInformation.height) * blockInformation.height,
            depthOrArrayLayers: layers || 1
        };
        if (imageBitmap.byteLength !== undefined) {
            imageBitmap = imageBitmap;
            const bytesPerRow = Math.ceil(width / blockInformation.width) * blockInformation.length;
            const aligned = Math.ceil(bytesPerRow / 256) * 256 === bytesPerRow;
            if (aligned) {
                const useOwnCommandEncoder = commandEncoder === undefined;
                if (useOwnCommandEncoder) {
                    commandEncoder = this._device.createCommandEncoder({});
                }
                const buffer = this._bufferManager.createRawBuffer(imageBitmap.byteLength, BufferUsage.MapWrite | BufferUsage.CopySrc, true);
                const arrayBuffer = buffer.getMappedRange();
                new Uint8Array(arrayBuffer).set(imageBitmap);
                buffer.unmap();
                commandEncoder.copyBufferToTexture({
                    buffer: buffer,
                    offset: 0,
                    bytesPerRow,
                    rowsPerImage: height,
                }, textureCopyView, textureExtent);
                if (useOwnCommandEncoder) {
                    this._device.queue.submit([commandEncoder.finish()]);
                    commandEncoder = null;
                }
                this._bufferManager.releaseBuffer(buffer);
            }
            else {
                this._device.queue.writeTexture(textureCopyView, imageBitmap, {
                    offset: 0,
                    bytesPerRow,
                    rowsPerImage: height,
                }, textureExtent);
            }
            if (invertY || premultiplyAlpha) {
                this.invertYPreMultiplyAlpha(gpuOrHdwTexture, width, height, format, invertY, premultiplyAlpha, faceIndex, mipLevel, layers || 1, commandEncoder, allowGPUOptimization);
            }
        }
        else {
            imageBitmap = imageBitmap;
            if (invertY) {
                textureCopyView.premultipliedAlpha = false;
                if (WebGPUTextureHelper._IsInternalTexture(texture) && offsetX === 0 && offsetY === 0 && width === texture.width && height === texture.height) {
                    this._device.queue.copyExternalImageToTexture({ source: imageBitmap }, textureCopyView, textureExtent);
                    this.invertYPreMultiplyAlpha(gpuOrHdwTexture, width, height, format, invertY, premultiplyAlpha, faceIndex, mipLevel, layers || 1, undefined, allowGPUOptimization);
                }
                else {
                    commandEncoder = this._device.createCommandEncoder({});
                    const srcTexture = this.createTexture({ width, height, layers: 1 }, false, false, false, false, false, format, 1, commandEncoder, TextureUsage.CopySrc | TextureUsage.TextureBinding);
                    this._deferredReleaseTextures.push([srcTexture, null]);
                    textureExtent.depthOrArrayLayers = 1;
                    this._device.queue.copyExternalImageToTexture({ source: imageBitmap }, { texture: srcTexture }, textureExtent);
                    textureExtent.depthOrArrayLayers = layers || 1;
                    this.invertYPreMultiplyAlpha(srcTexture, width, height, format, invertY, premultiplyAlpha, faceIndex, mipLevel, layers || 1, commandEncoder, allowGPUOptimization);
                    commandEncoder.copyTextureToTexture({ texture: srcTexture }, textureCopyView, textureExtent);
                    this._device.queue.submit([commandEncoder.finish()]);
                    commandEncoder = null;
                }
            }
            else {
                this._device.queue.copyExternalImageToTexture({ source: imageBitmap }, textureCopyView, textureExtent);
            }
        }
    }
    readPixels(texture, x, y, width, height, format, faceIndex = 0, mipLevel = 0, buffer = null, noDataConversion = false) {
        const blockInformation = WebGPUTextureHelper._GetBlockInformationFromFormat(format);
        const bytesPerRow = Math.ceil(width / blockInformation.width) * blockInformation.length;
        const bytesPerRowAligned = Math.ceil(bytesPerRow / 256) * 256;
        const size = bytesPerRowAligned * height;
        const gpuBuffer = this._bufferManager.createRawBuffer(size, BufferUsage.MapRead | BufferUsage.CopyDst);
        const commandEncoder = this._device.createCommandEncoder({});
        commandEncoder.copyTextureToBuffer({
            texture,
            mipLevel,
            origin: {
                x,
                y,
                z: Math.max(faceIndex, 0)
            }
        }, {
            buffer: gpuBuffer,
            offset: 0,
            bytesPerRow: bytesPerRowAligned
        }, {
            width,
            height,
            depthOrArrayLayers: 1
        });
        this._device.queue.submit([commandEncoder.finish()]);
        return this._bufferManager.readDataFromBuffer(gpuBuffer, size, width, height, bytesPerRow, bytesPerRowAligned, WebGPUTextureHelper._GetTextureTypeFromFormat(format), 0, buffer, true, noDataConversion);
    }
    releaseTexture(texture) {
        if (WebGPUTextureHelper._IsInternalTexture(texture)) {
            const hardwareTexture = texture._hardwareTexture;
            const irradianceTexture = texture._irradianceTexture;
            this._deferredReleaseTextures.push([hardwareTexture, irradianceTexture]);
        }
        else {
            this._deferredReleaseTextures.push([texture, null]);
        }
    }
    destroyDeferredTextures() {
        for (let i = 0; i < this._deferredReleaseTextures.length; ++i) {
            const [hardwareTexture, irradianceTexture] = this._deferredReleaseTextures[i];
            if (hardwareTexture) {
                if (WebGPUTextureHelper._IsHardwareTexture(hardwareTexture)) {
                    hardwareTexture.release();
                }
                else {
                    hardwareTexture.destroy();
                }
            }
            irradianceTexture === null || irradianceTexture === void 0 ? void 0 : irradianceTexture.dispose();
        }
        this._deferredReleaseTextures.length = 0;
    }
}
class WebGPUDataBuffer extends DataBuffer {
    constructor(resource) {
        super();
        this._buffer = resource;
    }
    get underlyingResource() {
        return this._buffer;
    }
}
class WebGPUBufferManager {
    constructor(device) {
        this._deferredReleaseBuffers = [];
        this._device = device;
    }
    static _IsGPUBuffer(buffer) {
        return buffer.underlyingResource === undefined;
    }
    createRawBuffer(viewOrSize, flags, mappedAtCreation = false) {
        const alignedLength = viewOrSize.byteLength !== undefined ? (viewOrSize.byteLength + 3) & ~3 : (viewOrSize + 3) & ~3;
        const verticesBufferDescriptor = {
            mappedAtCreation,
            size: alignedLength,
            usage: flags
        };
        return this._device.createBuffer(verticesBufferDescriptor);
    }
    createBuffer(viewOrSize, flags) {
        const isView = viewOrSize.byteLength !== undefined;
        const buffer = this.createRawBuffer(viewOrSize, flags);
        const dataBuffer = new WebGPUDataBuffer(buffer);
        dataBuffer.references = 1;
        dataBuffer.capacity = isView ? viewOrSize.byteLength : viewOrSize;
        if (isView) {
            this.setSubData(dataBuffer, 0, viewOrSize);
        }
        return dataBuffer;
    }
    setRawData(buffer, dstByteOffset, src, srcByteOffset, byteLength) {
        this._device.queue.writeBuffer(buffer, dstByteOffset, src.buffer, srcByteOffset, byteLength);
    }
    setSubData(dataBuffer, dstByteOffset, src, srcByteOffset = 0, byteLength = 0) {
        const buffer = dataBuffer.underlyingResource;
        byteLength = byteLength || src.byteLength;
        byteLength = Math.min(byteLength, dataBuffer.capacity - dstByteOffset);
        let chunkStart = src.byteOffset + srcByteOffset;
        let chunkEnd = chunkStart + byteLength;
        const alignedLength = (byteLength + 3) & ~3;
        if (alignedLength !== byteLength) {
            const tempView = new Uint8Array(src.buffer.slice(chunkStart, chunkEnd));
            src = new Uint8Array(alignedLength);
            src.set(tempView);
            srcByteOffset = 0;
            chunkStart = 0;
            chunkEnd = alignedLength;
            byteLength = alignedLength;
        }
        const maxChunk = 1024 * 1024 * 15;
        let offset = 0;
        while ((chunkEnd - (chunkStart + offset)) > maxChunk) {
            this._device.queue.writeBuffer(buffer, dstByteOffset + offset, src.buffer, chunkStart + offset, maxChunk);
            offset += maxChunk;
        }
        this._device.queue.writeBuffer(buffer, dstByteOffset + offset, src.buffer, chunkStart + offset, byteLength - offset);
    }
    _GetHalfFloatAsFloatRGBAArrayBuffer(dataLength, arrayBuffer, destArray) {
        if (!destArray) {
            destArray = new Float32Array(dataLength);
        }
        const srcData = new Uint16Array(arrayBuffer);
        while (dataLength--) {
            destArray[dataLength] = FromHalfFloat(srcData[dataLength]);
        }
        return destArray;
    }
    readDataFromBuffer(gpuBuffer, size, width, height, bytesPerRow, bytesPerRowAligned, type = Constants.TEXTURETYPE_UNSIGNED_BYTE, offset = 0, buffer = null, destroyBuffer = true, noDataConversion = false) {
        const floatFormat = type === Constants.TEXTURETYPE_FLOAT ? 2 : type === Constants.TEXTURETYPE_HALF_FLOAT ? 1 : 0;
        return new Promise((resolve, reject) => {
            gpuBuffer.mapAsync(MapMode.Read, offset, size).then(() => {
                const copyArrayBuffer = gpuBuffer.getMappedRange(offset, size);
                let data = buffer;
                if (noDataConversion) {
                    if (data === null) {
                        data = allocateAndCopyTypedBuffer(type, size, true, copyArrayBuffer);
                    }
                    else {
                        data = allocateAndCopyTypedBuffer(type, data.buffer, undefined, copyArrayBuffer);
                    }
                }
                else {
                    if (data === null) {
                        switch (floatFormat) {
                            case 0:
                                data = new Uint8Array(size);
                                data.set(new Uint8Array(copyArrayBuffer));
                                break;
                            case 1:
                                data = this._GetHalfFloatAsFloatRGBAArrayBuffer(size / 2, copyArrayBuffer);
                                break;
                            case 2:
                                data = new Float32Array(size / 4);
                                data.set(new Float32Array(copyArrayBuffer));
                                break;
                        }
                    }
                    else {
                        switch (floatFormat) {
                            case 0:
                                data = new Uint8Array(data.buffer);
                                data.set(new Uint8Array(copyArrayBuffer));
                                break;
                            case 1:
                                data = this._GetHalfFloatAsFloatRGBAArrayBuffer(size / 2, copyArrayBuffer, buffer);
                                break;
                            case 2:
                                data = new Float32Array(data.buffer);
                                data.set(new Float32Array(copyArrayBuffer));
                                break;
                        }
                    }
                }
                if (bytesPerRow !== bytesPerRowAligned) {
                    if (floatFormat === 1 && !noDataConversion) {
                        bytesPerRow *= 2;
                        bytesPerRowAligned *= 2;
                    }
                    const data2 = new Uint8Array(data.buffer);
                    let offset = bytesPerRow, offset2 = 0;
                    for (let y = 1; y < height; ++y) {
                        offset2 = y * bytesPerRowAligned;
                        for (let x = 0; x < bytesPerRow; ++x) {
                            data2[offset++] = data2[offset2++];
                        }
                    }
                    if (floatFormat !== 0 && !noDataConversion) {
                        data = new Float32Array(data2.buffer, 0, offset / 4);
                    }
                    else {
                        data = new Uint8Array(data2.buffer, 0, offset);
                    }
                }
                gpuBuffer.unmap();
                if (destroyBuffer) {
                    this.releaseBuffer(gpuBuffer);
                }
                resolve(data);
            }, (reason) => reject(reason));
        });
    }
    releaseBuffer(buffer) {
        if (WebGPUBufferManager._IsGPUBuffer(buffer)) {
            this._deferredReleaseBuffers.push(buffer);
            return true;
        }
        buffer.references--;
        if (buffer.references === 0) {
            this._deferredReleaseBuffers.push(buffer.underlyingResource);
            return true;
        }
        return false;
    }
    destroyDeferredBuffers() {
        for (let i = 0; i < this._deferredReleaseBuffers.length; ++i) {
            this._deferredReleaseBuffers[i].destroy();
        }
        this._deferredReleaseBuffers.length = 0;
    }
}
class WebGPURenderPassWrapper {
    constructor() {
        this.colorAttachmentGPUTextures = [];
        this.reset();
    }
    reset(fullReset = false) {
        this.renderPass = null;
        if (fullReset) {
            this.renderPassDescriptor = null;
            this.colorAttachmentViewDescriptor = null;
            this.depthAttachmentViewDescriptor = null;
            this.colorAttachmentGPUTextures = [];
            this.depthTextureFormat = undefined;
        }
    }
}
const filterToBits = [
    0 | 0 << 1 | 0 << 2,
    0 | 0 << 1 | 0 << 2,
    1 | 1 << 1 | 0 << 2,
    1 | 1 << 1 | 1 << 2,
    0 | 0 << 1 | 0 << 2,
    0 | 1 << 1 | 0 << 2,
    0 | 1 << 1 | 1 << 2,
    0 | 1 << 1 | 0 << 2,
    0 | 0 << 1 | 1 << 2,
    1 | 0 << 1 | 0 << 2,
    1 | 0 << 1 | 1 << 2,
    1 | 1 << 1 | 0 << 2,
    1 | 0 << 1 | 0 << 2,
];
const comparisonFunctionToBits = [
    0 << 3 | 0 << 4 | 0 << 5 | 0 << 6,
    0 << 3 | 0 << 4 | 0 << 5 | 1 << 6,
    0 << 3 | 0 << 4 | 1 << 5 | 0 << 6,
    0 << 3 | 0 << 4 | 1 << 5 | 1 << 6,
    0 << 3 | 1 << 4 | 0 << 5 | 0 << 6,
    0 << 3 | 1 << 4 | 0 << 5 | 1 << 6,
    0 << 3 | 1 << 4 | 1 << 5 | 0 << 6,
    0 << 3 | 1 << 4 | 1 << 5 | 1 << 6,
    1 << 3 | 0 << 4 | 0 << 5 | 0 << 6,
];
const filterNoMipToBits = [
    0 << 7,
    1 << 7,
    1 << 7,
    0 << 7,
    0 << 7,
    0 << 7,
    0 << 7,
    1 << 7,
    0 << 7,
    0 << 7,
    0 << 7,
    0 << 7,
    1 << 7,
];
class WebGPUCacheSampler {
    constructor(device) {
        this._samplers = {};
        this._device = device;
        this.disabled = false;
    }
    static GetSamplerHashCode(sampler) {
        var _a, _b, _c;
        const anisotropy = sampler._cachedAnisotropicFilteringLevel && sampler._cachedAnisotropicFilteringLevel > 1 ? 4 : 1;
        let code = filterToBits[sampler.samplingMode] +
            comparisonFunctionToBits[(sampler._comparisonFunction || 0x0202) - 0x0200 + 1] +
            filterNoMipToBits[sampler.samplingMode] +
            (((_a = sampler._cachedWrapU) !== null && _a !== void 0 ? _a : 1) << 8) +
            (((_b = sampler._cachedWrapV) !== null && _b !== void 0 ? _b : 1) << 10) +
            (((_c = sampler._cachedWrapR) !== null && _c !== void 0 ? _c : 1) << 12) +
            ((sampler.useMipMaps ? 1 : 0) << 14) +
            (anisotropy << 15);
        return code;
    }
    static _GetSamplerFilterDescriptor(sampler, anisotropy) {
        let magFilter, minFilter, mipmapFilter, lodMinClamp, lodMaxClamp;
        const useMipMaps = sampler.useMipMaps;
        switch (sampler.samplingMode) {
            case Constants.TEXTURE_LINEAR_LINEAR_MIPNEAREST:
                magFilter = FilterMode.Linear;
                minFilter = FilterMode.Linear;
                mipmapFilter = FilterMode.Nearest;
                if (!useMipMaps) {
                    lodMinClamp = lodMaxClamp = 0;
                }
                break;
            case Constants.TEXTURE_LINEAR_LINEAR_MIPLINEAR:
            case Constants.TEXTURE_TRILINEAR_SAMPLINGMODE:
                magFilter = FilterMode.Linear;
                minFilter = FilterMode.Linear;
                if (!useMipMaps) {
                    mipmapFilter = FilterMode.Nearest;
                    lodMinClamp = lodMaxClamp = 0;
                }
                else {
                    mipmapFilter = FilterMode.Linear;
                }
                break;
            case Constants.TEXTURE_NEAREST_NEAREST_MIPLINEAR:
                magFilter = FilterMode.Nearest;
                minFilter = FilterMode.Nearest;
                if (!useMipMaps) {
                    mipmapFilter = FilterMode.Nearest;
                    lodMinClamp = lodMaxClamp = 0;
                }
                else {
                    mipmapFilter = FilterMode.Linear;
                }
                break;
            case Constants.TEXTURE_NEAREST_NEAREST_MIPNEAREST:
                magFilter = FilterMode.Nearest;
                minFilter = FilterMode.Nearest;
                mipmapFilter = FilterMode.Nearest;
                if (!useMipMaps) {
                    lodMinClamp = lodMaxClamp = 0;
                }
                break;
            case Constants.TEXTURE_NEAREST_LINEAR_MIPNEAREST:
                magFilter = FilterMode.Nearest;
                minFilter = FilterMode.Linear;
                mipmapFilter = FilterMode.Nearest;
                if (!useMipMaps) {
                    lodMinClamp = lodMaxClamp = 0;
                }
                break;
            case Constants.TEXTURE_NEAREST_LINEAR_MIPLINEAR:
                magFilter = FilterMode.Nearest;
                minFilter = FilterMode.Linear;
                if (!useMipMaps) {
                    mipmapFilter = FilterMode.Nearest;
                    lodMinClamp = lodMaxClamp = 0;
                }
                else {
                    mipmapFilter = FilterMode.Linear;
                }
                break;
            case Constants.TEXTURE_NEAREST_LINEAR:
                magFilter = FilterMode.Nearest;
                minFilter = FilterMode.Linear;
                mipmapFilter = FilterMode.Nearest;
                lodMinClamp = lodMaxClamp = 0;
                break;
            case Constants.TEXTURE_NEAREST_NEAREST:
            case Constants.TEXTURE_NEAREST_SAMPLINGMODE:
                magFilter = FilterMode.Nearest;
                minFilter = FilterMode.Nearest;
                mipmapFilter = FilterMode.Nearest;
                lodMinClamp = lodMaxClamp = 0;
                break;
            case Constants.TEXTURE_LINEAR_NEAREST_MIPNEAREST:
                magFilter = FilterMode.Linear;
                minFilter = FilterMode.Nearest;
                mipmapFilter = FilterMode.Nearest;
                if (!useMipMaps) {
                    lodMinClamp = lodMaxClamp = 0;
                }
                break;
            case Constants.TEXTURE_LINEAR_NEAREST_MIPLINEAR:
                magFilter = FilterMode.Linear;
                minFilter = FilterMode.Nearest;
                if (!useMipMaps) {
                    mipmapFilter = FilterMode.Nearest;
                    lodMinClamp = lodMaxClamp = 0;
                }
                else {
                    mipmapFilter = FilterMode.Linear;
                }
                break;
            case Constants.TEXTURE_LINEAR_LINEAR:
            case Constants.TEXTURE_BILINEAR_SAMPLINGMODE:
                magFilter = FilterMode.Linear;
                minFilter = FilterMode.Linear;
                mipmapFilter = FilterMode.Nearest;
                lodMinClamp = lodMaxClamp = 0;
                break;
            case Constants.TEXTURE_LINEAR_NEAREST:
                magFilter = FilterMode.Linear;
                minFilter = FilterMode.Nearest;
                mipmapFilter = FilterMode.Nearest;
                lodMinClamp = lodMaxClamp = 0;
                break;
            default:
                magFilter = FilterMode.Nearest;
                minFilter = FilterMode.Nearest;
                mipmapFilter = FilterMode.Nearest;
                lodMinClamp = lodMaxClamp = 0;
                break;
        }
        if (anisotropy > 1 && (lodMinClamp !== 0 || lodMaxClamp !== 0)) {
            return {
                magFilter: FilterMode.Linear,
                minFilter: FilterMode.Linear,
                mipmapFilter: FilterMode.Linear,
                anisotropyEnabled: true,
            };
        }
        return {
            magFilter,
            minFilter,
            mipmapFilter,
            lodMinClamp,
            lodMaxClamp,
        };
    }
    static _GetWrappingMode(mode) {
        switch (mode) {
            case Constants.TEXTURE_WRAP_ADDRESSMODE:
                return AddressMode.Repeat;
            case Constants.TEXTURE_CLAMP_ADDRESSMODE:
                return AddressMode.ClampToEdge;
            case Constants.TEXTURE_MIRROR_ADDRESSMODE:
                return AddressMode.MirrorRepeat;
        }
        return AddressMode.Repeat;
    }
    static _GetSamplerWrappingDescriptor(sampler) {
        return {
            addressModeU: this._GetWrappingMode(sampler._cachedWrapU),
            addressModeV: this._GetWrappingMode(sampler._cachedWrapV),
            addressModeW: this._GetWrappingMode(sampler._cachedWrapR),
        };
    }
    static _GetSamplerDescriptor(sampler) {
        const anisotropy = sampler.useMipMaps && sampler._cachedAnisotropicFilteringLevel && sampler._cachedAnisotropicFilteringLevel > 1 ? 4 : 1;
        const filterDescriptor = this._GetSamplerFilterDescriptor(sampler, anisotropy);
        return {
            ...filterDescriptor,
            ...this._GetSamplerWrappingDescriptor(sampler),
            compare: sampler._comparisonFunction ? WebGPUTextureHelper.GetCompareFunction(sampler._comparisonFunction) : undefined,
            maxAnisotropy: filterDescriptor.anisotropyEnabled ? anisotropy : 1,
        };
    }
    getSampler(sampler, bypassCache = false, hash = 0) {
        if (this.disabled) {
            return this._device.createSampler(WebGPUCacheSampler._GetSamplerDescriptor(sampler));
        }
        if (bypassCache) {
            hash = 0;
        }
        else if (hash === 0) {
            hash = WebGPUCacheSampler.GetSamplerHashCode(sampler);
        }
        let gpuSampler = bypassCache ? undefined : this._samplers[hash];
        if (!gpuSampler) {
            gpuSampler = this._device.createSampler(WebGPUCacheSampler._GetSamplerDescriptor(sampler));
            if (!bypassCache) {
                this._samplers[hash] = gpuSampler;
            }
        }
        return gpuSampler;
    }
}
var StatePosition;
(function (StatePosition) {
    StatePosition[StatePosition["StencilReadMask"] = 0] = "StencilReadMask";
    StatePosition[StatePosition["StencilWriteMask"] = 1] = "StencilWriteMask";
    StatePosition[StatePosition["DepthBias"] = 2] = "DepthBias";
    StatePosition[StatePosition["DepthBiasSlopeScale"] = 3] = "DepthBiasSlopeScale";
    StatePosition[StatePosition["MRTAttachments1"] = 4] = "MRTAttachments1";
    StatePosition[StatePosition["MRTAttachments2"] = 5] = "MRTAttachments2";
    StatePosition[StatePosition["DepthStencilState"] = 6] = "DepthStencilState";
    StatePosition[StatePosition["RasterizationState"] = 7] = "RasterizationState";
    StatePosition[StatePosition["ColorStates"] = 8] = "ColorStates";
    StatePosition[StatePosition["ShaderStage"] = 9] = "ShaderStage";
    StatePosition[StatePosition["TextureStage"] = 10] = "TextureStage";
    StatePosition[StatePosition["VertexState"] = 11] = "VertexState";
    StatePosition[StatePosition["NumStates"] = 12] = "NumStates";
})(StatePosition || (StatePosition = {}));
const textureFormatToIndex = {
    "": 0,
    "r8unorm": 1,
    "r8uint": 2,
    "r8sint": 3,
    "r16uint": 4,
    "r16sint": 5,
    "r16float": 6,
    "rg8unorm": 7,
    "rg8uint": 8,
    "rg8sint": 9,
    "r32uint": 10,
    "r32sint": 11,
    "r32float": 12,
    "rg16uint": 13,
    "rg16sint": 14,
    "rg16float": 15,
    "rgba8unorm": 16,
    "rgba8unorm-srgb": 17,
    "rgba8uint": 18,
    "rgba8sint": 19,
    "bgra8unorm": 20,
    "bgra8unorm-srgb": 21,
    "rgb10a2unorm": 22,
    "rg32uint": 23,
    "rg32sint": 24,
    "rg32float": 25,
    "rgba16uint": 26,
    "rgba16sint": 27,
    "rgba16float": 28,
    "rgba32uint": 29,
    "rgba32sint": 30,
    "rgba32float": 31,
    "stencil8": 32,
    "depth16unorm": 33,
    "depth24plus": 34,
    "depth24plus-stencil8": 35,
    "depth32float": 36,
    "depth24unorm-stencil8": 37,
    "depth32float-stencil8": 38,
};
const alphaBlendFactorToIndex = {
    0: 1,
    1: 2,
    0x0300: 3,
    0x0301: 4,
    0x0302: 5,
    0x0303: 6,
    0x0304: 7,
    0x0305: 8,
    0x0306: 9,
    0x0307: 10,
    0x0308: 11,
    0x8001: 12,
    0x8002: 13,
    0x8003: 12,
    0x8004: 13,
};
const stencilOpToIndex = {
    0x0000: 0,
    0x1E00: 1,
    0x1E01: 2,
    0x1E02: 3,
    0x1E03: 4,
    0x150A: 5,
    0x8507: 6,
    0x8508: 7,
};
class WebGPUCacheRenderPipeline {
    constructor(device, emptyVertexBuffer, useTextureStage) {
        this._device = device;
        this._useTextureStage = useTextureStage;
        this._states = new Array(30);
        this._statesLength = 0;
        this._stateDirtyLowestIndex = 0;
        this._emptyVertexBuffer = emptyVertexBuffer;
        this._mrtFormats = [];
        this._parameter = { token: undefined, pipeline: null };
        this.disabled = false;
        this.vertexBuffers = [];
        this._kMaxVertexBufferStride = device.limits.maxVertexBufferArrayStride || 2048;
        this.reset();
    }
    reset() {
        this._isDirty = true;
        this.vertexBuffers.length = 0;
        this.setAlphaToCoverage(false);
        this.resetDepthCullingState();
        this.setClampDepth(false);
        this.setDepthBias(0);
        this._webgpuColorFormat = [TextureFormat.BGRA8Unorm];
        this.setColorFormat(TextureFormat.BGRA8Unorm);
        this.setMRTAttachments([], []);
        this.setAlphaBlendEnabled(false);
        this.setAlphaBlendFactors([null, null, null, null], [null, null]);
        this.setWriteMask(0xF);
        this.setDepthStencilFormat(TextureFormat.Depth24PlusStencil8);
        this.setStencilEnabled(false);
        this.resetStencilState();
        this.setBuffers(null, null, null);
        this._setTextureState(0);
    }
    get colorFormats() {
        return this._mrtAttachments1 > 0 ? this._mrtFormats : this._webgpuColorFormat;
    }
    getRenderPipeline(fillMode, effect, sampleCount, textureState = 0) {
        if (this.disabled) {
            const topology = WebGPUCacheRenderPipeline._GetTopology(fillMode);
            this._setVertexState(effect);
            this._parameter.pipeline = this._createRenderPipeline(effect, topology, sampleCount);
            WebGPUCacheRenderPipeline.NumCacheMiss++;
            WebGPUCacheRenderPipeline._NumPipelineCreationCurrentFrame++;
            return this._parameter.pipeline;
        }
        this._setShaderStage(effect.uniqueId);
        this._setRasterizationState(fillMode, sampleCount);
        this._setColorStates();
        this._setDepthStencilState();
        this._setVertexState(effect);
        this._setTextureState(textureState);
        this.lastStateDirtyLowestIndex = this._stateDirtyLowestIndex;
        if (!this._isDirty && this._parameter.pipeline) {
            this._stateDirtyLowestIndex = this._statesLength;
            WebGPUCacheRenderPipeline.NumCacheHitWithoutHash++;
            return this._parameter.pipeline;
        }
        this._getRenderPipeline(this._parameter);
        this._isDirty = false;
        this._stateDirtyLowestIndex = this._statesLength;
        if (this._parameter.pipeline) {
            WebGPUCacheRenderPipeline.NumCacheHitWithHash++;
            return this._parameter.pipeline;
        }
        const topology = WebGPUCacheRenderPipeline._GetTopology(fillMode);
        this._parameter.pipeline = this._createRenderPipeline(effect, topology, sampleCount);
        this._setRenderPipeline(this._parameter);
        WebGPUCacheRenderPipeline.NumCacheMiss++;
        WebGPUCacheRenderPipeline._NumPipelineCreationCurrentFrame++;
        return this._parameter.pipeline;
    }
    endFrame() {
        WebGPUCacheRenderPipeline.NumPipelineCreationLastFrame = WebGPUCacheRenderPipeline._NumPipelineCreationCurrentFrame;
        WebGPUCacheRenderPipeline._NumPipelineCreationCurrentFrame = 0;
    }
    setAlphaToCoverage(enabled) {
        this._alphaToCoverageEnabled = enabled;
    }
    setFrontFace(frontFace) {
        this._frontFace = frontFace;
    }
    setCullEnabled(enabled) {
        this._cullEnabled = enabled;
    }
    setCullFace(cullFace) {
        this._cullFace = cullFace;
    }
    setClampDepth(clampDepth) {
        this._clampDepth = clampDepth;
    }
    resetDepthCullingState() {
        this.setDepthCullingState(false, 2, 1, 0, 0, true, true, Constants.ALWAYS);
    }
    setDepthCullingState(cullEnabled, frontFace, cullFace, zOffset, zOffsetUnits, depthTestEnabled, depthWriteEnabled, depthCompare) {
        this._depthWriteEnabled = depthWriteEnabled;
        this._depthTestEnabled = depthTestEnabled;
        this._depthCompare = (depthCompare !== null && depthCompare !== void 0 ? depthCompare : Constants.ALWAYS) - 0x0200;
        this._cullFace = cullFace;
        this._cullEnabled = cullEnabled;
        this._frontFace = frontFace;
        this.setDepthBiasSlopeScale(zOffset);
        this.setDepthBias(zOffsetUnits);
    }
    setDepthBias(depthBias) {
        if (this._depthBias !== depthBias) {
            this._depthBias = depthBias;
            this._states[StatePosition.DepthBias] = depthBias;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.DepthBias);
        }
    }
    setDepthBiasSlopeScale(depthBiasSlopeScale) {
        if (this._depthBiasSlopeScale !== depthBiasSlopeScale) {
            this._depthBiasSlopeScale = depthBiasSlopeScale;
            this._states[StatePosition.DepthBiasSlopeScale] = depthBiasSlopeScale;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.DepthBiasSlopeScale);
        }
    }
    setColorFormat(format) {
        this._webgpuColorFormat[0] = format;
        this._colorFormat = textureFormatToIndex[format];
    }
    setMRTAttachments(attachments, textureArray) {
        var _a;
        if (attachments.length > 10) {
            throw "Can't handle more than 10 attachments for a MRT in cache render pipeline!";
        }
        this.mrtAttachments = attachments;
        this.mrtTextureArray = textureArray;
        let bits = [0, 0], indexBits = 0, mask = 0, numRT = 0;
        for (let i = 0; i < attachments.length; ++i) {
            const index = attachments[i];
            if (index === 0) {
                continue;
            }
            const texture = textureArray[index - 1];
            const gpuWrapper = texture === null || texture === void 0 ? void 0 : texture._hardwareTexture;
            this._mrtFormats[numRT] = (_a = gpuWrapper === null || gpuWrapper === void 0 ? void 0 : gpuWrapper.format) !== null && _a !== void 0 ? _a : this._webgpuColorFormat[0];
            bits[indexBits] += textureFormatToIndex[this._mrtFormats[numRT]] << mask;
            mask += 6;
            numRT++;
            if (mask >= 32) {
                mask = 0;
                indexBits++;
            }
        }
        this._mrtFormats.length = numRT;
        if (this._mrtAttachments1 !== bits[0] || this._mrtAttachments2 !== bits[1]) {
            this._mrtAttachments1 = bits[0];
            this._mrtAttachments2 = bits[1];
            this._states[StatePosition.MRTAttachments1] = bits[0];
            this._states[StatePosition.MRTAttachments2] = bits[1];
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.MRTAttachments1);
        }
    }
    setAlphaBlendEnabled(enabled) {
        this._alphaBlendEnabled = enabled;
    }
    setAlphaBlendFactors(factors, operations) {
        this._alphaBlendFuncParams = factors;
        this._alphaBlendEqParams = operations;
    }
    setWriteMask(mask) {
        this._writeMask = mask;
    }
    setDepthStencilFormat(format) {
        this._webgpuDepthStencilFormat = format;
        this._depthStencilFormat = format === undefined ? 0 : textureFormatToIndex[format];
    }
    setDepthTestEnabled(enabled) {
        this._depthTestEnabled = enabled;
    }
    setDepthWriteEnabled(enabled) {
        this._depthWriteEnabled = enabled;
    }
    setDepthCompare(func) {
        this._depthCompare = (func !== null && func !== void 0 ? func : Constants.ALWAYS) - 0x0200;
    }
    setStencilEnabled(enabled) {
        this._stencilEnabled = enabled;
    }
    setStencilCompare(func) {
        this._stencilFrontCompare = (func !== null && func !== void 0 ? func : Constants.ALWAYS) - 0x0200;
    }
    setStencilDepthFailOp(op) {
        this._stencilFrontDepthFailOp = op === null ? 1 : stencilOpToIndex[op];
    }
    setStencilPassOp(op) {
        this._stencilFrontPassOp = op === null ? 2 : stencilOpToIndex[op];
    }
    setStencilFailOp(op) {
        this._stencilFrontFailOp = op === null ? 1 : stencilOpToIndex[op];
    }
    setStencilReadMask(mask) {
        if (this._stencilReadMask !== mask) {
            this._stencilReadMask = mask;
            this._states[StatePosition.StencilReadMask] = mask;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.StencilReadMask);
        }
    }
    setStencilWriteMask(mask) {
        if (this._stencilWriteMask !== mask) {
            this._stencilWriteMask = mask;
            this._states[StatePosition.StencilWriteMask] = mask;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.StencilWriteMask);
        }
    }
    resetStencilState() {
        this.setStencilState(false, Constants.ALWAYS, Constants.KEEP, Constants.REPLACE, Constants.KEEP, 0xFF, 0xFF);
    }
    setStencilState(stencilEnabled, compare, depthFailOp, passOp, failOp, readMask, writeMask) {
        this._stencilEnabled = stencilEnabled;
        this._stencilFrontCompare = (compare !== null && compare !== void 0 ? compare : Constants.ALWAYS) - 0x0200;
        this._stencilFrontDepthFailOp = depthFailOp === null ? 1 : stencilOpToIndex[depthFailOp];
        this._stencilFrontPassOp = passOp === null ? 2 : stencilOpToIndex[passOp];
        this._stencilFrontFailOp = failOp === null ? 1 : stencilOpToIndex[failOp];
        this.setStencilReadMask(readMask);
        this.setStencilWriteMask(writeMask);
    }
    setBuffers(vertexBuffers, indexBuffer, overrideVertexBuffers) {
        this._vertexBuffers = vertexBuffers;
        this._overrideVertexBuffers = overrideVertexBuffers;
        this._indexBuffer = indexBuffer;
    }
    static _GetTopology(fillMode) {
        switch (fillMode) {
            case Constants.MATERIAL_TriangleFillMode:
                return PrimitiveTopology.TriangleList;
            case Constants.MATERIAL_PointFillMode:
                return PrimitiveTopology.PointList;
            case Constants.MATERIAL_WireFrameFillMode:
                return PrimitiveTopology.LineList;
            case Constants.MATERIAL_PointListDrawMode:
                return PrimitiveTopology.PointList;
            case Constants.MATERIAL_LineListDrawMode:
                return PrimitiveTopology.LineList;
            case Constants.MATERIAL_LineLoopDrawMode:
                throw "LineLoop is an unsupported fillmode in WebGPU";
            case Constants.MATERIAL_LineStripDrawMode:
                return PrimitiveTopology.LineStrip;
            case Constants.MATERIAL_TriangleStripDrawMode:
                return PrimitiveTopology.TriangleStrip;
            case Constants.MATERIAL_TriangleFanDrawMode:
                throw "TriangleFan is an unsupported fillmode in WebGPU";
            default:
                return PrimitiveTopology.TriangleList;
        }
    }
    static _GetAphaBlendOperation(operation) {
        switch (operation) {
            case Constants.GL_ALPHA_EQUATION_ADD:
                return BlendOperation.Add;
            case Constants.GL_ALPHA_EQUATION_SUBTRACT:
                return BlendOperation.Subtract;
            case Constants.GL_ALPHA_EQUATION_REVERSE_SUBTRACT:
                return BlendOperation.ReverseSubtract;
            case Constants.GL_ALPHA_EQUATION_MIN:
                return BlendOperation.Min;
            case Constants.GL_ALPHA_EQUATION_MAX:
                return BlendOperation.Max;
            default:
                return BlendOperation.Add;
        }
    }
    static _GetAphaBlendFactor(factor) {
        switch (factor) {
            case 0:
                return BlendFactor.Zero;
            case 1:
                return BlendFactor.One;
            case Constants.GL_ALPHA_FUNCTION_SRC:
                return BlendFactor.Src;
            case Constants.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR:
                return BlendFactor.OneMinusSrc;
            case Constants.GL_ALPHA_FUNCTION_SRC_ALPHA:
                return BlendFactor.SrcAlpha;
            case Constants.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA:
                return BlendFactor.OneMinusSrcAlpha;
            case Constants.GL_ALPHA_FUNCTION_DST_ALPHA:
                return BlendFactor.DstAlpha;
            case Constants.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA:
                return BlendFactor.OneMinusDstAlpha;
            case Constants.GL_ALPHA_FUNCTION_DST_COLOR:
                return BlendFactor.Dst;
            case Constants.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR:
                return BlendFactor.OneMinusDst;
            case Constants.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED:
                return BlendFactor.SrcAlphaSaturated;
            case Constants.GL_ALPHA_FUNCTION_CONSTANT_COLOR:
                return BlendFactor.Constant;
            case Constants.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR:
                return BlendFactor.OneMinusConstant;
            case Constants.GL_ALPHA_FUNCTION_CONSTANT_ALPHA:
                return BlendFactor.Constant;
            case Constants.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA:
                return BlendFactor.OneMinusConstant;
            default:
                return BlendFactor.One;
        }
    }
    static _GetCompareFunction(compareFunction) {
        switch (compareFunction) {
            case 0:
                return CompareFunction.Never;
            case 1:
                return CompareFunction.Less;
            case 2:
                return CompareFunction.Equal;
            case 3:
                return CompareFunction.LessEqual;
            case 4:
                return CompareFunction.Greater;
            case 5:
                return CompareFunction.NotEqual;
            case 6:
                return CompareFunction.GreaterEqual;
            case 7:
                return CompareFunction.Always;
        }
        return CompareFunction.Never;
    }
    static _GetStencilOpFunction(operation) {
        switch (operation) {
            case 0:
                return StencilOperation.Zero;
            case 1:
                return StencilOperation.Keep;
            case 2:
                return StencilOperation.Replace;
            case 3:
                return StencilOperation.IncrementClamp;
            case 4:
                return StencilOperation.DecrementClamp;
            case 5:
                return StencilOperation.Invert;
            case 6:
                return StencilOperation.IncrementWrap;
            case 7:
                return StencilOperation.DecrementWrap;
        }
        return StencilOperation.Keep;
    }
    static _GetVertexInputDescriptorFormat(vertexBuffer) {
        const type = vertexBuffer.type;
        const normalized = vertexBuffer.normalized;
        const size = vertexBuffer.getSize();
        switch (type) {
            case VertexBuffer.BYTE:
                switch (size) {
                    case 1:
                    case 2:
                        return normalized ? VertexFormat.Snorm8x2 : VertexFormat.Sint8x2;
                    case 3:
                    case 4:
                        return normalized ? VertexFormat.Snorm8x4 : VertexFormat.Sint8x4;
                }
                break;
            case VertexBuffer.UNSIGNED_BYTE:
                switch (size) {
                    case 1:
                    case 2:
                        return normalized ? VertexFormat.Unorm8x2 : VertexFormat.Uint8x2;
                    case 3:
                    case 4:
                        return normalized ? VertexFormat.Unorm8x4 : VertexFormat.Uint8x4;
                }
                break;
            case VertexBuffer.SHORT:
                switch (size) {
                    case 1:
                    case 2:
                        return normalized ? VertexFormat.Snorm16x2 : VertexFormat.Sint16x2;
                    case 3:
                    case 4:
                        return normalized ? VertexFormat.Snorm16x4 : VertexFormat.Sint16x4;
                }
                break;
            case VertexBuffer.UNSIGNED_SHORT:
                switch (size) {
                    case 1:
                    case 2:
                        return normalized ? VertexFormat.Unorm16x2 : VertexFormat.Uint16x2;
                    case 3:
                    case 4:
                        return normalized ? VertexFormat.Unorm16x4 : VertexFormat.Uint16x4;
                }
                break;
            case VertexBuffer.INT:
                switch (size) {
                    case 1:
                        return VertexFormat.Sint32;
                    case 2:
                        return VertexFormat.Sint32x2;
                    case 3:
                        return VertexFormat.Sint32x3;
                    case 4:
                        return VertexFormat.Sint32x4;
                }
                break;
            case VertexBuffer.UNSIGNED_INT:
                switch (size) {
                    case 1:
                        return VertexFormat.Uint32;
                    case 2:
                        return VertexFormat.Uint32x2;
                    case 3:
                        return VertexFormat.Uint32x3;
                    case 4:
                        return VertexFormat.Uint32x4;
                }
                break;
            case VertexBuffer.FLOAT:
                switch (size) {
                    case 1:
                        return VertexFormat.Float32;
                    case 2:
                        return VertexFormat.Float32x2;
                    case 3:
                        return VertexFormat.Float32x3;
                    case 4:
                        return VertexFormat.Float32x4;
                }
                break;
        }
        throw new Error(`Invalid Format '${vertexBuffer.getKind()}' - type=${type}, normalized=${normalized}, size=${size}`);
    }
    _getAphaBlendState() {
        if (!this._alphaBlendEnabled) {
            return null;
        }
        return {
            srcFactor: WebGPUCacheRenderPipeline._GetAphaBlendFactor(this._alphaBlendFuncParams[2]),
            dstFactor: WebGPUCacheRenderPipeline._GetAphaBlendFactor(this._alphaBlendFuncParams[3]),
            operation: WebGPUCacheRenderPipeline._GetAphaBlendOperation(this._alphaBlendEqParams[1]),
        };
    }
    _getColorBlendState() {
        if (!this._alphaBlendEnabled) {
            return null;
        }
        return {
            srcFactor: WebGPUCacheRenderPipeline._GetAphaBlendFactor(this._alphaBlendFuncParams[0]),
            dstFactor: WebGPUCacheRenderPipeline._GetAphaBlendFactor(this._alphaBlendFuncParams[1]),
            operation: WebGPUCacheRenderPipeline._GetAphaBlendOperation(this._alphaBlendEqParams[0]),
        };
    }
    _setShaderStage(id) {
        if (this._shaderId !== id) {
            this._shaderId = id;
            this._states[StatePosition.ShaderStage] = id;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.ShaderStage);
        }
    }
    _setRasterizationState(topology, sampleCount) {
        const frontFace = this._frontFace;
        const cullMode = this._cullEnabled ? this._cullFace : 0;
        const clampDepth = this._clampDepth ? 1 : 0;
        const alphaToCoverage = this._alphaToCoverageEnabled ? 1 : 0;
        const rasterizationState = (frontFace - 1) +
            (cullMode << 1) +
            (clampDepth << 3) +
            (alphaToCoverage << 4) +
            (topology << 5) +
            (sampleCount << 8);
        if (this._rasterizationState !== rasterizationState) {
            this._rasterizationState = rasterizationState;
            this._states[StatePosition.RasterizationState] = this._rasterizationState;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.RasterizationState);
        }
    }
    _setColorStates() {
        let colorStates = ((this._writeMask ? 1 : 0) << 22) + (this._colorFormat << 23) +
            ((this._depthWriteEnabled ? 1 : 0) << 29);
        if (this._alphaBlendEnabled) {
            colorStates +=
                ((this._alphaBlendFuncParams[0] === null ? 2 : alphaBlendFactorToIndex[this._alphaBlendFuncParams[0]]) << 0) +
                    ((this._alphaBlendFuncParams[1] === null ? 2 : alphaBlendFactorToIndex[this._alphaBlendFuncParams[1]]) << 4) +
                    ((this._alphaBlendFuncParams[2] === null ? 2 : alphaBlendFactorToIndex[this._alphaBlendFuncParams[2]]) << 8) +
                    ((this._alphaBlendFuncParams[3] === null ? 2 : alphaBlendFactorToIndex[this._alphaBlendFuncParams[3]]) << 12) +
                    ((this._alphaBlendEqParams[0] === null ? 1 : this._alphaBlendEqParams[0] - 0x8005) << 16) +
                    ((this._alphaBlendEqParams[1] === null ? 1 : this._alphaBlendEqParams[1] - 0x8005) << 19);
        }
        if (colorStates !== this._colorStates) {
            this._colorStates = colorStates;
            this._states[StatePosition.ColorStates] = this._colorStates;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.ColorStates);
        }
    }
    _setDepthStencilState() {
        let stencilState = !this._stencilEnabled ?
            7 + (1 << 3) + (1 << 6) + (1 << 9) :
            this._stencilFrontCompare + (this._stencilFrontDepthFailOp << 3) + (this._stencilFrontPassOp << 6) + (this._stencilFrontFailOp << 9);
        const depthStencilState = this._depthStencilFormat +
            ((this._depthTestEnabled ? this._depthCompare : 7) << 6) +
            (stencilState << 10);
        if (this._depthStencilState !== depthStencilState) {
            this._depthStencilState = depthStencilState;
            this._states[StatePosition.DepthStencilState] = this._depthStencilState;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.DepthStencilState);
        }
    }
    _setVertexState(effect) {
        var _a, _b;
        const currStateLen = this._statesLength;
        let newNumStates = StatePosition.VertexState;
        const webgpuPipelineContext = effect._pipelineContext;
        const attributes = webgpuPipelineContext.shaderProcessingContext.attributeNamesFromEffect;
        const locations = webgpuPipelineContext.shaderProcessingContext.attributeLocationsFromEffect;
        let currentGPUBuffer;
        let numVertexBuffers = 0;
        for (var index = 0; index < attributes.length; index++) {
            const location = locations[index];
            let vertexBuffer = (_a = (this._overrideVertexBuffers && this._overrideVertexBuffers[attributes[index]])) !== null && _a !== void 0 ? _a : this._vertexBuffers[attributes[index]];
            if (!vertexBuffer) {
                vertexBuffer = this._emptyVertexBuffer;
            }
            const buffer = (_b = vertexBuffer.getBuffer()) === null || _b === void 0 ? void 0 : _b.underlyingResource;
            if (vertexBuffer._validOffsetRange === undefined) {
                const offset = vertexBuffer.byteOffset;
                const formatSize = vertexBuffer.getSize(true);
                const byteStride = vertexBuffer.byteStride;
                vertexBuffer._validOffsetRange = offset <= (this._kMaxVertexBufferStride - formatSize) && (byteStride === 0 || (offset + formatSize) <= byteStride);
            }
            if (!(currentGPUBuffer && currentGPUBuffer === buffer && vertexBuffer._validOffsetRange)) {
                this.vertexBuffers[numVertexBuffers++] = vertexBuffer;
                currentGPUBuffer = vertexBuffer._validOffsetRange ? buffer : null;
            }
            const vid = vertexBuffer.hashCode + (location << 7);
            this._isDirty = this._isDirty || this._states[newNumStates] !== vid;
            this._states[newNumStates++] = vid;
        }
        this.vertexBuffers.length = numVertexBuffers;
        this._statesLength = newNumStates;
        this._isDirty = this._isDirty || newNumStates !== currStateLen;
        if (this._isDirty) {
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.VertexState);
        }
    }
    _setTextureState(textureState) {
        if (this._textureState !== textureState) {
            this._textureState = textureState;
            this._states[StatePosition.TextureStage] = this._textureState;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.TextureStage);
        }
    }
    _createPipelineLayout(webgpuPipelineContext) {
        if (this._useTextureStage) {
            return this._createPipelineLayoutWithTextureStage(webgpuPipelineContext);
        }
        const bindGroupLayouts = [];
        const bindGroupLayoutEntries = webgpuPipelineContext.shaderProcessingContext.bindGroupLayoutEntries;
        for (let i = 0; i < bindGroupLayoutEntries.length; i++) {
            const setDefinition = bindGroupLayoutEntries[i];
            bindGroupLayouts[i] = this._device.createBindGroupLayout({
                entries: setDefinition,
            });
        }
        webgpuPipelineContext.bindGroupLayouts = bindGroupLayouts;
        return this._device.createPipelineLayout({ bindGroupLayouts });
    }
    _createPipelineLayoutWithTextureStage(webgpuPipelineContext) {
        var _a;
        const shaderProcessingContext = webgpuPipelineContext.shaderProcessingContext;
        const bindGroupLayoutEntries = shaderProcessingContext.bindGroupLayoutEntries;
        let bitVal = 1;
        for (let i = 0; i < bindGroupLayoutEntries.length; i++) {
            const setDefinition = bindGroupLayoutEntries[i];
            for (let j = 0; j < setDefinition.length; j++) {
                const entry = bindGroupLayoutEntries[i][j];
                if (entry.texture) {
                    const name = shaderProcessingContext.bindGroupLayoutEntryInfo[i][entry.binding].name;
                    const textureInfo = shaderProcessingContext.availableTextures[name];
                    const samplerInfo = textureInfo.autoBindSampler ? shaderProcessingContext.availableSamplers[name + WebGPUShaderProcessor.AutoSamplerSuffix] : null;
                    let sampleType = textureInfo.sampleType;
                    let samplerType = (_a = samplerInfo === null || samplerInfo === void 0 ? void 0 : samplerInfo.type) !== null && _a !== void 0 ? _a : SamplerBindingType.Filtering;
                    if ((this._textureState & bitVal) && sampleType !== TextureSampleType.Depth) {
                        if (textureInfo.autoBindSampler) {
                            samplerType = SamplerBindingType.NonFiltering;
                        }
                        sampleType = TextureSampleType.UnfilterableFloat;
                    }
                    entry.texture.sampleType = sampleType;
                    if (samplerInfo) {
                        const binding = shaderProcessingContext.bindGroupLayoutEntryInfo[samplerInfo.binding.groupIndex][samplerInfo.binding.bindingIndex].index;
                        bindGroupLayoutEntries[samplerInfo.binding.groupIndex][binding].sampler.type = samplerType;
                    }
                    bitVal = bitVal << 1;
                }
            }
        }
        const bindGroupLayouts = [];
        for (let i = 0; i < bindGroupLayoutEntries.length; ++i) {
            bindGroupLayouts[i] = this._device.createBindGroupLayout({
                entries: bindGroupLayoutEntries[i],
            });
        }
        webgpuPipelineContext.bindGroupLayouts = bindGroupLayouts;
        return this._device.createPipelineLayout({ bindGroupLayouts });
    }
    _getVertexInputDescriptor(effect, topology) {
        var _a, _b;
        const descriptors = [];
        const webgpuPipelineContext = effect._pipelineContext;
        const attributes = webgpuPipelineContext.shaderProcessingContext.attributeNamesFromEffect;
        const locations = webgpuPipelineContext.shaderProcessingContext.attributeLocationsFromEffect;
        let currentGPUBuffer;
        let currentGPUAttributes;
        for (var index = 0; index < attributes.length; index++) {
            const location = locations[index];
            let vertexBuffer = (_a = (this._overrideVertexBuffers && this._overrideVertexBuffers[attributes[index]])) !== null && _a !== void 0 ? _a : this._vertexBuffers[attributes[index]];
            if (!vertexBuffer) {
                vertexBuffer = this._emptyVertexBuffer;
            }
            let buffer = (_b = vertexBuffer.getBuffer()) === null || _b === void 0 ? void 0 : _b.underlyingResource;
            let offset = vertexBuffer.byteOffset;
            const invalidOffsetRange = !vertexBuffer._validOffsetRange;
            if (!(currentGPUBuffer && currentGPUAttributes && currentGPUBuffer === buffer) || invalidOffsetRange) {
                const vertexBufferDescriptor = {
                    arrayStride: vertexBuffer.byteStride,
                    stepMode: vertexBuffer.getIsInstanced() ? InputStepMode.Instance : InputStepMode.Vertex,
                    attributes: []
                };
                descriptors.push(vertexBufferDescriptor);
                currentGPUAttributes = vertexBufferDescriptor.attributes;
                if (invalidOffsetRange) {
                    offset = 0;
                    buffer = null;
                }
            }
            currentGPUAttributes.push({
                shaderLocation: location,
                offset,
                format: WebGPUCacheRenderPipeline._GetVertexInputDescriptorFormat(vertexBuffer),
            });
            currentGPUBuffer = buffer;
        }
        return descriptors;
    }
    _createRenderPipeline(effect, topology, sampleCount) {
        const webgpuPipelineContext = effect._pipelineContext;
        const inputStateDescriptor = this._getVertexInputDescriptor(effect, topology);
        const pipelineLayout = this._createPipelineLayout(webgpuPipelineContext);
        const colorStates = [];
        const alphaBlend = this._getAphaBlendState();
        const colorBlend = this._getColorBlendState();
        if (this._mrtAttachments1 > 0) {
            for (let i = 0; i < this._mrtFormats.length; ++i) {
                const descr = {
                    format: this._mrtFormats[i],
                    writeMask: this._writeMask,
                };
                if (alphaBlend && colorBlend) {
                    descr.blend = {
                        alpha: alphaBlend,
                        color: colorBlend,
                    };
                }
                colorStates.push(descr);
            }
        }
        else {
            const descr = {
                format: this._webgpuColorFormat[0],
                writeMask: this._writeMask,
            };
            if (alphaBlend && colorBlend) {
                descr.blend = {
                    alpha: alphaBlend,
                    color: colorBlend,
                };
            }
            colorStates.push(descr);
        }
        const stencilFrontBack = {
            compare: WebGPUCacheRenderPipeline._GetCompareFunction(this._stencilEnabled ? this._stencilFrontCompare : 7),
            depthFailOp: WebGPUCacheRenderPipeline._GetStencilOpFunction(this._stencilEnabled ? this._stencilFrontDepthFailOp : 1),
            failOp: WebGPUCacheRenderPipeline._GetStencilOpFunction(this._stencilEnabled ? this._stencilFrontFailOp : 1),
            passOp: WebGPUCacheRenderPipeline._GetStencilOpFunction(this._stencilEnabled ? this._stencilFrontPassOp : 1)
        };
        let stripIndexFormat = undefined;
        if (topology === PrimitiveTopology.LineStrip || topology === PrimitiveTopology.TriangleStrip) {
            stripIndexFormat = !this._indexBuffer || this._indexBuffer.is32Bits ? IndexFormat.Uint32 : IndexFormat.Uint16;
        }
        return this._device.createRenderPipeline({
            layout: pipelineLayout,
            vertex: {
                module: webgpuPipelineContext.stages.vertexStage.module,
                entryPoint: webgpuPipelineContext.stages.vertexStage.entryPoint,
                buffers: inputStateDescriptor,
            },
            primitive: {
                topology,
                stripIndexFormat,
                frontFace: this._frontFace === 1 ? FrontFace.CCW : FrontFace.CW,
                cullMode: !this._cullEnabled ? CullMode.None : this._cullFace === 2 ? CullMode.Front : CullMode.Back,
            },
            fragment: !webgpuPipelineContext.stages.fragmentStage ? undefined : {
                module: webgpuPipelineContext.stages.fragmentStage.module,
                entryPoint: webgpuPipelineContext.stages.fragmentStage.entryPoint,
                targets: colorStates,
            },
            multisample: {
                count: sampleCount,
            },
            depthStencil: this._webgpuDepthStencilFormat === undefined ? undefined : {
                depthWriteEnabled: this._depthWriteEnabled,
                depthCompare: this._depthTestEnabled ? WebGPUCacheRenderPipeline._GetCompareFunction(this._depthCompare) : CompareFunction.Always,
                format: this._webgpuDepthStencilFormat,
                stencilFront: stencilFrontBack,
                stencilBack: stencilFrontBack,
                stencilReadMask: this._stencilReadMask,
                stencilWriteMask: this._stencilWriteMask,
                depthBias: this._depthBias,
                depthBiasClamp: this._depthBiasClamp,
                depthBiasSlopeScale: this._depthBiasSlopeScale,
            },
        });
    }
}
WebGPUCacheRenderPipeline.NumCacheHitWithoutHash = 0;
WebGPUCacheRenderPipeline.NumCacheHitWithHash = 0;
WebGPUCacheRenderPipeline.NumCacheMiss = 0;
WebGPUCacheRenderPipeline.NumPipelineCreationLastFrame = 0;
WebGPUCacheRenderPipeline._NumPipelineCreationCurrentFrame = 0;
class NodeState {
    constructor() {
        this.values = {};
    }
    count() {
        let countNode = 0, countPipeline = this.pipeline ? 1 : 0;
        for (const value in this.values) {
            const node = this.values[value];
            const [childCountNodes, childCoundPipeline] = node.count();
            countNode += childCountNodes;
            countPipeline += childCoundPipeline;
            countNode++;
        }
        return [countNode, countPipeline];
    }
}
class WebGPUCacheRenderPipelineTree extends WebGPUCacheRenderPipeline {
    constructor(device, emptyVertexBuffer, useTextureStage) {
        super(device, emptyVertexBuffer, useTextureStage);
        this._nodeStack = [];
        this._nodeStack[0] = WebGPUCacheRenderPipelineTree._Cache;
    }
    static GetNodeCounts() {
        const counts = WebGPUCacheRenderPipelineTree._Cache.count();
        return { nodeCount: counts[0], pipelineCount: counts[1] };
    }
    static _GetPipelines(node, pipelines, curPath, curPathLen) {
        if (node.pipeline) {
            const path = curPath.slice();
            path.length = curPathLen;
            pipelines.push(path);
        }
        for (const value in node.values) {
            const nnode = node.values[value];
            curPath[curPathLen] = parseInt(value);
            WebGPUCacheRenderPipelineTree._GetPipelines(nnode, pipelines, curPath, curPathLen + 1);
        }
    }
    static GetPipelines() {
        const pipelines = [];
        WebGPUCacheRenderPipelineTree._GetPipelines(WebGPUCacheRenderPipelineTree._Cache, pipelines, [], 0);
        return pipelines;
    }
    _getRenderPipeline(param) {
        let node = this._nodeStack[this._stateDirtyLowestIndex];
        for (let i = this._stateDirtyLowestIndex; i < this._statesLength; ++i) {
            let nn = node.values[this._states[i]];
            if (!nn) {
                nn = new NodeState();
                node.values[this._states[i]] = nn;
            }
            node = nn;
            this._nodeStack[i + 1] = node;
        }
        param.token = node;
        param.pipeline = node.pipeline;
    }
    _setRenderPipeline(param) {
        param.token.pipeline = param.pipeline;
    }
}
WebGPUCacheRenderPipelineTree._Cache = new NodeState();
class WebGPUStencilStateComposer extends StencilStateComposer {
    constructor(cache) {
        super(false);
        this._cache = cache;
        this.reset();
    }
    get func() {
        return this._func;
    }
    set func(value) {
        if (this._func === value) {
            return;
        }
        this._func = value;
        this._cache.setStencilCompare(value);
    }
    get funcMask() {
        return this._funcMask;
    }
    set funcMask(value) {
        if (this._funcMask === value) {
            return;
        }
        this._funcMask = value;
        this._cache.setStencilReadMask(value);
    }
    get opStencilFail() {
        return this._opStencilFail;
    }
    set opStencilFail(value) {
        if (this._opStencilFail === value) {
            return;
        }
        this._opStencilFail = value;
        this._cache.setStencilFailOp(value);
    }
    get opDepthFail() {
        return this._opDepthFail;
    }
    set opDepthFail(value) {
        if (this._opDepthFail === value) {
            return;
        }
        this._opDepthFail = value;
        this._cache.setStencilDepthFailOp(value);
    }
    get opStencilDepthPass() {
        return this._opStencilDepthPass;
    }
    set opStencilDepthPass(value) {
        if (this._opStencilDepthPass === value) {
            return;
        }
        this._opStencilDepthPass = value;
        this._cache.setStencilPassOp(value);
    }
    get mask() {
        return this._mask;
    }
    set mask(value) {
        if (this._mask === value) {
            return;
        }
        this._mask = value;
        this._cache.setStencilWriteMask(value);
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        if (this._enabled === value) {
            return;
        }
        this._enabled = value;
        this._cache.setStencilEnabled(value);
    }
    reset() {
        super.reset();
        this._cache.resetStencilState();
    }
    apply(gl) {
        var _a;
        const stencilMaterialEnabled = (_a = this.stencilMaterial) === null || _a === void 0 ? void 0 : _a.enabled;
        this.enabled = stencilMaterialEnabled ? this.stencilMaterial.enabled : this.stencilGlobal.enabled;
        if (!this.enabled) {
            return;
        }
        this.func = stencilMaterialEnabled ? this.stencilMaterial.func : this.stencilGlobal.func;
        this.funcRef = stencilMaterialEnabled ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef;
        this.funcMask = stencilMaterialEnabled ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask;
        this.opStencilFail = stencilMaterialEnabled ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail;
        this.opDepthFail = stencilMaterialEnabled ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail;
        this.opStencilDepthPass = stencilMaterialEnabled ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass;
        this.mask = stencilMaterialEnabled ? this.stencilMaterial.mask : this.stencilGlobal.mask;
    }
}
class WebGPUDepthCullingState extends DepthCullingState {
    constructor(cache) {
        super(false);
        this._cache = cache;
        this.reset();
    }
    get zOffset() {
        return this._zOffset;
    }
    set zOffset(value) {
        if (this._zOffset === value) {
            return;
        }
        this._zOffset = value;
        this._isZOffsetDirty = true;
        this._cache.setDepthBiasSlopeScale(value);
    }
    get zOffsetUnits() {
        return this._zOffsetUnits;
    }
    set zOffsetUnits(value) {
        if (this._zOffsetUnits === value) {
            return;
        }
        this._zOffsetUnits = value;
        this._isZOffsetDirty = true;
        this._cache.setDepthBias(value);
    }
    get cullFace() {
        return this._cullFace;
    }
    set cullFace(value) {
        if (this._cullFace === value) {
            return;
        }
        this._cullFace = value;
        this._isCullFaceDirty = true;
        this._cache.setCullFace(value !== null && value !== void 0 ? value : 1);
    }
    get cull() {
        return this._cull;
    }
    set cull(value) {
        if (this._cull === value) {
            return;
        }
        this._cull = value;
        this._isCullDirty = true;
        this._cache.setCullEnabled(!!value);
    }
    get depthFunc() {
        return this._depthFunc;
    }
    set depthFunc(value) {
        if (this._depthFunc === value) {
            return;
        }
        this._depthFunc = value;
        this._isDepthFuncDirty = true;
        this._cache.setDepthCompare(value);
    }
    get depthMask() {
        return this._depthMask;
    }
    set depthMask(value) {
        if (this._depthMask === value) {
            return;
        }
        this._depthMask = value;
        this._isDepthMaskDirty = true;
        this._cache.setDepthWriteEnabled(value);
    }
    get depthTest() {
        return this._depthTest;
    }
    set depthTest(value) {
        if (this._depthTest === value) {
            return;
        }
        this._depthTest = value;
        this._isDepthTestDirty = true;
        this._cache.setDepthTestEnabled(value);
    }
    get frontFace() {
        return this._frontFace;
    }
    set frontFace(value) {
        if (this._frontFace === value) {
            return;
        }
        this._frontFace = value;
        this._isFrontFaceDirty = true;
        this._cache.setFrontFace(value !== null && value !== void 0 ? value : 2);
    }
    reset() {
        super.reset();
        this._cache.resetDepthCullingState();
    }
    apply(gl) {
    }
}
class ExternalTexture {
    constructor(video) {
        this.useMipMaps = false;
        this.type = Constants.TEXTURETYPE_UNDEFINED;
        this._video = video;
        this.uniqueId = InternalTexture._Counter++;
    }
    static IsExternalTexture(texture) {
        return texture.underlyingResource !== undefined;
    }
    getClassName() {
        return "ExternalTexture";
    }
    get underlyingResource() {
        return this._video;
    }
    isReady() {
        return this._video.readyState >= this._video.HAVE_CURRENT_DATA;
    }
    dispose() {
    }
}
class WebGPUMaterialContext {
    constructor() {
        this.uniqueId = WebGPUMaterialContext._Counter++;
        this.updateId = 0;
        this.reset();
    }
    get forceBindGroupCreation() {
        return this._numExternalTextures > 0;
    }
    get hasFloatTextures() {
        return this._numFloatTextures > 0;
    }
    reset() {
        this.samplers = {};
        this.textures = {};
        this.isDirty = true;
        this._numFloatTextures = 0;
        this._numExternalTextures = 0;
    }
    setSampler(name, sampler) {
        let samplerCache = this.samplers[name];
        let currentHashCode = -1;
        if (!samplerCache) {
            this.samplers[name] = samplerCache = { sampler, hashCode: 0 };
        }
        else {
            currentHashCode = samplerCache.hashCode;
        }
        samplerCache.sampler = sampler;
        samplerCache.hashCode = sampler ? WebGPUCacheSampler.GetSamplerHashCode(sampler) : 0;
        const isDirty = currentHashCode !== samplerCache.hashCode;
        if (isDirty) {
            this.updateId++;
        }
        this.isDirty || (this.isDirty = isDirty);
    }
    setTexture(name, texture) {
        var _a, _b, _c;
        let textureCache = this.textures[name];
        let currentTextureId = -1;
        if (!textureCache) {
            this.textures[name] = textureCache = { texture, isFloatTexture: false, isExternalTexture: false };
        }
        else {
            currentTextureId = (_b = (_a = textureCache.texture) === null || _a === void 0 ? void 0 : _a.uniqueId) !== null && _b !== void 0 ? _b : -1;
        }
        if (textureCache.isExternalTexture) {
            this._numExternalTextures--;
        }
        if (textureCache.isFloatTexture) {
            this._numFloatTextures--;
        }
        if (texture) {
            textureCache.isFloatTexture = texture.type === Constants.TEXTURETYPE_FLOAT;
            textureCache.isExternalTexture = ExternalTexture.IsExternalTexture(texture);
            if (textureCache.isFloatTexture) {
                this._numFloatTextures++;
            }
            if (textureCache.isExternalTexture) {
                this._numExternalTextures++;
            }
        }
        else {
            textureCache.isFloatTexture = false;
            textureCache.isExternalTexture = false;
        }
        textureCache.texture = texture;
        const isDirty = currentTextureId !== ((_c = texture === null || texture === void 0 ? void 0 : texture.uniqueId) !== null && _c !== void 0 ? _c : -1);
        if (isDirty) {
            this.updateId++;
        }
        this.isDirty || (this.isDirty = isDirty);
    }
}
WebGPUMaterialContext._Counter = 0;
class WebGPUDrawContext {
    constructor(bufferManager) {
        this._bufferManager = bufferManager;
        this.uniqueId = WebGPUDrawContext._Counter++;
        this._useInstancing = false;
        this._currentInstanceCount = 0;
        this.reset();
    }
    isDirty(materialContextUpdateId) {
        return this._isDirty || this.materialContextUpdateId !== materialContextUpdateId;
    }
    resetIsDirty(materialContextUpdateId) {
        this._isDirty = false;
        this.materialContextUpdateId = materialContextUpdateId;
    }
    get useInstancing() {
        return this._useInstancing;
    }
    set useInstancing(use) {
        if (this._useInstancing === use) {
            return;
        }
        if (!use) {
            if (this.indirectDrawBuffer) {
                this._bufferManager.releaseBuffer(this.indirectDrawBuffer);
            }
            this.indirectDrawBuffer = undefined;
            this._indirectDrawData = undefined;
        }
        else {
            this.indirectDrawBuffer = this._bufferManager.createRawBuffer(40, BufferUsage.CopyDst | BufferUsage.Indirect);
            this._indirectDrawData = new Uint32Array(5);
            this._indirectDrawData[3] = 0;
            this._indirectDrawData[4] = 0;
        }
        this._useInstancing = use;
        this._currentInstanceCount = -1;
    }
    reset() {
        this.buffers = {};
        this._isDirty = true;
        this.materialContextUpdateId = 0;
        this.fastBundle = undefined;
        this.bindGroups = undefined;
    }
    setBuffer(name, buffer) {
        var _a;
        this._isDirty || (this._isDirty = (buffer === null || buffer === void 0 ? void 0 : buffer.uniqueId) !== ((_a = this.buffers[name]) === null || _a === void 0 ? void 0 : _a.uniqueId));
        this.buffers[name] = buffer;
    }
    setIndirectData(indexOrVertexCount, instanceCount, firstIndexOrVertex) {
        if (instanceCount === this._currentInstanceCount || !this.indirectDrawBuffer || !this._indirectDrawData) {
            return;
        }
        this._currentInstanceCount = instanceCount;
        this._indirectDrawData[0] = indexOrVertexCount;
        this._indirectDrawData[1] = instanceCount;
        this._indirectDrawData[2] = firstIndexOrVertex;
        this._bufferManager.setRawData(this.indirectDrawBuffer, 0, this._indirectDrawData, 0, 20);
    }
    dispose() {
        if (this.indirectDrawBuffer) {
            this._bufferManager.releaseBuffer(this.indirectDrawBuffer);
            this.indirectDrawBuffer = undefined;
            this._indirectDrawData = undefined;
        }
        this.fastBundle = undefined;
        this.bindGroups = undefined;
        this.buffers = undefined;
    }
}
WebGPUDrawContext._Counter = 0;
class WebGPUBindGroupCacheNode {
    constructor() {
        this.values = {};
    }
}
class WebGPUCacheBindGroups {
    constructor(device, cacheSampler, engine) {
        this.disabled = false;
        this._device = device;
        this._cacheSampler = cacheSampler;
        this._engine = engine;
    }
    static get Statistics() {
        return {
            totalCreated: WebGPUCacheBindGroups.NumBindGroupsCreatedTotal,
            lastFrameCreated: WebGPUCacheBindGroups.NumBindGroupsCreatedLastFrame,
            lookupLastFrame: WebGPUCacheBindGroups.NumBindGroupsLookupLastFrame,
            noLookupLastFrame: WebGPUCacheBindGroups.NumBindGroupsNoLookupLastFrame,
        };
    }
    endFrame() {
        WebGPUCacheBindGroups.NumBindGroupsCreatedLastFrame = WebGPUCacheBindGroups._NumBindGroupsCreatedCurrentFrame;
        WebGPUCacheBindGroups.NumBindGroupsLookupLastFrame = WebGPUCacheBindGroups._NumBindGroupsLookupCurrentFrame;
        WebGPUCacheBindGroups.NumBindGroupsNoLookupLastFrame = WebGPUCacheBindGroups._NumBindGroupsNoLookupCurrentFrame;
        WebGPUCacheBindGroups._NumBindGroupsCreatedCurrentFrame = 0;
        WebGPUCacheBindGroups._NumBindGroupsLookupCurrentFrame = 0;
        WebGPUCacheBindGroups._NumBindGroupsNoLookupCurrentFrame = 0;
    }
    getBindGroups(webgpuPipelineContext, drawContext, materialContext) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        let bindGroups = undefined;
        let node = WebGPUCacheBindGroups._Cache;
        const cacheIsDisabled = this.disabled || materialContext.forceBindGroupCreation;
        if (!cacheIsDisabled) {
            if (!drawContext.isDirty(materialContext.updateId) && !materialContext.isDirty) {
                WebGPUCacheBindGroups._NumBindGroupsNoLookupCurrentFrame++;
                return drawContext.bindGroups;
            }
            for (const bufferName of webgpuPipelineContext.shaderProcessingContext.bufferNames) {
                const uboId = (_b = (_a = drawContext.buffers[bufferName]) === null || _a === void 0 ? void 0 : _a.uniqueId) !== null && _b !== void 0 ? _b : 0;
                let nextNode = node.values[uboId];
                if (!nextNode) {
                    nextNode = new WebGPUBindGroupCacheNode();
                    node.values[uboId] = nextNode;
                }
                node = nextNode;
            }
            for (const samplerName of webgpuPipelineContext.shaderProcessingContext.samplerNames) {
                const samplerHashCode = (_d = (_c = materialContext.samplers[samplerName]) === null || _c === void 0 ? void 0 : _c.hashCode) !== null && _d !== void 0 ? _d : 0;
                let nextNode = node.values[samplerHashCode];
                if (!nextNode) {
                    nextNode = new WebGPUBindGroupCacheNode();
                    node.values[samplerHashCode] = nextNode;
                }
                node = nextNode;
            }
            for (const textureName of webgpuPipelineContext.shaderProcessingContext.textureNames) {
                const textureId = (_g = (_f = (_e = materialContext.textures[textureName]) === null || _e === void 0 ? void 0 : _e.texture) === null || _f === void 0 ? void 0 : _f.uniqueId) !== null && _g !== void 0 ? _g : 0;
                let nextNode = node.values[textureId];
                if (!nextNode) {
                    nextNode = new WebGPUBindGroupCacheNode();
                    node.values[textureId] = nextNode;
                }
                node = nextNode;
            }
            bindGroups = node.bindGroups;
        }
        drawContext.resetIsDirty(materialContext.updateId);
        materialContext.isDirty = false;
        if (bindGroups) {
            drawContext.bindGroups = bindGroups;
            WebGPUCacheBindGroups._NumBindGroupsLookupCurrentFrame++;
            return bindGroups;
        }
        bindGroups = [];
        drawContext.bindGroups = bindGroups;
        if (!cacheIsDisabled) {
            node.bindGroups = bindGroups;
        }
        WebGPUCacheBindGroups.NumBindGroupsCreatedTotal++;
        WebGPUCacheBindGroups._NumBindGroupsCreatedCurrentFrame++;
        const bindGroupLayouts = webgpuPipelineContext.bindGroupLayouts;
        for (let i = 0; i < webgpuPipelineContext.shaderProcessingContext.bindGroupLayoutEntries.length; i++) {
            const setDefinition = webgpuPipelineContext.shaderProcessingContext.bindGroupLayoutEntries[i];
            const entries = webgpuPipelineContext.shaderProcessingContext.bindGroupEntries[i];
            for (let j = 0; j < setDefinition.length; j++) {
                const entry = webgpuPipelineContext.shaderProcessingContext.bindGroupLayoutEntries[i][j];
                const entryInfo = webgpuPipelineContext.shaderProcessingContext.bindGroupLayoutEntryInfo[i][entry.binding];
                const name = (_h = entryInfo.nameInArrayOfTexture) !== null && _h !== void 0 ? _h : entryInfo.name;
                if (entry.sampler) {
                    const bindingInfo = materialContext.samplers[name];
                    if (bindingInfo) {
                        const sampler = bindingInfo.sampler;
                        if (!sampler) {
                            if (this._engine.dbgSanityChecks) {
                                Logger.Error(`Trying to bind a null sampler! entry=${JSON.stringify(entry)}, name=${name}, bindingInfo=${JSON.stringify(bindingInfo, (key, value) => key === 'texture' ? '<no dump>' : value)}, materialContext.uniqueId=${materialContext.uniqueId}`, 50);
                            }
                            continue;
                        }
                        entries[j].resource = this._cacheSampler.getSampler(sampler, false, bindingInfo.hashCode);
                    }
                    else {
                        Logger.Error(`Sampler "${name}" could not be bound. entry=${JSON.stringify(entry)}, materialContext=${JSON.stringify(materialContext, (key, value) => key === 'texture' || key === 'sampler' ? '<no dump>' : value)}`, 50);
                    }
                }
                else if (entry.texture || entry.storageTexture) {
                    const bindingInfo = materialContext.textures[name];
                    if (bindingInfo) {
                        if (this._engine.dbgSanityChecks && bindingInfo.texture === null) {
                            Logger.Error(`Trying to bind a null texture! entry=${JSON.stringify(entry)}, bindingInfo=${JSON.stringify(bindingInfo, (key, value) => key === 'texture' ? '<no dump>' : value)}, materialContext.uniqueId=${materialContext.uniqueId}`, 50);
                            continue;
                        }
                        const hardwareTexture = bindingInfo.texture._hardwareTexture;
                        if (this._engine.dbgSanityChecks && (!hardwareTexture || entry.texture && !hardwareTexture.view || entry.storageTexture && !hardwareTexture.viewForWriting)) {
                            Logger.Error(`Trying to bind a null gpu texture or view! entry=${JSON.stringify(entry)}, name=${name}, bindingInfo=${JSON.stringify(bindingInfo, (key, value) => key === 'texture' ? '<no dump>' : value)}, isReady=${(_j = bindingInfo.texture) === null || _j === void 0 ? void 0 : _j.isReady}, materialContext.uniqueId=${materialContext.uniqueId}`, 50);
                            continue;
                        }
                        entries[j].resource = entry.storageTexture ? hardwareTexture.viewForWriting : hardwareTexture.view;
                    }
                    else {
                        Logger.Error(`Texture "${name}" could not be bound. entry=${JSON.stringify(entry)}, materialContext=${JSON.stringify(materialContext, (key, value) => key === 'texture' || key === 'sampler' ? '<no dump>' : value)}`, 50);
                    }
                }
                else if (entry.externalTexture) {
                    const bindingInfo = materialContext.textures[name];
                    if (bindingInfo) {
                        if (this._engine.dbgSanityChecks && bindingInfo.texture === null) {
                            Logger.Error(`Trying to bind a null external texture! entry=${JSON.stringify(entry)}, name=${name}, bindingInfo=${JSON.stringify(bindingInfo, (key, value) => key === 'texture' ? '<no dump>' : value)}, materialContext.uniqueId=${materialContext.uniqueId}`, 50);
                            continue;
                        }
                        const externalTexture = bindingInfo.texture.underlyingResource;
                        if (this._engine.dbgSanityChecks && !externalTexture) {
                            Logger.Error(`Trying to bind a null gpu external texture! entry=${JSON.stringify(entry)}, name=${name}, bindingInfo=${JSON.stringify(bindingInfo, (key, value) => key === 'texture' ? '<no dump>' : value)}, isReady=${(_k = bindingInfo.texture) === null || _k === void 0 ? void 0 : _k.isReady}, materialContext.uniqueId=${materialContext.uniqueId}`, 50);
                            continue;
                        }
                        entries[j].resource = this._device.importExternalTexture({ source: externalTexture });
                    }
                    else {
                        Logger.Error(`Texture "${name}" could not be bound. entry=${JSON.stringify(entry)}, materialContext=${JSON.stringify(materialContext, (key, value) => key === 'texture' || key === 'sampler' ? '<no dump>' : value)}`, 50);
                    }
                }
                else if (entry.buffer) {
                    const dataBuffer = drawContext.buffers[name];
                    if (dataBuffer) {
                        const webgpuBuffer = dataBuffer.underlyingResource;
                        entries[j].resource.buffer = webgpuBuffer;
                        entries[j].resource.size = dataBuffer.capacity;
                    }
                    else {
                        Logger.Error(`Can't find buffer "${name}". entry=${JSON.stringify(entry)}, buffers=${JSON.stringify(drawContext.buffers)}, drawContext.uniqueId=${drawContext.uniqueId}`, 50);
                    }
                }
            }
            let groupLayout = bindGroupLayouts[i];
            bindGroups[i] = this._device.createBindGroup({
                layout: groupLayout,
                entries,
            });
        }
        return bindGroups;
    }
}
WebGPUCacheBindGroups.NumBindGroupsCreatedTotal = 0;
WebGPUCacheBindGroups.NumBindGroupsCreatedLastFrame = 0;
WebGPUCacheBindGroups.NumBindGroupsLookupLastFrame = 0;
WebGPUCacheBindGroups.NumBindGroupsNoLookupLastFrame = 0;
WebGPUCacheBindGroups._Cache = new WebGPUBindGroupCacheNode();
WebGPUCacheBindGroups._NumBindGroupsCreatedCurrentFrame = 0;
WebGPUCacheBindGroups._NumBindGroupsLookupCurrentFrame = 0;
WebGPUCacheBindGroups._NumBindGroupsNoLookupCurrentFrame = 0;
class WebGPUClearQuad {
    constructor(device, engine, emptyVertexBuffer) {
        this._bindGroups = {};
        this._bundleCache = {};
        this._device = device;
        this._engine = engine;
        this._cacheRenderPipeline = new WebGPUCacheRenderPipelineTree(this._device, emptyVertexBuffer, !engine._caps.textureFloatLinearFiltering);
        this._cacheRenderPipeline.setDepthTestEnabled(false);
        this._cacheRenderPipeline.setStencilReadMask(0xFF);
        this._effect = engine.createEffect("clearQuad", [], ["color", "depthValue"]);
    }
    setDepthStencilFormat(format) {
        this._depthTextureFormat = format;
        this._cacheRenderPipeline.setDepthStencilFormat(format);
    }
    setColorFormat(format) {
        this._cacheRenderPipeline.setColorFormat(format);
    }
    setMRTAttachments(attachments, textureArray) {
        this._cacheRenderPipeline.setMRTAttachments(attachments, textureArray);
    }
    clear(renderPass, clearColor, clearDepth, clearStencil, sampleCount = 1) {
        let renderPass2;
        let bundle = null;
        let bundleKey = 0;
        const isRTTPass = !!this._engine._currentRenderTarget;
        if (renderPass) {
            renderPass2 = renderPass;
        }
        else {
            bundleKey = (clearColor ? clearColor.r + clearColor.g * 256 + clearColor.b * 256 * 256 + clearColor.a * 256 * 256 * 256 : 0) +
                (clearDepth ? 2 ** 32 : 0) +
                (clearStencil ? 2 ** 33 : 0) +
                (this._engine.useReverseDepthBuffer ? 2 ** 34 : 0) +
                (isRTTPass ? 2 ** 35 : 0) +
                sampleCount * (2 ** 36);
            bundle = this._bundleCache[bundleKey];
            if (bundle) {
                return bundle;
            }
            renderPass2 = this._device.createRenderBundleEncoder({
                colorFormats: this._cacheRenderPipeline.colorFormats,
                depthStencilFormat: this._depthTextureFormat,
                sampleCount,
            });
        }
        this._cacheRenderPipeline.setDepthWriteEnabled(!!clearDepth);
        this._cacheRenderPipeline.setStencilEnabled(!!clearStencil);
        this._cacheRenderPipeline.setStencilWriteMask(clearStencil ? 0xFF : 0);
        this._cacheRenderPipeline.setStencilCompare(clearStencil ? Constants.ALWAYS : Constants.NEVER);
        this._cacheRenderPipeline.setStencilPassOp(clearStencil ? Constants.REPLACE : Constants.KEEP);
        this._cacheRenderPipeline.setWriteMask(clearColor ? 0xF : 0);
        const pipeline = this._cacheRenderPipeline.getRenderPipeline(Constants.MATERIAL_TriangleStripDrawMode, this._effect, sampleCount);
        const webgpuPipelineContext = this._effect._pipelineContext;
        if (clearColor) {
            this._effect.setDirectColor4("color", clearColor);
        }
        this._effect.setFloat("depthValue", this._engine.useReverseDepthBuffer ? this._engine._clearReverseDepthValue : this._engine._clearDepthValue);
        webgpuPipelineContext.uniformBuffer.update();
        const bufferInternals = isRTTPass ? this._engine._ubInvertY : this._engine._ubDontInvertY;
        const bufferLeftOver = webgpuPipelineContext.uniformBuffer.getBuffer();
        const key = bufferLeftOver.uniqueId + "-" + bufferInternals.uniqueId;
        let bindGroups = this._bindGroups[key];
        if (!bindGroups) {
            const bindGroupLayouts = webgpuPipelineContext.bindGroupLayouts;
            bindGroups = this._bindGroups[key] = [];
            bindGroups.push(this._device.createBindGroup({
                layout: bindGroupLayouts[0],
                entries: []
            }));
            if (!WebGPUShaderProcessingContext._SimplifiedKnownBindings) {
                bindGroups.push(this._device.createBindGroup({
                    layout: bindGroupLayouts[1],
                    entries: []
                }));
            }
            bindGroups.push(this._device.createBindGroup({
                layout: bindGroupLayouts[WebGPUShaderProcessingContext._SimplifiedKnownBindings ? 1 : 2],
                entries: [{
                        binding: 0,
                        resource: {
                            buffer: bufferInternals.underlyingResource,
                            size: bufferInternals.capacity
                        },
                    }, {
                        binding: 1,
                        resource: {
                            buffer: bufferLeftOver.underlyingResource,
                            size: bufferLeftOver.capacity
                        },
                    }],
            }));
        }
        renderPass2.setPipeline(pipeline);
        for (let i = 0; i < bindGroups.length; ++i) {
            renderPass2.setBindGroup(i, bindGroups[i]);
        }
        renderPass2.draw(4, 1, 0, 0);
        if (!renderPass) {
            bundle = renderPass2.finish();
            this._bundleCache[bundleKey] = bundle;
        }
        return bundle;
    }
}
class WebGPURenderItemViewport {
    constructor(x, y, w, h) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.w = Math.floor(w);
        this.h = Math.floor(h);
    }
    run(renderPass) {
        renderPass.setViewport(this.x, this.y, this.w, this.h, 0, 1);
    }
    clone() {
        return new WebGPURenderItemViewport(this.x, this.y, this.w, this.h);
    }
}
class WebGPURenderItemScissor {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    run(renderPass) {
        renderPass.setScissorRect(this.x, this.y, this.w, this.h);
    }
    clone() {
        return new WebGPURenderItemScissor(this.x, this.y, this.w, this.h);
    }
}
class WebGPURenderItemStencilRef {
    constructor(ref) {
        this.ref = ref;
    }
    run(renderPass) {
        renderPass.setStencilReference(this.ref);
    }
    clone() {
        return new WebGPURenderItemStencilRef(this.ref);
    }
}
class WebGPURenderItemBlendColor {
    constructor(color) {
        this.color = color;
    }
    run(renderPass) {
        renderPass.setBlendConstant(this.color);
    }
    clone() {
        return new WebGPURenderItemBlendColor(this.color);
    }
}
class WebGPURenderItemBundles {
    constructor() {
        this.bundles = [];
    }
    run(renderPass) {
        renderPass.executeBundles(this.bundles);
    }
    clone() {
        const cloned = new WebGPURenderItemBundles();
        cloned.bundles = this.bundles;
        return cloned;
    }
}
class WebGPUBundleList {
    constructor(device) {
        this.numDrawCalls = 0;
        this._device = device;
        this._list = new Array(10);
        this._listLength = 0;
    }
    addBundle(bundle) {
        if (!this._currentItemIsBundle) {
            const item = new WebGPURenderItemBundles();
            this._list[this._listLength++] = item;
            this._currentBundleList = item.bundles;
            this._currentItemIsBundle = true;
        }
        if (bundle) {
            this._currentBundleList.push(bundle);
        }
    }
    _finishBundle() {
        if (this._currentItemIsBundle && this._bundleEncoder) {
            this._currentBundleList.push(this._bundleEncoder.finish());
            this._bundleEncoder = undefined;
            this._currentItemIsBundle = false;
        }
    }
    addItem(item) {
        this._finishBundle();
        this._list[this._listLength++] = item;
        this._currentItemIsBundle = false;
    }
    getBundleEncoder(colorFormats, depthStencilFormat, sampleCount) {
        if (!this._currentItemIsBundle) {
            this.addBundle();
            this._bundleEncoder = this._device.createRenderBundleEncoder({
                colorFormats,
                depthStencilFormat,
                sampleCount,
            });
        }
        return this._bundleEncoder;
    }
    close() {
        this._finishBundle();
    }
    run(renderPass) {
        this.close();
        for (let i = 0; i < this._listLength; ++i) {
            this._list[i].run(renderPass);
        }
    }
    reset() {
        this._listLength = 0;
        this._currentItemIsBundle = false;
        this.numDrawCalls = 0;
    }
    clone() {
        this.close();
        const cloned = new WebGPUBundleList(this._device);
        cloned._list = new Array(this._listLength);
        cloned._listLength = this._listLength;
        cloned.numDrawCalls = this.numDrawCalls;
        for (let i = 0; i < this._listLength; ++i) {
            cloned._list[i] = this._list[i].clone();
        }
        return cloned;
    }
}
class WebGPUQuerySet {
    constructor(count, type, device, bufferManager, canUseMultipleBuffers = true) {
        this._dstBuffers = [];
        this._device = device;
        this._bufferManager = bufferManager;
        this._count = count;
        this._canUseMultipleBuffers = canUseMultipleBuffers;
        this._querySet = device.createQuerySet({
            type,
            count,
        });
        this._queryBuffer = bufferManager.createRawBuffer(8 * count, BufferUsage.QueryResolve | BufferUsage.CopySrc);
        if (!canUseMultipleBuffers) {
            this._dstBuffers.push(this._bufferManager.createRawBuffer(8 * this._count, BufferUsage.MapRead | BufferUsage.CopyDst));
        }
    }
    get querySet() {
        return this._querySet;
    }
    _getBuffer(firstQuery, queryCount) {
        if (!this._canUseMultipleBuffers && this._dstBuffers.length === 0) {
            return null;
        }
        const encoderResult = this._device.createCommandEncoder();
        let buffer;
        if (this._dstBuffers.length === 0) {
            buffer = this._bufferManager.createRawBuffer(8 * this._count, BufferUsage.MapRead | BufferUsage.CopyDst);
        }
        else {
            buffer = this._dstBuffers[this._dstBuffers.length - 1];
            this._dstBuffers.length--;
        }
        encoderResult.resolveQuerySet(this._querySet, firstQuery, queryCount, this._queryBuffer, 0);
        encoderResult.copyBufferToBuffer(this._queryBuffer, 0, buffer, 0, 8 * queryCount);
        this._device.queue.submit([encoderResult.finish()]);
        return buffer;
    }
    async readValues(firstQuery = 0, queryCount = 1) {
        let buffer = this._getBuffer(firstQuery, queryCount);
        if (buffer === null) {
            return null;
        }
        await buffer.mapAsync(MapMode.Read);
        const arrayBuf = new BigUint64Array(buffer.getMappedRange()).slice();
        buffer.unmap();
        this._dstBuffers[this._dstBuffers.length] = buffer;
        return arrayBuf;
    }
    async readValue(firstQuery = 0) {
        let buffer = this._getBuffer(firstQuery, 1);
        if (buffer === null) {
            return null;
        }
        await buffer.mapAsync(MapMode.Read);
        const arrayBuf = new BigUint64Array(buffer.getMappedRange());
        const value = Number(arrayBuf[0]);
        buffer.unmap();
        this._dstBuffers[this._dstBuffers.length] = buffer;
        return value;
    }
    async readTwoValuesAndSubtract(firstQuery = 0) {
        let buffer = this._getBuffer(firstQuery, 2);
        if (buffer === null) {
            return null;
        }
        await buffer.mapAsync(MapMode.Read);
        const arrayBuf = new BigUint64Array(buffer.getMappedRange());
        const value = Number(arrayBuf[1] - arrayBuf[0]);
        buffer.unmap();
        this._dstBuffers[this._dstBuffers.length] = buffer;
        return value;
    }
    dispose() {
        this._querySet.destroy();
        this._bufferManager.releaseBuffer(this._queryBuffer);
        for (let i = 0; i < this._dstBuffers.length; ++i) {
            this._bufferManager.releaseBuffer(this._dstBuffers[i]);
        }
    }
}
class WebGPUTimestampQuery {
    constructor(device, bufferManager) {
        this._enabled = false;
        this._gpuFrameTimeCounter = new PerfCounter();
        this._measureDurationState = 0;
        this._device = device;
        this._bufferManager = bufferManager;
    }
    get gpuFrameTimeCounter() {
        return this._gpuFrameTimeCounter;
    }
    get enable() {
        return this._enabled;
    }
    set enable(value) {
        if (this._enabled === value) {
            return;
        }
        this._enabled = value;
        this._measureDurationState = 0;
        if (value) {
            this._measureDuration = new WebGPUDurationMeasure(this._device, this._bufferManager);
        }
        else {
            this._measureDuration.dispose();
        }
    }
    startFrame(commandEncoder) {
        if (this._enabled && this._measureDurationState === 0) {
            this._measureDuration.start(commandEncoder);
            this._measureDurationState = 1;
        }
    }
    endFrame(commandEncoder) {
        if (this._measureDurationState === 1) {
            this._measureDurationState = 2;
            this._measureDuration.stop(commandEncoder).then((duration) => {
                if (duration !== null && duration >= 0) {
                    this._gpuFrameTimeCounter.fetchNewFrame();
                    this._gpuFrameTimeCounter.addCount(duration, true);
                }
                this._measureDurationState = 0;
            });
        }
    }
}
class WebGPUDurationMeasure {
    constructor(device, bufferManager) {
        this._querySet = new WebGPUQuerySet(2, QueryType.Timestamp, device, bufferManager);
    }
    start(encoder) {
        encoder.writeTimestamp(this._querySet.querySet, 0);
    }
    async stop(encoder) {
        encoder.writeTimestamp(this._querySet.querySet, 1);
        return this._querySet.readTwoValuesAndSubtract(0);
    }
    dispose() {
        this._querySet.dispose();
    }
}
class WebGPUOcclusionQuery {
    constructor(engine, device, bufferManager, startCount = 50, incrementCount = 100) {
        this._availableIndices = [];
        this._engine = engine;
        this._device = device;
        this._bufferManager = bufferManager;
        this._frameLastBuffer = -1;
        this._currentTotalIndices = 0;
        this._countIncrement = incrementCount;
        this._allocateNewIndices(startCount);
    }
    get querySet() {
        return this._querySet.querySet;
    }
    get hasQueries() {
        return this._currentTotalIndices !== this._availableIndices.length;
    }
    get canBeginQuery() {
        const passIndex = this._engine._getCurrentRenderPassIndex();
        switch (passIndex) {
            case 0: {
                return this._engine._mainRenderPassWrapper.renderPassDescriptor.occlusionQuerySet !== undefined;
            }
            case 1: {
                return this._engine._rttRenderPassWrapper.renderPassDescriptor.occlusionQuerySet !== undefined;
            }
        }
        return false;
    }
    createQuery() {
        if (this._availableIndices.length === 0) {
            this._allocateNewIndices();
        }
        const index = this._availableIndices[this._availableIndices.length - 1];
        this._availableIndices.length--;
        return index;
    }
    deleteQuery(index) {
        this._availableIndices[this._availableIndices.length - 1] = index;
    }
    isQueryResultAvailable(index) {
        this._retrieveQueryBuffer();
        return !!this._lastBuffer && index < this._lastBuffer.length;
    }
    getQueryResult(index) {
        var _a, _b;
        return Number((_b = (_a = this._lastBuffer) === null || _a === void 0 ? void 0 : _a[index]) !== null && _b !== void 0 ? _b : -1);
    }
    _retrieveQueryBuffer() {
        if (this._lastBuffer && this._frameLastBuffer === this._engine.frameId) {
            return;
        }
        if (this._frameLastBuffer !== this._engine.frameId) {
            this._frameLastBuffer = this._engine.frameId;
            this._querySet.readValues(0, this._currentTotalIndices).then((arrayBuffer) => {
                this._lastBuffer = arrayBuffer;
            });
        }
    }
    _allocateNewIndices(numIndices) {
        numIndices = numIndices !== null && numIndices !== void 0 ? numIndices : this._countIncrement;
        this._delayQuerySetDispose();
        for (let i = 0; i < numIndices; ++i) {
            this._availableIndices.push(this._currentTotalIndices + i);
        }
        this._currentTotalIndices += numIndices;
        this._querySet = new WebGPUQuerySet(this._currentTotalIndices, QueryType.Occlusion, this._device, this._bufferManager, false);
    }
    _delayQuerySetDispose() {
        const querySet = this._querySet;
        if (querySet) {
            setTimeout(() => querySet.dispose, 1000);
        }
    }
    dispose() {
        var _a;
        (_a = this._querySet) === null || _a === void 0 ? void 0 : _a.dispose();
        this._availableIndices = [];
    }
}
class WebGPUTintWASM {
    constructor() {
        this._twgsl = null;
    }
    async initTwgsl(twgslOptions) {
        twgslOptions = twgslOptions || {};
        twgslOptions = {
            ...WebGPUTintWASM._twgslDefaultOptions,
            ...twgslOptions
        };
        if (twgslOptions.twgsl) {
            this._twgsl = twgslOptions.twgsl;
            return Promise.resolve();
        }
        if (twgslOptions.jsPath && twgslOptions.wasmPath) {
            if (IsWindowObjectExist()) {
                await Tools.LoadScriptAsync(twgslOptions.jsPath);
            }
            else {
                importScripts(twgslOptions.jsPath);
            }
        }
        if (self.twgsl) {
            this._twgsl = await self.twgsl(twgslOptions.wasmPath);
            return Promise.resolve();
        }
        return Promise.reject("twgsl is not available.");
    }
    convertSpirV2WGSL(code) {
        return this._twgsl.convertSpirV2WGSL(code);
    }
}
WebGPUTintWASM._twgslDefaultOptions = {
    jsPath: "https://preview.babylonjs.com/twgsl/twgsl.js",
    wasmPath: "https://preview.babylonjs.com/twgsl/twgsl.wasm",
};
class WebGPUSnapshotRendering {
    constructor(engine, renderingMode, bundleList, bundleListRenderTarget) {
        this._record = false;
        this._play = false;
        this._mainPassBundleList = [];
        this._enabled = false;
        this._engine = engine;
        this._mode = renderingMode;
        this._bundleList = bundleList;
        this._bundleListRenderTarget = bundleListRenderTarget;
    }
    get enabled() {
        return this._enabled;
    }
    get play() {
        return this._play;
    }
    get record() {
        return this._record;
    }
    set enabled(activate) {
        this._mainPassBundleList.length = 0;
        this._record = this._enabled = activate;
        this._play = false;
        if (activate) {
            this._modeSaved = this._mode;
            this._mode = Constants.SNAPSHOTRENDERING_STANDARD;
        }
    }
    get mode() {
        return this._mode;
    }
    set mode(mode) {
        if (this._record) {
            this._modeSaved = mode;
        }
        else {
            this._mode = mode;
        }
    }
    endMainRenderPass() {
        if (this._record) {
            this._mainPassBundleList.push(this._bundleList.clone());
        }
    }
    endRenderTargetPass(currentRenderPass, gpuWrapper) {
        var _a, _b, _c, _d;
        if (this._play) {
            (_b = (_a = gpuWrapper._bundleLists) === null || _a === void 0 ? void 0 : _a[gpuWrapper._currentLayer]) === null || _b === void 0 ? void 0 : _b.run(currentRenderPass);
            if (this._mode === Constants.SNAPSHOTRENDERING_FAST) {
                this._engine._reportDrawCall((_d = (_c = gpuWrapper._bundleLists) === null || _c === void 0 ? void 0 : _c[gpuWrapper._currentLayer]) === null || _d === void 0 ? void 0 : _d.numDrawCalls);
            }
        }
        else if (this._record) {
            if (!gpuWrapper._bundleLists) {
                gpuWrapper._bundleLists = [];
            }
            gpuWrapper._bundleLists[gpuWrapper._currentLayer] = this._bundleListRenderTarget.clone();
            gpuWrapper._bundleLists[gpuWrapper._currentLayer].run(currentRenderPass);
            this._bundleListRenderTarget.reset();
        }
        else {
            return false;
        }
        return true;
    }
    endFrame(mainRenderPass) {
        if (this._record) {
            this._mainPassBundleList.push(this._bundleList.clone());
            this._record = false;
            this._play = true;
            this._mode = this._modeSaved;
        }
        if (mainRenderPass !== null && this._play) {
            for (let i = 0; i < this._mainPassBundleList.length; ++i) {
                this._mainPassBundleList[i].run(mainRenderPass);
                if (this._mode === Constants.SNAPSHOTRENDERING_FAST) {
                    this._engine._reportDrawCall(this._mainPassBundleList[i].numDrawCalls);
                }
            }
        }
    }
    reset() {
        this.enabled = false;
        this.enabled = true;
    }
}
class WebGPUEngine extends Engine {
    constructor(canvas, options = {}) {
        var _a, _b, _c, _d;
        super(null);
        this._uploadEncoderDescriptor = { label: "upload" };
        this._renderEncoderDescriptor = { label: "render" };
        this._renderTargetEncoderDescriptor = { label: "renderTarget" };
        this._clearDepthValue = 1;
        this._clearReverseDepthValue = 0;
        this._clearStencilValue = 0;
        this._defaultSampleCount = 4;
        this._glslang = null;
        this._tintWASM = null;
        this._compiledComputeEffects = {};
        this._counters = {
            numEnableEffects: 0,
            numEnableDrawWrapper: 0,
            numBundleCreationNonCompatMode: 0,
            numBundleReuseNonCompatMode: 0,
        };
        this.countersLastFrame = {
            numEnableEffects: 0,
            numEnableDrawWrapper: 0,
            numBundleCreationNonCompatMode: 0,
            numBundleReuseNonCompatMode: 0,
        };
        this.numMaxUncapturedErrors = 20;
        this._commandBuffers = [null, null, null];
        this._currentRenderPass = null;
        this._mainRenderPassWrapper = new WebGPURenderPassWrapper();
        this._rttRenderPassWrapper = new WebGPURenderPassWrapper();
        this._pendingDebugCommands = [];
        this._onAfterUnbindFrameBufferObservable = new Observable();
        this._currentOverrideVertexBuffers = null;
        this._currentIndexBuffer = null;
        this.__colorWrite = true;
        this._forceEnableEffect = false;
        this.dbgShowShaderCode = false;
        this.dbgSanityChecks = true;
        this.dbgVerboseLogsForFirstFrames = false;
        this.dbgVerboseLogsNumFrames = 10;
        this.dbgLogIfNotDrawWrapper = true;
        this.dbgShowEmptyEnableEffectCalls = true;
        this._viewportsCurrent = [{ x: 0, y: 0, w: 0, h: 0 }, { x: 0, y: 0, w: 0, h: 0 }];
        this._scissorsCurrent = [{ x: 0, y: 0, w: 0, h: 0 }, { x: 0, y: 0, w: 0, h: 0 }];
        this._scissorCached = { x: 0, y: 0, z: 0, w: 0 };
        this._stencilRefsCurrent = [-1, -1];
        this._blendColorsCurrent = [[null, null, null, null], [null, null, null, null]];
        this.isNDCHalfZRange = true;
        this.hasOriginBottomLeft = false;
        options.deviceDescriptor = options.deviceDescriptor || {};
        options.swapChainFormat = options.swapChainFormat || TextureFormat.BGRA8Unorm;
        options.antialiasing = options.antialiasing === undefined ? true : options.antialiasing;
        options.stencil = (_a = options.stencil) !== null && _a !== void 0 ? _a : true;
        options.enableGPUDebugMarkers = (_b = options.enableGPUDebugMarkers) !== null && _b !== void 0 ? _b : false;
        Logger.Log(`Babylon.js v${Engine.Version} - ${this.description} engine`);
        if (!navigator.gpu) {
            Logger.Error("WebGPU is not supported by your browser.");
            return;
        }
        this._isWebGPU = true;
        this._shaderPlatformName = "WEBGPU";
        if (options.deterministicLockstep === undefined) {
            options.deterministicLockstep = false;
        }
        if (options.lockstepMaxSteps === undefined) {
            options.lockstepMaxSteps = 4;
        }
        if (options.audioEngine === undefined) {
            options.audioEngine = true;
        }
        this._deterministicLockstep = options.deterministicLockstep;
        this._lockstepMaxSteps = options.lockstepMaxSteps;
        this._timeStep = options.timeStep || 1 / 60;
        this._doNotHandleContextLost = !!options.doNotHandleContextLost;
        this._canvas = canvas;
        this._options = options;
        this.premultipliedAlpha = (_c = options.premultipliedAlpha) !== null && _c !== void 0 ? _c : true;
        const devicePixelRatio = IsWindowObjectExist() ? (window.devicePixelRatio || 1.0) : 1.0;
        const limitDeviceRatio = options.limitDeviceRatio || devicePixelRatio;
        const adaptToDeviceRatio = (_d = options.adaptToDeviceRatio) !== null && _d !== void 0 ? _d : false;
        this._hardwareScalingLevel = adaptToDeviceRatio ? 1.0 / Math.min(limitDeviceRatio, devicePixelRatio) : 1.0;
        this._mainPassSampleCount = options.antialiasing ? this._defaultSampleCount : 1;
        this._isStencilEnable = options.stencil;
        this._sharedInit(canvas, !!options.doNotHandleTouchAction, options.audioEngine);
        this._shaderProcessor = new WebGPUShaderProcessorGLSL();
        this._shaderProcessorWGSL = new WebGPUShaderProcessorWGSL();
    }
    get snapshotRenderingMode() {
        return this._snapshotRendering.mode;
    }
    set snapshotRenderingMode(mode) {
        this._snapshotRendering.mode = mode;
    }
    snapshotRenderingReset() {
        this._snapshotRendering.reset();
    }
    get snapshotRendering() {
        return this._snapshotRendering.enabled;
    }
    set snapshotRendering(activate) {
        this._snapshotRendering.enabled = activate;
    }
    get disableCacheSamplers() {
        return this._cacheSampler ? this._cacheSampler.disabled : false;
    }
    set disableCacheSamplers(disable) {
        if (this._cacheSampler) {
            this._cacheSampler.disabled = disable;
        }
    }
    get disableCacheRenderPipelines() {
        return this._cacheRenderPipeline ? this._cacheRenderPipeline.disabled : false;
    }
    set disableCacheRenderPipelines(disable) {
        if (this._cacheRenderPipeline) {
            this._cacheRenderPipeline.disabled = disable;
        }
    }
    get disableCacheBindGroups() {
        return this._cacheBindGroups ? this._cacheBindGroups.disabled : false;
    }
    set disableCacheBindGroups(disable) {
        if (this._cacheBindGroups) {
            this._cacheBindGroups.disabled = disable;
        }
    }
    static get IsSupportedAsync() {
        return !navigator.gpu ? Promise.resolve(false) : navigator.gpu.requestAdapter().then((adapter) => !!adapter, (rejected) => false).catch((e) => false);
    }
    static get IsSupported() {
        Logger.Warn("You must call IsSupportedAsync for WebGPU!");
        return false;
    }
    get supportsUniformBuffers() {
        return true;
    }
    get supportedExtensions() {
        return this._adapterSupportedExtensions;
    }
    get enabledExtensions() {
        return this._deviceEnabledExtensions;
    }
    get name() {
        return "WebGPU";
    }
    get description() {
        let description = this.name + this.version;
        return description;
    }
    get version() {
        return 1;
    }
    getInfo() {
        return {
            vendor: "unknown vendor",
            renderer: "unknown renderer",
            version: "unknown version",
        };
    }
    get compatibilityMode() {
        return this._compatibilityMode;
    }
    set compatibilityMode(mode) {
        this._compatibilityMode = mode;
    }
    get currentSampleCount() {
        return this._currentRenderTarget ? this._currentRenderTarget.samples : this._mainPassSampleCount;
    }
    static CreateAsync(canvas, options = {}) {
        const engine = new WebGPUEngine(canvas, options);
        return new Promise((resolve) => {
            engine.initAsync(options.glslangOptions, options.twgslOptions).then(() => resolve(engine));
        });
    }
    initAsync(glslangOptions, twgslOptions) {
        var _a;
        return this._initGlslang(glslangOptions !== null && glslangOptions !== void 0 ? glslangOptions : (_a = this._options) === null || _a === void 0 ? void 0 : _a.glslangOptions)
            .then((glslang) => {
            var _a;
            this._glslang = glslang;
            this._tintWASM = WebGPUEngine.UseTWGSL ? new WebGPUTintWASM() : null;
            return this._tintWASM ?
                this._tintWASM.initTwgsl(twgslOptions !== null && twgslOptions !== void 0 ? twgslOptions : (_a = this._options) === null || _a === void 0 ? void 0 : _a.twgslOptions)
                    .then(() => {
                    return navigator.gpu.requestAdapter(this._options);
                }, (msg) => {
                    Logger.Error("Can not initialize twgsl!");
                    Logger.Error(msg);
                    throw Error("WebGPU initializations stopped.");
                })
                : navigator.gpu.requestAdapter(this._options);
        }, (msg) => {
            Logger.Error("Can not initialize glslang!");
            Logger.Error(msg);
            throw Error("WebGPU initializations stopped.");
        })
            .then((adapter) => {
            var _a;
            if (!adapter) {
                throw "Could not retrieve a WebGPU adapter (adapter is null).";
            }
            else {
                this._adapter = adapter;
                this._adapterSupportedExtensions = [];
                (_a = this._adapter.features) === null || _a === void 0 ? void 0 : _a.forEach((feature) => this._adapterSupportedExtensions.push(feature));
                const deviceDescriptor = this._options.deviceDescriptor;
                if (deviceDescriptor === null || deviceDescriptor === void 0 ? void 0 : deviceDescriptor.requiredFeatures) {
                    const requestedExtensions = deviceDescriptor.requiredFeatures;
                    const validExtensions = [];
                    for (let extension of requestedExtensions) {
                        if (this._adapterSupportedExtensions.indexOf(extension) !== -1) {
                            validExtensions.push(extension);
                        }
                    }
                    deviceDescriptor.requiredFeatures = validExtensions;
                }
                return this._adapter.requestDevice(this._options.deviceDescriptor);
            }
        })
            .then((device) => {
            var _a, _b;
            this._device = device;
            this._deviceEnabledExtensions = [];
            (_a = this._device.features) === null || _a === void 0 ? void 0 : _a.forEach((feature) => this._deviceEnabledExtensions.push(feature));
            let numUncapturedErrors = -1;
            this._device.addEventListener('uncapturederror', (event) => {
                if (++numUncapturedErrors < this.numMaxUncapturedErrors) {
                    Logger.Warn(`WebGPU uncaptured error (${numUncapturedErrors + 1}): ${event.error} - ${event.error.message}`);
                }
                else if (numUncapturedErrors++ === this.numMaxUncapturedErrors) {
                    Logger.Warn(`WebGPU uncaptured error: too many warnings (${this.numMaxUncapturedErrors}), no more warnings will be reported to the console for this engine.`);
                }
            });
            if (!this._doNotHandleContextLost) {
                (_b = this._device.lost) === null || _b === void 0 ? void 0 : _b.then((info) => {
                    this._contextWasLost = true;
                    Logger.Warn("WebGPU context lost. " + info);
                    this.onContextLostObservable.notifyObservers(this);
                    this._restoreEngineAfterContextLost(this.initAsync.bind(this));
                });
            }
        }, (e) => {
            Logger.Error("Could not retrieve a WebGPU device.");
            Logger.Error(e);
        })
            .then(() => {
            this._bufferManager = new WebGPUBufferManager(this._device);
            this._textureHelper = new WebGPUTextureHelper(this._device, this._glslang, this._tintWASM, this._bufferManager);
            this._cacheSampler = new WebGPUCacheSampler(this._device);
            this._cacheBindGroups = new WebGPUCacheBindGroups(this._device, this._cacheSampler, this);
            this._timestampQuery = new WebGPUTimestampQuery(this._device, this._bufferManager);
            this._occlusionQuery = this._device.createQuerySet ? new WebGPUOcclusionQuery(this, this._device, this._bufferManager) : undefined;
            this._bundleList = new WebGPUBundleList(this._device);
            this._bundleListRenderTarget = new WebGPUBundleList(this._device);
            this._snapshotRendering = new WebGPUSnapshotRendering(this, this._snapshotRenderingMode, this._bundleList, this._bundleListRenderTarget);
            this._ubInvertY = this._bufferManager.createBuffer(new Float32Array([-1, 0]), BufferUsage.Uniform | BufferUsage.CopyDst);
            this._ubDontInvertY = this._bufferManager.createBuffer(new Float32Array([1, 0]), BufferUsage.Uniform | BufferUsage.CopyDst);
            if (this.dbgVerboseLogsForFirstFrames) {
                if (this._count === undefined) {
                    this._count = 0;
                    console.log("%c frame #" + this._count + " - begin", "background: #ffff00");
                }
            }
            this._uploadEncoder = this._device.createCommandEncoder(this._uploadEncoderDescriptor);
            this._renderEncoder = this._device.createCommandEncoder(this._renderEncoderDescriptor);
            this._renderTargetEncoder = this._device.createCommandEncoder(this._renderTargetEncoderDescriptor);
            this._emptyVertexBuffer = new VertexBuffer(this, [0], "", false, false, 1, false, 0, 1);
            this._initializeLimits();
            this._cacheRenderPipeline = new WebGPUCacheRenderPipelineTree(this._device, this._emptyVertexBuffer, !this._caps.textureFloatLinearFiltering);
            this._depthCullingState = new WebGPUDepthCullingState(this._cacheRenderPipeline);
            this._stencilStateComposer = new WebGPUStencilStateComposer(this._cacheRenderPipeline);
            this._stencilStateComposer.stencilGlobal = this._stencilState;
            this._depthCullingState.depthTest = true;
            this._depthCullingState.depthFunc = Constants.LEQUAL;
            this._depthCullingState.depthMask = true;
            this._textureHelper.setCommandEncoder(this._uploadEncoder);
            this._clearQuad = new WebGPUClearQuad(this._device, this, this._emptyVertexBuffer);
            this._defaultDrawContext = this.createDrawContext();
            this._currentDrawContext = this._defaultDrawContext;
            this._defaultMaterialContext = this.createMaterialContext();
            this._currentMaterialContext = this._defaultMaterialContext;
            this._initializeContextAndSwapChain();
            this._initializeMainAttachments();
            this.resize();
        })
            .catch((e) => {
            Logger.Error("Can not create WebGPU Device and/or context.");
            Logger.Error(e);
            if (console.trace) {
                console.trace();
            }
        });
    }
    _initGlslang(glslangOptions) {
        glslangOptions = glslangOptions || {};
        glslangOptions = {
            ...WebGPUEngine._glslangDefaultOptions,
            ...glslangOptions
        };
        if (glslangOptions.glslang) {
            return Promise.resolve(glslangOptions.glslang);
        }
        if (self.glslang) {
            return self.glslang(glslangOptions.wasmPath);
        }
        if (glslangOptions.jsPath && glslangOptions.wasmPath) {
            if (IsWindowObjectExist()) {
                return Tools.LoadScriptAsync(glslangOptions.jsPath)
                    .then(() => {
                    return self.glslang(glslangOptions.wasmPath);
                });
            }
            else {
                importScripts(glslangOptions.jsPath);
                return self.glslang(glslangOptions.wasmPath);
            }
        }
        return Promise.reject("gslang is not available.");
    }
    _initializeLimits() {
        this._caps = {
            maxTexturesImageUnits: 16,
            maxVertexTextureImageUnits: 16,
            maxCombinedTexturesImageUnits: 32,
            maxTextureSize: 8192,
            maxCubemapTextureSize: 2048,
            maxRenderTextureSize: 8192,
            maxVertexAttribs: 16,
            maxVaryingVectors: 15,
            maxFragmentUniformVectors: 1024,
            maxVertexUniformVectors: 1024,
            standardDerivatives: true,
            astc: null,
            s3tc: (this._deviceEnabledExtensions.indexOf(FeatureName.TextureCompressionBC) >= 0 ? true : undefined),
            pvrtc: null,
            etc1: null,
            etc2: null,
            bptc: this._deviceEnabledExtensions.indexOf(FeatureName.TextureCompressionBC) >= 0 ? true : undefined,
            maxAnisotropy: 4,
            uintIndices: true,
            fragmentDepthSupported: true,
            highPrecisionShaderSupported: true,
            colorBufferFloat: true,
            textureFloat: true,
            textureFloatLinearFiltering: false,
            textureFloatRender: true,
            textureHalfFloat: true,
            textureHalfFloatLinearFiltering: true,
            textureHalfFloatRender: true,
            textureLOD: true,
            drawBuffersExtension: true,
            depthTextureExtension: true,
            vertexArrayObject: false,
            instancedArrays: true,
            timerQuery: typeof (BigUint64Array) !== "undefined" && this.enabledExtensions.indexOf(FeatureName.TimestampQuery) !== -1 ? true : undefined,
            supportOcclusionQuery: typeof (BigUint64Array) !== "undefined",
            canUseTimestampForTimerQuery: true,
            multiview: false,
            oculusMultiview: false,
            parallelShaderCompile: undefined,
            blendMinMax: true,
            maxMSAASamples: 4,
            canUseGLInstanceID: true,
            canUseGLVertexID: true,
            supportComputeShaders: true,
            supportSRGBBuffers: true,
        };
        this._caps.parallelShaderCompile = null;
        this._features = {
            forceBitmapOverHTMLImageElement: true,
            supportRenderAndCopyToLodForFloatTextures: true,
            supportDepthStencilTexture: true,
            supportShadowSamplers: true,
            uniformBufferHardCheckMatrix: false,
            allowTexturePrefiltering: true,
            trackUbosInFrame: true,
            checkUbosContentBeforeUpload: true,
            supportCSM: true,
            basisNeedsPOT: false,
            support3DTextures: true,
            needTypeSuffixInShaderConstants: true,
            supportMSAA: true,
            supportSSAO2: true,
            supportExtendedTextureFormats: true,
            supportSwitchCaseInShader: true,
            supportSyncTextureRead: false,
            needsInvertingBitmap: false,
            useUBOBindingCache: false,
            needShaderCodeInlining: true,
            needToAlwaysBindUniformBuffers: true,
            supportRenderPasses: true,
            _collectUbosUpdatedInFrame: false,
        };
    }
    _initializeContextAndSwapChain() {
        this._context = this._canvas.getContext('webgpu');
        this._configureContext(this._canvas.width, this._canvas.height);
        this._colorFormat = this._options.swapChainFormat;
        this._mainRenderPassWrapper.colorAttachmentGPUTextures = [new WebGPUHardwareTexture()];
        this._mainRenderPassWrapper.colorAttachmentGPUTextures[0].format = this._colorFormat;
    }
    _initializeMainAttachments() {
        var _a;
        this._mainTextureExtends = {
            width: this.getRenderWidth(),
            height: this.getRenderHeight(),
            depthOrArrayLayers: 1
        };
        const bufferDataUpdate = new Float32Array([this.getRenderHeight()]);
        this._bufferManager.setSubData(this._ubInvertY, 4, bufferDataUpdate);
        this._bufferManager.setSubData(this._ubDontInvertY, 4, bufferDataUpdate);
        let mainColorAttachments;
        if (this._options.antialiasing) {
            const mainTextureDescriptor = {
                size: this._mainTextureExtends,
                mipLevelCount: 1,
                sampleCount: this._mainPassSampleCount,
                dimension: TextureDimension.E2d,
                format: this._options.swapChainFormat,
                usage: TextureUsage.RenderAttachment,
            };
            (_a = this._mainTexture) === null || _a === void 0 ? void 0 : _a.destroy();
            this._mainTexture = this._device.createTexture(mainTextureDescriptor);
            mainColorAttachments = [{
                    view: this._mainTexture.createView(),
                    loadValue: new Color4(0, 0, 0, 1),
                    storeOp: StoreOp.Store
                }];
        }
        else {
            mainColorAttachments = [{
                    view: undefined,
                    loadValue: new Color4(0, 0, 0, 1),
                    storeOp: StoreOp.Store
                }];
        }
        this._mainRenderPassWrapper.depthTextureFormat = this.isStencilEnable ? TextureFormat.Depth24PlusStencil8 : TextureFormat.Depth32Float;
        this._setDepthTextureFormat(this._mainRenderPassWrapper);
        const depthTextureDescriptor = {
            size: this._mainTextureExtends,
            mipLevelCount: 1,
            sampleCount: this._mainPassSampleCount,
            dimension: TextureDimension.E2d,
            format: this._mainRenderPassWrapper.depthTextureFormat,
            usage: TextureUsage.RenderAttachment
        };
        if (this._depthTexture) {
            this._depthTexture.destroy();
        }
        this._depthTexture = this._device.createTexture(depthTextureDescriptor);
        const mainDepthAttachment = {
            view: this._depthTexture.createView(),
            depthLoadValue: this._clearDepthValue,
            depthStoreOp: StoreOp.Store,
            stencilLoadValue: this._clearStencilValue,
            stencilStoreOp: StoreOp.Store,
        };
        this._mainRenderPassWrapper.renderPassDescriptor = {
            colorAttachments: mainColorAttachments,
            depthStencilAttachment: mainDepthAttachment
        };
        if (this._mainRenderPassWrapper.renderPass !== null) {
            this._endMainRenderPass();
        }
    }
    _configureContext(width, height) {
        this._context.configure({
            device: this._device,
            format: this._options.swapChainFormat,
            usage: TextureUsage.RenderAttachment | TextureUsage.CopySrc,
            compositingAlphaMode: this.premultipliedAlpha ? CanvasCompositingAlphaMode.Premultiplied : CanvasCompositingAlphaMode.Opaque,
            size: {
                width,
                height,
                depthOrArrayLayers: 1
            },
        });
    }
    setSize(width, height, forceSetSize = false) {
        if (!super.setSize(width, height, forceSetSize)) {
            return false;
        }
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                console.log("frame #" + this._count + " - setSize called -", width, height);
            }
        }
        this._configureContext(width, height);
        this._initializeMainAttachments();
        if (this.snapshotRendering) {
            this.snapshotRenderingReset();
        }
        return true;
    }
    _getShaderProcessor(shaderLanguage) {
        if (shaderLanguage === ShaderLanguage.WGSL) {
            return this._shaderProcessorWGSL;
        }
        return this._shaderProcessor;
    }
    _getShaderProcessingContext(shaderLanguage) {
        return new WebGPUShaderProcessingContext(shaderLanguage);
    }
    applyStates() {
        this._stencilStateComposer.apply();
        this._cacheRenderPipeline.setAlphaBlendEnabled(this._alphaState.alphaBlend);
    }
    wipeCaches(bruteForce) {
        if (this.preventCacheWipeBetweenFrames && !bruteForce) {
            return;
        }
        this._forceEnableEffect = true;
        this._currentIndexBuffer = null;
        this._currentOverrideVertexBuffers = null;
        this._cacheRenderPipeline.setBuffers(null, null, null);
        if (bruteForce) {
            this._stencilStateComposer.reset();
            this._depthCullingState.reset();
            this._depthCullingState.depthFunc = Constants.LEQUAL;
            this._alphaState.reset();
            this._alphaMode = Constants.ALPHA_ADD;
            this._alphaEquation = Constants.ALPHA_DISABLE;
            this._cacheRenderPipeline.setAlphaBlendFactors(this._alphaState._blendFunctionParameters, this._alphaState._blendEquationParameters);
            this._cacheRenderPipeline.setAlphaBlendEnabled(false);
            this.setColorWrite(true);
        }
        this._cachedVertexBuffers = null;
        this._cachedIndexBuffer = null;
        this._cachedEffectForVertexBuffers = null;
    }
    setColorWrite(enable) {
        this.__colorWrite = enable;
        this._cacheRenderPipeline.setWriteMask(enable ? 0xF : 0);
    }
    getColorWrite() {
        return this.__colorWrite;
    }
    _resetCurrentViewport(index) {
        this._viewportsCurrent[index].x = 0;
        this._viewportsCurrent[index].y = 0;
        this._viewportsCurrent[index].w = 0;
        this._viewportsCurrent[index].h = 0;
        if (index === 1) {
            this._viewportCached.x = 0;
            this._viewportCached.y = 0;
            this._viewportCached.z = 0;
            this._viewportCached.w = 0;
        }
    }
    _mustUpdateViewport(renderPass) {
        const index = renderPass === this._mainRenderPassWrapper.renderPass ? 0 : 1;
        const x = this._viewportCached.x, y = this._viewportCached.y, w = this._viewportCached.z, h = this._viewportCached.w;
        const update = this._viewportsCurrent[index].x !== x || this._viewportsCurrent[index].y !== y ||
            this._viewportsCurrent[index].w !== w || this._viewportsCurrent[index].h !== h;
        if (update) {
            this._viewportsCurrent[index].x = this._viewportCached.x;
            this._viewportsCurrent[index].y = this._viewportCached.y;
            this._viewportsCurrent[index].w = this._viewportCached.z;
            this._viewportsCurrent[index].h = this._viewportCached.w;
        }
        return update;
    }
    _applyViewport(renderPass) {
        let y = Math.floor(this._viewportCached.y);
        const h = Math.floor(this._viewportCached.w);
        if (!this._currentRenderTarget) {
            y = this.getRenderHeight() - y - h;
        }
        renderPass.setViewport(Math.floor(this._viewportCached.x), y, Math.floor(this._viewportCached.z), h, 0, 1);
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                console.log("frame #" + this._count + " - viewport applied - (", this._viewportCached.x, this._viewportCached.y, this._viewportCached.z, this._viewportCached.w, ") current pass is main pass=" + (renderPass === this._mainRenderPassWrapper.renderPass));
            }
        }
    }
    _viewport(x, y, width, height) {
        this._viewportCached.x = x;
        this._viewportCached.y = y;
        this._viewportCached.z = width;
        this._viewportCached.w = height;
    }
    _resetCurrentScissor(index) {
        this._scissorsCurrent[index].x = 0;
        this._scissorsCurrent[index].y = 0;
        this._scissorsCurrent[index].w = 0;
        this._scissorsCurrent[index].h = 0;
    }
    _mustUpdateScissor(renderPass) {
        const index = renderPass === this._mainRenderPassWrapper.renderPass ? 0 : 1;
        const x = this._scissorCached.x, y = this._scissorCached.y, w = this._scissorCached.z, h = this._scissorCached.w;
        const update = this._scissorsCurrent[index].x !== x || this._scissorsCurrent[index].y !== y ||
            this._scissorsCurrent[index].w !== w || this._scissorsCurrent[index].h !== h;
        if (update) {
            this._scissorsCurrent[index].x = this._scissorCached.x;
            this._scissorsCurrent[index].y = this._scissorCached.y;
            this._scissorsCurrent[index].w = this._scissorCached.z;
            this._scissorsCurrent[index].h = this._scissorCached.w;
        }
        return update;
    }
    _applyScissor(renderPass) {
        renderPass.setScissorRect(this._scissorCached.x, this._currentRenderTarget ? this._scissorCached.y : this.getRenderHeight() - this._scissorCached.w - this._scissorCached.y, this._scissorCached.z, this._scissorCached.w);
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                console.log("frame #" + this._count + " - scissor applied - (", this._scissorCached.x, this._scissorCached.y, this._scissorCached.z, this._scissorCached.w, ") current pass is main pass=" + (renderPass === this._mainRenderPassWrapper.renderPass));
            }
        }
    }
    _scissorIsActive() {
        return this._scissorCached.x !== 0 ||
            this._scissorCached.y !== 0 ||
            this._scissorCached.z !== 0 ||
            this._scissorCached.w !== 0;
    }
    enableScissor(x, y, width, height) {
        this._scissorCached.x = x;
        this._scissorCached.y = y;
        this._scissorCached.z = width;
        this._scissorCached.w = height;
    }
    disableScissor() {
        this._scissorCached.x = 0;
        this._scissorCached.y = 0;
        this._scissorCached.z = 0;
        this._scissorCached.w = 0;
        this._resetCurrentScissor(0);
        this._resetCurrentScissor(1);
    }
    _resetCurrentStencilRef(index) {
        this._stencilRefsCurrent[index] = -1;
    }
    _mustUpdateStencilRef(renderPass) {
        const index = renderPass === this._mainRenderPassWrapper.renderPass ? 0 : 1;
        const update = this._stencilStateComposer.funcRef !== this._stencilRefsCurrent[index];
        if (update) {
            this._stencilRefsCurrent[index] = this._stencilStateComposer.funcRef;
        }
        return update;
    }
    _applyStencilRef(renderPass) {
        var _a;
        renderPass.setStencilReference((_a = this._stencilStateComposer.funcRef) !== null && _a !== void 0 ? _a : 0);
    }
    _resetCurrentColorBlend(index) {
        this._blendColorsCurrent[index][0] =
            this._blendColorsCurrent[index][1] =
                this._blendColorsCurrent[index][2] =
                    this._blendColorsCurrent[index][3] = null;
    }
    _mustUpdateBlendColor(renderPass) {
        const index = renderPass === this._mainRenderPassWrapper.renderPass ? 0 : 1;
        const colorBlend = this._alphaState._blendConstants;
        const update = colorBlend[0] !== this._blendColorsCurrent[index][0] ||
            colorBlend[1] !== this._blendColorsCurrent[index][1] ||
            colorBlend[2] !== this._blendColorsCurrent[index][2] ||
            colorBlend[3] !== this._blendColorsCurrent[index][3];
        if (update) {
            this._blendColorsCurrent[index][0] = colorBlend[0];
            this._blendColorsCurrent[index][1] = colorBlend[1];
            this._blendColorsCurrent[index][2] = colorBlend[2];
            this._blendColorsCurrent[index][3] = colorBlend[3];
        }
        return update;
    }
    _applyBlendColor(renderPass) {
        renderPass.setBlendConstant(this._alphaState._blendConstants);
    }
    clear(color, backBuffer, depth, stencil = false) {
        if (color && color.a === undefined) {
            color.a = 1;
        }
        const hasScissor = this._scissorIsActive();
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                console.log("frame #" + this._count + " - clear called - backBuffer=", backBuffer, " depth=", depth, " stencil=", stencil, " scissor is active=", hasScissor);
            }
        }
        if (this._currentRenderTarget) {
            if (hasScissor) {
                if (!this._rttRenderPassWrapper.renderPass) {
                    this._startRenderTargetRenderPass(this._currentRenderTarget, false, backBuffer ? color : null, depth, stencil);
                }
                if (!this.compatibilityMode) {
                    this._bundleListRenderTarget.addItem(new WebGPURenderItemScissor(this._scissorCached.x, this._scissorCached.y, this._scissorCached.z, this._scissorCached.w));
                }
                else {
                    this._applyScissor(this._currentRenderPass);
                }
                this._clearFullQuad(backBuffer ? color : null, depth, stencil);
            }
            else {
                if (this._currentRenderPass) {
                    this._endRenderTargetRenderPass();
                }
                this._startRenderTargetRenderPass(this._currentRenderTarget, true, backBuffer ? color : null, depth, stencil);
            }
        }
        else {
            if (!this._mainRenderPassWrapper.renderPass || !hasScissor) {
                this._startMainRenderPass(!hasScissor, backBuffer ? color : null, depth, stencil);
            }
            if (hasScissor) {
                if (!this.compatibilityMode) {
                    this._bundleList.addItem(new WebGPURenderItemScissor(this._scissorCached.x, this._scissorCached.y, this._scissorCached.z, this._scissorCached.w));
                }
                else {
                    this._applyScissor(this._currentRenderPass);
                }
                this._clearFullQuad(backBuffer ? color : null, depth, stencil);
            }
        }
    }
    _clearFullQuad(clearColor, clearDepth, clearStencil) {
        var _a, _b, _c;
        const renderPass = !this.compatibilityMode ? null : this._getCurrentRenderPass();
        const renderPassIndex = this._getCurrentRenderPassIndex();
        const bundleList = renderPassIndex === 0 ? this._bundleList : this._bundleListRenderTarget;
        this._clearQuad.setColorFormat(this._colorFormat);
        this._clearQuad.setDepthStencilFormat(this._depthTextureFormat);
        this._clearQuad.setMRTAttachments((_a = this._cacheRenderPipeline.mrtAttachments) !== null && _a !== void 0 ? _a : [], (_b = this._cacheRenderPipeline.mrtTextureArray) !== null && _b !== void 0 ? _b : []);
        if (!this.compatibilityMode) {
            bundleList.addItem(new WebGPURenderItemStencilRef(this._clearStencilValue));
        }
        else {
            renderPass.setStencilReference(this._clearStencilValue);
        }
        const bundle = this._clearQuad.clear(renderPass, clearColor, clearDepth, clearStencil, this.currentSampleCount);
        if (!this.compatibilityMode) {
            bundleList.addBundle(bundle);
            bundleList.addItem(new WebGPURenderItemStencilRef((_c = this._stencilStateComposer.funcRef) !== null && _c !== void 0 ? _c : 0));
            this._reportDrawCall();
        }
        else {
            this._applyStencilRef(renderPass);
        }
    }
    createVertexBuffer(data) {
        let view;
        if (data instanceof Array) {
            view = new Float32Array(data);
        }
        else if (data instanceof ArrayBuffer) {
            view = new Uint8Array(data);
        }
        else {
            view = data;
        }
        const dataBuffer = this._bufferManager.createBuffer(view, BufferUsage.Vertex | BufferUsage.CopyDst);
        return dataBuffer;
    }
    createDynamicVertexBuffer(data) {
        return this.createVertexBuffer(data);
    }
    createIndexBuffer(indices, updatable) {
        let is32Bits = true;
        let view;
        if (indices instanceof Uint32Array || indices instanceof Int32Array) {
            view = indices;
        }
        else if (indices instanceof Uint16Array) {
            view = indices;
            is32Bits = false;
        }
        else {
            if (indices.length > 65535) {
                view = new Uint32Array(indices);
            }
            else {
                view = new Uint16Array(indices);
                is32Bits = false;
            }
        }
        const dataBuffer = this._bufferManager.createBuffer(view, BufferUsage.Index | BufferUsage.CopyDst);
        dataBuffer.is32Bits = is32Bits;
        return dataBuffer;
    }
    _createBuffer(data, creationFlags) {
        let view;
        if (data instanceof Array) {
            view = new Float32Array(data);
        }
        else if (data instanceof ArrayBuffer) {
            view = new Uint8Array(data);
        }
        else {
            view = data;
        }
        let flags = 0;
        if (creationFlags & Constants.BUFFER_CREATIONFLAG_READ) {
            flags |= BufferUsage.CopySrc;
        }
        if (creationFlags & Constants.BUFFER_CREATIONFLAG_WRITE) {
            flags |= BufferUsage.CopyDst;
        }
        if (creationFlags & Constants.BUFFER_CREATIONFLAG_UNIFORM) {
            flags |= BufferUsage.Uniform;
        }
        if (creationFlags & Constants.BUFFER_CREATIONFLAG_VERTEX) {
            flags |= BufferUsage.Vertex;
        }
        if (creationFlags & Constants.BUFFER_CREATIONFLAG_INDEX) {
            flags |= BufferUsage.Index;
        }
        if (creationFlags & Constants.BUFFER_CREATIONFLAG_STORAGE) {
            flags |= BufferUsage.Storage;
        }
        return this._bufferManager.createBuffer(view, flags);
    }
    bindBuffersDirectly(vertexBuffer, indexBuffer, vertexDeclaration, vertexStrideSize, effect) {
        throw "Not implemented on WebGPU";
    }
    updateAndBindInstancesBuffer(instancesBuffer, data, offsetLocations) {
        throw "Not implemented on WebGPU";
    }
    bindBuffers(vertexBuffers, indexBuffer, effect, overrideVertexBuffers) {
        this._currentIndexBuffer = indexBuffer;
        this._currentOverrideVertexBuffers = overrideVertexBuffers !== null && overrideVertexBuffers !== void 0 ? overrideVertexBuffers : null;
        this._cacheRenderPipeline.setBuffers(vertexBuffers, indexBuffer, this._currentOverrideVertexBuffers);
    }
    _releaseBuffer(buffer) {
        return this._bufferManager.releaseBuffer(buffer);
    }
    createEffect(baseName, attributesNamesOrOptions, uniformsNamesOrEngine, samplers, defines, fallbacks, onCompiled, onError, indexParameters, shaderLanguage = ShaderLanguage.GLSL) {
        var _a;
        const vertex = baseName.vertexElement || baseName.vertex || baseName.vertexToken || baseName.vertexSource || baseName;
        const fragment = baseName.fragmentElement || baseName.fragment || baseName.fragmentToken || baseName.fragmentSource || baseName;
        const globalDefines = this._getGlobalDefines();
        let fullDefines = (_a = defines !== null && defines !== void 0 ? defines : attributesNamesOrOptions.defines) !== null && _a !== void 0 ? _a : "";
        if (globalDefines) {
            fullDefines += "\n" + globalDefines;
        }
        const name = vertex + "+" + fragment + "@" + fullDefines;
        if (this._compiledEffects[name]) {
            var compiledEffect = this._compiledEffects[name];
            if (onCompiled && compiledEffect.isReady()) {
                onCompiled(compiledEffect);
            }
            return compiledEffect;
        }
        var effect = new Effect(baseName, attributesNamesOrOptions, uniformsNamesOrEngine, samplers, this, defines, fallbacks, onCompiled, onError, indexParameters, name, shaderLanguage);
        this._compiledEffects[name] = effect;
        return effect;
    }
    _compileRawShaderToSpirV(source, type) {
        return this._glslang.compileGLSL(source, type);
    }
    _compileShaderToSpirV(source, type, defines, shaderVersion) {
        return this._compileRawShaderToSpirV(shaderVersion + (defines ? defines + "\n" : "") + source, type);
    }
    _getWGSLShader(source, type, defines, shaderVersion) {
        if (defines) {
            defines = "//" + defines.split("\n").join("\n//") + "\n";
        }
        else {
            defines = "";
        }
        return defines + source;
    }
    _createPipelineStageDescriptor(vertexShader, fragmentShader, shaderLanguage) {
        if (this._tintWASM && shaderLanguage === ShaderLanguage.GLSL) {
            vertexShader = this._tintWASM.convertSpirV2WGSL(vertexShader);
            fragmentShader = this._tintWASM.convertSpirV2WGSL(fragmentShader);
        }
        return {
            vertexStage: {
                module: this._device.createShaderModule({
                    code: vertexShader,
                }),
                entryPoint: "main",
            },
            fragmentStage: {
                module: this._device.createShaderModule({
                    code: fragmentShader,
                }),
                entryPoint: "main"
            }
        };
    }
    _compileRawPipelineStageDescriptor(vertexCode, fragmentCode, shaderLanguage) {
        var vertexShader = shaderLanguage === ShaderLanguage.GLSL ? this._compileRawShaderToSpirV(vertexCode, "vertex") : vertexCode;
        var fragmentShader = shaderLanguage === ShaderLanguage.GLSL ? this._compileRawShaderToSpirV(fragmentCode, "fragment") : fragmentCode;
        return this._createPipelineStageDescriptor(vertexShader, fragmentShader, shaderLanguage);
    }
    _compilePipelineStageDescriptor(vertexCode, fragmentCode, defines, shaderLanguage) {
        this.onBeforeShaderCompilationObservable.notifyObservers(this);
        var shaderVersion = "#version 450\n";
        var vertexShader = shaderLanguage === ShaderLanguage.GLSL ? this._compileShaderToSpirV(vertexCode, "vertex", defines, shaderVersion) : this._getWGSLShader(vertexCode, "vertex", defines, shaderVersion);
        var fragmentShader = shaderLanguage === ShaderLanguage.GLSL ? this._compileShaderToSpirV(fragmentCode, "fragment", defines, shaderVersion) : this._getWGSLShader(fragmentCode, "fragment", defines, shaderVersion);
        let program = this._createPipelineStageDescriptor(vertexShader, fragmentShader, shaderLanguage);
        this.onAfterShaderCompilationObservable.notifyObservers(this);
        return program;
    }
    createRawShaderProgram(pipelineContext, vertexCode, fragmentCode, context, transformFeedbackVaryings = null) {
        throw "Not available on WebGPU";
    }
    createShaderProgram(pipelineContext, vertexCode, fragmentCode, defines, context, transformFeedbackVaryings = null) {
        throw "Not available on WebGPU";
    }
    inlineShaderCode(code) {
        const sci = new ShaderCodeInliner(code);
        sci.debug = false;
        sci.processCode();
        return sci.code;
    }
    createPipelineContext(shaderProcessingContext) {
        return new WebGPUPipelineContext(shaderProcessingContext, this);
    }
    createMaterialContext() {
        return new WebGPUMaterialContext();
    }
    createDrawContext() {
        return new WebGPUDrawContext(this._bufferManager);
    }
    _preparePipelineContext(pipelineContext, vertexSourceCode, fragmentSourceCode, createAsRaw, rawVertexSourceCode, rawFragmentSourceCode, rebuildRebind, defines, transformFeedbackVaryings, key) {
        const webGpuContext = pipelineContext;
        const shaderLanguage = webGpuContext.shaderProcessingContext.shaderLanguage;
        if (this.dbgShowShaderCode) {
            console.log(defines);
            console.log(vertexSourceCode);
            console.log(fragmentSourceCode);
        }
        webGpuContext.sources = {
            fragment: fragmentSourceCode,
            vertex: vertexSourceCode,
            rawVertex: rawVertexSourceCode,
            rawFragment: rawFragmentSourceCode,
        };
        if (createAsRaw) {
            webGpuContext.stages = this._compileRawPipelineStageDescriptor(vertexSourceCode, fragmentSourceCode, shaderLanguage);
        }
        else {
            webGpuContext.stages = this._compilePipelineStageDescriptor(vertexSourceCode, fragmentSourceCode, defines, shaderLanguage);
        }
    }
    getAttributes(pipelineContext, attributesNames) {
        const results = new Array(attributesNames.length);
        const gpuPipelineContext = pipelineContext;
        for (let i = 0; i < attributesNames.length; i++) {
            const attributeName = attributesNames[i];
            const attributeLocation = gpuPipelineContext.shaderProcessingContext.availableAttributes[attributeName];
            if (attributeLocation === undefined) {
                continue;
            }
            results[i] = attributeLocation;
        }
        return results;
    }
    enableEffect(effect) {
        if (!effect) {
            return;
        }
        let isNewEffect = true;
        if (!DrawWrapper.IsWrapper(effect)) {
            isNewEffect = effect !== this._currentEffect;
            this._currentEffect = effect;
            this._currentMaterialContext = this._defaultMaterialContext;
            this._currentDrawContext = this._defaultDrawContext;
            this._counters.numEnableEffects++;
            if (this.dbgLogIfNotDrawWrapper) {
                Logger.Warn(`enableEffect has been called with an Effect and not a Wrapper! effect.uniqueId=${effect.uniqueId}, effect.name=${effect.name}, effect.name.vertex=${effect.name.vertex}, effect.name.fragment=${effect.name.fragment}`, 10);
            }
        }
        else if (!effect.effect || effect.effect === this._currentEffect && effect.materialContext === this._currentMaterialContext && effect.drawContext === this._currentDrawContext && !this._forceEnableEffect) {
            if (!effect.effect && this.dbgShowEmptyEnableEffectCalls) {
                console.error("drawWrapper=", effect);
                throw "Invalid call to enableEffect: the effect property is empty!";
            }
            return;
        }
        else {
            isNewEffect = effect.effect !== this._currentEffect;
            this._currentEffect = effect.effect;
            this._currentMaterialContext = effect.materialContext;
            this._currentDrawContext = effect.drawContext;
            this._counters.numEnableDrawWrapper++;
            if (!this._currentMaterialContext) {
                console.error("drawWrapper=", effect);
                throw `Invalid call to enableEffect: the materialContext property is empty!`;
            }
        }
        this._stencilStateComposer.stencilMaterial = undefined;
        this._forceEnableEffect = isNewEffect || this._forceEnableEffect ? false : this._forceEnableEffect;
        if (isNewEffect) {
            if (this._currentEffect.onBind) {
                this._currentEffect.onBind(this._currentEffect);
            }
            if (this._currentEffect._onBindObservable) {
                this._currentEffect._onBindObservable.notifyObservers(this._currentEffect);
            }
        }
    }
    _releaseEffect(effect) {
        if (this._compiledEffects[effect._key]) {
            delete this._compiledEffects[effect._key];
            this._deletePipelineContext(effect.getPipelineContext());
        }
    }
    releaseEffects() {
        for (const name in this._compiledEffects) {
            const webGPUPipelineContext = this._compiledEffects[name].getPipelineContext();
            this._deletePipelineContext(webGPUPipelineContext);
        }
        this._compiledEffects = {};
    }
    _deletePipelineContext(pipelineContext) {
        const webgpuPipelineContext = pipelineContext;
        if (webgpuPipelineContext) {
            pipelineContext.dispose();
        }
    }
    get needPOTTextures() {
        return false;
    }
    _createHardwareTexture() {
        return new WebGPUHardwareTexture();
    }
    _releaseTexture(texture) {
        const index = this._internalTexturesCache.indexOf(texture);
        if (index !== -1) {
            this._internalTexturesCache.splice(index, 1);
        }
        this._textureHelper.releaseTexture(texture);
    }
    _getRGBABufferInternalSizedFormat(type, format) {
        return Constants.TEXTUREFORMAT_RGBA;
    }
    updateTextureComparisonFunction(texture, comparisonFunction) {
        texture._comparisonFunction = comparisonFunction;
    }
    _createInternalTexture(size, options, delayGPUTextureCreation = true, source = InternalTextureSource.Unknown) {
        var _a, _b;
        const fullOptions = {};
        if (options !== undefined && typeof options === "object") {
            fullOptions.generateMipMaps = options.generateMipMaps;
            fullOptions.type = options.type === undefined ? Constants.TEXTURETYPE_UNSIGNED_INT : options.type;
            fullOptions.samplingMode = options.samplingMode === undefined ? Constants.TEXTURE_TRILINEAR_SAMPLINGMODE : options.samplingMode;
            fullOptions.format = options.format === undefined ? Constants.TEXTUREFORMAT_RGBA : options.format;
            fullOptions.samples = (_a = options.samples) !== null && _a !== void 0 ? _a : 1;
            fullOptions.creationFlags = (_b = options.creationFlags) !== null && _b !== void 0 ? _b : 0;
        }
        else {
            fullOptions.generateMipMaps = options;
            fullOptions.type = Constants.TEXTURETYPE_UNSIGNED_INT;
            fullOptions.samplingMode = Constants.TEXTURE_TRILINEAR_SAMPLINGMODE;
            fullOptions.format = Constants.TEXTUREFORMAT_RGBA;
            fullOptions.samples = 1;
            fullOptions.creationFlags = 0;
        }
        if (fullOptions.type === Constants.TEXTURETYPE_FLOAT && !this._caps.textureFloatLinearFiltering) {
            fullOptions.samplingMode = Constants.TEXTURE_NEAREST_SAMPLINGMODE;
        }
        else if (fullOptions.type === Constants.TEXTURETYPE_HALF_FLOAT && !this._caps.textureHalfFloatLinearFiltering) {
            fullOptions.samplingMode = Constants.TEXTURE_NEAREST_SAMPLINGMODE;
        }
        if (fullOptions.type === Constants.TEXTURETYPE_FLOAT && !this._caps.textureFloat) {
            fullOptions.type = Constants.TEXTURETYPE_UNSIGNED_INT;
            Logger.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE");
        }
        const texture = new InternalTexture(this, source);
        const width = size.width || size;
        const height = size.height || size;
        const layers = size.layers || 0;
        texture.baseWidth = width;
        texture.baseHeight = height;
        texture.width = width;
        texture.height = height;
        texture.depth = layers;
        texture.isReady = true;
        texture.samples = fullOptions.samples;
        texture.generateMipMaps = fullOptions.generateMipMaps ? true : false;
        texture.samplingMode = fullOptions.samplingMode;
        texture.type = fullOptions.type;
        texture.format = fullOptions.format;
        texture.is2DArray = layers > 0;
        texture._cachedWrapU = Constants.TEXTURE_CLAMP_ADDRESSMODE;
        texture._cachedWrapV = Constants.TEXTURE_CLAMP_ADDRESSMODE;
        this._internalTexturesCache.push(texture);
        if (!delayGPUTextureCreation) {
            this._textureHelper.createGPUTextureForInternalTexture(texture, width, height, layers || 1, fullOptions.creationFlags);
        }
        return texture;
    }
    createTexture(url, noMipmap, invertY, scene, samplingMode = Constants.TEXTURE_TRILINEAR_SAMPLINGMODE, onLoad = null, onError = null, buffer = null, fallback = null, format = null, forcedExtension = null, mimeType, loaderOptions, creationFlags, useSRGBBuffer) {
        return this._createTextureBase(url, noMipmap, invertY, scene, samplingMode, onLoad, onError, (texture, extension, scene, img, invertY, noMipmap, isCompressed, processFunction, samplingMode) => {
            var _a;
            const imageBitmap = img;
            texture.baseWidth = imageBitmap.width;
            texture.baseHeight = imageBitmap.height;
            texture.width = imageBitmap.width;
            texture.height = imageBitmap.height;
            texture.format = format !== null && format !== void 0 ? format : -1;
            processFunction(texture.width, texture.height, imageBitmap, extension, texture, () => { });
            if (!((_a = texture._hardwareTexture) === null || _a === void 0 ? void 0 : _a.underlyingResource)) {
                const gpuTextureWrapper = this._textureHelper.createGPUTextureForInternalTexture(texture, imageBitmap.width, imageBitmap.height, undefined, creationFlags);
                if (WebGPUTextureHelper.IsImageBitmap(imageBitmap)) {
                    this._textureHelper.updateTexture(imageBitmap, texture, imageBitmap.width, imageBitmap.height, texture.depth, gpuTextureWrapper.format, 0, 0, invertY, false, 0, 0, this._uploadEncoder);
                    if (!noMipmap && !isCompressed) {
                        this._generateMipmaps(texture, this._uploadEncoder);
                    }
                }
            }
            else if (!noMipmap && !isCompressed) {
                this._generateMipmaps(texture, this._uploadEncoder);
            }
            if (scene) {
                scene._removePendingData(texture);
            }
            texture.isReady = true;
            texture.onLoadedObservable.notifyObservers(texture);
            texture.onLoadedObservable.clear();
        }, () => false, buffer, fallback, format, forcedExtension, mimeType, loaderOptions, useSRGBBuffer);
    }
    generateMipMapsForCubemap(texture, unbind = true) {
        var _a;
        if (texture.generateMipMaps) {
            let gpuTexture = (_a = texture._hardwareTexture) === null || _a === void 0 ? void 0 : _a.underlyingResource;
            if (!gpuTexture) {
                this._textureHelper.createGPUTextureForInternalTexture(texture);
            }
            this._generateMipmaps(texture, texture.source === InternalTextureSource.RenderTarget || texture.source === InternalTextureSource.MultiRenderTarget ? this._renderTargetEncoder : undefined);
        }
    }
    updateTextureSamplingMode(samplingMode, texture, generateMipMaps = false) {
        if (generateMipMaps) {
            texture.generateMipMaps = true;
            this._generateMipmaps(texture);
        }
        texture.samplingMode = samplingMode;
    }
    updateTextureWrappingMode(texture, wrapU, wrapV = null, wrapR = null) {
        if (wrapU !== null) {
            texture._cachedWrapU = wrapU;
        }
        if (wrapV !== null) {
            texture._cachedWrapV = wrapV;
        }
        if ((texture.is2DArray || texture.is3D) && (wrapR !== null)) {
            texture._cachedWrapR = wrapR;
        }
    }
    updateTextureDimensions(texture, width, height, depth = 1) {
        if (!texture._hardwareTexture) {
            return;
        }
        if (texture.width === width && texture.height === height && texture.depth === depth) {
            return;
        }
        const additionalUsages = texture._hardwareTexture.textureAdditionalUsages;
        texture._hardwareTexture.release();
        this._textureHelper.createGPUTextureForInternalTexture(texture, width, height, depth, additionalUsages);
    }
    _setInternalTexture(name, texture, baseName, textureIndex = 0) {
        baseName = baseName !== null && baseName !== void 0 ? baseName : name;
        if (this._currentEffect) {
            const webgpuPipelineContext = this._currentEffect._pipelineContext;
            const availableTexture = webgpuPipelineContext.shaderProcessingContext.availableTextures[baseName];
            this._currentMaterialContext.setTexture(name, texture);
            if (availableTexture && availableTexture.autoBindSampler) {
                const samplerName = baseName + WebGPUShaderProcessor.AutoSamplerSuffix;
                this._currentMaterialContext.setSampler(samplerName, texture);
            }
        }
    }
    setTexture(channel, unused, texture, name) {
        this._setTexture(channel, texture, false, false, name, name);
    }
    setTextureArray(channel, unused, textures, name) {
        for (var index = 0; index < textures.length; index++) {
            this._setTexture(-1, textures[index], true, false, name + index.toString(), name, index);
        }
    }
    _setTexture(channel, texture, isPartOfTextureArray = false, depthStencilTexture = false, name = "", baseName, textureIndex = 0) {
        baseName = baseName !== null && baseName !== void 0 ? baseName : name;
        if (this._currentEffect) {
            if (!texture) {
                this._currentMaterialContext.setTexture(name, null);
                return false;
            }
            if (texture.video) {
                texture.update();
            }
            else if (texture.delayLoadState === Constants.DELAYLOADSTATE_NOTLOADED) {
                texture.delayLoad();
                return false;
            }
            let internalTexture = null;
            if (depthStencilTexture) {
                internalTexture = texture.depthStencilTexture;
            }
            else if (texture.isReady()) {
                internalTexture = texture.getInternalTexture();
            }
            else if (texture.isCube) {
                internalTexture = this.emptyCubeTexture;
            }
            else if (texture.is3D) {
                internalTexture = this.emptyTexture3D;
            }
            else if (texture.is2DArray) {
                internalTexture = this.emptyTexture2DArray;
            }
            else {
                internalTexture = this.emptyTexture;
            }
            if (internalTexture && !internalTexture.isMultiview) {
                if (internalTexture.isCube && internalTexture._cachedCoordinatesMode !== texture.coordinatesMode) {
                    internalTexture._cachedCoordinatesMode = texture.coordinatesMode;
                    const textureWrapMode = (texture.coordinatesMode !== Constants.TEXTURE_CUBIC_MODE && texture.coordinatesMode !== Constants.TEXTURE_SKYBOX_MODE) ? Constants.TEXTURE_WRAP_ADDRESSMODE : Constants.TEXTURE_CLAMP_ADDRESSMODE;
                    texture.wrapU = textureWrapMode;
                    texture.wrapV = textureWrapMode;
                }
                internalTexture._cachedWrapU = texture.wrapU;
                internalTexture._cachedWrapV = texture.wrapV;
                if (internalTexture.is3D) {
                    internalTexture._cachedWrapR = texture.wrapR;
                }
                this._setAnisotropicLevel(0, internalTexture, texture.anisotropicFilteringLevel);
            }
            this._setInternalTexture(name, internalTexture, baseName, textureIndex);
        }
        else {
            if (this.dbgVerboseLogsForFirstFrames) {
                if (this._count === undefined) {
                    this._count = 0;
                }
                if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                    console.log("frame #" + this._count + " - _setTexture called with a null _currentEffect! texture=", texture);
                }
            }
        }
        return true;
    }
    _setAnisotropicLevel(target, internalTexture, anisotropicFilteringLevel) {
        if (internalTexture._cachedAnisotropicFilteringLevel !== anisotropicFilteringLevel) {
            internalTexture._cachedAnisotropicFilteringLevel = Math.min(anisotropicFilteringLevel, this._caps.maxAnisotropy);
        }
    }
    _bindTexture(channel, texture, name) {
        if (channel === undefined) {
            return;
        }
        this._setInternalTexture(name, texture);
    }
    generateMipmaps(texture) {
        this._generateMipmaps(texture, this._renderTargetEncoder);
    }
    _generateMipmaps(texture, commandEncoder) {
        const gpuHardwareTexture = texture._hardwareTexture;
        if (!gpuHardwareTexture) {
            return;
        }
        commandEncoder = commandEncoder !== null && commandEncoder !== void 0 ? commandEncoder : (this._currentRenderTarget && !this._currentRenderPass ? this._renderTargetEncoder : !this._currentRenderPass ? this._renderEncoder : this._uploadEncoder);
        const format = texture._hardwareTexture.format;
        const mipmapCount = WebGPUTextureHelper.ComputeNumMipmapLevels(texture.width, texture.height);
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                console.log("frame #" + this._count + " - generate mipmaps called - width=", texture.width, "height=", texture.height, "isCube=", texture.isCube);
            }
        }
        if (texture.isCube) {
            this._textureHelper.generateCubeMipmaps(gpuHardwareTexture, format, mipmapCount, commandEncoder);
        }
        else {
            this._textureHelper.generateMipmaps(gpuHardwareTexture, format, mipmapCount, 0, commandEncoder);
        }
    }
    updateTextureData(texture, imageData, xOffset, yOffset, width, height, faceIndex = 0, lod = 0) {
        var _a;
        let gpuTextureWrapper = texture._hardwareTexture;
        if (!((_a = texture._hardwareTexture) === null || _a === void 0 ? void 0 : _a.underlyingResource)) {
            gpuTextureWrapper = this._textureHelper.createGPUTextureForInternalTexture(texture);
        }
        const data = new Uint8Array(imageData.buffer, imageData.byteOffset, imageData.byteLength);
        this._textureHelper.updateTexture(data, texture, width, height, texture.depth, gpuTextureWrapper.format, faceIndex, lod, texture.invertY, false, xOffset, yOffset, this._uploadEncoder);
    }
    _uploadCompressedDataToTextureDirectly(texture, internalFormat, width, height, imageData, faceIndex = 0, lod = 0) {
        var _a;
        let gpuTextureWrapper = texture._hardwareTexture;
        if (!((_a = texture._hardwareTexture) === null || _a === void 0 ? void 0 : _a.underlyingResource)) {
            texture.format = internalFormat;
            gpuTextureWrapper = this._textureHelper.createGPUTextureForInternalTexture(texture, width, height);
        }
        const data = new Uint8Array(imageData.buffer, imageData.byteOffset, imageData.byteLength);
        this._textureHelper.updateTexture(data, texture, width, height, texture.depth, gpuTextureWrapper.format, faceIndex, lod, false, false, 0, 0, this._uploadEncoder);
    }
    _uploadDataToTextureDirectly(texture, imageData, faceIndex = 0, lod = 0, babylonInternalFormat, useTextureWidthAndHeight = false) {
        var _a;
        const lodMaxWidth = Math.round(Math.log(texture.width) * Math.LOG2E);
        const lodMaxHeight = Math.round(Math.log(texture.height) * Math.LOG2E);
        const width = useTextureWidthAndHeight ? texture.width : Math.pow(2, Math.max(lodMaxWidth - lod, 0));
        const height = useTextureWidthAndHeight ? texture.height : Math.pow(2, Math.max(lodMaxHeight - lod, 0));
        let gpuTextureWrapper = texture._hardwareTexture;
        if (!((_a = texture._hardwareTexture) === null || _a === void 0 ? void 0 : _a.underlyingResource)) {
            gpuTextureWrapper = this._textureHelper.createGPUTextureForInternalTexture(texture, width, height);
        }
        const data = new Uint8Array(imageData.buffer, imageData.byteOffset, imageData.byteLength);
        this._textureHelper.updateTexture(data, texture, width, height, texture.depth, gpuTextureWrapper.format, faceIndex, lod, texture.invertY, false, 0, 0, this._uploadEncoder);
    }
    _uploadArrayBufferViewToTexture(texture, imageData, faceIndex = 0, lod = 0) {
        this._uploadDataToTextureDirectly(texture, imageData, faceIndex, lod);
    }
    _uploadImageToTexture(texture, image, faceIndex = 0, lod = 0) {
        var _a;
        let gpuTextureWrapper = texture._hardwareTexture;
        if (!((_a = texture._hardwareTexture) === null || _a === void 0 ? void 0 : _a.underlyingResource)) {
            gpuTextureWrapper = this._textureHelper.createGPUTextureForInternalTexture(texture);
        }
        const bitmap = image;
        const width = Math.ceil(texture.width / (1 << lod));
        const height = Math.ceil(texture.height / (1 << lod));
        this._textureHelper.updateTexture(bitmap, texture, width, height, texture.depth, gpuTextureWrapper.format, faceIndex, lod, texture.invertY, false, 0, 0, this._uploadEncoder);
    }
    readPixels(x, y, width, height, hasAlpha = true, flushRenderer = true) {
        const renderPassWrapper = this._rttRenderPassWrapper.renderPass ? this._rttRenderPassWrapper : this._mainRenderPassWrapper;
        const gpuTexture = renderPassWrapper.colorAttachmentGPUTextures[0].underlyingResource;
        const gpuTextureFormat = renderPassWrapper.colorAttachmentGPUTextures[0].format;
        if (!gpuTexture) {
            return Promise.resolve(new Uint8Array(0));
        }
        if (flushRenderer) {
            this.flushFramebuffer();
        }
        return this._textureHelper.readPixels(gpuTexture, x, y, width, height, gpuTextureFormat);
    }
    beginFrame() {
        super.beginFrame();
    }
    endFrame() {
        this._snapshotRendering.endFrame(this._mainRenderPassWrapper.renderPass);
        this._endMainRenderPass();
        this._timestampQuery.endFrame(this._renderEncoder);
        this.flushFramebuffer(false);
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                console.log("frame #" + this._count + " - counters");
            }
        }
        this._textureHelper.destroyDeferredTextures();
        this._bufferManager.destroyDeferredBuffers();
        if (this._features._collectUbosUpdatedInFrame) {
            if (this.dbgVerboseLogsForFirstFrames) {
                if (this._count === undefined) {
                    this._count = 0;
                }
                if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                    const list = [];
                    for (const name in UniformBuffer._updatedUbosInFrame) {
                        list.push(name + ":" + UniformBuffer._updatedUbosInFrame[name]);
                    }
                    console.log("frame #" + this._count + " - updated ubos -", list.join(", "));
                }
            }
            UniformBuffer._updatedUbosInFrame = {};
        }
        this.countersLastFrame.numEnableEffects = this._counters.numEnableEffects;
        this.countersLastFrame.numEnableDrawWrapper = this._counters.numEnableDrawWrapper;
        this.countersLastFrame.numBundleCreationNonCompatMode = this._counters.numBundleCreationNonCompatMode;
        this.countersLastFrame.numBundleReuseNonCompatMode = this._counters.numBundleReuseNonCompatMode;
        this._counters.numEnableEffects = 0;
        this._counters.numEnableDrawWrapper = 0;
        this._counters.numBundleCreationNonCompatMode = 0;
        this._counters.numBundleReuseNonCompatMode = 0;
        this._cacheRenderPipeline.endFrame();
        this._cacheBindGroups.endFrame();
        this._pendingDebugCommands.length = 0;
        super.endFrame();
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (this._count < this.dbgVerboseLogsNumFrames) {
                console.log("%c frame #" + this._count + " - end", "background: #ffff00");
            }
            if (this._count < this.dbgVerboseLogsNumFrames) {
                this._count++;
                if (this._count !== this.dbgVerboseLogsNumFrames) {
                    console.log("%c frame #" + this._count + " - begin", "background: #ffff00");
                }
            }
        }
    }
    flushFramebuffer(reopenPass = true) {
        const currentRenderPassIsNULL = !this._currentRenderPass;
        let currentPasses = 0;
        if (this._currentRenderPass && this._currentRenderTarget) {
            currentPasses |= 1;
            this._endRenderTargetRenderPass();
        }
        if (this._mainRenderPassWrapper.renderPass) {
            currentPasses |= 2;
            this._endMainRenderPass();
        }
        this._commandBuffers[0] = this._uploadEncoder.finish();
        this._commandBuffers[1] = this._renderTargetEncoder.finish();
        this._commandBuffers[2] = this._renderEncoder.finish();
        this._device.queue.submit(this._commandBuffers);
        this._uploadEncoder = this._device.createCommandEncoder(this._uploadEncoderDescriptor);
        this._renderEncoder = this._device.createCommandEncoder(this._renderEncoderDescriptor);
        this._renderTargetEncoder = this._device.createCommandEncoder(this._renderTargetEncoderDescriptor);
        this._timestampQuery.startFrame(this._uploadEncoder);
        this._textureHelper.setCommandEncoder(this._uploadEncoder);
        this._bundleList.reset();
        this._bundleListRenderTarget.reset();
        if (reopenPass) {
            if (currentPasses & 2) {
                this._startMainRenderPass(false);
            }
            if (currentPasses & 1) {
                this._startRenderTargetRenderPass(this._currentRenderTarget, false, null, false, false);
            }
            if (currentRenderPassIsNULL && this._currentRenderTarget) {
                this._currentRenderPass = null;
            }
        }
    }
    _currentFrameBufferIsDefaultFrameBuffer() {
        return this._currentRenderTarget === null;
    }
    _startRenderTargetRenderPass(rtWrapper, setClearStates, clearColor, clearDepth, clearStencil) {
        var _a, _b, _c;
        const depthStencilTexture = rtWrapper._depthStencilTexture;
        const gpuDepthStencilWrapper = depthStencilTexture === null || depthStencilTexture === void 0 ? void 0 : depthStencilTexture._hardwareTexture;
        const gpuDepthStencilTexture = gpuDepthStencilWrapper === null || gpuDepthStencilWrapper === void 0 ? void 0 : gpuDepthStencilWrapper.underlyingResource;
        const gpuDepthStencilMSAATexture = gpuDepthStencilWrapper === null || gpuDepthStencilWrapper === void 0 ? void 0 : gpuDepthStencilWrapper.msaaTexture;
        const depthTextureView = gpuDepthStencilTexture === null || gpuDepthStencilTexture === void 0 ? void 0 : gpuDepthStencilTexture.createView(this._rttRenderPassWrapper.depthAttachmentViewDescriptor);
        const depthMSAATextureView = gpuDepthStencilMSAATexture === null || gpuDepthStencilMSAATexture === void 0 ? void 0 : gpuDepthStencilMSAATexture.createView(this._rttRenderPassWrapper.depthAttachmentViewDescriptor);
        const colorAttachments = [];
        if (this.useReverseDepthBuffer) {
            this.setDepthFunctionToGreaterOrEqual();
        }
        const colorClearValue = !setClearStates ? LoadOp.Load : clearColor ? clearColor : LoadOp.Load;
        const depthClearValue = !setClearStates ? LoadOp.Load : clearDepth ? (this.useReverseDepthBuffer ? this._clearReverseDepthValue : this._clearDepthValue) : LoadOp.Load;
        const stencilClearValue = !setClearStates ? LoadOp.Load : clearStencil ? this._clearStencilValue : LoadOp.Load;
        if (rtWrapper._attachments && rtWrapper.isMulti) {
            if (!this._mrtAttachments || this._mrtAttachments.length === 0) {
                this._mrtAttachments = rtWrapper._attachments;
            }
            for (let i = 0; i < this._mrtAttachments.length; ++i) {
                const index = this._mrtAttachments[i];
                if (index === 0) {
                    continue;
                }
                const mrtTexture = rtWrapper.textures[index - 1];
                const gpuMRTWrapper = mrtTexture === null || mrtTexture === void 0 ? void 0 : mrtTexture._hardwareTexture;
                const gpuMRTTexture = gpuMRTWrapper === null || gpuMRTWrapper === void 0 ? void 0 : gpuMRTWrapper.underlyingResource;
                if (gpuMRTWrapper && gpuMRTTexture) {
                    const viewDescriptor = {
                        ...this._rttRenderPassWrapper.colorAttachmentViewDescriptor,
                        format: gpuMRTWrapper.format,
                    };
                    const gpuMSAATexture = gpuMRTWrapper.msaaTexture;
                    const colorTextureView = gpuMRTTexture.createView(viewDescriptor);
                    const colorMSAATextureView = gpuMSAATexture === null || gpuMSAATexture === void 0 ? void 0 : gpuMSAATexture.createView(viewDescriptor);
                    colorAttachments.push({
                        view: colorMSAATextureView ? colorMSAATextureView : colorTextureView,
                        resolveTarget: gpuMSAATexture ? colorTextureView : undefined,
                        loadValue: colorClearValue,
                        storeOp: StoreOp.Store,
                    });
                }
            }
            this._cacheRenderPipeline.setMRTAttachments(this._mrtAttachments, rtWrapper.textures);
        }
        else {
            const internalTexture = rtWrapper.texture;
            const gpuWrapper = internalTexture._hardwareTexture;
            const gpuTexture = gpuWrapper.underlyingResource;
            const gpuMSAATexture = gpuWrapper.msaaTexture;
            const colorTextureView = gpuTexture.createView(this._rttRenderPassWrapper.colorAttachmentViewDescriptor);
            const colorMSAATextureView = gpuMSAATexture === null || gpuMSAATexture === void 0 ? void 0 : gpuMSAATexture.createView(this._rttRenderPassWrapper.colorAttachmentViewDescriptor);
            colorAttachments.push({
                view: colorMSAATextureView ? colorMSAATextureView : colorTextureView,
                resolveTarget: gpuMSAATexture ? colorTextureView : undefined,
                loadValue: colorClearValue,
                storeOp: StoreOp.Store,
            });
        }
        (_a = this._debugPushGroup) === null || _a === void 0 ? void 0 : _a.call(this, "render target pass", 1);
        this._rttRenderPassWrapper.renderPassDescriptor = {
            colorAttachments,
            depthStencilAttachment: depthStencilTexture && gpuDepthStencilTexture ? {
                view: depthMSAATextureView ? depthMSAATextureView : depthTextureView,
                depthLoadValue: depthClearValue,
                depthStoreOp: StoreOp.Store,
                stencilLoadValue: rtWrapper._depthStencilTextureWithStencil ? stencilClearValue : LoadOp.Load,
                stencilStoreOp: StoreOp.Store,
            } : undefined,
            occlusionQuerySet: ((_b = this._occlusionQuery) === null || _b === void 0 ? void 0 : _b.hasQueries) ? this._occlusionQuery.querySet : undefined,
        };
        this._rttRenderPassWrapper.renderPass = this._renderTargetEncoder.beginRenderPass(this._rttRenderPassWrapper.renderPassDescriptor);
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                const internalTexture = rtWrapper.texture;
                console.log("frame #" + this._count + " - render target begin pass - internalTexture.uniqueId=", internalTexture.uniqueId, "width=", internalTexture.width, "height=", internalTexture.height, this._rttRenderPassWrapper.renderPassDescriptor);
            }
        }
        this._currentRenderPass = this._rttRenderPassWrapper.renderPass;
        (_c = this._debugFlushPendingCommands) === null || _c === void 0 ? void 0 : _c.call(this);
        this._resetCurrentViewport(1);
        this._resetCurrentScissor(1);
        this._resetCurrentStencilRef(1);
        this._resetCurrentColorBlend(1);
    }
    _endRenderTargetRenderPass() {
        var _a, _b, _c;
        if (this._currentRenderPass) {
            const gpuWrapper = this._currentRenderTarget.texture._hardwareTexture;
            if (!this._snapshotRendering.endRenderTargetPass(this._currentRenderPass, gpuWrapper) && !this.compatibilityMode) {
                this._bundleListRenderTarget.run(this._currentRenderPass);
                this._bundleListRenderTarget.reset();
            }
            this._currentRenderPass.endPass();
            if (this.dbgVerboseLogsForFirstFrames) {
                if (this._count === undefined) {
                    this._count = 0;
                }
                if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                    console.log("frame #" + this._count + " - render target end pass - internalTexture.uniqueId=", (_b = (_a = this._currentRenderTarget) === null || _a === void 0 ? void 0 : _a.texture) === null || _b === void 0 ? void 0 : _b.uniqueId);
                }
            }
            (_c = this._debugPopGroup) === null || _c === void 0 ? void 0 : _c.call(this, 1);
            this._resetCurrentViewport(1);
            this._resetCurrentScissor(1);
            this._resetCurrentStencilRef(1);
            this._resetCurrentColorBlend(1);
            this._currentRenderPass = null;
            this._rttRenderPassWrapper.reset();
        }
    }
    _getCurrentRenderPass() {
        if (this._currentRenderTarget && !this._currentRenderPass) {
            this._startRenderTargetRenderPass(this._currentRenderTarget, false, null, false, false);
        }
        else if (!this._currentRenderPass) {
            this._startMainRenderPass(false);
        }
        return this._currentRenderPass;
    }
    _getCurrentRenderPassIndex() {
        return this._currentRenderPass === null ? -1 : this._currentRenderPass === this._mainRenderPassWrapper.renderPass ? 0 : 1;
    }
    _startMainRenderPass(setClearStates, clearColor, clearDepth, clearStencil) {
        var _a, _b, _c;
        if (this._mainRenderPassWrapper.renderPass) {
            this._endMainRenderPass();
        }
        if (this.useReverseDepthBuffer) {
            this.setDepthFunctionToGreaterOrEqual();
        }
        const colorClearValue = !setClearStates ? LoadOp.Load : clearColor ? clearColor : LoadOp.Load;
        const depthClearValue = !setClearStates ? LoadOp.Load : clearDepth ? (this.useReverseDepthBuffer ? this._clearReverseDepthValue : this._clearDepthValue) : LoadOp.Load;
        const stencilClearValue = !setClearStates ? LoadOp.Load : clearStencil ? this._clearStencilValue : LoadOp.Load;
        this._mainRenderPassWrapper.renderPassDescriptor.colorAttachments[0].loadValue = colorClearValue;
        this._mainRenderPassWrapper.renderPassDescriptor.depthStencilAttachment.depthLoadValue = depthClearValue;
        this._mainRenderPassWrapper.renderPassDescriptor.depthStencilAttachment.stencilLoadValue = stencilClearValue;
        this._mainRenderPassWrapper.renderPassDescriptor.occlusionQuerySet = ((_a = this._occlusionQuery) === null || _a === void 0 ? void 0 : _a.hasQueries) ? this._occlusionQuery.querySet : undefined;
        this._swapChainTexture = this._context.getCurrentTexture();
        this._mainRenderPassWrapper.colorAttachmentGPUTextures[0].set(this._swapChainTexture);
        if (this._options.antialiasing) {
            this._mainRenderPassWrapper.renderPassDescriptor.colorAttachments[0].resolveTarget = this._swapChainTexture.createView();
        }
        else {
            this._mainRenderPassWrapper.renderPassDescriptor.colorAttachments[0].view = this._swapChainTexture.createView();
        }
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                console.log("frame #" + this._count + " - main begin pass - texture width=" + this._mainTextureExtends.width, " height=" + this._mainTextureExtends.height, this._mainRenderPassWrapper.renderPassDescriptor);
            }
        }
        (_b = this._debugPushGroup) === null || _b === void 0 ? void 0 : _b.call(this, "main pass", 0);
        this._currentRenderPass = this._renderEncoder.beginRenderPass(this._mainRenderPassWrapper.renderPassDescriptor);
        this._mainRenderPassWrapper.renderPass = this._currentRenderPass;
        (_c = this._debugFlushPendingCommands) === null || _c === void 0 ? void 0 : _c.call(this);
        this._resetCurrentViewport(0);
        this._resetCurrentScissor(0);
        this._resetCurrentStencilRef(0);
        this._resetCurrentColorBlend(0);
    }
    _endMainRenderPass() {
        var _a;
        if (this._mainRenderPassWrapper.renderPass !== null) {
            this._snapshotRendering.endMainRenderPass();
            if (!this.compatibilityMode && !this._snapshotRendering.play) {
                this._bundleList.run(this._mainRenderPassWrapper.renderPass);
                this._bundleList.reset();
            }
            this._mainRenderPassWrapper.renderPass.endPass();
            if (this.dbgVerboseLogsForFirstFrames) {
                if (this._count === undefined) {
                    this._count = 0;
                }
                if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                    console.log("frame #" + this._count + " - main end pass");
                }
            }
            (_a = this._debugPopGroup) === null || _a === void 0 ? void 0 : _a.call(this, 0);
            this._resetCurrentViewport(0);
            this._resetCurrentScissor(0);
            this._resetCurrentStencilRef(0);
            this._resetCurrentColorBlend(0);
            if (this._mainRenderPassWrapper.renderPass === this._currentRenderPass) {
                this._currentRenderPass = null;
            }
            this._mainRenderPassWrapper.reset(false);
        }
    }
    bindFramebuffer(texture, faceIndex = 0, requiredWidth, requiredHeight, forceFullscreenViewport, lodLevel = 0, layer = 0) {
        var _a, _b;
        const hardwareTexture = (_a = texture.texture) === null || _a === void 0 ? void 0 : _a._hardwareTexture;
        if (!hardwareTexture) {
            if (this.dbgSanityChecks) {
                console.error("bindFramebuffer: Trying to bind a texture that does not have a hardware texture!", texture, hardwareTexture);
            }
            return;
        }
        if (this._currentRenderTarget) {
            this.unBindFramebuffer(this._currentRenderTarget);
        }
        this._currentRenderTarget = texture;
        hardwareTexture._currentLayer = texture.isCube ? layer * 6 + faceIndex : layer;
        this._rttRenderPassWrapper.colorAttachmentGPUTextures[0] = hardwareTexture;
        this._rttRenderPassWrapper.depthTextureFormat = this._currentRenderTarget._depthStencilTexture ? WebGPUTextureHelper.GetWebGPUTextureFormat(-1, this._currentRenderTarget._depthStencilTexture.format) : undefined;
        this._setDepthTextureFormat(this._rttRenderPassWrapper);
        this._setColorFormat(this._rttRenderPassWrapper);
        this._rttRenderPassWrapper.colorAttachmentViewDescriptor = {
            format: this._colorFormat,
            dimension: TextureViewDimension.E2d,
            mipLevelCount: 1,
            baseArrayLayer: texture.isCube ? layer * 6 + faceIndex : layer,
            baseMipLevel: lodLevel,
            arrayLayerCount: 1,
            aspect: TextureAspect.All
        };
        this._rttRenderPassWrapper.depthAttachmentViewDescriptor = {
            format: this._depthTextureFormat,
            dimension: TextureViewDimension.E2d,
            mipLevelCount: 1,
            baseArrayLayer: texture.isCube ? layer * 6 + faceIndex : layer,
            baseMipLevel: 0,
            arrayLayerCount: 1,
            aspect: TextureAspect.All
        };
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                console.log("frame #" + this._count + " - bindFramebuffer called - internalTexture.uniqueId=", (_b = texture.texture) === null || _b === void 0 ? void 0 : _b.uniqueId, "face=", faceIndex, "lodLevel=", lodLevel, "layer=", layer, this._rttRenderPassWrapper.colorAttachmentViewDescriptor, this._rttRenderPassWrapper.depthAttachmentViewDescriptor);
            }
        }
        this._currentRenderPass = null;
        if (this.snapshotRendering && this.snapshotRenderingMode === Constants.SNAPSHOTRENDERING_FAST) {
            this._getCurrentRenderPass();
        }
        if (this._cachedViewport && !forceFullscreenViewport) {
            this.setViewport(this._cachedViewport, requiredWidth, requiredHeight);
        }
        else {
            if (!requiredWidth) {
                requiredWidth = texture.width;
                if (lodLevel) {
                    requiredWidth = requiredWidth / Math.pow(2, lodLevel);
                }
            }
            if (!requiredHeight) {
                requiredHeight = texture.height;
                if (lodLevel) {
                    requiredHeight = requiredHeight / Math.pow(2, lodLevel);
                }
            }
            this._viewport(0, 0, requiredWidth, requiredHeight);
        }
        this.wipeCaches();
    }
    unBindFramebuffer(texture, disableGenerateMipMaps = false, onBeforeUnbind) {
        var _a, _b;
        const saveCRT = this._currentRenderTarget;
        this._currentRenderTarget = null;
        if (onBeforeUnbind) {
            onBeforeUnbind();
        }
        this._currentRenderTarget = saveCRT;
        if (this._currentRenderPass && this._currentRenderPass !== this._mainRenderPassWrapper.renderPass) {
            this._endRenderTargetRenderPass();
        }
        if (((_a = texture.texture) === null || _a === void 0 ? void 0 : _a.generateMipMaps) && !disableGenerateMipMaps && !texture.isCube) {
            this._generateMipmaps(texture.texture);
        }
        this._currentRenderTarget = null;
        this._onAfterUnbindFrameBufferObservable.notifyObservers(this);
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                console.log("frame #" + this._count + " - unBindFramebuffer called - internalTexture.uniqueId=", (_b = texture.texture) === null || _b === void 0 ? void 0 : _b.uniqueId);
            }
        }
        this._mrtAttachments = [];
        this._cacheRenderPipeline.setMRTAttachments(this._mrtAttachments, []);
        this._currentRenderPass = this._mainRenderPassWrapper.renderPass;
        this._setDepthTextureFormat(this._mainRenderPassWrapper);
        this._setColorFormat(this._mainRenderPassWrapper);
    }
    restoreDefaultFramebuffer() {
        if (this._currentRenderTarget) {
            this.unBindFramebuffer(this._currentRenderTarget);
        }
        else {
            this._currentRenderPass = this._mainRenderPassWrapper.renderPass;
            this._setDepthTextureFormat(this._mainRenderPassWrapper);
            this._setColorFormat(this._mainRenderPassWrapper);
        }
        if (this._currentRenderPass) {
            if (this._cachedViewport) {
                this.setViewport(this._cachedViewport);
            }
        }
        this.wipeCaches();
    }
    _setColorFormat(wrapper) {
        const format = wrapper.colorAttachmentGPUTextures[0].format;
        this._cacheRenderPipeline.setColorFormat(format);
        if (this._colorFormat === format) {
            return;
        }
        this._colorFormat = format;
    }
    _setDepthTextureFormat(wrapper) {
        this._cacheRenderPipeline.setDepthStencilFormat(wrapper.depthTextureFormat);
        if (this._depthTextureFormat === wrapper.depthTextureFormat) {
            return;
        }
        this._depthTextureFormat = wrapper.depthTextureFormat;
    }
    setDitheringState(value) {
    }
    setRasterizerState(value) {
    }
    setState(culling, zOffset = 0, force, reverseSide = false, cullBackFaces, stencil, zOffsetUnits = 0) {
        var _a, _b;
        if (this._depthCullingState.cull !== culling || force) {
            this._depthCullingState.cull = culling;
        }
        var cullFace = ((_b = (_a = this.cullBackFaces) !== null && _a !== void 0 ? _a : cullBackFaces) !== null && _b !== void 0 ? _b : true) ? 1 : 2;
        if (this._depthCullingState.cullFace !== cullFace || force) {
            this._depthCullingState.cullFace = cullFace;
        }
        this.setZOffset(zOffset);
        this.setZOffsetUnits(zOffsetUnits);
        var frontFace = reverseSide ? (this._currentRenderTarget ? 1 : 2) : (this._currentRenderTarget ? 2 : 1);
        if (this._depthCullingState.frontFace !== frontFace || force) {
            this._depthCullingState.frontFace = frontFace;
        }
        this._stencilStateComposer.stencilMaterial = stencil;
    }
    _applyRenderPassChanges(renderPass, bundleList) {
        var _a;
        const mustUpdateViewport = this._mustUpdateViewport(renderPass);
        const mustUpdateScissor = this._mustUpdateScissor(renderPass);
        const mustUpdateStencilRef = !this._stencilStateComposer.enabled ? false : this._mustUpdateStencilRef(renderPass);
        const mustUpdateBlendColor = !this._alphaState.alphaBlend ? false : this._mustUpdateBlendColor(renderPass);
        if (bundleList) {
            if (mustUpdateViewport) {
                bundleList.addItem(new WebGPURenderItemViewport(this._viewportCached.x, this._viewportCached.y, this._viewportCached.z, this._viewportCached.w));
            }
            if (mustUpdateScissor) {
                bundleList.addItem(new WebGPURenderItemScissor(this._scissorCached.x, this._scissorCached.y, this._scissorCached.z, this._scissorCached.w));
            }
            if (mustUpdateStencilRef) {
                bundleList.addItem(new WebGPURenderItemStencilRef((_a = this._stencilStateComposer.funcRef) !== null && _a !== void 0 ? _a : 0));
            }
            if (mustUpdateBlendColor) {
                bundleList.addItem(new WebGPURenderItemBlendColor(this._alphaState._blendConstants.slice()));
            }
        }
        else {
            if (mustUpdateViewport) {
                this._applyViewport(renderPass);
            }
            if (mustUpdateScissor) {
                this._applyScissor(renderPass);
            }
            if (mustUpdateStencilRef) {
                this._applyStencilRef(renderPass);
            }
            if (mustUpdateBlendColor) {
                this._applyBlendColor(renderPass);
            }
        }
    }
    _draw(drawType, fillMode, start, count, instancesCount) {
        var _a;
        const renderPass = this._getCurrentRenderPass();
        const renderPassIndex = this._getCurrentRenderPassIndex();
        const bundleList = renderPassIndex === 0 ? this._bundleList : this._bundleListRenderTarget;
        this.applyStates();
        const webgpuPipelineContext = this._currentEffect._pipelineContext;
        this.bindUniformBufferBase(this._currentRenderTarget ? this._ubInvertY : this._ubDontInvertY, 0, WebGPUShaderProcessor.InternalsUBOName);
        if (webgpuPipelineContext.uniformBuffer) {
            webgpuPipelineContext.uniformBuffer.update();
            this.bindUniformBufferBase(webgpuPipelineContext.uniformBuffer.getBuffer(), 0, WebGPUShaderProcessor.LeftOvertUBOName);
        }
        if (this._snapshotRendering.play) {
            this._reportDrawCall();
            return;
        }
        if (!this.compatibilityMode && (this._currentDrawContext.isDirty(this._currentMaterialContext.updateId) || this._currentMaterialContext.isDirty || this._currentMaterialContext.forceBindGroupCreation)) {
            this._currentDrawContext.fastBundle = undefined;
        }
        const useFastPath = !this.compatibilityMode && this._currentDrawContext.fastBundle;
        let renderPass2 = renderPass;
        if (useFastPath || this._snapshotRendering.record) {
            this._applyRenderPassChanges(renderPass, bundleList);
            if (!this._snapshotRendering.record) {
                this._counters.numBundleReuseNonCompatMode++;
                if (this._currentDrawContext.indirectDrawBuffer) {
                    this._currentDrawContext.setIndirectData(count, instancesCount || 1, start);
                }
                bundleList.addBundle(this._currentDrawContext.fastBundle);
                this._reportDrawCall();
                return;
            }
            renderPass2 = bundleList.getBundleEncoder(this._cacheRenderPipeline.colorFormats, this._depthTextureFormat, this.currentSampleCount);
            bundleList.numDrawCalls++;
        }
        let textureState = 0;
        if (!this._caps.textureFloatLinearFiltering && this._currentMaterialContext.hasFloatTextures) {
            let bitVal = 1;
            for (let i = 0; i < webgpuPipelineContext.shaderProcessingContext.textureNames.length; ++i) {
                const textureName = webgpuPipelineContext.shaderProcessingContext.textureNames[i];
                const texture = (_a = this._currentMaterialContext.textures[textureName]) === null || _a === void 0 ? void 0 : _a.texture;
                if ((texture === null || texture === void 0 ? void 0 : texture.type) === Constants.TEXTURETYPE_FLOAT) {
                    textureState |= bitVal;
                }
                bitVal = bitVal << 1;
            }
        }
        const pipeline = this._cacheRenderPipeline.getRenderPipeline(fillMode, this._currentEffect, this.currentSampleCount, textureState);
        const bindGroups = this._cacheBindGroups.getBindGroups(webgpuPipelineContext, this._currentDrawContext, this._currentMaterialContext);
        if (!this._snapshotRendering.record) {
            this._applyRenderPassChanges(renderPass, !this.compatibilityMode ? bundleList : null);
            if (!this.compatibilityMode) {
                this._counters.numBundleCreationNonCompatMode++;
                renderPass2 = this._device.createRenderBundleEncoder({
                    colorFormats: this._cacheRenderPipeline.colorFormats,
                    depthStencilFormat: this._depthTextureFormat,
                    sampleCount: this.currentSampleCount,
                });
            }
        }
        renderPass2.setPipeline(pipeline);
        if (this._currentIndexBuffer) {
            renderPass2.setIndexBuffer(this._currentIndexBuffer.underlyingResource, this._currentIndexBuffer.is32Bits ? IndexFormat.Uint32 : IndexFormat.Uint16, 0);
        }
        const vertexBuffers = this._cacheRenderPipeline.vertexBuffers;
        for (var index = 0; index < vertexBuffers.length; index++) {
            let vertexBuffer = vertexBuffers[index];
            const buffer = vertexBuffer.getBuffer();
            if (buffer) {
                renderPass2.setVertexBuffer(index, buffer.underlyingResource, vertexBuffer._validOffsetRange ? 0 : vertexBuffer.byteOffset);
            }
        }
        for (let i = 0; i < bindGroups.length; i++) {
            renderPass2.setBindGroup(i, bindGroups[i]);
        }
        const nonCompatMode = !this.compatibilityMode && !this._snapshotRendering.record;
        if (nonCompatMode && this._currentDrawContext.indirectDrawBuffer) {
            this._currentDrawContext.setIndirectData(count, instancesCount || 1, start);
            if (drawType === 0) {
                renderPass2.drawIndexedIndirect(this._currentDrawContext.indirectDrawBuffer, 0);
            }
            else {
                renderPass2.drawIndirect(this._currentDrawContext.indirectDrawBuffer, 0);
            }
        }
        else if (drawType === 0) {
            renderPass2.drawIndexed(count, instancesCount || 1, start, 0, 0);
        }
        else {
            renderPass2.draw(count, instancesCount || 1, start, 0);
        }
        if (nonCompatMode) {
            this._currentDrawContext.fastBundle = renderPass2.finish();
            bundleList.addBundle(this._currentDrawContext.fastBundle);
        }
        this._reportDrawCall();
    }
    drawElementsType(fillMode, indexStart, indexCount, instancesCount = 1) {
        this._draw(0, fillMode, indexStart, indexCount, instancesCount);
    }
    drawArraysType(fillMode, verticesStart, verticesCount, instancesCount = 1) {
        this._currentIndexBuffer = null;
        this._draw(1, fillMode, verticesStart, verticesCount, instancesCount);
    }
    dispose() {
        var _a, _b, _c;
        (_a = this._mainTexture) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this._mainTextureLastCopy) === null || _b === void 0 ? void 0 : _b.destroy();
        (_c = this._depthTexture) === null || _c === void 0 ? void 0 : _c.destroy();
        super.dispose();
    }
    getRenderWidth(useScreen = false) {
        if (!useScreen && this._currentRenderTarget) {
            return this._currentRenderTarget.width;
        }
        return this._canvas.width;
    }
    getRenderHeight(useScreen = false) {
        if (!useScreen && this._currentRenderTarget) {
            return this._currentRenderTarget.height;
        }
        return this._canvas.height;
    }
    getRenderingCanvas() {
        return this._canvas;
    }
    getError() {
        return 0;
    }
    bindSamplers(effect) { }
    _bindTextureDirectly(target, texture, forTextureDataUpdate = false, force = false) {
        return false;
    }
    areAllEffectsReady() {
        return true;
    }
    _executeWhenRenderingStateIsCompiled(pipelineContext, action) {
        action();
    }
    _isRenderingStateCompiled(pipelineContext) {
        return true;
    }
    _getUnpackAlignement() {
        return 1;
    }
    _unpackFlipY(value) { }
    _bindUnboundFramebuffer(framebuffer) {
        throw "_bindUnboundFramebuffer is not implementedin WebGPU! You probably want to use restoreDefaultFramebuffer or unBindFramebuffer instead";
    }
    _getSamplingParameters(samplingMode, generateMipMaps) {
        throw "_getSamplingParameters is not available in WebGPU";
    }
    getUniforms(pipelineContext, uniformsNames) {
        return [];
    }
    setIntArray(uniform, array) {
        return false;
    }
    setIntArray2(uniform, array) {
        return false;
    }
    setIntArray3(uniform, array) {
        return false;
    }
    setIntArray4(uniform, array) {
        return false;
    }
    setArray(uniform, array) {
        return false;
    }
    setArray2(uniform, array) {
        return false;
    }
    setArray3(uniform, array) {
        return false;
    }
    setArray4(uniform, array) {
        return false;
    }
    setMatrices(uniform, matrices) {
        return false;
    }
    setMatrix3x3(uniform, matrix) {
        return false;
    }
    setMatrix2x2(uniform, matrix) {
        return false;
    }
    setFloat(uniform, value) {
        return false;
    }
    setFloat2(uniform, x, y) {
        return false;
    }
    setFloat3(uniform, x, y, z) {
        return false;
    }
    setFloat4(uniform, x, y, z, w) {
        return false;
    }
}
WebGPUEngine._glslangDefaultOptions = {
    jsPath: "https://preview.babylonjs.com/glslang/glslang.js",
    wasmPath: "https://preview.babylonjs.com/glslang/glslang.wasm"
};
WebGPUEngine.UseTWGSL = true;
export { AddressMode, AlphaState, BlendFactor, BlendOperation, Buffer, BufferBindingType, BufferUsage, CanvasCompositingAlphaMode, Color3, Color4, ColorWrite, CompareFunction, CompilationMessageType, ComputePassTimestampLocation, Constants, CullMode, DataBuffer, DecodeBase64ToBinary, DecodeBase64ToString, DecodeBase64UrlToBinary, DecodeBase64UrlToString, DeepCopier, DepthCullingState, DeviceLostReason, DomManagement, DrawWrapper, Effect, EncodeArrayBufferToBase64, EndsWith, Engine, EngineStore, ErrorFilter, EventState, ExternalTexture, FeatureName, FileTools, FileToolsOptions, FilesInputStore, FilterMode, FromHalfFloat, FrontFace, GetClass, GetDOMTextContent, IndexFormat, InputStepMode, InternalTexture, InternalTextureSource, IsBase64DataUrl, IsDocumentAvailable, IsFileURL, IsNavigatorAvailable, IsWindowObjectExist, LoadFile, LoadFileError, LoadImage, LoadOp, Logger, MapMode, Observable, Observer, PerfCounter, PerformanceConfigurator, PerformanceMonitor, PowerPreference, PrecisionDate, PrimitiveTopology, PromisePolyfill, QueryType, ReadFile, ReadFileError, RegisterClass, RenderPassTimestampLocation, RequestFile, RequestFileError, RetryStrategy, RollingAverage, SamplerBindingType, Scalar, SetCorsBehavior, ShaderCodeInliner, ShaderLanguage, ShaderStage, ShaderStore, StartsWith, StencilOperation, StencilState, StencilStateComposer, StorageTextureAccess, StoreOp, TextureAspect, TextureDimension, TextureFormat, TextureSampleType, TextureSampler, TextureUsage, TextureViewDimension, ThinEngine, ToGammaSpace, ToLinearSpace, Tools, UniformBuffer, VertexBuffer, VertexFormat, WebGL2ShaderProcessor, WebGLDataBuffer, WebGLHardwareTexture, WebGLPipelineContext, WebGPUCacheBindGroups, WebGPUCacheRenderPipeline, WebGPUCacheRenderPipelineTree, WebGPUCacheSampler, WebGPUDataBuffer, WebGPUDrawContext, WebGPUEngine, WebGPUTintWASM, WebRequest };
