import { MAVERICK_ZKSYNC_BP_LENS_ADDRESS } from "@/constants";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class MaverickBPProcessor extends GenericProcessor {
    rounds = {
        round1: [
            {
                key: "bpInfoReturnData",
                call: "boostedPositionInformation",
                target: "lensAddress",
                metaData: "tokenAddress",
            },
        ],
        round2: [
            {
                key: "symbolToken0",
                call: "symbol",
                target: "token0",
            },
            {
                key: "symbolToken1",
                call: "symbol",
                target: "token1",
            },
            {
                key: "decimalsToken0",
                call: "decimals",
                target: "token0",
            },
            {
                key: "decimalsToken1",
                call: "decimals",
                target: "token1",
            },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    processingRound1(typeInfo) {
        typeInfo.lensAddress = MAVERICK_ZKSYNC_BP_LENS_ADDRESS;
    }
    processingRound2(typeInfo) {
        typeInfo.token0 = typeInfo.bpInfoReturnData.tokenA;
        typeInfo.token1 = typeInfo.bpInfoReturnData.tokenB;
        typeInfo.amount0 = typeInfo.bpInfoReturnData.amountA.toString();
        typeInfo.amount1 = typeInfo.bpInfoReturnData.amountB.toString();
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const decimalsToken0 = Number(typeInfo.decimalsToken0);
        const decimalsToken1 = Number(typeInfo.decimalsToken1);
        const amount0 = BN2Number(typeInfo.amount0, 18);
        const amount1 = BN2Number(typeInfo.amount1, 18);
        const token0PRice = (await pricer.get({ symbol: typeInfo.symbolToken0 })) ?? 0;
        const token1Price = (await pricer.get({ symbol: typeInfo.symbolToken1 })) ?? 0;
        const tvl = token0PRice * amount0 + token1Price * amount1;
        const priceTargetToken = tvl / totalSupply;
        const { bpInfoReturnData, ...rest } = typeInfo;
        return {
            ...rest,
            blacklistedSupply,
            amount0,
            amount1,
            decimalsToken0,
            decimalsToken1,
            cardName: generateCardName(type, typeInfo, campaign),
            priceTargetToken: priceTargetToken,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            tokensDisplay: [
                { symbol: typeInfo.symbolToken0, address: typeInfo.token0 },
                { symbol: typeInfo.symbolToken1, address: typeInfo.token1 },
            ],
        };
    }
}
