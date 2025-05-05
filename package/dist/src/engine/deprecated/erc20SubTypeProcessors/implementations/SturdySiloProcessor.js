import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class SturdySiloProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "underlying", call: "underlying", target: "tokenAddress" },
            { key: "sharePrice", call: "pricePerShare", target: "tokenAddress" },
            { key: "collateral", call: "collateralContract", target: "tokenAddress" },
        ],
        round2: [
            { key: "symbolUnderlyingToken", call: "symbol", target: "underlying" },
            { key: "symbolCollateral", call: "symbol", target: "collateral" },
            { key: "decimalsUnderlyingToken", call: "decimals", target: "underlying" },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const sharePrice = BN2Number(typeInfo.sharePrice, 18);
        const priceUnderlying = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 1;
        const tvl = sharePrice * totalSupply * priceUnderlying;
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            totalSupply,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            tvl,
            sharePrice,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlying }],
        };
    }
}
