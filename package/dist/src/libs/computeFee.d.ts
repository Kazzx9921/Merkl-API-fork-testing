import { type Campaign, type MerklChainId, type campaignConfig } from "@sdk";
export declare const computeFee: (chainId: MerklChainId, config: campaignConfig<Campaign>) => Promise<{
    fee: string;
}>;
