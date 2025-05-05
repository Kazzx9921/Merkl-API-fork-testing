import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters, type ChainId } from "@sdk";
import type { CreateTokenModel, NotionWebhookModel } from "./token.model";
import type { GetTokenQueryModel, Token, TokenModel, TokenUnique, UpdateTokenModel } from "./token.model";
import { TokenRepository } from "./token.repository";
export declare abstract class TokenService {
    static hashId(token: TokenUnique): string;
    static format(token: Awaited<ReturnType<typeof TokenRepository.findMany>>[number]): Token["model"];
    static fetchNativeBalance(chainId: number, userAddress: string): Promise<any>;
    /**
     * Fetches balances of provided tokens
     */
    static fetchBalances(chainId: number, userAddress: string, tokens: Token["model"][]): Promise<(Token["model"] & {
        balance: bigint;
    })[]>;
    /**
     * Fetches tokens and include balances
     */
    static fetchTokensAndBalances(chainId: number, userAddress: string, addresses: string[]): Promise<({
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
    } & {
        price?: number | null | undefined;
    } & {
        balance: bigint;
    })[]>;
    /**
     * Fetches balances of verified tokens
     * @info tokens that are popular and must be detected in the app are marked as 'verified'
     * @param additionalTokens balances along with the verified ones
     */
    static fetchVerifiedAndNativeBalances(chainId: number, userAddress: string, additionalTokenAddresses?: string[]): Promise<({
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
    } & {
        price?: number | null | undefined;
    } & {
        balance: bigint;
    })[]>;
    static fetchOnChain(token: TokenModel): Promise<Omit<Token["model"], "id">>;
    static fetchManyOnChain(chainId: ChainId, addresses: string[]): Promise<{
        [address: string]: Omit<{
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
        } & {
            price?: number | null | undefined;
        }, "id">;
    }>;
    /**
     * Updates price of tokens that share the same symbol
     * @param symbol
     * @param price value
     * @param excludeAddresses to not update symbols that defined using addresses
     */
    static updateSymbolPrices(symbol: string, price: number, excludeAddresses: string[]): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    /**
     * Updates price of tokens that share the same address
     * @param address
     * @param price value
     * @param chainId
     */
    static updateAddressPrices(address: string, price: number, chainId?: number): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    /**
     * Updates price of tokens that share the same symbol
     * @param symbol
     * @param price value
     * @param excludeAddresses to not update symbols that defined using addresses
     */
    static updatePrices(pricer: Pricer): Promise<void>;
    /**
     * Read token from database
     * @param chainId
     * @param address
     */
    static findUniqueOrThrow(token: TokenUnique | string): Promise<{
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
    } & {
        price?: number | null | undefined;
    }>;
    /**
     * Read token from database, tries to fill it if unexistant
     * @param chainId
     * @param address
     */
    static findUniqueFillOrThrow(token: TokenUnique): Promise<{
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
    } & {
        price?: number | null | undefined;
    }>;
    /**
     * Checks if two tokens are the same based on chainId/address combo
     * @param a token
     * @param b token
     * @returns true if both tokens are the same
     */
    static isSame(a: Pick<Token["model"], "chainId" | "address">, b: Pick<Token["model"], "chainId" | "address">): Promise<boolean>;
    /**
     * Get the list of tokens satisfying the query
     * @param query
     * @returns A list of tokens
     */
    static findMany(query: GetTokenQueryModel): Promise<({
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
    } & {
        price?: number | null | undefined;
    })[]>;
    /**
     * Get the list of tokens satisfying the query or fetch if chainId and address are provided
     * @param query
     * @returns A list of tokens
     */
    static findManyOrFetch(query: GetTokenQueryModel): Promise<({
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
    } & {
        price?: number | null | undefined;
    })[]>;
    static getPrice(query: GetTokenQueryModel): Promise<number>;
    static findManyObjectPerAddress(query: GetTokenQueryModel): Promise<Record<string, {
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
    } & {
        price?: number | null | undefined;
    }>>;
    static getRewardTokenPrice(campaign: CampaignParameters<Campaign>): Promise<number>;
    /**
     * Get value of tokens
     * @param tokenAmounts address/chain + amount of token
     * @returns the cumulated dollar value of all tokens
     */
    static getValue(tokenAmounts: {
        amount?: bigint;
        address: string;
        chainId: number;
    }[]): Promise<number>;
    static getValueByTokenId(id: string, amount: bigint): Promise<number>;
    /**
     * Counts the number of tokens that complies to query
     * @description used for pagination purposes
     * @param query
     * @returns the number of tokens
     */
    static countMany(query: GetTokenQueryModel): Promise<number>;
    static findChains(): Promise<Record<string, ChainId>>;
    /**
     * Read token from DB or fetch onchain
     * @param chainId
     * @param address
     */
    static findManyOrCreate(tokens: TokenModel[]): Promise<({
        symbol: string;
        name: string | null;
        id: string;
        icon: string;
        address: string;
        chainId: number;
        decimals: number;
        verified: boolean;
        isTest: boolean;
        isPoint: boolean;
        isPreTGE: boolean;
        isNative: boolean;
    } & {
        price?: number | null | undefined;
    })[]>;
    static getAllValidRewardTokens(query: {
        chainId?: string;
    }): Promise<Record<number, {
        minimumAmountPerHour: any;
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
    }[]>>;
    static getValidRewardTokens(chainId: number): Promise<{
        minimumAmountPerHour: any;
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
    static notionWebhook(body: NotionWebhookModel): Promise<{
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
     * Fetches symbol, address, decimals and creates token on database
     * @param chainId
     * @param address
     */
    static fillAndCreate(token: CreateTokenModel): Promise<{
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
