import crypto from "node:crypto";
export function sha256(x) {
    return crypto.createHash("sha256").update(x).digest("hex");
}
export function hashArray(...args) {
    return args.length > 0 ? sha256(JSON.stringify(args.map(a => a.toString()))) : "";
}
