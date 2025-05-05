import type { CampaignParameters, Campaign as CampaignType, MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
export declare class DefaultDynamicData implements DynamicDataBuilder<CampaignType> {
    build(_chainId: MerklChainId, campaigns: CampaignParameters<CampaignType>[]): Promise<CampaignParameters<CampaignType>[]>;
}
