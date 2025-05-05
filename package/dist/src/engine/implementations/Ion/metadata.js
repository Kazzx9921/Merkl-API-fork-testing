import { OpportunityAction } from "@db/api";
export class IonMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        // TODO this is not finalized at all
        return {
            action: OpportunityAction.LEND,
            name: ["Ion", "strategy for", params.symbolBorrowToken].join(" "),
            tokens: [
                { chainId: computeChainId, address: params.borrowToken },
                { chainId: computeChainId, address: params.collateralToken },
            ],
            mainProtocol: "ion",
        };
    }
}
