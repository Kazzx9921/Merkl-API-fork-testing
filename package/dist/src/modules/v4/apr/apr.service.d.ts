import { type CampaignDynamicData, Campaign as CampaignTypeV3 } from "@sdk";
import type { AprRecord } from "./apr.model";
export declare abstract class AprService {
    static hashId(opportunityId: string, timestamp: bigint): string;
    /**
     * @deprecated
     */
    static extractFromDynamicData<C extends CampaignTypeV3>(type: C, campaigns: CampaignDynamicData<C>[], timestamp?: bigint): AprRecord["model"];
}
