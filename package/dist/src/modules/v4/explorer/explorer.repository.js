import { apiDbClient } from "@db";
import { ExplorerService } from "./explorer.service";
export class ExplorerRepository {
    static async getByChainId(chainId) {
        return await apiDbClient.explorer.findFirstOrThrow({ where: { chainId } });
    }
    /**
     * Creates an explorer
     * @param chainId to attach explorer to
     * @param type that defines the subsequents links for transactions, addresses...
     * @param url base url without / suffix
     */
    static async create(chainId, type, url) {
        return apiDbClient.explorer.create({
            data: {
                chainId,
                type,
                url,
                id: ExplorerService.hashId(type, chainId),
            },
        });
    }
}
