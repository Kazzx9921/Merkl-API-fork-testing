import axios from "axios";
export class EncompassingDynamicData {
    async build(_chainId, campaigns) {
        const dynamicData = [];
        for (const campaign of campaigns) {
            let tvl = 0;
            let apr = 0;
            if (campaign.campaignParameters.dataUrl) {
                try {
                    const dataResponse = await axios.get(campaign.campaignParameters.dataUrl);
                    if (dataResponse.data) {
                        tvl = dataResponse.data.tvl ?? 0;
                        apr = dataResponse.data.apr ?? 0;
                    }
                }
                catch { }
            }
            dynamicData.push({
                ...campaign,
                tvl,
                apr,
            });
        }
        return dynamicData;
    }
}
