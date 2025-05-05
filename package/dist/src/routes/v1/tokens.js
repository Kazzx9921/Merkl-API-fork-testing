import { getTokensListWithCache } from "@/libs/getTokensList";
import { t } from "elysia";
export const response = t.Record(t.String({ title: "ChainId" }), t.Record(t.String({ title: "TokenAddress" }), t.Object({
    address: t.String(),
    name: t.String(),
    decimals: t.Number(),
    symbol: t.String(),
    hasPermit: t.Boolean(),
    useInSwap: t.Optional(t.Boolean()),
    logoURI: t.String(),
})));
export default (app) => app.get("/tokens", async () => {
    return await getTokensListWithCache();
}, {
    query: t.Object({}),
    tags: ["Onchain"],
});
