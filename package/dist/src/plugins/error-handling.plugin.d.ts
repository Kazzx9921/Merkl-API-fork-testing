import { BadRequestError, ConflictError, HttpError, NotFoundError, UnauthorizedError } from "@/errors";
import type Elysia from "elysia";
export declare const ErrorHandler: (app: Elysia) => Elysia<"", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {
        readonly HttpError: HttpError;
        readonly BadRequestError: BadRequestError;
        readonly ConflictError: ConflictError;
        readonly NotFoundError: NotFoundError;
        readonly UnauthorizedError: UnauthorizedError;
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
