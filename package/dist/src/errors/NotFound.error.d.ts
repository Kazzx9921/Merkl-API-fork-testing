import { HttpError } from "./HttpError";
export declare class NotFoundError extends HttpError {
    constructor(message?: string);
}
export declare const NotFoundErrorDto: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    message: import("@sinclair/typebox").TString;
}>;
