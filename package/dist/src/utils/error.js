import { HttpError } from "@/errors";
import { NETWORK_LABELS } from "@sdk";
import { ValidationError } from "elysia";
export class InvalidParameter extends Error {
    message;
    constructor(message) {
        super(message);
        this.message = message;
        this.name = "INVALID_PARAMETER";
    }
}
export class UnsupportedNetwork extends Error {
    chainId;
    constructor(chainId) {
        super(`API for Merkl products by Angle Labs does not support (yet) network ${chainId}`);
        this.chainId = chainId;
        this.name = "UNSUPPORTED_NETWORK";
    }
}
export class OpportunityNotFound extends Error {
    mainParameter;
    chainId;
    constructor(mainParameter, chainId) {
        super(`No campaigns found for mainParameter ${mainParameter} on chain ${NETWORK_LABELS[chainId]}`);
        this.mainParameter = mainParameter;
        this.chainId = chainId;
        this.name = "OPPORTUNITY_NOT_FOUND";
    }
}
export class CannotParseOpportunity extends Error {
    campaignId;
    chainId;
    type;
    constructor(campaignId, chainId, type) {
        super(`Cannot parse opportunity from campaign ${campaignId} of type ${type} on chain ${NETWORK_LABELS[chainId]}`);
        this.campaignId = campaignId;
        this.chainId = chainId;
        this.type = type;
        this.name = "OPPORTUNITY_CANNOT_BE_PARSED";
    }
}
export class CannotUpdateOpportunityLastCreatedAt extends Error {
    campaignId;
    chainId;
    type;
    constructor(campaignId, chainId, type) {
        super(`Cannot update opportunity last created at for campaign ${campaignId} of type ${type} on chain ${NETWORK_LABELS[chainId]}`);
        this.campaignId = campaignId;
        this.chainId = chainId;
        this.type = type;
        this.name = "OPPORTUNITY_LAST_CREATED_CANNOT_BE_UPDATED";
    }
}
export class MerkleRootNotFound extends Error {
    chainId;
    constructor(chainId) {
        super(`No Merkl root found for network ${NETWORK_LABELS[chainId]} (${chainId})`);
        this.chainId = chainId;
        this.name = "MERKLE_ROOT_NOT_FOUND";
    }
}
export class InvalidCacheCall extends Error {
    message;
    constructor(message) {
        super(message);
        this.message = message;
        this.name = "INVALID_CACHE_CALL";
    }
}
export const errorHandler = (canLog = true) => {
    return (app) => app
        .error({
        InvalidParameter,
        UnsupportedNetwork,
        OpportunityNotFound,
        MerkleRootNotFound,
        ValidationError,
        InvalidCacheCall,
        HttpError,
    })
        .onError(({ error, path, query, code, set, ...all }) => {
        const response = (status, log = true, overrides) => {
            if (canLog && log)
                console.error(`[${path}](${JSON.stringify(query) ?? ""}): ${error.message} : ${error.stack}`);
            return new Response(JSON.stringify(Object.assign({
                error: error.name !== "Error" ? error.name : code,
                message: error.message,
            }, overrides ?? {})), {
                status,
            });
        };
        switch (code) {
            case "InvalidParameter":
            case "InvalidCacheCall":
                return response(400, false);
            case "NOT_FOUND":
                return response(404, false, { message: `${path} does not exist` });
            case "UnsupportedNetwork":
            case "OpportunityNotFound":
            case "MerkleRootNotFound":
                return response(404, false);
            case "VALIDATION": {
                const errorObj = JSON.parse(error.message);
                const property = (errorObj.property ?? "").replaceAll("/", "");
                return response(400, false, {
                    message: errorObj.summary,
                    found: (property === "" ? errorObj.found : errorObj.found?.[property]) ?? "undefined",
                });
            }
            default:
                return response(500);
        }
    });
};
