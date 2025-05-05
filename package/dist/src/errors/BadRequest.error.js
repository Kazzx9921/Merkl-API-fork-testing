import { HttpError } from "./HttpError";
export class BadRequestError extends HttpError {
    constructor(message = "Bad Request", legalValues) {
        super(message, 400, { legalValues });
        this.name = "BadRequestError";
    }
}
