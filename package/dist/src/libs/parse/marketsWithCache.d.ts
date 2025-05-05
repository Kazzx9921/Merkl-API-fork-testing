import { type MerklChainId } from "@sdk";
export declare const getMorphoMarketsWithCache: (chainId: MerklChainId, subtype: string) => Promise<any>;
export declare const getRadiantMarketsWithCache: (chainId: MerklChainId, poolAddressProvider: string) => Promise<any>;
export declare const getSiloMarketsWithCache: (chainId: MerklChainId, repository: string) => Promise<any>;
