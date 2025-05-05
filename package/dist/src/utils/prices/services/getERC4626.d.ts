import { type ChainId } from "@sdk";
type ReturnType = number;
export declare function getERC4626Price(chainId: ChainId, contractAddress: string, assetDecimals?: number, vaultDecimals?: number): Promise<ReturnType>;
export {};
