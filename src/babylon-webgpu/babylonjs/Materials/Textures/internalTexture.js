import { Observable } from '../../Misc/observable.js';
import { TextureSampler } from './textureSampler.js';

/**
 * Defines the source of the internal texture
 */
var InternalTextureSource;
(function (InternalTextureSource) {
    /**
     * The source of the texture data is unknown
     */
    InternalTextureSource[InternalTextureSource["Unknown"] = 0] = "Unknown";
    /**
    * Texture data comes from an URL
    */
    InternalTextureSource[InternalTextureSource["Url"] = 1] = "Url";
    /**
     * Texture data is only used for temporary storage
     */
    InternalTextureSource[InternalTextureSource["Temp"] = 2] = "Temp";
    /**
     * Texture data comes from raw data (ArrayBuffer)
     */
    InternalTextureSource[InternalTextureSource["Raw"] = 3] = "Raw";
    /**
     * Texture content is dynamic (video or dynamic texture)
     */
    InternalTextureSource[InternalTextureSource["Dynamic"] = 4] = "Dynamic";
    /**
     * Texture content is generated by rendering to it
     */
    InternalTextureSource[InternalTextureSource["RenderTarget"] = 5] = "RenderTarget";
    /**
     * Texture content is part of a multi render target process
     */
    InternalTextureSource[InternalTextureSource["MultiRenderTarget"] = 6] = "MultiRenderTarget";
    /**
     * Texture data comes from a cube data file
     */
    InternalTextureSource[InternalTextureSource["Cube"] = 7] = "Cube";
    /**
     * Texture data comes from a raw cube data
     */
    InternalTextureSource[InternalTextureSource["CubeRaw"] = 8] = "CubeRaw";
    /**
     * Texture data come from a prefiltered cube data file
     */
    InternalTextureSource[InternalTextureSource["CubePrefiltered"] = 9] = "CubePrefiltered";
    /**
     * Texture content is raw 3D data
     */
    InternalTextureSource[InternalTextureSource["Raw3D"] = 10] = "Raw3D";
    /**
     * Texture content is raw 2D array data
     */
    InternalTextureSource[InternalTextureSource["Raw2DArray"] = 11] = "Raw2DArray";
    /**
     * Texture content is a depth/stencil texture
     */
    InternalTextureSource[InternalTextureSource["DepthStencil"] = 12] = "DepthStencil";
    /**
     * Texture data comes from a raw cube data encoded with RGBD
     */
    InternalTextureSource[InternalTextureSource["CubeRawRGBD"] = 13] = "CubeRawRGBD";
    /**
     * Texture content is a depth texture
     */
    InternalTextureSource[InternalTextureSource["Depth"] = 14] = "Depth";
})(InternalTextureSource || (InternalTextureSource = {}));
/**
 * Class used to store data associated with WebGL texture data for the engine
 * This class should not be used directly
 */
