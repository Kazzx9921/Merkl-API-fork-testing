import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { BN2Number, ChainInteractionService, ERC20Interface, Forwarder, YEAR, } from "@sdk";
import { utils } from "ethers";
const SILO_ABI = [
    "function getAssets() view returns (address[])",
    "function assetStorage(address) external view returns (address,address,address,uint256,uint256,uint256)",
    "function siloAsset() view returns (address)",
];
export const SILO_INTERFACE = new utils.Interface(SILO_ABI);
export class SiloDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const siloAssetsCalls = [];
        for (const campaign of campaigns) {
            if (campaign.campaignParameters.whitelist.length === 1) {
                siloAssetsCalls.push({
                    allowFailure: true,
                    callData: SILO_INTERFACE.encodeFunctionData("siloAsset"),
                    target: campaign.campaignParameters.whitelist[0],
                });
            }
        }
        const siloAssetsCallsResults = await ChainInteractionService(chainId).fetchState(siloAssetsCalls);
        const calls = [];
        let i = 0;
        for (const campaign of campaigns) {
            for (const forwarder of campaign.campaignParameters.forwarders) {
                if (forwarder.forwarderType === Forwarder.ERC20) {
                    calls.push({
                        allowFailure: true,
                        callData: SILO_INTERFACE.encodeFunctionData("assetStorage", [campaign.campaignParameters.targetToken]),
                        target: forwarder.sender,
                    });
                    if (campaign.campaignParameters.whitelist.length === 1) {
                        const siloAsset = SILO_INTERFACE.decodeFunctionResult("siloAsset", siloAssetsCallsResults[i].returnData)[0];
                        calls.push({
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("symbol"),
                            target: siloAsset,
                        });
                    }
                }
            }
            if (campaign.campaignParameters.whitelist.length === 1) {
                i++;
            }
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        i = 0;
        let j = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            // const priceRewardToken =
            //   (await pricer.get({
            //     address: campaign.rewardToken,
            //     chainId,
            //     symbol: campaign.campaignParameters.symbolRewardToken,
            //   })) ?? 0;
            const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
            const priceTargetToken = (await pricer.get({
                address: campaign.campaignParameters.targetToken,
                chainId,
                symbol: campaign.campaignParameters.symbolTargetToken,
            })) ?? 0;
            let totalSupplyTargetToken = 0;
            const forwarders = (campaign.campaignParameters.forwarders ??
                []);
            for (const _forwarder of forwarders) {
                if (_forwarder.forwarderType === Forwarder.ERC20) {
                    try {
                        totalSupplyTargetToken += BN2Number(SILO_INTERFACE.decodeFunctionResult("assetStorage", result[i].returnData)[3 + campaign.campaignSubType], campaign.campaignParameters.decimalsTargetToken);
                        i++;
                    }
                    catch (e) {
                        log.local(`Issue with ${_forwarder.sender} on ${campaign.campaignParameters.targetToken}`);
                        i++;
                    }
                    if (campaign.campaignParameters.whitelist.length === 1) {
                        const siloAsset = SILO_INTERFACE.decodeFunctionResult("siloAsset", siloAssetsCallsResults[j].returnData)[0];
                        const siloAssetSymbol = ERC20Interface.decodeFunctionResult("symbol", result[i++].returnData)[0];
                        // @BaptistG not sure to get this
                        forwarders[0].siloAsset = siloAsset;
                        forwarders[0].siloAssetSymbol = siloAssetSymbol;
                    }
                }
            }
            if (campaign.campaignParameters.whitelist.length === 1) {
                j++;
            }
            // Remove all silo forwarders
            campaign.campaignParameters.forwarders = forwarders.filter(forwarder => forwarder.forwarderType !== Forwarder.SILO);
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
