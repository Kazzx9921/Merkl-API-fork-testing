import { PriceSourceMethod } from "@db/api";
import axios from "axios";
import { log } from "../../logger";
export default class CoingeckoService {
    static instance = new CoingeckoService();
    constructor() { }
    baseUrl = "https://coins.llama.fi/prices/current/";
    async getPrice(tickers) {
        const filteredTokens = tickers.filter(tokenPriceSource => tokenPriceSource.method === PriceSourceMethod.COINGECKO);
        if (filteredTokens.length === 0)
            return [];
        return await this.fetchPrices(filteredTokens);
    }
    buildUrl(tokens) {
        const tickerParams = tokens
            .map(token => {
            const args = token.args;
            if (!args?.ticker)
                return log.warn(`❌ CoingeckoService ticker not found for ${token.symbol}`);
            return `coingecko:${args.ticker}`;
        })
            .join(",");
        return this.baseUrl.concat(tickerParams);
    }
    async fetchPrices(tickers) {
        const chunkSize = 200;
        const chunks = [];
        for (let i = 0; i < tickers.length; i += chunkSize) {
            chunks.push(tickers.slice(i, Math.min(tickers.length, i + chunkSize)));
        }
        const promises = (await Promise.allSettled(chunks.map(async (chunk) => {
            const url = this.buildUrl(chunk);
            return axios
                .get(url, { timeout: 10000 })
                .then(res => this.formatResponse(res, chunk))
                .catch(err => {
                log.error("❌ CoingeckoService not responding", err);
                throw "❌ CoingeckoService not responding";
            });
        })))
            .filter(result => result.status === "fulfilled")
            .map(result => result.value);
        return promises.reduce((acc, val) => acc.concat(val), []);
    }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation> Need to be typed according to coinguekko answer type
    formatResponse(data, tokens) {
        return tokens
            .map(token => {
            const args = token.args;
            if (!args?.ticker)
                return;
            if (!data.data.coins[`coingecko:${args.ticker}`]?.price) {
                log.warn(`❌ CoinGecko data failed for ${token.symbol} with ticker ${args.ticker}`);
                return;
            }
            return {
                token: token.symbol,
                rate: data.data.coins[`coingecko:${args.ticker}`].price ?? -1,
            };
        })
            .filter(item => !!item);
    }
}
