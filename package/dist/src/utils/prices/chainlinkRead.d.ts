import { type ChainId } from "@sdk";
type ReturnType = number;
export declare function getChainlinkLatestPrice(chainId: ChainId, oracle: string): Promise<ReturnType>;
export {};
