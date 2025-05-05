import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { kebabToPascalCase } from "@/utils/caseChanges";
import { log } from "@/utils/logger";
import { Campaign as CampaignType, EAprBreakdownType, opportunityActions, } from "@sdk";
import moment from "moment";
export class OpportunityConvertorService {
    static convertV4CampaignToV3(campaignType, campaign, opportunityIdentifier) {
        return {
            amount: campaign.amount.toString(),
            campaignId: campaign.campaignId,
            computeChainId: campaign.computeChainId,
            campaignParameters: campaign.params,
            campaignSubType: campaign.subType ?? 0,
            campaignType,
            chainId: campaign.distributionChain?.id ?? 0,
            creator: campaign.creatorAddress,
            index: 0, // DEPRECATED
            mainParameter: opportunityIdentifier,
            endTimestamp: Number(campaign.endTimestamp),
            startTimestamp: Number(campaign.startTimestamp),
            rewardToken: campaign.rewardToken.address,
            amm: campaign.params?.amm,
        };
    }
    static convertV4toV3(opportunity, withCampaigns = false) {
        const now = moment().unix();
        const id = `${CampaignType[opportunity.type]}_${opportunity.identifier}`; // V3 id
        // Convert v4 actions to old type
        let action = opportunity.action.toLowerCase();
        if (!opportunityActions.includes(action)) {
            action = "hold";
        }
        const tvlBreakdownTokens = [];
        const tvlBreakdownDetails = {};
        if (!!opportunity?.tvlRecord?.breakdowns) {
            for (const breakdown of opportunity.tvlRecord.breakdowns) {
                if (breakdown.type === "TOKEN") {
                    const token = opportunity.tokens.find(token => token.address === breakdown.identifier);
                    if (!!token)
                        tvlBreakdownTokens.push({
                            symbol: token?.symbol,
                            amount: breakdown.value,
                        });
                }
                else {
                    tvlBreakdownDetails[breakdown.identifier] = {
                        value: breakdown.value,
                        address: breakdown.identifier.split(" ")[breakdown.identifier.split(" ").length - 1],
                        label: breakdown.identifier.split(" ")[0],
                    };
                }
            }
        }
        const aprBreakdown = {};
        const aprBreakdown2 = [];
        if (!!opportunity?.aprRecord?.breakdowns) {
            for (const breakdown of opportunity.aprRecord.breakdowns) {
                if (breakdown.type === "CAMPAIGN") {
                    aprBreakdown2.push({
                        value: breakdown.value,
                        label: `Campaign ${breakdown.identifier.slice(0, 8)}`,
                        type: EAprBreakdownType.CAMPAIGN,
                        address: breakdown.identifier,
                    });
                }
                else if (breakdown.type === "PROTOCOL") {
                    const address = breakdown.identifier.split(" ")[breakdown.identifier.split(" ").length - 1];
                    const detail = {
                        value: breakdown.value,
                        label: breakdown.identifier.replace(address, "").trim(),
                        type: EAprBreakdownType.FORWARDER,
                        address,
                    };
                    aprBreakdown[breakdown.identifier] = detail;
                    aprBreakdown2.push(detail);
                }
                else {
                    console.log(breakdown);
                }
            }
        }
        return {
            id,
            chainId: opportunity.chainId,
            name: opportunity.name,
            status: opportunity.status.toLowerCase(),
            action,
            tokenIcons: opportunity.tokens?.filter(token => token.icon?.length > 0).map(token => token.symbol), // Do not return tokens without icons,
            tvl: opportunity?.tvlRecord?.total,
            tvlBreakdown: tvlBreakdownTokens.length > 0 || Object.keys(tvlBreakdownDetails).length > 0
                ? {
                    tokens: tvlBreakdownTokens,
                    details: tvlBreakdownDetails,
                }
                : undefined,
            platform: kebabToPascalCase(opportunity.protocol?.id ?? ""),
            apr: opportunity.apr,
            aprBreakdown: Object.keys(aprBreakdown).length > 0 ? aprBreakdown : undefined,
            aprBreakdown2: aprBreakdown2.length > 0 ? aprBreakdown2 : undefined,
            dailyrewards: opportunity.dailyRewards,
            dailyRewardTokens: !!opportunity?.rewardsRecord?.breakdowns
                ? opportunity.rewardsRecord.breakdowns.map(reward => ({
                    symbol: reward.token.symbol,
                    amount: reward.amount.toString(),
                    address: reward.token.address,
                }))
                : undefined,
            tags: opportunity.tags,
            rewardTokenIcons: opportunity.campaigns
                ?.filter(campaign => campaign.rewardToken.icon?.length > 0) // Do not return tokens without icons
                ?.map(campaign => campaign.rewardToken.symbol)
                .reduce((acc, curr) => {
                if (!acc.includes(curr))
                    acc.push(curr);
                return acc;
            }, []) ?? [],
            campaigns: {
                type: CampaignType[opportunity.type],
                ids: opportunity.campaigns?.map(campaign => campaign.campaignId) ?? [],
                active: withCampaigns
                    ? opportunity.campaigns
                        ?.filter(campaign => campaign.startTimestamp < BigInt(now) && BigInt(now) < campaign.endTimestamp)
                        .map(campaign => OpportunityConvertorService.convertV4CampaignToV3(CampaignType[campaign.type], campaign, opportunity.identifier))
                    : undefined,
                inactive: withCampaigns
                    ? opportunity.campaigns
                        ?.filter(campaign => !(campaign.startTimestamp < BigInt(now) && BigInt(now) < campaign.endTimestamp))
                        .map(campaign => OpportunityConvertorService.convertV4CampaignToV3(CampaignType[campaign.type], campaign, opportunity.identifier))
                    : undefined,
            },
        };
    }
    static async #extractV3Opportunities(showCampaigns, test, identifier, chainId) {
        let opportunities = [];
        let page = 0;
        while (true) {
            try {
                const opportunitiesPage = await OpportunityService.findMany({
                    items: 100, // HARDCODED LIMIT
                    page,
                    test,
                    identifier,
                    chainId,
                    campaigns: true,
                });
                opportunities = opportunities.concat(opportunitiesPage);
                if (opportunitiesPage.length === 0)
                    break;
            }
            catch {
                break;
            }
            page++;
        }
        const res = {};
        for (const opportunity of opportunities) {
            const opportunityV3 = OpportunityConvertorService.convertV4toV3(opportunity, showCampaigns);
            res[opportunityV3.id] = opportunityV3;
        }
        return res;
    }
    static async setV3Opportunities(showCampaigns, test, identifier, chainId) {
        return await CacheService.set(TTLPresets.HOUR_4, OpportunityConvertorService.#extractV3Opportunities, showCampaigns, test, identifier, chainId);
    }
    static async logKeyAndTTLV3Opportunities(showCampaigns, test, identifier, chainId) {
        const [key, ttl] = await CacheService.keyAndTTL(OpportunityConvertorService.#extractV3Opportunities, showCampaigns, test, identifier, chainId);
        log.info(`Args: ${showCampaigns}, ${test}, ${identifier}, ${chainId}, Key: ${key}, TTL: ${ttl}`);
    }
    static async wrapV3Opportunities(showCampaigns, test, identifier, chainId) {
        return await CacheService.wrap(TTLPresets.MIN_10, OpportunityConvertorService.#extractV3Opportunities, showCampaigns, test, identifier, chainId);
    }
}
