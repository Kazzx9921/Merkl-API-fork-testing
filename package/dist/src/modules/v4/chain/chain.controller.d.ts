import Elysia from "elysia";
export declare const ChainController: Elysia<"/chains", false, {
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
    chains: {
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
                        name: string;
                        id: number;
                        icon: string;
                        explorers: {
                            url: string;
                            type: import("@db/api").$Enums.ExplorerType;
                            id: string;
                            chainId: number;
                        }[];
                    } | null;
                };
            };
        };
    };
} & {
    chains: {
        index: {
            get: {
                body: unknown;
                params: {};
                query: {
                    name?: string | undefined;
                    test?: boolean | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        name: string;
                        id: number;
                        icon: string;
                        explorers: {
                            url: string;
                            type: import("@db/api").$Enums.ExplorerType;
                            id: string;
                            chainId: number;
                        }[];
                    }[];
                };
            };
        };
    };
} & {
    chains: {
        count: {
            get: {
                body: unknown;
                params: {};
                query: {
                    name?: string | undefined;
                    test?: boolean | undefined;
                };
                headers: unknown;
                response: {
                    200: number;
                };
            };
        };
    };
} & {
    chains: {
        ":chainId": {
            patch: {
                body: {
                    icon?: string | undefined;
                    dailyRewards?: number | undefined;
                    liveCampaigns?: number | undefined;
                };
                params: {
                    chainId: number;
                };
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
                        name: string;
                        id: number;
                        icon: string;
                    };
                };
            };
        };
    };
} & {
    chains: {
        index: {
            post: {
                body: {
                    name: string;
                    id: number;
                    icon: string;
                    explorerType: "ETHERSCAN" | "BLOCKSCOUT";
                    explorerUrl: string;
                };
                params: {};
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
                        Explorer: {
                            url: string;
                            type: import("@db/api").$Enums.ExplorerType;
                            id: string;
                            chainId: number;
                        }[];
                        name: string;
                        id: number;
                        icon: string;
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
