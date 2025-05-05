import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { ChainService } from "@/modules/v4/chain/chain.service";
import { MerklRootRepository } from "@/modules/v4/merklRoot/merklRoot.repository";
import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { log } from "@/utils/logger";
import { NETWORK_LABELS } from "@sdk";
const main = async () => {
    try {
        const chainIds = await ChainService.getSupportedIds();
        const promises = [];
        for (const chainId of chainIds)
            promises.push(CacheService.set(TTLPresets.HOUR_12, MerklRootRepository.fetch, chainId));
        const results = await Promise.allSettled(promises);
        for (const [index, result] of results.entries()) {
            if (result.status === "rejected") {
                log.warn(`Failed to fetch Merkl root for ${NETWORK_LABELS[chainIds[index]]}: ${result.reason}`);
            }
        }
        // ─── Refresh Cache For GET /opportunities ────
        await CacheService.set(TTLPresets.MIN_5, OpportunityService.findMany, { items: 25, page: 0 });
        await CacheService.set(TTLPresets.MIN_5, OpportunityService.findMany, { items: 50, page: 0 });
        process.exit(0);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
await main();
