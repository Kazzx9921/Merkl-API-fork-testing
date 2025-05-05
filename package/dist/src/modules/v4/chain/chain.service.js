import { CacheService } from "@/modules/v4/cache/cache.service";
import { DistributorService } from "@sdk";
import { TTLPresets } from "../cache/cache.model";
import { ChainRepository } from "./chain.repository";
export class ChainService {
    static async get(chainId) {
        return ChainRepository.read(chainId);
    }
    static async findMany(query) {
        // Bypass cache in test mode
        if (query.test)
            return ChainRepository.findMany(query);
        return await CacheService.wrap(TTLPresets.MIN_10, ChainRepository.findMany, query);
    }
    static async findUniqueOrThrow(id) {
        return await ChainRepository.findUniqueOrThrow(id);
    }
    static async countMany(query) {
        return await ChainRepository.countMany(query);
    }
    /** List all chainIds available in the databse
     * @warning some chains may not be fully integrated yet
     * @returns an array of chainId
     */
    static async getIds() {
        const ids = await ChainRepository.readIds();
        return ids.map(({ id }) => id);
    }
    /** List all chainIds which have a distribituor (i.e. which is fully integrated)
     * @returns an array of chainId
     */
    static async getSupportedIds() {
        const ids = await ChainService.getIds();
        const supportedIds = [];
        for (const chainId of ids) {
            try {
                DistributorService(chainId);
                supportedIds.push(chainId);
            }
            catch { }
        }
        return supportedIds;
    }
    static async create(chain) {
        return await ChainRepository.create(chain);
    }
    static async update(id, data) {
        return await ChainRepository.update(id, data);
    }
    static async updateDailyRewards(id, dailyRewards) {
        return await ChainRepository.update(id, { dailyRewards });
    }
}
