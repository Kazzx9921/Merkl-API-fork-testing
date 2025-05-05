import { CampaignTypeConfigResourceMapping, ChainId, NULL_ADDRESS, NULL_ROOT, buildCampaignPayload, encodeForwarderData, parseCampaign, registry, } from "@sdk";
import _ from "lodash";
import { TokenService } from "../token/token.service";
import { safeTemplate, } from "./programPayload.model";
import { MerklInterfaceCampaigns } from "./programPayload.repository";
export class ProgramPayloadService {
    // ─── ProgramPayload ──────────────────────────────────────────────────────────
    static buildConfigTemplate(params) {
        class CampaignConfig extends CampaignTypeConfigResourceMapping[params.campaignType] {
        }
        const parsedConfig = new CampaignConfig();
        const configTemplate = {};
        for (const [key, value] of Object.entries(parsedConfig)) {
            configTemplate[key] = typeof value;
        }
        return configTemplate;
    }
    static buildConfig(query) {
        const campaign = query.campaign;
        const startTimestamp = query.startTimestamp;
        const endTimestamp = query.endTimestamp;
        const rewardToken = query.rewardToken;
        const creator = query.creator;
        const amount = query.amount;
        const program = query.program;
        const apr = query.apr;
        if (!(program in MerklInterfaceCampaigns)) {
            throw new Error(`Program ${program} not found`);
        }
        const programInterface = MerklInterfaceCampaigns[program];
        if (!(campaign in programInterface)) {
            throw new Error(`Campaign ${campaign} not found`);
        }
        const config = programInterface[campaign];
        if (apr && "apr" in config) {
            // override the apr if in query params
            config.apr = apr;
        }
        return {
            ...config,
            amount: amount,
            startTimestamp,
            endTimestamp,
            rewardToken,
            creator,
            forwarders: "forwarders" in config
                ? config.forwarders.map(forwarder => typeof forwarder === "string" ? forwarder : encodeForwarderData(forwarder))
                : [],
        };
    }
    /** building payload for a single campaign */
    static buildCampaignData(query) {
        const distributionChainId = query.distributionChainId ? query.distributionChainId : ChainId.MAINNET;
        const args = buildCampaignPayload(ProgramPayloadService.buildConfig(query), distributionChainId).args;
        return { args };
    }
    static async buildPayloadFromConfig(config, debug = false) {
        const campaignType = config.campaignType;
        const rewardToken = config.rewardToken;
        class CampaignConfig extends CampaignTypeConfigResourceMapping[campaignType] {
        }
        const parsedConfig = CampaignConfig.hydrate(config, {
            strategy: "exposeAll",
            excludeExtraneousValues: true,
        });
        parsedConfig.hooks = config.hooks?.map(hook => hook) ?? [];
        const nonEncodedConfig = { ...parsedConfig };
        if ("forwarders" in parsedConfig) {
            parsedConfig.forwarders = config?.forwarders
                ? config.forwarders.map(forwarder => typeof forwarder === "string" ? forwarder : encodeForwarderData(forwarder))
                : [];
        }
        const distributionChainId = config.distributionChainId ? config.distributionChainId : ChainId.MAINNET;
        const registryInitialized = registry(distributionChainId);
        const distributionCreator = registryInitialized?.Merkl?.DistributionCreator ?? NULL_ADDRESS;
        // Small hack to avoid the need to parse the config again
        const args = buildCampaignPayload(parsedConfig, distributionChainId).args;
        const safePayload = ProgramPayloadService.initiateSafePayload(distributionChainId, distributionCreator, rewardToken);
        const tokenAmount = BigInt(args?.amount.toString());
        const numberOfHours = BigInt(args?.duration.toString()) / 3600n;
        if (!(await ProgramPayloadService.checkMinimumAmount(rewardToken, tokenAmount, numberOfHours, distributionChainId))) {
            throw new Error("Amount is less than minimum");
        }
        const transactions = await ProgramPayloadService.createSafePayloadForCampaign(args, distributionChainId, rewardToken, distributionCreator ?? NULL_ADDRESS);
        safePayload.transactions.push(...transactions);
        if (debug) {
            return { safePayload, nonEncodedConfig };
        }
        return safePayload;
    }
    static async checkMinimumAmount(rewardToken, tokenAmount, numberOfHours, distributionChainId) {
        const minimumAmountPerHour = await ProgramPayloadService.getMinimumAmount(rewardToken, distributionChainId);
        if (!minimumAmountPerHour) {
            throw new Error("Token not found");
        }
        return tokenAmount / numberOfHours >= BigInt(minimumAmountPerHour);
    }
    static async getMinimumAmount(rewardToken, distributionChainId) {
        const tokenList = await TokenService.getValidRewardTokens(distributionChainId);
        const minimumAmountPerHour = tokenList.find(token => token.address.toLowerCase() === rewardToken.toLowerCase())?.minimumAmountPerHour;
        if (!minimumAmountPerHour) {
            throw new Error("Token not found");
        }
        return BigInt(minimumAmountPerHour);
    }
    static async createSafePayloadForCampaign(args, distributionChainId, rewardToken, distributionCreator, withApproval = true) {
        const safePayload = _.cloneDeep(safeTemplate);
        safePayload.chainId = distributionChainId.toString();
        safePayload.createdAt = Math.floor(Date.now() / 1000);
        safePayload.transactions[0].to = rewardToken;
        safePayload.transactions[0].contractInputsValues = {
            amount: args?.amount.toString(),
            spender: distributionCreator ? distributionCreator : NULL_ADDRESS,
        };
        safePayload.transactions[2].to = distributionCreator ? distributionCreator : NULL_ADDRESS;
        safePayload.transactions[2].contractInputsValues = {
            newCampaign: JSON.stringify([
                NULL_ROOT,
                NULL_ADDRESS,
                args?.rewardToken,
                args?.amount,
                args?.campaignType,
                args?.startTimestamp,
                args?.duration,
                args?.campaignData,
            ]),
        };
        if (withApproval) {
            return [safePayload.transactions[0], safePayload.transactions[2]];
        }
        return [safePayload.transactions[2]];
    }
    static initiateSafePayload(distributionChainId, distributionCreator, rewardToken, approvalAmount = "0") {
        const safePayload = _.cloneDeep(safeTemplate);
        safePayload.chainId = distributionChainId.toString();
        safePayload.createdAt = Math.floor(Date.now() / 1000);
        safePayload.transactions[1].to = distributionCreator;
        if (approvalAmount !== "0") {
            safePayload.transactions[0].to = rewardToken;
            safePayload.transactions[0].contractInputsValues = {
                amount: approvalAmount,
                spender: distributionCreator,
            };
            safePayload.transactions = [safePayload.transactions[1], safePayload.transactions[0]];
        }
        else
            safePayload.transactions = [safePayload.transactions[1]];
        const wrapperContract = "0x8A5A5DE9db5770123Ff2145F59e9F20047f0A8EC";
        if (rewardToken === wrapperContract && approvalAmount !== "0") {
            const secondarySafePayload = _.cloneDeep(safeTemplate);
            const underlying = "0x282A69142bac47855C3fbE1693FcC4bA3B4d5Ed6";
            secondarySafePayload.transactions[0].to = underlying;
            secondarySafePayload.transactions[0].contractInputsValues = {
                amount: approvalAmount,
                spender: wrapperContract,
            };
            safePayload.transactions.push(secondarySafePayload.transactions[0]);
        }
        return safePayload;
    }
    static async buildPayload(query, initialCampaignPayload = null, totalAmount = "0") {
        const withApproval = Boolean(totalAmount === "0");
        const rewardToken = query.rewardToken;
        const distributionChainId = query.distributionChainId ? query.distributionChainId : ChainId.MAINNET;
        const registryInitialized = registry(distributionChainId);
        const distributionCreator = registryInitialized?.Merkl?.DistributionCreator ?? NULL_ADDRESS;
        async function generatePayloadFile(query, withApproval = true) {
            const args = buildCampaignPayload(ProgramPayloadService.buildConfig(query), distributionChainId).args;
            const safePayload = await ProgramPayloadService.createSafePayloadForCampaign(args, distributionChainId, rewardToken, distributionCreator, withApproval);
            return safePayload;
        }
        const campaignPayloads = initialCampaignPayload === null
            ? ProgramPayloadService.initiateSafePayload(distributionChainId, distributionCreator, rewardToken, totalAmount)
            : initialCampaignPayload;
        const transactions = await generatePayloadFile(query, withApproval);
        campaignPayloads.transactions.push(...transactions);
        return campaignPayloads;
    }
    static async buildProgramPayload(query) {
        let campaignPayloads = null;
        query.amount = query.amount ? query.amount : "0";
        for (const campaign of Object.keys(MerklInterfaceCampaigns[query.program])) {
            const queryCampaign = {
                ...query,
                campaign,
                amount: query.amount,
            };
            campaignPayloads = await ProgramPayloadService.buildPayload(queryCampaign, campaignPayloads);
        }
        return campaignPayloads;
    }
    static async buildProgramPayloadWithAmounts(query, body) {
        let campaignPayloads = null;
        const totalAmount = Object.values(body).reduce((sum, amount) => sum + BigInt(amount), 0n);
        const minimumAmountPerHour = await ProgramPayloadService.getMinimumAmount(query.rewardToken, query.distributionChainId);
        const numberOfHours = (BigInt(query.endTimestamp) - BigInt(query.startTimestamp)) / 3600n;
        if (numberOfHours < 1n) {
            throw new Error("Duration is less than 1 hour");
        }
        if (!minimumAmountPerHour) {
            throw new Error("Token not found");
        }
        for (const [campaign, amount] of Object.entries(body)) {
            if (Object.keys(MerklInterfaceCampaigns[query.program]).includes(campaign)) {
                const queryCampaign = { ...query, campaign, amount: amount };
                if (BigInt(amount) / numberOfHours < BigInt(minimumAmountPerHour))
                    throw new Error("Amount is less than minimum");
                campaignPayloads = await ProgramPayloadService.buildPayload(queryCampaign, campaignPayloads, totalAmount.toString());
            }
            else {
                throw new Error(`Campaign ${campaign} not found`);
            }
        }
        return campaignPayloads;
    }
    static async buildConfigFromCampaignData(body) {
        const base = {
            campaignId: "0xdefaultId",
            creator: "Oxcreator",
            rewardToken: body.rewardToken,
            amount: body.amount,
            campaignType: body.campaignType,
            startTimestamp: body.startTimestamp,
            duration: body.duration,
            campaignData: body.campaignData,
        };
        try {
            console.log("Parsing campaign data");
            const res = await parseCampaign(body.chainId, base, 0);
            if (res.success) {
                return res;
            }
            throw res.message;
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }
}
