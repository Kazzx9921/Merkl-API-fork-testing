import { type MerklChainId } from "@sdk";
import type { MerklChainData } from "../types";
export declare function merklChainData(chainId: MerklChainId): Promise<MerklChainData>;
export declare const merklChainDataWithCache: (chainId: MerklChainId) => Promise<any>;
