import type { Erc20LikeCampaignEnum, Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { CampaignParameters, ResultDto } from "@sdk";
export declare function getTokenTypeRound2(index: number, type: Erc20SubType, typeInfo: any, calls: ResultDto[], campaign?: CampaignParameters<Erc20LikeCampaignEnum>): import("./tokenTypeStruct").tokenTypeStruct;
