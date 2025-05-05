import { TTLPresets } from "../cache/cache.model";
import { CacheService } from "../cache/cache.service";
import { CampaignService } from "../campaign/campaign.service";
import { UserService } from "../user/user.service";
import { CreatorRepository } from "./creator.repository";
// ─── Creators Service ────────────────────────────────────────────────────────
export class CreatorService {
    /**
     * Finds a creator from its id (i.e. "uniswap")
     * @param id
     * @returns creator
     */
    static async findUnique(id) {
        return await CreatorRepository.findUnique(id);
    }
    /**
     * Finds many creators
     * @param id
     * @returns creators[]
     */
    static async findMany(query) {
        return await CreatorRepository.findMany(query);
    }
    /**
     * Creates a creator
     * @param creator {addresses, id, name}
     */
    static async create(creator) {
        return await CreatorRepository.create(creator);
    }
    /**
     * Updates data on a creator
     * @notice will override the entire address array
     * @param id of creator
     * @param creator data for each field
     */
    static async update(id, creator) {
        return await CreatorRepository.update(id, creator);
    }
    static async delete(id) {
        return await CreatorRepository.delete(id);
    }
    static async getCreatorIdFromAddress(address) {
        return await CacheService.wrap(TTLPresets.MIN_30, async () => (await UserService.findUnique(address)).creatorId);
    }
    static async getCreatorAddresses(id) {
        const creator = await CreatorRepository.findUnique(id);
        return creator.Users.map(user => user.address);
    }
    static async getGlobalDashboard(creatorAddress) {
        const [pastCampaigns, liveCampaigns, futureCampaigns, creatorId] = await Promise.all([
            CampaignService.getPastCampaigns({ creatorAddress }),
            CampaignService.getLiveCampaigns({ creatorAddress }),
            CampaignService.getFutureCampaigns({ creatorAddress }),
            CreatorService.getCreatorIdFromAddress(creatorAddress),
        ]);
        const incentivizedTvl = liveCampaigns.reduce((acc, campaign) => acc + campaign.Opportunity.tvl, 0);
        return {
            pastCampaigns: pastCampaigns.length,
            liveCampaigns: liveCampaigns.length,
            futureCampaigns: futureCampaigns.length,
            incentivizedTvl,
            totalCampaigns: pastCampaigns.length + liveCampaigns.length + futureCampaigns.length,
            creatorId,
        };
    }
    static async getCampaignsFor(creatorAddress, status) {
        switch (status) {
            case "PAST":
                return CampaignService.getPastCampaigns({ creatorAddress });
            case "LIVE":
                return CampaignService.getLiveCampaigns({ creatorAddress });
            case "FUTURE":
                return CampaignService.getFutureCampaigns({ creatorAddress });
            default:
                return CampaignService.findMany({ creatorAddress });
        }
    }
    static async getCampaignMetrics(campaignId) {
        return await CampaignService.getMetrics(campaignId);
    }
    static async updateRebate(id, rebate) {
        return await CreatorRepository.updateRebate(id, rebate);
    }
}
