// One-off script to modify opportunity metadata
import { metadataBuilderFactory } from "@/engine/metadata/factory";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { log } from "@/utils/logger";
import { apiDbClient } from "@db";
import { Campaign as CampaignType } from "@sdk";
const opportunities = await apiDbClient.opportunity.findMany({
    select: {
        id: true,
        name: true,
        explorerAddress: true,
        depositUrl: true,
        identifier: true,
        MainProtocol: {
            select: {
                url: true,
            },
        },
        type: true,
        Campaigns: {
            take: 1,
            include: {
                RewardToken: {
                    select: {
                        address: true,
                    },
                },
            },
        },
    },
    where: {
        status: "PAST",
        id: {
            gt: "8105750301162585090",
        },
    },
    orderBy: {
        id: "asc",
    },
});
for (const opportunity of opportunities) {
    try {
        const campaign = CampaignService.format(await CampaignService.findUniqueOrThrow(opportunity.Campaigns[0].id));
        const metadata = await metadataBuilderFactory(CampaignType[opportunity.type]).build(campaign, opportunity.identifier);
        if (!!metadata?.explorerAddress && !opportunity.explorerAddress) {
            await apiDbClient.opportunity.update({
                where: {
                    id: opportunity.id,
                },
                data: {
                    explorerAddress: metadata.explorerAddress,
                },
            });
            log.info(`updated explorerAdd for ${opportunity.id} - ${opportunity.name} to ${metadata.explorerAddress}`);
        }
        if (!!metadata?.depositUrl &&
            (!opportunity.depositUrl ||
                (opportunity.depositUrl === opportunity?.MainProtocol?.url &&
                    metadata.depositUrl !== opportunity?.MainProtocol?.url))) {
            await apiDbClient.opportunity.update({
                where: {
                    id: opportunity.id,
                },
                data: {
                    depositUrl: metadata.depositUrl,
                },
            });
            log.info(`updated depositUrl for ${opportunity.id} - ${opportunity.name} from ${opportunity.depositUrl} to ${metadata.depositUrl}`);
        }
    }
    catch (e) {
        console.error(e);
    }
}
process.exit(0);
