import { type CampaignParameters, Campaign as CampaignType, type MerklChainId } from "@sdk";
type logProcessorType = CampaignType.ERC20LOGPROCESSOR | CampaignType.EVENT_BASED | CampaignType.LOCKER | CampaignType.ERC20REBASELOGPROCESSOR;
export declare function getIdPerCampaignType(campaignType: CampaignType, campaign: CampaignParameters<logProcessorType>): string | undefined;
/**
 * Compute TVL
 * @dev important: using the most recent state save with current prices
 *      it's only an estimate
 */
export declare function computeEventBasedPoolRewardsFromMostRecentStateSave(chainId: MerklChainId, campaignType: CampaignType, campaign: CampaignParameters<logProcessorType>): Promise<{
    distributedRewards: number;
    blockNumber: number;
}>;
export declare function computeLockerAmountFromMostRecentStateSave(chainId: MerklChainId, campaignType: CampaignType, campaign: CampaignParameters<CampaignType.LOCKER>): Promise<{
    lockedAmount: number;
    blockNumber: number;
}>;
export {};
