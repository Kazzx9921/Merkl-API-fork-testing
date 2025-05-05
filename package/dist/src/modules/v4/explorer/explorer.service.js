import { ExplorerRepository } from "./explorer.repository";
export class ExplorerService {
    static hashId(type, chainId) {
        return Bun.hash(`${type}${chainId}`).toString();
    }
    static async getByChainId(chainId) {
        return await ExplorerRepository.getByChainId(chainId);
    }
    static format(explorer) {
        const { id, ...rest } = explorer;
        return {
            ...rest,
        };
    }
    /**
     * Creates an explorer
     * @param chainId to attach explorer to
     * @param type that defines the subsequents links for transactions, addresses...
     * @param url base url without / suffix
     */
    static async create(data) {
        return ExplorerRepository.create(data.chainId, data.type, data.url);
    }
}
