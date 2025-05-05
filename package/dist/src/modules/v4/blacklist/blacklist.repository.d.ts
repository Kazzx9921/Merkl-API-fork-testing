import type { AddBlacklistModel } from "./blacklist.model";
export declare class BlacklistRepository {
    static findMany(): Promise<{
        id: string;
        chainId: number;
        poolAddress: string;
        userAddress: string;
        arrestTimestamp: bigint;
        arrestDetails: import("database/api/.generated/runtime/library").JsonValue;
    }[]>;
    static check(address: string): Promise<boolean>;
    static remove(address: string): Promise<boolean>;
    static add(x: AddBlacklistModel): Promise<{
        id: string;
        chainId: number;
        poolAddress: string;
        userAddress: string;
        arrestTimestamp: bigint;
        arrestDetails: import("database/api/.generated/runtime/library").JsonValue;
    }>;
}
