import { t } from "elysia";
import { HttpError } from "./HttpError";
export class NotFoundError extends HttpError {
    constructor(message = "Not Found") {
        super(message, 404);
        this.name = "NotFoundError";
    }
}
export const NotFoundErrorDto = t.Object({
    name: t.String({ default: "NotFoundError" }),
    message: t.String({ default: "Not Found" }),
});
