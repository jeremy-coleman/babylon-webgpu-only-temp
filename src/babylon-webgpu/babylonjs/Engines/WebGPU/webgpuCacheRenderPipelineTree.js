import { WebGPUCacheRenderPipeline } from './webgpuCacheRenderPipeline.js';

/** @hidden */
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
/** @hidden */
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

export { WebGPUCacheRenderPipelineTree };
