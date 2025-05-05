import { PrismaClient as ApiPrismaClient } from "@db/api";
import { PrismaClient as EnginePrismaClient } from "@db/engine";
import { drizzle } from "drizzle-orm/prisma/pg";
export const apiDbClient = new ApiPrismaClient({
    datasources: {
        db: {
            url: `${process.env.DATABASE_API_URL}&connection_limit=${!!process.env.BACKOFFICE_SECRET ? "300" : "20"}&pool_timeout=60`,
        },
    },
}).$extends(drizzle());
export const engineDbClient = new EnginePrismaClient({
    datasources: {
        db: {
            url: `${process.env.DATABASE_ENGINE_URL}&connection_limit=20&pool_timeout=15`,
        },
    },
});
