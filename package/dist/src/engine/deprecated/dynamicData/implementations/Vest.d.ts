import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
export declare const VEST_TREASURY = "0x7ccF5BbeC69c790D27dA3b5398B9e0d6D6EeC9F3";
export declare const VEST_TOKEN = "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4";
type campaignType = Campaign.VEST;
export declare class VestDynamicData implements DynamicDataBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<VestCampaignDynamicData[]>;
}
export {};
