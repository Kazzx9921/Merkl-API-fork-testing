import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { log } from "@/utils/logger";
import { engineDbClient } from "@db";
import { ChainInteractionService, DistributionCreatorInterface, registry } from "@sdk";
import { UserRepository } from "./user.repository";
// ─── Users Services ──────────────────────────────────────────────────────────
export class UserService {
    static async findUnique(address) {
        return await UserRepository.findUnique(address);
    }
    static async findMany(query) {
        return await UserRepository.findMany(query);
    }
    static async findManyWithTags() {
        return await UserRepository.findManyWithTags();
    }
    static async create(user) {
        return await UserRepository.create(user);
    }
    static async createMany(users) {
        return await UserRepository.createMany(users);
    }
    static async updateTags(user, tags) {
        if (!(await UserRepository.findUnique(user))) {
            await UserRepository.create({ address: user, tags: [] });
        }
        return await UserRepository.updateTags(user, tags);
    }
    static async checkTerms(userAddress, chainId) {
        const distributorAddress = registry(chainId)?.Merkl?.DistributionCreator;
        if (!distributorAddress)
            throw new Error(`Distributor address not found for chainId ${chainId}`);
        const calls = [
            {
                callData: DistributionCreatorInterface.encodeFunctionData("userSignatureWhitelist", [userAddress]),
                target: distributorAddress,
                allowFailure: false,
            },
            {
                callData: DistributionCreatorInterface.encodeFunctionData("userSignatures", [userAddress]),
                target: distributorAddress,
                allowFailure: false,
            },
            {
                callData: DistributionCreatorInterface.encodeFunctionData("messageHash"),
                target: distributorAddress,
                allowFailure: false,
            },
        ];
        const decoders = (r) => [
            DistributionCreatorInterface.decodeFunctionResult("userSignatureWhitelist", r[0].returnData)[0].toString(),
            DistributionCreatorInterface.decodeFunctionResult("userSignatures", r[1].returnData)[0].toString(),
            DistributionCreatorInterface.decodeFunctionResult("messageHash", r[2].returnData)[0].toString(),
        ];
        const result = await ChainInteractionService(chainId).fetchAndDecodeMultiple(calls, decoders);
        const [signatureWhitelist, userSignature, messageHash] = result;
        const hasNotSigned = signatureWhitelist === "0" && userSignature !== messageHash;
        return !hasNotSigned;
    }
    static async syncTags() {
        // 1 - engine -> api db
        const creatorTags = await engineDbClient.campaignCreators.findMany();
        log.info(`syncing ${creatorTags.length} creator tags`);
        await UserRepository.createMany(creatorTags.map(tag => {
            return {
                address: tag.address,
                tags: [],
            };
        }));
        for (const tag of creatorTags) {
            await UserRepository.updateTags(tag.address, tag.tags.split(",").map(tag => tag.trim()));
        }
        // 2 - api -> engine db
        const apiUsers = await UserRepository.findManyWithTags();
        for (const tag of creatorTags) {
            if (creatorTags.findIndex(t => t.address === tag.address) === -1) {
                await engineDbClient.campaignCreators.create({
                    data: {
                        address: tag.address,
                        tags: apiUsers.find(u => u.address === tag.address)?.tags.join(",") || "",
                    },
                });
            }
        }
    }
    static async syncOpportunityTags() {
        const users = await UserRepository.findManyWithTags();
        for (const user of users) {
            const opportunities = await OpportunityService.findMany({ creatorAddress: user.address });
            for (const opportunity of opportunities) {
                if (!user.tags.every(tag => opportunity.tags.includes(tag))) {
                    log.local(`updating tags for opportunity ${opportunity.id}: adding ${user.tags.join(",")}`);
                    log.local(`opportunity tags: ${opportunity.tags.join(",")}`);
                    await OpportunityService.update(opportunity.id, { tags: [...opportunity.tags, ...user.tags] });
                }
            }
        }
    }
}
