import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { BN2Number, Campaign, ChainInteractionService, ERC20Interface } from "@sdk";
const campaignType = Campaign.ERC20;
export class ERC20PositionFetcher {
    fetchPositions = async (chainId, user, opportunities) => {
        opportunities = opportunities.filter(o => o.type === Campaign[campaignType] && o.tokens?.length > 0 && o.chainId === chainId);
        const calls = [];
        // Generic calls
        for (const opportunity of opportunities) {
            // Call per opportunity
            const _campaign = CampaignService.formatAsCampaignParameters(opportunity.campaigns[0]);
            for (const token of opportunity.tokens) {
                // Call per token
                calls.push({
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("balanceOf", [user]),
                    target: token.address,
                });
            }
        }
        const res = await ChainInteractionService(chainId).fetchState(calls);
        const result = [];
        // Decoding Generic calls
        for (const [index, opportunity] of opportunities.entries()) {
            // Decoding per opportunity
            const _campaign = CampaignService.formatAsCampaignParameters(opportunity.campaigns[0]);
            for (const [subIndex, token] of opportunity.tokens.entries()) {
                // Decoding per token
                const balance = ERC20Interface.decodeFunctionResult("balanceOf", res[index + subIndex].returnData)[0].toString();
                if (BigInt(balance) > 0n) {
                    const position = {
                        flags: {},
                        opportunity,
                        tokens: [
                            {
                                token,
                                breakdown: [{ type: "balance", value: BN2Number(balance, token.decimals) }],
                            },
                        ],
                    };
                    result.push(position);
                }
            }
        }
        return result;
    };
}
