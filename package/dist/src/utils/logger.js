import { createPinoLogger } from "@bogeychan/elysia-logger";
export const logger = createPinoLogger({
    base: undefined,
    formatters: {
        level(level) {
            return { level };
        },
    },
    level: process.env.LOG_LEVEL || "info",
    name: process.env.APP_NAME || "api",
    transport: process.env.ENV !== "local"
        ? undefined
        : {
            options: {
                colorize: true,
                ignore: "time,name,hostname,pid,baseUrl,fullUrl,requestId,chain",
                messageFormat: "\u001b[35m{baseUrl}\u001b[39m \u001b[33m{chain}\u001b[39m {msg}",
            },
            target: "pino-pretty",
        },
});
const logConstructor = (type, message, errorMessage, onlyDev, service, url) => {
    if (onlyDev && process.env.ENV !== "local")
        return;
    if (type === "error") {
        if (!!service && !!url) {
            logger.child({ service, url }).error(errorMessage, message);
        }
        else if (!!service) {
            logger.child({ service }).error(errorMessage, message);
        }
        else {
            logger.error(errorMessage, message);
        }
    }
    else if (type === "warn") {
        logger.warn(message);
    }
    else if (type === "debug") {
        logger.debug(message);
    }
    else {
        logger.info(message);
    }
};
export const log = {
    debug: (message) => logConstructor("debug", message),
    error: (message, errorMessage, service, url) => logConstructor("error", message, errorMessage, false, service, url),
    info: (message) => logConstructor("info", message),
    local: (message) => logConstructor("info", message, undefined, true),
    warn: (message) => logConstructor("warn", message),
};
