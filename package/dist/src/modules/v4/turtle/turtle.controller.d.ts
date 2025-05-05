import Elysia from "elysia";
export declare const TurtleController: Elysia<"/turtle", false, {
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
    turtle: {
        tac: {
            total: {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            total: number;
                            breakdown: {
                                [key: string]: number;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    turtle: {
        tac: {
            ":address": {
                get: {
                    body: unknown;
                    params: {
                        address: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            [x: string]: {
                                vaultSymbol: string;
                                balance: number;
                                maxBalance: number;
                                turtle: number;
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
