import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
type campaignType = Campaign.COMPOUND;
export declare class CompoundDynamicData implements DynamicDataBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<CompoundCampaignDynamicData[]>;
}
export {};
