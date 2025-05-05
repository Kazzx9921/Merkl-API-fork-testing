import type { GetCampaignComputedValueModel, GetUserComputedValuesModel, UpsertCampaignComputedValueModel, UpsertUserComputedValuesModel } from "./computedValue.model";
export declare abstract class ComputedValueRepository {
    static findCampaignValue(params: GetCampaignComputedValueModel): Promise<{
        averageBoost: number | null;
        totalDistributedInUSD: number | null;
        forfeitingBoost: number | null;
    } | null>;
    static upsertCampaignComputedValue(data: UpsertCampaignComputedValueModel): Promise<void>;
    static findUserValues(data: GetUserComputedValuesModel): Promise<{
        reason: string;
        id: string;
        campaignId: string;
        boost: number | null;
    }[]>;
    static upsertUserComputedValues(data: UpsertUserComputedValuesModel): Promise<void>;
}
