import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Campaign, CampaignParameters, ResultDto } from "@sdk";
export declare function getTokenTypeRound4(index: number, type: Erc20SubType, typeInfo: any, calls: ResultDto[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.ERC20LOGPROCESSOR> | CampaignParameters<Campaign.ERC20REBASELOGPROCESSOR> | CampaignParameters<Campaign.EULER>): import("./tokenTypeStruct").tokenTypeStruct;
