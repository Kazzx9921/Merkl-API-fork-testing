export class OpportunityError extends Error {
    code;
    httpCode;
    info;
    constructor(message, name, info) {
        super(message);
        this.code = "OpportunityError";
        this.name = name;
        this.info = info;
    }
}
