import { decodeCall } from "@/utils/decodeCalls";
import { createCall } from "@/utils/encodeCalls";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor, Round } from "../GenericProcessor";
export class BalancerGaugeProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "gyroscopeToken", call: "lp_token", target: "tokenAddress" }],
        round2: [
            { key: "balanceUnderlyingPoolTokens", call: "balanceOf", target: "gyroscopeToken", metaData: "tokenAddress" },
            { key: "totalSupplyUnderlyingPoolTokens", call: "totalSupply", target: "gyroscopeToken" },
            { key: "poolId", call: "getPoolId", target: "gyroscopeToken" },
            { key: "vault", call: "getVault", target: "gyroscopeToken" },
        ],
        round3: [{ key: "poolTokensRaw", call: "getPoolTokens", target: "vault", metaData: "poolId" }],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
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
        const tokensDisplay = [];
        let indexUpdated = index + this.rounds.round4.length;
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
        const percentageOfSupplyUnderlyingPoolTokens = BN2Number(typeInfo.balanceUnderlyingPoolTokens, 18) / BN2Number(typeInfo.totalSupplyUnderlyingPoolTokens, 18);
        const tvl = tvlUnderlyingPool * percentageOfSupplyUnderlyingPoolTokens;
        const priceTargetToken = tvl / totalSupply;
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
