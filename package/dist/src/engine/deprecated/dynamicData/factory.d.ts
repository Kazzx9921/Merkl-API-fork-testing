import { Campaign } from "@sdk";
import type { DynamicDataBuilder } from "./interface";
export declare const dynamicDataBuilderFactory: (campaignType: Campaign) => DynamicDataBuilder<typeof campaignType>;
