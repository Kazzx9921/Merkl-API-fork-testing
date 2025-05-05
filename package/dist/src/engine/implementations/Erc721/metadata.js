import { OpportunityAction } from "@db/api";
export class Erc721Metadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        return {
            action: OpportunityAction.HOLD,
            name: `Hold ${params.symbolTargetToken}`,
            tokens: [{ chainId: computeChainId, address: params.targetToken }],
            mainProtocol: undefined,
            depositUrl: undefined,
        };
    }
}
