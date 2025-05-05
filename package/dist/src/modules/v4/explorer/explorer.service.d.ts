import type { ExplorerType } from "@db/api";
import type { CreateExplorerDto, Explorer } from "./explorer.model";
export declare abstract class ExplorerService {
    static hashId(type: ExplorerType, chainId: number): string;
    static getByChainId(chainId: number): Promise<{
        url: string;
        type: import("@db/api").$Enums.ExplorerType;
        id: string;
        chainId: number;
    }>;
    static format(explorer: Explorer["raw"]): {
        url: string;
        type: import("@db/api").$Enums.ExplorerType;
        chainId: number;
    };
    /**
     * Creates an explorer
     * @param chainId to attach explorer to
     * @param type that defines the subsequents links for transactions, addresses...
     * @param url base url without / suffix
     */
    static create(data: CreateExplorerDto): Promise<{
        url: string;
        type: import("@db/api").$Enums.ExplorerType;
        id: string;
        chainId: number;
    }>;
}
