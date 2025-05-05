import { decodeCall } from "@/utils/decodeCalls";
import { createCall } from "@/utils/encodeCalls";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { utils } from "ethers";
import { GenericProcessor, Round } from "../GenericProcessor";
export class AuraProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "balancerPool", call: "underlying", target: "tokenAddress" },
            { key: "auraOperator", call: "operator", target: "tokenAddress" },
            { key: "pid", call: "pid", target: "tokenAddress" },
        ],
        round2: [
            { key: "poolId", call: "getPoolId", target: "balancerPool" },
            { key: "vault", call: "getVault", target: "balancerPool" },
            { key: "totalSupplyBalancerPool", call: "totalSupply", target: "balancerPool" },
            { key: "gaugeContract", call: "poolInfo", target: "auraOperator", metaData: "pid" },
            { key: "auraStaker", call: "staker", target: "auraOperator" },
        ],
        round3: [
            { key: "poolTokensRaw", call: "getPoolTokens", target: "vault", metaData: "poolId" },
            { key: "gaugeBalance", call: "balanceOf", target: "balancerPool", metaData: "gaugeContract" },
            { key: "auraBalance", call: "balanceOf", target: "gaugeContract", metaData: "auraStaker" },
            { key: "vaultBalance", call: "balanceOf", target: "balancerPool", metaData: "vault" },
            { key: "totalSupplyGauge", call: "totalSupply", target: "gaugeContract" },
        ],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    processingRound4(typeInfo) {
        const tokens = typeInfo.poolTokensRaw[0];
        const balances = typeInfo.poolTokensRaw[1];
        let i = 0;
        const poolTokens = [];
        for (const token of tokens) {
            if (token !== typeInfo.tokenAddress) {
                poolTokens.push({
                    token: token,
                    balance: balances[i].toString(),
                    amountInPool: 0,
                    symbol: "",
                    decimals: 0,
                    price: 0,
                });
                i++;
                typeInfo.poolTokens = poolTokens;
            }
        }
    }
    async processingRound5(index, type, typeInfo, calls, campaign, pricer) {
        let { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const vaultBalance = BN2Number(typeInfo.vaultBalance, 18);
        const vaultIndex = campaign.campaignParameters.blacklist
            ?.map(b => utils.getAddress(b))
            ?.indexOf(utils.getAddress(typeInfo.vault));
        if (vaultIndex !== -1) {
            blacklistedSupply -= BN2Number(decodeCall(calls, index + vaultIndex, "balanceOf"), campaign.campaignParameters.decimalsTargetToken); // The vault balance was already removed from the total supply
        }
        const totalSupplyBalancerPool = BN2Number(typeInfo.totalSupplyBalancerPool, 18) - vaultBalance;
        const gaugeBalance = BN2Number(typeInfo.gaugeBalance, 18);
        const auraBalance = BN2Number(typeInfo.auraBalance, 18);
        const totalSupplyGauge = BN2Number(typeInfo.totalSupplyGauge, 18);
        let poolTvl = 0;
        const tokensDisplay = [];
        const symbols = [];
        let indexUpdated = index + this.rounds.round4.length;
        for (const poolToken of typeInfo.poolTokens) {
            poolToken.symbol = decodeCall(calls, indexUpdated++, "symbol");
            poolToken.decimals = decodeCall(calls, indexUpdated++, "decimals");
            poolToken.amountInPool = BN2Number(poolToken.balance, poolToken.decimals);
            poolToken.price = (await pricer.get({ symbol: poolToken.symbol })) ?? 0;
            poolTvl += poolToken.price * poolToken.amountInPool;
            symbols.push(poolToken.symbol);
            tokensDisplay.push({ symbol: poolToken.symbol, address: poolToken.token });
        }
        const percentageOfSupplyInAura = (auraBalance / totalSupplyGauge) * (gaugeBalance / totalSupplyBalancerPool);
        const tvl = poolTvl * percentageOfSupplyInAura;
        const priceTargetToken = tvl / totalSupplyBalancerPool;
        return {
            ...typeInfo,
            totalSupplyBalancerPool,
            gaugeBalance,
            auraBalance,
            totalSupplyGauge,
            totalSupply,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            tvl: tvl,
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
        const poolCalls = this.encodeNextRound(Round.four, type, typeInfo);
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
