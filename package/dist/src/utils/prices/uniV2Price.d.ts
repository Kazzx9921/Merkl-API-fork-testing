import { type ChainId } from "@sdk";
type ReturnType = number;
export declare function getCurveV2Price(chainId: ChainId, prices: {
    [t: string]: number;
}, pool: string, token: string): Promise<ReturnType>;
export declare function getUniV2Price(chainId: ChainId, priceToken0: number, priceToken1: number, poolAddress: string): Promise<ReturnType>;
export {};
