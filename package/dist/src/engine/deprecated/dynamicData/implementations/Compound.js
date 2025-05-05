import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { BN2Number, CTokenInterface, ChainInteractionService, CompFork, CompoundSubCampaignType, ERC20Interface, IonicERC20_INTERFACE, LayerBankERC20Interface, NULL_ADDRESS, YEAR, } from "@sdk";
export class CompoundDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        for (const campaign of campaigns) {
            if (campaign.campaignSubType === CompoundSubCampaignType.supply) {
                if (campaign.campaignParameters.compFork === CompFork.Ionic) {
                    calls.push({
                        allowFailure: true,
                        callData: IonicERC20_INTERFACE.encodeFunctionData("getTotalUnderlyingSupplied"),
                        target: campaign.campaignParameters.targetToken,
                    });
                }
                else {
                    if (campaign.campaignParameters.compFork === CompFork.LayerBank) {
                        calls.push({
                            allowFailure: true,
                            callData: LayerBankERC20Interface.encodeFunctionData("totalBorrow"),
                            target: campaign.campaignParameters.targetToken,
                        });
                    }
                    else {
                        calls.push({
                            allowFailure: true,
                            callData: CTokenInterface.encodeFunctionData("totalBorrows"),
                            target: campaign.campaignParameters.targetToken,
                        });
                    }
                    if (campaign.campaignParameters.underlyingToken !== NULL_ADDRESS) {
                        calls.push({
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("balanceOf", [campaign.campaignParameters.targetToken]),
                            target: campaign.campaignParameters.underlyingToken,
                        });
                    }
                }
            }
            else {
                if (campaign.campaignParameters.compFork === CompFork.LayerBank) {
                    calls.push({
                        allowFailure: true,
                        callData: LayerBankERC20Interface.encodeFunctionData("totalBorrow"),
                        target: campaign.campaignParameters.targetToken,
                    });
                }
                else {
                    calls.push({
                        allowFailure: true,
                        callData: CTokenInterface.encodeFunctionData("totalBorrows"),
                        target: campaign.campaignParameters.targetToken,
                    });
                }
            }
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        let i = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            let totalSupplyTargetToken;
            let borrowedAmount;
            let nonUtilizedSupplied;
            if (campaign.campaignSubType === CompoundSubCampaignType.supply) {
                try {
                    if (campaign.campaignParameters.compFork === CompFork.Ionic) {
                        totalSupplyTargetToken = BN2Number(IonicERC20_INTERFACE.decodeFunctionResult("getTotalUnderlyingSupplied", result[i++].returnData)[0], campaign.campaignParameters.decimalsUnderlyingToken);
                    }
                    else {
                        if (campaign.campaignParameters.compFork === CompFork.LayerBank) {
                            borrowedAmount = BN2Number(LayerBankERC20Interface.decodeFunctionResult("totalBorrow", result[i++].returnData)[0], campaign.campaignParameters.decimalsUnderlyingToken);
                        }
                        else {
                            borrowedAmount = BN2Number(CTokenInterface.decodeFunctionResult("totalBorrows", result[i++].returnData)[0], campaign.campaignParameters.decimalsUnderlyingToken);
                        }
                        if (campaign.campaignParameters.underlyingToken === NULL_ADDRESS) {
                            // For the case of ETH
                            nonUtilizedSupplied = BN2Number(await ChainInteractionService(campaign.computeChainId)
                                .provider()
                                .getBalance(campaign.campaignParameters.targetToken), 18);
                        }
                        else {
                            nonUtilizedSupplied = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i++].returnData)[0], campaign.campaignParameters.decimalsUnderlyingToken);
                        }
                        totalSupplyTargetToken = borrowedAmount + nonUtilizedSupplied;
                    }
                }
                catch {
                    log.warn(`Error getting totalSupply for campaign ${campaign.campaignId} and token ${campaign.campaignParameters.targetToken}`);
                    totalSupplyTargetToken = 0.0000001;
                }
            }
            else {
                try {
                    if (campaign.campaignParameters.compFork === CompFork.LayerBank) {
                        totalSupplyTargetToken = BN2Number(LayerBankERC20Interface.decodeFunctionResult("totalBorrow", result[i++].returnData)[0], campaign.campaignParameters.decimalsUnderlyingToken);
                    }
                    else {
                        totalSupplyTargetToken = BN2Number(CTokenInterface.decodeFunctionResult("totalBorrows", result[i++].returnData)[0], campaign.campaignParameters.decimalsUnderlyingToken);
                    }
                }
                catch {
                    log.warn(`Error getting totalBorrows for campaign ${campaign.campaignId} and token ${campaign.campaignParameters.targetToken}`);
                    totalSupplyTargetToken = 0.0000001;
                }
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
            let apr = (priceRewardToken * BN2Number(campaign.amount, campaign.campaignParameters.decimalsRewardToken) * YEAR * 100) /
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
                priceRewardToken: priceRewardToken,
            });
        }
        return dynamicData;
    }
}
