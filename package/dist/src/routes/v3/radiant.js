import { getRadiantMarketsWithCache } from "@/libs/parse/marketsWithCache";
import { t } from "elysia";
export const query = t.Object({
    poolAddressProvider: t.String(),
    chainId: t.Numeric(),
});
export const response = t.Array(t.Object({
    asset: t.String(),
    symbol: t.String(),
    aToken: t.Optional(t.String()),
    stableDebtToken: t.Optional(t.String()),
    variableDebtToken: t.Optional(t.String()),
    aTokenSymbol: t.Optional(t.String()),
    aTokenName: t.Optional(t.String()),
    vdTokenSymbol: t.Optional(t.String()),
    vdTokenName: t.Optional(t.String()),
    vault: t.Optional(t.String()),
    vaultSymbol: t.Optional(t.String()),
}));
export default (app) => app.get("/radiant", async (request) => {
    const chainId = request.query.chainId;
    return await getRadiantMarketsWithCache(chainId, request.query.poolAddressProvider);
}, {
    query,
    tags: ["Protocols"],
});
