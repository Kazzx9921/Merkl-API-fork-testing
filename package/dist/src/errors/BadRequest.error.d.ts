import { HttpError } from "./HttpError";
export declare class BadRequestError extends HttpError {
    constructor(message?: string, legalValues?: string[]);
}
