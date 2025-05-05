import type { TVLBuilder, TVLData } from "@/engine/tvl/interface";
import { type CampaignParameters, type Campaign as CampaignType, type MerklChainId } from "@sdk";
type campaignType = CampaignType.MULTILOG;
export declare class MultiLogTVLBuilder implements TVLBuilder<campaignType> {
    build(_computeChainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<TVLData<CampaignType.MULTILOG>>;
}
export {};
