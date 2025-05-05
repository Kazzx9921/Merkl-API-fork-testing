// @ts-nocheck
import { BN2Number, ERC20Interface } from "@sdk";
import { getAddress } from "ethers/lib/utils";
export async function getSiloUserPositions(user, _chainId, mainParameters) {
    /**
     * Fetch user positions
     */
    const sendTokenMapping = {};
    const calls = [];
    let i = 0;
    for (const [sender, tokens] of Object.entries(mainParameters.allForwarders)) {
        for (const token of tokens) {
            if (!sendTokenMapping[`${sender}_${token}`] && !(sendTokenMapping[`${sender}_${token}`] === 0)) {
                calls.push({
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("balanceOf", [user]),
                    target: token,
                });
                calls.push({
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("totalSupply"),
                    target: token,
                });
                sendTokenMapping[`${sender}_${token}`] = i;
                i++;
            }
        }
    }
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (result) => {
                const finalRes = {};
                for (const mainParameter of Object.keys(mainParameters.mainParameters)) {
                    const res = {
                        userPositions: [],
                        symbol: mainParameters.mainParameters[mainParameter].symbol,
                        decimals: mainParameters.mainParameters[mainParameter].decimals,
                        token: mainParameters.mainParameters[mainParameter].token,
                        userTVL: 0,
                    };
                    for (const [sender, tokens] of Object.entries(mainParameters.mainParameters[mainParameter].allForwarders)) {
                        for (const token of tokens) {
                            // Direct Positions
                            const balance = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[2 * sendTokenMapping[`${sender}_${token}`]])[0]);
                            if (balance > 0) {
                                res.userPositions.push({
                                    balance: balance,
                                    token: getAddress(token),
                                    origin: "Direct",
                                    totalSupply: BN2Number(ERC20Interface.decodeFunctionResult("totalSupply", result[1 + 2 * sendTokenMapping[`${sender}_${token}`]])[0], res.decimals),
                                    tvl: mainParameters.mainParameters[mainParameter].priceTargetToken * balance,
                                });
                                res.userTVL += mainParameters.mainParameters[mainParameter].priceTargetToken * balance;
                            }
                        }
                    }
                    if (res.userPositions.length > 0) {
                        finalRes[`5_${mainParameter}`] = { ...res };
                    }
                }
                return finalRes;
            },
        },
    };
}
