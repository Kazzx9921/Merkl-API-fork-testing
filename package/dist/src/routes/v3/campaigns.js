import { Redis } from "@/cache";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { OpportunityConvertorService } from "@/modules/v4/opportunity/opportunity.converter";
import { UnsupportedNetwork } from "@/utils/error";
import { ANGLE_NETWORKS, Campaign as CampaignType, ChainId, isSupportedChain, registry, } from "@sdk";
import { t } from "elysia";
export const query = t.Object({
    chainIds: t.Optional(t.Union([t.String(), t.Array(t.String())])),
    types: t.Optional(t.Union([t.Numeric(), t.Array(t.Numeric()), t.String(), t.Array(t.String())])),
    live: t.Optional(t.BooleanString()),
    creatorTag: t.Optional(t.String()),
    hideTestTokens: t.Optional(t.String()),
});
export const response = t.Record(t.Union(ANGLE_NETWORKS.merkl.map(chain => t.Literal(`${chain}`))), t.Optional(t.Record(t.String({ title: "id" }), t.Record(t.String({ title: "CampaignId" }), t.Object({
    chainId: t.Numeric(),
    campaignId: t.String(),
    tags: t.Optional(t.Array(t.String())),
    creator: t.String(),
    rewardToken: t.String(),
    mainParameter: t.String(),
    campaignParameters: t.Object({}),
    campaignType: t.String(),
})))));
/**
 * @deprecated - conversion to v4 done
 *
 * @dev there was a significant loss of information with the v4 conversion
 * So some issues are expected
 *
 * v3 was returning a whole bunch of dynamic data when the v4 only has tvl and apr
 */
export default (app) => app.get("/campaigns", async ({ query }) => {
    let hideTestTokens = false;
    if (typeof query.hideTestTokens === "string" && query.hideTestTokens === "true") {
        hideTestTokens = true;
    }
    let rawChainIds = query.chainIds;
    if (typeof rawChainIds === "string" && rawChainIds.includes(",")) {
        rawChainIds = rawChainIds.split(",");
    }
    let chainIds;
    if (!rawChainIds) {
        chainIds = Object.keys(ChainId)
            .map(k => Number.parseInt(k))
            .filter(k => isSupportedChain(k, "merkl"));
    }
    else if (typeof rawChainIds === "string") {
        chainIds = [Number.parseInt(rawChainIds)];
    }
    else {
        chainIds = rawChainIds.map(chainId => Number.parseInt(chainId));
    }
    const rawTypes = query.types;
    let types = [];
    if (!rawTypes) {
    }
    else if (Number.parseInt(rawTypes.toString()).toString() === rawTypes.toString()) {
        types = [Number.parseInt(rawTypes.toString())];
    }
    else {
        types = rawTypes.map(type => Number.parseInt(type.toString()));
    }
    for (const chainId of chainIds) {
        if (!!chainId &&
            (!isSupportedChain(chainId, "merkl") ||
                !registry(chainId)?.Merkl?.DistributionCreator ||
                !registry(chainId)?.Merkl?.Distributor ||
                !registry(chainId)?.Merkl?.CoreMerkl)) {
            throw new UnsupportedNetwork(chainId);
        }
    }
    if (process.env.FF_OPPORTUNITY === "true") {
        const campaigns = await CampaignService.findMany({
            distributionChainIds: chainIds,
            types: !types.length ? undefined : types.map(type => CampaignType[type]),
            status: query.live ? "LIVE" : undefined,
            creatorTag: query.creatorTag,
            test: !hideTestTokens,
            withOpportunity: true,
        });
        const res = {};
        for (const campaign of campaigns) {
            if (!res[campaign.distributionChainId]) {
                res[campaign.distributionChainId] = {};
            }
            const opportunityIdentifier = campaign.Opportunity.identifier;
            const campaignType = CampaignType[campaign.type];
            if (!res[campaign.distributionChainId][`${campaignType}_${opportunityIdentifier}`]) {
                res[campaign.distributionChainId][`${campaignType}_${opportunityIdentifier}`] = {
                    ...OpportunityConvertorService.convertV4CampaignToV3(campaignType, campaign, opportunityIdentifier),
                    apr: campaign.Opportunity.apr,
                    tvl: campaign.Opportunity.tvl,
                };
            }
        }
        return res;
    }
    const campaignCachePrefix = query.live === true ? "LiveCampaigns" : "Campaigns";
    const dynamicData = (await Redis.getManyWithArgs(campaignCachePrefix, chainIds)).reduce((prev, allData, index) => {
        if (!!allData) {
            prev[chainIds[index]] = Object.keys(allData).reduce((acc, curr) => {
                if ((types.length === 0 || types.includes(Number.parseInt(curr.split("_")[0]))) &&
                    (!hideTestTokens ||
                        !["aglamerkl", "test"].includes(allData[curr].campaignParameters.symbolRewardToken?.toLowerCase()))) {
                    acc[curr] = allData[curr];
                }
                return acc;
            }, {});
        }
        return prev;
    }, {});
    // Remove everything that doesn't contain the creator tag
    if (!!query.creatorTag) {
        for (const c of Object.keys(dynamicData)) {
            for (const type_mainParam of Object.keys(dynamicData[c])) {
                for (const campaignId of Object.keys(dynamicData[c][type_mainParam])) {
                    if (!dynamicData[c][type_mainParam][campaignId]?.tags?.includes(query.creatorTag)) {
                        delete dynamicData[c][type_mainParam][campaignId];
                    }
                }
                // Delete the type_mainParam if it's empty
                if (Object.keys(dynamicData[c][type_mainParam]).length === 0) {
                    delete dynamicData[c][type_mainParam];
                }
            }
            // Delete the c if it's empty
            if (Object.keys(dynamicData[c]).length === 0) {
                delete dynamicData[c];
            }
        }
    }
    return dynamicData;
}, {
    query,
    tags: ["Campaigns"],
});
