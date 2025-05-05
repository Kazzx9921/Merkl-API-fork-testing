import { decodeCall } from "@/utils/decodeCalls";
import { createCall } from "@/utils/encodeCalls";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor, Round } from "../GenericProcessor";
export class BEXRewardGaugeProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "gyroscopeToken", call: "lp_token", target: "tokenAddress" }],
        round2: [
            { key: "balanceUnderlyingPoolTokens", call: "totalAssets", target: "tokenAddress" },
            { key: "totalSupplyUnderlyingPoolTokens", call: "totalSupply", target: "gyroscopeToken" },
            { key: "poolId", call: "getPoolId", target: "gyroscopeToken" },
            { key: "vault", call: "getVault", target: "gyroscopeToken" },
            { key: "poolHolderBalance", call: "balanceOf", target: "gyroscopeToken", metaData: "poolHolder" },
        ],
        round3: [
            { key: "poolTokensRaw", call: "getPoolTokens", target: "vault", metaData: "poolId" },
            { key: "vaultBalance", call: "balanceOf", target: "gyroscopeToken", metaData: "vault" },
        ],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    processingRound2(typeInfo) {
        typeInfo.poolHolder = "0xC2BaA8443cDA8EBE51a640905A8E6bc4e1f9872c";
    }
    processingRound4(typeInfo) {
        const tokens = typeInfo.poolTokensRaw[0];
        const balances = typeInfo.poolTokensRaw[1];
        let i = 0;
        const poolTokens = [];
        for (const token of tokens) {
            poolTokens.push({
                token: token,
                balance: balances[i].toString(),
            });
            i++;
            typeInfo.poolTokens = poolTokens;
        }
    }
    async processingRound5(index, type, typeInfo, calls, campaign, pricer) {
        const poolTokensinfo = {};
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        let tvlUnderlyingPool = 0;
        const symbols = [];
        let indexUpdated = index + this.rounds.round4.length;
        const tokensDisplay = [];
        for (const poolToken of typeInfo.poolTokens) {
            const symbol = decodeCall(calls, indexUpdated++, "symbol");
            const decimals = decodeCall(calls, indexUpdated++, "decimals");
            poolTokensinfo[poolToken.token] = {
                symbol: symbol,
                decimals: decimals,
                amountInPool: BN2Number(poolToken.balance, decimals),
                price: (await pricer.get({ symbol: symbol })) ?? 0,
            };
            tvlUnderlyingPool += poolTokensinfo[poolToken.token].price * poolTokensinfo[poolToken.token].amountInPool;
            symbols.push(symbol);
            tokensDisplay.push({ symbol: symbol, address: poolToken.token });
        }
        let adjustedPoolTotalSupply = BN2Number(typeInfo.totalSupplyUnderlyingPoolTokens, 18);
        // if (type === Erc20SubType.beratrax_vault) {
        //   // Weird edge case where a lot of the supply is in a weird contract
        //   adjustedPoolTotalSupply -= BN2Number(typeInfo.poolHolderBalance, 18);
        // }
        // if (type === Erc20SubType.beraborrow_gauge) {
        // Remove tokens in the vault from the total supply
        adjustedPoolTotalSupply -= BN2Number(typeInfo.vaultBalance, 18);
        let percentageOfSupplyUnderlyingPoolTokens = 1;
        if (adjustedPoolTotalSupply > 0) {
            percentageOfSupplyUnderlyingPoolTokens =
                BN2Number(typeInfo.balanceUnderlyingPoolTokens, 18) / adjustedPoolTotalSupply;
        }
        const tvl = tvlUnderlyingPool * percentageOfSupplyUnderlyingPoolTokens;
        const priceTargetToken = tvl / totalSupply;
        // If one of the symbols in the symbol list contains 2 of the other symbols of the list, remove it
        // It's a weird edge case that happens with the BEX pools
        const symbolToRemove = symbols.find(symbol => symbols.filter(s => symbol.includes(s)).length > 1);
        if (symbolToRemove) {
            symbols.splice(symbols.indexOf(symbolToRemove), 1);
        }
        return {
            ...typeInfo,
            totalSupply: totalSupply,
            poolTokens: poolTokensinfo,
            tvl: tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken: priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign, symbols),
            tokensDisplay,
        };
    }
    computeRound4(index, type, typeInfo, calls, campaign) {
        // This is to enforce type checking
        const blacklistedLiquidityCalls = this.generateBlackListCall(type, typeInfo, campaign);
        this.decodePreviousRound(Round.three, calls, typeInfo, type, index);
        this.processingRound4(typeInfo);
        const poolCalls = [createCall(typeInfo.tokenAddress, "totalSupply")];
        for (const poolToken of typeInfo.poolTokens) {
            poolCalls.push(createCall(poolToken.token, "symbol"));
            poolCalls.push(createCall(poolToken.token, "decimals"));
        }
        return {
            type: type,
            calls: blacklistedLiquidityCalls.concat(poolCalls),
            typeInfo: {
                ...typeInfo,
            },
        };
    }
}
