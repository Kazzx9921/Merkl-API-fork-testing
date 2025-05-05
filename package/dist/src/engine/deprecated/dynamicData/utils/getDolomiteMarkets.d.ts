import { DOLOMITE_MARGIN_MAPPING } from "@sdk";
export type DolomiteMarketT = {
    index: number;
    token: string;
    symbol: string;
}[];
export declare const getDomiteMarkets: (chainId: keyof typeof DOLOMITE_MARGIN_MAPPING) => Promise<DolomiteMarketT>;
export declare const getDolomiteMarketWithCache: (chainId: keyof typeof DOLOMITE_MARGIN_MAPPING) => Promise<DolomiteMarketT>;
