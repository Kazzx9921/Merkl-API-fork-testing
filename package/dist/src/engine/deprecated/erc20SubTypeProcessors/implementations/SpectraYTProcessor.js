import { SPECTRA_NETWORK_SLUGS } from "@/constants";
import { generateCardName } from "@/utils/generateCardName";
import { GenericProcessor } from "../GenericProcessor";
export class SpectraYTProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "principalToken", call: "principalToken", target: "tokenAddress" }],
        round2: [],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    async processingRound5(_index, type, typeInfo, _calls, campaign, _pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        if (!SPECTRA_NETWORK_SLUGS[campaign.computeChainId]) {
            throw new Error("Network slug not found");
        }
        const principalToken = typeInfo.principalToken.toLowerCase();
        const spectraData = (await (await fetch(`https://app.spectra.finance/api/v1/${SPECTRA_NETWORK_SLUGS[campaign.computeChainId]}/pools`, {
            headers: {
                "x-client-id": "Merkl Studio",
                source: "Merkl Studio",
            },
        })).json());
        const poolData = spectraData.find(d => d.address.toLowerCase() === principalToken);
        if (!poolData) {
            throw new Error("Pool not found in Spectra API");
        }
        const tvl = poolData.pools[0].ytPrice.usd * totalSupply; // in USD
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ address: poolData.yt.address }],
        };
    }
}
