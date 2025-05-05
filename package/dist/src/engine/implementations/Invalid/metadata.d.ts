import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { Campaign as CampaignType } from "@sdk";
type campaignType = CampaignType.INVALID;
export declare class InvalidMetadata implements MetadataBuilder<campaignType> {
    build(): Promise<{
        name: string;
        action: "INVALID";
        tokens: never[];
    }>;
}
export {};
