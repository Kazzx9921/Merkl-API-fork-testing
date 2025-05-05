import type { TVLBuilder, TVLData } from "@/engine/tvl/interface";
import { type CampaignParameters, Campaign as CampaignType, type MerklChainId } from "@sdk";
type campaignType = CampaignType.LOCKER;
export declare class LockerTVLBuilder implements TVLBuilder<campaignType> {
    build(computeChainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<TVLData<CampaignType.LOCKER>>;
}
export {};
