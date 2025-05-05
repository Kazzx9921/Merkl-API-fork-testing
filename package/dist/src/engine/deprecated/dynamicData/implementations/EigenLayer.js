import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { BN2Number, ChainInteractionService, EigenLayerStrategyInterface, EigenLayerStrategy__factory, YEAR, } from "@sdk";
export class EigenLayerDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        for (const campaign of campaigns) {
            calls.push({
                allowFailure: true,
                callData: EigenLayerStrategyInterface.encodeFunctionData("totalShares"),
                target: campaign.campaignParameters.strategy,
            });
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        let i = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            let totalSupplyShares;
            let totalSupplyStrategy;
            try {
                totalSupplyShares = EigenLayerStrategyInterface.decodeFunctionResult("totalShares", result[i++].returnData)[0];
            }
            catch {
                log.warn(`Error getting totalShares for campaign ${campaign.campaignId} and strategy ${campaign.campaignParameters.strategy}`);
                totalSupplyShares = 0.0000001;
            }
            try {
                totalSupplyStrategy = BN2Number(await EigenLayerStrategy__factory.connect(campaign.campaignParameters.strategy, ChainInteractionService(campaign.computeChainId).provider()).sharesToUnderlying(totalSupplyShares), campaign.campaignParameters.decimalsUnderlyingToken);
            }
            catch {
                log.warn(`Error getting totalSupply for campaign ${campaign.campaignId} and strategy ${campaign.campaignParameters.strategy}`);
                totalSupplyStrategy = 0.0000001;
            }
            // const priceRewardToken =
            //   (await pricer.get({
            //     address: campaign.rewardToken,
            //     chainId: campaign.chainId,
            //     symbol: campaign.campaignParameters.symbolRewardToken,
            //   })) ?? 0;
            const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
            const priceTargetToken = (await pricer.get({
                address: campaign.campaignParameters.underlyingToken,
                chainId: campaign.computeChainId,
                symbol: campaign.campaignParameters.symbolUnderlyingToken,
            })) ?? 0;
            const tvl = totalSupplyStrategy * priceTargetToken;
            let apr = (priceRewardToken * BN2Number(campaign.amount, campaign.campaignParameters.decimalsRewardToken) * YEAR * 100) /
                campaign.campaignParameters.duration /
                (totalSupplyStrategy * priceTargetToken);
            const rewardTokens = await TokenService.findManyOrCreate([
                { chainId: campaign.chainId, address: campaign.rewardToken },
            ]);
            const rewardToken = rewardTokens[0];
            apr = rewardToken.isPoint ? apr / 365 / 100 : apr;
            dynamicData.push({
                ...campaign,
                apr,
                totalSupplyTargetToken: totalSupplyStrategy,
                tvl,
                priceRewardToken: priceRewardToken,
            });
        }
        return dynamicData;
    }
}
