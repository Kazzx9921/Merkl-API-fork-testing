import { BadRequestError, ConflictError, HttpError, NotFoundError, UnauthorizedError } from "@/errors";
import { log } from "@/utils/logger";
// ─── Error Handler Plugin ────────────────────────────────────────────────────
export const ErrorHandler = (app) => app
    // ─── Error Types ─────────────────────────────────────────────────────
    .error({
    HttpError,
    BadRequestError,
    ConflictError,
    NotFoundError,
    UnauthorizedError,
})
    // ─── Error Handling ──────────────────────────────────────────────────
    .onError(({ code, error, set }) => {
    set.headers["content-type"] = "application/json";
    if (code === "HttpError") {
        log.error("HttpError", error);
        set.status = error.httpCode;
        return {
            name: error.name,
            message: error.message,
            info: error.info,
        };
    }
    if (code === "VALIDATION") {
        return {
            name: "ValidationError",
            message: JSON.parse(error.message).summary,
            info: JSON.parse(error.message),
        };
    }
    log.error("Unknown error", error);
    return error;
});
