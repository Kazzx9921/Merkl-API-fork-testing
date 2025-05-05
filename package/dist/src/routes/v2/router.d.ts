import Elysia from "elysia";
export declare const v2: Elysia<"/v2", false, {
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
    v2: {
        merkl: {
            get: {
                body: unknown;
                params: {};
                query: {
                    user?: string | undefined;
                    chainIds?: number | number[] | undefined;
                    AMMs?: string | string[] | undefined;
                    onlyLive?: string | undefined;
                    "AMMs[]"?: string | string[] | undefined;
                    "AMMs[0]"?: string | undefined;
                    "chainIds[]"?: number | number[] | undefined;
                    "chainIds[0]"?: number | undefined;
                };
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
