import { BN2Number, ERC20Interface } from "@sdk";
export function getBlacklistedSupply(index, decimals, blacklist, calls) {
    if (blacklist.length === 0) {
        return 0;
    }
    let blacklistedSupply = 0;
    for (const _ of blacklist) {
        blacklistedSupply += BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", calls[index++])[0], decimals);
    }
    return blacklistedSupply;
}
export function getWhitelistedSupply(index, decimals, blacklist, whitelist, calls) {
    if (whitelist.length === 0) {
        return 0;
    }
    let start = index + blacklist.length;
    let whitelistedSupply = 0;
    for (const _ of whitelist) {
        whitelistedSupply += BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", calls[start++])[0], decimals);
    }
    return whitelistedSupply;
}
