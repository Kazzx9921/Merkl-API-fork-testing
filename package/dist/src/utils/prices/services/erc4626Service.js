import { PriceService } from "@/modules/v4/price/price.service";
import { PriceSourceMethod } from "@db/api";
import { log } from "../../logger";
import { getERC4626Price } from "./getERC4626";
export default class ERC4626Service {
    static instance = new ERC4626Service();
    constructor() { }
    async getPrice(tokens) {
        const pricePromises = tokens
            .filter(tokenPriceSource => tokenPriceSource.method === PriceSourceMethod.ERC4626)
            .map(async (token) => {
            const args = token.args;
            if (!args?.chainId || !args.address || !args.vaultToken) {
                log.warn(`❌ ERC4626Service ticker not found for ${token.symbol}`);
                return undefined;
            }
            const rate = await getERC4626Price(args.chainId, args.address, args.decimals, args.vaultDecimals);
            // 2 returned tokens as stUSD and STUSD (business requirement)
            const price = await this.priceCalculation(rate, args.vaultToken);
            const res = [
                { token: token.symbol, rate: price },
                { token: token.symbol.toUpperCase(), rate: price },
            ];
            return res;
        });
        const resolvedPrices = (await Promise.all(pricePromises)).filter(result => !!result);
        return resolvedPrices.flat();
    }
    async priceCalculation(rate, vaultToken) {
        try {
            const vaultTokenPrice = await PriceService.fetchPriceBySymbol(vaultToken);
            return rate * vaultTokenPrice;
        }
        catch {
            return Number.NaN;
        }
    }
}
