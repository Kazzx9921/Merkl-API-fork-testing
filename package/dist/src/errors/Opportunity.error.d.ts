export declare class OpportunityError extends Error {
    code: string;
    httpCode?: number;
    info?: object;
    constructor(message: string, name: string, info?: object);
}
