import { UnableToFindPrice } from "@/errors";
import { Pricer } from "@/utils/pricer";
import PriceFetcherFactory from "@/utils/prices/priceFetcherFactory";
import { PriceSourceMethod } from "@db/api";
import { TokenService } from "../token/token.service";
import { PriceRepository } from "./price.repository";
export class PriceService {
    // ─── Prices ──────────────────────────────────────────────────────────
    static async findMany() {
        return (await Pricer.load()).prices;
    }
    static async findManyArray() {
        return (await Pricer.load()).getArray();
    }
    /** Fetches a single price */
    static async fetchPriceBySymbol(symbol) {
        const priceSource = await PriceRepository.findBySymbolOrThrow(symbol);
        if (!priceSource) {
            throw new Error(`Price source with symbol ${symbol} not found`);
        }
        if (priceSource.method === PriceSourceMethod.CONSTANT) {
            return priceSource.args.value;
        }
        if (priceSource.method === PriceSourceMethod.EQUAL_TO) {
            return PriceService.fetchPriceBySymbol(priceSource.args.token);
        }
        return (await PriceFetcherFactory.instance.get(priceSource.method).getPrice([priceSource]))?.[0]?.rate;
    }
    // ─── Price Sources ───────────────────────────────────────────────────
    static async getPriceSourceBySymbol(symbol) {
        return await PriceRepository.findBySymbolOrThrow(symbol);
    }
    static async findManyPriceSources(query) {
        return await PriceRepository.findManyPriceSources(query);
    }
    static async createPriceSource(priceSource) {
        const created = await PriceRepository.create(priceSource);
        try {
            const price = await PriceService.fetchPriceBySymbol(created.symbol);
            if (price === undefined || price === null) {
                throw new Error();
            }
            if (priceSource.symbol.startsWith("0x")) {
                await TokenService.updateAddressPrices(priceSource.symbol, price);
            }
            else {
                await TokenService.updateSymbolPrices(priceSource.symbol, price, []);
            }
            return price;
        }
        catch {
            await PriceRepository.deleteBySymbol(created.symbol);
            throw new UnableToFindPrice();
        }
    }
    static async updatePriceSource(symbol, newPriceSource) {
        return await PriceRepository.updateBySymbol(symbol, newPriceSource);
    }
    static async deletePriceSource(symbol) {
        return await PriceRepository.deleteBySymbol(symbol);
    }
}
