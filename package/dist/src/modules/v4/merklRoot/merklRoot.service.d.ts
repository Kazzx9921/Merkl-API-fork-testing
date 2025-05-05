import { type ChainId } from "@sdk";
import type { CreateRootModel, RootByTimestampModel } from "./merklRoot.model";
export declare class MerklRootService {
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
    static fetchFromCache(chainId: ChainId): Promise<any>;
    /**
     * Fetch all roots for the provided chains
     * @param chainIds to fetch roots for
     * @returns record of chains to object with live and last tree roots
     */
    static fetchAll(chainIds?: ChainId[]): Promise<Record<number, {
        live: string;
        tree: string;
        lastTree: string;
        endOfDisputePeriod: number;
        disputer: string;
    }>>;
    static create(x: CreateRootModel): Promise<{
        chainId: number;
        timestamp: bigint;
        root: string;
        epoch: number;
    }>;
}
