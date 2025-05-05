import { Campaign } from "@sdk";
import type { MetadataBuilder } from "./interface";
export declare const metadataBuilderFactory: (campaignType: Campaign) => MetadataBuilder<typeof campaignType>;
