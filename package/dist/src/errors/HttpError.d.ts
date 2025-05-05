export declare class HttpError extends Error {
    code: string;
    httpCode?: number;
    info?: any;
    constructor(message?: string, httpCode?: number, info?: any);
}
export declare const HttpErrorDto: import("@sinclair/typebox").TObject<{
    code: import("@sinclair/typebox").TString;
    httpCode: import("@sinclair/typebox").TNumber;
    info: import("@sinclair/typebox").TString;
}>;
