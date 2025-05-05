import { getDolomiteMarketWithCache } from "@/engine/deprecated/dynamicData/utils/getDolomiteMarkets";
import { t } from "elysia";
export const query = t.Object({
    chainId: t.Numeric(),
});
export const response = t.Array(t.Object({ index: t.Number(), token: t.String(), symbol: t.String() }));
export default (app) => app.get("/dolomite", async ({ query }) => {
    return await getDolomiteMarketWithCache(query.chainId);
}, {
    query: query,
    tags: ["Protocols"],
});
