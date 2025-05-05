import type { Resource } from "@/modules/v4/prisma";
/**
 * Token
 * @description Data of an onchain asset
 * @see {@link Resource}
 */
export type Token = Resource<"Token", "displaySymbol", {
    price?: number | null;
}>;
export type TokenUnique = {
    chainId: number;
    address: string;
};
export declare const TokenResourceDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    chainId: import("@sinclair/typebox").TNumber;
    address: import("@sinclair/typebox").TString;
    decimals: import("@sinclair/typebox").TNumber;
    icon: import("@sinclair/typebox").TString;
    verified: import("@sinclair/typebox").TBoolean;
    isTest: import("@sinclair/typebox").TBoolean;
    isPoint: import("@sinclair/typebox").TBoolean;
    isPreTGE: import("@sinclair/typebox").TBoolean;
    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>>;
    symbol: import("@sinclair/typebox").TString;
}>;
export declare const FindUniqueTokenDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
}>;
export declare const FindUniqueTokenAllowanceDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    owner: import("@sinclair/typebox").TString;
    spender: import("@sinclair/typebox").TString;
}>;
export declare const GetTokenQueryDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    displaySymbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    isNative: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    address: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    search: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    verified: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    test: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    missingIcons: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    missingPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const TokenDto: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
    chainId: import("@sinclair/typebox").TNumber;
}>;
export declare const GetTokenBalanceDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    userAddress: import("@sinclair/typebox").TString;
    verified: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    tokenAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    additionalTokenAddresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
}>;
export declare const TokenIdDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
}>;
export declare const UpdateTokenDto: import("@sinclair/typebox").TObject<{
    isTest: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    isPoint: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    isPreTGE: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    verified: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    displaySymbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const CreateTokenDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    address: import("@sinclair/typebox").TString;
    icon: import("@sinclair/typebox").TString;
    verified: import("@sinclair/typebox").TBoolean;
    isTest: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const NotionWebhookAddTokenDto: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{
        properties: import("@sinclair/typebox").TObject<{
            "Icon (Required)": import("@sinclair/typebox").TObject<{
                files: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                    file: import("@sinclair/typebox").TObject<{
                        url: import("@sinclair/typebox").TString;
                    }>;
                }>, import("@sinclair/typebox").TObject<{
                    external: import("@sinclair/typebox").TObject<{
                        url: import("@sinclair/typebox").TString;
                    }>;
                }>]>>;
            }>;
            "Address (in checksum format) (Required)": import("@sinclair/typebox").TObject<{
                rich_text: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    plain_text: import("@sinclair/typebox").TString;
                }>>;
            }>;
            "Chain ID (Required)": import("@sinclair/typebox").TObject<{
                number: import("@sinclair/typebox").TNumber;
            }>;
            "Symbol (Optional)": import("@sinclair/typebox").TObject<{
                rich_text: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    plain_text: import("@sinclair/typebox").TString;
                }>>;
            }>;
            "CoinGecko API ID (Recommended)": import("@sinclair/typebox").TObject<{
                rich_text: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    plain_text: import("@sinclair/typebox").TString;
                }>>;
            }>;
        }>;
    }>;
}>;
export type TokenModel = typeof TokenDto.static;
export type GetTokenQueryModel = typeof GetTokenQueryDto.static;
export type UpdateTokenModel = typeof UpdateTokenDto.static;
export type CreateTokenModel = typeof CreateTokenDto.static;
export type NotionWebhookModel = typeof NotionWebhookAddTokenDto.static;
