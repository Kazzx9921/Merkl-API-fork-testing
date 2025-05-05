import { CacheService } from "@/modules/v4/cache/cache.service";
import { PriceService } from "@/modules/v4/price/price.service";
import { log } from "@/utils/logger";
import { NETWORK_LABELS } from "@sdk";
import { TTLPresets } from "../cache/cache.model";
import { TokenService } from "../token/token.service";
import { CoingeckoRepository } from "./coingecko.repository";
export class CoingeckoService {
    static findList() {
        return CacheService.wrap(TTLPresets.HOUR_1, CoingeckoRepository.findList);
    }
    static findMarkets(ids) {
        return CacheService.wrap(TTLPresets.MIN_5, CoingeckoRepository.findMarkets, ids);
    }
    static async createPriceSourceForSymbolIfMissing(symbol, ticker) {
        try {
            await PriceService.getPriceSourceBySymbol(symbol);
        }
        catch {
            await PriceService.createPriceSource({
                symbol: symbol,
                method: "COINGECKO",
                args: {
                    ticker,
                },
            });
            log.info(`added coingecko price source for token ${symbol}: ${ticker}`);
        }
    }
    static async fillTokensWithCoingeckoData() {
        // 1 - Get coingecko token list
        const coingeckoData = CoingeckoService.findList();
        // 2 - Find tokens with missing prices and try to add the sources
        const missingPriceTokens = await TokenService.findMany({ missingPrice: true });
        for (const token of missingPriceTokens) {
            const coingeckoToken = (await coingeckoData).find(t => t.symbol === token.symbol && t.name === token.name);
            if (!!coingeckoToken) {
                await CoingeckoService.createPriceSourceForSymbolIfMissing(token.symbol, coingeckoToken.id);
            }
        }
        // 3 - Find tokens with missing logos and gather their ids
        const missingIconsTokens = await TokenService.findMany({ missingIcons: true });
        const coingeckoIds = [];
        for (const token of missingIconsTokens) {
            const coingeckoToken = (await coingeckoData).find(t => t.symbol === token.symbol && t.name === token.name);
            if (!!coingeckoToken) {
                coingeckoIds.push(coingeckoToken.id);
            }
        }
        // Avoid rate limits, wait 2 min
        await new Promise(resolve => setTimeout(resolve, 120_000));
        // 4 - Get images and fill them
        const coingeckoMarkets = await CoingeckoService.findMarkets(coingeckoIds);
        for (const market of coingeckoMarkets) {
            for (const token of missingIconsTokens) {
                if (token.symbol === market.symbol && token.name === market.name) {
                    await TokenService.update(token.id, {
                        icon: market.image,
                    });
                    log.info(`updated token ${token.symbol} on ${NETWORK_LABELS[token.chainId]} with icon ${market.image}`);
                }
            }
        }
    }
}
