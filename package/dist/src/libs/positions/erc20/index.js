import { BN2Number, ERC20Interface } from "@sdk";
import { getAddress } from "ethers/lib/utils";
export async function getERC20UserPositions(user, _chainId, tokens) {
    /**
     * Fetch user positions
     */
    const calls = [];
    for (const token of Object.keys(tokens)) {
        calls.push({
            allowFailure: true,
            callData: ERC20Interface.encodeFunctionData("balanceOf", [user]),
            target: token,
        });
    }
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (result) => {
                const finalRes = {};
                let i = 0;
                for (const token of Object.keys(tokens)) {
                    // Initialization
                    const res = {
                        userPositions: [],
                        symbol: tokens[token].symbol,
                        decimals: tokens[token].decimals,
                        totalSupply: tokens[token].totalSupplyTargetToken,
                        userTVL: 0,
                    };
                    // Direct Positions
                    const balance = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i])[0], tokens[token].decimals);
                    if (balance > 0) {
                        res.userPositions.push({
                            balance: balance,
                            token: getAddress(token),
                            origin: "Direct",
                            totalSupply: tokens[token].totalSupplyTargetToken,
                            tvl: balance * tokens[token].priceTargetToken,
                        });
                        res.userTVL += balance * tokens[token].priceTargetToken;
                    }
                    // TODO - Add staking contract positions
                    // Add to final result if there are positions
                    if (res.userPositions.length > 0) {
                        finalRes[`1_${token}`] = { ...res };
                    }
                    i++;
                }
                return finalRes;
            },
        },
    };
}
