import { type Erc20LikeCampaignEnum, Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { type CampaignParameters, type MerklChainId } from "@sdk";
/**
 * @notice Compute the subtypes of the campaigns
 * @warning
 * @dev This function should return an array of length campaigns.length
 */
export declare const detectSubType: (chainId: MerklChainId, campaigns: CampaignParameters<Erc20LikeCampaignEnum>[]) => Promise<Erc20SubType[]>;
