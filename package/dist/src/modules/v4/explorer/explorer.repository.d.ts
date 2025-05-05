import type { ExplorerType } from "@db/api";
export declare abstract class ExplorerRepository {
    static getByChainId(chainId: number): Promise<{
        url: string;
        type: import("@db/api").$Enums.ExplorerType;
        id: string;
        chainId: number;
    }>;
    /**
     * Creates an explorer
     * @param chainId to attach explorer to
     * @param type that defines the subsequents links for transactions, addresses...
     * @param url base url without / suffix
     */
    static create(chainId: number, type: ExplorerType, url: string): Promise<{
        url: string;
        type: import("@db/api").$Enums.ExplorerType;
        id: string;
        chainId: number;
    }>;
}
