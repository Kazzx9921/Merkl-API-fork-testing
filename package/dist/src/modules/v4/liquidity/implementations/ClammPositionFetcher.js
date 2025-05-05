import { getClammUserPositions } from "@/libs/positions/clamm";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { Campaign } from "@sdk";
const campaignType = Campaign.CLAMM;
export class ClammPositionFetcher {
    fetchPositions = async (chainId, user, opportunities) => {
        opportunities = opportunities.filter(o => o.type === Campaign[campaignType] && o.tokens?.length > 0 && o.chainId === chainId);
        // AMM => pool address => pool data
        const poolsByAmm = {};
        for (const opportunity of opportunities) {
            // Call per opportunity
            const campaign = CampaignService.formatAsCampaignParameters(opportunity.campaigns[0]);
            if (!poolsByAmm[campaign.campaignParameters.amm]) {
                poolsByAmm[campaign.campaignParameters.amm] = {};
            }
            if (!poolsByAmm[campaign.campaignParameters.amm][campaign.campaignParameters.poolAddress]) {
                poolsByAmm[campaign.campaignParameters.amm][campaign.campaignParameters.poolAddress] = {
                    token0: campaign.campaignParameters.token0,
                    token1: campaign.campaignParameters.token1,
                    symbolToken0: campaign.campaignParameters.symbolToken0,
                    symbolToken1: campaign.campaignParameters.symbolToken1,
                    decimalsToken0: campaign.campaignParameters.decimalsToken0,
                    decimalsToken1: campaign.campaignParameters.decimalsToken1,
                    mainParameter: campaign.mainParameter,
                    forwarders: {},
                };
            }
        }
        const clammPositions = await getClammUserPositions(user, chainId, poolsByAmm, false);
        const result = [];
        for (const opportunity of opportunities) {
            const campaign = CampaignService.formatAsCampaignParameters(opportunity.campaigns[0]);
            const clammPosition = clammPositions[`2_${campaign.campaignParameters.poolAddress}`];
            const poolData = poolsByAmm[campaign.campaignParameters.amm][campaign.campaignParameters.poolAddress];
            if (!!clammPosition) {
                const position = {
                    flags: {},
                    opportunity,
                    tokens: [
                        {
                            token: opportunity.tokens.filter(t => t.address === poolData.token0)?.[0],
                            breakdown: [
                                { type: "balance", value: clammPosition.userBalanceToken0 },
                                { type: "liquidity", value: clammPosition.userInRangeLiquidity },
                            ],
                        },
                        {
                            token: opportunity.tokens.filter(t => t.address === poolData.token1)?.[0],
                            breakdown: [
                                { type: "balance", value: clammPosition.userBalanceToken1 },
                                { type: "liquidity", value: clammPosition.userInRangeLiquidity },
                            ],
                        },
                    ],
                };
                result.push(position);
            }
        }
        return result;
    };
}
