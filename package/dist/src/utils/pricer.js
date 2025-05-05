import { Redis } from "@/cache";
import { ChainId, NETWORK_LABELS } from "@sdk";
import axios from "axios";
import { log } from "./logger";
import PriceService from "./prices/priceService";
const defiLamaChains = {
    [ChainId.MAINNET]: "ethereum",
    [ChainId.POLYGON]: "polygon",
    [ChainId.FANTOM]: "fantom",
    [ChainId.AVALANCHE]: "avax",
    [ChainId.BSC]: "bsc",
    [ChainId.OPTIMISM]: "optimism",
    [ChainId.ARBITRUM]: "arbitrum",
    [ChainId.BASE]: "base",
    [ChainId.GNOSIS]: "gnosis",
};
export var PRICING_METHODS;
(function (PRICING_METHODS) {
    PRICING_METHODS[PRICING_METHODS["defillama"] = 0] = "defillama";
    PRICING_METHODS[PRICING_METHODS["quickswap"] = 1] = "quickswap";
    PRICING_METHODS[PRICING_METHODS["abandonned"] = -1] = "abandonned";
})(PRICING_METHODS || (PRICING_METHODS = {}));
export class Pricer {
    prices;
    extraPricesData;
    constructor(prices, extraPricesData) {
        this.prices = prices;
        this.extraPricesData = extraPricesData;
    }
    static async load() {
        try {
            const { prices, extraPricesData } = await Redis.get("Prices");
            const pricer = new Pricer(prices ?? {}, extraPricesData ?? []);
            if (!prices) {
                log.error("Pricer", "prices not found in cache when instanciating class");
                await pricer.update();
            }
            return pricer;
        }
        catch (e) {
            log.error("Pricer", "Failed to load prices from cache");
            const pricer = new Pricer({}, []);
            await pricer.update();
            return pricer;
        }
    }
    getArray() {
        return Object.keys(this.prices)
            .filter(t => this.prices[t] >= 0)
            .map(t => {
            return {
                rate: this.prices[t],
                token: t,
            };
        });
    }
    /** Tries to fetch a given price sequentially using a given method */
    async fetchPerMethod(x, method) {
        switch (method) {
            case PRICING_METHODS.abandonned:
                return 0;
            case PRICING_METHODS.defillama: {
                let defillamaId;
                if (!!x.chainId && !!x.address) {
                    defillamaId = `${defiLamaChains[x.chainId] ?? NETWORK_LABELS[x.chainId].toLowerCase()}:${x.address}`;
                }
                else {
                    defillamaId = `coingecko:${x.symbol}`;
                }
                const defillamaUrl = `https://coins.llama.fi/prices/current/${defillamaId}`;
                try {
                    return (await axios.get(defillamaUrl, { timeout: 1000 })).data.coins[defillamaId].price;
                }
                catch { }
                break;
            }
            case PRICING_METHODS.quickswap:
                if (!!x.chainId && !!x.address) {
                    const quickswapUrl = `https://leaderboard.quickswap.exchange/utils/token-prices/v3?chainId=${x.chainId}&addresses=${x.address}`;
                    try {
                        return (await axios.get(quickswapUrl, { timeout: 1000 })).data?.[0].price;
                    }
                    catch { }
                }
                break;
        }
        return 0;
    }
    /** Tries to fetch a given price sequentially using all available methods */
    async fetch(x) {
        if (!!x.symbol && x.symbol?.toLowerCase().includes("test"))
            return { method: PRICING_METHODS.abandonned, price: 0 };
        for (const method of Object.values(PRICING_METHODS)) {
            if (method === Number.parseInt(method.toString())) {
                const price = await this.fetchPerMethod(x, method);
                if (!!price)
                    return { method, price };
            }
        }
        return { method: PRICING_METHODS.abandonned, price: 0 };
    }
    /** Returns the price if possible, otherwise tries to fetch it */
    async get(x) {
        if (x.symbol === "test")
            return 0; // FIXME
        // Normalize address
        x.address = x?.address?.toLowerCase();
        if (!!x.address && !!this.prices[x.address]) {
            if (this.prices[x.address] !== -1)
                return this.prices[x.address];
        }
        if (!!x.symbol && !!this.prices[x.symbol]) {
            if (this.prices[x.symbol] === -1)
                return undefined;
            return this.prices[x.symbol];
        }
        if (!!x.symbol && x.symbol.toLowerCase().startsWith("w")) {
            const symbol = x.symbol.slice(1);
            if (!!this.prices[symbol]) {
                if (this.prices[symbol] === -1)
                    return undefined;
                return this.prices[symbol];
            }
        }
        if (!!x.symbol && x.symbol.toLowerCase().startsWith("r")) {
            const symbol = x.symbol.slice(1);
            if (!!this.prices[symbol]) {
                if (this.prices[symbol] === -1)
                    return undefined;
                return this.prices[symbol];
            }
        }
        if (!!x.symbol && x.symbol.toLowerCase().startsWith("r") && x.symbol.toLowerCase().endsWith("n")) {
            const symbol = x.symbol.slice(1, -1);
            if (!!this.prices[symbol]) {
                if (this.prices[symbol] === -1)
                    return undefined;
                return this.prices[symbol];
            }
        }
        if (!!x.symbol && x.symbol.toLowerCase().startsWith("variableDebt")) {
            const symbol = x.symbol.slice(12);
            if (!!this.prices[symbol]) {
                if (this.prices[symbol] === -1)
                    return undefined;
                return this.prices[symbol];
            }
        }
        if (!!x.symbol && x.symbol.toLowerCase().startsWith("variableDebt") && x.symbol.toLowerCase().endsWith("n")) {
            const symbol = x.symbol.slice(12, -1);
            if (!!this.prices[symbol]) {
                if (this.prices[symbol] === -1)
                    return undefined;
                return this.prices[symbol];
            }
        }
    }
    /** Saves the current price data in the cache */
    async save() {
        await Redis.safeSet("Prices", {
            extraPricesData: this.extraPricesData,
            prices: this.prices,
        });
    }
    /** Recomputes all prices and saves them in the cache */
    async update() {
        // Update prices
        this.prices = await PriceService.instance.fetchPrices();
        // Update extra prices
        this.extraPricesData = this.extraPricesData.filter(x => !!x.symbol && this.prices[x.symbol] === undefined && !!x.address && this.prices[x.address] === undefined);
        for (const x of this.extraPricesData) {
            try {
                const price = await this.fetchPerMethod({ address: x.address, chainId: x.chainId, symbol: x.symbol }, x.method);
                if (!!price) {
                    log.info(`price for ${x.symbol} - ${x.address} on ${NETWORK_LABELS[x.chainId ?? 1]}: ${price} added to cache`);
                    if (!!x.address && this.prices[x.address] === undefined)
                        this.prices[x.address] = price;
                    if (!!x.symbol && this.prices[x.symbol] === undefined)
                        this.prices[x.symbol] = price;
                }
            }
            catch (e) {
                log.error("pricer update", e);
            }
        } // Update extraPricesData
        await this.save();
        return this.prices;
    }
}
