import { apiDbClient } from "@db";
import { NETWORK_LABELS, TokenInteractionService } from "@sdk";
import axios from "axios";
export class TokenRepository {
    static #transformQueryToPrismaFilters(query) {
        const ids = query.id ? query.id.map(id => ({ id })) : [];
        const { page: _page, items: _items } = query;
        const page = _page ? _page : 0;
        const items = _items === 0 ? 100_000 : _items !== undefined ? _items : 100;
        return {
            take: items === 0 ? undefined : items,
            skip: page * items,
            where: {
                AND: [
                    {
                        OR: query.symbol
                            ? [
                                { symbol: { equals: query.symbol, mode: "insensitive" } },
                                { displaySymbol: { equals: query.symbol, mode: "insensitive" } },
                                ...ids,
                            ]
                            : query.displaySymbol
                                ? [
                                    {
                                        displaySymbol: "",
                                        symbol: { equals: query.displaySymbol, mode: "insensitive" },
                                    },
                                    { displaySymbol: { equals: query.displaySymbol, mode: "insensitive" } },
                                    ...ids,
                                ]
                                : ids.length
                                    ? [...ids]
                                    : undefined,
                        address: query.address ? { equals: query.address, mode: "insensitive" } : undefined,
                        chainId: query.chainId ? { equals: query.chainId } : undefined,
                        name: query.name ? { contains: query.name, mode: "insensitive" } : undefined,
                        verified: query.verified ? { equals: query.verified } : undefined,
                        isTest: query.test ? { equals: query.test } : undefined,
                        icon: query.missingIcons ? { equals: "" } : undefined,
                        price: query.missingPrice ? { equals: null } : undefined,
                    },
                    !query.search
                        ? {}
                        : {
                            AND: query.search?.split(" ")?.map((keyword) => ({
                                OR: [
                                    { id: { contains: keyword, mode: "insensitive" } },
                                    { name: { contains: keyword, mode: "insensitive" } },
                                    { symbol: { contains: keyword, mode: "insensitive" } },
                                    { address: { contains: keyword, mode: "insensitive" } },
                                    { Chain: { name: { contains: keyword, mode: "insensitive" } } },
                                ],
                            })),
                        },
                ],
            },
        };
    }
    /**
     * Fetch token metadata from onchain
     * @param chainId
     * @param address
     */
    static async getTokenInfo(token) {
        return TokenInteractionService(token.chainId).info(token.address);
    }
    /**
     * Read token from database
     * @param chainId
     * @param address
     */
    static async findUnique(id) {
        return (await apiDbClient.token.findUnique({ where: { id } })) ?? undefined;
    }
    /**
     * Read token from database
     * @param chainId
     * @param address
     */
    static async findUniqueOrThrow(id) {
        return await apiDbClient.token.findUniqueOrThrow({ where: { id } });
    }
    /**
     * Read token from database by its symbol
     * @param symbol
     */
    static async findMany(query) {
        const args = TokenRepository.#transformQueryToPrismaFilters(query);
        const tokens = await apiDbClient.token.findMany({
            ...args,
        });
        return tokens;
    }
    static async findList(chainId, addresses) {
        const tokens = await apiDbClient.token.findMany({
            where: {
                chainId,
                address: {
                    in: addresses,
                },
            },
        });
        return tokens;
    }
    static async countMany(query) {
        const args = TokenRepository.#transformQueryToPrismaFilters(query);
        return await apiDbClient.token.count(args);
    }
    /**
     * upsert a token on database
     * @param token
     */
    static async upsert(token) {
        return await apiDbClient.token.upsert({
            create: token,
            update: token,
            where: { id: token.id },
        });
    }
    /**
     * Updates price of tokens that share the same symbol
     * @param symbol
     * @param price value
     * @param excludeAddresses to not update even if symbol match
     */
    static async updateSymbolPrices(symbol, price, excludeAddresses) {
        return await apiDbClient.token.updateMany({
            data: { price },
            where: {
                symbol,
                address: { notIn: excludeAddresses },
            },
        });
    }
    /**
     * Updates price of tokens that share the same address
     * @param address
     * @param price value
     * @param chainId
     */
    static async updateAddressPrices(address, price, chainId) {
        return await apiDbClient.token.updateMany({
            data: { price },
            where: {
                chainId: chainId && { equals: chainId },
                address: { equals: address, mode: "insensitive" },
            },
        });
    }
    static async updateMissingIconsPerSymbol(symbol, icon) {
        return await apiDbClient.token.updateMany({
            data: { icon },
            where: {
                symbol: symbol,
                icon: "",
            },
        });
    }
    static async fetchIconFromCoingeckoTicker(coingeckoTicker) {
        return (await axios.get(`https://api.coingecko.com/api/v3/coins/${coingeckoTicker}`)).data.image.small;
    }
    static async findChains() {
        const tokens = await apiDbClient.token.findMany({
            select: { chainId: true, id: true },
        });
        return tokens.reduce((acc, token) => {
            acc[token.id] = token.chainId;
            return acc;
        }, {});
    }
    /**
     * create a token on database
     * @param token
     */
    static async create(token) {
        return await apiDbClient.token.create({
            data: {
                ...token,
                chainId: undefined,
                Chain: {
                    connectOrCreate: {
                        where: { id: token.chainId },
                        create: { id: token.chainId, name: NETWORK_LABELS[token.chainId], icon: "" },
                    },
                },
            },
        });
    }
    static async update(id, data) {
        return await apiDbClient.token.update({ where: { id }, data });
    }
}
