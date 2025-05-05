import { OpportunityAction } from "@db/api";
export class Erc20SnapshotMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        return {
            name: ["Get", params.symbolTargetToken, "airdrop"].join(" "),
            action: OpportunityAction.DROP,
            tokens: [{ chainId: computeChainId, address: params.targetToken }],
        };
    }
}
