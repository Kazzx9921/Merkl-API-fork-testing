import { TokenService } from "@/modules/v4/token/token.service";
import { Pricer } from "@/utils/pricer";
import { BN2Number, ChainInteractionService, MetamorphoInterface, MorphoSubCampaignType, YEAR, morphoAddresses, } from "@sdk";
import axios from "axios";
import { utils } from "ethers";
import { zeroAddress } from "viem";
// TODO add the ABI
const MORPHO_ABI = [
    "function position(bytes32,address) external view returns (uint256,uint128,uint128)",
    "function market(bytes32) external view returns (uint128,uint128,uint128,uint128,uint128,uint128)",
];
export const MORPHO_INTERFACE = new utils.Interface(MORPHO_ABI);
export class MorphoDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        const endpoint = "https://blue-api.morpho.org/graphql";
        const headers = {
            "content-type": "application/json",
        };
        for (const campaign of campaigns) {
            if (campaign.campaignSubType === MorphoSubCampaignType.META) {
                calls.push({
                    allowFailure: true,
                    callData: MetamorphoInterface.encodeFunctionData("totalAssets"),
                    target: campaign.campaignParameters.targetToken,
                }, {
                    allowFailure: true,
                    callData: MetamorphoInterface.encodeFunctionData("totalSupply"),
                    target: campaign.campaignParameters.targetToken,
                });
            }
            if (campaign.campaignSubType === MorphoSubCampaignType.BORROWING_BLUE ||
                campaign.campaignSubType === MorphoSubCampaignType.SUPPLY_BLUE) {
                calls.push({
                    allowFailure: true,
                    callData: MORPHO_INTERFACE.encodeFunctionData("market", [campaign.campaignParameters.marketId]),
                    target: morphoAddresses[campaign.computeChainId] ?? zeroAddress,
                });
            }
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        const dynamicData = [];
        let index = 0;
        for (const campaign of campaigns) {
            // const priceRewardToken =
            //   (await pricer.get({
            //     address: campaign.rewardToken,
            //     chainId,
            //     symbol: campaign.campaignParameters.symbolRewardToken,
            //   })) ?? 0;
            const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
            let tvl = 0;
            let totalSupplyTargetToken = 0;
            if (campaign.campaignSubType === MorphoSubCampaignType.META) {
                const totalAssets = BN2Number(MetamorphoInterface.decodeFunctionResult("totalAssets", result[index++].returnData)[0], campaign.campaignParameters.decimalsUnderlyingToken);
                const totalSupply = BN2Number(MetamorphoInterface.decodeFunctionResult("totalSupply", result[index++].returnData)[0], campaign.campaignParameters.decimalsTargetToken);
                const priceAsset = (await pricer.get({
                    symbol: campaign.campaignParameters.symbolUnderlyingToken,
                })) ?? 0;
                tvl = priceAsset * totalAssets;
                totalSupplyTargetToken = totalSupply;
            }
            if (campaign.campaignSubType === MorphoSubCampaignType.SUPPLY_BLUE) {
                const totalSupplyAssets = BN2Number(MORPHO_INTERFACE.decodeFunctionResult("market", result[index++].returnData)[0], Number(campaign.campaignParameters.decimalsLoanToken));
                const priceAsset = (await pricer.get({
                    symbol: campaign.campaignParameters.symbolLoanToken,
                })) ?? 0;
                tvl = priceAsset * totalSupplyAssets;
                totalSupplyTargetToken = totalSupplyAssets;
            }
            if (campaign.campaignSubType === MorphoSubCampaignType.BORROWING_BLUE) {
                const totalBorrowAssets = BN2Number(MORPHO_INTERFACE.decodeFunctionResult("market", result[index++].returnData)[2], Number(campaign.campaignParameters.decimalsLoanToken));
                const priceAsset = (await pricer.get({
                    symbol: campaign.campaignParameters.symbolLoanToken,
                })) ?? 0;
                tvl = priceAsset * totalBorrowAssets;
                totalSupplyTargetToken = totalBorrowAssets;
            }
            if (campaign.campaignSubType === MorphoSubCampaignType.COLLATERAL_BLUE) {
                const graphqlQueryMarket = {
                    query: `query MarketByUniqueKey($uniqueKey: String!, $chainId: Int) {
              marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {
                state {
                  borrowAssetsUsd
                  borrowAssets
                  collateralAssets
                  collateralAssetsUsd
                  supplyAssets
                  supplyAssetsUsd
                }
              }
            }
            `,
                    variables: {
                        uniqueKey: campaign.campaignParameters.marketId,
                        chainId: campaign.computeChainId,
                    },
                };
                try {
                    const response = await axios({
                        url: endpoint,
                        method: "post",
                        headers: headers,
                        data: graphqlQueryMarket,
                    });
                    tvl = response.data.data.marketByUniqueKey.state.collateralAssetsUsd;
                    totalSupplyTargetToken = response.data.data.marketByUniqueKey.state.collateralAssets;
                }
                catch (e) {
                    console.log(e);
                }
            }
            let apr = (priceRewardToken * BN2Number(campaign.amount, campaign.campaignParameters.decimalsRewardToken) * YEAR * 100) /
                campaign.campaignParameters.duration /
                tvl;
            const rewardTokens = await TokenService.findManyOrCreate([
                { chainId: campaign.chainId, address: campaign.rewardToken },
            ]);
            const rewardToken = rewardTokens[0];
            apr = rewardToken.isPoint ? apr / 365 / 100 : apr;
            dynamicData.push({
                ...campaign,
                apr,
                totalSupplyTargetToken,
                tvl: tvl,
                priceRewardToken: priceRewardToken,
            });
        }
        return dynamicData;
    }
}
