import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { BN2Number, ChainInteractionService, ERC20Interface, YEAR, } from "@sdk";
export const VEST_TREASURY = "0x7ccF5BbeC69c790D27dA3b5398B9e0d6D6EeC9F3";
export const VEST_TOKEN = "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4";
export class VestDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        for (const _campaign of campaigns) {
            calls.push({
                allowFailure: true,
                callData: ERC20Interface.encodeFunctionData("balanceOf", [VEST_TREASURY]),
                target: VEST_TOKEN,
            });
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        let i = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            let totalSupply;
            try {
                totalSupply = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i++].returnData)[0], 6);
            }
            catch {
                log.warn(`Error getting totalSupply for campaign ${campaign.campaignId}`);
                totalSupply = 0.0000001;
            }
            // const priceRewardToken =
            //   (await pricer.get({
            //     address: campaign.rewardToken,
            //     chainId: campaign.chainId,
            //     symbol: campaign.campaignParameters.symbolRewardToken,
            //   })) ?? 0;
            const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
            const priceTargetToken = (await pricer.get({
                address: VEST_TOKEN,
                chainId: campaign.computeChainId,
                symbol: "USDC.e",
            })) ?? 0;
            const tvl = totalSupply * priceTargetToken;
            let apr = (priceRewardToken * BN2Number(campaign.amount, campaign.campaignParameters.decimalsRewardToken) * YEAR * 100) /
                campaign.campaignParameters.duration /
                (totalSupply * priceTargetToken);
            const rewardTokens = await TokenService.findManyOrCreate([
                { chainId: campaign.chainId, address: campaign.rewardToken },
            ]);
            const rewardToken = rewardTokens[0];
            apr = rewardToken.isPoint ? apr / 365 / 100 : apr;
            dynamicData.push({
                ...campaign,
                apr,
                totalSupplyTargetToken: totalSupply,
                tvl,
                priceRewardToken: priceRewardToken,
            });
        }
        return dynamicData;
    }
}
