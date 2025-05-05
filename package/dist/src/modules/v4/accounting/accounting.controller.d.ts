import Elysia from "elysia";
export declare const AccountingController: Elysia<"/accounting", false, {
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
    accounting: {
        index: {
            get: {
                body: unknown;
                params: {};
                query: {
                    items?: number | undefined;
                    page?: number | undefined;
                };
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
                        id: string;
                        datetime: Date;
                        chainId: number;
                        timestamp: number;
                        recipient: string;
                        fromTokenId: string;
                        toTokenId: string;
                        multisig: string;
                        amountIn: string;
                        amountOut: string;
                    }[];
                };
            };
        };
    } & {
        revenues: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
                        total: number;
                        breakdown: {
                            [key: number]: {
                                chainAmount: number;
                                percentage: number;
                            };
                        };
                    };
                };
            };
        };
    } & {
        revenues: {
            "per-month": {
                ":year": {
                    ":month": {
                        get: {
                            body: unknown;
                            params: {
                                year: number;
                                month: number;
                            };
                            query: unknown;
                            headers: {
                                authorization: string;
                            };
                            response: {
                                200: {
                                    total: number;
                                    breakdown: {
                                        [key: number]: {
                                            chainAmount: number;
                                            percentage: number;
                                        };
                                    };
                                    from: string;
                                    to: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        revenues: {
            chains: {
                ":chainId": {
                    get: {
                        body: unknown;
                        params: {
                            chainId: number;
                        };
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                totalAmount: number;
                            };
                        };
                    };
                };
            };
        };
    } & {
        revenues: {
            chains: {
                ":chainId": {
                    "per-month": {
                        ":year": {
                            ":month": {
                                get: {
                                    body: unknown;
                                    params: {
                                        chainId: number;
                                        year: number;
                                        month: number;
                                    };
                                    query: unknown;
                                    headers: {
                                        authorization: string;
                                    };
                                    response: {
                                        200: {
                                            totalAmount: number;
                                            from: string;
                                            to: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        tokens: {
            ":chainId": {
                ":tokenAddress": {
                    get: {
                        body: unknown;
                        params: {
                            chainId: number;
                            tokenAddress: string;
                        };
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                totalAmount: number;
                                totalAmountUSD: number;
                            };
                        };
                    };
                };
            };
        };
    } & {
        tokens: {
            ":chainId": {
                ":tokenAddress": {
                    "per-month": {
                        ":year": {
                            ":month": {
                                get: {
                                    body: unknown;
                                    params: {
                                        chainId: number;
                                        year: number;
                                        month: number;
                                        tokenAddress: string;
                                    };
                                    query: unknown;
                                    headers: {
                                        authorization: string;
                                    };
                                    response: {
                                        200: {
                                            totalAmount: number;
                                            totalAmountUSD: number;
                                            from: string;
                                            to: string;
                                        };
                                    };
                                };
                            };
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
