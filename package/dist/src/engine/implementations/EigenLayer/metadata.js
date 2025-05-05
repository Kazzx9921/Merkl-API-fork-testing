import { OpportunityAction } from "@db/api";
export class EigenLayerMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        return {
            action: OpportunityAction.LEND,
            name: ["EigenLayer", "strategy for", params.symbolUnderlyingToken].join(" "),
            tokens: [{ chainId: computeChainId, address: params.underlyingToken }],
            mainProtocol: "eigenlayer",
        };
    }
}
