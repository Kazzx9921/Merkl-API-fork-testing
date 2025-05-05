import { CDPMANAGER_ADDRESS, EBTC_ADDRESS, SORTEDCDPS_ADDRESS } from "@/constants";
import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { BN2Number, CdpManagerInterface, ChainInteractionService, SortedCdpsInterface, YEAR, } from "@sdk";
export class BadgerDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        calls.push({
            allowFailure: false,
            callData: CdpManagerInterface.encodeFunctionData("getSystemDebt"),
            target: CDPMANAGER_ADDRESS,
        });
        const dynamicData = [];
        const result = await ChainInteractionService(chainId).fetchState(calls);
        for (const campaign of campaigns) {
            try {
                // Blacklist management
                let blacklistSupply = 0;
                let calls = [];
                for (const blacklisted of [
                    "0xFBC472DdbE6DaE23fc0771518d1791D06a52cf4D",
                    "0x690C74AF48BE029e763E61b4aDeB10E06119D3ba",
                    "0xD0A7A8B98957b9CD3cFB9c0425AbE44551158e9e",
                    "0x68682e8857D24A5Bb71fCd5C6Dc5867731226B62",
                ]) {
                    calls.push({
                        allowFailure: false,
                        callData: SortedCdpsInterface.encodeFunctionData("getCdpsOf", [blacklisted]),
                        target: SORTEDCDPS_ADDRESS,
                    });
                }
                const resCdps = await ChainInteractionService(chainId).fetchState(calls);
                calls = [];
                for (const res of resCdps) {
                    const cdp = SortedCdpsInterface.decodeFunctionResult("getCdpsOf", res.returnData)[0];
                    if (cdp.length !== 0) {
                        calls.push({
                            allowFailure: false,
                            callData: CdpManagerInterface.encodeFunctionData("Cdps", cdp),
                            target: CDPMANAGER_ADDRESS,
                        });
                    }
                }
                const resBlacklist = await ChainInteractionService(chainId).fetchState(calls);
                for (const res of resBlacklist) {
                    const cdpBlacklistedSupply = CdpManagerInterface.decodeFunctionResult("Cdps", res.returnData)[0];
                    blacklistSupply += BN2Number(cdpBlacklistedSupply, campaign.campaignParameters.decimalsTargetToken);
                }
                const totalSupplyTargetToken = BN2Number(CdpManagerInterface.decodeFunctionResult("getSystemDebt", result[0].returnData)[0], campaign.campaignParameters.decimalsTargetToken) - blacklistSupply;
                // const priceRewardToken =
                //   (await pricer.get({
                //     address: campaign.rewardToken,
                //     chainId,
                //     symbol: campaign.campaignParameters.symbolRewardToken,
                //   })) ?? 0;
                const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
                const priceTargetToken = (await pricer.get({
                    address: EBTC_ADDRESS,
                    chainId,
                    symbol: campaign.campaignParameters.symbolTargetToken,
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
