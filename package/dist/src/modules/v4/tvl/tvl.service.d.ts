import { Campaign, type CampaignDynamicData } from "@sdk";
import type { TvlRecord } from "./tvl.model";
export declare abstract class TvlService {
    static hashId(opportunityId: string, timestamp: bigint): string;
    /**
     * @deprecated
     */
    static extractFromDynamicData<C extends Campaign>(type: C, dynamicData: CampaignDynamicData<C>[], timestamp?: bigint): TvlRecord["model"];
}
