import { PriceSourceMethod } from "@db/api";
import axios from "axios";
import { log } from "../../logger";
export default class DefillamaService {
    static instance = new DefillamaService();
    constructor() { }
    baseUrl = "https://coins.llama.fi/prices/current/";
    async getPrice(sources) {
        const filteredTokens = sources.filter(tokenPriceSource => tokenPriceSource.method === PriceSourceMethod.DEFILLAMA);
        if (filteredTokens.length === 0)
            return [];
        return await this.fetchPrices(filteredTokens);
    }
    buildUrl(tokens) {
        const tikerParams = tokens
            .map(token => {
            const args = token.args;
            if (!args?.address || !args?.chain)
                return log.warn(`❌ DefillamaService address not found for ${token.symbol}`);
            return `${args?.chain}:${args.address}`;
        })
            .join(",");
        return this.baseUrl.concat(tikerParams);
    }
    async fetchPrices(sources) {
        const url = this.buildUrl(sources);
        return axios
            .get(url, { timeout: 10000 })
            .then(res => this.formatResponse(res, sources))
            .catch(err => {
            log.error("❌ DefillamaService not responding", err);
            throw "❌ DefillamaService not responding";
        });
    }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation> Need to be typed according to coinguekko answer type
    formatResponse(data, tokens) {
        return tokens
            .map(token => {
            const args = token.args;
            if (!args?.address || !args?.chain)
                return undefined;
            if (!data.data.coins[`${args?.chain}:${args.address}`]?.price) {
                log.warn(`❌ DefillamaService data failed for ${token.symbol} with address ${args.address}`);
                return undefined;
            }
            return {
                token: token.symbol,
                rate: data.data.coins[`${args?.chain}:${args.address}`].price ?? -1,
            };
        })
            .filter(item => !!item);
    }
}
