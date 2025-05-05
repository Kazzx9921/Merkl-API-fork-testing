import { PriceSourceMethod } from "@db/api";
import axios from "axios";
import { log } from "../../logger";
export default class DexScreenerService {
    static instance = new DexScreenerService();
    baseUrl = "https://api.dexscreener.com/latest/dex/pairs/";
    constructor() { }
    async getPrice(tokens) {
        const filteredTokens = tokens.filter(tokenPriceSource => tokenPriceSource.method === PriceSourceMethod.DEXSCREENER);
        if (filteredTokens.length === 0)
            return [];
        const tokensByChain = this.getTokenByChain(filteredTokens); // supports only one chain at a time
        if (tokensByChain === undefined)
            return [];
        return this.fetchPrices(tokensByChain);
    }
    getTokenByChain(tokens) {
        const tokensByChain = {};
        for (const token of tokens) {
            const args = token.args;
            if (args?.chain && args?.pair) {
                const chain = args.chain.toLowerCase();
                const pair = args.pair;
                // Initialize array if it doesn't exist for the chain
                if (!tokensByChain[chain])
                    tokensByChain[chain] = [];
                tokensByChain[chain].push(pair);
            }
            else
                log.warn(`⚠️ DexScrenner Invalid token args: ${JSON.stringify(token.args)}`);
        }
        return tokensByChain;
    }
    /** @description Create a list by chain dexscreener only supports one chain at a time */
    async fetchPrices(tokensByChain) {
        // let tickerCallResult: AxiosResponse;
        const res = [];
        const fetchPromises = Object.entries(tokensByChain).map(async ([chain, pairs]) => {
            const url = `${this.baseUrl}${chain.toLowerCase()}/${pairs.join(",")}`;
            try {
                const { data } = await axios.get(url, {
                    timeout: 10000,
                });
                if (!data.pairs) {
                    log.warn(`⚠️ DexScrenner No pairs found in the response for chain ${chain}`);
                    return [];
                }
                return data.pairs.map((pair) => ({
                    rate: Number.parseFloat(pair.priceUsd),
                    token: pair.baseToken.symbol,
                }));
            }
            catch (error) {
                log.error(`❌ DexScreener error fetching prices for chain ${chain}:`, error);
                return [];
            }
        });
        const results = await Promise.all(fetchPromises);
        results.forEach(result => res.push(...result));
        return res;
    }
}
