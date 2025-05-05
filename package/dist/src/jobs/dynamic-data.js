// @ts-nocheck
/**
  @deprecated Used only for the v3/campaigns route
 */
import { Redis } from "@/cache";
import { dynamicDataBuilderFactory } from "@/engine/deprecated/dynamicData/factory";
import { campaignsToOldFormat } from "@/libs/deprecated-merklv3";
import { merklChainData } from "@/libs/merklChainData";
import { staticCampaignWithCache } from "@/libs/staticCampaigns";
import { OpportunityConvertorService } from "@/modules/v4/opportunity/opportunity.converter";
import { log } from "@/utils/logger";
import { ALL_CAMPAIGNS_FOR_CHAIN_AFTER } from "@/utils/queries/allCampaigns";
import { engineDbClient } from "@db";
import { Campaign, ChainId, NETWORK_LABELS } from "@sdk";
import moment from "moment";
// ─── Required Env Variables ──────────────────────────────────────────────────
const chainId = Number(process.env.CHAIN_ID);
if (!chainId)
    throw new Error("Environment variable CHAIN_ID is required.");
const highCampaignsChains = [ChainId.ARBITRUM, ChainId.POLYGON, ChainId.BLAST, ChainId.BASE];
export const main = async () => {
    if (chainId === ChainId.MAINNET) {
        await OpportunityConvertorService.logKeyAndTTLV3Opportunities(false, false, undefined, undefined);
        await OpportunityConvertorService.setV3Opportunities(false, false, undefined, undefined);
        log.info("✅ opportunity v3 cache updated successfully");
        await OpportunityConvertorService.logKeyAndTTLV3Opportunities(false, true, undefined, undefined);
        await OpportunityConvertorService.setV3Opportunities(false, true, undefined, undefined);
        log.info("✅ opportunity v3 test cache updated successfully");
    }
    let success = true;
    try {
        await Redis.safeSet(`MerklChainData_${chainId}`, await merklChainData(chainId));
    }
    catch (error) {
        log.error(`❌ update merklChainData cache failed for ${NETWORK_LABELS[chainId]}`, error);
        success = false;
    }
    log.local(`🔁 updating ${NETWORK_LABELS[chainId]} Campaigns cache`);
    let campaignsAfter = moment().subtract(3, "months").unix();
    if (highCampaignsChains.includes(chainId)) {
        campaignsAfter = moment().subtract(1, "months").unix();
    }
    const TWO_WEEKS_AGO = moment().subtract(2, "weeks").unix();
    try {
        const dynamicData = {};
        let staticData = (await engineDbClient.$queryRaw(ALL_CAMPAIGNS_FOR_CHAIN_AFTER(chainId, campaignsAfter)));
        log.local(`Data length before filtering: ${staticData.length}`);
        const mainParameters = {};
        staticData = staticData.filter(campaign => {
            if (campaign.endTimestamp < TWO_WEEKS_AGO && campaign.campaignType === Campaign.CLAMM) {
                campaign.campaignParameters.forwarders = [];
            }
            mainParameters[campaign.mainParameter] = true;
            return true;
        });
        log.local(`Data length after filtering: ${staticData.length}`);
        if (!!staticData) {
            // Build list of existing campaign types for this chain
            const campaignTypes = !staticData
                ? []
                : staticData
                    .map(campaign => campaign.campaignType)
                    .reduce((prev, campaignType) => {
                    if (!prev.includes(campaignType))
                        prev.push(campaignType);
                    return prev;
                }, []);
            // Fetch dynamic data for all these types
            const promisesPerType = campaignTypes.map(async (campaignType) => {
                const campaigns = staticData.filter(campaign => campaign.campaignType === campaignType);
                await dynamicDataBuilderFactory(campaignType)
                    .build(chainId, campaigns)
                    .then(r => {
                    for (const d of r) {
                        if (!!d) {
                            // Main Parameter OVERRIDING
                            if (d.campaignType === Campaign.SILO && d.campaignParameters.whitelist?.length === 1) {
                                d.mainParameter = `${d.mainParameter}-${d.campaignParameters.whitelist[0]}`;
                            }
                            if (!dynamicData[`${d.campaignType}_${d.mainParameter}`])
                                dynamicData[`${d.campaignType}_${d.mainParameter}`] = {};
                            dynamicData[`${d.campaignType}_${d.mainParameter}`][d.campaignId] = d;
                        }
                    }
                });
            });
            await Promise.all(promisesPerType);
        }
        if (!!dynamicData && Object.keys(dynamicData).length > 0) {
            await Redis.safeSet(`Campaigns_${chainId}`, dynamicData);
            // Set live or future campaigns
            const liveDynamicData = {};
            for (const [type_mainParameter, value] of Object.entries(dynamicData)) {
                for (const [campaignId, data] of Object.entries(value)) {
                    if (data.endTimestamp > moment().unix()) {
                        if (!liveDynamicData[type_mainParameter]) {
                            liveDynamicData[type_mainParameter] = {};
                        }
                        liveDynamicData[type_mainParameter][campaignId] = data;
                    }
                }
            }
            await Redis.safeSet(`LiveCampaigns_${chainId}`, liveDynamicData);
            const merklChainData = await Redis.get("MerklChainData", chainId);
            await Redis.safeSet(`CampaignsOldFormat_${chainId}`, campaignsToOldFormat(dynamicData, merklChainData));
            await Redis.safeSet(`LiveCampaignsOldFormat_${chainId}`, campaignsToOldFormat(liveDynamicData, merklChainData));
            log.info(`✅ ${NETWORK_LABELS[chainId]} caches updated successfully`);
        }
        else {
            if (chainId === ChainId.CORE || chainId === ChainId.THUNDERCORE) {
                log.info(`⚠️ no campaigns found for ${NETWORK_LABELS[chainId]}, setting empty cache`);
                for (const key of [
                    "Campaigns",
                    "LiveCampaigns",
                    "CampaignsOldFormat",
                    "LiveCampaignsOldFormat",
                ]) {
                    await Redis.safeSet(`${key}_${chainId}`, {});
                }
                log.info(`✅ ${NETWORK_LABELS[chainId]} caches updated - empty cache`);
            }
        }
    }
    catch (error) {
        log.error(`❌ update Campaigns cache failed for ${NETWORK_LABELS[chainId]}`, error);
        success = false;
    }
    // This is independant of campaigns cache update, so not in the if condition
    try {
        await staticCampaignWithCache(chainId);
    }
    catch (error) {
        log.error(`❌ update Campaigns cache failed for ${NETWORK_LABELS[chainId]}`, error);
    }
    return { success };
};
try {
    await main();
    process.exit(0);
}
catch (err) {
    console.error(err);
    process.exit(1);
}
