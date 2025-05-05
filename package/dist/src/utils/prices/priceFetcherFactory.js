import { PriceSourceMethod } from "@db/api";
import CoingeckoService from "./services/coinGeckoService";
import DefillamaService from "./services/defillamaService";
import DexScreenerService from "./services/dexScreenerService";
import ERC4626Service from "./services/erc4626Service";
import IndexCoop from "./services/indexCoopService";
/**
 * @description Factory pattern to get the correct price fetcher
 */
export default class PriceFetcherFactory {
    static instance = new PriceFetcherFactory();
    constructor() { }
    get(type) {
        switch (type) {
            case PriceSourceMethod.COINGECKO:
                return CoingeckoService.instance;
            case PriceSourceMethod.DEFILLAMA:
                return DefillamaService.instance;
            case PriceSourceMethod.ERC4626:
                return ERC4626Service.instance;
            case PriceSourceMethod.DEXSCREENER:
                return DexScreenerService.instance;
            case PriceSourceMethod.INDEXCOOP:
                return IndexCoop.instance;
            default:
                throw new Error(`Price reader service not found for ${type}`);
        }
    }
}
