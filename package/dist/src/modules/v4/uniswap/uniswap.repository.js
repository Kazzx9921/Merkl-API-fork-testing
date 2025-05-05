import { apiDbClient } from "@db";
import { LoggedEntityType } from "@db/api";
export class UniswapRepository {
    static async getStoredUniswapV4Pools(chainId) {
        return await apiDbClient.logged.findMany({
            where: { type: LoggedEntityType.UNISWAP_V4, ...(!!chainId && { chainId: chainId }) },
        });
    }
    static async createMany(data) {
        return await apiDbClient.logged.createMany({ data });
    }
}
