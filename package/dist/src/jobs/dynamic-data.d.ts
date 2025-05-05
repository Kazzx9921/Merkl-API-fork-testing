import { Campaign, type CampaignDynamicData } from "@sdk";
export type CampaignsCacheUpdaterReturnType = {
    [type_mainParameter: string]: {
        [campaignId: string]: CampaignDynamicData<Campaign>;
    };
};
export declare const main: () => Promise<{
    success: boolean;
}>;
