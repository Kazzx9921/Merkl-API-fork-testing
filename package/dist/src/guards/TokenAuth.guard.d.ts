export declare const AuthorizationHeadersDto: import("@sinclair/typebox").TObject<{
    authorization: import("@sinclair/typebox").TString;
}>;
export type AuthorizationHeaders = typeof AuthorizationHeadersDto.static;
export declare function TokenAuthGuard({ headers }: {
    headers: AuthorizationHeaders;
}): Promise<void>;
