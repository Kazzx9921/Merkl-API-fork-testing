import { type PriceSource } from "@db/api";
import type PriceFetcher from "./priceFetcher";
import type { ResponsePriceType } from "./priceFetcher";
export default class DexScreenerService implements PriceFetcher {
    static readonly instance: PriceFetcher;
    private baseUrl;
    private constructor();
    getPrice(tokens: PriceSource[]): Promise<ResponsePriceType[]>;
    private getTokenByChain;
    /** @description Create a list by chain dexscreener only supports one chain at a time */
    private fetchPrices;
}
