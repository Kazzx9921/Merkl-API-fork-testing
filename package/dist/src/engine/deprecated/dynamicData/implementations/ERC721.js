import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { parseDistributionType } from "@/utils/parseDistributionType";
import { Pricer } from "@/utils/pricer";
import { DistributionType } from "@db/api";
import { AragornEscrowInterface, BN2Number, ChainInteractionService, ERC20Interface, YEAR, } from "@sdk";
import { ERC721SubCampaignType } from "libs/sdk/src/types/merkl/campaignTypes/erc721";
import { getFixedApr } from "../utils/getFixedApr";
export class ERC721DynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        for (const campaign of campaigns) {
            if (campaign.campaignSubType === ERC721SubCampaignType.VOTING_POWER) {
                calls.push({
                    allowFailure: true,
                    callData: AragornEscrowInterface.encodeFunctionData("totalLocked"),
                    target: campaign.campaignParameters.extraContracts[0],
                });
            }
            else {
                calls.push({
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("totalSupply"), // TODO do not fit global interface
                    target: campaign.campaignParameters.targetToken,
                });
            }
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        let i = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            let totalSupply;
            let symbolToken = campaign.campaignParameters.symbolTargetToken;
            let token = campaign.campaignParameters.targetToken;
            if (campaign.campaignSubType === ERC721SubCampaignType.VOTING_POWER) {
                symbolToken = campaign.campaignParameters.symbolUnderlyingToken;
                token = campaign.campaignParameters.extraContracts[1];
                try {
                    totalSupply = BN2Number(AragornEscrowInterface.decodeFunctionResult("totalLocked", result[i].returnData)[0], campaign.campaignParameters.decimalsTargetToken);
                }
                catch {
                    log.warn(`Error getting totalSupply for campaign ${campaign.campaignId} and token ${campaign.campaignParameters.targetToken}`);
                    totalSupply = 0.0000001;
                }
            }
            else {
                try {
                    totalSupply = BN2Number(ERC20Interface.decodeFunctionResult("totalSupply", result[i].returnData)[0], campaign.campaignParameters.decimalsTargetToken);
                }
                catch {
                    log.warn(`Error getting totalSupply for campaign ${campaign.campaignId} and token ${campaign.campaignParameters.targetToken}`);
                    totalSupply = 0.0000001;
                }
            }
            i++;
            const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
            const priceTargetToken = (await pricer.get({
                address: token,
                chainId: campaign.computeChainId,
                // Remove the `c` at the beginning of the symbol and the `v3` at the end
                symbol: symbolToken,
            })) ?? 0;
            let apr = (priceRewardToken * BN2Number(campaign.amount, campaign.campaignParameters.decimalsRewardToken) * YEAR * 100) /
                campaign.campaignParameters.duration /
                (totalSupply * priceTargetToken);
            const rewardTokens = await TokenService.findManyOrCreate([
                { chainId: campaign.chainId, address: campaign.rewardToken },
            ]);
            const rewardToken = rewardTokens[0];
            if (rewardToken.isPoint) {
                apr = apr / 365 / 100;
            }
            else if (parseDistributionType(campaign.campaignParameters) !== DistributionType.DUTCH_AUCTION) {
                apr = getFixedApr(campaign, priceRewardToken, priceTargetToken);
            }
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
