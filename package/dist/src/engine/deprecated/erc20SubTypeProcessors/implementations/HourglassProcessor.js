import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { BigNumber } from "ethers";
import { GenericProcessor } from "../GenericProcessor";
export class HourglassProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "depositor", call: "depositor", target: "tokenAddress" }],
        round2: [{ key: "underlying", call: "underlying", target: "depositor" }],
        round3: [
            { key: "symbolUnderlyingToken", call: "symbol", target: "underlying" },
            { key: "decimalsUnderlying", call: "decimals", target: "underlying" },
            { key: "balanceOfUnderlying", call: "balanceOf", target: "underlying", metaData: "depositor" },
        ],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceUnderlying = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 0;
        const tvl = BN2Number(typeInfo.balanceOfUnderlying, Number(typeInfo.decimalsUnderlying)) * priceUnderlying;
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            decimalsUnderlying: Number(typeInfo.decimalsUnderlying),
            balanceOfUnderlying: BigNumber.from(typeInfo.balanceOfUnderlying),
            whitelistedSupplyTargetToken,
            tvl: tvl,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            blacklistedSupply,
            totalSupply,
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlying }],
        };
    }
}
