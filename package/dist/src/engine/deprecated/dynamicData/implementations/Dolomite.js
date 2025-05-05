import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { BN2Number, DolomiteSubCampaignType, YEAR, } from "@sdk";
import axios from "axios";
export class DolomiteDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const dynamicData = [];
        for (const campaign of campaigns) {
            try {
                const apiRes = (await axios.get(`https://api.dolomite.io/balances/${campaign.computeChainId}/total-supply`))
                    .data.Result;
                const tokenIndex = apiRes.findIndex(x => Number.parseFloat(x.token.marketId) === campaign.campaignParameters.marketIndex);
                const tokenData = apiRes[tokenIndex].token;
                const totalSupplyTargetToken = campaign.campaignSubType === DolomiteSubCampaignType.borrow
                    ? Number.parseFloat(tokenData.borrowLiquidity)
                    : campaign.campaignSubType === DolomiteSubCampaignType.supply
                        ? Number.parseFloat(tokenData.supplyLiquidity)
                        : Number.parseFloat(tokenData.supplyLiquidity) - Number.parseFloat(tokenData.borrowLiquidity);
                // const priceRewardToken =
                //   (await pricer.get({
                //     address: campaign.rewardToken,
                //     chainId,
                //     symbol: campaign.campaignParameters.symbolRewardToken,
                //   })) ?? 0;
                const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
                const priceTargetToken = (await pricer.get({
                    address: tokenData.id,
                    chainId,
                    symbol: tokenData.symbol,
                })) ?? 0;
                let apr = (priceRewardToken *
                    BN2Number(campaign.amount, campaign.campaignParameters.decimalsRewardToken) *
                    YEAR *
                    100) /
                    campaign.campaignParameters.duration /
                    (totalSupplyTargetToken * priceTargetToken);
                const rewardTokens = await TokenService.findManyOrCreate([
                    { chainId: campaign.chainId, address: campaign.rewardToken },
                ]);
                const rewardToken = rewardTokens[0];
                apr = rewardToken.isPoint ? apr / 365 / 100 : apr;
                dynamicData.push({
                    ...campaign,
                    apr,
                    totalSupplyTargetToken,
                    tvl: totalSupplyTargetToken * priceTargetToken,
                });
            }
            catch (e) {
                log.error("Failed to fetch Dolomite data", e);
                // In this case we return just the staticData
                dynamicData.push({ ...campaign });
            }
        }
        return dynamicData;
    }
}
