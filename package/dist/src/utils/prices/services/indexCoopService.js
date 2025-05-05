import { PriceSourceMethod } from "@db/api";
import axios from "axios";
import { log } from "../../logger";
export default class IndexCoop {
    static instance = new IndexCoop();
    baseUrl = "https://api.indexcoop.com/";
    constructor() { }
    async getPrice(tokens) {
        const filteredTokens = tokens.filter(tokenPriceSource => tokenPriceSource.method === PriceSourceMethod.INDEXCOOP);
        if (filteredTokens.length === 0)
            return [];
        const tokensByChain = this.getTokenByChain(filteredTokens);
        if (tokensByChain === undefined)
            return [];
        return this.fetchPrice(tokensByChain);
    }
    getTokenByChain(tokens) {
        const tokensByChain = {};
        for (const token of tokens) {
            // Ensure `args` has the expected structure
            const args = token.args;
            if (args?.chainId !== undefined) {
                // Initialize array if it doesn't exist for the chain
                if (!tokensByChain[args.chainId])
                    tokensByChain[args.chainId] = [];
                tokensByChain[args.chainId].push(token.symbol);
            }
            else
                log.warn(`⚠️ IndexCoop invalid token args: ${JSON.stringify(token.args)}`);
        }
        return tokensByChain;
    }
    async fetchPrice(tokensByChain) {
        const res = [];
        const fetchPromises = Object.entries(tokensByChain).flatMap(([chain, pairs]) => pairs.map(async (symbol) => {
            const indexCoopUrl = this.buildUrl(chain, symbol);
            try {
                const { data } = await axios.get(indexCoopUrl, {
                    timeout: 10000,
                });
                res.push({ rate: Number.parseFloat(data.nav), token: symbol });
            }
            catch (e) {
                log.error(`❌ IndexCoop not responding for chain ${chain}`, e);
            }
        }));
        await Promise.all(fetchPromises);
        return res;
    }
    buildUrl(chainId, symbol) {
        return chainId !== "0"
            ? `${this.baseUrl}${chainId}/${symbol.toLowerCase()}/nav`
            : `${this.baseUrl}${symbol.toLowerCase()}/nav`;
    }
}
