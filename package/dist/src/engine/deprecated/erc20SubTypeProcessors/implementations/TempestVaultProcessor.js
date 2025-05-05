import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number, NULL_ADDRESS } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class TempestVaultProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "addressesReturnData", call: "getTokenAddresses", target: "tokenAddress" },
            { key: "positionsReturnData", call: "getPositions", target: "tokenAddress" },
        ],
        round2: [
            { key: "symbolToken0", call: "symbol", target: "addressToken0" },
            { key: "decimalsToken0", call: "decimals", target: "addressToken0" },
            { key: "symbolToken1", call: "symbol", target: "addressToken1" },
            { key: "decimalsToken1", call: "decimals", target: "addressToken1" },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    processingRound2(typeInfo) {
        typeInfo.addressToken0 = typeInfo.addressesReturnData[0];
        typeInfo.addressToken1 = typeInfo.addressesReturnData[1];
        typeInfo.amount0Invested = typeInfo.positionsReturnData[0].toString();
        typeInfo.amount1Invested = typeInfo.positionsReturnData[1].toString();
        typeInfo.amount0Idle = typeInfo.positionsReturnData[2].toString();
        typeInfo.amount1Idle = typeInfo.positionsReturnData[3].toString();
        try {
            typeInfo.amountInQueue = typeInfo.positionsReturnData[4].toString();
        }
        catch { }
        if (typeInfo.addressToken0 === NULL_ADDRESS) {
            this.rounds.round2 = this.rounds.round2.filter(call => call.target !== "addressToken0");
            typeInfo.symbolToken0 = "ETH";
            typeInfo.decimalsToken0 = "18";
        }
        if (typeInfo.addressToken1 === NULL_ADDRESS) {
            this.rounds.round2 = this.rounds.round2.filter(call => call.target !== "addressToken1");
            typeInfo.symbolToken1 = "ETH";
            typeInfo.decimalsToken1 = "18";
        }
    }
    computeRound3(index, type, typeInfo, calls) {
        if (typeInfo.addressToken0 === NULL_ADDRESS) {
            this.rounds.round2 = this.rounds.round2.filter(call => call.target !== "addressToken0");
            typeInfo.symbolToken0 = "ETH";
            typeInfo.decimalsToken0 = "18";
        }
        if (typeInfo.addressToken1 === NULL_ADDRESS) {
            this.rounds.round2 = this.rounds.round2.filter(call => call.target !== "addressToken1");
            typeInfo.symbolToken1 = "ETH";
            typeInfo.decimalsToken1 = "18";
        }
        return super.computeRound3(index, type, typeInfo, calls);
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const decimalsToken0 = Number(typeInfo.decimalsToken0);
        const decimalsToken1 = Number(typeInfo.decimalsToken1);
        const amount0 = BN2Number(typeInfo.amount0Idle, decimalsToken0) + BN2Number(typeInfo.amount0Invested, decimalsToken0);
        let amount1 = BN2Number(typeInfo.amount1Idle, decimalsToken1) + BN2Number(typeInfo.amount1Invested, decimalsToken1);
        if (type === Erc20SubType.tempestStaking) {
            amount1 += !!typeInfo.amountInQueue ? BN2Number(typeInfo.amountInQueue, decimalsToken1) : 0;
        }
        const tokenAPRice = (await pricer.get({ symbol: typeInfo.symbolToken0 })) ?? 0;
        const tokenBPrice = (await pricer.get({ symbol: typeInfo.symbolToken1 })) ?? 0;
        const tvl = tokenAPRice * amount0 + tokenBPrice * amount1;
        const priceTargetToken = tvl / totalSupply;
        const { addressesReturnData, positionsReturnData, ...rest } = typeInfo;
        return {
            ...rest,
            blacklistedSupply,
            cardName: generateCardName(type, typeInfo, campaign),
            priceTargetToken: priceTargetToken,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            tokensDisplay: [
                { symbol: typeInfo.symbolToken0, address: typeInfo.addressToken0 },
                { symbol: typeInfo.symbolToken1, address: typeInfo.addressToken1 },
            ],
        };
    }
}
