import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { DynamicDataService } from "@/modules/v4/dynamicData/dynamicData.service";
import { OpportunityConvertorService } from "@/modules/v4/opportunity/opportunity.converter";
import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { logger } from "@/utils/logger";
import { Campaign as CampaignType } from "@sdk";
import moment from "moment";
// ─── Required Env Variables ──────────────────────────────────────────────────
const chainId = Number(process.env.CHAIN_ID);
if (!chainId)
    throw new Error("Environment variable CHAIN_ID is required.");
// ─── Update Dynamic Data (APR / TVL / Daily Rewards) ─────────────────────────
const main = async () => {
    // Update status of opportunities
    // 1. Get current live opportunities or opportunities with live campaigns
    const liveOpportunities = await OpportunityService.findLiveWithCampaigns(chainId);
    // 2. For each currently live opportunities, infer its updated status by looping through its campaigns
    // This should handle:
    // - Opportunities flagged as "SOON" once they turn live
    // - Opportunities flagged as "LIVE" once they are not live anymore
    const now = moment().unix();
    for (const opportunity of liveOpportunities) {
        let status = "PAST";
        const campaigns = opportunity.campaigns;
        for (const campaign of campaigns) {
            if (status !== "LIVE" && status !== "SOON" && campaign.endTimestamp < now)
                status = "PAST";
            else if (campaign.startTimestamp < now && campaign.endTimestamp > now)
                status = "LIVE";
            else if (status !== "LIVE" && campaign.startTimestamp > now)
                status = "SOON";
        }
        if (status !== "LIVE" && (opportunity.apr !== 0 || opportunity.dailyRewards !== 0))
            await OpportunityService.update(opportunity.id, { apr: 0, dailyRewards: 0 });
        if (opportunity.status !== status) {
            await OpportunityService.update(opportunity.id, { status });
        }
    }
    // 3. Update the status of the opportunities associated to future campaigns
    const futureOpportunities = await CampaignService.getFutureCampaigns({ computeChainId: chainId });
    const liveOpportunityIds = (await CampaignService.getLiveCampaigns({ computeChainId: chainId })).map(c => c.Opportunity.id);
    const idToUpdate = futureOpportunities
        ?.filter(c => !liveOpportunityIds.includes(c.Opportunity.id) && c.Opportunity.status !== "SOON")
        .map(c => c.Opportunity.id);
    if (idToUpdate.length > 0) {
        await OpportunityService.updateMany(idToUpdate, { status: "SOON" });
        if (idToUpdate.length === 1)
            logger.info(`updated opportunity ${idToUpdate[0]} to SOON status.`);
        else
            logger.info(`updated ${idToUpdate.length} opportunities to SOON status.`);
    }
    // 4. Update the status of the opportunities associated to live campaigns
    await OpportunityService.updateMany(liveOpportunityIds, { status: "LIVE" });
    // 5. Update records for all live campaigns
    const liveCampaigns = (await CampaignService.findMany({ chainId, status: "LIVE", test: true, withOpportunity: true, items: 0 }))
        .concat(await CampaignService.findMany({ chainId, status: "SOON", test: true, withOpportunity: true, items: 0 }))
        .map(campaign => OpportunityConvertorService.convertV4CampaignToV3(CampaignType[campaign.type], campaign, campaign.Opportunity.identifier));
    const promises = [];
    for (const type of new Set(liveCampaigns.map(c => c.campaignType))) {
        promises.push(DynamicDataService.update(chainId, type, liveCampaigns.filter(c => c.campaignType === type)));
    }
    await Promise.allSettled(promises);
};
try {
    await main();
    process.exit(0);
}
catch (err) {
    console.error(err);
    process.exit(1);
}
