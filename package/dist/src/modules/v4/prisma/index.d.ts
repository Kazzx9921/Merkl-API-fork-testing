import type { Prisma as PrismaTypes } from "@db/api";
type Prisma = PrismaTypes.TypeMap["model"];
type Model<R extends keyof Prisma> = Prisma[R]["payload"]["scalars"];
type Operations<R extends keyof Prisma> = Prisma[R]["operations"];
type OptionalKeys<Obj> = keyof {
    [Key in keyof Obj as Omit<Obj, Key> extends Obj ? Key : never]: Obj[Key];
};
/**
 * A resource from the prisma generated types
 * @param Schema - name of the resource
 * @typeParam DbSpecificKeys - keys to remove from default model
 * @typeParam Override - addtional properties to add
 * @returns A type with members for every prisma declaration
 * @example type User = Resource<"User", "id">;
 * const userTemplate: User["action"]["create"] = {...}
 * const userUpsert: User["action"]["upsert"] = {...}
 * const user: User["model"] = {...}
 * const userDbRaw: User["raw"] = {...}
 */
export type Resource<Schema extends keyof Prisma, DbSpecificKeys extends keyof Model<Schema> | undefined = undefined, Override extends {} = {}> = {
    model: {
        [K in Exclude<keyof Model<Schema> | keyof Override, DbSpecificKeys | OptionalKeys<Override>>]: K extends keyof Override ? Override[K] : K extends DbSpecificKeys ? never : K extends keyof Model<Schema> ? Model<Schema>[K] : never;
    } & {
        [K in OptionalKeys<Override>]?: Override[K];
    };
    raw: Model<Schema>;
} & {
    action: {
        [O in keyof Operations<Schema>]: Operations<Schema>[O];
    };
};
export {};
