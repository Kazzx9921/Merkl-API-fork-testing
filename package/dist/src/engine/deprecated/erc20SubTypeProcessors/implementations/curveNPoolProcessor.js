import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
import { getCrossCurveTokenPrice } from "../helpers/getCrossCurveTokenPrice";
const matchSingleNumber = (input) => {
    const regex = /^\d+$/;
    return regex.test(input);
};
export class CurveNPoolProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "numberTokens", call: "N_COINS", target: "tokenAddress" }],
        round2: [],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    processingRound2(typeInfo) {
        typeInfo.numberTokens = Number(typeInfo.numberTokens);
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            typeInfo[`${i}`] = i.toString();
            this.rounds.round2 = this.rounds.round2.concat([
                { key: `token${i}`, call: "coins", target: "tokenAddress", metaData: i.toString() },
            ]);
        }
    }
    processingRound3(typeInfo) {
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            this.rounds.round3 = this.rounds.round3.concat([
                { key: `symbolToken${i}`, call: "symbol", target: `token${i}` },
                { key: `decimalsToken${i}`, call: "decimals", target: `token${i}` },
                { key: `balanceToken${i}`, call: "balances", target: "tokenAddress", metaData: i.toString() },
            ]);
        }
    }
    computeRound3(index, type, typeInfo, calls) {
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            this.rounds.round2 = this.rounds.round2.concat([
                { key: `token${i}`, call: "coins", target: "tokenAddress", metaData: i.toString() },
            ]);
        }
        return super.computeRound3(index, type, typeInfo, calls);
    }
    computeRound4(index, type, typeInfo, calls, campaign) {
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            this.rounds.round3 = this.rounds.round3.concat([
                { key: `symbolToken${i}`, call: "symbol", target: `token${i}` },
                { key: `decimalsToken${i}`, call: "decimals", target: `token${i}` },
                { key: `balanceToken${i}`, call: "balances", target: "tokenAddress", metaData: i.toString() },
            ]);
        }
        return super.computeRound4(index, type, typeInfo, calls, campaign);
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        let tvl = 0;
        // Hardocded in case we don't find it
        let hardcodedSymbol = "unknown";
        if (typeInfo.name.includes("BTC"))
            hardcodedSymbol = "BTC";
        if (typeInfo.name.includes("ETH"))
            hardcodedSymbol = "ETH";
        if (typeInfo.name.includes("STABLE"))
            hardcodedSymbol = "USDC";
        const tokensDisplay = [];
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            const symbol = typeInfo[`symbolToken${i}`];
            let price = (await pricer.get({ symbol: symbol })) ?? 0;
            if (price === 0) {
                // For cross curve
                price = await getCrossCurveTokenPrice(typeInfo[`token${i}`]);
                if (price === 0) {
                    const parsedSymbol = symbol.split("_")[0].slice(1);
                    price = (await pricer.get({ symbol: parsedSymbol })) ?? 0;
                    if (price === 0) {
                        price = (await pricer.get({ symbol: hardcodedSymbol })) ?? 0;
                    }
                }
            }
            tokensDisplay.push({ symbol: symbol, address: typeInfo[`token${i}`] });
            const decimals = Number(typeInfo[`decimalsToken${i}`]);
            const amount = BN2Number(typeInfo[`balanceToken${i}`], decimals);
            tvl += amount * price;
        }
        const priceTargetToken = tvl / totalSupply;
        // Remove all keys that start with a number or balanceToken
        for (const key in typeInfo) {
            if (key.startsWith("balanceToken") || key.startsWith("decimalsToken") || matchSingleNumber(key)) {
                delete typeInfo[key];
            }
        }
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay,
        };
    }
}
