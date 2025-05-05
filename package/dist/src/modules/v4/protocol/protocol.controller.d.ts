import Elysia from "elysia";
export declare const ProtocolController: Elysia<"/protocols", false, {
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
    protocols: {
        index: {
            get: {
                body: unknown;
                params: {};
                query: {
                    name?: string | undefined;
                    id?: string | undefined;
                    items?: number | undefined;
                    tags?: string[] | undefined;
                    page?: number | undefined;
                    ids?: string[] | undefined;
                    test?: boolean | undefined;
                    opportunityTag?: string | undefined;
                };
                headers: unknown;
                response: {
                    200: ({
                        url: string;
                        name: string;
                        description: string;
                        id: string;
                        tags: string[];
                        icon: string;
                    } & {
                        dailyRewards?: number | undefined;
                        numberOfLiveCampaigns?: number | undefined;
                        opportunityLiveTags?: string[] | undefined;
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
                    name?: string | undefined;
                    id?: string | undefined;
                    items?: number | undefined;
                    tags?: string[] | undefined;
                    page?: number | undefined;
                    ids?: string[] | undefined;
                    test?: boolean | undefined;
                    opportunityTag?: string | undefined;
                };
                headers: unknown;
                response: {
                    200: number;
                };
            };
        };
    } & {
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
                        url: string;
                        name: string;
                        description: string;
                        id: string;
                        tags: string[];
                        icon: string;
                        dailyRewards?: number | undefined;
                        numberOfLiveCampaigns?: number | undefined;
                        opportunityLiveTags?: string[] | undefined;
                    };
                };
            };
        };
    } & {
        ":id": {
            patch: {
                body: {
                    url?: string | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    icon?: string | undefined;
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
                        url: string;
                        name: string;
                        description: string;
                        id: string;
                        tags: string[];
                        icon: string;
                    };
                };
            };
        };
    } & {
        index: {
            post: {
                body: {
                    url: string;
                    name: string;
                    description: string;
                    id: string;
                    tags: string[];
                    icon: string;
                };
                params: {};
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
                        url: string;
                        name: string;
                        description: string;
                        id: string;
                        tags: string[];
                        icon: string;
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
                                url: {
                                    url: string;
                                };
                                name: {
                                    rich_text: {
                                        text: {
                                            content: string;
                                        };
                                    }[];
                                };
                                description: {
                                    rich_text: {
                                        text: {
                                            content: string;
                                        };
                                    }[];
                                };
                                id: {
                                    title: {
                                        text: {
                                            content: string;
                                        };
                                    }[];
                                };
                                tags: {
                                    rich_text: {
                                        text: {
                                            content: string;
                                        };
                                    }[];
                                };
                                icon: {
                                    files: ({
                                        name: string;
                                        file: {
                                            url: string;
                                        };
                                    } | {
                                        external: {
                                            url: string;
                                        };
                                    })[];
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
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
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
