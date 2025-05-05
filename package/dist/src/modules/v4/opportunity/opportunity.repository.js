import { AprService } from "@/modules/v4/apr/apr.service";
import { ProtocolService } from "@/modules/v4/protocol/protocol.service";
import { RewardService } from "@/modules/v4/reward/reward.service";
import { TvlService } from "@/modules/v4/tvl/tvl.service";
import { log } from "@/utils/logger";
import { apiDbClient } from "@db";
import { Status } from "@db/api";
import { DAY, bigIntToNumber } from "@sdk";
import moment from "moment";
export class OpportunityRepository {
    // ─── Utils ───────────────────────────────────────────────────────────
    static #transformQueryToPrismaFilters(query) {
        const { page: _page, items: _items, ...filters } = query;
        //TODO: abstract away query to not be strictly equal to controller
        const now = moment().unix();
        const chainIds = query.chainId?.split(",").map(n => Number.parseInt(n));
        const actions = query.action?.split(",");
        const status = query.status?.split(",");
        const tokens = query.tokens?.split(",");
        const search = query.search?.split(" ");
        const rewardTokenSymbol = query.rewardTokenSymbol;
        const types = query.type?.split(",");
        const protocols = query.mainProtocolId?.split(",");
        const identifiers = query.identifier?.split(",");
        const sort = (query.sort === "rewards" ? "dailyRewards" : query.sort) ?? "dailyRewards";
        const order = query.order ?? "desc";
        const test = query.test ?? false;
        const point = query.point ?? false;
        const creatorAddress = query.creatorAddress ?? null;
        const identifier = query.identifier ?? null;
        const orderBy = { [sort]: order };
        return {
            orderBy,
            where: {
                AND: [
                    {
                        tags: !filters.tags ? undefined : { has: filters.tags },
                        type: !filters.type ? undefined : { in: types },
                        tvl: filters.minimumTvl ? { gte: filters.minimumTvl } : undefined,
                        chainId: !chainIds ? undefined : { in: chainIds },
                        name: !filters.name ? undefined : { contains: filters.name, mode: "insensitive" },
                        action: !actions ? undefined : { in: actions },
                        status: !status ? undefined : { in: status },
                        mainProtocolId: !protocols ? undefined : { in: protocols, mode: "insensitive" },
                        identifier: !identifier ? undefined : { in: identifiers, mode: "insensitive" },
                        Campaigns: test && !creatorAddress && !rewardTokenSymbol && !filters.campaignId
                            ? undefined
                            : {
                                some: {
                                    campaignId: filters.campaignId ? filters.campaignId : undefined,
                                    RewardToken: test && !rewardTokenSymbol
                                        ? undefined
                                        : {
                                            isTest: !test ? false : undefined,
                                            isPoint: point,
                                            symbol: rewardTokenSymbol
                                                ? { equals: rewardTokenSymbol, mode: "insensitive" }
                                                : undefined,
                                        },
                                    creatorAddress: creatorAddress ? creatorAddress : undefined,
                                },
                            },
                        Tokens: tokens ? { some: { symbol: { in: tokens } } } : undefined,
                    },
                    !search
                        ? {}
                        : {
                            AND: search?.map(keyword => ({
                                OR: [
                                    //IDs
                                    { id: { contains: keyword, mode: "insensitive" } },
                                    { name: { contains: keyword, mode: "insensitive" } },
                                    { identifier: { contains: keyword, mode: "insensitive" } },
                                    { explorerAddress: { contains: keyword, mode: "insensitive" } },
                                    { Campaigns: { some: { campaignId: { contains: keyword, mode: "insensitive" } } } },
                                    { Campaigns: { some: { id: { contains: keyword, mode: "insensitive" } } } },
                                    //ERC20,CLAMM,...
                                    { type: { contains: keyword, mode: "insensitive" } },
                                    //Protocol
                                    { MainProtocol: { name: { contains: keyword, mode: "insensitive" } } },
                                    { mainProtocolId: { contains: keyword, mode: "insensitive" } },
                                    //Token
                                    { Tokens: { some: { name: { contains: keyword, mode: "insensitive" } } } },
                                    { Tokens: { some: { symbol: { contains: keyword, mode: "insensitive" } } } },
                                    { Tokens: { some: { address: { contains: keyword, mode: "insensitive" } } } },
                                    //Match reward tokens only if campaign is live
                                    {
                                        Campaigns: {
                                            some: {
                                                endTimestamp: { gte: now },
                                                RewardToken: {
                                                    OR: [
                                                        {
                                                            symbol: { contains: keyword, mode: "insensitive" },
                                                        },
                                                        {
                                                            address: { contains: keyword, mode: "insensitive" },
                                                        },
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                    { Chain: { name: { contains: keyword, mode: "insensitive" } } },
                                ],
                            })),
                        },
                ],
            },
        };
    }
    static #getRecordInclusion(withTest = true, withPoints = true) {
        return {
            AprRecords: {
                take: 1,
                orderBy: { timestamp: "desc" },
                include: { AprBreakdown: { select: { identifier: true, type: true, value: true } } },
            },
            TvlRecords: {
                take: 1,
                orderBy: { timestamp: "desc" },
                include: { TvlBreakdown: { select: { identifier: true, type: true, value: true } } },
            },
            DailyRewardsRecords: {
                take: 1,
                orderBy: { timestamp: "desc" },
                include: {
                    DailyRewardsBreakdown: {
                        where: { Campaign: { RewardToken: withTest ? undefined : { isTest: false, isPoint: withPoints } } },
                        include: {
                            Campaign: {
                                select: {
                                    startTimestamp: true,
                                    endTimestamp: true,
                                    amount: true,
                                    RewardToken: true,
                                    CampaignStatus: true,
                                    distributionType: true,
                                    campaignId: true,
                                },
                            },
                        },
                    },
                },
            },
        };
    }
    static #getCampaignInclusion(withTest = true, withPoints = true) {
        return {
            orderBy: { endTimestamp: "desc" },
            where: withTest ? undefined : { RewardToken: { isTest: false, isPoint: withPoints } },
            include: {
                RewardToken: true,
                ComputeChain: true,
                DistributionChain: { include: { Explorer: true } },
                Creator: true,
                CampaignStatus: true, // [][0]
            },
        };
    }
    // ─── Create ──────────────────────────────────────────────────────────
    static async create(newOpp, upsert = false) {
        const previousOpportunity = await apiDbClient.opportunity.findUnique({
            where: { id: newOpp.id },
            include: { Tokens: true, Protocols: true },
        });
        if (!!previousOpportunity && !upsert)
            return previousOpportunity;
        if (!!newOpp.mainProtocol) {
            let mainProtocol = await apiDbClient.protocol.findUnique({ where: { id: newOpp.mainProtocol } });
            if (!mainProtocol)
                mainProtocol = await ProtocolService.create({
                    id: newOpp.mainProtocol,
                    name: newOpp.mainProtocol,
                    tags: [newOpp.action],
                    url: "",
                    icon: "",
                    description: "",
                });
            if (!previousOpportunity?.manualOverrides.includes("action")) {
                // Override action with the protocol's action if it differs
                if (mainProtocol.tags.includes("AMM") || mainProtocol.tags.includes("DEX"))
                    newOpp.action = "POOL";
                if (mainProtocol.tags.includes("BORROWING"))
                    newOpp.action = "BORROW";
                if (mainProtocol.tags.includes("LENDING") && !!newOpp.name && newOpp.name.includes("Supply"))
                    newOpp.action = "LEND";
            }
        }
        // Safety check on urls:
        if (!previousOpportunity?.manualOverrides.includes("depositUrl") &&
            !!newOpp.depositUrl &&
            !newOpp.depositUrl.includes("http")) {
            newOpp.depositUrl = undefined;
            log.warn(`deposit URL for opportunity ${newOpp.id} is not a valid URL`);
        }
        const toDisconnect = { mainProtocol: "", protocols: [], tokens: [] };
        if (!!previousOpportunity) {
            if (previousOpportunity.mainProtocolId !== newOpp.mainProtocol)
                toDisconnect.mainProtocol = previousOpportunity.mainProtocolId ?? "";
            for (const protocol of previousOpportunity.Protocols)
                if (!newOpp.protocols || !newOpp.protocols.includes(protocol.id))
                    toDisconnect.protocols.push(protocol.id);
            for (const token of previousOpportunity.Tokens)
                if (!newOpp.tokens.some(newToken => newToken.chainId === token.chainId && newToken.address === token.address))
                    toDisconnect.tokens.push({ chainId: token.chainId, address: token.address });
        }
        const data = {
            id: newOpp.id,
            action: newOpp.action ?? "HOLD",
            identifier: newOpp.identifier,
            name: !previousOpportunity?.manualOverrides.includes("name") ? newOpp.name : previousOpportunity.name,
            status: newOpp.status,
            type: newOpp.type,
            tags: newOpp.tags,
            description: newOpp.description,
            howToSteps: newOpp.howToSteps,
            depositUrl: !previousOpportunity?.manualOverrides.includes("depositUrl")
                ? newOpp.depositUrl
                : previousOpportunity.depositUrl,
            explorerAddress: !previousOpportunity?.manualOverrides.includes("explorerAddress")
                ? newOpp.explorerAddress
                : previousOpportunity.explorerAddress,
            Chain: { connect: { id: newOpp.chainId } },
            MainProtocol: !!newOpp.mainProtocol ? { connect: { id: newOpp.mainProtocol } } : undefined,
            Protocols: {
                connect: (newOpp.protocols ?? []).map((protocol) => {
                    return { id: protocol };
                }),
            },
            Tokens: {
                connect: newOpp.tokens.map((token) => {
                    return { chainId_address: { chainId: token.chainId, address: token.address } };
                }),
            },
        };
        const dataWithDisconnect = {
            id: newOpp.id,
            action: newOpp.action ?? "HOLD",
            identifier: newOpp.identifier,
            name: !previousOpportunity?.manualOverrides.includes("name") ? newOpp.name : undefined,
            status: newOpp.status,
            type: newOpp.type,
            tags: newOpp.tags,
            description: newOpp.description,
            howToSteps: newOpp.howToSteps,
            depositUrl: !previousOpportunity?.manualOverrides.includes("depositUrl") ? newOpp.depositUrl : undefined,
            explorerAddress: !previousOpportunity?.manualOverrides.includes("explorerAddress")
                ? newOpp.explorerAddress
                : undefined,
            Chain: { connect: { id: newOpp.chainId } },
            MainProtocol: !!newOpp.mainProtocol
                ? { connect: { id: newOpp.mainProtocol } }
                : !!previousOpportunity?.mainProtocolId
                    ? { disconnect: { id: previousOpportunity?.mainProtocolId } }
                    : undefined,
            Protocols: {
                connect: (newOpp.protocols ?? []).map((protocol) => {
                    return { id: protocol };
                }),
                disconnect: (toDisconnect.protocols ?? []).map((protocol) => {
                    return { id: protocol };
                }),
            },
            Tokens: {
                connect: newOpp.tokens.map((token) => {
                    return { chainId_address: { chainId: token.chainId, address: token.address } };
                }),
                disconnect: toDisconnect.tokens.map((token) => {
                    return { chainId_address: { chainId: token.chainId, address: token.address } };
                }),
            },
        };
        if (upsert)
            await apiDbClient.opportunity.upsert({
                where: { id: newOpp.id },
                create: data,
                update: dataWithDisconnect,
            });
        else
            await apiDbClient.opportunity.create({ data });
        return await OpportunityRepository.findUniqueOrThrow(newOpp.id, true, true);
    }
    // ─── Find ────────────────────────────────────────────────────────────
    static async findUnique(id) {
        return await apiDbClient.opportunity.findUnique({
            include: {
                ...OpportunityRepository.#getRecordInclusion(),
                Chain: true,
                Campaigns: { include: { RewardToken: true } },
                MainProtocol: true,
                Protocols: true,
                Tokens: true,
            },
            where: { id },
        });
    }
    // wrong return type if you include campaigns (RewardToken is missing from the return type)
    static async findUniqueOrThrow(id, withTest = true, withPoints = true, withCampaigns = false) {
        return await apiDbClient.opportunity.findUniqueOrThrow({
            include: {
                ...OpportunityRepository.#getRecordInclusion(withTest, withPoints),
                Campaigns: withCampaigns ? OpportunityRepository.#getCampaignInclusion(withTest, withPoints) : undefined,
                Chain: { include: { Explorer: true } },
                MainProtocol: true,
                Protocols: true,
                Tokens: { where: !withTest ? { isTest: false } : undefined },
            },
            where: { id },
        });
    }
    /**
     * Gets opportunities and campaigns for which filtered on campaigns
     * @param filters
     * @returns
     */
    static async findManyByCampaigns(where) {
        return await apiDbClient.opportunity.findMany({
            where: { Campaigns: { some: where } },
            include: {
                ...OpportunityRepository.#getRecordInclusion(),
                Campaigns: OpportunityRepository.#getCampaignInclusion(true),
                Chain: { include: { Explorer: true } },
                MainProtocol: true,
                Protocols: true,
                Tokens: true,
            },
        });
    }
    static async findMany(query) {
        // pagination by offset; might have to change to cursor based for performance
        const { page: _page, items: _items } = query;
        const page = _page ? _page : 0;
        const items = _items !== undefined ? _items : 20;
        const withTest = query.test ?? false;
        const withPoints = query.point ?? false;
        const withCampaigns = query.campaigns ?? false;
        const args = OpportunityRepository.#transformQueryToPrismaFilters(query);
        return await apiDbClient.opportunity.findMany({
            take: items === 0 ? undefined : items,
            skip: page * items,
            include: {
                ...OpportunityRepository.#getRecordInclusion(withTest, withPoints),
                Campaigns: withCampaigns ? OpportunityRepository.#getCampaignInclusion(withTest, withPoints) : undefined,
                MainProtocol: true,
                Chain: { include: { Explorer: true } },
                Protocols: true,
                Tokens: { where: !withTest ? { isTest: false } : undefined },
            },
            ...args,
        });
    }
    /**
     * @dev Live campaigns here can be:
     * 1. Opportunities with status LIVE
     * 2. Opportunities with non-test campaigns that have endTimestamp > now
     *
     * @dev Excludes test campaigns
     */
    static async findLiveWithCampaigns(chainId, take) {
        const now = moment().unix();
        return await apiDbClient.opportunity.findMany({
            include: {
                ...OpportunityRepository.#getRecordInclusion(),
                Campaigns: {
                    include: {
                        RewardToken: true,
                        ComputeChain: true,
                        DistributionChain: { include: { Explorer: true } },
                        CampaignStatus: true,
                        Creator: true,
                    },
                    take: take ? take : undefined,
                    orderBy: { endTimestamp: "desc" },
                    where: {
                        RewardToken: { isTest: false },
                    },
                },
                MainProtocol: true,
                Chain: { include: { Explorer: true } },
                Protocols: true,
                Tokens: true,
            },
            where: {
                Chain: { id: chainId },
                OR: [
                    { status: "LIVE" },
                    {
                        Campaigns: {
                            some: { RewardToken: { isTest: false }, startTimestamp: { lte: now }, endTimestamp: { gte: now } },
                        },
                    },
                ],
            },
        });
    }
    static async countMany(query) {
        const args = OpportunityRepository.#transformQueryToPrismaFilters(query);
        return await apiDbClient.opportunity.count(args);
    }
    // ─── Update ──────────────────────────────────────────────────────────
    /**
     * Updates Apr, Tvl and DailyRewards records
     * @param opportunityId
     * @param apr
     * @param tvl
     * @returns
     */
    static async updateDynamicData(opportunityId, apr, tvl, dailyRewards) {
        const startOfTheDay = Math.floor(moment().unix() / DAY) * DAY;
        const [aprRecord, tvlRecord, dailyRewardsRecord, opportunity] = await apiDbClient.$transaction([
            apiDbClient.aprRecord.create({
                data: {
                    id: AprService.hashId(opportunityId, apr.timestamp),
                    timestamp: apr.timestamp,
                    cumulated: apr.cumulated,
                    Opportunity: { connect: { id: opportunityId } },
                    AprBreakdown: { createMany: { data: apr.breakdowns } },
                },
            }),
            apiDbClient.tVLRecord.create({
                data: {
                    id: TvlService.hashId(opportunityId, tvl.timestamp),
                    timestamp: tvl.timestamp,
                    Opportunity: { connect: { id: opportunityId } },
                    total: tvl.total,
                    TvlBreakdown: { createMany: { data: tvl.breakdowns } },
                },
                include: { TvlBreakdown: true },
            }),
            apiDbClient.dailyRewardsRecord.create({
                data: {
                    id: RewardService.hashDailyRewardsRecordId(opportunityId, dailyRewards.timestamp),
                    timestamp: dailyRewards.timestamp,
                    Opportunity: { connect: { id: opportunityId } },
                    total: dailyRewards.total,
                    DailyRewardsBreakdown: {
                        createMany: {
                            data: dailyRewards.breakdowns.map(breakdown => ({
                                campaignId: breakdown.campaignId,
                                value: bigIntToNumber(breakdown.amount, breakdown.token.decimals),
                            })),
                        },
                    },
                },
                include: { DailyRewardsBreakdown: true },
            }),
            apiDbClient.opportunity.update({
                where: { id: opportunityId },
                data: { apr: apr.cumulated, tvl: tvl.total, dailyRewards: dailyRewards.total },
            }),
            apiDbClient.tVLRecord.deleteMany({
                where: {
                    Opportunity: { id: opportunityId },
                    timestamp: { lt: tvl.timestamp, gte: startOfTheDay },
                },
            }),
            apiDbClient.aprRecord.deleteMany({
                where: {
                    Opportunity: { id: opportunityId },
                    timestamp: { lt: apr.timestamp, gte: startOfTheDay },
                },
            }),
            apiDbClient.dailyRewardsRecord.deleteMany({
                where: {
                    Opportunity: { id: opportunityId },
                    timestamp: { lt: dailyRewards.timestamp, gte: startOfTheDay },
                },
            }),
        ]);
        return {
            aprRecord,
            tvlRecord,
            dailyRewardsRecord,
            opportunity,
        };
    }
    static async updateStatus(id, status) {
        if (status === Status.PAST)
            return await apiDbClient.opportunity.update({ where: { id }, data: { status, apr: 0, dailyRewards: 0 } });
        return await apiDbClient.opportunity.update({ where: { id }, data: { status } });
    }
    static async update(id, data) {
        return await apiDbClient.opportunity.update({ where: { id }, data });
    }
    static async updateMany(ids, data) {
        return await apiDbClient.opportunity.updateMany({ where: { id: { in: ids } }, data });
    }
    // ─── Aggregation ─────────────────────────────────────────────────────
    static async aggregateSum(field, query) {
        const args = OpportunityRepository.#transformQueryToPrismaFilters(query);
        const result = await apiDbClient.opportunity.aggregate({ _sum: { [field]: true }, ...args });
        return { sum: result._sum[field] ?? null };
    }
    static async aggregateMin(field, query) {
        const args = OpportunityRepository.#transformQueryToPrismaFilters(query);
        const result = await apiDbClient.opportunity.aggregate({ _min: { [field]: true }, ...args });
        return { min: result._min[field] ?? null };
    }
    static async aggregateMax(field, query) {
        const args = OpportunityRepository.#transformQueryToPrismaFilters(query);
        const result = await apiDbClient.opportunity.aggregate({ _max: { [field]: true }, ...args });
        return { max: result._max[field] ?? null };
    }
}
