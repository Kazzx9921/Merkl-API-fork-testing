import { HttpError } from "./HttpError";
export class UnableToFindPrice extends HttpError {
    constructor(message = "UnableToFindPrice") {
        super(message, 422);
        this.name = "UnableToFindPriceError";
    }
}
