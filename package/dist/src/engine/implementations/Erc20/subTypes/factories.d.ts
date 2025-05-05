import type { MetadataBuilder } from "@/engine/metadata/interface";
import { Erc20SubType } from ".";
import type { TVLBuilder } from "../../../tvl/interface";
export declare const erc20SubTypeTVLBuilderFactory: (erc20Subtype: Erc20SubType) => TVLBuilder<any> | null;
export declare const erc20SubTypeMetadataBuilderFactory: (erc20Subtype: Erc20SubType) => MetadataBuilder<any> | null;
