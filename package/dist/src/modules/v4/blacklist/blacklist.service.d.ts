import type { ChainId } from "@sdk";
import type { AddBlacklistModel } from "./blacklist.model";
export declare class BlacklistService {
    static hashId(chainId: ChainId, userAddress: string, poolAddress: string): string;
    static findMany(): Promise<{
        id: string;
        chainId: number;
        poolAddress: string;
        userAddress: string;
        arrestTimestamp: bigint;
        arrestDetails: import("database/api/.generated/runtime/library").JsonValue;
    }[]>;
    static findMapping(): Promise<unknown>;
    static isBlacklisted(address: string): Promise<boolean>;
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
