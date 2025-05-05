import { DynamicDataService } from "@/modules/v4/dynamicData/dynamicData.service";
import { TvlType } from "@db/api";
import { ComposedType } from "@sdk";
import { all, create } from "mathjs";
export class MultiLogTVLBuilder {
    async build(_computeChainId, campaigns) {
        const tvls = [];
        for (const campaign of campaigns) {
            const mainComposedList = campaign.campaignParameters.composedCampaigns.filter(composedCampaign => composedCampaign.composedType === ComposedType.MAIN);
            if (mainComposedList.length === 0) {
                throw new Error("Main composed campaign not found");
            }
            if (mainComposedList.length > 1) {
                // TODO: handle multiple main composed campaigns
                const tvlMapping = {};
                const multipliers = {};
                const tvlBreakdown = [];
                for (const composedCampaign of mainComposedList) {
                    const composedCampaignTVL = (await DynamicDataService.update(composedCampaign.computeChainId, composedCampaign.campaignType, [composedCampaign], true))[0];
                    const tvlValue = typeof composedCampaignTVL.tvl === "string"
                        ? Number(composedCampaignTVL.tvl)
                        : composedCampaignTVL.tvl.total;
                    tvlMapping[composedCampaign.composedIndex] = tvlValue;
                    multipliers[composedCampaign.composedIndex] = Number(composedCampaign.composedMultiplier ?? 10 ** 9);
                    tvlBreakdown.push({
                        identifier: composedCampaign.campaignId,
                        type: TvlType.PROTOCOL,
                        value: Math.abs(tvlValue),
                    });
                }
                const config = {
                    number: "bigint",
                };
                const bigmath = create(all, config);
                const scope = { tvlMapping, multipliers, BASE_9: Number(10 ** 9) };
                const computeExpression = campaign.campaignParameters.composedCampaignsCompute.replace(/\d+/g, match => {
                    return tvlMapping[match] !== undefined ? `tvlMapping["${match}"] * multipliers["${match}"] / BASE_9` : "0";
                });
                const totalTvl = bigmath.evaluate(computeExpression, scope);
                tvls.push({
                    campaign: campaign,
                    tvl: totalTvl,
                    tvlBreakdown,
                });
                continue;
            }
            const mainComposed = mainComposedList[0];
            if (mainComposed) {
                const mainCampaignTVL = (await DynamicDataService.update(mainComposed.computeChainId, mainComposed.campaignType, [mainComposed], true))[0];
                tvls.push({
                    campaign: campaign,
                    tvl: typeof mainCampaignTVL.tvl === "string" ? Number(mainCampaignTVL.tvl) : mainCampaignTVL.tvl.total,
                    tvlBreakdown: [],
                });
            }
        }
        return tvls;
    }
}
