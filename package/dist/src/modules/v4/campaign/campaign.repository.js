import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { CannotUpdateOpportunityLastCreatedAt } from "@/utils/error";
import { log } from "@/utils/logger";
import { apiDbClient, engineDbClient } from "@db";
import { Prisma, RunStatus } from "@db/api";
import { MAX_COMPUTE_JOB_TIME } from "@sdk";
import moment from "moment";
export class CampaignRepository {
    static transformQueryToPrismaFilters(query) {
        const { creatorTag, creatorId, creatorAddress, chainId, distributionChainIds, endTimestamp, opportunityId, mainParameter, campaignId, startTimestamp, status, subType, type, types, tokenAddress, tokenSymbol, test, createdAfter, point, rootCampaignId, parentCampaignId, } = query;
        const getTagFilter = () => {
            if (creatorTag && creatorId)
                return {
                    OR: [{ Creator: { id: creatorId } }, { tags: { has: creatorTag } }],
                };
            if (creatorId)
                return { Creator: { id: creatorId } };
            if (creatorTag)
                return { tags: { has: creatorTag } };
        };
        const now = moment().unix();
        const timeFilter = status === "LIVE"
            ? {
                endTimestamp: { gte: now },
                startTimestamp: { lte: now },
            }
            : status === "PAST"
                ? {
                    endTimestamp: { lt: now },
                }
                : status === "SOON"
                    ? {
                        startTimestamp: { gt: now },
                    }
                    : {
                        endTimestamp: endTimestamp ? { gte: +endTimestamp } : undefined,
                        startTimestamp: startTimestamp ? { gte: +startTimestamp } : undefined,
                    };
        return {
            where: {
                distributionChainId: !!distributionChainIds
                    ? {
                        in: distributionChainIds,
                    }
                    : undefined,
                computeChainId: chainId,
                opportunityId,
                campaignId,
                Opportunity: {
                    identifier: mainParameter,
                },
                subType,
                type: type ? type : types ? { in: types } : undefined,
                creatorAddress,
                RewardToken: {
                    address: tokenAddress ? tokenAddress : undefined,
                    symbol: tokenSymbol ? tokenSymbol : undefined,
                    OR: tokenSymbol
                        ? [
                            { symbol: { equals: tokenSymbol, mode: "insensitive" } },
                            { displaySymbol: { equals: tokenSymbol, mode: "insensitive" } },
                        ]
                        : undefined,
                    isTest: !test ? false : undefined,
                    isPoint: point ? true : !test ? false : undefined,
                },
                Creator: getTagFilter(),
                ...timeFilter,
                createdAt: createdAfter ? { gte: createdAfter } : undefined,
                rootCampaignId: rootCampaignId ? { equals: rootCampaignId, mode: "insensitive" } : undefined,
                parentCampaignId: parentCampaignId ? { equals: parentCampaignId, mode: "insensitive" } : undefined,
            },
        };
    }
    // ─── Public Methods ──────────────────────────────────────────────────
    /**
     * Retrieves all past campaigns from the database.
     * A campaign is considered past if the current timestamp is greater than the campaign's end timestamp.
     *
     * @returns A promise that resolves to an array of past campaigns.
     *
     * @dev Excludes test campaigns
     */
    static async getPastCampaigns(query) {
        const now = moment().unix();
        const where = {
            ...query,
            endTimestamp: {
                lt: now,
            },
            RewardToken: {
                isTest: false,
            },
        };
        return await apiDbClient.campaign.findMany({
            where,
            include: {
                Opportunity: true,
            },
        });
    }
    /**
     * Retrieves all past campaigns from the database.
     * A campaign is considered past if the current timestamp is greater than the campaign's end timestamp.
     *
     * @returns A promise that resolves to an array of past campaigns.
     *
     * @dev Excludes test campaigns
     */
    static async getFutureCampaigns(query) {
        const now = moment().unix();
        const where = {
            ...query,
            startTimestamp: {
                gt: now,
            },
            RewardToken: {
                isTest: false,
            },
        };
        return await apiDbClient.campaign.findMany({
            where,
            include: {
                Opportunity: true,
            },
        });
    }
    /**
     * Retrieves all live campaigns from the database.
     * A campaign is considered live if the current timestamp is between the campaign's start and end timestamps.
     *
     * @returns A promise that resolves to an array of live campaigns.
     *
     * @dev Excludes test campaigns
     */
    static async getLiveCampaigns(query) {
        const now = moment().unix();
        const where = {
            ...query,
            endTimestamp: { gte: now },
            startTimestamp: { lte: now },
            RewardToken: {
                isTest: false,
            },
        };
        return await apiDbClient.campaign.findMany({
            where,
            include: {
                Opportunity: true,
                RewardToken: true,
                RewardBreakdown: { include: { Reward: true } },
            },
        });
    }
    static async countLives(query) {
        const now = moment().unix();
        const where = {
            ...query,
            endTimestamp: { gte: now },
            startTimestamp: { lte: now },
        };
        return await apiDbClient.campaign.count({
            where,
        });
    }
    /**
     * Upserts a campaign in the database. If the campaign already exists, it updates the existing record;
     * otherwise, it creates a new one.
     *
     * @param {CreateCampaignModel} campaign - The campaign data to be upserted.
     * @returns The upserted campaign record.
     *
     * @dev Should be the only way of creating campaigns in the database.
     *
     * @throws {Error} If unable to fetch data for the reward token.
     *
     * @remarks
     * This method performs the following steps:
     * 1. Determines the campaign type from the provided campaign data.
     * 2. Computes the opportunity ID based on the campaign data.
     * 3. Constructs the data object for the campaign to be upserted.
     * 4. Upserts the campaign in the database using the constructed data object.
     * 5. Logs an error if the upsert operation fails.
     */
    static async upsert(campaign, opportunityIdentifier) {
        try {
            const previousCampaign = await CampaignRepository.findUnique(campaign.id);
            const creatorAddress = previousCampaign?.manualOverrides?.includes("creatorAddress")
                ? previousCampaign.creatorAddress
                : campaign.creatorAddress;
            const opportunityId = previousCampaign?.manualOverrides?.includes("opportunityId")
                ? previousCampaign.opportunityId
                : OpportunityService.hashId({
                    chainId: campaign.computeChainId,
                    identifier: opportunityIdentifier,
                    type: campaign.type,
                });
            // If the campaign is being created, update the lastCampaignCreatedAt field in the opportunity
            if (!previousCampaign) {
                try {
                    await OpportunityService.update(opportunityId, { lastCampaignCreatedAt: new Date() });
                }
                catch {
                    throw new CannotUpdateOpportunityLastCreatedAt(campaign.campaignId, campaign.distributionChainId, campaign.type);
                }
            }
            if (!!campaign.parentCampaignId || !!campaign.rootCampaignId) {
                log.info(`inserting subcampaign ${campaign.campaignId}. Parent: ${campaign.parentCampaignId}, Root: ${campaign.rootCampaignId}`);
            }
            const data = {
                id: campaign.id,
                amount: campaign.amount,
                campaignId: campaign.campaignId,
                endTimestamp: BigInt(campaign.endTimestamp),
                params: campaign.params,
                startTimestamp: BigInt(campaign.startTimestamp),
                distributionType: campaign.distributionType,
                type: campaign.type,
                ComputeChain: {
                    connect: {
                        id: campaign.computeChainId,
                    },
                },
                Creator: {
                    connectOrCreate: {
                        where: { address: creatorAddress },
                        create: {
                            address: creatorAddress,
                        },
                    },
                },
                Opportunity: {
                    connect: { id: opportunityId },
                },
                RewardToken: {
                    connect: {
                        chainId_address: {
                            chainId: campaign.rewardToken.chainId,
                            address: campaign.rewardToken.address,
                        },
                    },
                },
                subType: campaign.subType,
                DistributionChain: { connect: { id: campaign.distributionChainId } },
                parentCampaign: campaign.parentCampaignId ? { connect: { id: campaign.parentCampaignId } } : undefined,
                rootCampaign: campaign.rootCampaignId ? { connect: { id: campaign.rootCampaignId } } : undefined,
            };
            return await apiDbClient.campaign.upsert({
                where: {
                    id: campaign.id,
                },
                create: data,
                update: data,
            });
        }
        catch (err) {
            log.error(`Failed to upsert campaign ${campaign.campaignId}`, err);
        }
    }
    /**
     * Retrieves a campaign from the engine database by its chain and campaign id.
     * @dev Types are different from the API database.
     * @dev IDs are different from the API database.
     * id in the engine database = campaignId in the API database
     */
    static async getFromEngineDbWithId(campaignIds) {
        return await engineDbClient.campaigns.findMany({
            where: {
                OR: campaignIds.map(campaign => {
                    return {
                        chainId: campaign.distributionChain,
                        campaignId: campaign.campaignId,
                    };
                }),
            },
        });
    }
    static async findUnique(id) {
        return await apiDbClient.campaign.findUnique({
            include: {
                DistributionChain: true,
                ComputeChain: true,
                RewardToken: true,
                CampaignStatus: true,
                Creator: true,
            },
            where: {
                id,
            },
        });
    }
    static async findUniqueOrThrow(id, withOpportunity) {
        return await apiDbClient.campaign.findUniqueOrThrow({
            include: {
                Opportunity: withOpportunity,
                DistributionChain: true,
                ComputeChain: true,
                RewardToken: true,
                CampaignStatus: true,
                Creator: true,
            },
            where: {
                id,
            },
        });
    }
    static async findCampaignsToProcess(distributionChainId) {
        const currentTime = moment().startOf("minute").unix(); // Round to the minute for concurrency mismatchs
        return await apiDbClient.campaign.findMany({
            where: {
                distributionChainId,
                startTimestamp: { lte: currentTime }, // The campaign has started
                params: {
                    path: ["shouldIgnore"],
                    equals: Prisma.AnyNull,
                },
                OR: [
                    {
                        startTimestamp: { gt: 1735686000 }, // Cutoff for feature release, 01/01/2025
                        // First case: the campaign has no status so was never processed
                        CampaignStatus: {
                            none: {
                                computedUntil: { gte: 0 },
                            },
                        },
                    },
                    {
                        CampaignStatus: {
                            some: {
                                // The campaign is not currently processing or has been processing for too long
                                OR: [
                                    {
                                        status: {
                                            not: RunStatus.PROCESSING,
                                        },
                                        computedUntil: { lt: currentTime - 10 * 60 }, // more than 10 min ago
                                    },
                                    {
                                        status: RunStatus.PROCESSING,
                                        processingStarted: {
                                            lt: currentTime - MAX_COMPUTE_JOB_TIME, // more than 12 hours ago
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
            select: {
                campaignId: true,
                endTimestamp: true,
                CampaignStatus: {
                    // To be able to filter out campaigns that are already fully computed
                    take: 1,
                    select: {
                        status: true,
                        computedUntil: true,
                        processingStarted: true,
                    },
                },
            },
            orderBy: {
                amount: "desc",
            },
        });
    }
    // ─── Search Many Campaigns ───────────────────────────────────────────
    static async findMany(query) {
        const { page: _page, items: _items, ..._filters } = query;
        const page = _page ? _page : 0;
        const items = _items === undefined ? 20 : _items === 0 ? undefined : _items;
        const args = CampaignRepository.transformQueryToPrismaFilters(query);
        return await apiDbClient.campaign.findMany({
            take: items,
            skip: items ? page * items : 0,
            include: {
                DistributionChain: true,
                ComputeChain: true,
                RewardToken: true,
                CampaignStatus: true,
                Creator: true,
                Opportunity: query.withOpportunity,
            },
            orderBy: {
                endTimestamp: "desc",
            },
            ...args,
        });
    }
    static async countMany(query) {
        const args = CampaignRepository.transformQueryToPrismaFilters(query);
        return await apiDbClient.campaign.count(args);
    }
    static async findChains() {
        const campaigns = await apiDbClient.campaign.findMany({
            select: { distributionChainId: true, id: true },
        });
        return campaigns.reduce((acc, campaign) => {
            acc[campaign.id] = campaign.distributionChainId;
            return acc;
        }, {});
    }
    static async addManualOverride(id, field) {
        const manualOverrides = (await apiDbClient.campaign.findUnique({
            where: { id },
            select: { manualOverrides: true },
        }))?.manualOverrides ?? [];
        if (!manualOverrides?.includes(field))
            manualOverrides?.push(field);
        await apiDbClient.campaign.update({
            where: { id },
            data: {
                manualOverrides: {
                    set: manualOverrides,
                },
            },
        });
    }
    static async removeManualOverride(id, field) {
        const manualOverrides = (await apiDbClient.campaign.findUnique({
            where: { id },
            select: { manualOverrides: true },
        }))?.manualOverrides ?? [];
        await apiDbClient.campaign.update({
            where: { id },
            data: {
                manualOverrides: {
                    set: manualOverrides.filter(override => override !== field),
                },
            },
        });
    }
    static async updateOpportunity(id, opportunityId) {
        await apiDbClient.campaign.update({
            where: { id },
            data: {
                Opportunity: {
                    connect: { id: opportunityId },
                },
            },
        });
        await CampaignRepository.addManualOverride(id, "opportunityId");
    }
    static async updateCreator(id, creatorAddress) {
        await apiDbClient.campaign.update({
            where: { id },
            data: {
                creatorAddress: creatorAddress,
            },
        });
        await CampaignRepository.addManualOverride(id, "creatorAddress");
    }
    static async updateParams(id, params) {
        const updateData = {
            params: JSON.parse(params),
        };
        return await apiDbClient.campaign.update({ where: { id }, data: updateData });
    }
    static async getTvlRecords(campaign) {
        return await apiDbClient.tVLRecord.findMany({
            where: {
                opportunityId: campaign.opportunityId,
                timestamp: { gte: campaign.startTimestamp, lte: campaign.endTimestamp },
            },
            select: { timestamp: true, total: true },
        });
    }
    static async getAprRecords(campaign) {
        return (await apiDbClient.aprRecord.findMany({
            where: {
                opportunityId: campaign.opportunityId,
                timestamp: { gte: campaign.startTimestamp, lte: campaign.endTimestamp },
            },
            select: {
                timestamp: true,
                AprBreakdown: {
                    select: {
                        value: true,
                    },
                    where: { type: "CAMPAIGN", identifier: campaign.campaignId },
                },
            },
        })).map(record => ({
            timestamp: record.timestamp,
            apr: record.AprBreakdown[0]?.value,
        }));
    }
    static async getDailyRewardsRecords(campaign) {
        return await apiDbClient.dailyRewardsRecord.findMany({
            where: {
                opportunityId: campaign.opportunityId,
                timestamp: { gte: campaign.startTimestamp, lte: campaign.endTimestamp },
            },
            select: { timestamp: true, total: true },
        });
    }
    static async getWalletCountOverTime(campaign) {
        const rewardBreakdowns = await apiDbClient.rewardBreakdown.findMany({
            where: {
                campaignId: campaign.id,
                Reward: {
                    MerklRoot: { timestamp: { gte: campaign.startTimestamp, lte: campaign.endTimestamp } },
                },
            },
            select: { Reward: { select: { recipient: true, MerklRoot: { select: { timestamp: true } } } } },
        });
        const walletCounts = {};
        for (const { Reward } of rewardBreakdowns) {
            const timestampKey = Reward.MerklRoot.timestamp.toString();
            if (!walletCounts[timestampKey]) {
                walletCounts[timestampKey] = new Set();
            }
            walletCounts[timestampKey].add(Reward.recipient);
        }
        return Object.entries(walletCounts).map(([timestampKey, recipients]) => ({
            timestamp: BigInt(timestampKey),
            walletCount: recipients.size,
        }));
    }
}
