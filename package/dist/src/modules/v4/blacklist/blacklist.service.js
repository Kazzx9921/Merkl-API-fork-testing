import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { utils } from "ethers";
import { BlacklistRepository } from "./blacklist.repository";
export class BlacklistService {
    static hashId(chainId, userAddress, poolAddress) {
        return Bun.hash(`${chainId}${userAddress}${poolAddress}`).toString();
    }
    static async findMany() {
        return await CacheService.wrap(TTLPresets.MIN_5, BlacklistRepository.findMany);
    }
    static async findMapping() {
        return await CacheService.wrap(TTLPresets.MIN_5, () => BlacklistRepository.findMany().then(r => {
            return r.reduce((prev, { userAddress, arrestTimestamp }) => {
                if (!!arrestTimestamp) {
                    prev[utils.getAddress(userAddress)] = true;
                }
                return prev;
            }, {});
        }));
    }
    static async isBlacklisted(address) {
        return BlacklistRepository.check(utils.getAddress(address));
    }
    static async remove(address) {
        return await BlacklistRepository.remove(address);
    }
    static async add(x) {
        return await BlacklistRepository.add(x);
    }
}
