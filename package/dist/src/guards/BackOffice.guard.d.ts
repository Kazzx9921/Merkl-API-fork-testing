export declare const AuthorizationHeadersDto: import("@sinclair/typebox").TObject<{
    authorization: import("@sinclair/typebox").TString;
}>;
export type AuthorizationHeaders = typeof AuthorizationHeadersDto.static;
export declare function BackOfficeGuard({ headers }: {
    headers: AuthorizationHeaders;
}): Promise<void>;
