import type { TVLBuilder, TVLData } from "@/engine/tvl/interface";
import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
type campaignType = Campaign.AJNA;
export declare class AjnaTVLBuilder implements TVLBuilder<campaignType> {
    build(computeChainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<TVLData<Campaign.AJNA>>;
}
export {};
