import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class AssetProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "underlying", call: "underlying", target: "tokenAddress" },
            { key: "exchangeRate", call: "exchangeRate", target: "tokenAddress" },
        ],
        round2: [
            { key: "symbolUnderlyingToken", call: "symbol", target: "underlying", optional: true },
            { key: "decimalsUnderlyingToken", call: "decimals", target: "underlying", optional: true },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    processingRound2(typeInfo) {
        if (typeInfo.underlying === "0x0000000000000000000000000000000000000000") {
            typeInfo.symbolUnderlyingToken = "ETH";
            typeInfo.decimalsUnderlyingToken = "18";
            this.rounds.round2 = [];
        }
    }
    async processingRound5(index, type, typeInfo, calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        let exchangeRate = BN2Number(typeInfo.exchangeRate);
        if (type === Erc20SubType.moonwell || type === Erc20SubType.venus) {
            exchangeRate =
                exchangeRate /
                    10 ** (Number(typeInfo.decimalsUnderlyingToken) - campaign.campaignParameters.decimalsTargetToken);
        }
        const baseTokenPrice = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 0;
        const tvl = baseTokenPrice * whitelistedSupplyTargetToken * exchangeRate;
        const priceTargetToken = baseTokenPrice * exchangeRate;
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            priceTargetToken,
            exchangeRate,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlying }],
        };
    }
}
