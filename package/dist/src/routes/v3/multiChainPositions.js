// @ts-nocheck
import { Redis } from "@/cache";
import { throwOnUnsupportedChainId } from "@/utils/throw";
import { ChainId, isSupportedChain } from "@sdk";
import { t } from "elysia";
import checkQueryAddressValidity from "../../hooks/checkQueryAddressValidity";
import { getUserPositionsV2 } from "../../libs/positions";
import { prepareFetch } from "../../libs/positions/prepareFetch";
export const query = t.Object({
    chainIds: t.Optional(t.Union([t.String(), t.Array(t.String())])),
    user: t.String(),
    creatorTag: t.Optional(t.String()),
});
export default (app) => app.use(checkQueryAddressValidity()).get("/multiChainPositions", async ({ query, set }) => {
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
    for (const chainId of chainIds)
        throwOnUnsupportedChainId(chainId);
    const user = query.user;
    for (const chainId of chainIds)
        throwOnUnsupportedChainId(chainId);
    const cacheKeys = chainIds.map(chainId => `LiveCampaigns_${chainId}`);
    const cacheData = await Redis.findMany(cacheKeys);
    const promises = [];
    let i = 0;
    for (const chainId of chainIds) {
        if (!cacheData[i]) {
            promises.push(getUserPositionsV2({}, chainId, user));
            i++;
            continue;
        }
        const allOpportunities = cacheData[i];
        const positionsToCheck = {};
        for (const campaigns of Object.values(allOpportunities)) {
            for (const campaign of Object.values(campaigns)) {
                if (campaign?.tags?.includes(query.creatorTag)) {
                    const type = campaign.campaignType;
                    positionsToCheck[type] = prepareFetch(type, positionsToCheck[type] ? positionsToCheck[type] : {}, campaign);
                }
            }
        }
        promises.push(getUserPositionsV2(positionsToCheck, chainId, user));
        i++;
    }
    const result = await Promise.all(promises);
    i = 0;
    const finalResult = {};
    for (const chainId of chainIds) {
        finalResult[chainId] = result[i];
        i++;
    }
    return finalResult;
}, {
    query,
    tags: ["Protocols"],
});
