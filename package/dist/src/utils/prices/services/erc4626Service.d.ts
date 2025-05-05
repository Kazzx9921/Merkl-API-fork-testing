import { type PriceSource } from "@db/api";
import type PriceFetcher from "./priceFetcher";
import type { ResponsePriceType } from "./priceFetcher";
export default class ERC4626Service implements PriceFetcher {
    static readonly instance: PriceFetcher;
    private constructor();
    getPrice(tokens: PriceSource[]): Promise<ResponsePriceType[]>;
    private priceCalculation;
}
