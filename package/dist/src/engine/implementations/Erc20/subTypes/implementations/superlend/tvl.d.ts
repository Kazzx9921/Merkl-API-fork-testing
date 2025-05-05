import type { Erc20LikeCampaignEnum } from "@/engine/implementations/Erc20/subTypes";
import type { TVLBuilder, TVLData } from "@/engine/tvl/interface";
import { type CampaignParameters, type MerklChainId } from "@sdk";
export declare class SuperlendTVLBuilder implements TVLBuilder<Erc20LikeCampaignEnum> {
    build(computeChainId: MerklChainId, campaigns: CampaignParameters<Erc20LikeCampaignEnum>[]): Promise<TVLData<any>>;
}
