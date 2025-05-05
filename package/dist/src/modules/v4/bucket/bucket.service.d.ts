import { type S3ListObjectsOptions } from "bun";
import type { UploadOptions } from "./bucket.model";
export declare class BucketService {
    #private;
    defaultUploadOptions: UploadOptions<unknown>;
    constructor(bucket: string, projectId: string);
    getBucketName(): string;
    pushArray<T>(filename: string, arr: T[], options?: UploadOptions<T>): Promise<number>;
    push(filename: string, text: string, options?: Omit<UploadOptions<never>, "transform" | "separator">): Promise<number>;
    pushRaw(filename: string, data: Uint8Array, options?: Omit<UploadOptions<never>, "transform" | "separator">): Promise<number>;
    pullArray<T>(filename: string, callback: (elem: string) => T, separator?: string): Promise<T[]>;
    pull(filename: string): Promise<string>;
    list(input?: S3ListObjectsOptions | null): Promise<Bun.S3ListObjectsResponse>;
}
