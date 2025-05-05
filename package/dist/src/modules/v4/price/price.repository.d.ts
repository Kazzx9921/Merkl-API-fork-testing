import type { PriceSourceMethod } from "@db/api";
import type { CreatePriceSourceModel, UpdatePriceSourceModel } from "./price.model";
export declare class PriceRepository {
    static findBySymbolOrThrow(symbol: string): Promise<{
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
    static create(priceSource: CreatePriceSourceModel): Promise<{
        symbol: string;
        method: import("@db/api").$Enums.PriceSourceMethod;
        args: import("database/api/.generated/runtime/library").JsonValue | null;
        id: number;
    }>;
    static updateBySymbol(unique: string, newPriceSource: UpdatePriceSourceModel): Promise<{
        symbol: string;
        method: import("@db/api").$Enums.PriceSourceMethod;
        args: import("database/api/.generated/runtime/library").JsonValue | null;
        id: number;
    }>;
    static deleteBySymbol(symbol: string): Promise<{
        symbol: string;
        method: import("@db/api").$Enums.PriceSourceMethod;
        args: import("database/api/.generated/runtime/library").JsonValue | null;
        id: number;
    }>;
}
