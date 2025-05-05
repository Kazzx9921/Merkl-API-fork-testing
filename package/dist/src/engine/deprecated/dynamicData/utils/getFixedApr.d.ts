import type { Campaign, CampaignParameters } from "@sdk";
export type BaseFixAPRConfig = {
    apr: string;
    targetTokenPricing: boolean;
    rewardTokenPricing: boolean;
};
export type FixedAprCampaignType = Campaign.ERC20_FIX_APR | Campaign.HYPERDRIVELOGFIXPROCESSOR | Campaign.ERC6909FIXAPR | Campaign.ERC1155FIXAPR | Campaign.ERC721FIXAPR;
export declare function getFixedApr(campaignParameters: CampaignParameters<FixedAprCampaignType>, priceRewardToken: number, priceTargetToken: number): number;
