import type { Erc20LikeCampaignEnum } from "@/engine/implementations/Erc20/subTypes";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { MetadataBuilder } from "../../metadata/interface";
type campaignType = Erc20LikeCampaignEnum;
export declare class Erc20Metadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">, opportunityIdentifier: string): Promise<import("../../metadata/interface").Metadata | {
        action: import("@db/api").$Enums.OpportunityAction;
        name: string;
        tokens: {
            chainId: number;
            address: any;
        }[];
        mainProtocol: any;
        depositUrl: string;
        explorerAddress: `0x${string}`;
    }>;
}
export {};
