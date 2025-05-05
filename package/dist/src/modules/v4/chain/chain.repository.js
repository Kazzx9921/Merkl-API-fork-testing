import { apiDbClient } from "@db";
import { ExplorerRepository } from "../explorer/explorer.repository";
export class ChainRepository {
    /**
     * @param id ChainId
     * @returns
     */
    static async read(id) {
        //TODO: tweak query to not have 5
        return await apiDbClient.chain.findUnique({ where: { id }, include: { Explorer: { take: 5 } } });
    }
    static transformQueryToPrismaFilters(query) {
        return {
            where: {
                name: query.name ? { contains: query.name, mode: "insensitive" } : undefined,
                Opportunity: query.name || query.test ? undefined : { some: { Campaigns: { some: { RewardToken: { isTest: false } } } } },
            },
        };
    }
    /** Returns many chains based on query
     * @param query object with fields to search for
     * @returns
     */
    static async findMany(query) {
        const args = ChainRepository.transformQueryToPrismaFilters(query);
        return apiDbClient.chain.findMany({
            include: { Explorer: { take: 5 } },
            ...args,
        });
    }
    static async countMany(query) {
        const args = ChainRepository.transformQueryToPrismaFilters(query);
        return apiDbClient.chain.count({
            ...args,
        });
    }
    /** Returns all chainIds in the database
     */
    static async readIds() {
        return apiDbClient.chain.findMany({
            select: { id: true },
        });
    }
    /**
     * Creates a new chain
     * @param template for chain creation
     * @returns
     */
    static async create(data) {
        await apiDbClient.chain.create({
            data: {
                id: data.id,
                icon: data.icon,
                name: data.name,
            },
        });
        await ExplorerRepository.create(data.id, data.explorerType, data.explorerUrl);
        return await ChainRepository.findUniqueOrThrow(data.id);
    }
    static async findUniqueOrThrow(id) {
        return await apiDbClient.chain.findUniqueOrThrow({
            where: {
                id,
            },
            include: {
                Explorer: true,
            },
        });
    }
    static async update(id, data) {
        return await apiDbClient.chain.update({ where: { id }, data });
    }
}
