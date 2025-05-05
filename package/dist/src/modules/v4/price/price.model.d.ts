export declare const CreatePriceSourceDto: import("@sinclair/typebox").TObject<{
    symbol: import("@sinclair/typebox").TString;
    method: import("@sinclair/typebox").TEnum<{
        COINGECKO: "COINGECKO";
        CONSTANT: "CONSTANT";
        EQUAL_TO: "EQUAL_TO";
        ERC4626: "ERC4626";
        DEXSCREENER: "DEXSCREENER";
        INDEXCOOP: "INDEXCOOP";
        DEFILLAMA: "DEFILLAMA";
    }>;
    args: import("@sinclair/typebox").TObject<{}>;
}>;
export declare const UpdatePriceSourceDto: import("@sinclair/typebox").TObject<{
    symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    method: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        COINGECKO: "COINGECKO";
        CONSTANT: "CONSTANT";
        EQUAL_TO: "EQUAL_TO";
        ERC4626: "ERC4626";
        DEXSCREENER: "DEXSCREENER";
        INDEXCOOP: "INDEXCOOP";
        DEFILLAMA: "DEFILLAMA";
    }>>;
    args: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>;
}>;
export declare const PriceSourceIdentifier: import("@sinclair/typebox").TObject<{
    symbol: import("@sinclair/typebox").TString;
}>;
export type CreatePriceSourceModel = typeof CreatePriceSourceDto.static;
export type PriceSourceIdentifierModel = typeof PriceSourceIdentifier.static;
export type UpdatePriceSourceModel = typeof UpdatePriceSourceDto.static;
