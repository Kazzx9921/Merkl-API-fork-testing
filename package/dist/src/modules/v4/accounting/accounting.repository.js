import { apiDbClient } from "@db";
export class AccountingRepository {
    static async findMany(query) {
        const { page: _page, items: _items } = query;
        const page = _page ? _page : 0;
        const items = _items ? _items : 20;
        return await apiDbClient.dump.findMany({
            take: items,
            skip: page * items,
        });
    }
    static async getByTokenForDumper(fromTokenId) {
        return await apiDbClient.dump.findMany({
            where: {
                fromTokenId,
                NOT: {
                    OR: [
                        {
                            recipient: {
                                equals: apiDbClient.dump.fields.multisig,
                            },
                        },
                        {
                            recipient: {
                                equals: "0xb08AB4332AD871F89da24df4751968A61e58013c",
                            },
                        },
                    ],
                },
            },
        });
    }
    static async getForMonthForRecipient(recipient, toTokenId, month, year) {
        const startDate = new Date(year, month, 0);
        const endDate = new Date(year, month + 1, 0);
        return await apiDbClient.dump.findMany({
            where: {
                toTokenId,
                recipient,
                datetime: {
                    gte: startDate,
                    lt: endDate,
                },
            },
        });
    }
    static async getForMultisigBetweenDates(startDate, endDate) {
        return await apiDbClient.dump.findMany({
            where: {
                OR: [
                    {
                        recipient: {
                            equals: apiDbClient.dump.fields.multisig,
                        },
                    },
                    {
                        recipient: {
                            equals: "0xb08AB4332AD871F89da24df4751968A61e58013c",
                        },
                    },
                ],
                datetime: {
                    gte: startDate,
                    lt: endDate,
                },
            },
        });
    }
    static async getForMultisig() {
        return await apiDbClient.dump.findMany({
            where: {
                OR: [
                    {
                        recipient: {
                            equals: apiDbClient.dump.fields.multisig,
                        },
                    },
                    {
                        recipient: {
                            equals: "0xb08AB4332AD871F89da24df4751968A61e58013c",
                        },
                    },
                ],
            },
        });
    }
    static async getForMultisigByChain(chainId) {
        return await apiDbClient.dump.findMany({
            where: {
                chainId,
                OR: [
                    {
                        recipient: {
                            equals: apiDbClient.dump.fields.multisig,
                        },
                    },
                    {
                        recipient: {
                            equals: "0xb08AB4332AD871F89da24df4751968A61e58013c",
                        },
                    },
                ],
            },
        });
    }
    static async getForMultisigByChainBetweenDates(chainId, startDate, endDate) {
        return await apiDbClient.dump.findMany({
            where: {
                chainId,
                datetime: {
                    gte: startDate,
                    lte: endDate,
                },
                OR: [
                    {
                        recipient: {
                            equals: apiDbClient.dump.fields.multisig,
                        },
                    },
                    {
                        recipient: {
                            equals: "0xb08AB4332AD871F89da24df4751968A61e58013c",
                        },
                    },
                ],
            },
        });
    }
    static async getForDumperBetweenDates(fromTokenId, startDate, endDate) {
        return await apiDbClient.dump.findMany({
            where: {
                fromTokenId,
                datetime: {
                    gte: startDate,
                    lte: endDate,
                },
                NOT: {
                    OR: [
                        {
                            recipient: {
                                equals: apiDbClient.dump.fields.multisig,
                            },
                        },
                        {
                            recipient: {
                                equals: "0xb08AB4332AD871F89da24df4751968A61e58013c",
                            },
                        },
                    ],
                },
            },
        });
    }
}
