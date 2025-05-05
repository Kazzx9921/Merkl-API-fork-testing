import type { BucketService } from "../bucket/bucket.service";
import type { FileMetadata } from "./icon.model";
export declare abstract class IconService {
    static pullPush(url: string, bucket: BucketService, metadata?: FileMetadata): Promise<string>;
}
