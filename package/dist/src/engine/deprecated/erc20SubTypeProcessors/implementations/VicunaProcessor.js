import { generateCardName } from "@/utils/generateCardName";
import axios from "axios";
import { GenericProcessor } from "../GenericProcessor";
const findTvlByVaultAddress = (data, targetVaultAddress) => {
    for (const key in data) {
        if (data[key].vaultAddress.toLowerCase() === targetVaultAddress.toLowerCase()) {
            return data[key].tvl;
        }
    }
    return null;
};
export class VicunaProcessor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    async processingRound5(_index, type, typeInfo, _calls, campaign, _pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const vicunaTVL = (await axios("https://vicuna.orthae.xyz/tvl/details")).data;
        // find the entry that matches the vault address
        const tvl = findTvlByVaultAddress(vicunaTVL[campaign.chainId], typeInfo.tokenAddress) ?? 0;
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: campaign.campaignParameters.symbolTargetToken, address: typeInfo.tokenAddress }],
        };
    }
}
