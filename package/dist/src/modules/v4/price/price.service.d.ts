import { PriceSourceMethod } from "@db/api";
import type { CreatePriceSourceModel, UpdatePriceSourceModel } from "./price.model";
export declare class PriceService {
    static findMany(): Promise<{
        [token: string]: number;
    }>;
    static findManyArray(): Promise<{
        rate: number;
        token: string;
    }[]>;
    /** Fetches a single price */
    static fetchPriceBySymbol(symbol: string): Promise<number>;
    static getPriceSourceBySymbol(symbol: string): Promise<{
        symbol: string;
        method: import("@db/api").$Enums.PriceSourceMethod;
        args: import("database/api/.generated/runtime/library").JsonValue | null;
        id: number;
    }>;
    static findManyPriceSources(query: {
        method?: PriceSourceMethod;
    }): Promise<{
        symbol: string;
        method: import("@db/api").$Enums.PriceSourceMethod;
        args: import("database/api/.generated/runtime/library").JsonValue | null;
        id: number;
    }[]>;
    static createPriceSource(priceSource: CreatePriceSourceModel): Promise<number>;
    static updatePriceSource(symbol: string, newPriceSource: UpdatePriceSourceModel): Promise<{
        symbol: string;
        method: import("@db/api").$Enums.PriceSourceMethod;
        args: import("database/api/.generated/runtime/library").JsonValue | null;
        id: number;
    }>;
    static deletePriceSource(symbol: string): Promise<{
        symbol: string;
        method: import("@db/api").$Enums.PriceSourceMethod;
        args: import("database/api/.generated/runtime/library").JsonValue | null;
        id: number;
    }>;
}
