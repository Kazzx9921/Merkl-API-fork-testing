import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { TvlType } from "@db/api";
import { ChainInteractionService, EigenLayerStrategyInterface, bigIntToNumber, } from "@sdk";
export class EigenLayerTVLBuilder {
    async build(computeChainId, campaigns) {
        const tvls = [];
        const firstRound = await ChainInteractionService(computeChainId).fetchAndDecodeObject(campaigns.flatMap(campaign => {
            const { campaignId, campaignParameters } = campaign;
            const { strategy } = campaignParameters;
            return [
                {
                    callData: EigenLayerStrategyInterface.encodeFunctionData("totalShares"),
                    target: strategy,
                    key: `${campaignId}_totalShares`,
                    decoder: (data) => BigInt(EigenLayerStrategyInterface.decodeFunctionResult("totalShares", data)[0].toString()),
                },
            ];
        }));
        const secondRound = await ChainInteractionService(computeChainId).fetchAndDecodeObject(campaigns.flatMap(campaign => {
            const { campaignId, campaignParameters } = campaign;
            const { strategy } = campaignParameters;
            let totalShares = firstRound[`${campaignId}_totalShares`];
            if (!totalShares) {
                log.warn(`Error getting totalShares for campaign ${campaign.campaignId} and strategy ${campaign.campaignParameters.strategy}`);
                totalShares = 10n;
            }
            return [
                {
                    callData: EigenLayerStrategyInterface.encodeFunctionData("sharesToUnderlying", [totalShares]),
                    target: strategy,
                    key: `${campaignId}_totalUnderlying`,
                    decoder: (data) => BigInt(EigenLayerStrategyInterface.decodeFunctionResult("sharesToUnderlying", data)[0].toString()),
                },
            ];
        }));
        for (const campaign of campaigns) {
            const { campaignId, campaignParameters } = campaign;
            const { underlyingToken: underlyingTokenAddress } = campaignParameters;
            const totalUnderlying = secondRound[`${campaignId}_totalUnderlying`];
            // We don't fetch token data everytime, we use the database and the associated service
            const underlyingToken = await TokenService.findUniqueFillOrThrow({
                chainId: computeChainId,
                address: underlyingTokenAddress,
            });
            tvls.push({
                campaign,
                tvl: (bigIntToNumber(totalUnderlying, underlyingToken.decimals) ?? 0) * (underlyingToken.price ?? 0),
                tvlBreakdown: [
                    {
                        identifier: underlyingToken.id,
                        type: TvlType.TOKEN,
                        value: bigIntToNumber(totalUnderlying, underlyingToken.decimals),
                    },
                ],
            });
        }
        return tvls;
    }
}
