import { type Erc20LikeCampaignEnum } from "@/engine/implementations/Erc20/subTypes";
import { type CampaignParameters, type MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
export declare class Erc20DynamicData implements DynamicDataBuilder<Erc20LikeCampaignEnum> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<Erc20LikeCampaignEnum>[]): Promise<any[]>;
}
