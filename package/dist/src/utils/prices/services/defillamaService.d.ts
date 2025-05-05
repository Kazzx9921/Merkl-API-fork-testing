import { type PriceSource } from "@db/api";
import type PriceFetcher from "./priceFetcher";
import type { ResponsePriceType } from "./priceFetcher";
export default class DefillamaService implements PriceFetcher {
    static readonly instance: DefillamaService;
    private constructor();
    private baseUrl;
    getPrice(sources: PriceSource[]): Promise<ResponsePriceType[]>;
    private buildUrl;
    private fetchPrices;
    private formatResponse;
}
