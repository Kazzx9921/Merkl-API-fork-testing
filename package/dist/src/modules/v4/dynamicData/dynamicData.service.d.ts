import { type CampaignParameters, Campaign as CampaignType, ChainId, type MerklChainId } from "@sdk";
export declare class DynamicDataService {
    /**
     * @notice Updates all records for opportunities associated to the given campaigns
     *
     * @dev The list must ONLY contain campaigns of the same type and the same computeChainId
     */
    static checkValidUpdate(opportunityId: string, newApr: number): Promise<boolean>;
    static update(chainId: ChainId, type: CampaignType, campaigns: CampaignParameters<CampaignType>[], dryRun?: boolean): Promise<unknown[]>;
    /**
     * @dev Test function used to create mock ERC20 static campaigns and check tvl and metadata
     */
    static queryERC20DynamicData(chainId: ChainId, tokenAddress: string, rewardTokenAddress: string, symbolRewardToken: string, decimals?: number): Promise<{
        tvl: number;
        totalSupply: number;
        cardName: string;
        blacklistedSupply: number;
        priceTargetToken: number;
        type: string;
    }>;
    /**
     * @dev Recursive function to handle errors in fetching dynamic data
     */
    static fetchWithRecursiveErrorHandling<R>(fn: (chainId: MerklChainId, campaigns: CampaignParameters<CampaignType>[]) => Promise<R[]>, campaigns: CampaignParameters<CampaignType>[], chainId: number): Promise<R[]>;
}
