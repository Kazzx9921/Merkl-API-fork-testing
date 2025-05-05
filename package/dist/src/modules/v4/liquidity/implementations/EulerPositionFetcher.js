import { BN2Number, Campaign, ChainInteractionService, ERC20Interface } from "@sdk";
const campaignType = Campaign.EULER;
export class EulerPositionFetcher {
    fetchPositions = async (chainId, user, opportunities) => {
        opportunities = opportunities.filter(o => o.type === Campaign[campaignType] && o.tokens?.length > 0 && o.chainId === chainId);
        const calls = [];
        for (const opportunity of opportunities) {
            // Call per opportunity
            for (const token of opportunity.tokens) {
                calls.push({
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("balanceOf", [user]),
                    target: token.address,
                });
            }
        }
        const res = await ChainInteractionService(chainId).fetchState(calls);
        const result = [];
        for (const [index, opportunity] of opportunities.entries()) {
            // Decoding calls per opportunity
            for (const [subIndex, token] of opportunity.tokens.entries()) {
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
