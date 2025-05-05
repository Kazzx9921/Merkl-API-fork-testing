import { generateCardName } from "@/utils/generateCardName";
import { BN2Number, EulerSubCampaignType } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
import { fetchEulerVaultName } from "../helpers/eulerVaultNames";
export class EulerBorrowProcessor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [],
        round3: [],
        round4: [
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
            { key: "totalAssets", call: "totalAssets", target: "addressVault" },
        ],
    };
    processingRound2(typeInfo, campaign) {
        typeInfo.addressVault = campaign.campaignParameters.evkAddress;
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const symbolAsset = campaign.campaignParameters.symbolAsset;
        const decimalsAsset = Number(campaign.campaignParameters.decimalsAsset);
        const priceAsset = (await pricer.get({ symbol: symbolAsset })) ?? 1;
        const totalBorrows = BN2Number(typeInfo.totalAssets, decimalsAsset);
        typeInfo.symbolUnderlyingToken = symbolAsset;
        let cardName = generateCardName(type, typeInfo, campaign);
        const vaultName = await fetchEulerVaultName(campaign.campaignParameters.evkAddress, campaign.chainId);
        if (!!vaultName) {
            cardName = `Borrow from ${vaultName} vault`;
        }
        if (campaign.campaignSubType === EulerSubCampaignType.BORROW_FROM_COLLATERAL) {
            cardName = `${cardName} using ${campaign.campaignParameters.symbolCollateral}`;
        }
        const tvl = priceAsset * totalBorrows;
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            asset: campaign.campaignParameters.addressAsset,
            addressVault: typeInfo.addressVault,
            blacklistedSupply,
            cardName: cardName,
            decimalsAsset,
            priceTargetToken,
            symbolAsset,
            totalBorrows: typeInfo.totalAssets.toString(),
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            tokensDisplay: [{ symbol: campaign.campaignParameters.symbolTargetToken, address: typeInfo.tokenAddress }],
        };
    }
}
