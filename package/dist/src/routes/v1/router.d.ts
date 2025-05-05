import Elysia from "elysia";
export declare const v1: Elysia<"/v1", false, {
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
    v1: {
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
    };
} & {
    v1: {
        balances: {
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
    };
} & {
    v1: {
        prices: {
            get: {
                body: unknown;
                params: {};
                query: {};
                headers: unknown;
                response: {
                    200: {
                        rate: number;
                        token: string;
                    }[];
                };
            };
        };
    };
} & {
    v1: {
        tokens: {
            get: {
                body: unknown;
                params: {};
                query: {};
                headers: unknown;
                response: {
                    [x: string]: any;
                    200: any;
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
