import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { TvlType } from "@db/api";
import { AmbientAddresses, AmbientLens, BN2Number, ChainInteractionService, NETWORK_LABELS, subgraphAmbientEndpoints, withRetry, } from "@sdk";
import request, { gql } from "graphql-request";
var AmbiantPositionType;
(function (AmbiantPositionType) {
    AmbiantPositionType["Concentrated"] = "concentrated";
    AmbiantPositionType["Ambient"] = "ambient";
    AmbiantPositionType["Knockout"] = "knockout";
})(AmbiantPositionType || (AmbiantPositionType = {}));
function encodeCall(chainId, holder) {
    if (holder.positionType === AmbiantPositionType.Concentrated) {
        return [
            {
                allowFailure: true,
                callData: AmbientLens.encodeFunctionData("queryRangeTokens", [
                    holder.owner,
                    holder.base,
                    holder.quote,
                    holder.poolIdx,
                    holder.lowerTick,
                    holder.upperTick,
                ]),
                target: AmbientAddresses[chainId].CrocQuery,
            },
        ];
    }
    return [
        {
            allowFailure: true,
            callData: AmbientLens.encodeFunctionData("queryAmbientTokens", [
                holder.owner,
                holder.base,
                holder.quote,
                holder.poolIdx,
            ]),
            target: AmbientAddresses[chainId].CrocQuery,
        },
    ];
}
async function decodeCall(result, holder) {
    let amount0 = BigInt(0n);
    let amount1 = BigInt(0n);
    if (holder.positionType === AmbiantPositionType.Concentrated) {
        const resTok = AmbientLens.decodeFunctionResult("queryRangeTokens", result);
        amount0 = BigInt(resTok[1]);
        amount1 = BigInt(resTok[2]);
    }
    if (holder.positionType === AmbiantPositionType.Ambient) {
        const resTok = AmbientLens.decodeFunctionResult("queryAmbientTokens", result);
        amount0 = BigInt(resTok[1]);
        amount1 = BigInt(resTok[2]);
    }
    return { amount0, amount1 };
}
async function poolFromCampaign(campaign) {
    return {
        id: campaign.campaignParameters.poolId,
        mainParameter: campaign.mainParameter, // main parameter containes info of poolAddress + AMM (in case its a priority AMM)
        baseToken: campaign.campaignParameters.baseToken,
        quoteToken: campaign.campaignParameters.quoteToken,
        poolIdx: campaign.campaignParameters.poolIdx,
        potentialHolders: await fetchAmbientPotentialPositions(campaign.campaignParameters.poolId, campaign.computeChainId),
    };
}
const BATCH_NUMBER = 1000;
const holdersQuery = gql `
  query LiquidityChanges($poolId: String!, $minId: String!) {
    liquidityChanges(
      where: { pool_: { id: $poolId }, id_gt: $minId , positionType_not: "knockout"},
      first: ${BATCH_NUMBER},
      orderBy: pool__id
    ) {
      id  
      user
      positionType
      bidTick
      askTick
      pool {
        base
        quote
        poolIdx
      }
    }
  }
  `;
async function fetchAmbientPotentialPositions(poolId, chainId) {
    let isFullyFetched = false;
    let holders = [];
    let minId = "";
    while (!isFullyFetched) {
        const data = await withRetry(request, [
            subgraphAmbientEndpoints[chainId],
            holdersQuery,
            {
                poolId: poolId,
                minId: minId,
            },
        ]);
        const fetchedHolders = data.liquidityChanges?.map(entry => {
            return {
                owner: entry.user,
                base: entry.pool.base,
                quote: entry.pool.quote,
                poolIdx: Number(entry.pool.poolIdx),
                lowerTick: Number(entry.bidTick),
                upperTick: Number(entry.askTick),
                positionType: entry.positionType,
            };
        });
        if (fetchedHolders.length < BATCH_NUMBER) {
            isFullyFetched = true;
        }
        else {
            minId = data.liquidityChanges[fetchedHolders.length - 1].id;
        }
        holders = holders.concat(fetchedHolders);
    }
    // Only keep unique positions
    holders = Array.from(new Set(holders.map(h => JSON.stringify(h)))).map(h => JSON.parse(h));
    return holders;
}
export class AmbiantTVLBuilder {
    async build(chainId, campaigns) {
        const tvls = [];
        let calls = [];
        for (const campaign of campaigns) {
            const pool = await poolFromCampaign(campaign);
            calls = calls.concat(...pool.potentialHolders.map(holder => encodeCall(chainId, holder)));
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        let i = 0;
        for (const campaign of campaigns) {
            const pool = await poolFromCampaign(campaign);
            let baseTokenBalance = 0n;
            let quoteTokenBalance = 0n;
            const prevI = i;
            try {
                for (let index = 0; index < pool.potentialHolders.length; index++) {
                    const res = await decodeCall(result[i++].returnData, pool.potentialHolders[index]);
                    baseTokenBalance += BigInt(res.amount0);
                    quoteTokenBalance += BigInt(res.amount1);
                }
            }
            catch {
                log.warn(`merklDynamic data - failed to decode state of pool ${pool.id} on ${NETWORK_LABELS[chainId]}`);
                i = prevI + pool.potentialHolders.length;
            }
            const baseTokenId = TokenService.hashId({
                chainId,
                address: pool.baseToken,
            });
            const quoteTokenId = TokenService.hashId({
                chainId,
                address: pool.quoteToken,
            });
            tvls.push({
                campaign,
                tvl: (await TokenService.getValueByTokenId(baseTokenId, baseTokenBalance)) +
                    (await TokenService.getValueByTokenId(quoteTokenId, quoteTokenBalance)),
                tvlBreakdown: [
                    {
                        identifier: baseTokenId,
                        type: TvlType.TOKEN,
                        value: BN2Number(baseTokenBalance, campaign.campaignParameters.decimalsBaseToken),
                    },
                    {
                        identifier: quoteTokenId,
                        type: TvlType.TOKEN,
                        value: BN2Number(quoteTokenBalance, campaign.campaignParameters.decimalsQuoteToken),
                    },
                ],
            });
        }
        return tvls;
    }
}
