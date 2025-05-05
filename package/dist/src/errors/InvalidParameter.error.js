import { HttpError } from "./HttpError";
export class InvalidParameter extends HttpError {
    constructor(message = "Invalid Parameter") {
        super(message, 400);
        this.name = "InvalidParameterError";
    }
}
