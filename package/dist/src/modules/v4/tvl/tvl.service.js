import { TvlType } from "@db/api";
import { Campaign } from "@sdk";
import moment from "moment";
export class TvlService {
    static hashId(opportunityId, timestamp) {
        return Bun.hash(`${opportunityId}${timestamp}`).toString();
    }
    /**
     * @deprecated
     */
    static extractFromDynamicData(type, dynamicData, timestamp = BigInt(moment().unix())) {
        const typesWithoutApr = [Campaign.INVALID, Campaign.JSON_AIRDROP, Campaign.ERC20_SNAPSHOT];
        if (typesWithoutApr.includes(type))
            return { timestamp, total: 0, breakdowns: [] };
        /**
         *  Merge dynamic data and take the max tvl encountered
         * @dev Useful if campaigns have different hooks or blacklists and so different target tvl
         */
        const opportunitySummary = dynamicData.reduce((merged, c) => {
            const res = Object.assign(merged, c);
            const campaignTvl = c?.tvl ?? 0;
            if (campaignTvl > (merged?.tvl ?? 0)) {
                res.tvl = campaignTvl;
            }
            return res;
        }, {});
        let breakdowns = [];
        if (type === Campaign.CLAMM) {
            breakdowns = [
                {
                    identifier: opportunitySummary.campaignParameters.token0,
                    type: TvlType.TOKEN,
                    value: Number.isNaN(Number(opportunitySummary.poolBalanceToken0))
                        ? 0
                        : Number(opportunitySummary.poolBalanceToken0),
                },
                {
                    identifier: opportunitySummary.campaignParameters.token1,
                    type: TvlType.TOKEN,
                    value: Number.isNaN(Number(opportunitySummary.poolBalanceToken1))
                        ? 0
                        : Number(opportunitySummary.poolBalanceToken1),
                },
            ];
            for (const campaign of dynamicData) {
                if (campaign.forwarders) {
                    for (const forwarder of campaign.forwarders) {
                        breakdowns.push({
                            identifier: forwarder.label,
                            type: TvlType.PROTOCOL,
                            value: Number.isNaN(Number(forwarder.almTVL)) ? 0 : Number(forwarder.almTVL),
                        });
                    }
                }
            }
        }
        return {
            timestamp,
            total: Number.isNaN(Number(opportunitySummary.tvl)) ? 0 : Number(opportunitySummary.tvl),
            breakdowns,
        };
    }
}
