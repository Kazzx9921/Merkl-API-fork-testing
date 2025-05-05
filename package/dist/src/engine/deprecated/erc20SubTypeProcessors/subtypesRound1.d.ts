import type { Campaign, CampaignParameters, ResultDto } from "@sdk";
import type { tokenTypeStruct } from "./tokenTypeStruct";
export declare function processNamingConditionsInOrder(name: string, targetToken: string, campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.ERC20LOGPROCESSOR> | CampaignParameters<Campaign.ERC20REBASELOGPROCESSOR> | CampaignParameters<Campaign.EULER>): tokenTypeStruct | undefined;
export declare function getTokenTypeRound1(calls: ResultDto[], targetToken: string, index: number, campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.ERC20LOGPROCESSOR> | CampaignParameters<Campaign.ERC20REBASELOGPROCESSOR> | CampaignParameters<Campaign.EULER>): tokenTypeStruct;
