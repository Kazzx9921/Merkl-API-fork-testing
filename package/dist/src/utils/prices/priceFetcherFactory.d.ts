import { PriceSourceMethod } from "@db/api";
import type PriceFetcher from "./services/priceFetcher";
/**
 * @description Factory pattern to get the correct price fetcher
 */
export default class PriceFetcherFactory {
    static readonly instance: PriceFetcherFactory;
    private constructor();
    get(type: PriceSourceMethod): PriceFetcher;
}
