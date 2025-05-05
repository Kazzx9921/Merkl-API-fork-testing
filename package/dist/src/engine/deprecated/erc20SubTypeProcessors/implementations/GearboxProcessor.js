import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class GearboxProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "stakingToken", call: "stakingToken", target: "tokenAddress", optional: true }],
        round2: [
            { key: "balanceStakingToken", call: "balanceOf", target: "stakingToken", metaData: "tokenAddress" },
            { key: "totalSupplyStakingToken", call: "totalSupply", target: "stakingToken" },
            { key: "decimalsStakingToken", call: "decimals", target: "stakingToken" },
            { key: "underlyingToken", call: "underlying", target: "stakingToken" },
            { key: "totalAssets", call: "totalAssets", target: "stakingToken" },
        ],
        round3: [
            { key: "decimalsUnderlyingToken", call: "decimals", target: "underlyingToken" },
            { key: "symbolUnderlyingToken", call: "symbol", target: "underlyingToken" },
        ],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    async processingRound2(typeInfo) {
        typeInfo.stakingToken = typeInfo.stakingToken ?? typeInfo.tokenAddress;
        typeInfo.isTrade = typeInfo.stakingToken === typeInfo.tokenAddress;
    }
    // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const totalAssets = BN2Number(typeInfo.totalAssets, Number(typeInfo.decimalsUnderlyingToken));
        const underlyingTokenPrice = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 0;
        let tvl = 0;
        let balanceStakingToken = 0;
        let totalSupplyStakingToken = 0;
        let percentageOfSupplyUnderlyingPoolTokens = 0;
        if (!typeInfo.isTrade) {
            balanceStakingToken = BN2Number(typeInfo.balanceStakingToken, Number(typeInfo.decimalsStakingToken));
            totalSupplyStakingToken = BN2Number(typeInfo.totalSupplyStakingToken, Number(typeInfo.decimalsStakingToken));
            percentageOfSupplyUnderlyingPoolTokens = balanceStakingToken / totalSupplyStakingToken;
            tvl = underlyingTokenPrice * Number(totalAssets) * percentageOfSupplyUnderlyingPoolTokens;
        }
        else {
            tvl = Number(totalAssets) * underlyingTokenPrice;
        }
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            balanceStakingToken,
            totalSupplyStakingToken,
            whitelistedSupplyTargetToken,
            percentageOfSupplyUnderlyingPoolTokens,
            totalSupply,
            totalAssets,
            blacklistedSupply,
            tvl: tvl,
            priceTargetToken: priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlyingToken }],
        };
    }
}
