import { RFX_DATASTORE } from "@/constants";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { ethers } from "ethers";
import { GenericProcessor } from "../GenericProcessor";
export class RfxProcessor extends GenericProcessor {
    rounds = {
        round1: [
            {
                key: "shortToken",
                call: "shortToken",
                target: "RFX_DATASTORE",
                metaData: "metaDataShort",
            },
            {
                key: "longToken",
                call: "longToken",
                target: "RFX_DATASTORE",
                metaData: "metaDataLong",
            },
            { key: "decimalsToken", call: "decimals", target: "tokenAddress" },
        ],
        round2: [
            { key: "symbolShortToken", call: "symbol", target: "shortToken" },
            { key: "symbolLongToken", call: "symbol", target: "longToken" },
            { key: "decimalsShortToken", call: "decimals", target: "shortToken" },
            { key: "decimalsLongToken", call: "decimals", target: "longToken" },
            { key: "balanceShortToken", call: "balanceOf", target: "shortToken", metaData: "tokenAddress" },
            { key: "balanceLongToken", call: "balanceOf", target: "longToken", metaData: "tokenAddress" },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    processingRound1(typeInfo) {
        const hexShortToken = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["string"], ["SHORT_TOKEN"]));
        const hexLongToken = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["string"], ["LONG_TOKEN"]));
        typeInfo.RFX_DATASTORE = RFX_DATASTORE;
        typeInfo.metaDataShort = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["address", "bytes32"], [typeInfo.tokenAddress, hexShortToken]));
        typeInfo.metaDataLong = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["address", "bytes32"], [typeInfo.tokenAddress, hexLongToken]));
    }
    async processingRound5(index, type, typeInfo, calls, campaign, pricer) {
        // return super.processingRound5(index, type, typeInfo, calls, campaign, pricer);
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceShortToken = (await pricer.get({ symbol: typeInfo.symbolShortToken })) ?? 0;
        const priceLongToken = (await pricer.get({ symbol: typeInfo.symbolLongToken })) ?? 0;
        let tvl = 0;
        if (priceShortToken !== 0 && priceLongToken !== 0) {
            tvl =
                priceShortToken * BN2Number(typeInfo.balanceShortToken, Number(typeInfo.decimalsShortToken)) +
                    priceLongToken * BN2Number(typeInfo.balanceLongToken, Number(typeInfo.decimalsLongToken));
        }
        const priceTargetToken = tvl / BN2Number(typeInfo.totalSupply, Number(typeInfo.decimalsToken));
        return {
            ...typeInfo,
            tokenAddress: typeInfo.tokenAddress,
            totalSupply,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            cardName: generateCardName(type, typeInfo, campaign),
            priceTargetToken: priceTargetToken, // Add the appropriate value here
            tvl,
            symbolShortToken: typeInfo.symbolShortToken,
            symbolLongToken: typeInfo.symbolLongToken,
            tokensDisplay: [
                { symbol: typeInfo.symbolShortToken, address: typeInfo.shortToken },
                { symbol: typeInfo.symbolLongToken, address: typeInfo.longToken },
            ],
        };
    }
}
