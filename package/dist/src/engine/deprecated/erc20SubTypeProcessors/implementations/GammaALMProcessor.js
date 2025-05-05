import { generateCardName } from "@/utils/generateCardName";
import { withTimeout } from "@sdk";
import axios from "axios";
import { GenericProcessor } from "../GenericProcessor";
async function getVaultInfo(targetVaultAddress, chainId) {
    let data = [];
    try {
        data = await withTimeout((async () => {
            data = (await axios.get(`https://api.gamma.xyz/frontend/hypervisors/allDataSummary?chain=${chainId}`))
                .data;
            return data;
        })(), 5000);
    }
    catch (e) {
        return null;
    }
    for (const item of data) {
        if (item.address.toLowerCase() === targetVaultAddress.toLowerCase()) {
            return {
                tvl: Number(item.tvlUSD),
                protocol: item.protocol,
            };
        }
    }
    return null;
}
export class GammaALMProcessor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    async processingRound5(_index, type, typeInfo, _calls, campaign, _pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const vaultInfo = await getVaultInfo(campaign.campaignParameters.targetToken, campaign.computeChainId);
        const tvl = !!vaultInfo ? vaultInfo.tvl : 0;
        const protocol = !!vaultInfo ? vaultInfo.protocol : "";
        const priceTargetToken = tvl / totalSupply;
        typeInfo.underlyingProtocol = protocol;
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
