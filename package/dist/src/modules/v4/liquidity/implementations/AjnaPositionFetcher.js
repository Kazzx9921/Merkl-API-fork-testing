import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { AjnaSubCampaignType, BN2Number, Campaign, ChainInteractionService, NETWORK_LABELS, POOL_INFO_UTILS, PoolInfoUtilsInterface, } from "@sdk";
import axios from "axios";
const campaignType = Campaign.AJNA;
export class AjnaPositionFetcher {
    fetchPositions = async (chainId, user, opportunities) => {
        opportunities = opportunities.filter(o => o.type === Campaign[campaignType] && o.tokens?.length > 0 && o.chainId === chainId && !!o?.campaigns?.length);
        const calls = [];
        for (const opportunity of opportunities) {
            const campaign = CampaignService.formatAsCampaignParameters(opportunity.campaigns[0]);
            // Call per opportunity
            if (campaign.campaignSubType === AjnaSubCampaignType.lend) {
                calls.push({
                    allowFailure: true,
                    callData: PoolInfoUtilsInterface.encodeFunctionData("poolPricesInfo", [campaign.campaignParameters.poolId]),
                    target: POOL_INFO_UTILS[chainId],
                });
            }
            else {
                calls.push({
                    allowFailure: true,
                    callData: PoolInfoUtilsInterface.encodeFunctionData("borrowerInfo", [
                        campaign.campaignParameters.poolId,
                        user,
                    ]),
                    target: POOL_INFO_UTILS[chainId],
                });
            }
        }
        const res = await ChainInteractionService(chainId).fetchState(calls);
        const result = [];
        for (const [index, opportunity] of opportunities.entries()) {
            // Decoding per opportunity
            const campaign = CampaignService.formatAsCampaignParameters(opportunity.campaigns[0]);
            let userSupply = 0;
            // @Lamicham it's not scalable at all to do this.. We do 1 call per opportunity, sequentially, so it ends up
            // slowing the whole position route
            const resAjna = await axios.get(`https://ajna-api.blockanalitica.com/v4/${NETWORK_LABELS[chainId].toLowerCase()}/wallets/${user.toLowerCase()}/pools/${campaign.campaignParameters.poolId.toLowerCase()}/buckets/?p=1&p_size=50`);
            if (resAjna.data.count === 0) {
                continue;
            }
            if (campaign.campaignSubType === AjnaSubCampaignType.lend) {
                const htpIndex = PoolInfoUtilsInterface.decodeFunctionResult("poolPricesInfo", res[index].returnData)[3];
                const lupIndex = PoolInfoUtilsInterface.decodeFunctionResult("poolPricesInfo", res[index].returnData)[5];
                const threshold = BN2Number(BN2Number(lupIndex, 0) === 0 ? lupIndex : lupIndex.gt(htpIndex) ? lupIndex.add(22) : htpIndex.add(22), 0);
                let nextRoute = null;
                if (!!resAjna.data.next) {
                    nextRoute = `https://${resAjna.data.next.slice(resAjna.data.next.indexOf(":") + 1)}`;
                }
                let position;
                for (position of resAjna.data.results) {
                    if (position.bucket_index < threshold) {
                        userSupply += Number(position.deposit);
                    }
                }
                while (nextRoute !== null) {
                    const resNext = await axios.get(nextRoute);
                    let position;
                    for (position of resNext.data.results) {
                        if (position.bucket_index < threshold) {
                            userSupply += Number(position.deposit);
                        }
                    }
                    if (!!resNext.data.next) {
                        nextRoute = `https://${resNext.data.next.slice(resNext.data.next.indexOf(":") + 1)}`;
                    }
                    else {
                        nextRoute = null;
                    }
                }
            }
            else {
                userSupply = BN2Number(PoolInfoUtilsInterface.decodeFunctionResult("borrowerInfo", res[index].returnData)[0], 18);
            }
            if (userSupply > 0) {
                result.push({
                    flags: {},
                    opportunity,
                    tokens: [
                        {
                            token: opportunity.tokens.find(t => t.address === campaign.campaignParameters.quoteToken),
                            breakdown: [{ type: "balance", value: userSupply }],
                        },
                    ],
                });
            }
        }
        return result;
    };
}
