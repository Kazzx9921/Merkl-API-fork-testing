import { decodeCall } from "@/utils/decodeCalls";
import { createCall } from "@/utils/encodeCalls";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number, ChainId } from "@sdk";
import { BigNumber } from "ethers";
import { utils } from "ethers";
import { GenericProcessor, Round } from "../GenericProcessor";
export class BalancerPoolProcessor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [
            { key: "poolId", call: "getPoolId", target: "tokenAddress" },
            { key: "vault", call: "getVault", target: "tokenAddress" },
        ],
        round3: [{ key: "poolTokensRaw", call: "getPoolTokens", target: "vault", metaData: "poolId" }],
        round4: [
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
            { key: "vaultBalance", call: "balanceOf", target: "tokenAddress", metaData: "vault" },
        ],
    };
    // override computeRound1(): void {}
    async processingRound5(index, type, typeInfo, calls, campaign, pricer) {
        let { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const totalSupplyBN = BigNumber.from(typeInfo.totalSupply);
        const vaultBalanceBN = BigNumber.from(typeInfo.vaultBalance);
        const totalSupplyUpdated = BN2Number(totalSupplyBN.sub(vaultBalanceBN), campaign.campaignParameters.decimalsTargetToken);
        const vaultBalance = BN2Number(vaultBalanceBN, campaign.campaignParameters.decimalsTargetToken);
        let tvl = 0;
        const symbols = [];
        const tokensDisplay = [];
        let indexUpdated = index + this.rounds.round4.length;
        const vaultIndex = campaign.campaignParameters.blacklist
            ?.map(b => utils.getAddress(b))
            ?.indexOf(utils.getAddress(typeInfo.vault)); // Check if the vault is blacklisted
        if (vaultIndex !== -1) {
            blacklistedSupply -= BN2Number(decodeCall(calls, index + vaultIndex, "balanceOf"), campaign.campaignParameters.decimalsTargetToken); // The vault balance was already removed from the total supply
        }
        for (const poolToken of typeInfo.poolTokens) {
            poolToken.symbol = decodeCall(calls, indexUpdated++, "symbol");
            poolToken.decimals = decodeCall(calls, indexUpdated++, "decimals");
            poolToken.amountInPool = BN2Number(poolToken.balance, poolToken.decimals);
            poolToken.price = (await pricer.get({ symbol: poolToken.symbol })) ?? 0;
            tvl += poolToken.price * poolToken.amountInPool;
            symbols.push(poolToken.symbol);
            tokensDisplay.push({ symbol: poolToken.symbol, address: poolToken.token });
        }
        if (campaign.computeChainId === ChainId.SONIC) {
            typeInfo.protocol = "Beets";
        }
        const priceTargetToken = tvl / totalSupplyUpdated;
        return {
            ...typeInfo,
            totalSupply: totalSupplyUpdated,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            tvl: tvl,
            priceTargetToken: priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign, symbols),
            vaultBalance: vaultBalance,
            tokensDisplay,
        };
    }
    processingRound4(typeInfo) {
        const tokens = typeInfo.poolTokensRaw[0];
        const balances = typeInfo.poolTokensRaw[1];
        let i = 0;
        const poolTokens = [];
        for (const token of tokens) {
            if (token !== typeInfo.tokenAddress) {
                poolTokens.push({
                    token: token,
                    balance: balances[i].toString(),
                    amountInPool: 0,
                    symbol: "",
                    decimals: 0,
                    price: 0,
                });
            }
            i++;
            typeInfo.poolTokens = poolTokens;
        }
    }
    computeRound4(index, type, typeInfo, calls, campaign) {
        // This is to enforce type checking
        const blacklistedLiquidityCalls = this.generateBlackListCall(type, typeInfo, campaign);
        this.decodePreviousRound(Round.three, calls, typeInfo, type, index);
        this.processingRound4(typeInfo);
        const poolCalls = this.encodeNextRound(Round.four, type, typeInfo);
        for (const poolToken of typeInfo.poolTokens) {
            poolCalls.push(createCall(poolToken.token, "symbol"));
            poolCalls.push(createCall(poolToken.token, "decimals"));
        }
        return {
            type: type,
            calls: blacklistedLiquidityCalls.concat(poolCalls),
            typeInfo: {
                ...typeInfo,
            },
        };
    }
}
