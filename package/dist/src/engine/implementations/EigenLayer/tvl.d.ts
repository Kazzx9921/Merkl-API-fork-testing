import type { TVLBuilder, TVLData } from "@/engine/tvl/interface";
import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
type campaignType = Campaign.EIGENLAYER;
export declare class EigenLayerTVLBuilder implements TVLBuilder<campaignType> {
    build(computeChainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<TVLData<Campaign.EIGENLAYER>>;
}
export {};
