import { getMorphoMarketsWithCache } from "@/libs/parse/marketsWithCache";
import { MorphoSubCampaignType } from "@sdk";
import { t } from "elysia";
export const query = t.Object({
    repository: t.String(),
    chainId: t.Numeric(),
});
export const response = t.Array(t.Object({
    address: t.String(),
    name: t.String(),
    whitelisted: t.Boolean(),
    symbol: t.String(),
    chain: t.Object({ network: t.String() }),
}));
export default (app) => app.get("/morphoVaults", async (request) => {
    const chainId = request.query.chainId;
    if (request.query.repository === MorphoSubCampaignType.META.toString())
        return await getMorphoMarketsWithCache(chainId, request.query.repository);
}, {
    query,
    tags: ["Protocols"],
});
