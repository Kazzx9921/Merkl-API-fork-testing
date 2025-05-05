import { apiDbClient } from "@db";
// ─── Users Repository ────────────────────────────────────────────────────────
export class UserRepository {
    static async findUnique(address) {
        return await apiDbClient.user.findUniqueOrThrow({ where: { address } });
    }
    static async findMany(query) {
        const { page: _page, items: _items, ...filters } = query;
        const page = _page ? _page : 0;
        const items = _items ? _items : 20;
        return await apiDbClient.user.findMany({
            take: items,
            skip: page * items,
            where: {
                address: filters.address ? filters.address : undefined,
                tags: filters.tags ? { hasEvery: filters.tags } : undefined,
            },
        });
    }
    static async findManyWithTags() {
        return await apiDbClient.user.findMany({
            where: {
                tags: {
                    isEmpty: false,
                },
            },
        });
    }
    static async create(user) {
        return await apiDbClient.user.create({ data: user });
    }
    static async createMany(users) {
        return await apiDbClient.user.createMany({ data: users, skipDuplicates: true });
    }
    static async updateTags(address, tags) {
        return await apiDbClient.user.update({ where: { address }, data: { tags } });
    }
}
