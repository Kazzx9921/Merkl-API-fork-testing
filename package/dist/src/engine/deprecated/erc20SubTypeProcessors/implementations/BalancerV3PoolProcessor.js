import { generateCardName } from "@/utils/generateCardName";
import { BN2Number, ChainId } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
const matchSingleNumber = (input) => {
    const regex = /^\d+$/;
    return regex.test(input);
};
export class BalancerV3PoolProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "numberTokens", call: "getTokens", target: "tokenAddress" },
            { key: "tokenInfo", call: "getTokenInfo", target: "tokenAddress" },
        ],
        round2: [],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    processingRound2(typeInfo) {
        typeInfo.numberTokens = Number(typeInfo.numberTokens);
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            typeInfo[`token${i}`] = typeInfo.tokenInfo.tokens[i];
            this.rounds.round2 = this.rounds.round2.concat([
                { key: `symbolToken${i}`, call: "symbol", target: `token${i}` },
                { key: `decimalsToken${i}`, call: "decimals", target: `token${i}` },
            ]);
            typeInfo[`balanceToken${i}`] = typeInfo.tokenInfo.balancesRaw[i];
        }
    }
    computeRound3(index, type, typeInfo, calls) {
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            this.rounds.round2 = this.rounds.round2.concat([
                { key: `symbolToken${i}`, call: "symbol", target: `token${i}` },
                { key: `decimalsToken${i}`, call: "decimals", target: `token${i}` },
            ]);
        }
        return super.computeRound3(index, type, typeInfo, calls);
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        let tvl = 0;
        const tokensDisplay = [];
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            let symbol = typeInfo[`symbolToken${i}`];
            const price = (await pricer.get({ symbol: symbol })) ?? 0;
            symbol = symbol.replace("wmooSiloV2Sonic", "");
            typeInfo[`symbolToken${i}`] = symbol.replace(" (wS Market)", "");
            const decimals = Number(typeInfo[`decimalsToken${i}`]);
            tokensDisplay.push({ symbol: symbol, address: typeInfo[`token${i}`] });
            const amount = BN2Number(typeInfo[`balanceToken${i}`], decimals);
            tvl += amount * price;
        }
        const priceTargetToken = tvl / totalSupply;
        // Remove all keys that start with a number or balanceToken
        for (const key in typeInfo) {
            if (key.startsWith("balanceToken") ||
                key.startsWith("decimalsToken") ||
                matchSingleNumber(key) ||
                key.startsWith("tokenInfo")) {
                delete typeInfo[key];
            }
        }
        const symbols = [];
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            symbols.push(typeInfo[`symbolToken${i}`]);
        }
        if (campaign.computeChainId === ChainId.SONIC) {
            typeInfo.protocol = "Beets";
        }
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign, symbols),
            tokensDisplay,
        };
    }
}
