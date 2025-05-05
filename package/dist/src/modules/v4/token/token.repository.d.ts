import { type ChainId } from "@sdk";
import type { GetTokenQueryModel, Token, TokenModel, UpdateTokenModel } from "./token.model";
export declare abstract class TokenRepository {
    #private;
    /**
     * Fetch token metadata from onchain
     * @param chainId
     * @param address
     */
    static getTokenInfo(token: TokenModel): Promise<any>;
    /**
     * Read token from database
     * @param chainId
     * @param address
     */
    static findUnique(id: string): Promise<Token["model"] | undefined>;
    /**
     * Read token from database
     * @param chainId
     * @param address
     */
    static findUniqueOrThrow(id: string): Promise<Token["model"]>;
    /**
     * Read token from database by its symbol
     * @param symbol
     */
    static findMany(query: GetTokenQueryModel): Promise<{
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        displaySymbol: string;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
        price: number | null;
    }[]>;
    static findList(chainId: number, addresses: string[]): Promise<{
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        displaySymbol: string;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
        price: number | null;
    }[]>;
    static countMany(query: GetTokenQueryModel): Promise<number>;
    /**
     * upsert a token on database
     * @param token
     */
    static upsert(token: Token["model"]): Promise<{
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        displaySymbol: string;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
        price: number | null;
    }>;
    /**
     * Updates price of tokens that share the same symbol
     * @param symbol
     * @param price value
     * @param excludeAddresses to not update even if symbol match
     */
    static updateSymbolPrices(symbol: string, price: number, excludeAddresses: string[]): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    /**
     * Updates price of tokens that share the same address
     * @param address
     * @param price value
     * @param chainId
     */
    static updateAddressPrices(address: string, price: number, chainId?: number): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    static updateMissingIconsPerSymbol(symbol: string, icon: string): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    static fetchIconFromCoingeckoTicker(coingeckoTicker: string): Promise<any>;
    static findChains(): Promise<Record<string, ChainId>>;
    /**
     * create a token on database
     * @param token
     */
    static create(token: Token["model"]): Promise<Token["model"] | undefined>;
    static update(id: string, data: UpdateTokenModel): Promise<{
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        displaySymbol: string;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
        price: number | null;
    }>;
}
