import { NotFoundError } from "@/errors";
import { InvalidParameter } from "@/errors/InvalidParameter.error";
import { BackOfficeGuard } from "@/guards/BackOffice.guard";
import { AuthorizationHeadersDto } from "@/guards/Engine.guard";
import { DynamicDataSourceIdentifier } from "@/modules/v4/dynamicData/dynamicData.model";
import { DynamicDataService } from "@/modules/v4/dynamicData/dynamicData.service";
import { OpportunityConvertorService } from "@/modules/v4/opportunity/opportunity.converter";
import { throwOnUnsupportedChainId } from "@/utils/throw";
import { Campaign as CampaignType } from "@sdk";
import Elysia, { t } from "elysia";
import { CampaignConfigMinimal, CampaignsDto } from "./campaign.model";
import { CampaignService } from "./campaign.service";
// ─── Routes for dev and test only ──────────────────────────────────────────────
export const CampaignTestController = new Elysia({
    prefix: "/campaigns",
    detail: { tags: ["Campaigns"], hide: true },
}).group("/dry-run", app => app
    .guard({
    headers: AuthorizationHeadersDto,
    beforeHandle: BackOfficeGuard,
})
    // ─── Test TVL computation given a campaignId ───────────────────────
    .get("/tvl/:campaignId", async ({ params }) => {
    const id = (await CampaignService.findMany({ campaignId: params.campaignId, test: true }))?.[0]?.id;
    if (!id)
        throw new NotFoundError();
    const campaign = await CampaignService.findUniqueOrThrow(id, true);
    const campaignV3 = OpportunityConvertorService.convertV4CampaignToV3(CampaignType[campaign.type], CampaignService.format(campaign), campaign.Opportunity.identifier);
    return await DynamicDataService.update(campaignV3.computeChainId, campaignV3.campaignType, [campaignV3], true);
})
    // ─── Test TVL computation given a campaignId ───────────────────────
    .get("/tvls/:opportunityId", async ({ params }) => {
    const campaigns = (await CampaignService.findMany({
        opportunityId: params.opportunityId,
        test: true,
        withOpportunity: true,
        items: 10_000,
    })).map(campaign => OpportunityConvertorService.convertV4CampaignToV3(CampaignType[campaign.type], campaign, campaign.Opportunity.identifier));
    if (!campaigns.length)
        throw new NotFoundError("Opportunity not found");
    return await DynamicDataService.update(campaigns[0]?.computeChainId, campaigns[0].campaignType, campaigns, true);
}, {
    beforeHandle: BackOfficeGuard,
    headers: AuthorizationHeadersDto,
    detail: { hide: true },
})
    // ─── Test TVL computation with a list of campaignId ───────────────────────
    .post("/tvls/list", async ({ body }) => {
    const listCampaigns = [];
    const type = undefined;
    for (const campaignId of body) {
        const id = (await CampaignService.findMany({ campaignId: campaignId, test: true }))?.[0]?.id;
        if (!id)
            throw new NotFoundError();
        const campaign = await CampaignService.findUniqueOrThrow(id, true);
        const campaignV3 = OpportunityConvertorService.convertV4CampaignToV3(CampaignType[campaign.type], CampaignService.format(campaign), campaign.Opportunity.identifier);
        listCampaigns.push(campaignV3);
    }
    if (!type)
        throw new InvalidParameter("No campaign type found");
    return await DynamicDataService.update(listCampaigns[0].computeChainId, listCampaigns[0].campaignType, listCampaigns, true);
}, { body: CampaignsDto })
    // ─── Test TVL computation with campaign config ───────────────────────
    .post("/tvl", async ({ body }) => {
    const campaign = CampaignService.createFakeCampaign(body);
    return await DynamicDataService.update(campaign.computeChainId, campaign.campaignType, [campaign], true);
}, {
    body: CampaignConfigMinimal,
})
    // ─── Test TVL computation with campaign config ───────────────────────
    .get("/tvl", async ({ query }) => await DynamicDataService.queryERC20DynamicData(query.chainId, query.tokenAddress, query.rewardTokenAddress, query.symbolRewardToken, query.decimals), {
    query: DynamicDataSourceIdentifier,
    headers: AuthorizationHeadersDto,
    beforeHandle: async ({ query, headers }) => {
        await BackOfficeGuard({ headers });
        throwOnUnsupportedChainId(query.chainId);
    },
})
    // ─── Test Opportunity creation through a campaign config ───────────────────────
    // @dev Starts from the engine db to debug opportunity creation failing and preventing the api db to be filled
    .post("/metadata", async ({ body }) => {
    const engineCampaign = CampaignService.createFakeCampaignEngine(body);
    return await CampaignService.create(engineCampaign, true);
}, {
    body: CampaignConfigMinimal,
})
    // ─── Test Opportunity creation through a campaign Id and a chain ───────────────────────
    // @dev Starts from the engine db to debug opportunity creation failing and preventing the api db to be filled
    .get("/metadata", async ({ query }) => {
    if (!query.distributionChain) {
        try {
            query.distributionChain = (await CampaignService.findMany({ campaignId: query.campaignId, test: true }))?.[0]?.distributionChainId;
        }
        catch {
            throw new NotFoundError("Campaign not found");
        }
    }
    const engineCampaigns = await CampaignService.findEngineCampaigns([
        {
            distributionChain: query.distributionChain,
            campaignId: query.campaignId,
        },
    ]);
    if (!engineCampaigns.length)
        throw new NotFoundError("Campaign not found in engine db");
    return await CampaignService.create(engineCampaigns[0], true);
}, {
    query: t.Object({
        distributionChain: t.Optional(t.Numeric()),
        campaignId: t.String(),
    }),
}));
