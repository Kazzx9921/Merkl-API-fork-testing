import { NotFoundError } from "@/errors";
import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { BN2Number, Campaign as CampaignType } from "@sdk";
import { t } from "elysia";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
export const query = t.Object({
    chainId: t.Numeric(),
    mainParameter: t.String(),
});
export default (app) => app.use(checkQueryChainIdValidity()).get("/campaignsForMainParameter", async ({ query }) => {
    const chainId = query.chainId;
    const opportunityId = (await OpportunityService.findMany({
        chainId: chainId.toString(),
        identifier: query.mainParameter,
    }))?.[0]?.id;
    if (!opportunityId) {
        throw new NotFoundError(`Opportunity not found for identifier: ${query.mainParameter} and chainId: ${chainId}`);
    }
    return (await OpportunityService.getUniqueWithCampaignsOrThrow(opportunityId))?.campaigns
        ?.map(c => ({
        campaignId: c.campaignId,
        campaignType: CampaignType[c.type],
        rewardToken: c.rewardToken.address,
        rewardTokenSymbol: c.rewardToken.symbol,
        amountDecimal: BN2Number(c.amount, c.rewardToken.decimals),
        startTimestamp: Number(c.startTimestamp),
        endTimestamp: Number(c.endTimestamp),
    }))
        .sort((a, b) => b.endTimestamp - a.endTimestamp);
}, {
    query,
    tags: ["Campaigns"],
});
