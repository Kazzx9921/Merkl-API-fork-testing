// @ts-nocheck
import { BN2Number, ChainInteractionService, EigenLayerStrategyInterface, EigenLayerStrategy__factory, } from "@sdk";
export async function getEigenLayerUserPositions(user, _chainId, campaigns) {
    /**
     * Fetch user positions
     */
    const calls = [];
    for (const mainParameter of Object.keys(campaigns)) {
        calls.push({
            allowFailure: true,
            callData: EigenLayerStrategyInterface.encodeFunctionData("shares", [user]),
            target: campaigns[mainParameter].targetToken,
        });
    }
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (result) => {
                let j = 0;
                const finalRes = {};
                for (const campaignId of Object.keys(campaigns)) {
                    let userShares = 0;
                    let userSupply = 0;
                    const strategy = campaigns[campaignId].targetToken;
                    userShares = EigenLayerStrategyInterface.decodeFunctionResult("shares", result[j++])[0];
                    userSupply = BN2Number(await EigenLayerStrategy__factory.connect(strategy, ChainInteractionService(_chainId).provider()).sharesToUnderlying(userShares), campaigns[campaignId].decimals);
                    const res = {
                        userPositions: [],
                        decimals: campaigns[campaignId].decimals,
                        totalSupply: campaigns[campaignId].totalSupplyTargetToken,
                        userTVL: 0,
                    };
                    if (userSupply > 0) {
                        res.userPositions.push({
                            balance: userSupply,
                            token: strategy,
                            origin: "Direct",
                            totalSupply: campaigns.campaignId.totalSupplyTargetToken,
                            tvl: campaigns[campaignId].tvl,
                        });
                        // to modify
                    }
                    // Add to final result if there are positions
                    if (res.userPositions.length > 0) {
                        finalRes[`14_${campaignId}`] = { ...res };
                    }
                }
                return finalRes;
            },
        },
    };
}
