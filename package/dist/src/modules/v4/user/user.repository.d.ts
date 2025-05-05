import type { GetManyUserModel, UserModel } from "./user.model";
export declare abstract class UserRepository {
    static findUnique(address: string): Promise<{
        tags: string[];
        address: string;
        creatorId: string | null;
    }>;
    static findMany(query: GetManyUserModel): Promise<{
        tags: string[];
        address: string;
        creatorId: string | null;
    }[]>;
    static findManyWithTags(): Promise<{
        tags: string[];
        address: string;
        creatorId: string | null;
    }[]>;
    static create(user: UserModel): Promise<{
        tags: string[];
        address: string;
        creatorId: string | null;
    }>;
    static createMany(users: UserModel[]): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    static updateTags(address: string, tags: string[]): Promise<{
        tags: string[];
        address: string;
        creatorId: string | null;
    }>;
}
