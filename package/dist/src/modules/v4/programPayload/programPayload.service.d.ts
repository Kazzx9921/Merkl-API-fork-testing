import { type Campaign, ChainId, type campaignConfig } from "@sdk";
import type { CampaignParametersStruct } from "libs/sdk/src/generated/CampaignCreator";
import { type CampaignAmountsInputModel, type CampaignDataDtoModel, type CampaignPayloadInputModel, type ProgramPayloadInputModel, type SinglePayloadInputDtoModel, type approvalTransaction, type createCampaignTransaction, type safePayload } from "./programPayload.model";
export declare class ProgramPayloadService {
    static buildConfigTemplate(params: {
        campaignType: number;
    }): {
        [key: string]: string;
    };
    static buildConfig(query: CampaignPayloadInputModel): campaignConfig<Campaign>;
    /** building payload for a single campaign */
    static buildCampaignData(query: CampaignPayloadInputModel): {
        args: any;
    };
    static buildPayloadFromConfig(config: SinglePayloadInputDtoModel, debug?: boolean): Promise<safePayload | {
        safePayload: safePayload;
        nonEncodedConfig: any;
    }>;
    static checkMinimumAmount(rewardToken: string, tokenAmount: bigint, numberOfHours: bigint, distributionChainId: ChainId): Promise<boolean>;
    static getMinimumAmount(rewardToken: string, distributionChainId: ChainId): Promise<bigint>;
    static createSafePayloadForCampaign(args: CampaignParametersStruct, distributionChainId: ChainId, rewardToken: string, distributionCreator: string, withApproval?: boolean): Promise<[approvalTransaction, createCampaignTransaction] | [createCampaignTransaction]>;
    static initiateSafePayload(distributionChainId: ChainId, distributionCreator: string, rewardToken: string, approvalAmount?: string): safePayload;
    static buildPayload(query: CampaignPayloadInputModel, initialCampaignPayload?: safePayload | null, totalAmount?: string): Promise<safePayload>;
    static buildProgramPayload(query: ProgramPayloadInputModel): Promise<safePayload | null>;
    static buildProgramPayloadWithAmounts(query: ProgramPayloadInputModel, body: CampaignAmountsInputModel): Promise<safePayload | null>;
    static buildConfigFromCampaignData(body: CampaignDataDtoModel): Promise<any>;
}
