import { apiDbClient } from "@db";
import { UserRepository } from "../user/user.repository";
export class ComputedValueRepository {
    static async findCampaignValue(params) {
        return await apiDbClient.campaignComputedValue.findUnique({
            where: { campaignId: params.campaignId },
            select: { [params.field]: true },
        });
    }
    static async upsertCampaignComputedValue(data) {
        await apiDbClient.campaignComputedValue.upsert({
            where: { campaignId: data.campaignId },
            update: { [data.field]: data.value },
            create: {
                campaignId: data.campaignId,
                [data.field]: data.value,
            },
        });
    }
    static async findUserValues(data) {
        return await apiDbClient.userComputedValue.findMany({
            where: { address: data.address },
            select: {
                campaignId: true,
                reason: true,
                [data.field]: true,
            },
        });
    }
    static async upsertUserComputedValues(data) {
        // Make sure user foreign keys exist
        await UserRepository.createMany(data.map(item => ({ address: item.address, tags: [] })));
        await apiDbClient.$transaction(data.map(item => {
            return apiDbClient.userComputedValue.upsert({
                where: {
                    campaignId_address_reason: { campaignId: item.campaignId, address: item.address, reason: item.reason },
                },
                update: { [item.field]: item.value },
                create: {
                    campaignId: item.campaignId,
                    address: item.address,
                    reason: item.reason,
                    [item.field]: item.value,
                },
            });
        }));
    }
}
