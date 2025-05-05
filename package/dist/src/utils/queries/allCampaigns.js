import { Prisma } from "@db/engine";
export const ALL_CAMPAIGNS_FOR_CHAIN_AFTER = (chainId, after) => Prisma.sql `
    SELECT
        *
    FROM "Campaigns"
    WHERE
        (("chainId" = ${chainId} AND "computeChainId" = 0) OR "computeChainId" = ${chainId}) AND
        "campaignType" != 0 AND
        "endTimestamp" >= ${after} AND
        ("campaignParameters"->>'shouldIgnore' is null OR "campaignParameters"->>'shouldIgnore'='false')
        
    `;
