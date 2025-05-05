import { PrismaClient as EnginePrismaClient } from "@db/engine";
export declare const apiDbClient: import("database/api/.generated/runtime/library").DynamicClientExtensionThis<import("@db/api").Prisma.TypeMap<import("database/api/.generated/runtime/library").InternalArgs & {
    result: {};
    model: {};
    query: {};
    client: {
        $drizzle: () => import("drizzle-orm/prisma/pg").PrismaPgDatabase;
    };
}, import("@db/api").Prisma.PrismaClientOptions>, import("@db/api").Prisma.TypeMapCb, {
    result: {};
    model: {};
    query: {};
    client: {
        $drizzle: () => import("drizzle-orm/prisma/pg").PrismaPgDatabase;
    };
}, {
    datasources: {
        db: {
            url: string;
        };
    };
}>;
export declare const engineDbClient: EnginePrismaClient<{
    datasources: {
        db: {
            url: string;
        };
    };
}, never, import("database/engine/.generated/runtime/library").DefaultArgs>;
