import { OpportunityAction } from "@db/api";
import { CompoundV3SubCampaignType } from "@sdk";
export class CompoundV3Metadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        const symbolUnderlyingToken = params.symbolTargetToken.slice(1, -2);
        return {
            action: params.subCampaignType === CompoundV3SubCampaignType.SUPPLY ? OpportunityAction.LEND : OpportunityAction.BORROW,
            name: [
                params.subCampaignType === CompoundV3SubCampaignType.SUPPLY
                    ? `Supply ${symbolUnderlyingToken} on`
                    : `Borrow ${symbolUnderlyingToken} on`,
                "Compound V3",
            ].join(" "),
            tokens: [
                { chainId: computeChainId, address: params.underlyingToken },
                { chainId: computeChainId, address: params.targetToken },
            ],
            mainProtocol: "compound",
            depositUrl: undefined, // TODO, shall depend on compFork
        };
    }
}
