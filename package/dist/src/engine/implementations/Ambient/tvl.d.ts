import type { TVLBuilder, TVLData } from "@/engine/tvl/interface";
import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
type campaignType = Campaign.AMBIENTPROCESSOR;
export declare class AmbiantTVLBuilder implements TVLBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<TVLData<Campaign.AMBIENTPROCESSOR>>;
}
export {};
