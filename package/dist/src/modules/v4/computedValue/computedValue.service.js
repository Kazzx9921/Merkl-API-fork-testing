import { log } from "@/utils/logger";
import { ComputedValueRepository } from "./computedValue.repository";
export class ComputedValueService {
    static hashUserComputedValueId(campaignId, address, reason) {
        return Bun.hash(`${campaignId}${address}${reason}`).toString();
    }
    static async findCampaignValue(campaignId, field) {
        return await ComputedValueRepository.findCampaignValue({
            campaignId,
            field,
        });
    }
    static async upsertCampaignComputedValue(data) {
        await ComputedValueRepository.upsertCampaignComputedValue(data);
    }
    static async findUserValues(params) {
        return await ComputedValueRepository.findUserValues(params);
    }
    static async upsertUserComputedValues(data) {
        await ComputedValueRepository.upsertUserComputedValues(data);
        log.info(`Upserted ${data.length} users computed values`);
    }
}
