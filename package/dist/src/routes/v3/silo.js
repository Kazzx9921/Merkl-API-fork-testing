import { getSiloMarketsWithCache } from "@/libs/parse/marketsWithCache";
import { t } from "elysia";
export const query = t.Object({
    repository: t.String(),
    chainId: t.Numeric(),
});
export const response = t.Array(t.Object({
    asset: t.String(),
    assetSymbol: t.String(),
    silo: t.String(),
    version: t.Number(),
    assets: t.Array(t.Object({ address: t.String(), symbol: t.String() })),
}));
export default (app) => app.get("/silo", async (request) => {
    const chainId = request.query.chainId;
    return await getSiloMarketsWithCache(chainId, request.query.repository);
}, {
    query,
    tags: ["Protocols"],
});
