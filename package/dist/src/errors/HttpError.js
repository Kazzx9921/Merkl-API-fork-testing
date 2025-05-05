import { t } from "elysia";
export class HttpError extends Error {
    code;
    httpCode;
    info;
    constructor(message = "Internal Server Error", httpCode = 500, info) {
        super(message);
        this.code = "HttpError";
        this.httpCode = httpCode;
        this.info = info;
    }
}
export const HttpErrorDto = t.Object({
    code: t.String({ default: "Internal Server Error" }),
    httpCode: t.Number({ default: 500 }),
    info: t.String(),
});
