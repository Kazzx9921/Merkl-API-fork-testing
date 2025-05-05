import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { ChainService } from "@/modules/v4/chain/chain.service";
import { RewardService } from "@/modules/v4/reward/reward.service";
import { log } from "@/utils/logger";
import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const MONTHLY_REWARDS_BY_PROTOCOLS_DATABASE_ID = "1cacfed0d48c80c288acc906291a91c8";
const MONTHLY_REWARDS_BY_CHAINS_DATABASE_ID = "1cacfed0d48c805bb300fa8ae5633a2d";
const MONTHLY_REWARDS_BY_TYPES_DATABASE_ID = "1cbcfed0d48c80d7bdedf45c133cbf63";
const DAILY_REWARDS_BY_PROTOCOLS_DATABASE_ID = "1d2cfed0d48c80609835d8f54c891079";
const DAILY_REWARDS_BY_CHAINS_DATABASE_ID = "1d2cfed0d48c80689f09ea40757272f4";
const DAILY_REWARDS_BY_TYPES_DATABASE_ID = "1d2cfed0d48c801cb856db7083a9081a";
const MONTHLY_CAMPAIGNS_BY_CHAINS_DATABASE_ID = "1cbcfed0d48c8001b1ccf5c0900669ea";
const MONTHLY_CAMPAIGNS_BY_PROTOCOLS_DATABASE_ID = "1cecfed0d48c8066b016f580e54a6b33";
const MONTHLY_CAMPAIGNS_BY_TYPES_DATABASE_ID = "1cecfed0d48c80dcb6bccf3ac3889b5b";
const DAILY_CAMPAIGNS_BY_CHAINS_DATABASE_ID = "1d2cfed0d48c800fbfbee7dcf9e1e817";
const DAILY_CAMPAIGNS_BY_PROTOCOLS_DATABASE_ID = "1d2cfed0d48c802c9cccdd0cbe43e37e";
const DAILY_CAMPAIGNS_BY_TYPES_DATABASE_ID = "1d2cfed0d48c809dbb34e5a4605b8868";
const getPagesOfTheMonth = async (databaseId) => {
    const now = new Date();
    const firstDayOfMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, // Day 1 of the month
    0, // 0 hours
    0, // 0 minutes
    0, // 0 seconds
    0 // 0 milliseconds
    ));
    const currentMonthPages = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "From",
            date: {
                equals: firstDayOfMonth.toISOString().split("T")[0],
            },
        },
    });
    return currentMonthPages.results;
};
const getPagesOfTheDay = async (databaseId) => {
    const now = new Date();
    const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0));
    const pagesOfTheDay = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "Date",
            date: {
                equals: today.toISOString().split("T")[0],
            },
        },
    });
    return pagesOfTheDay.results;
};
const main = async () => {
    const chains = (await ChainService.findMany({})).reduce((prev, curr) => {
        return Object.assign(prev, { [curr.id]: curr.name });
    }, {});
    const now = new Date();
    const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0)).getTime() / 1000;
    const firstDayOfMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0, 0)).getTime() / 1000;
    const promises = [
        // ─── Monthly Rewards ─────────────────────────────────────────────────────────
        // ─── By Chains ───────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, RewardService.getTotalDistributedByChain, firstDayOfMonth).then(async (result) => {
            const currentMonthPages = await getPagesOfTheMonth(MONTHLY_REWARDS_BY_CHAINS_DATABASE_ID);
            const promises = [];
            for (const chain of Object.keys(result)) {
                const page = currentMonthPages.find(page => "properties" in page &&
                    page.properties.Chains.title[0].text.content ===
                        chains[chain]);
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Rewards: {
                                type: "number",
                                number: result[chain],
                            },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: MONTHLY_REWARDS_BY_CHAINS_DATABASE_ID },
                        properties: {
                            Chains: {
                                type: "title",
                                title: [{ type: "text", text: { content: chains[chain] } }],
                            },
                            Rewards: { type: "number", number: result[chain] },
                            From: { type: "date", date: { start: new Date(firstDayOfMonth * 1000).toISOString().split("T")[0] } },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            await Promise.all(promises);
            log.info("Total Distributed by Chains data pushed to Notion successfully");
        }),
        // ─── By Protocols ────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, RewardService.getTotalDistributedByProtocol, firstDayOfMonth).then(async (result) => {
            const currentMonthPages = await getPagesOfTheMonth(MONTHLY_REWARDS_BY_PROTOCOLS_DATABASE_ID);
            const promises = [];
            for (const protocol of Object.keys(result)) {
                const page = currentMonthPages.find(page => "properties" in page &&
                    page.properties.Protocols.title[0].text.content ===
                        protocol);
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Rewards: {
                                type: "number",
                                number: result[page.properties.Protocols.title[0].text.content],
                            },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: MONTHLY_REWARDS_BY_PROTOCOLS_DATABASE_ID },
                        properties: {
                            Protocols: { type: "title", title: [{ type: "text", text: { content: protocol } }] },
                            Rewards: { type: "number", number: result[protocol] },
                            From: {
                                type: "date",
                                date: { start: new Date(firstDayOfMonth * 1000).toISOString().split("T")[0] },
                            },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            await Promise.all(promises);
            log.info("Total Distributed by Protocols data pushed to Notion successfully");
        }),
        // ─── By Types ────────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, RewardService.getTotalDistributedByType, firstDayOfMonth).then(async (result) => {
            const currentMonthPages = await getPagesOfTheMonth(MONTHLY_REWARDS_BY_TYPES_DATABASE_ID);
            const promises = [];
            // ─── Check If Page Already Exists ────────────────────
            for (const type of Object.keys(result)) {
                const page = currentMonthPages.find(page => "properties" in page &&
                    page.properties.Types.title[0].text.content === type);
                // ─── If Page Exists, Update It ───────────────
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Rewards: {
                                type: "number",
                                number: result[type],
                            },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                    // ─── Else, Create It ─────────────────
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: MONTHLY_REWARDS_BY_TYPES_DATABASE_ID },
                        properties: {
                            Types: {
                                type: "title",
                                title: [{ type: "text", text: { content: type } }],
                            },
                            Rewards: { type: "number", number: result[type] },
                            From: { type: "date", date: { start: new Date(firstDayOfMonth * 1000).toISOString().split("T")[0] } },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            // ─── Run All The Promises In Parallel ────────────────
            await Promise.all(promises);
            log.info("Total Distributed by Types data pushed to Notion successfully");
        }),
        // ─── Daily Rewards ───────────────────────────────────────────────────────────
        // ─── By Chains ───────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, RewardService.getTotalDistributedByChain, today).then(async (result) => {
            const pagesOfTheDay = await getPagesOfTheDay(DAILY_REWARDS_BY_CHAINS_DATABASE_ID);
            const promises = [];
            for (const chain of Object.keys(result)) {
                const page = pagesOfTheDay.find(page => "properties" in page &&
                    page.properties.Chains.title[0].text.content ===
                        chains[chain]);
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Rewards: {
                                type: "number",
                                number: result[chain],
                            },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: DAILY_REWARDS_BY_CHAINS_DATABASE_ID },
                        properties: {
                            Chains: {
                                type: "title",
                                title: [{ type: "text", text: { content: chains[chain] } }],
                            },
                            Rewards: { type: "number", number: result[chain] },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            await Promise.all(promises);
            log.info("Total Distributed by Chains data pushed to Notion successfully");
        }),
        // ─── By Protocols ────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, RewardService.getTotalDistributedByProtocol, today).then(async (result) => {
            const pagesOfTheDay = await getPagesOfTheDay(DAILY_REWARDS_BY_PROTOCOLS_DATABASE_ID);
            const promises = [];
            for (const protocol of Object.keys(result)) {
                const page = pagesOfTheDay.find(page => "properties" in page &&
                    page.properties.Protocols.title[0].text.content === protocol);
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Rewards: {
                                type: "number",
                                number: result[page.properties.Protocols.title[0].text.content],
                            },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: DAILY_REWARDS_BY_PROTOCOLS_DATABASE_ID },
                        properties: {
                            Protocols: { type: "title", title: [{ type: "text", text: { content: protocol } }] },
                            Rewards: { type: "number", number: result[protocol] },
                            Date: {
                                type: "date",
                                date: { start: now.toISOString().split("T")[0] },
                            },
                        },
                    }));
                }
            }
            await Promise.all(promises);
            log.info("Total Distributed by Protocols data pushed to Notion successfully");
        }),
        // ─── By Types ────────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, RewardService.getTotalDistributedByType, today).then(async (result) => {
            const currentMonthPages = await getPagesOfTheDay(DAILY_REWARDS_BY_TYPES_DATABASE_ID);
            const promises = [];
            // ─── Check If Page Already Exists ────────────────────
            for (const type of Object.keys(result)) {
                const page = currentMonthPages.find(page => "properties" in page &&
                    page.properties.Types.title[0].text.content === type);
                // ─── If Page Exists, Update It ───────────────
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Rewards: {
                                type: "number",
                                number: result[type],
                            },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                    // ─── Else, Create It ─────────────────
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: DAILY_REWARDS_BY_TYPES_DATABASE_ID },
                        properties: {
                            Types: {
                                type: "title",
                                title: [{ type: "text", text: { content: type } }],
                            },
                            Rewards: { type: "number", number: result[type] },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            // ─── Run All The Promises In Parallel ────────────────
            await Promise.all(promises);
            log.info("Total Distributed by Types data pushed to Notion successfully");
        }),
        // ─── Monthly New Campaigns ───────────────────────────────────────────────────
        // ─── By Chains ───────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, CampaignService.countByChains, {
            createdAfter: new Date(firstDayOfMonth * 1000),
        }).then(async (result) => {
            const currentMonthPages = await getPagesOfTheMonth(MONTHLY_CAMPAIGNS_BY_CHAINS_DATABASE_ID);
            const promises = [];
            for (const chain of Object.keys(result)) {
                const page = currentMonthPages.find(page => "properties" in page &&
                    page.properties.Chains.title[0].text.content ===
                        chains[chain]);
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Campaigns: {
                                type: "number",
                                number: result[Object.keys(chains).find(key => page.properties.Chains.title[0].text.content === chains[key])],
                            },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: MONTHLY_CAMPAIGNS_BY_CHAINS_DATABASE_ID },
                        properties: {
                            Chains: {
                                type: "title",
                                title: [{ type: "text", text: { content: chains[chain] } }],
                            },
                            Campaigns: { type: "number", number: result[chain] },
                            From: {
                                type: "date",
                                date: { start: new Date(firstDayOfMonth * 1000).toISOString().split("T")[0] },
                            },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            await Promise.all(promises);
            log.info("Campaigns by Chains data pushed to Notion successfully");
        }),
        // ─── By Protocols ────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, CampaignService.countByProtocols, {
            createdAfter: new Date(firstDayOfMonth * 1000),
        }).then(async (result) => {
            const currentMonthPages = await getPagesOfTheMonth(MONTHLY_CAMPAIGNS_BY_PROTOCOLS_DATABASE_ID);
            const promises = [];
            for (const protocol of Object.keys(result)) {
                const page = currentMonthPages.find(page => "properties" in page &&
                    page.properties.Protocols.title[0].text.content === protocol);
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Campaigns: {
                                type: "number",
                                number: result[page.properties.Protocols.title[0].text.content],
                            },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: MONTHLY_CAMPAIGNS_BY_PROTOCOLS_DATABASE_ID },
                        properties: {
                            Protocols: {
                                type: "title",
                                title: [{ type: "text", text: { content: protocol } }],
                            },
                            Campaigns: { type: "number", number: result[protocol] },
                            From: { type: "date", date: { start: new Date(firstDayOfMonth * 1000).toISOString().split("T")[0] } },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            await Promise.all(promises);
            log.info("Campaigns by Protocols data pushed to Notion successfully");
        }),
        // ─── By Types ────────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, CampaignService.countByTypes, {
            createdAfter: new Date(firstDayOfMonth * 1000),
        }).then(async (result) => {
            const currentMonthPages = await getPagesOfTheMonth(MONTHLY_CAMPAIGNS_BY_TYPES_DATABASE_ID);
            const promises = [];
            for (const type of Object.keys(result)) {
                const page = currentMonthPages.find(page => "properties" in page &&
                    page.properties.Types.title[0].text.content === type);
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Campaigns: {
                                type: "number",
                                number: result[page.properties.Types.title[0].text.content],
                            },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: MONTHLY_CAMPAIGNS_BY_TYPES_DATABASE_ID },
                        properties: {
                            Types: {
                                type: "title",
                                title: [{ type: "text", text: { content: type } }],
                            },
                            Campaigns: { type: "number", number: result[type] },
                            From: {
                                type: "date",
                                date: { start: new Date(firstDayOfMonth * 1000).toISOString().split("T")[0] },
                            },
                            To: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            await Promise.all(promises);
            log.info("Campaigns by Types data pushed to Notion successfully");
        }),
        // ─── Daily New Campaigns ─────────────────────────────────────────────────────
        // ─── By Chains ───────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, CampaignService.countByChains, {
            createdAfter: new Date(today * 1000),
        }).then(async (result) => {
            const currentMonthPages = await getPagesOfTheDay(DAILY_CAMPAIGNS_BY_CHAINS_DATABASE_ID);
            const promises = [];
            for (const chain of Object.keys(result)) {
                const page = currentMonthPages.find(page => "properties" in page &&
                    page.properties.Chains.title[0].text.content ===
                        chains[chain]);
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Campaigns: {
                                type: "number",
                                number: result[Object.keys(chains).find(key => page.properties.Chains.title[0].text.content === chains[key])],
                            },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: DAILY_CAMPAIGNS_BY_CHAINS_DATABASE_ID },
                        properties: {
                            Chains: {
                                type: "title",
                                title: [{ type: "text", text: { content: chains[chain] } }],
                            },
                            Campaigns: { type: "number", number: result[chain] },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            await Promise.all(promises);
            log.info("Campaigns by Chains data pushed to Notion successfully");
        }),
        // ─── By Protocols ────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, CampaignService.countByProtocols, {
            createdAfter: new Date(today * 1000),
        }).then(async (result) => {
            const currentMonthPages = await getPagesOfTheDay(DAILY_CAMPAIGNS_BY_PROTOCOLS_DATABASE_ID);
            const promises = [];
            for (const protocol of Object.keys(result)) {
                const page = currentMonthPages.find(page => "properties" in page &&
                    page.properties.Protocols.title[0].text.content === protocol);
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Campaigns: {
                                type: "number",
                                number: result[page.properties.Protocols.title[0].text.content],
                            },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: DAILY_CAMPAIGNS_BY_PROTOCOLS_DATABASE_ID },
                        properties: {
                            Protocols: {
                                type: "title",
                                title: [{ type: "text", text: { content: protocol } }],
                            },
                            Campaigns: { type: "number", number: result[protocol] },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            await Promise.all(promises);
            log.info("Campaigns by Protocols data pushed to Notion successfully");
        }),
        // ─── By Types ────────────────────────────────────────────────
        CacheService.set(TTLPresets.DAY_1, CampaignService.countByTypes, {
            createdAfter: new Date(today * 1000),
        }).then(async (result) => {
            const currentMonthPages = await getPagesOfTheDay(DAILY_CAMPAIGNS_BY_TYPES_DATABASE_ID);
            const promises = [];
            for (const type of Object.keys(result)) {
                const page = currentMonthPages.find(page => "properties" in page &&
                    page.properties.Types.title[0].text.content === type);
                if (page) {
                    promises.push(notion.pages.update({
                        page_id: page.id,
                        properties: {
                            Campaigns: {
                                type: "number",
                                number: result[page.properties.Types.title[0].text.content],
                            },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
                else {
                    promises.push(notion.pages.create({
                        parent: { type: "database_id", database_id: DAILY_CAMPAIGNS_BY_TYPES_DATABASE_ID },
                        properties: {
                            Types: {
                                type: "title",
                                title: [{ type: "text", text: { content: type } }],
                            },
                            Campaigns: { type: "number", number: result[type] },
                            Date: { type: "date", date: { start: now.toISOString().split("T")[0] } },
                        },
                    }));
                }
            }
            await Promise.all(promises);
            log.info("Campaigns by Types data pushed to Notion successfully");
        }),
    ];
    return await Promise.allSettled(promises);
};
main()
    .then(results => {
    const rejected = results.find(result => result.status === "rejected");
    if (rejected)
        throw new Error(`One or more promises were rejected: ${rejected.reason}`);
    process.exit(0);
})
    .catch(err => {
    console.error(err);
    process.exit(1);
});
