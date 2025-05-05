import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { apiDbClient } from "@db";
import moment from "moment";
export class StatusRepository {
    static #formatQuery(query) {
        return {
            where: {
                status: Array.isArray(query.status) ? { in: query.status } : query.status,
                Campaign: query.computeChainId ? { computeChainId: query.computeChainId } : undefined,
            },
            include: { Campaign: Boolean(query.status) },
        };
    }
    static async findMany(query) {
        return await apiDbClient.campaignStatus.findMany(StatusRepository.#formatQuery(query));
    }
    static async findManyByCampaignId(campaignId) {
        return await apiDbClient.campaignStatus.findMany({
            where: {
                Campaign: {
                    campaignId: campaignId,
                },
            },
        });
    }
    static async findUniqueOrThrow(campaignId) {
        return await apiDbClient.campaignStatus.findUniqueOrThrow({
            where: {
                campaignId,
            },
        });
    }
    static async findUnique(campaignUnique) {
        return await apiDbClient.campaignStatus.findUnique({
            where: {
                campaignId: CampaignService.hashId(campaignUnique),
            },
        });
    }
    static async create(campaign, startTimestamp) {
        return await apiDbClient.campaignStatus.create({
            data: {
                campaignId: CampaignService.hashId(campaign),
                computedUntil: startTimestamp,
                processingStarted: startTimestamp,
            },
        });
    }
    static async updateSuccess(campaignUnique, computedUntil) {
        return await apiDbClient.campaignStatus.update({
            where: {
                campaignId: CampaignService.hashId(campaignUnique),
            },
            data: {
                computedUntil,
                status: "SUCCESS",
                error: "",
                details: "{}",
            },
        });
    }
    static async updateWithError(campaignUnique, status, error, details) {
        return await apiDbClient.campaignStatus.update({
            where: {
                campaignId: CampaignService.hashId(campaignUnique),
            },
            data: {
                status,
                error: error?.length > 0 ? error : undefined,
                details,
            },
        });
    }
    static async updateProcessing(campaignUnique) {
        const campaignId = CampaignService.hashId(campaignUnique);
        const now = moment().unix();
        await apiDbClient.campaignStatus.update({
            where: {
                campaignId,
                processingStarted: {
                    lte: now - 60, // The job wasn't already updated in the last minute
                },
            },
            data: {
                status: "PROCESSING",
                processingStarted: moment().unix(),
                error: "",
                details: "{}",
            },
        });
    }
    static async updateComputedUntil(campaignUnique, computedUntil) {
        return await apiDbClient.campaignStatus.update({
            where: {
                campaignId: CampaignService.hashId(campaignUnique),
            },
            data: {
                computedUntil,
            },
        });
    }
    static async updateErrorMessage(campaignUnique, error) {
        return await apiDbClient.campaignStatus.update({
            where: {
                campaignId: CampaignService.hashId(campaignUnique),
            },
            data: {
                error,
            },
        });
    }
    static async findManyDelay(query) {
        return await apiDbClient.campaign.findMany({
            where: {
                distributionChainId: !!query.chainId ? query.chainId : undefined,
                endTimestamp: {
                    gte: !!query.endTimestampLowerBound ? query.endTimestampLowerBound : moment().subtract(2, "week").unix(),
                },
            },
            select: {
                campaignId: true,
                computeChainId: true,
                startTimestamp: true,
                endTimestamp: true,
                distributionChainId: true,
                RewardToken: {
                    select: {
                        address: true,
                        symbol: true,
                        isTest: true,
                    },
                },
                Opportunity: {
                    select: {
                        name: true,
                        identifier: true,
                        type: true,
                    },
                },
                CampaignStatus: {
                    take: 1,
                },
            },
        });
    }
}
