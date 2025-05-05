import { TokenService } from "@/modules/v4/token/token.service";
import { generateCardName } from "@/utils/generateCardName";
import { log } from "@/utils/logger";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
import { fetchEulerVaultName } from "../helpers/eulerVaultNames";
export class EulerLendProcessor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [],
        round3: [],
        round4: [
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
            { key: "totalAssets", call: "totalAssets", target: "tokenAddress" },
        ],
    };
    processingRound2(typeInfo, campaign) {
        typeInfo.addressVault = campaign.campaignParameters.evkAddress;
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const chainId = campaign.computeChainId;
        const underlyingAsset = campaign.campaignParameters.addressAsset;
        const underlyingToken = await TokenService.findUniqueFillOrThrow({
            chainId,
            address: underlyingAsset,
        });
        let decimalsAsset = Number(campaign.campaignParameters.decimalsAsset) ?? 18;
        if (Number.isNaN(decimalsAsset)) {
            log.warn(`decimalsAsset is NaN for ${underlyingToken.symbol} on campaign ${campaign.campaignId}`);
            decimalsAsset = 18;
        }
        const totalAssets = BN2Number(typeInfo.totalAssets, decimalsAsset);
        typeInfo.symbolUnderlyingToken = underlyingToken.symbol;
        let cardName = generateCardName(type, typeInfo, campaign);
        const vaultName = await fetchEulerVaultName(typeInfo.tokenAddress, campaign.chainId);
        if (!!vaultName) {
            cardName = `Supply ${underlyingToken.symbol} on ${vaultName} vault`;
        }
        const tvl = (underlyingToken.price ?? 1) * totalAssets;
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            asset: campaign.campaignParameters.addressAsset,
            addressVault: typeInfo.addressVault,
            blacklistedSupply,
            cardName: cardName,
            decimalsAsset,
            priceTargetToken,
            symbolAsset: underlyingToken.symbol,
            totalAssets: typeInfo.totalAssets.toString(),
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            tokensDisplay: [{ symbol: campaign.campaignParameters.symbolTargetToken, address: typeInfo.tokenAddress }],
        };
    }
}
