import Elysia from "elysia";
export declare const TokenController: Elysia<"/tokens", false, {
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
    tokens: {
        ":id": {
            get: {
                body: unknown;
                params: {
                    id: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
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
                        price?: number | null | undefined;
                    } | undefined;
                };
            };
        };
    } & {
        ":id": {
            allowance: {
                ":owner": {
                    ":spender": {
                        get: {
                            body: unknown;
                            params: {
                                id: string;
                                owner: string;
                                spender: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: {
                                    allowance: bigint;
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
                                    price?: number | null | undefined;
                                } | undefined;
                            };
                        };
                    };
                };
            };
        };
    } & {
        reward: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId?: string | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        [x: number]: {
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
                        }[];
                    };
                };
            };
        };
    } & {
        reward: {
            ":chainId": {
                get: {
                    body: unknown;
                    params: {
                        chainId: number;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
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
                        }[];
                    };
                };
            };
        };
    } & {
        balances: {
            get: {
                body: unknown;
                params: {};
                query: {
                    verified?: boolean | undefined;
                    tokenAddress?: string | undefined;
                    additionalTokenAddresses?: string[] | undefined;
                    chainId: number;
                    userAddress: string;
                };
                headers: unknown;
                response: {
                    200: ({
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
                    })[];
                };
            };
        };
    } & {
        index: {
            get: {
                body: unknown;
                params: {};
                query: {
                    symbol?: string | undefined;
                    search?: string | undefined;
                    name?: string | undefined;
                    id?: string[] | undefined;
                    items?: number | undefined;
                    page?: number | undefined;
                    address?: string | undefined;
                    chainId?: number | undefined;
                    displaySymbol?: string | undefined;
                    verified?: boolean | undefined;
                    isNative?: boolean | undefined;
                    test?: boolean | undefined;
                    missingIcons?: boolean | undefined;
                    missingPrice?: boolean | undefined;
                };
                headers: unknown;
                response: {
                    200: ({
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
                    })[];
                };
            };
        };
    } & {
        count: {
            get: {
                body: unknown;
                params: {};
                query: {
                    symbol?: string | undefined;
                    search?: string | undefined;
                    name?: string | undefined;
                    id?: string[] | undefined;
                    items?: number | undefined;
                    page?: number | undefined;
                    address?: string | undefined;
                    chainId?: number | undefined;
                    displaySymbol?: string | undefined;
                    verified?: boolean | undefined;
                    isNative?: boolean | undefined;
                    test?: boolean | undefined;
                    missingIcons?: boolean | undefined;
                    missingPrice?: boolean | undefined;
                };
                headers: unknown;
                response: {
                    200: number;
                };
            };
        };
    } & {
        index: {
            post: {
                body: {
                    isTest?: boolean | undefined;
                    icon: string;
                    address: string;
                    chainId: number;
                    verified: boolean;
                };
                params: {};
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
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
                    };
                };
            };
        };
    } & {
        ":id": {
            patch: {
                body: {
                    name?: string | undefined;
                    icon?: string | undefined;
                    displaySymbol?: string | undefined;
                    verified?: boolean | undefined;
                    isTest?: boolean | undefined;
                    isPoint?: boolean | undefined;
                    isPreTGE?: boolean | undefined;
                };
                params: {
                    id: string;
                };
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
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
                    };
                };
            };
        };
    } & {
        webhooks: {
            notion: {
                post: {
                    body: {
                        data: {
                            properties: {
                                "Icon (Required)": {
                                    files: ({
                                        file: {
                                            url: string;
                                        };
                                    } | {
                                        external: {
                                            url: string;
                                        };
                                    })[];
                                };
                                "Address (in checksum format) (Required)": {
                                    rich_text: {
                                        plain_text: string;
                                    }[];
                                };
                                "Chain ID (Required)": {
                                    number: number;
                                };
                                "Symbol (Optional)": {
                                    rich_text: {
                                        plain_text: string;
                                    }[];
                                };
                                "CoinGecko API ID (Recommended)": {
                                    rich_text: {
                                        plain_text: string;
                                    }[];
                                };
                            };
                        };
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
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
                        };
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
