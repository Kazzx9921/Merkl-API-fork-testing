import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { ChainId, ChainInteractionService, ETH_ADDRESS, ETH_ZKSYNC_ADDRESS, Erc20__factory, EthOnZKSync_INTERFACE, NETWORK_LABELS, } from "@sdk";
import { isAddress } from "viem";
export async function getOnlyUserBalance(chainId, userAddress, tokenAddresses) {
    const calls = [];
    const ERC20_Interface = Erc20__factory.createInterface();
    for (const tokenAddress of tokenAddresses.filter(t => isAddress(t))) {
        if (chainId === ChainId.ZKSYNC && tokenAddress === ETH_ZKSYNC_ADDRESS) {
            calls.push({
                allowFailure: true,
                callData: EthOnZKSync_INTERFACE.encodeFunctionData("balanceOf", [userAddress]),
                target: tokenAddress,
            });
        }
        else {
            calls.push({
                allowFailure: true,
                callData: ERC20_Interface.encodeFunctionData("balanceOf", [userAddress]),
                target: tokenAddress,
            });
        }
    }
    const result = await ChainInteractionService(chainId).fetchState(calls);
    const res = {};
    for (let j = 0; j < tokenAddresses.length; j++) {
        const tokenAddress = tokenAddresses[j];
        let balance = "0";
        try {
            balance = ERC20_Interface.decodeFunctionResult("balanceOf", result[j].returnData)[0]?.toString();
        }
        catch (_error) {
            log.local(`❌ Failed to call balanceOf for ${tokenAddress} on ${NETWORK_LABELS[chainId]}`);
        }
        res[tokenAddress] = {
            balance: balance,
            decimals: 0,
            symbol: "",
        };
    }
    return res;
}
export async function getUserBalances(user, chainId, tokenAddresses) {
    const tokens = await TokenService.findManyObjectPerAddress({ chainId, verified: true, items: 0 });
    if (!tokens) {
        log.debug("❌ Chain not supported");
        return {
            cached: false,
            call: {
                callData: [],
                handler: () => { },
                reducer: async () => {
                    return {};
                },
            },
        };
    }
    const tokenListAddresses = Object.keys(tokens).filter(t => t !== ETH_ADDRESS);
    const ERC20_Interface = Erc20__factory.createInterface();
    const calls = [];
    for (const tokenAddress of tokenListAddresses) {
        calls.push({
            allowFailure: true,
            callData: ERC20_Interface.encodeFunctionData("balanceOf", [user]),
            target: tokenAddress,
        });
    }
    /** Only if the route is called from mainnet */
    if (!!tokenAddresses && tokenAddresses?.length > 0) {
        for (const externalTokenAddress of tokenAddresses) {
            calls.push({
                allowFailure: true,
                callData: ERC20_Interface.encodeFunctionData("balanceOf", [user]),
                target: externalTokenAddress,
            }, {
                allowFailure: true,
                callData: ERC20_Interface.encodeFunctionData("decimals"),
                target: externalTokenAddress,
            }, {
                allowFailure: true,
                callData: ERC20_Interface.encodeFunctionData("symbol"),
                target: externalTokenAddress,
            });
        }
    }
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (result) => {
                const res = {};
                for (let j = 0; j < tokenListAddresses.length; j++) {
                    const tokenAddress = tokenListAddresses[j];
                    let balance = "0";
                    try {
                        balance = ERC20_Interface.decodeFunctionResult("balanceOf", result[j])[0]?.toString();
                    }
                    catch (_error) {
                        log.local(`❌ Failed to call balanceOf for ${tokenAddress} on ${chainId}`);
                    }
                    res[tokenAddress] = {
                        balance: balance,
                        decimals: tokens[tokenAddress]?.decimals,
                        symbol: tokens[tokenAddress]?.symbol,
                    };
                }
                if (!!tokenAddresses && tokenAddresses?.length > 0) {
                    for (let j = 0; j < tokenAddresses.length; j++) {
                        const externalTokenAddress = tokenAddresses[j];
                        try {
                            res[externalTokenAddress] = {
                                balance: ERC20_Interface.decodeFunctionResult("balanceOf", result[Object.keys(tokens)?.length + 3 * j])[0]?.toString(),
                                decimals: ERC20_Interface.decodeFunctionResult("decimals", result[Object.keys(tokens)?.length + 3 * j + 1])[0]?.toString(),
                                symbol: ERC20_Interface.decodeFunctionResult("symbol", result[Object.keys(tokens)?.length + 3 * j + 2])[0]?.toString(),
                            };
                        }
                        catch (error) {
                            // If it fails we don't return the token info
                            log.local(`❌ Failed to call balanceOf, decimals or symbol for ${externalTokenAddress} on ${chainId}`);
                        }
                    }
                }
                return res;
            },
        },
    };
}
