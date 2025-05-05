import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
type campaignType = Campaign.RADIANT;
export declare class RadiantDynamicData implements DynamicDataBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<RadiantCampaignDynamicData[]>;
}
export {};
