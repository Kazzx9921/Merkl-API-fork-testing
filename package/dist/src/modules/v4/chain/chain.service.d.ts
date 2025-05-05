import type { ChainSearchDto, CreateChainModel, UpdateChainModel } from "./chain.model";
export declare abstract class ChainService {
    static get(chainId: number): Promise<({
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
    static countMany(query: ChainSearchDto): Promise<number>;
    /** List all chainIds available in the databse
     * @warning some chains may not be fully integrated yet
     * @returns an array of chainId
     */
    static getIds(): Promise<number[]>;
    /** List all chainIds which have a distribituor (i.e. which is fully integrated)
     * @returns an array of chainId
     */
    static getSupportedIds(): Promise<number[]>;
    static create(chain: CreateChainModel): Promise<{
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
    static updateDailyRewards(id: number, dailyRewards: number): Promise<{
        name: string;
        id: number;
        icon: string;
    }>;
}
