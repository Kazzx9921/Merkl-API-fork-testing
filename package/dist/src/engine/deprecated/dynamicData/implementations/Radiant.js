import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { providers } from "@/utils/providers";
import { engineDbClient } from "@db";
import { BN2Number, ChainInteractionService, ERC20Interface, NULL_ADDRESS, RadiantInterface, RadiantPoolInterface, YEAR, } from "@sdk";
import { Contract } from "ethers";
export class RadiantDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        for (const campaign of campaigns) {
            calls.push({
                allowFailure: true,
                callData: ERC20Interface.encodeFunctionData("totalSupply"),
                target: campaign.campaignParameters.targetToken,
            });
            calls.push({
                allowFailure: true,
                callData: RadiantPoolInterface.encodeFunctionData("getRizRegistry"),
                target: campaign.campaignParameters.poolAddressProvider ?? NULL_ADDRESS,
            });
            calls.push({
                allowFailure: true,
                callData: RadiantInterface.encodeFunctionData("getAssetPrice"),
                target: campaign.campaignParameters.targetToken,
            });
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        let i = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            let totalSupplyTargetToken;
            try {
                totalSupplyTargetToken = BN2Number(ERC20Interface.decodeFunctionResult("totalSupply", result[i++].returnData)[0], campaign.campaignParameters.decimalsTargetToken);
            }
            catch {
                log.warn(`Error getting totalSupply for campaign ${campaign.campaignId} and token ${campaign.campaignParameters.targetToken}`);
                totalSupplyTargetToken = 0.0000001;
            }
            const backupCampaignIds = (await engineDbClient.campaigns.findMany({
                select: {
                    campaignId: true,
                    campaignParameters: true,
                    endTimestamp: true,
                },
                where: {
                    chainId: chainId,
                    mainParameter: campaign.mainParameter,
                },
            }))
                .filter(c => c.campaignParameters?.symbolRewardToken === "mtwRDNT")
                .sort((a, b) => b.endTimestamp - a.endTimestamp)
                .map(c => c?.campaignId);
            let lastEligibilityRatio = 1;
            if (!!campaign.campaignParameters.hooks?.length) {
                for (const campaignId of [campaign.campaignId, ...backupCampaignIds]) {
                    lastEligibilityRatio =
                        (await CampaignService.findCampaignValue({
                            campaignId: `${campaignId}-${chainId}`,
                            field: "averageBoost",
                        }))?.averageBoost ?? 1;
                    if (lastEligibilityRatio !== 1)
                        break;
                }
            }
            // const priceRewardToken =
            //   (await pricer.get({
            //     address: campaign.rewardToken,
            //     chainId,
            //     symbol: campaign.campaignParameters.symbolRewardToken,
            //   })) ?? 0;
            const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
            let priceDecimals = 8;
            let rizRegistry = "";
            try {
                rizRegistry = RadiantPoolInterface.decodeFunctionResult("getRizRegistry", result[i].returnData)[0];
                const isRiz = await new Contract(rizRegistry, RadiantPoolInterface, providers[chainId]).isLendingPoolValid(campaign.campaignParameters.pool);
                if (isRiz)
                    priceDecimals = 18;
            }
            catch {
                // If it is doesn't work it means it's not a Radiant Innovation Zone Market
            }
            i++;
            let priceTargetToken = 0;
            try {
                priceTargetToken = BN2Number(RadiantInterface.decodeFunctionResult("getAssetPrice", result[i].returnData)[0], priceDecimals);
            }
            catch (e) {
                log.local("Error getting priceTargetToken");
                priceTargetToken =
                    (await pricer.get({
                        symbol: campaign.campaignParameters.symbolTargetToken,
                        address: campaign.campaignParameters.targetToken,
                    })) ?? 0;
            }
            i++;
            let apr = (lastEligibilityRatio *
                priceRewardToken *
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
                lastEligibilityRatio,
                priceRewardToken: priceRewardToken,
            });
        }
        return dynamicData;
    }
}
