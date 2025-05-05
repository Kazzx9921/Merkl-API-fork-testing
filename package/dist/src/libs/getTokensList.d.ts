/**
 * @deprecated The whole file is deprecated
 */
export interface Token {
    readonly name: string;
    readonly address: string;
    readonly decimals: number;
    readonly symbol: string;
    readonly useInSwap?: boolean;
    readonly hasPermit?: boolean;
    readonly permitVersion?: string;
    readonly logoURI?: string;
    readonly tags?: string[];
    readonly wrappingMethod?: "Curve" | "BorrowStaker" | "Aave Matic Market" | "Wrap Native" | "Convex";
    readonly underlyingTokens?: string[];
}
export interface TokenInfoListType {
    [symbol: string]: Token;
}
/**
 * @deprecated
 */
export declare const getTokensListWithCache: () => Promise<TokenList>;
