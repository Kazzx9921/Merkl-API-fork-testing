import type { ChainSearchDto, CreateChainModel, UpdateChainModel } from "./chain.model";
export declare class ChainRepository {
    /**
     * @param id ChainId
     * @returns
     */
    static read(id: number): Promise<({
        Explorer: {
            url: string;
            type: import("@db/api").$Enums.ExplorerType;
            id: string;
            chainId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string;
    }) | null>;
    static transformQueryToPrismaFilters(query: ChainSearchDto): {
        where: {
            name: {
                contains: string;
                mode: "insensitive";
            } | undefined;
            Opportunity: {
                some: {
                    Campaigns: {
                        some: {
                            RewardToken: {
                                isTest: false;
                            };
                        };
                    };
                };
            } | undefined;
        };
    };
    /** Returns many chains based on query
     * @param query object with fields to search for
     * @returns
     */
    static findMany(query: ChainSearchDto): Promise<({
        Explorer: {
            url: string;
            type: import("@db/api").$Enums.ExplorerType;
            id: string;
            chainId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string;
    })[]>;
    static countMany(query: ChainSearchDto): Promise<number>;
    /** Returns all chainIds in the database
     */
    static readIds(): Promise<{
        id: number;
    }[]>;
    /**
     * Creates a new chain
     * @param template for chain creation
     * @returns
     */
    static create(data: CreateChainModel): Promise<{
        Explorer: {
            url: string;
            type: import("@db/api").$Enums.ExplorerType;
            id: string;
            chainId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string;
    }>;
    static findUniqueOrThrow(id: number): Promise<{
        Explorer: {
            url: string;
            type: import("@db/api").$Enums.ExplorerType;
            id: string;
            chainId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string;
    }>;
    static update(id: number, data: UpdateChainModel): Promise<{
        name: string;
        id: number;
        icon: string;
    }>;
}
