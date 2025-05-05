import { getTokensListWithCache } from "@/libs/getTokensList";
import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { Pricer } from "@/utils/pricer";
import { t } from "elysia";
/**
 * @deprecated - can be removed once old apps are not in used anymore
 */
export const response = t.Array(t.Object({ rate: t.Number(), token: t.String() }));
export default (app) => app.get("/app", async () => {
    return await CacheService.wrap(TTLPresets.MIN_5, async () => {
        const json = {
            tokens: await getTokensListWithCache(),
            prices: await (await Pricer.load()).getArray(),
        };
        try {
            const v3Tokens = await TokenService.findMany({ items: 0 });
            for (const token of v3Tokens) {
                if (!json.tokens[token.chainId]) {
                    json.tokens[token.chainId] = {};
                }
                if (!json.tokens[token.chainId][token.address] && token.icon?.length > 0) {
                    json.tokens[token.chainId][token.address] = {
                        address: token.address,
                        chainId: token.chainId,
                        decimals: token.decimals,
                        name: token.name,
                        symbol: token.symbol,
                        logoURI: token.icon,
                    };
                }
            }
        }
        catch (e) {
            console.error(e);
        }
        return json;
    });
}, {
    query: t.Object({}),
    tags: ["Onchain"],
});
