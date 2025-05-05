import { log } from "@/utils/logger";
import { apiDbClient } from "@db";
// ─── Protocols Repository ────────────────────────────────────────────────────
export class ProtocolRepository {
    static #transformQueryToPrismaFilters(query) {
        return {
            where: {
                id: query.id
                    ? { contains: query.id, mode: "insensitive" }
                    : query.ids
                        ? { in: query.ids, mode: "insensitive" }
                        : undefined,
                tags: query.tags ? { hasEvery: query.tags } : undefined,
                name: query.name ? { contains: query.name, mode: "insensitive" } : undefined,
                OR: query.opportunityTag // The opportunity tag specified can be either at the protocol level or the opportunity level
                    ? [
                        {
                            MainOpportunities: {
                                some: {
                                    tags: {
                                        has: query.opportunityTag,
                                    },
                                },
                            },
                        },
                        { tags: { has: query.opportunityTag } },
                    ]
                    : !query.test
                        ? [
                            { MainOpportunities: { some: { Campaigns: { some: { RewardToken: { isTest: false } } } } } },
                            { Opportunities: { some: { Campaigns: { some: { RewardToken: { isTest: false } } } } } },
                        ]
                        : undefined,
                // id: typeof query.id === "string" ? query.id : !!query.id ? { in: query.id } : undefined,
            },
        };
    }
    static async create(data) {
        return await apiDbClient.protocol.create({
            data: {
                id: data.id,
                name: data.name,
                icon: data.icon,
                url: data.url,
                description: data.description,
                tags: data.tags,
            },
        });
    }
    static async upsert(data) {
        return await apiDbClient.protocol.upsert({
            where: { id: data.id },
            create: {
                id: data.id,
                name: data.name,
                icon: data.icon,
                url: data.url,
                description: data.description,
                tags: data.tags,
            },
            update: {
                name: data.name,
                icon: data.icon,
                url: data.url,
                description: data.description,
                tags: data.tags,
            },
        });
    }
    static async changeId(oldId, newId) {
        if (!(await ProtocolRepository.findMany({ id: newId }))[0]) {
            await apiDbClient.protocol.create({
                data: {
                    id: newId,
                    name: newId,
                    icon: "",
                    url: "",
                    description: "",
                    tags: [],
                },
            });
        }
        await apiDbClient.opportunity.updateMany({
            where: {
                mainProtocolId: oldId,
            },
            data: {
                mainProtocolId: newId,
            },
        });
        await apiDbClient.rewardBreakdown.updateMany({
            where: {
                protocolId: oldId,
            },
            data: {
                protocolId: newId,
            },
        });
        const opportunities = await apiDbClient.opportunity.findMany({
            where: {
                Protocols: {
                    some: {
                        id: oldId,
                    },
                },
            },
        });
        for (const opportunity of opportunities) {
            await apiDbClient.opportunity.update({
                where: {
                    id: opportunity.id,
                },
                data: {
                    Protocols: {
                        disconnect: [
                            {
                                id: oldId,
                            },
                        ],
                        connect: [
                            {
                                id: newId,
                            },
                        ],
                    },
                },
            });
        }
        try {
            await apiDbClient.protocol.delete({
                where: {
                    id: oldId,
                },
            });
            log.info(`protocol with id ${oldId} deleted`);
        }
        catch {
            log.warn(`protocol with id ${oldId} not found`);
        }
    }
    static async findUnique(type) {
        return await apiDbClient.protocol.findUnique({ where: { id: type } });
    }
    static async findMany(query) {
        const { page: _page, items: _items } = query;
        const page = _page ? _page : 0;
        const items = _items ? _items : 500;
        const args = ProtocolRepository.#transformQueryToPrismaFilters(query);
        return await apiDbClient.protocol.findMany({
            take: items,
            skip: page * items,
            ...args,
            include: {
                MainOpportunities: {
                    include: {
                        Campaigns: {
                            where: {
                                endTimestamp: {
                                    gt: BigInt(Math.floor(Date.now() / 1000)),
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    static async countMany(query) {
        const args = ProtocolRepository.#transformQueryToPrismaFilters(query);
        return await apiDbClient.protocol.count(args);
    }
    static async update(id, data) {
        return await apiDbClient.protocol.update({ where: { id }, data });
    }
}
