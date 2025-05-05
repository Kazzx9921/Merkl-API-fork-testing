import { NotFoundError } from "@/errors";
import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { CampaignRepository } from "@/modules/v4/campaign/campaign.repository";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { UserService } from "@/modules/v4/user/user.service";
import { log } from "@/utils/logger";
import { AprType, Status } from "@db/api";
import { Campaign as CampaignType, numberToBigInt } from "@sdk";
import moment from "moment";
import { metadataBuilderFactory } from "../../../engine/metadata/factory";
import { ChainService } from "../chain/chain.service";
import { ProtocolService } from "../protocol/protocol.service";
import { OpportunityRepository } from "./opportunity.repository";
export class OpportunityService {
    static hashId(opportunity) {
        return Bun.hash(`${opportunity.chainId}${opportunity.type}${opportunity.identifier}`).toString();
    }
    static async getAprBins(query) {
        const BINS_COUNT = 20;
        const opportunities = await OpportunityRepository.findMany({
            ...query,
            status: "LIVE",
            sort: "apr",
            order: "asc",
            items: 0,
        });
        const mid = Math.floor(opportunities.length / 2);
        const median = opportunities.length % 2 !== 0
            ? opportunities[mid].apr
            : (opportunities[mid - 1].apr + opportunities[mid].apr) / 2;
        const threshold = 5 * median;
        if (opportunities.length < 2)
            throw new Error("Not enough opportunities");
        const maxAprUnderThreshold = opportunities.filter(o => o.apr <= threshold).at(-1)?.apr ?? 0;
        const minAprAbove0 = opportunities.find(o => o.apr > 0)?.apr ?? 0;
        const binWidth = (maxAprUnderThreshold - minAprAbove0) / BINS_COUNT;
        const bins = new Array(BINS_COUNT);
        for (let i = 0; i < BINS_COUNT; i++)
            bins[i] = 0;
        let overThreshold = 0;
        for (const opportunity of opportunities) {
            if (opportunity.apr > 0 && opportunity.apr < threshold)
                bins[Math.min(Math.floor(opportunity.apr / binWidth), BINS_COUNT - 1)]++;
            else
                overThreshold++;
        }
        return {
            min: opportunities[0].apr,
            max: opportunities[opportunities.length - 1].apr,
            overThreshold,
            binWidth,
            bins,
        };
    }
    static async getTvlBins(query) {
        const BINS_COUNT = 20;
        const opportunities = await OpportunityRepository.findMany({
            ...query,
            status: "LIVE,SOON",
            sort: "tvl",
            order: "asc",
            items: 0,
        });
        if (opportunities.length < 2)
            throw new Error("Not enough opportunities");
        const binWidth = (opportunities[opportunities.length - 1].tvl - opportunities[0].tvl) / BINS_COUNT;
        const bins = new Array(BINS_COUNT);
        for (let i = 0; i < BINS_COUNT; i++)
            bins[i] = 0;
        for (const opportunity of opportunities)
            bins[Math.min(Math.floor(opportunity.tvl / binWidth), BINS_COUNT - 1)]++;
        return {
            min: opportunities[0].tvl,
            max: opportunities[opportunities.length - 1].tvl,
            binWidth,
            bins,
        };
    }
    static async override(id, data) {
        const opportunity = await OpportunityRepository.findUniqueOrThrow(id);
        const overrides = opportunity.manualOverrides ?? [];
        overrides.push(...Object.keys(data).filter(k => k !== undefined && !overrides.includes(k)));
        return await OpportunityRepository.update(id, { ...data, manualOverrides: overrides });
    }
    static async deleteOverrides(id, overridesToDelete) {
        const opportunity = await OpportunityRepository.findUniqueOrThrow(id);
        const overrides = opportunity.manualOverrides ?? [];
        const newOverrides = overrides.filter(override => !overridesToDelete.includes(override));
        await OpportunityRepository.update(id, { manualOverrides: newOverrides });
        return await OpportunityService.recreate(id);
    }
    /**
     * create an opportunity without campaigns
     * @param newOpp the new opportunity to create
     * @returns {Promise<Opportunity|undefined>}
     */
    static async create(newOpp) {
        const id = OpportunityService.hashId(newOpp);
        return await OpportunityRepository.create({ ...newOpp, id });
    }
    /**
     * build/fetch metadata of a campaign's opportunity
     * @param campaign
     */
    static async #getMetadata(campaign, opportunityIdentifier) {
        const campaignType = CampaignType[campaign.type];
        return await metadataBuilderFactory(campaignType).build(campaign, opportunityIdentifier);
    }
    /**
     * @param upsert whether to update the opportunity if it already exists in database
     * @param dryRun whether to skip the opportunity table interaction and just return the computed opportunity
     * @returns the opportunity entity computed
     */
    static async createFromCampaign(campaign, opportunityIdentifier, upsert = false, dryRun = false) {
        if (dryRun)
            log.info(`opportunity creation dry run for ${campaign.campaignId} of type ${campaign.type}`);
        const metadata = await OpportunityService.#getMetadata(campaign, opportunityIdentifier);
        const tags = (await UserService.findUnique(campaign.creatorAddress))?.tags ?? [];
        const opportunityId = OpportunityService.hashId({
            chainId: campaign.computeChainId,
            identifier: opportunityIdentifier,
            type: campaign.type,
        });
        const tokens = (await TokenService.findManyOrCreate(metadata.tokens)).filter(t => t !== undefined);
        const now = moment().unix();
        const protocol = (await ProtocolService.findMany({ id: metadata.mainProtocol }))?.[0];
        const campaignUrl = campaign.params?.url;
        const opportunity = {
            id: opportunityId,
            chainId: campaign.computeChainId,
            type: campaign.type,
            identifier: opportunityIdentifier, // mainParameter
            name: metadata.name,
            status: now >= +campaign.startTimestamp && now < +campaign.endTimestamp
                ? Status.LIVE
                : now > +campaign.endTimestamp
                    ? Status.PAST
                    : Status.SOON,
            action: metadata.action,
            tokens,
            mainProtocol: metadata.mainProtocol,
            description: await OpportunityService.description(metadata.action, tokens, protocol, campaign.computeChainId),
            howToSteps: OpportunityService.howToSteps(metadata.action, tokens, protocol),
            // If creator has specified a deposit URL, use it
            // Else if we have the specific logic to handle the deposit URL, use it
            // Else if the protocol has a deposit URL, use it
            depositUrl: campaignUrl
                ? campaignUrl
                : !!metadata.depositUrl
                    ? metadata.depositUrl
                    : !!metadata.mainProtocol && !!protocol?.url
                        ? protocol?.url
                        : undefined,
            explorerAddress: metadata.explorerAddress,
            tags,
        };
        if (!dryRun)
            return await OpportunityRepository.create(opportunity, upsert);
        return opportunity;
    }
    /**
     * deletes and recreates an opportunity with fresh data
     */
    static async recreate(opportunityId, campaignId) {
        const opportunity = await OpportunityRepository.findUnique(opportunityId);
        if (!opportunity)
            throw new NotFoundError();
        const sortedCampaigns = opportunity?.Campaigns.filter(campaign => campaignId ? campaign.campaignId === campaignId : true).sort((a, b) => Number(b.endTimestamp) - Number(a.endTimestamp));
        let firstCampaign = sortedCampaigns[0];
        const firstCampaigns = sortedCampaigns.filter(campaign => campaign.startTimestamp <= BigInt(moment().unix()));
        if (firstCampaigns.length > 0)
            firstCampaign = firstCampaigns[0];
        return await OpportunityService.createFromCampaign(CampaignService.format(await CampaignService.findUniqueOrThrow(firstCampaign.id)), opportunity.identifier, true // Upserting
        );
    }
    /**
     * Finds opportunities based on filters of its campaigns
     * @notice campaigns are filtered as well
     * @param where
     * @returns opportunities
     */
    static async findManyByCampaigns(where) {
        const opportunities = await OpportunityRepository.findManyByCampaigns(CampaignRepository.transformQueryToPrismaFilters(where).where);
        return opportunities.map(o => {
            return OpportunityService.formatResponse(o);
        });
    }
    static async getUniqueWithCampaignsOrThrow(opportunityId, withTest = false, withPoints = false) {
        const id = typeof opportunityId === "string" ? opportunityId : OpportunityService.hashId(opportunityId);
        const opportunity = await OpportunityRepository.findUniqueOrThrow(id, withTest, withTest ? withTest : withPoints, true);
        return OpportunityService.formatResponse(opportunity);
    }
    static async findUniqueOrThrow(opportunityId, withCampaigns = false, withTest = false, withPoints = false) {
        const id = typeof opportunityId === "string" ? opportunityId : OpportunityService.hashId(opportunityId);
        const opportunity = await OpportunityRepository.findUniqueOrThrow(id, withTest, withTest ? withTest : withPoints, withCampaigns);
        return OpportunityService.formatResponse(opportunity);
    }
    /**
     * Get the list of opportunities satisfying the query
     * @param query
     * @returns A list of opportunities
     */
    static async findMany(query) {
        // Bypass cache in test mode
        if (query.test)
            return (await OpportunityRepository.findMany(query)).map(c => OpportunityService.formatResponse(c));
        return await CacheService.wrap(TTLPresets.MIN_5, async (query) => {
            return (await OpportunityRepository.findMany(query)).map(c => OpportunityService.formatResponse(c));
        }, query);
    }
    /**
     * Counts the number of opportunities that complies to query
     * @description used for pagination purposes
     * @param query
     * @returns the number of opportunities
     */
    static async countMany(query) {
        return await OpportunityRepository.countMany(query);
    }
    static async findLiveWithCampaigns(chainId, take) {
        return await CacheService.wrap(TTLPresets.MIN_10, async (chainId) => {
            const opportunities = await OpportunityRepository.findLiveWithCampaigns(chainId, take);
            return opportunities.map(o => {
                return OpportunityService.formatResponse(o);
            });
        }, chainId);
    }
    static formatResponse(opportunity) {
        const { DailyRewardsRecords, AprRecords, TvlRecords, Campaigns, ...opp } = opportunity;
        const rewardsRecord = DailyRewardsRecords.length === 0
            ? {
                id: "",
                total: 0,
                timestamp: 0n,
                breakdowns: [],
            }
            : (DailyRewardsRecords?.map(({ id, total, timestamp, DailyRewardsBreakdown: breakdowns }) => ({
                id,
                total,
                timestamp,
                breakdowns: breakdowns.map(({ Campaign, value, ...breakdown }) => {
                    return {
                        token: Campaign.RewardToken,
                        amount: numberToBigInt(value, Campaign.RewardToken.decimals),
                        value: (Campaign.RewardToken.price ?? 1) * value,
                        distributionType: Campaign.distributionType,
                        ...breakdown,
                    };
                }),
            }))?.[0] ?? undefined);
        const tvlRecord = TvlRecords.length === 0
            ? {
                id: "",
                total: 0,
                timestamp: 0n,
                breakdowns: [],
            }
            : (TvlRecords?.map(({ id, total, timestamp, TvlBreakdown: breakdowns }) => ({
                id,
                total,
                timestamp,
                breakdowns,
            }))?.[0] ?? undefined);
        const aprRecord = opp.status === "LIVE"
            ? (AprRecords?.map(({ cumulated, timestamp, AprBreakdown: breakdowns }) => ({
                cumulated,
                timestamp,
                breakdowns: breakdowns.map(({ identifier, type, ...breakdown }) => {
                    if (type === AprType.CAMPAIGN) {
                        const campaign = DailyRewardsRecords?.[0]?.DailyRewardsBreakdown?.map(breakdown => breakdown.Campaign).find(c => c.campaignId === identifier);
                        if (campaign) {
                            return {
                                distributionType: campaign.distributionType,
                                identifier,
                                type,
                                ...breakdown,
                            };
                        }
                    }
                    return {
                        identifier,
                        type,
                        ...breakdown,
                    };
                }),
            }))?.[0] ?? undefined)
            : {
                cumulated: 0,
                timestamp: AprRecords?.[0]?.timestamp ?? 0n,
                breakdowns: !AprRecords?.[0]?.AprBreakdown?.[0] ? [] : [{ ...AprRecords?.[0]?.AprBreakdown[0], value: 0 }],
            };
        const formated = {
            ...OpportunityService.formatResponseBase(opp),
            apr: opp.apr,
            aprRecord,
            tvlRecord,
            rewardsRecord,
            campaigns: !!Campaigns ? Campaigns?.map(c => CampaignService.format(c)) : undefined,
            //TODO: change this to accomodate all return types
        };
        // biome-ignore lint/performance/noDelete: <explanation>
        if (!Campaigns)
            delete formated.campaigns;
        return formated;
    }
    static formatResponseBase(opportunity) {
        let { mainProtocolId, id, Tokens, Chain, Protocols, MainProtocol, lastCampaignCreatedAt, depositUrl, explorerAddress, manualOverrides, ...opp } = opportunity;
        if (mainProtocolId === "unknown") {
            MainProtocol = null;
        }
        return {
            ...opp,
            id,
            depositUrl: depositUrl ?? undefined,
            explorerAddress: explorerAddress ?? undefined,
            lastCampaignCreatedAt: lastCampaignCreatedAt.toISOString(),
            tokens: Tokens.map(t => TokenService.format(t)),
            chain: Chain,
            protocol: MainProtocol ?? undefined,
        };
    }
    static aggregate(query, field) {
        return OpportunityRepository.aggregateSum(field, query);
    }
    static aggregateMin(query, field) {
        return OpportunityRepository.aggregateMin(field, query);
    }
    static aggregateMax(query, field) {
        return OpportunityRepository.aggregateMax(field, query);
    }
    static async update(id, data) {
        return await OpportunityRepository.update(id, data);
    }
    static async updateMany(ids, data) {
        return await OpportunityRepository.updateMany(ids, data);
    }
    static async description(action, tokens, protocol, chainId) {
        const chain = await ChainService.findUniqueOrThrow(chainId);
        const symbols = tokens?.map(t => t.symbol).join("-");
        if (action === "POOL")
            return `Earn rewards by providing liquidity to the ${protocol?.name} ${symbols} pool on ${chain.name}, or through a liquidity manager supported by Merkl`;
        if (action === "HOLD")
            return `Earn rewards by holding ${symbols} or by staking it in a supported contract`;
        if (action === "LEND")
            return `Earn rewards by lending ${symbols} to ${protocol?.name} on ${chain.name}`;
        if (action === "BORROW")
            return `Earn rewards by taking a long position on ${protocol?.name} ${symbols} on ${chain.name}`;
        if (action === "DROP")
            return `Visit your dashboard to check if you've earned rewards from this airdrop`;
        if (action === "LONG")
            return `Borrow ${symbols} on ${protocol?.name} on ${chain.name}`;
        if (action === "SHORT")
            return `Earn rewards by taking a short position on ${protocol?.name} ${symbols} on ${chain.name}`;
        if (action === "SWAP")
            return `Earn rewards by trading ${symbols} on ${chain.name}`;
        return "";
    }
    static howToSteps(action, tokens, protocol) {
        const symbols = tokens?.map(t => t.symbol).join("-");
        if (action === "POOL")
            return [`Provide liquidity on ${protocol?.name}.`, "Earn rewards based on your liquidity position."];
        if (action === "HOLD")
            return [`Hold ${symbols}.`, "Rewards accumulate automatically."];
        if (action === "LEND")
            return [`Lend assets on ${protocol?.name}.`, "Rewards accumulate automatically."];
        if (action === "BORROW")
            return [`Borrow assets on ${protocol?.name}.`, "Rewards accumulate automatically."];
        if (action === "DROP")
            return ["Check your eligibility on Merkl."];
        if (action === "LONG")
            return [`Open a long position on ${protocol?.name}.`, "Rewards accumulate automatically."];
        if (action === "SHORT")
            return [`Open a short position on ${protocol?.name}.`, "Rewards accumulate automatically."];
        if (action === "SWAP")
            return [`Swap on ${protocol?.name}.`, "Rewards accumulate automatically."];
        return [];
    }
}
