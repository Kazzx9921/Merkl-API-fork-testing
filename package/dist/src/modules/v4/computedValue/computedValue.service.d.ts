import type { GetCampaignComputedValueModel, GetUserComputedValuesModel, UpsertCampaignComputedValueModel, UpsertUserComputedValuesModel } from "./computedValue.model";
export declare abstract class ComputedValueService {
    static hashUserComputedValueId(campaignId: string, address: string, reason: string): string;
    static findCampaignValue(campaignId: string, field: GetCampaignComputedValueModel["field"]): Promise<{
        averageBoost: number | null;
        totalDistributedInUSD: number | null;
        forfeitingBoost: number | null;
    } | null>;
    static upsertCampaignComputedValue(data: UpsertCampaignComputedValueModel): Promise<void>;
    static findUserValues(params: GetUserComputedValuesModel): Promise<{
        reason: string;
        id: string;
        campaignId: string;
        boost: number | null;
    }[]>;
    static upsertUserComputedValues(data: UpsertUserComputedValuesModel): Promise<void>;
}
