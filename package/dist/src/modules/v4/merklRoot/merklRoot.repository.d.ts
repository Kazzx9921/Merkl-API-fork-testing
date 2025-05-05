import { type ChainId, DistributorService } from "@sdk";
import type { CreateRootModel, RootByTimestampModel } from "./merklRoot.model";
export declare class MerklRootRepository {
    static firstRoot(chainId: ChainId): Promise<{
        chainId: number;
        timestamp: bigint;
        root: string;
        epoch: number;
    } | null>;
    static rootForTimestamp(x: RootByTimestampModel): Promise<{
        chainId: number;
        timestamp: bigint;
        root: string;
        epoch: number;
    }[]>;
    static fetch(chainId: ChainId): Promise<Partial<Awaited<ReturnType<ReturnType<typeof DistributorService>["fetchUpdateData"]>>>>;
    static create(x: CreateRootModel): Promise<{
        chainId: number;
        timestamp: bigint;
        root: string;
        epoch: number;
    }>;
}
