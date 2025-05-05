import { HttpError } from "@/errors";
import { type ChainId } from "@sdk";
import type Elysia from "elysia";
import { ValidationError } from "elysia";
export declare class InvalidParameter extends Error {
    message: string;
    constructor(message: string);
}
export declare class UnsupportedNetwork extends Error {
    chainId: ChainId;
    constructor(chainId: ChainId);
}
export declare class OpportunityNotFound extends Error {
    mainParameter: string;
    chainId: ChainId;
    constructor(mainParameter: string, chainId: ChainId);
}
export declare class CannotParseOpportunity extends Error {
    campaignId: string;
    chainId: number;
    type: string;
    constructor(campaignId: string, chainId: number, type: string);
}
export declare class CannotUpdateOpportunityLastCreatedAt extends Error {
    campaignId: string;
    chainId: number;
    type: string;
    constructor(campaignId: string, chainId: number, type: string);
}
export declare class MerkleRootNotFound extends Error {
    chainId: ChainId;
    constructor(chainId: ChainId);
}
export declare class InvalidCacheCall extends Error {
    message: string;
    constructor(message: string);
}
export declare const errorHandler: (canLog?: boolean) => (app: Elysia) => Elysia<"", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {
        readonly InvalidParameter: InvalidParameter;
        readonly UnsupportedNetwork: UnsupportedNetwork;
        readonly OpportunityNotFound: OpportunityNotFound;
        readonly MerkleRootNotFound: MerkleRootNotFound;
        readonly ValidationError: ValidationError;
        readonly InvalidCacheCall: InvalidCacheCall;
        readonly HttpError: HttpError;
    };
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
}>;
