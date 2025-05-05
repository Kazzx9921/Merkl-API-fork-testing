import { dynamicDataBuilderFactory } from "@/engine/deprecated/dynamicData/factory";
import { campaignTVLBuilderFactory } from "@/engine/tvl/factory";
import { HttpError } from "@/errors";
import { InvalidParameter } from "@/errors/InvalidParameter.error";
import { ComputedValueService } from "@/modules/v4//computedValue/computedValue.service";
import { TokenService } from "@/modules/v4//token/token.service";
import { AprService } from "@/modules/v4/apr/apr.service";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { OpportunityRepository } from "@/modules/v4/opportunity/opportunity.repository";
import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { RewardService } from "@/modules/v4/reward/reward.service";
import { TvlService } from "@/modules/v4/tvl/tvl.service";
import bigintToString from "@/utils/bigintToString";
import { log } from "@/utils/logger";
import { parseDistributionType } from "@/utils/parseDistributionType";
import { AprType, DistributionType } from "@db/api";
import { Campaign as CampaignType, ChainId, DAY, HOUR, NETWORK_LABELS, bigIntToNumber, } from "@sdk";
import moment from "moment";
export class DynamicDataService {
    /**
     * @notice Updates all records for opportunities associated to the given campaigns
     *
     * @dev The list must ONLY contain campaigns of the same type and the same computeChainId
     */
    static async checkValidUpdate(opportunityId, newApr) {
        const previousRecords = await OpportunityRepository.findUnique(opportunityId);
        const previousApr = previousRecords?.apr;
        const lastUpdate = previousRecords?.AprRecords.reduce((acc, record) => Math.max(acc, Number(record.timestamp)), 0);
        if (previousApr && lastUpdate && moment.now() / 1000 - lastUpdate < HOUR) {
            if (newApr / previousApr < 0.5 || newApr / previousApr > 2)
                return false;
        }
        return true;
    }
    static async update(chainId, type, campaigns, dryRun = false) {
        // 1 - Safety check
        for (const campaign of campaigns) {
            if (campaign.computeChainId !== chainId || campaign.campaignType !== type) {
                throw new InvalidParameter(`Campaign ${campaign.campaignId} is not of type ${type} on chain ${chainId}`);
            }
        }
        const initialOpportunityIds = new Set(campaigns.map(c => OpportunityService.hashId({ chainId, identifier: c.mainParameter, type: CampaignType[+type] }))).size;
        // 2 - If the new dynamic data builder is available, use it
        const builder = campaignTVLBuilderFactory(type);
        if (!!builder) {
            // 2.a - Call the builder
            const records = await DynamicDataService.fetchWithRecursiveErrorHandling(builder.build, campaigns, chainId);
            // 2.b - Regroup by opportunity and build records
            const opportunityIds = new Set(records.map(r => OpportunityService.hashId({
                chainId,
                identifier: r.campaign.mainParameter,
                type: CampaignType[+type],
            })));
            const now = moment().utc().unix();
            const updates = [];
            for (const opportunityId of opportunityIds) {
                const recordsForOpportunity = records.filter(r => OpportunityService.hashId({
                    chainId,
                    identifier: r.campaign.mainParameter,
                    type: CampaignType[+type],
                }) === opportunityId);
                const tvl = {
                    timestamp: BigInt(now),
                    total: 0,
                    breakdowns: [],
                };
                const dailyRewards = {
                    timestamp: BigInt(now),
                    total: 0,
                    breakdowns: [],
                };
                const apr = {
                    timestamp: BigInt(now),
                    cumulated: 0,
                    breakdowns: [],
                };
                for (const record of recordsForOpportunity) {
                    const { startTimestamp, endTimestamp, rewardToken: rewardTokenAddress, campaignParameters } = record.campaign;
                    // 2.b.1 TVL of the opportunity is the max of all TVLs of the campaigns
                    if (record.tvl > tvl.total) {
                        tvl.total = record.tvl;
                        tvl.breakdowns = record.tvlBreakdown;
                    }
                    if (!!record.displayTvl && record.displayTvl > tvl.total) {
                        tvl.total = record.displayTvl;
                    }
                    try {
                        // 2.b.2 Daily rewards is the sum of all daily rewards of the campaigns
                        const timespan = endTimestamp - startTimestamp;
                        const isWithinTimespan = moment().unix() > startTimestamp && moment().unix() < endTimestamp;
                        const dayspan = Math.max(1, Math.floor(timespan / DAY));
                        let dailyAmount = isWithinTimespan ? BigInt(record.campaign.amount) / BigInt(dayspan) : BigInt(0);
                        let rewardToken;
                        try {
                            rewardToken = await TokenService.findUniqueOrThrow({
                                address: rewardTokenAddress,
                                chainId: record.campaign.chainId,
                            });
                        }
                        catch {
                            await TokenService.findManyOrCreate([{ address: rewardTokenAddress, chainId: record.campaign.chainId }]);
                            rewardToken = await TokenService.findUniqueOrThrow({
                                address: rewardTokenAddress,
                                chainId: record.campaign.chainId,
                            });
                        }
                        let campaignDailyValue = await TokenService.getValueByTokenId(TokenService.hashId({ address: rewardTokenAddress, chainId: record.campaign.chainId }), dailyAmount);
                        // Fixed APR campaigns
                        const distributionType = parseDistributionType(campaignParameters);
                        if (distributionType !== DistributionType.DUTCH_AUCTION) {
                            log.local(`[${NETWORK_LABELS[chainId]}][${CampaignType[type]}] calculating fixed APR for ${record.campaign.campaignId}`);
                            const { apr: fixedApr } = campaignParameters;
                            const targetApr = Number(fixedApr);
                            if (distributionType === DistributionType.FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE) {
                                // Case 1: Fixed $ amount of reward per $ of liquidity
                                campaignDailyValue = targetApr * tvl.total;
                                dailyAmount = BigInt((campaignDailyValue / (rewardToken.price ?? 1)) * 10 ** rewardToken.decimals);
                            }
                            if (distributionType === DistributionType.FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE) {
                                // Return 0 if reward token price is invalid
                                // targetApr represents a yearly # amount of reward per $ of liquidity
                                dailyAmount =
                                    (BigInt(Math.floor((targetApr * tvl.total * 10 ** 6) / 365)) * 10n ** BigInt(rewardToken.decimals)) /
                                        10n ** 6n;
                                campaignDailyValue = bigIntToNumber(dailyAmount, rewardToken.decimals) * (rewardToken.price ?? 1);
                            }
                        }
                        dailyRewards.total += campaignDailyValue;
                        if (campaignDailyValue > 0) {
                            dailyRewards.breakdowns.push({
                                campaignId: CampaignService.hashId({
                                    campaignId: record.campaign.campaignId,
                                    distributionChain: record.campaign.chainId,
                                }),
                                value: campaignDailyValue,
                                amount: dailyAmount,
                                token: rewardToken,
                            });
                        }
                        // 2.b.3 APR is obtained from daily rewards and tvl following the distribution type
                        let aprCampaignValue;
                        if (rewardToken.isPoint) {
                            aprCampaignValue = campaignDailyValue / record.tvl;
                        }
                        else {
                            aprCampaignValue = (campaignDailyValue * 365 * 100) / record.tvl;
                        }
                        let lastEligibilityRatio = 1;
                        if (!!campaignParameters.hooks?.length) {
                            lastEligibilityRatio =
                                (await ComputedValueService.findCampaignValue(Bun.hash(`${record.campaign.chainId}${record.campaign.campaignId}`).toString(), "averageBoost"))?.averageBoost ?? 1;
                        }
                        const forfeitingBoost = 1;
                        if (!!campaignParameters.hooks?.length) {
                            lastEligibilityRatio =
                                (await ComputedValueService.findCampaignValue(Bun.hash(`${record.campaign.chainId}${record.campaign.campaignId}`).toString(), "forfeitingBoost"))?.forfeitingBoost ?? 1;
                        }
                        aprCampaignValue = aprCampaignValue * lastEligibilityRatio * forfeitingBoost;
                        if (aprCampaignValue === Number.POSITIVE_INFINITY)
                            aprCampaignValue = 10_001;
                        if (aprCampaignValue > 0) {
                            apr.cumulated += aprCampaignValue;
                            apr.breakdowns.push({
                                identifier: record.campaign.campaignId,
                                type: AprType.CAMPAIGN,
                                value: aprCampaignValue,
                            });
                        }
                    }
                    catch (_err) {
                        log.error("failed to calculate daily rewards", _err);
                    }
                }
                updates.push({
                    opportunityId,
                    tvl,
                    apr,
                    dailyRewards,
                });
            }
            // 2.c - Update the records
            if (!dryRun) {
                for (const update of updates) {
                    try {
                        if (chainId !== ChainId.ETHERLINK ||
                            (await DynamicDataService.checkValidUpdate(update.opportunityId, update.apr.cumulated))) {
                            await OpportunityRepository.updateDynamicData(update.opportunityId, update.apr, update.tvl, update.dailyRewards);
                        }
                    }
                    catch (err) {
                        throw new HttpError("Failed to update dynamic data", 500, {
                            err,
                            chainId,
                            type,
                        });
                    }
                }
                log.info(`[${NETWORK_LABELS[chainId]}][${CampaignType[type]}] updated ${updates.length}/${initialOpportunityIds} opportunities using campaignTVLBuilder`);
            }
            return updates;
        }
        const dynamicDataArray = [];
        const dynamicData = await DynamicDataService.fetchWithRecursiveErrorHandling(dynamicDataBuilderFactory(type).build, campaigns, chainId);
        const oppMap = {};
        for (const data of dynamicData) {
            if (!!data) {
                // Main Parameter OVERRIDING
                if (data.campaignType === CampaignType.SILO && data.campaignParameters.whitelist?.length === 1)
                    data.mainParameter = `${data.mainParameter}-${data.campaignParameters.whitelist[0]}`;
                if (!oppMap[`${data.campaignType}_${data.mainParameter}`])
                    oppMap[`${data.campaignType}_${data.mainParameter}`] = {};
                oppMap[`${data.campaignType}_${data.mainParameter}`][data.campaignId] = data;
            }
        }
        for (const entry of Object.entries(oppMap)) {
            const [type, mainParameter] = entry[0].split("_");
            const apr = AprService.extractFromDynamicData(+type, Object.values(entry[1]));
            const tvl = TvlService.extractFromDynamicData(+type, Object.values(entry[1]));
            const dailyRewards = await RewardService.extractDailyRewardsRecordFromDynamicData(+type, Object.values(entry[1]));
            const opportunityId = OpportunityService.hashId({
                chainId,
                identifier: mainParameter,
                type: CampaignType[+type],
            });
            try {
                if (!dryRun)
                    if (await DynamicDataService.checkValidUpdate(opportunityId, apr.cumulated)) {
                        await OpportunityRepository.updateDynamicData(opportunityId, apr, tvl, dailyRewards);
                    }
            }
            catch (err) {
                log.error(`failed to update dynamic data for ${opportunityId}`, err);
            }
            dynamicDataArray.push(bigintToString({ campaignId: Object.values(entry[1])[0].campaignId, apr, tvl, dailyRewards }));
        }
        log.info(`[${NETWORK_LABELS[chainId]}][${CampaignType[type]}] updated ${dynamicData.length}/${campaigns.length} campaigns`);
        return dynamicDataArray;
    }
    /**
     * @dev Test function used to create mock ERC20 static campaigns and check tvl and metadata
     */
    static async queryERC20DynamicData(chainId, tokenAddress, rewardTokenAddress, symbolRewardToken, decimals = 18) {
        const campaigns = [
            {
                campaignId: tokenAddress,
                amount: "1000000000000000000", // 1 EXR in wei
                campaignSubType: 0,
                chainId: chainId,
                computeChainId: chainId,
                creator: "0xexamplecreatoraddress",
                endTimestamp: 1672531199, // Example end timestamp
                index: 0,
                mainParameter: "0xexamplemainparameter",
                rewardToken: rewardTokenAddress,
                startTimestamp: 1672444800, // Example start timestamp
                lastEligibilityRatio: 1,
                campaignParameters: {
                    blacklist: [],
                    decimalsRewardToken: 18,
                    decimalsTargetToken: decimals,
                    duration: 30,
                    whitelist: [],
                    forwarders: [],
                    hooks: [],
                    shouldIgnore: false,
                    symbolRewardToken: symbolRewardToken,
                    symbolTargetToken: "EXT",
                    targetToken: tokenAddress,
                },
                campaignType: CampaignType.ERC20,
            },
        ];
        log.info(`querying mock campaign on chain: ${NETWORK_LABELS[chainId]}`);
        const result = await dynamicDataBuilderFactory(CampaignType.ERC20).build(Number(chainId), campaigns);
        return {
            priceTargetToken: result[0]?.typeInfo.priceTargetToken,
            totalSupply: result[0]?.typeInfo.totalSupply,
            blacklistedSupply: result[0]?.typeInfo.blacklistedSupply,
            cardName: result[0]?.typeInfo.cardName,
            tvl: result[0]?.typeInfo.tvl,
            type: result[0]?.type ?? "defaultType",
        };
    }
    /**
     * @dev Recursive function to handle errors in fetching dynamic data
     */
    static async fetchWithRecursiveErrorHandling(fn, campaigns, chainId) {
        // Base case: empty input
        if (campaigns.length === 0)
            return [];
        try {
            return await fn(chainId, campaigns);
        }
        catch (error) {
            // Base case: single failing campaign
            if (campaigns.length === 1) {
                log.error(`Permanent failure for campaign ${campaigns[0].campaignId}`, error);
                return [];
            }
            // Recursive binary split
            const mid = Math.ceil(campaigns.length / 2);
            const [firstResults, secondResults] = await Promise.all([
                // Process first half with error propagation
                DynamicDataService.fetchWithRecursiveErrorHandling(fn, campaigns.slice(0, mid), chainId),
                // Process second half with error propagation
                DynamicDataService.fetchWithRecursiveErrorHandling(fn, campaigns.slice(mid), chainId),
            ]);
            return [...firstResults, ...secondResults];
        }
    }
}
