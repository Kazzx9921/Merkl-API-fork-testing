import { apiDbClient } from "@db";
export class PriceRepository {
    static async findBySymbolOrThrow(symbol) {
        return await apiDbClient.priceSource.findUniqueOrThrow({ where: { symbol } });
    }
    static async findManyPriceSources(query) {
        return await apiDbClient.priceSource.findMany({
            where: {
                method: query?.method ?? undefined,
            },
        });
    }
    static async create(priceSource) {
        return await apiDbClient.priceSource.create({ data: priceSource });
    }
    static async updateBySymbol(unique, newPriceSource) {
        return await apiDbClient.priceSource.update({ where: { symbol: unique }, data: newPriceSource });
    }
    static async deleteBySymbol(symbol) {
        return await apiDbClient.priceSource.delete({ where: { symbol } });
    }
}
