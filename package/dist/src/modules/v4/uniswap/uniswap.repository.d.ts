import type { LoggedCreateBody, UniV4ChainId } from "./uniswap.model";
export declare abstract class UniswapRepository {
    static getStoredUniswapV4Pools(chainId?: UniV4ChainId): Promise<{
        type: import("@db/api").$Enums.LoggedEntityType;
        id: string;
        address: string | null;
        chainId: number;
        fetchAtBlock: number;
        caughtFromAddress: string;
        entityData: import("database/api/.generated/runtime/library").JsonValue;
    }[]>;
    static createMany(data: LoggedCreateBody): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
}
