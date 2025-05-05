import { type PriceSource } from "@db/api";
import type PriceFetcher from "./priceFetcher";
import type { ResponsePriceType } from "./priceFetcher";
export default class CoingeckoService implements PriceFetcher {
    static readonly instance: CoingeckoService;
    private constructor();
    private baseUrl;
    getPrice(tickers: PriceSource[]): Promise<ResponsePriceType[]>;
    private buildUrl;
    private fetchPrices;
    private formatResponse;
}
