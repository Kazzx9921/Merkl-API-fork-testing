import { Campaign, type CampaignParameters, type DolomiteSubCampaignType } from "@sdk";
export type DolomitePositionFetchingDataType = {
    [key: string]: {
        decimals: number;
        targetToken: string;
        marketIndex: number;
        totalSupplyTargetToken?: number;
        symbol: string;
        subCampaignType: DolomiteSubCampaignType;
        campaigns: {
            [key: string]: {
                rewardToken: string;
                symbolRewardToken: string;
                amount: number;
            };
        };
    };
};
export declare function prepareFetch(type: Campaign, previous: any, // FIXME
campaign: CampaignParameters<Campaign>): {
    [marketAddress: string]: string[];
};