class InternalTexture extends TextureSampler {
    /**
     * Creates a new InternalTexture
     * @param engine defines the engine to use
     * @param source defines the type of data that will be used
     * @param delayAllocation if the texture allocation should be delayed (default: false)
     */
    constructor(engine, source, delayAllocation = false) {
        super();
        /**
         * Defines if the texture is ready
         */
        this.isReady = false;
        /**
         * Defines if the texture is a cube texture
         */
        this.isCube = false;
        /**
         * Defines if the texture contains 3D data
         */
        this.is3D = false;
        /**
         * Defines if the texture contains 2D array data
         */
        this.is2DArray = false;
        /**
         * Defines if the texture contains multiview data
         */
        this.isMultiview = false;
        /**
         * Gets the URL used to load this texture
         */
        this.url = "";
        /**
         * Gets a boolean indicating if the texture needs mipmaps generation
         */
        this.generateMipMaps = false;
        /**
         * Gets the number of samples used by the texture (WebGL2+ only)
         */
        this.samples = 0;
        /**
         * Gets the type of the texture (int, float...)
         */
        this.type = -1;
        /**
         * Gets the format of the texture (RGB, RGBA...)
         */
        this.format = -1;
        /**
         * Observable called when the texture is loaded
         */
        this.onLoadedObservable = new Observable();
        /**
         * Observable called when the texture load is raising an error
         */
        this.onErrorObservable = new Observable();
        /**
         * If this callback is defined it will be called instead of the default _rebuild function
         */
        this.onRebuildCallback = null;
        /**
         * Gets the width of the texture
         */
        this.width = 0;
        /**
         * Gets the height of the texture
         */
        this.height = 0;
        /**
         * Gets the depth of the texture
         */
        this.depth = 0;
        /**
         * Gets the initial width of the texture (It could be rescaled if the current system does not support non power of two textures)
         */
        this.baseWidth = 0;
        /**
         * Gets the initial height of the texture (It could be rescaled if the current system does not support non power of two textures)
         */
        this.baseHeight = 0;
        /**
         * Gets the initial depth of the texture (It could be rescaled if the current system does not support non power of two textures)
         */
        this.baseDepth = 0;
        /**
         * Gets a boolean indicating if the texture is inverted on Y axis
         */
        this.invertY = false;
        // Private
        /** @hidden */
        this._invertVScale = false;
        /** @hidden */
        this._associatedChannel = -1;
        /** @hidden */
        this._source = InternalTextureSource.Unknown;
        /** @hidden */
        this._buffer = null;
        /** @hidden */
        this._bufferView = null;
        /** @hidden */
        this._bufferViewArray = null;
        /** @hidden */
        this._bufferViewArrayArray = null;
        /** @hidden */
        this._size = 0;
        /** @hidden */
        this._extension = "";
        /** @hidden */
        this._files = null;
        /** @hidden */
        this._workingCanvas = null;
        /** @hidden */
        this._workingContext = null;
        /** @hidden */
        this._cachedCoordinatesMode = null;
        /** @hidden */
        this._isDisabled = false;
        /** @hidden */
        this._compression = null;
        /** @hidden */
        this._sphericalPolynomial = null;
        /** @hidden */
        this._sphericalPolynomialPromise = null;
        /** @hidden */
        this._sphericalPolynomialComputed = false;
        /** @hidden */
        this._lodGenerationScale = 0;
        /** @hidden */
        this._lodGenerationOffset = 0;
        /** @hidden */
        this._useSRGBBuffer = false;
        // The following three fields helps sharing generated fixed LODs for texture filtering
        // In environment not supporting the textureLOD extension like EDGE. They are for internal use only.
        // They are at the level of the gl texture to benefit from the cache.
        /** @hidden */
        this._lodTextureHigh = null;
        /** @hidden */
        this._lodTextureMid = null;
        /** @hidden */
        this._lodTextureLow = null;
        /** @hidden */
        this._isRGBD = false;
        /** @hidden */
        this._linearSpecularLOD = false;
        /** @hidden */
        this._irradianceTexture = null;
        /** @hidden */
        this._hardwareTexture = null;
        /** @hidden */
        this._references = 1;
        /** @hidden */
        this._gammaSpace = null;
        this._engine = engine;
        this._source = source;
        this._uniqueId = InternalTexture._Counter++;
        if (!delayAllocation) {
            this._hardwareTexture = engine._createHardwareTexture();
        }
    }
    /**
     * Gets a boolean indicating if the texture uses mipmaps
     * TODO implements useMipMaps as a separate setting from generateMipMaps
     */
    get useMipMaps() {
        return this.generateMipMaps;
    }
    set useMipMaps(value) {
        this.generateMipMaps = value;
    }
    /** Gets the unique id of the internal texture */
    get uniqueId() {
        return this._uniqueId;
    }
    /**
     * Gets the Engine the texture belongs to.
     * @returns The babylon engine
     */
    getEngine() {
        return this._engine;
    }
    /**
     * Gets the data source type of the texture
     */
    get source() {
        return this._source;
    }
    /**
     * Increments the number of references (ie. the number of Texture that point to it)
     */
    incrementReferences() {
        this._references++;
    }
    /**
     * Change the size of the texture (not the size of the content)
     * @param width defines the new width
     * @param height defines the new height
     * @param depth defines the new depth (1 by default)
     */
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
    /** @hidden */
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
                // The engine will make sure to update content so no need to flag it as isReady = true
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
                // This case is being handeled by the environment texture tools and is not a part of the rebuild process.
                // To use CubeRawRGBD use updateRGBDAsync on the cube texture.
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
    /** @hidden */
    _swapAndDie(target, swapAll = true) {
        // TODO what about refcount on target?
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
    /**
     * Dispose the current allocated resources
     */
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
/** @hidden */
InternalTexture._Counter = 0;

export { InternalTexture, InternalTextureSource };