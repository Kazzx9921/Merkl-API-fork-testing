import { HttpError } from "./HttpError";
export class VoidString extends HttpError {
    constructor(message = "Void String is invalid") {
        super(message, 409);
        this.name = "VoidString";
    }
}
