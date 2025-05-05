import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import axios from "axios";
import { Elysia } from "elysia";
import { apiDbClient, engineDbClient } from "../database";
import { redisClient } from "./cache/redis";
import { v4 } from "./modules/v4/router";
import { v1 } from "./routes/v1/router";
import { v2 } from "./routes/v2/router";
import { v3 } from "./routes/v3/router";
import { errorHandler } from "./utils/error";
import { log } from "./utils/logger";
// Axios with bun workaround
axios.defaults.headers.common["Accept-Encoding"] = "gzip";
const PORT = process.env.PORT || 3000;
const app = new Elysia({
    normalize: false,
    serve: {
        maxRequestBodySize: 1024 * 1024 * 1024, // 1GB
        idleTimeout: 0,
    },
})
    .use(swagger({
    scalarConfig: {
        theme: "kepler",
        darkMode: true,
        favicon: "https://app.merkl.xyz/images/merkl-favicon.ico",
    },
    documentation: {
        info: {
            contact: {
                email: "contact@merkl.money",
                name: "Angle Labs",
            },
            description: "The official API to access data related to Merkl campaigns, built and maintained by Angle Labs. This API is provided as is, without any warranty of any kind.",
            license: {
                name: "UNLICENSED",
            },
            title: "Merkl API",
            version: "1.0.1",
        },
    },
    exclude: [/v4\/.*/, "/"],
}))
    .use(swagger({
    path: "/docs",
    scalarConfig: {
        theme: "kepler",
        darkMode: true,
        favicon: "https://app.merkl.xyz/images/merkl-favicon.ico",
    },
    documentation: {
        tags: [
            {
                name: "Opportunities",
                description: "An opportunity represents a collection of campaigns.",
            },
            {
                name: "Campaigns",
                description: "Campaigns are designed to incentivize participation in a protocol by offering rewards to users for specific behaviors or actions.",
            },
            {
                name: "Protocols",
                description: "Endpoints related to protocols integrated by Merkl.",
            },
            {
                name: "Chains",
                description: "Endpoints related to chains integrated by Merkl.",
            },
            {
                name: "Users",
                description: "Endpoints related to Merkl users.",
            },
        ],
        info: {
            contact: {
                email: "contact@merkl.money",
                name: "Angle Labs",
            },
            description: "The official API to access data related to Merkl campaigns, built and maintained by Angle Labs. This API is provided as is, without any warranty of any kind.",
            license: {
                name: "UNLICENSED",
            },
            title: "Merkl API",
            version: "1.0.1",
        },
    },
    exclude: [/engine\/*/, /v1\/.*/, /v2\/.*/, /v3\/.*/, /swagger\/*/],
}))
    .use(cors())
    .get("/", () => "Merkl API: docs available at /docs", {
    detail: {
        hide: true,
    },
})
    .use(v1)
    .use(v2)
    .use(v4)
    .use(v3)
    .use(errorHandler())
    .listen({ port: PORT, idleTimeout: 40 }, server => {
    log.info(`🌐  Api started (${server.hostname || "localhost"}:${server.port})`);
});
// ─── Signal Handling ─────────────────────────────────────────────────────────
process.on("SIGTERM", () => {
    engineDbClient.$disconnect();
    apiDbClient.$disconnect();
    redisClient.disconnect();
    process.exit();
});
export { app };
