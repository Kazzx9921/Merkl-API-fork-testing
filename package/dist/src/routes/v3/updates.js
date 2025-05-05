import { Redis } from "@/cache";
import { staticCampaignWithCache } from "@/libs/staticCampaigns";
import { ChainId, HOUR, isSupportedChain } from "@sdk";
import { t } from "elysia";
export const query = t.Object({});
export const response = t.Record(t.String({ title: "ChainId" }), t.Record(t.String({ title: "CampaignId" }), t.Number()));
export default (app) => app.get("/updates", computeUpdatesWithCache, {
    query,
    response: {
        400: t.Object({
            error: t.String(),
            message: t.Optional(t.String()),
        }),
    },
    tags: ["Campaigns"],
});
const computeUpdates = async () => {
    const chainIds = Object.keys(ChainId)
        .map(k => Number.parseInt(k))
        .filter(k => isSupportedChain(k, "merkl"));
    const res = {};
    const cacheData = await Redis.getManyWithArgs("MerklChainData", chainIds);
    const lastUpdatesByChain = {};
    chainIds.forEach((chainId, index) => {
        if (!cacheData[index])
            return;
        lastUpdatesByChain[chainId] = cacheData[index].endOfDisputePeriod - 2 * HOUR;
    });
    const now = Math.floor(Date.now() / 1000);
    for (const chainId of chainIds) {
        if (!res[chainId])
            res[chainId] = {};
        const campaigns = await staticCampaignWithCache(chainId);
        for (const campaign of campaigns) {
            const campaignId = campaign.campaignId;
            if (campaign.startTimestamp <= now && now <= campaign.endTimestamp) {
                res[chainId][campaignId] =
                    lastUpdatesByChain?.[campaign?.chainId] ?? lastUpdatesByChain[chainId] ?? campaign.startTimestamp;
            }
            else if (now > campaign.endTimestamp) {
                res[chainId][campaignId] = campaign.endTimestamp;
            }
        }
    }
    return res;
};
const computeUpdatesWithCache = async () => await Redis.getOrSet("Updates", computeUpdates);
