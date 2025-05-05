// @ts-nocheck
import { Redis } from "@/cache";
import { Campaign } from "@sdk";
import { t } from "elysia";
import checkQueryAddressValidity from "../../hooks/checkQueryAddressValidity";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
import { getUserPositionsV2 } from "../../libs/positions";
import { prepareFetch } from "../../libs/positions/prepareFetch";
export const query = t.Object({
    chainId: t.Optional(t.Numeric()),
    user: t.String(),
});
const positions = {
    [Campaign.CLAMM]: t.Object({
        almAddress: t.Optional(t.String()),
        id: t.String(),
        origin: t.Number(),
        inRangeLiquidity: t.Number(),
        lowerTick: t.Number(),
        upperTick: t.Number(),
        totalLiquidity: t.Number(),
        tvl: t.Number(),
        balance0: t.Number(),
        balance1: t.Number(),
    }),
    [Campaign.SILO]: t.Object({
        origin: t.String(),
        totalSupply: t.Number(),
        tvl: t.Number(),
        balance: t.Number(),
    }),
};
export const response = t.Record(t.TemplateLiteral([t.Numeric(), t.Literal("_"), t.String()]), t.Object({
    userPositions: t.Array(t.Union(Object.values(positions))),
}));
export default (app) => app
    .use(checkQueryAddressValidity())
    .use(checkQueryChainIdValidity())
    .get("/positions", async ({ query }) => {
    const user = query.user;
    const chainId = query.chainId;
    // Check that chainId is a valid MerklChainId
    const allOpportunities = await Redis.get("LiveCampaigns", chainId);
    if (!allOpportunities) {
        return {};
    }
    const positionsToCheck = {}; // TODO: add typing (depends on campaign type)
    for (const campaigns of Object.values(allOpportunities)) {
        for (const campaign of Object.values(campaigns)) {
            const type = campaign.campaignType;
            // Allows to have only one call getting campaign data
            positionsToCheck[type] = prepareFetch(type, positionsToCheck[type] ? positionsToCheck[type] : {}, campaign);
        }
    }
    return await getUserPositionsV2(positionsToCheck, chainId, user);
}, {
    transform({ query }) {
        query.chainId = !query.chainId ? undefined : query.chainId;
    },
    query,
    tags: ["Merkl"],
});
