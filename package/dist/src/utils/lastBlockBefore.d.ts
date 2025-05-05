import type { MerklChainId } from "@sdk";
export declare const getBlockTimestamp: (provider: any, blockNumber: number) => Promise<number>;
export declare const getLastBlockBeforeWithCache: (timestamp: number, chainId: MerklChainId) => Promise<any>;
