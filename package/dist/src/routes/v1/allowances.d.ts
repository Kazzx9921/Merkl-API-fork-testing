import type { TokenInfoListType } from "@/libs/getTokensList";
import { type UncachedResult } from "@/utils/execute";
import type Elysia from "elysia";
type ReturnType = {
    [spender: string]: {
        [address: string]: {
            symbol: string;
            allowance: string;
            decimals: number;
        };
    };
};
export declare function getUserAllowances(user: string, spenders: string[], tokens: TokenInfoListType, chainId: number, additionalTokenAddresses?: string[]): Promise<UncachedResult<ReturnType>>;
export declare const query: import("@sinclair/typebox").TObject<{
    additionalTokenAddresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    chainId: import("@sinclair/typebox").TNumber;
    user: import("@sinclair/typebox").TString;
}>;
export declare const response: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
    balance: import("@sinclair/typebox").TNumber;
    decimals: import("@sinclair/typebox").TNumber;
    symbol: import("@sinclair/typebox").TString;
}>>;
declare const _default: (app: Elysia) => Elysia<"", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {};
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {
    allowances: {
        get: {
            body: unknown;
            params: {};
            query: {
                additionalTokenAddresses?: string[] | undefined;
                chainId: number;
                user: string;
            };
            headers: unknown;
            response: {
                200: {
                    [x: string]: {
                        symbol: string;
                        balance: string;
                        decimals: number;
                    };
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
}>;
export default _default;
