import { NotFoundError } from "@/errors";
import { VoidString } from "@/errors/VoidString.error";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { MerklRootService } from "@/modules/v4/merklRoot/merklRoot.service";
import { log } from "@/utils/logger";
import { RunStatus } from "@db/api";
import { HOUR, MAX_COMPUTE_JOB_TIME, NETWORK_LABELS, getMultisigURL, registry } from "@sdk";
import moment from "moment";
import { StatusRepository } from "./status.repository";
export class StatusService {
    static format(status) {
        return {
            ...status,
            computedUntil: Number(status.computedUntil),
            processingStarted: Number(status.processingStarted),
        };
    }
    static async findMany(query) {
        return await StatusRepository.findMany(query);
    }
    static async findManyByCampaignId(campaignId) {
        return await StatusRepository.findManyByCampaignId(campaignId);
    }
    static async findUniqueOrThrow(campaignUnique) {
        const campaignId = typeof campaignUnique === "string" ? campaignUnique : CampaignService.hashId(campaignUnique);
        return await StatusRepository.findUniqueOrThrow(campaignId);
    }
    static async findUnique(campaignUnique) {
        return await StatusRepository.findUnique(campaignUnique);
    }
    static async update(campaignUnique, status) {
        // Check if the status exists already, otherwise create it
        const campaignStatus = await StatusRepository.findUnique(campaignUnique);
        if (!campaignStatus) {
            let campaign = await CampaignService.findUnique(campaignUnique);
            if (!campaign) {
                await CampaignService.fill([campaignUnique]);
                campaign = await CampaignService.findUniqueOrThrow(campaignUnique);
            }
            await StatusRepository.create(campaignUnique, campaign.startTimestamp);
        }
        // Update the run status
        switch (status.value) {
            case RunStatus.SUCCESS:
                await StatusRepository.updateSuccess(campaignUnique, status.computedUntil);
                return;
            case RunStatus.PROCESSING:
                await StatusRepository.updateProcessing(campaignUnique);
                return;
            case RunStatus.SKIPPED:
                await StatusRepository.updateWithError(campaignUnique, status.value, status.error, status.details);
                return;
            case RunStatus.FAILED:
                await StatusRepository.updateWithError(campaignUnique, status.value, status.error, status.details);
                return;
        }
    }
    static async updateComputedUntil(campaignUnique, computedUntil) {
        // Check if the status exists already, otherwise create it
        const campaignStatus = await StatusRepository.findUnique(campaignUnique);
        if (!campaignStatus) {
            let campaign = await CampaignService.findUnique(campaignUnique);
            if (!campaign) {
                await CampaignService.fill([campaignUnique]);
                campaign = await CampaignService.findUniqueOrThrow(campaignUnique);
            }
            await StatusRepository.create(campaignUnique, campaign.startTimestamp);
        }
        await StatusRepository.updateComputedUntil(campaignUnique, computedUntil);
    }
    static async updateErrorMessage(campaignUnique, error) {
        // Check if the status exists already, otherwise thros
        const campaignStatus = await StatusRepository.findUnique(campaignUnique);
        if (!(error?.length > 0)) {
            throw new VoidString("Error message is empty");
        }
        if (!campaignStatus) {
            throw new NotFoundError("CampaignStatus not found");
        }
        await StatusRepository.updateErrorMessage(campaignUnique, error);
    }
    static async isSafeForOverlaps(campaignUnique) {
        const status = await StatusRepository.findUnique(campaignUnique);
        if (!status) {
            return true;
        }
        if (status.status === RunStatus.PROCESSING) {
            return status.processingStarted < moment().unix() - MAX_COMPUTE_JOB_TIME;
        }
        return true;
    }
    static async findUpdatesAndDelays() {
        const merklRoots = await MerklRootService.fetchAll();
        const delayedCampaignPromises = Promise.allSettled(Object.keys(merklRoots).map(chainId => StatusService.findManyDelay({ chainId: Number.parseInt(chainId), delayLowerBound: 9 * HOUR })));
        const liveCampaignPromises = await Promise.allSettled(Object.keys(merklRoots).map(chainId => CampaignService.countLives({ distributionChainId: Number.parseInt(chainId) })));
        const delayedCampaignArray = await delayedCampaignPromises;
        const liveCampaignArray = await liveCampaignPromises;
        const res = {};
        for (const [index, chainIdString] of Object.keys(merklRoots).entries()) {
            const chainId = Number.parseInt(chainIdString);
            const delayedCampaignResult = delayedCampaignArray[index];
            const liveCampaignResult = liveCampaignArray[index];
            const delayedCampaigns = delayedCampaignResult.status === "rejected" ? [] : delayedCampaignResult.value;
            if (delayedCampaignResult.status === "rejected") {
                log.warn(`delayed campaigns fetching failed on ${NETWORK_LABELS[chainId]}: ${delayedCampaignResult.reason}`);
            }
            const liveCampaigns = liveCampaignResult.status === "rejected" ? 0 : liveCampaignResult.value;
            if (liveCampaignResult.status === "rejected") {
                log.warn(`live campaigns fetching failed on ${NETWORK_LABELS[chainId]}: ${liveCampaignResult.reason}`);
            }
            if (!registry(chainId)?.Merkl?.DistributionCreator || !registry(chainId)?.Merkl?.Distributor) {
                log.warn(`Missing registry for ${NETWORK_LABELS[chainId]}`);
                continue;
            }
            let adminUrl = undefined;
            try {
                adminUrl = getMultisigURL(chainId, registry(chainId)?.AngleLabs ?? "");
            }
            catch { }
            res[chainId] = {
                ...merklRoots[chainId],
                admin: registry(chainId)?.AngleLabs ?? "0xb08AB4332AD871F89da24df4751968A61e58013c",
                adminUrl,
                distributor: registry(chainId)?.Merkl?.Distributor,
                distributionCreator: registry(chainId)?.Merkl?.DistributionCreator,
                liveCampaigns,
                delayed: delayedCampaigns,
            };
        }
        return res;
    }
    static async findManyDelay(query) {
        const now = moment().unix();
        return (await StatusRepository.findManyDelay(query))
            .map(x => {
            const endTimestamp = Number(x.endTimestamp);
            const computedUntil = !!Number(x.CampaignStatus?.[0]?.computedUntil)
                ? Number(x.CampaignStatus?.[0]?.computedUntil)
                : Number(x.startTimestamp);
            const delay = Math.min(now, endTimestamp) - Math.min(now, endTimestamp, computedUntil);
            return {
                ...x,
                delay,
                computedUntil,
            };
        })
            .sort((a, b) => b.delay - a.delay)
            .filter(x => x.delay > (query.delayLowerBound ?? 0));
    }
}
