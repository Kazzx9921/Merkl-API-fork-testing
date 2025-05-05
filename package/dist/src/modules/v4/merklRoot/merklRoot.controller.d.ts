import Elysia from "elysia";
export declare const MerklRootController: Elysia<"/roots", false, {
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
    roots: {
        index: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId: number;
                    fromTimestamp: string;
                    toTimestamp: string;
                };
                headers: unknown;
                response: {
                    200: {
                        chainId: number;
                        timestamp: bigint;
                        root: string;
                        epoch: number;
                    }[];
                };
            };
        };
    };
} & {
    roots: {
        live: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        [x: number]: {
                            live: string;
                            tree: string;
                            lastTree: string;
                            endOfDisputePeriod: number;
                            disputer: string;
                        };
                    };
                };
            };
        };
    };
} & {
    roots: {
        engine: {
            post: {
                body: {
                    chainId: number;
                    timestamp: number;
                    root: string;
                    epoch: number;
                };
                params: {};
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
                        chainId: number;
                        timestamp: bigint;
                        root: string;
                        epoch: number;
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
