import { TokenService } from "@/modules/v4/token/token.service";
import { Pricer } from "@/utils/pricer";
import { BN2Number, Campaign, ChainInteractionService, ETH_ADDRESS, HyperDriveSubCampaignType, HyperdriveTargetInterface, YEAR, } from "@sdk";
export class HyperdriveDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        for (const campaign of campaigns) {
            calls.push({
                allowFailure: false,
                callData: HyperdriveTargetInterface.encodeFunctionData("getPoolInfo"),
                target: campaign.campaignParameters.targetToken,
            }, {
                allowFailure: false,
                callData: HyperdriveTargetInterface.encodeFunctionData("getPoolConfig"),
                target: campaign.campaignParameters.targetToken,
            });
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        let i = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            try {
                const poolInfo = HyperdriveTargetInterface.decodeFunctionResult("getPoolInfo", result[i].returnData)[0];
                const poolConfig = HyperdriveTargetInterface.decodeFunctionResult("getPoolConfig", result[i + 1].returnData)[0];
                // const priceRewardToken =
                //   (await pricer.get({
                //     address: campaign.rewardToken,
                //     chainId,
                //     symbol: campaign.campaignParameters.symbolRewardToken,
                //   })) ?? 0;
                const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
                const lpSupply = BN2Number(poolInfo.lpTotalSupply, 18);
                const longSupply = BN2Number(poolInfo.longsOutstanding, 18);
                const shortSupply = BN2Number(poolInfo.shortsOutstanding, 18);
                const marketSupply = lpSupply * BN2Number(poolInfo.lpSharePrice, 18);
                const priceBaseToken = (poolConfig.baseToken === ETH_ADDRESS
                    ? await pricer.get({
                        chainId,
                        symbol: "ETH",
                    })
                    : await pricer.get({
                        address: campaign.campaignParameters.baseToken,
                        chainId,
                        symbol: campaign.campaignParameters.baseTokenSymbol,
                    })) ?? 0;
                let multiplier = 1;
                if (campaign.campaignType === Campaign.HYPERDRIVELOGPROCESSOR) {
                    const spot_price = ((BN2Number(poolConfig.initialVaultSharePrice, 18) *
                        (BN2Number(poolInfo.shareReserves, 18) - BN2Number(poolInfo.shareAdjustment, 18))) /
                        BN2Number(poolInfo.bondReserves)) **
                        BN2Number(poolConfig.timeStretch);
                    if (spot_price < 1) {
                        multiplier = 1 / (1 - spot_price);
                    }
                }
                const tvl = campaign.campaignSubType === HyperDriveSubCampaignType.LP
                    ? priceBaseToken * marketSupply
                    : campaign.campaignSubType === HyperDriveSubCampaignType.LONG
                        ? priceBaseToken * longSupply
                        : (priceBaseToken * shortSupply) / multiplier;
                let apr = priceRewardToken !== 0
                    ? (priceRewardToken *
                        BN2Number(campaign.amount, campaign.campaignParameters.decimalsRewardToken) *
                        YEAR *
                        100) /
                        campaign.campaignParameters.duration /
                        tvl
                    : 0;
                const rewardTokens = await TokenService.findManyOrCreate([
                    { chainId: campaign.chainId, address: campaign.rewardToken },
                ]);
                const rewardToken = rewardTokens[0];
                apr = rewardToken.isPoint ? apr / 365 / 100 : apr;
                dynamicData.push({
                    ...campaign,
                    totalSupplyTargetToken: marketSupply,
                    tvl: tvl,
                    apr,
                    priceRewardToken: priceRewardToken,
                });
            }
            catch (e) {
                dynamicData.push({
                    ...campaign,
                    totalSupplyTargetToken: 0,
                    tvl: 0,
                    apr: 0,
                    priceRewardToken: 0,
                });
                console.error(e);
            }
            i += 2;
        }
        return dynamicData;
    }
}
// enum AssetIdPrefix {
//   LP = 0,
//   Long = 1,
//   Short = 2,
//   WithdrawalShare = 3,
// }
// function encodeAssetId(prefix: AssetIdPrefix, timestamp: bigint): bigint {
//   // Check if the timestamp is within the valid range
//   const maxTimestamp = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
//   if (timestamp > maxTimestamp) {
//     throw new Error("InvalidTimestamp");
//   }
//   // Encode the asset ID
//   return (BigInt(prefix) << BigInt(248)) | timestamp;
// }
