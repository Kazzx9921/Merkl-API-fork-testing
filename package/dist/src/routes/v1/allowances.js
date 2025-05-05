import checkQueryAddressValidity from "@/hooks/checkQueryAddressValidity";
import checkQueryChainIdValidity from "@/hooks/checkQueryChainIdValidity";
import { getUserBalances } from "@/libs/tokens/balances";
import { executeSimple } from "@/utils/execute";
import { throwOnInvalidAddress } from "@/utils/throw";
import { ChainId, ERC20Interface, ETH_ADDRESS, registry } from "@sdk";
import { t } from "elysia";
export async function getUserAllowances(user, spenders, tokens, chainId, additionalTokenAddresses) {
    /** Filtered tokens list */
    const filteredTokens = Object.keys(tokens).reduce((filteredTokensList, tokenAddress) => {
        if (tokenAddress === "0x0000000000000000000000000000000000001010" ||
            tokenAddress === ETH_ADDRESS ||
            tokenAddress === registry(ChainId.MAINNET)?.veANGLE)
            return filteredTokensList;
        if (!tokens[tokenAddress]?.wrappingMethod || tokens[tokenAddress]?.wrappingMethod !== "Convex") {
            filteredTokensList[tokenAddress] = tokens[tokenAddress];
        }
        return filteredTokensList;
    }, {});
    const calls = [];
    for (const tokenAddress of Object.keys(filteredTokens)) {
        for (const spender of spenders) {
            calls.push({
                allowFailure: true,
                callData: ERC20Interface.encodeFunctionData("allowance", [user, spender]),
                target: tokenAddress,
            });
        }
    }
    if (!!additionalTokenAddresses && additionalTokenAddresses?.length > 0) {
        for (const tokenAddress of additionalTokenAddresses) {
            for (const spender of spenders) {
                calls.push({
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("allowance", [user, spender]),
                    target: tokenAddress,
                });
            }
        }
    }
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (result) => {
                const res = {};
                let j = 0;
                for (const tokenAddress of Object.keys(filteredTokens)) {
                    const auxRes = {};
                    for (const spender of spenders) {
                        let allowance = "0";
                        try {
                            allowance = ERC20Interface.decodeFunctionResult("allowance", result[j])[0]?.toString();
                        }
                        catch (error) {
                            console.log(`❌ Failed to call allowance for ${tokenAddress} on ${chainId}`);
                        }
                        auxRes[spender] = {
                            allowance: allowance,
                        };
                        j++;
                    }
                    res[tokenAddress] = {
                        ...auxRes,
                        decimals: filteredTokens[tokenAddress]?.decimals,
                    };
                }
                if (!!additionalTokenAddresses && additionalTokenAddresses?.length > 0) {
                    for (const tokenAddress of additionalTokenAddresses) {
                        const auxRes = {};
                        for (const spender of spenders) {
                            let allowance = "0";
                            try {
                                allowance = ERC20Interface.decodeFunctionResult("allowance", result[j])[0]?.toString();
                            }
                            catch (error) {
                                console.log(`❌ Failed to call allowance for ${tokenAddress} on ${chainId}`);
                            }
                            auxRes[spender] = {
                                allowance: allowance,
                            };
                            j++;
                        }
                        res[tokenAddress] = {
                            ...auxRes,
                            decimals: filteredTokens[tokenAddress]?.decimals,
                        };
                    }
                }
                return res;
            },
        },
    };
}
export const query = t.Object({
    additionalTokenAddresses: t.Optional(t.Array(t.String())),
    chainId: t.Numeric(),
    user: t.String(),
});
export const response = t.Record(t.String({ title: "TokenAddress" }), t.Object({ balance: t.Numeric(), decimals: t.Number(), symbol: t.String() }));
export default (app) => app
    .use(checkQueryChainIdValidity())
    .use(checkQueryAddressValidity())
    .get("/allowances", async ({ query }) => {
    const { chainId, user } = query;
    const additionalTokenAddresses = query.additionalTokenAddresses;
    additionalTokenAddresses?.forEach(tokenAddress => throwOnInvalidAddress(tokenAddress));
    return !!additionalTokenAddresses?.length && additionalTokenAddresses?.length > 0
        ? await executeSimple(chainId, getUserBalances(user, chainId, additionalTokenAddresses))
        : await executeSimple(chainId, getUserBalances(user, chainId));
}, {
    query,
    tags: ["Onchain"],
});
