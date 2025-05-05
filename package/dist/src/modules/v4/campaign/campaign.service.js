import { HttpError } from "@/errors";
import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { StatusService } from "@/modules/v4/status/status.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { CannotParseOpportunity, InvalidParameter } from "@/utils/error";
import { log } from "@/utils/logger";
import { parseDistributionType } from "@/utils/parseDistributionType";
import { Campaign as CampaignType, HOOK, NETWORK_LABELS, } from "@sdk";
import { utils } from "ethers";
import moment from "moment";
import { ChainService } from "../chain/chain.service";
import { ComputedValueService } from "../computedValue/computedValue.service";
import { CampaignRepository } from "./campaign.repository";
export class CampaignService {
    static hashId(campaign) {
        return Bun.hash(`${campaign.distributionChain}${campaign.campaignId}`).toString();
    }
    static splitIdOrThrow(chainAndCampaignId) {
        if (!chainAndCampaignId.includes("-"))
            throw new InvalidParameter("Campaign id should be formatted as chainId-campaignId");
        const [chainId, campaignId] = chainAndCampaignId.split("-");
        return { distributionChain: +chainId, campaignId };
    }
    static async getPastCampaigns(query) {
        return await CampaignRepository.getPastCampaigns(query);
    }
    static async getFutureCampaigns(query) {
        return await CampaignRepository.getFutureCampaigns(query);
    }
    static async getLiveCampaigns(query) {
        return await CampaignRepository.getLiveCampaigns(query);
    }
    static async countLives(query) {
        return await CampaignRepository.countLives(query);
    }
    static async create(body, dryRun = false) {
        log.info(`creating campaign ${body.campaignId} on ${NETWORK_LABELS[body.chainId]}`);
        const campaignType = CampaignService.getTypeFromV3(body.type);
        const id = CampaignService.hashId({ distributionChain: body.chainId, campaignId: body.campaignId });
        const [rewardToken] = await TokenService.findManyOrCreate([
            { chainId: body.chainId, address: body.rewardTokenAddress },
        ]);
        if (!rewardToken)
            throw new Error(`unable to fetch data for token ${body.rewardTokenAddress}`);
        const chain = await ChainService.findUniqueOrThrow(body.chainId);
        const params = JSON.parse(body.params);
        const campaign = {
            distributionChainId: body.chainId,
            computeChainId: body.computeChainId,
            campaignId: body.campaignId,
            id,
            type: campaignType,
            subType: body.subType ?? null,
            rewardToken,
            params,
            endTimestamp: Number(body.endTimestamp),
            startTimestamp: Number(body.startTimestamp),
            distributionType: parseDistributionType(params),
            amount: body.amount,
            creatorAddress: body.creator,
            createdAt: new Date().toISOString(),
            chain,
            parentCampaignId: body.parentCampaignId,
            rootCampaignId: body.rootCampaignId,
        };
        // Separate Worldchain ID only campaign opportunities
        if (campaign.params.hooks?.some(hook => hook.hookType === HOOK.WORLDCHAINID)) {
            body.opportunityIdentifier += "WORLDCHAINID";
        }
        try {
            const opportunity = await OpportunityService.createFromCampaign(campaign, body.opportunityIdentifier, false, dryRun);
            if (dryRun)
                return opportunity;
        }
        catch (_err) {
            throw new CannotParseOpportunity(campaign.campaignId, campaign.distributionChainId, campaign.type);
        }
        return await CampaignRepository.upsert(campaign, body.opportunityIdentifier);
    }
    /**
     * @dev back-office function
     * @dev deprecated should be replaced with a manual override
     */
    static async updateMetaData(campaign) {
        const campaignUnique = {
            distributionChain: campaign.distributionChain,
            campaignId: campaign.campaignId,
        };
        const id = CampaignService.hashId(campaignUnique);
        let existingCampaign = await CampaignService.findUnique(campaign);
        if (!existingCampaign) {
            await CampaignService.fill([campaignUnique]);
            existingCampaign = await CampaignService.findUniqueOrThrow(campaign);
        }
        const params = existingCampaign.params;
        if ("url" in params) {
            params.url = campaign.url;
        }
        const updatedParams = JSON.stringify(params);
        return await CampaignRepository.updateParams(id, updatedParams);
    }
    /**
     * @dev back-office function for manual overrides
     */
    static async updateCreator(campaign) {
        const id = CampaignService.hashId({
            distributionChain: campaign.distributionChain,
            campaignId: campaign.campaignId,
        });
        return await CampaignRepository.updateCreator(id, campaign.creatorAddress);
    }
    /**
     * @dev back-office function
     */
    static async moveToOpportunity(data, upsert = false) {
        const id = CampaignService.hashId({
            distributionChain: data.distributionChain,
            campaignId: data.campaignId,
        });
        const campaign = CampaignService.format(await CampaignService.findUniqueOrThrow(id));
        if (campaign.type === "ERC20" && data.opportunityIdentifier === undefined) {
            const campaignParams = campaign.params;
            data.opportunityIdentifier = utils
                .keccak256(utils.defaultAbiCoder.encode(["string", "address[]"], [campaignParams.targetToken, campaignParams.whitelist.sort()]))
                .slice(0, 42);
        }
        if (data.opportunityIdentifier === undefined) {
            throw new HttpError("Bad Request: opportunityIdentifier is required for CampaignService campaign type", 400);
        }
        const newOpportunityId = OpportunityService.hashId({
            chainId: campaign.computeChainId,
            identifier: data.opportunityIdentifier,
            type: campaign.type,
        });
        // Create new opportunity
        await OpportunityService.createFromCampaign(campaign, data.opportunityIdentifier, upsert);
        // Move campaign to new opportunity
        await CampaignRepository.updateOpportunity(id, newOpportunityId);
        // Return new opportunityId
        return (await CampaignService.findUniqueOrThrow(data)).opportunityId;
    }
    /**
     * Get the list of campaigns satisfying the query
     * @param query
     * @returns A list of campaigns
     */
    static async findMany(query) {
        if (query.subType && !query.type)
            throw new HttpError("Bad Request: Cannot specify a subType without a type", 400);
        const campaigns = await CampaignRepository.findMany(query);
        return campaigns.map(CampaignService.format);
    }
    static async findAndGroupByChains(query) {
        return Map.groupBy(await CampaignService.findMany(query), campaign => campaign.chain.id);
    }
    static async countByChains(query) {
        return CampaignService.countBy(await CampaignService.findAndGroupByChains({ ...query, items: 0 }));
    }
    static async findAndGroupByTypes(query) {
        return Map.groupBy(await CampaignService.findMany(query), campaign => campaign.type);
    }
    static async countByTypes(query) {
        return CampaignService.countBy(await CampaignService.findAndGroupByTypes({ ...query, items: 0 }));
    }
    static async findAndGroupByProtocols(query) {
        return Map.groupBy(await CampaignService.findMany({ ...query, withOpportunity: true }), campaign => campaign.Opportunity.mainProtocolId);
    }
    static async countByProtocols(query) {
        return CampaignService.countBy(await CampaignService.findAndGroupByProtocols({ ...query, items: 0 }));
    }
    static countBy(campaignsMap) {
        const count = {};
        for (const [key, value] of campaignsMap) {
            count[key] = value.length;
        }
        return count;
    }
    /**
     * Counts the number of campaigns that complies to query
     * @description used for pagination purposes
     * @param query
     * @returns the number of campaigns
     */
    static async countMany(query) {
        if (query.subType && !query.type) {
            throw new HttpError("Bad Request: Cannot specify a subType without a type", 400);
        }
        return await CampaignRepository.countMany(query);
    }
    static async checkIfExist(campaign) {
        const id = typeof campaign === "string" ? campaign : CampaignService.hashId(campaign);
        return !!(await CampaignRepository.findUnique(id));
    }
    static async findUnique(campaign) {
        const id = typeof campaign === "string" ? campaign : CampaignService.hashId(campaign);
        return await CampaignRepository.findUnique(id);
    }
    static async findUniqueOrThrow(campaign, withOpportunity = false) {
        const id = typeof campaign === "string" ? campaign : CampaignService.hashId(campaign);
        return await CampaignRepository.findUniqueOrThrow(id, withOpportunity);
    }
    static async findCampaignValue(params) {
        if (params.campaignId.includes("-") && params.campaignId.startsWith("0x")) {
            const [campaignId, distributionChain] = params.campaignId.split("-");
            return await ComputedValueService.findCampaignValue(CampaignService.hashId({ campaignId, distributionChain: Number.parseInt(distributionChain) }), params.field);
        }
        const campaignId = (await CampaignService.findMany({ campaignId: params.campaignId }))[0].id;
        return await ComputedValueService.findCampaignValue(campaignId, params.field);
    }
    static async removeManualOverride(campaign, field) {
        const id = typeof campaign === "string" ? campaign : CampaignService.hashId(campaign);
        return await CampaignRepository.removeManualOverride(id, field);
    }
    static async findCampaignsToProcess(distributionChainId) {
        return (await CampaignRepository.findCampaignsToProcess(distributionChainId))
            .filter(campaign => campaign.endTimestamp > (campaign?.CampaignStatus?.[0]?.computedUntil ?? 0n)) // Filter out campaigns that have already been processed
            ?.sort((a, b) => Number((a.CampaignStatus?.[0]?.processingStarted ?? 0n) - (b.CampaignStatus?.[0]?.processingStarted ?? 0n))); // Sort by processingStarted, that is to say campaigns that were processed the most long ago
    }
    static async findNextCampaignToProcess(chainId) {
        const campaigns = await CampaignService.findCampaignsToProcess(chainId);
        return { campaignId: campaigns?.[0]?.campaignId };
    }
    static async pickCampaignToProcess(chainId) {
        const campaigns = await CampaignService.findCampaignsToProcess(chainId);
        for (const campaign of campaigns) {
            try {
                await StatusService.update({
                    distributionChain: chainId,
                    campaignId: campaign.campaignId,
                }, { value: "PROCESSING" });
                return { campaignId: campaign.campaignId };
            }
            catch { }
        }
        throw new Error(`No campaign to process found on ${NETWORK_LABELS[chainId]}`);
    }
    static async findEngineCampaigns(campaigns) {
        const campaignsFromEngine = await CampaignRepository.getFromEngineDbWithId(campaigns);
        for (const campaign of campaigns) {
            if (campaignsFromEngine.findIndex(c => c.campaignId === campaign.campaignId) === -1) {
                log.warn(`Campaign ${campaign.campaignId} on ${NETWORK_LABELS[campaign.distributionChain]} not found in engine db`);
            }
        }
        return campaignsFromEngine.map(campaign => {
            return {
                amount: campaign.amount,
                chainId: campaign.chainId,
                computeChainId: campaign.computeChainId,
                creator: campaign.creator,
                endTimestamp: campaign.endTimestamp.toString(),
                campaignId: campaign.campaignId,
                opportunityIdentifier: campaign.mainParameter,
                params: JSON.stringify(campaign.campaignParameters),
                rewardTokenAddress: campaign.rewardToken,
                startTimestamp: campaign.startTimestamp.toString(),
                type: campaign.campaignType,
                subType: campaign.campaignSubType,
            };
        });
    }
    static async fill(campaigns) {
        const campaignsFromEngine = await CampaignService.findEngineCampaigns(campaigns);
        let success = 0;
        let fail = 0;
        for (const engineCampaign of campaignsFromEngine) {
            try {
                await CampaignService.create(engineCampaign);
                success++;
            }
            catch {
                log.warn(`Failed to create campaign ${engineCampaign.campaignId} on ${NETWORK_LABELS[engineCampaign.chainId]}`);
                fail++;
            }
        }
        return { success, fail };
    }
    static async findChains() {
        return await CampaignRepository.findChains();
    }
    /**
     * Returns the campaign data
     * @param type index of Campaign enum from sdk
     * @returns a string
     */
    static getTypeFromV3(type) {
        return CampaignType[type];
    }
    /**
     * Split a campaigns array into three array for each status
     * @param campaigns
     * @param timestamp to compare to campaigns timestamps
     * @returns a status => campaigns map
     */
    static splitOnStatus(campaigns, timestamp = moment().unix()) {
        const past = campaigns.filter(({ endTimestamp: end }) => end <= timestamp);
        const live = campaigns.filter(({ startTimestamp: start, endTimestamp: end }) => timestamp >= start && timestamp < end);
        const soon = campaigns.filter(({ startTimestamp: start }) => start > timestamp);
        return { past, live, soon };
    }
    /**
     * Convert raw
     * @param query
     * @returns A list of opportunities
     * TODO: remove CampaignService function in favor of prisma client extensions
     */
    static format(campaign) {
        const { DistributionChain, ComputeChain, Creator, RewardToken, params, CampaignStatus, createdAt, manualOverrides: _, description, parentCampaignId, rootCampaignId, ...c } = campaign;
        const updatedParams = params;
        return {
            ...c,
            params: updatedParams,
            chain: ComputeChain,
            endTimestamp: Number(c.endTimestamp),
            startTimestamp: Number(c.startTimestamp),
            rewardToken: TokenService.format(RewardToken),
            distributionChain: DistributionChain === null ? undefined : DistributionChain,
            // Todo: need to be change to single 1 to 1 with campaign
            campaignStatus: CampaignStatus?.[0] ? StatusService.format(CampaignStatus?.[0]) : undefined,
            creatorAddress: Creator.address,
            creator: Creator,
            createdAt: createdAt.toISOString(),
            description: !!description ? description : undefined,
            parentCampaignId: parentCampaignId ?? undefined,
            rootCampaignId: rootCampaignId ?? undefined,
        };
    }
    /**
     * @deprecated Used only in tentative position fetcher
     */
    static formatAsCampaignParameters(campaign) {
        return {
            campaignSubType: campaign.subType ?? 0,
            campaignParameters: campaign.params,
            computeChainId: campaign.computeChainId,
            campaignId: campaign.campaignId,
            rewardToken: campaign.rewardToken.address,
            amount: campaign.amount,
        };
    }
    /**
     * Shortcut to get daily amount from total
     * @param start timestamp
     * @param end timestamp
     * @param amount
     * @returns daily token amount
     */
    static getDailyAmount(start, end, amount) {
        const timespan = Math.abs(Number(end - start));
        const isWithinTimespan = moment().unix() > start && moment().unix() < end;
        const dayspan = Math.max(1, Math.floor(timespan / (60 * 60 * 24)));
        const dailyAmount = isWithinTimespan ? BigInt(amount) / BigInt(dayspan) : 0n;
        return dailyAmount;
    }
    static createFakeCampaign(body) {
        return {
            amount: body.amount ?? (10n ** 18n).toString(),
            campaignId: body.campaignId ?? "campaignId",
            computeChainId: body.computeChainId,
            campaignParameters: body.params,
            campaignSubType: body.subType ?? 0,
            campaignType: CampaignType[body.type],
            chainId: body.distributionChainId ?? 0,
            creator: body.creatorAddress ?? "creator.address",
            index: 0, // DEPRECATED
            mainParameter: "opportunityIdentifier",
            endTimestamp: body.endTimestamp,
            startTimestamp: body.startTimestamp,
            rewardToken: body.rewardToken,
            amm: body.params?.amm,
        };
    }
    static createFakeCampaignEngine(body) {
        const fakeCampaign = CampaignService.createFakeCampaign(body);
        return {
            computeChainId: fakeCampaign.computeChainId,
            chainId: fakeCampaign.chainId,
            campaignId: fakeCampaign.campaignId,
            creator: fakeCampaign.creator,
            type: fakeCampaign.campaignType,
            subType: fakeCampaign.campaignSubType,
            rewardTokenAddress: fakeCampaign.rewardToken,
            amount: fakeCampaign.amount,
            opportunityIdentifier: fakeCampaign.mainParameter,
            startTimestamp: fakeCampaign.startTimestamp.toString(),
            endTimestamp: fakeCampaign.endTimestamp.toString(),
            params: JSON.stringify(fakeCampaign.campaignParameters),
        };
    }
    static async getMetrics(campaignId) {
        const id = typeof campaignId === "string" ? campaignId : CampaignService.hashId(campaignId);
        const campaign = await CampaignRepository.findUniqueOrThrow(id, false);
        const [tvlRecords, aprRecords, dailyRewardsRecords, walletCount] = await Promise.all([
            CampaignRepository.getTvlRecords(campaign),
            CampaignRepository.getAprRecords(campaign),
            CampaignRepository.getDailyRewardsRecords(campaign),
            CampaignRepository.getWalletCountOverTime(campaign),
        ]);
        return {
            tvlRecords,
            aprRecords,
            dailyRewardsRecords,
            walletCount,
            tvlInflowPerDollar: tvlRecords.length > 1
                ? (BigInt(tvlRecords[tvlRecords.length - 1].total) - BigInt(tvlRecords[0].total)) /
                    ((BigInt(campaign.amount) / BigInt(10 ** campaign.RewardToken.decimals)) *
                        BigInt(campaign.RewardToken.price ?? 1))
                : 0n,
        };
    }
}
