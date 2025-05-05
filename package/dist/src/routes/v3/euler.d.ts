import { type Elysia } from "elysia";
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
    euler: {
        index: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: EulerVaultType[] | null;
                };
            };
        };
    } & {
        ":chainId": {
            get: {
                body: unknown;
                params: {
                    chainId: number;
                };
                query: {
                    vaultAddress?: string | undefined;
                };
                headers: unknown;
                response: {
                    200: EulerVaultType[] | undefined;
                };
            };
        };
    } & {
        update: {
            post: {
                body: unknown;
                params: {};
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: void;
                };
            };
        };
    } & {
        update: {
            ":chainId": {
                post: {
                    body: unknown;
                    params: {
                        chainId: number;
                    };
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: void;
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
