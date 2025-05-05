import type { TVLBuilder, TVLData } from "@/engine/tvl/interface";
import { type CampaignParameters, type Campaign as CampaignType, type MerklChainId } from "@sdk";
export declare class EulerTVLBuilder implements TVLBuilder<CampaignType.EULER> {
    build(computeChainId: MerklChainId, campaigns: CampaignParameters<CampaignType.EULER>[]): Promise<TVLData<CampaignType.EULER>>;
}
