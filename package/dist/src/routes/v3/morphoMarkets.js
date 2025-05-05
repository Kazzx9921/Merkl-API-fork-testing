import { getMorphoMarketsWithCache } from "@/libs/parse/marketsWithCache";
import { MorphoSubCampaignType } from "@sdk";
import { t } from "elysia";
export const query = t.Object({
    repository: t.String(),
    chainId: t.Numeric(),
});
const asset = t.Object({
    address: t.String(),
    chain: t.Object({ network: t.String() }),
    symbol: t.String(),
});
export const response = t.Array(t.Object({
    uniqueKey: t.String(),
    whitelisted: t.Boolean(),
    lltv: t.Numeric(),
    loanAsset: asset,
    collateralAsset: asset,
}));
export default (app) => app.get("/morphoMarkets", async (request) => {
    const chainId = request.query.chainId;
    if (request.query.repository !== MorphoSubCampaignType.META.toString())
        return await getMorphoMarketsWithCache(chainId, request.query.repository);
}, {
    query,
    tags: ["Protocols"],
});
