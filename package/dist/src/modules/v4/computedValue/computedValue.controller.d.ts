import Elysia from "elysia";
export declare const ComputedValueController: Elysia<"/value", false, {
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
    value: {
        campaign: {
            ":campaignId": {
                ":field": {
                    get: {
                        body: unknown;
                        params: {
                            campaignId: string;
                            field: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                averageBoost: number | null;
                                totalDistributedInUSD: number | null;
                                forfeitingBoost: number | null;
                            } | null;
                        };
                    };
                };
            };
        };
    };
} & {
    value: {
        user: {
            ":address": {
                ":field": {
                    get: {
                        body: unknown;
                        params: {
                            address: string;
                            field: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                reason: string;
                                id: string;
                                campaignId: string;
                                boost: number | null;
                            }[];
                        };
                    };
                };
            };
        };
    };
} & {
    value: {
        engine: {
            campaign: {
                post: {
                    body: {
                        value: number;
                        campaignId: string;
                        field: string;
                    };
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
        };
    };
} & {
    value: {
        engine: {
            user: {
                post: {
                    body: {
                        reason: string;
                        value: number;
                        campaignId: string;
                        address: string;
                        field: string;
                    }[];
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
