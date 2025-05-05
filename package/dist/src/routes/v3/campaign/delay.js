import { Redis } from "@/cache";
import { staticCampaignWithCache } from "@/libs/staticCampaigns";
import { engineDbClient } from "@db";
import { ChainId, isSupportedChain } from "@sdk";
import { t } from "elysia";
import moment from "moment";
/**
 * @deprecated - to remove in favor of new status page
 */
export const query = t.Object({
    onlyLive: t.Optional(t.Boolean()),
});
export const response = t.Record(t.String({ title: "ChainId" }), t.Record(t.String({ title: "CampaignId" }), t.Number()));
export default (app) => app.get("", async ({ query }) => {
    return await computeDelayWithCache(!!query.onlyLive);
}, {
    transform({ query }) {
        if (!query.onlyLive)
            query.onlyLive = true;
        else
            query.onlyLive = query.onlyLive === "true"; // To Patch uncorrect Elysia types (Elysia provide boolean instead of string from queryParams)!
    },
    query,
    response: {
        400: t.Object({
            error: t.String(),
            message: t.Optional(t.String()),
        }),
    },
    tags: ["Campaigns"],
});
const computeDelay = async (onlyLive) => {
    const chainIds = Object.keys(ChainId)
        .map(k => Number.parseInt(k))
        .filter(k => isSupportedChain(k, "merkl"));
    const res = {};
    const timeNow = moment().unix();
    const cacheData = await Redis.getManyWithArgs("MerklChainData", chainIds);
    const lastUpdateTimestampList = await engineDbClient.leaves.groupBy({
        _max: {
            lastProcessedTimestamp: true,
        },
        where: {
            chainId: {
                in: chainIds,
            },
            root: { in: cacheData.map(data => data?.merkleRoot).filter(r => !!r) },
        },
        by: ["chainId", "campaignId"],
    });
    const lastObjectTimestampObject = lastUpdateTimestampList.reduce((acc, { chainId, campaignId, _max }) => {
        if (_max.lastProcessedTimestamp) {
            acc[chainId] = acc[chainId] || {};
            acc[chainId][campaignId] = _max.lastProcessedTimestamp;
        }
        return acc;
    }, {});
    // Iterate through each chainId and its associated campaigns
    for (const chainId of chainIds) {
        const campaigns = await staticCampaignWithCache(chainId);
        for (const campaign of campaigns) {
            const { campaignId, startTimestamp, endTimestamp, campaignType, mainParameter } = campaign;
            // Skip non-live campaigns if onlyLive is true
            if (onlyLive && (startTimestamp > timeNow || endTimestamp < timeNow))
                continue;
            const lastProcessedTimestamp = lastObjectTimestampObject[chainId]?.[campaignId] || 0;
            res[chainId] = res[chainId] || {};
            const delay = Math.min(endTimestamp, timeNow) - Math.max(lastProcessedTimestamp, startTimestamp);
            res[chainId][campaignId] = {
                lastProcessedTimestamp,
                startTimestamp,
                endTimestamp,
                delay,
                campaignType,
                mainParameter,
            };
        }
    }
    return res;
};
const computeDelayWithCache = async (onlyLive) => await Redis.getOrSet("Delays", computeDelay, onlyLive);
