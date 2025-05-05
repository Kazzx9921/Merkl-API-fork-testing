import { generateCardName } from "@/utils/generateCardName";
import axios from "axios";
import { GenericProcessor } from "../GenericProcessor";
const findObjectByFarm = (dict, farmAddress) => {
    for (const key in dict) {
        if (dict[key].config && dict[key].config.farm === farmAddress) {
            return dict[key];
        }
    }
    return null;
};
export class EqualizerGaugeProcessor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    async processingRound5(_index, type, typeInfo, _calls, campaign, _pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const EXTERNAL_EQUALIZER_ENDPOINT = "https://eqapi-sonic-prod-ltanm.ondigitalocean.app/sonic/v4/gauges/";
        const data = (await axios(EXTERNAL_EQUALIZER_ENDPOINT)).data.data;
        let tvl = 0;
        let displayName = "Stake into Equalizer Gauge";
        try {
            if (!!data[typeInfo.tokenAddress]) {
                tvl = data[typeInfo.tokenAddress].token0.reserveUsd + data[typeInfo.tokenAddress].token1.reserveUsd;
                displayName = `Stake into ${data[typeInfo.tokenAddress].pair.displayName} Equalizer Gauge`;
            }
            else {
                const EXTERNAL_EQUALIZER_CL_ENDPOINT = "https://eqapi-sonic-prod-ltanm.ondigitalocean.app/sonic/v4/clsets";
                const data = (await axios(EXTERNAL_EQUALIZER_CL_ENDPOINT)).data.data;
                const pool = findObjectByFarm(data, typeInfo.tokenAddress);
                if (!!pool) {
                    tvl = pool.integration.equalizerPair.tvlUsd;
                    displayName = `Stake into ${pool.name} Equalizer Gauge`;
                }
            }
        }
        catch (e) { }
        const priceTargetToken = tvl / totalSupply;
        //const displayName = `Stake into ${data[typeInfo.tokenAddress].pair.displayName} Equalizer Gauge`;
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign, [], displayName),
            tokensDisplay: [{ symbol: campaign.campaignParameters.symbolTargetToken, address: typeInfo.tokenAddress }],
        };
    }
}
