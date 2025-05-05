import { AprType } from "@db/api";
import { Campaign as CampaignTypeV3 } from "@sdk";
import moment from "moment";
export class AprService {
    static hashId(opportunityId, timestamp) {
        return Bun.hash(`${opportunityId}${timestamp}`).toString();
    }
    /**
     * @deprecated
     */
    static extractFromDynamicData(type, campaigns, timestamp = BigInt(moment().unix())) {
        const typesWithoutApr = [CampaignTypeV3.INVALID, CampaignTypeV3.JSON_AIRDROP, CampaignTypeV3.ERC20_SNAPSHOT];
        if (typesWithoutApr.includes(type))
            return { timestamp, cumulated: 0, breakdowns: [] };
        let cumulated = campaigns.reduce((sum, campaign) => {
            const isLive = BigInt(campaign.endTimestamp) > timestamp && BigInt(campaign.startTimestamp) < timestamp;
            if (!isLive)
                return sum;
            return sum + (Number.isNaN(Number(campaign.apr)) ? 0 : Number(campaign.apr));
        }, 0) ?? 0;
        cumulated = Number.isNaN(Number(cumulated)) || !Number.isFinite(cumulated) ? 0 : cumulated;
        const breakdowns = campaigns.map(campaign => {
            const isLive = BigInt(campaign.endTimestamp) > timestamp && BigInt(campaign.startTimestamp) < timestamp;
            return {
                identifier: campaign.campaignId,
                type: AprType.CAMPAIGN,
                value: !isLive || Number.isNaN(campaign.apr) || !Number.isFinite(campaign.apr) ? 0 : Number(campaign.apr),
            };
        });
        if (type === CampaignTypeV3.CLAMM) {
            for (const campaign of campaigns) {
                const isLive = BigInt(campaign.endTimestamp) > timestamp && BigInt(campaign.startTimestamp) < timestamp;
                if (campaign.forwarders) {
                    for (const forwarder of campaign.forwarders) {
                        breakdowns.push({
                            identifier: forwarder.label,
                            type: AprType.PROTOCOL,
                            value: !isLive || Number.isNaN(forwarder.almAPR) || !Number.isFinite(forwarder.almAPR)
                                ? 0
                                : Number(forwarder.almAPR),
                        });
                    }
                }
            }
        }
        return {
            timestamp,
            cumulated,
            breakdowns,
        };
    }
}
