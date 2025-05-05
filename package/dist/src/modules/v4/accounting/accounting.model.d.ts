export declare const TokensDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    tokenAddress: import("@sinclair/typebox").TString;
}>;
export declare const GetTransactionsQueryModel: import("@sinclair/typebox").TObject<{
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const TokensDateDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    tokenAddress: import("@sinclair/typebox").TString;
    month: import("@sinclair/typebox").TNumber;
    year: import("@sinclair/typebox").TNumber;
}>;
export declare const DateDto: import("@sinclair/typebox").TObject<{
    month: import("@sinclair/typebox").TNumber;
    year: import("@sinclair/typebox").TNumber;
}>;
export declare const ChainDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
}>;
export declare const RevenuesDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    month: import("@sinclair/typebox").TNumber;
    year: import("@sinclair/typebox").TNumber;
}>;
export declare const GetRevenuesDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    month: import("@sinclair/typebox").TNumber;
    year: import("@sinclair/typebox").TNumber;
}>;
export type GetTransactionsQueryModel = typeof GetTransactionsQueryModel.static;
