import type { CreateProtocolModel, GetProtocolsQueryModel, Protocol, ProtocolId, UpdateProtocolModel } from "./protocol.model";
export declare abstract class ProtocolService {
    #private;
    static findMany(query: GetProtocolsQueryModel): Promise<Protocol["model"][]>;
    static countMany(query: GetProtocolsQueryModel): Promise<number>;
    static findUnique(id: ProtocolId | string): Promise<Protocol["model"] | null>;
    static create(data: CreateProtocolModel): Promise<{
        url: string;
        name: string;
        description: string;
        id: string;
        tags: string[];
        icon: string;
    }>;
    static upsert(data: CreateProtocolModel): Promise<{
        url: string;
        name: string;
        description: string;
        id: string;
        tags: string[];
        icon: string;
    }>;
    static update(id: string, data: UpdateProtocolModel): Promise<{
        url: string;
        name: string;
        description: string;
        id: string;
        tags: string[];
        icon: string;
    }>;
    static changeLogoUrls(): Promise<void>;
}
