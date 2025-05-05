import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Campaign, CampaignParameters } from "@sdk";
export declare const stakingContractToStakingSymbol: {
    [key: string]: string;
};
export declare function generateCardName(type: Erc20SubType, typeInfo: any, campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.ERC20LOGPROCESSOR> | CampaignParameters<Campaign.ERC20REBASELOGPROCESSOR> | CampaignParameters<Campaign.EULER>, symbols?: string[], displayName?: string): string;
