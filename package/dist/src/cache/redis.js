import { log } from "@/utils/logger";
import { createClient, } from "redis";
const REDISHOST = process.env.REDISHOST || "redis";
const REDISPORT = !!process.env.REDISPORT ? Number(process.env.REDISPORT) : 6379;
const REDISPASSWORD = process.env.REDISPASSWORD || "";
export const REDIS_RETRIES = 0;
export const REDIS_READ_TIMEOUT = !!process.env.REDIS_READ_TIMEOUT
    ? Number.parseInt(process.env.REDIS_READ_TIMEOUT)
    : Bun.env.NODE_ENV === "production"
        ? 4_000
        : 10 * 2_000;
export const REDIS_WRITE_TIMEOUT = 4000;
export const REDIS_CRON_READ_TIMEOUT = 5000;
export const REDIS_CRON_WRITE_TIMEOUT = 10000;
export var TTLType;
(function (TTLType) {
    TTLType[TTLType["HalfBlock"] = 4] = "HalfBlock";
    TTLType[TTLType["Block"] = 11] = "Block";
    TTLType[TTLType["Seconds30"] = 30] = "Seconds30";
    TTLType[TTLType["Minutes2"] = 120] = "Minutes2";
    TTLType[TTLType["Minutes3"] = 180] = "Minutes3";
    TTLType[TTLType["Minutes5"] = 300] = "Minutes5";
    TTLType[TTLType["Minutes10"] = 600] = "Minutes10";
    TTLType[TTLType["Minutes25"] = 1500] = "Minutes25";
    TTLType[TTLType["Minutes30"] = 1800] = "Minutes30";
    TTLType[TTLType["Minutes35"] = 2100] = "Minutes35";
    TTLType[TTLType["Hours3"] = 10800] = "Hours3";
    TTLType[TTLType["Hours12"] = 43200] = "Hours12";
    TTLType[TTLType["Day"] = 86400] = "Day";
    TTLType[TTLType["Week"] = 604800] = "Week";
})(TTLType || (TTLType = {}));
/** Redis client
 * @dev About how handling client connections -> https://stackoverflow.com/questions/22387187/node-js-express-redis-when-to-close-connection
 * @dev Also -> https://github.com/redis/node-redis/issues/568
 */
const redisConfig = {
    url: `redis://${REDISHOST}:${REDISPORT}`,
    socket: REDISHOST === "redis"
        ? undefined
        : {
            tls: true,
            reconnectStrategy: retries => Math.min(retries * 100, 5000),
            keepAlive: 5_000,
        },
    password: REDISPASSWORD,
    pingInterval: 10_000,
};
export const redisClient = createClient(redisConfig);
redisClient.on("error", error => {
    log.error("[REDIS]", error);
    redisClient.connect().catch(() => { }); // Auto-reconnect
});
redisClient.connect();
redisClient.on("end", () => log.debug("[REDIS]: disconnected"));
redisClient.on("ready", () => {
    log.debug("[REDIS]: connected");
});
