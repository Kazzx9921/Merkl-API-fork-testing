import { apiDbClient } from "@db";
// ─── Users Repository ────────────────────────────────────────────────────────
export class CreatorRepository {
    static async findUnique(id) {
        return await apiDbClient.creator.findUniqueOrThrow({ where: { id }, include: { Users: true } });
    }
    static async findUniqueFromAddress(address) {
        const creator = await apiDbClient.user.findUnique({ where: { address: address }, select: { Creator: true } });
        return creator?.Creator ?? null;
    }
    static async findMany(query) {
        const { page: _page, items: _items, address, ...filters } = query;
        const page = _page ? _page : 0;
        const items = _items ? _items : 20;
        return await apiDbClient.creator.findMany({
            take: items,
            skip: page * items,
            include: { Users: { select: { address: true } } },
            where: {
                ...filters,
                Users: address
                    ? {
                        some: {
                            address: {
                                equals: address,
                            },
                        },
                    }
                    : undefined,
            },
        });
    }
    static async create({ addresses, ...creator }) {
        return await apiDbClient.creator.create({
            data: {
                ...creator,
                Users: { connectOrCreate: addresses.map(address => ({ create: { address }, where: { address } })) },
            },
        });
    }
    static async update(id, { addresses, ...creator }) {
        return await apiDbClient.creator.update({
            where: { id },
            data: {
                ...creator,
                Users: {
                    connectOrCreate: addresses.map(address => ({
                        create: {
                            address,
                        },
                        where: { address },
                    })),
                },
            },
        });
    }
    static async delete(id) {
        return await apiDbClient.creator.delete({ where: { id } });
    }
    static async getCampaignsFor(creatorAddress) {
        return await apiDbClient.campaign.findMany({
            where: { creatorAddress },
            include: { Opportunity: true },
        });
    }
    static async updateRebate(id, rebate) {
        return await apiDbClient.creator.update({ where: { id }, data: { rebateFee: rebate } });
    }
}
