import { Redis } from "@/cache";
import { engineDbClient } from "@db";
async function staticCampaigns(chainId) {
    return await engineDbClient.campaigns.findMany({
        where: {
            chainId: chainId,
        },
    });
}
/**
 * @deprecated - to remove once:
 *  - old update page is deprecated
 *  - v3 campaigns route is removed
 */
export const staticCampaignWithCache = async (chainId) => await Redis.getOrSet(`StaticCampaigns_${chainId}`, staticCampaigns, chainId);
