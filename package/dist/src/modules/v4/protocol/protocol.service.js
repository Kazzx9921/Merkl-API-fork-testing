import { CacheService } from "@/modules/v4/cache/cache.service";
import { ChainService } from "@/modules/v4/chain/chain.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { BucketService } from "../bucket/bucket.service";
import { TTLPresets } from "../cache/cache.model";
import { IconService } from "../icon/icon.service";
import { ProtocolRepository } from "./protocol.repository";
// ─── Protocols Services ──────────────────────────────────────────────────────
export class ProtocolService {
    static async #findMany(query) {
        const protocols = await ProtocolRepository.findMany(query);
        const enrichedProtocols = protocols.map(({ MainOpportunities, ...protocol }) => ({
            ...protocol,
            dailyRewards: MainOpportunities.reduce((sum, opportunity) => sum + opportunity.dailyRewards, 0),
            numberOfLiveCampaigns: MainOpportunities.reduce((sum, opportunity) => sum + opportunity.Campaigns.length, 0),
            opportunityLiveTags: [...new Set(MainOpportunities.flatMap(opportunity => opportunity.action))], // ensure uniqness of tags
        }));
        return enrichedProtocols;
    }
    static async findMany(query) {
        if (query.test)
            return await ProtocolRepository.findMany(query);
        return await CacheService.wrap(TTLPresets.MIN_10, ProtocolService.#findMany, query);
    }
    static async countMany(query) {
        return ProtocolRepository.countMany(query);
    }
    static async findUnique(id) {
        return ProtocolRepository.findUnique(id);
    }
    static async create(data) {
        return await ProtocolRepository.create(data);
    }
    static async upsert(data) {
        const env = process.env.ENV === "prod" ? "production" : process.env.ENV;
        const iconUri = await IconService.pullPush(data.icon, new BucketService("merkl-static-assets", `angle-${env}-1`), {
            name: `protocols/${data.id}`,
        });
        return await ProtocolRepository.upsert({
            ...data,
            icon: `${iconUri}`,
        });
    }
    static async update(id, data) {
        return await ProtocolRepository.update(id, data);
    }
    static async changeLogoUrls() {
        const oldUrl = "https://storage.googleapis.com/merkl-assets/";
        const newUrl = "https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/";
        const protocols = await ProtocolService.findMany({ items: 10_000 });
        for (const protocol of protocols) {
            if (protocol.icon.includes(oldUrl)) {
                await ProtocolService.update(protocol.id, { icon: protocol.icon.replace(oldUrl, newUrl) });
                log.info(`Updated protocol ${protocol.id} icon`);
            }
        }
        const chains = await ChainService.findMany({});
        for (const chain of chains) {
            if (chain.icon.includes(oldUrl)) {
                await ChainService.update(chain.id, { icon: chain.icon.replace(oldUrl, newUrl) });
                log.info(`Updated chain ${chain.id} icon`);
            }
        }
        const tokens = await TokenService.findMany({});
        for (const token of tokens) {
            if (token.icon.includes(oldUrl)) {
                await TokenService.update(token.id, { icon: token.icon.replace(oldUrl, newUrl) });
                log.info(`Updated token ${token.id} icon`);
            }
        }
    }
}
