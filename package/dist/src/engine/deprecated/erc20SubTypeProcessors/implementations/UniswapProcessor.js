import { generateCardName } from "@/utils/generateCardName";
import { log } from "@/utils/logger";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class UniswapProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "token0", call: "token0", target: "tokenAddress" },
            { key: "token1", call: "token1", target: "tokenAddress" },
        ],
        round2: [
            { key: "symbolToken0", call: "symbol", target: "token0" },
            { key: "symbolToken1", call: "symbol", target: "token1" },
            { key: "decimalsToken0", call: "decimals", target: "token0" },
            { key: "decimalsToken1", call: "decimals", target: "token1" },
            { key: "balanceToken0", call: "balanceOf", target: "token0", metaData: "tokenAddress" },
            { key: "balanceToken1", call: "balanceOf", target: "token1", metaData: "tokenAddress" },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    processingRound2(typeInfo) {
        if (typeInfo.tokenAddress === "0x45856bD6Bb9f076F4C558A4D5932c6c8d832b0d0" ||
            typeInfo.tokenAddress === "0x80115c708E12eDd42E504c1cD52Aea96C547c05c") {
            log.local("Processing round 2 for UniswapProcessor on classic pools");
            this.rounds.round2[4] = { key: "balanceToken0", call: "reserve0", target: "tokenAddress" };
            this.rounds.round2[5] = { key: "balanceToken1", call: "reserve1", target: "tokenAddress" };
        }
    }
    computeRound3(index, type, typeInfo, calls) {
        if (typeInfo.tokenAddress === "0x45856bD6Bb9f076F4C558A4D5932c6c8d832b0d0") {
            log.local("Computing round 3 for UniswapProcessor on classic pools");
            this.rounds.round2[4] = { key: "balanceToken0", call: "reserve0", target: "tokenAddress" };
            this.rounds.round2[5] = { key: "balanceToken1", call: "reserve1", target: "tokenAddress" };
        }
        return super.computeRound3(index, type, typeInfo, calls);
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const decimalsToken0 = Number(typeInfo.decimalsToken0);
        const decimalsToken1 = Number(typeInfo.decimalsToken1);
        const priceToken0 = (await pricer.get({ symbol: typeInfo.symbolToken0 })) ?? 0;
        const priceToken1 = (await pricer.get({ symbol: typeInfo.symbolToken1 })) ?? 0;
        const balanceToken0 = BN2Number(typeInfo.balanceToken0, decimalsToken0);
        const balanceToken1 = BN2Number(typeInfo.balanceToken1, decimalsToken1);
        let tvl = 0;
        if (priceToken0 !== 0 && priceToken1 !== 0) {
            tvl = priceToken0 * balanceToken0 + priceToken1 * balanceToken1;
        }
        else if (campaign.campaignParameters.symbolRewardToken.toLowerCase().startsWith("if-")) {
            tvl = (2 * balanceToken0 * balanceToken1) / (balanceToken0 + balanceToken1);
        }
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            priceTargetToken,
            totalSupply,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            tvl,
            cardName: generateCardName(type, typeInfo, campaign),
            decimalsToken0,
            decimalsToken1,
            balanceToken0,
            balanceToken1,
            tokensDisplay: [
                { symbol: typeInfo.symbolToken0, address: typeInfo.token0 },
                { symbol: typeInfo.symbolToken1, address: typeInfo.token1 },
            ],
        };
    }
}
