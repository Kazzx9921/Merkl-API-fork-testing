import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import type { tokenTypeStruct } from "./tokenTypeStruct";
export declare function getTokenPricesInfo(index: number, type: Erc20SubType, typeInfo: any, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.ERC20LOGPROCESSOR> | CampaignParameters<Campaign.ERC20REBASELOGPROCESSOR> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<tokenTypeStruct>;
