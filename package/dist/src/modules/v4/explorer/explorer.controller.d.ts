import Elysia from "elysia";
export declare const ExplorerController: Elysia<"/explorers", false, {
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
    explorers: {
        post: {
            body: {
                url: string;
                type: "ETHERSCAN" | "BLOCKSCOUT";
                chainId: number;
            };
            params: {};
            query: unknown;
            headers: {
                authorization: string;
            };
            response: {
                200: {
                    url: string;
                    type: import("@db/api").$Enums.ExplorerType;
                    id: string;
                    chainId: number;
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
