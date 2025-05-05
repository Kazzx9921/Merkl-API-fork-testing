export class IconService {
    static async pullPush(url, bucket, metadata) {
        const filename = metadata?.name ?? url;
        const iconFile = await fetch(url);
        const mimeType = iconFile.headers.get("content-type");
        const extension = metadata?.extension ? metadata.extension : mimeType.split("/")[1].split("+")[0];
        const byteArray = await iconFile.bytes();
        await bucket.pushRaw(`${filename}.${extension}`, byteArray, {
            type: mimeType,
            isPublic: true,
            compression: true,
            overwrite: true,
        });
        return `${process.env.GCS_ENDPOINT}/${bucket.getBucketName()}/${filename}.${extension}`;
    }
}
