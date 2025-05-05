import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { Campaign } from "@sdk";
import { utils } from "ethers";
import { LiquidityRepository } from "../liquidity.repository";
const campaignType = Campaign.DOLOMITE;
export class DolomitePositionFetcher {
    fetchPositions = async (chainId, user, opportunities) => {
        opportunities = opportunities.filter(o => o.type === Campaign[campaignType] && o.tokens?.length > 0 && o.chainId === chainId);
        const dolomitePositions = await LiquidityRepository.findManyDolomitePositions(chainId, user);
        // Generic calls
        for (const opportunity of opportunities) {
            // Call per opportunity
            const _campaign = CampaignService.formatAsCampaignParameters(opportunity.campaigns[0]);
            for (const _token of opportunity.tokens) {
                // Call per token
            }
        }
        const result = [];
        // Decoding Generic calls
        for (const [_index, opportunity] of opportunities.entries()) {
            const campaign = CampaignService.formatAsCampaignParameters(opportunity.campaigns[0]);
            // Decoding per opportunity
            const positionIndex = dolomitePositions.findIndex(y => utils.getAddress(y.token.id) === campaign.campaignParameters.targetToken);
            const position = positionIndex >= 0 ? dolomitePositions[positionIndex] : undefined;
            if (!position)
                continue;
            const borrowBalance = Number.parseFloat(position.token.borrowLiquidity);
            const supplyBalance = Number.parseFloat(position.token.supplyLiquidity);
            result.push({
                flags: {},
                opportunity,
                tokens: [
                    {
                        token: opportunity.tokens.find(t => utils.getAddress(t.address) === campaign.campaignParameters.targetToken),
                        breakdown: [
                            { type: "borrowed", value: borrowBalance },
                            { type: "supplied", value: supplyBalance },
                        ],
                    },
                ],
            });
        }
        return result;
    };
}
