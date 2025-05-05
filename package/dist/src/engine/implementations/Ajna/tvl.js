import { TokenService } from "@/modules/v4/token/token.service";
import { providers } from "@/utils/providers";
import { TvlType } from "@db/api";
import { AjnaSubCampaignType, BN2Number, ChainInteractionService, ERC20Pool__factory, NETWORK_LABELS, PoolInfoUtilsInterface, } from "@sdk";
import { POOL_INFO_UTILS } from "@sdk";
import axios from "axios";
export class AjnaTVLBuilder {
    async build(computeChainId, campaigns) {
        const calls = [];
        for (const campaign of campaigns) {
            if (campaign.campaignParameters.subCampaignType === AjnaSubCampaignType.lend) {
                calls.push({
                    allowFailure: true,
                    callData: PoolInfoUtilsInterface.encodeFunctionData("poolPricesInfo", [campaign.campaignParameters.poolId]),
                    target: POOL_INFO_UTILS[campaign.computeChainId],
                });
            }
        }
        const result = await ChainInteractionService(computeChainId).fetchState(calls);
        let index = 0;
        const tvls = [];
        for (const campaign of campaigns) {
            const res = await axios.get(`https://ajna-api.blockanalitica.com/v4/${NETWORK_LABELS[computeChainId].toLowerCase()}/pools/${campaign.campaignParameters.poolId.toLowerCase()}`);
            let totalSupplyTargetToken = 0;
            let totalComputedTargetToken = 0;
            if (campaign.campaignParameters.subCampaignType === AjnaSubCampaignType.lend) {
                totalSupplyTargetToken = res?.data.results?.quote_token_balance;
                const htpIndex = PoolInfoUtilsInterface.decodeFunctionResult("poolPricesInfo", result[index].returnData)[3];
                const lupIndex = PoolInfoUtilsInterface.decodeFunctionResult("poolPricesInfo", result[index].returnData)[5];
                const threshold = BN2Number(lupIndex, 0) === 0 ? lupIndex : lupIndex.gt(htpIndex) ? lupIndex.add(22) : htpIndex.add(22);
                const InterestEarningSupplyRes = await ERC20Pool__factory.connect(campaign.campaignParameters.poolId, providers[campaign.computeChainId]).depositUpToIndex(threshold);
                totalComputedTargetToken = BN2Number(InterestEarningSupplyRes, 18);
                index++;
            }
            else
                ;
            totalSupplyTargetToken = res?.data.results?.debt;
            totalComputedTargetToken =
                campaign.campaignSubType === AjnaSubCampaignType.lend ? totalComputedTargetToken : totalSupplyTargetToken;
            /** Handling blacklists */
            if (campaign.campaignParameters.blacklist.length !== 0 && totalComputedTargetToken !== 0) {
                let blacklistedSupply = 0;
                let blacklistedPosition;
                for (const blacklisted of campaign.campaignParameters.blacklist) {
                    const res = await axios.get(`https://ajna-api.blockanalitica.com/v4/${NETWORK_LABELS[computeChainId].toLowerCase()}/wallets/${blacklisted}/pools/?days_ago=1&order=-debt&p_size=50`);
                    let nextRoute = null;
                    if (!!res.data.next) {
                        nextRoute = `https://${res.data.next.slice(res.data.next.indexOf(":") + 1)}`;
                    }
                    blacklistedPosition = res.data.results.find((position) => position.pool_address === campaign.campaignParameters.poolId);
                    blacklistedSupply = !blacklistedPosition
                        ? 0
                        : campaign.campaignSubType === AjnaSubCampaignType.lend
                            ? Number(blacklistedPosition.supply)
                            : Number(blacklistedPosition.debt);
                    while (nextRoute !== null && blacklistedSupply !== 0) {
                        const res = await axios.get(nextRoute);
                        blacklistedPosition = res.data.results.find((position) => position.pool_address === campaign.campaignParameters.poolId);
                        blacklistedSupply = !blacklistedPosition
                            ? 0
                            : campaign.campaignSubType === AjnaSubCampaignType.lend
                                ? Number(blacklistedPosition.supply)
                                : Number(blacklistedPosition.debt);
                        if (!!res.data.next) {
                            nextRoute = `https://${res.data.next.slice(res.data.next.indexOf(":") + 1)}`;
                        }
                        else {
                            nextRoute = null;
                        }
                    }
                }
                totalComputedTargetToken -= blacklistedSupply;
            }
            tvls.push({
                campaign,
                tvl: Number(res?.data.results?.tvl),
                tvlBreakdown: [
                    {
                        type: TvlType.TOKEN,
                        identifier: TokenService.hashId({
                            chainId: computeChainId,
                            address: campaign.rewardToken,
                        }),
                        value: totalComputedTargetToken,
                    },
                ],
            });
        }
        return tvls;
    }
}
