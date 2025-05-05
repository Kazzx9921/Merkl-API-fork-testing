import { MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT } from "@/constants";
import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { Campaign, withTimeout } from "@sdk";
import { AjnaPositionFetcher } from "./implementations/AjnaPositionFetcher";
import { BadgerPositionFetcher } from "./implementations/BadgerPositionFetcher";
import { ClammPositionFetcher } from "./implementations/ClammPositionFetcher";
import { DolomitePositionFetcher } from "./implementations/DolomitePositionFetcher";
import { ERC20PositionFetcher } from "./implementations/ERC20PositionFetcher";
import { EulerPositionFetcher } from "./implementations/EulerPositionFetcher";
export class LiquidityService {
    static #fetchers = {
        [Campaign.ERC20]: new ERC20PositionFetcher(),
        [Campaign.EULER]: new EulerPositionFetcher(),
        [Campaign.AJNA]: new AjnaPositionFetcher(),
        [Campaign.BADGER]: new BadgerPositionFetcher(),
        [Campaign.CLAMM]: new ClammPositionFetcher(),
        [Campaign.DOLOMITE]: new DolomitePositionFetcher(),
    };
    static async fetchPositions(query) {
        const opportunities = await OpportunityService.findLiveWithCampaigns(query.chainId, 1);
        const promises = [];
        for (const campaignType of Object.keys(Campaign)) {
            const fetcher = LiquidityService.#fetchers[Number.parseInt(campaignType)];
            if (fetcher) {
                promises.push(withTimeout(fetcher.fetchPositions(query.chainId, query.address, opportunities.filter(o => !!o)), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
            }
        }
        const settledPromises = await Promise.allSettled(promises);
        for (const errors of settledPromises.filter(p => p.status === "rejected")) {
            console.error(errors.reason);
        }
        return settledPromises.filter(p => p.status === "fulfilled").flatMap(p => p.value);
    }
}
