import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import { type CampaignParameters, type Campaign as CampaignType, ChainId } from "@sdk";
import type { BigNumberish } from "ethers";
type campaignType = CampaignType.MORPHO;
export declare class MorphoMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "LEND" | "BORROW";
        tokens: {
            chainId: number;
            address: any;
        }[];
        name: string;
        mainProtocol: ProtocolId;
        depositUrl: string | undefined;
        explorerAddress: `0x${string}`;
    }>;
    static generateUrl(computeChainId: ChainId, params: CampaignParameters<campaignType>["campaignParameters"], _morphoParams: {
        nameTargetToken: string;
        symbolLoanToken: string;
        symbolBorrowToken: string;
        LLTV: BigNumberish;
    }, subType: CampaignParameters<campaignType>["campaignSubType"]): string | undefined;
}
export {};
