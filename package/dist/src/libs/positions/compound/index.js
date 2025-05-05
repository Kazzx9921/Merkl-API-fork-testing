// @ts-nocheck
import { BN2Number, CTokenInterface, CompFork, CompoundSubCampaignType, ERC20Interface, IonicERC20_INTERFACE, LayerBankERC20Interface, } from "@sdk";
export async function getCompoundUserPositions(user, _chainId, campaigns) {
    /**
     * Fetch user positions
     */
    const calls = [];
    for (const mainParameter of Object.keys(campaigns)) {
        if (campaigns[mainParameter].subtype === CompoundSubCampaignType.supply) {
            calls.push({
                allowFailure: true,
                callData: ERC20Interface.encodeFunctionData("balanceOf", [user]),
                target: campaigns[mainParameter].targetToken,
            });
        }
        switch (campaigns[mainParameter].compFork) {
            case CompFork.Ionic || CompFork.Venus:
                calls.push({
                    allowFailure: true,
                    callData: IonicERC20_INTERFACE.encodeFunctionData("borrowBalanceCurrent", [user]),
                    target: campaigns[mainParameter].targetToken,
                });
                break;
            case CompFork.LayerBank:
                calls.push({
                    allowFailure: true,
                    callData: LayerBankERC20Interface.encodeFunctionData("borrowBalanceOf", [user]),
                    target: campaigns[mainParameter].targetToken,
                });
                break;
            default:
                calls.push({
                    allowFailure: true,
                    callData: CTokenInterface.encodeFunctionData("borrowBalanceStored", [user]),
                    target: campaigns[mainParameter].targetToken,
                });
        }
    }
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (result) => {
                const finalRes = {};
                let i = 0;
                for (const mainParameter of Object.keys(campaigns)) {
                    // Initialization
                    const res = {
                        userPositions: [],
                        symbol: campaigns[mainParameter].symbolUnderlyingToken,
                        decimals: campaigns[mainParameter].decimalsUnderlyingToken,
                        totalSupply: campaigns[mainParameter].totalSupplyTargetToken,
                        userTVL: 0,
                    };
                    let balance = 0;
                    if (campaigns[mainParameter].subtype === CompoundSubCampaignType.supply) {
                        balance = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i])[0], campaigns[mainParameter].decimalsUnderlyingToken);
                    }
                    switch (campaigns[mainParameter].compFork) {
                        case CompFork.Ionic:
                        case CompFork.Venus:
                            balance = BN2Number(IonicERC20_INTERFACE.decodeFunctionResult("borrowBalanceCurrent", result[i])[0], campaigns[mainParameter].decimalsUnderlyingToken);
                            break;
                        case CompFork.LayerBank:
                            balance = BN2Number(LayerBankERC20Interface.decodeFunctionResult("borrowBalanceOf", result[i])[0], campaigns[mainParameter].decimalsUnderlyingToken);
                            break;
                        default:
                            balance = BN2Number(CTokenInterface.decodeFunctionResult("borrowBalanceStored", result[i])[0], campaigns[mainParameter].decimalsUnderlyingToken);
                    }
                    // Direct Positions
                    if (balance > 0) {
                        res.userPositions.push({
                            balance: balance,
                            token: campaigns[mainParameter].targetToken,
                            origin: "Direct",
                            totalSupply: campaigns[mainParameter].totalSupplyTargetToken,
                            tvl: balance * campaigns[mainParameter].tvl,
                        });
                    }
                    // Add to final result if there are positions
                    if (res.userPositions.length > 0) {
                        finalRes[`10_${mainParameter}`] = { ...res };
                    }
                    i++;
                }
                return finalRes;
            },
        },
    };
}
