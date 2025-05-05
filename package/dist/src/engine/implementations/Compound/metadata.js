import { camelToKebabCase } from "@/utils/caseChanges";
import { OpportunityAction } from "@db/api";
import { CompFork, CompoundSubCampaignType } from "@sdk";
export class CompoundMetadata {
    async build(campaign) {
        const { params, computeChainId, subType } = campaign;
        return {
            action: subType === CompoundSubCampaignType.supply ? OpportunityAction.LEND : OpportunityAction.BORROW,
            name: [
                subType === CompoundSubCampaignType.supply
                    ? `Supply ${params.symbolUnderlyingToken} on`
                    : `Borrow ${params.symbolUnderlyingToken} on`,
                CompFork[params.compFork],
            ].join(" "),
            tokens: [
                { chainId: computeChainId, address: params.underlyingToken },
                { chainId: computeChainId, address: params.targetToken },
            ],
            mainProtocol: camelToKebabCase(CompFork[params.compFork].replace(/\/?(V(\d+_)?\d+)/g, "")),
            depositUrl: undefined, // TODO, shall depend on compFork
        };
    }
}
