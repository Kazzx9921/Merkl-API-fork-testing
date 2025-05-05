import { type PriceSource } from "@db/api";
import type PriceFetcher from "./priceFetcher";
import type { ResponsePriceType } from "./priceFetcher";
export default class IndexCoop implements PriceFetcher {
    static readonly instance: IndexCoop;
    private baseUrl;
    private constructor();
    getPrice(tokens: PriceSource[]): Promise<ResponsePriceType[]>;
    private getTokenByChain;
    private fetchPrice;
    private buildUrl;
}
