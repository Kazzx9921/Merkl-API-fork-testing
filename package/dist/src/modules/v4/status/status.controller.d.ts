import Elysia from "elysia";
import { StatusService } from "./status.service";
export declare const StatusController: Elysia<"/campaign-status", false, {
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
    "campaign-status": {
        engine: {
            ":campaignId": {
                put: {
                    body: {
                        value: "SUCCESS";
                        computedUntil: number;
                    } | {
                        value: "PROCESSING";
                    } | {
                        error: string;
                        details: string;
                        value: "SKIPPED";
                    } | {
                        error: string;
                        details: string;
                        value: "FAILED";
                    };
                    params: {
                        campaignId: string;
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
    } & {
        engine: {
            computedUntil: {
                ":campaignId": {
                    put: {
                        body: {
                            computedUntil: number;
                        };
                        params: {
                            campaignId: string;
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
    } & {
        error: {
            ":campaignId": {
                put: {
                    body: {
                        error: string;
                    };
                    params: {
                        campaignId: string;
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
    } & {
        engine: {
            overlaps: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        campaignId: string;
                        distributionChain: number;
                    };
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: boolean;
                    };
                };
            };
        };
    } & {
        index: {
            get: {
                body: unknown;
                params: {};
                query: {
                    status?: "PROCESSING" | "SUCCESS" | "FAILED" | "SKIPPED" | ("PROCESSING" | "SUCCESS" | "FAILED" | "SKIPPED")[] | undefined;
                    computeChainId?: number | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        status: import("@db/api").$Enums.RunStatus;
                        error: string;
                        details: import("database/api/.generated/runtime/library").JsonValue;
                        campaignId: string;
                        computedUntil: bigint;
                        processingStarted: bigint;
                    }[];
                };
            };
        };
    } & {
        ":campaignId": {
            get: {
                body: unknown;
                params: {
                    campaignId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        status: import("@db/api").$Enums.RunStatus;
                        error: string;
                        details: import("database/api/.generated/runtime/library").JsonValue;
                        campaignId: string;
                        computedUntil: bigint;
                        processingStarted: bigint;
                    }[] | {
                        status: import("@db/api").$Enums.RunStatus;
                        error: string;
                        details: import("database/api/.generated/runtime/library").JsonValue;
                        campaignId: string;
                        computedUntil: bigint;
                        processingStarted: bigint;
                    };
                };
            };
        };
    } & {
        delay: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        chainId?: number | undefined;
                        endTimestampLowerBound?: number | undefined;
                        delayLowerBound?: number | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            delay: number;
                            computedUntil: number;
                            computeChainId: number;
                            distributionChainId: number;
                            campaignId: string;
                            startTimestamp: bigint;
                            endTimestamp: bigint;
                            RewardToken: {
                                symbol: string;
                                address: string;
                                isTest: boolean;
                            };
                            Opportunity: {
                                type: string;
                                name: string;
                                identifier: string;
                            };
                            CampaignStatus: {
                                status: import("@db/api").$Enums.RunStatus;
                                error: string;
                                details: import("database/api/.generated/runtime/library").JsonValue;
                                campaignId: string;
                                computedUntil: bigint;
                                processingStarted: bigint;
                            }[];
                        }[];
                    };
                };
            };
        };
    } & {
        delay: {
            status: {
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
                                admin: string;
                                adminUrl?: string;
                                distributor: string;
                                distributionCreator: string;
                                endOfDisputePeriod: number;
                                disputer: string;
                                liveCampaigns: number;
                                delayed: Awaited<ReturnType<(typeof StatusService)["findManyDelay"]>>;
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
