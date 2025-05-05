import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { BN2Number, ChainInteractionService, CompoundV3Interface, CompoundV3SubCampaignType, YEAR, } from "@sdk";
export class CompoundV3DynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        for (const campaign of campaigns) {
            calls.push({
                allowFailure: true,
                callData: CompoundV3Interface.encodeFunctionData("baseToken"),
                target: campaign.campaignParameters.targetToken,
            });
            calls.push({
                allowFailure: true,
                callData: CompoundV3Interface.encodeFunctionData((campaign.campaignParameters.subCampaignType === CompoundV3SubCampaignType.SUPPLY
                    ? "totalSupply"
                    : "totalBorrow")),
                target: campaign.campaignParameters.targetToken,
            });
            for (const holder of [...campaign.campaignParameters.blacklist, ...campaign.campaignParameters.whitelist]) {
                calls.push({
                    allowFailure: true,
                    callData: CompoundV3Interface.encodeFunctionData((campaign.campaignParameters.subCampaignType === CompoundV3SubCampaignType.SUPPLY
                        ? "balanceOf"
                        : "borrowBalanceOf"), [holder]),
                    target: campaign.campaignParameters.targetToken,
                });
            }
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        let i = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            const underlyingToken = CompoundV3Interface.decodeFunctionResult("baseToken", result[i].returnData)[0];
            let totalSupply;
            try {
                totalSupply = BN2Number(CompoundV3Interface.decodeFunctionResult((campaign.campaignParameters.subCampaignType === CompoundV3SubCampaignType.SUPPLY
                    ? "totalSupply"
                    : "totalBorrow"), result[i + 1].returnData)[0], campaign.campaignParameters.decimalsTargetToken);
            }
            catch {
                log.warn(`Error getting totalSupply for campaign ${campaign.campaignId} and token ${campaign.campaignParameters.targetToken}`);
                totalSupply = 0.0000001;
            }
            i += 2;
            if (campaign.campaignParameters.whitelist.length > 0) {
                totalSupply = 0;
                for (const [index, holder] of campaign.campaignParameters.whitelist.entries()) {
                    try {
                        const balance = getCompoundBalance(result[i + index].returnData, campaign, campaign.campaignParameters.subCampaignType);
                        totalSupply += balance;
                    }
                    catch {
                        log.warn(`Error getting whitelist balance - campaign ${campaign.campaignId} - token ${campaign.campaignParameters.targetToken} - holder ${holder}`);
                    }
                }
                i += campaign.campaignParameters.whitelist.length;
            }
            else {
                for (const [index, holder] of campaign.campaignParameters.blacklist.entries()) {
                    try {
                        const balance = getCompoundBalance(result[i + index].returnData, campaign, campaign.campaignParameters.subCampaignType);
                        totalSupply -= balance;
                    }
                    catch {
                        log.warn(`Error getting blacklist balance - campaign ${campaign.campaignId} - token ${campaign.campaignParameters.targetToken} - holder ${holder}`);
                    }
                }
                i += campaign.campaignParameters.blacklist.length;
            }
            const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
            const priceTargetToken = (await pricer.get({
                address: underlyingToken,
                chainId: campaign.computeChainId,
                // Remove the `c` at the beginning of the symbol and the `v3` at the end
                symbol: campaign.campaignParameters.symbolTargetToken.slice(1, -2),
            })) ?? 0;
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
                tvl: totalSupply * priceTargetToken,
                priceRewardToken: priceRewardToken,
            });
        }
        return dynamicData;
    }
}
function getCompoundBalance(returnData, campaign, campaignSubType) {
    return BN2Number(CompoundV3Interface.decodeFunctionResult((campaignSubType === CompoundV3SubCampaignType.SUPPLY ? "balanceOf" : "borrowBalanceOf"), returnData)[0], campaign.campaignParameters.decimalsTargetToken);
}
