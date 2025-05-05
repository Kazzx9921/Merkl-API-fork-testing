import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { BigNumber } from "ethers";
import { GenericProcessor } from "../GenericProcessor";
export class FluidProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "underlying", call: "underlying", target: "tokenAddress" }],
        round2: [
            { key: "symbolUnderlyingToken", call: "symbol", target: "underlying" },
            { key: "decimalsUnderlyingToken", call: "decimals", target: "underlying" },
        ],
        round3: [{ key: "toAssets", call: "convertToAssets", target: "tokenAddress", metaData: "amount" }],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceUnderlying = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 0;
        const exchangeRate = BN2Number(typeInfo.toAssets, Number(typeInfo.decimalsUnderlyingToken));
        const priceTargetToken = priceUnderlying * exchangeRate;
        const tvl = priceTargetToken * totalSupply;
        return {
            ...typeInfo,
            tvl,
            exchangeRate,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            totalSupply,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlying }],
        };
    }
    processingRound3(typeInfo) {
        typeInfo.amount = BigNumber.from(10).pow(typeInfo.decimalsUnderlyingToken).toString();
    }
}
