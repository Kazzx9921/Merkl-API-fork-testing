import type { Campaign, CampaignParameters, MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
type campaignType = Campaign.ENCOMPASSING;
export declare class EncompassingDynamicData implements DynamicDataBuilder<campaignType> {
    build(_chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<any[]>;
}
export {};
