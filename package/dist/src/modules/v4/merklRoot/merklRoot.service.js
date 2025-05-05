import { CacheService } from "@/modules/v4/cache/cache.service";
import { log } from "@/utils/logger";
import { NETWORK_LABELS } from "@sdk";
import { TTLPresets } from "../cache/cache.model";
import { ChainService } from "../chain/chain.service";
import { MerklRootRepository } from "./merklRoot.repository";
export class MerklRootService {
    static async firstRoot(chainId) {
        return await MerklRootRepository.firstRoot(chainId);
    }
    static async rootForTimestamp(x) {
        return await MerklRootRepository.rootForTimestamp(x);
    }
    static async fetchFromCache(chainId) {
        let data = await CacheService.get(MerklRootRepository.fetch, [chainId]);
        // If the data is null, it means the cache is empty
        if (data === null) {
            log.info(`cache is empty for Merkle Root on ${NETWORK_LABELS[chainId]}, using rpc...`);
            data = await CacheService.wrap(TTLPresets.MIN_1, MerklRootRepository.fetch, chainId);
        }
        if (data.lastTree === undefined)
            throw `fetching Merkle Root on ${NETWORK_LABELS[chainId]} timed out`;
        return data;
    }
    /**
     * Fetch all roots for the provided chains
     * @param chainIds to fetch roots for
     * @returns record of chains to object with live and last tree roots
     */
    static async fetchAll(chainIds) {
        return await CacheService.wrap(TTLPresets.MIN_1, async () => {
            let ids = chainIds ?? (await ChainService.getIds());
            /** Fetch current Merkle Roots */
            const merkleRootsPromises = await Promise.allSettled(ids.map(chainId => MerklRootService.fetchFromCache(chainId)));
            /** Filter out unsuccessful chainIds */
            ids = ids.filter((_, index) => merkleRootsPromises[index].status === "fulfilled");
            return merkleRootsPromises
                .filter(({ status }) => status === "fulfilled")
                .reduce((acc, promise, index) => {
                acc[ids[index]] = promise.value;
                return acc;
            }, {});
        });
    }
    static async create(x) {
        return await MerklRootRepository.create(x);
    }
}
