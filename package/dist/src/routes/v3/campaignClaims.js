import checkQueryChainIdValidity from "@/hooks/checkQueryChainIdValidity";
import { engineDbClient } from "@db";
import { Prisma } from "@db/engine";
import { t } from "elysia";
/**
 * @deprecated
 * This whole file is deprecated but is still used by Pancakeswap to populate their db so we can't remove it yet.
 */
export const query = t.Object({
    campaignId: t.String(),
    chainId: t.Numeric(),
    byReason: t.Optional(t.BooleanString()),
});
const CLAIMS_OVER_TIME = (chainId, campaignId) => Prisma.sql `
    SELECT timestamp, recipient, reason, claimed
    FROM "ClaimsOverTime"
    WHERE
        "chainId"=${chainId} AND
        "campaignId"=${campaignId} 
    ORDER BY timestamp ASC
    `;
export default (app) => app.use(checkQueryChainIdValidity()).get("/campaignClaims", async ({ query }) => {
    const campaignId = query.campaignId;
    const chainId = query.chainId;
    return await engineDbClient.$queryRaw(CLAIMS_OVER_TIME(chainId, campaignId));
}, {
    query,
    tags: ["Campaigns"],
});
