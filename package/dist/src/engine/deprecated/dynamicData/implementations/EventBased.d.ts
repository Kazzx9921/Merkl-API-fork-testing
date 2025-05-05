import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
type campaignType = Campaign.EVENT_BASED;
export declare class EventBasedDynamicData implements DynamicDataBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<EventBasedCampaignDynamicData[]>;
}
export {};
