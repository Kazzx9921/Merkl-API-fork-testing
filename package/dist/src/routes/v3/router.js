import Elysia from "elysia";
import app from "./app";
import blacklist from "./blacklist";
import campaignClaims from "./campaignClaims";
import campaignUnclaimed from "./campaignUnclaimed";
import campaigns from "./campaigns";
import campaignsForMainParameter from "./campaignsForMainParameter";
import campaignsRewardsReport from "./campaignsRewardsReport";
import claims from "./claims";
import compoundV2 from "./compoundV2";
import createCampaign from "./createCampaign";
import dolomite from "./dolomite";
import euler from "./euler";
import fetch from "./fetch";
import health from "./health";
import lostyield from "./lostyield";
import merkl from "./merkl";
import morphoMarkets from "./morphoMarkets";
import morphoVaults from "./morphoVaults";
import multiChainPositions from "./multiChainPositions";
import opportunity from "./opportunity";
import overview from "./overview";
import parse from "./parse";
import payload from "./payload";
import poolInfo from "./poolInfo";
import positions from "./positions";
import radiant from "./radiant";
import recipients from "./recipients";
import rewards from "./rewards";
import rewardsReport from "./rewardsReport";
import silo from "./silo";
import token from "./token";
import uniswapv4 from "./uniswapv4";
import updates from "./updates";
import userRewards from "./userRewards";
export const v3 = new Elysia({ tags: ["v3"], prefix: "/v3" })
    .use(app)
    .use(blacklist)
    .use(campaignClaims)
    .use(campaigns)
    .use(campaignsForMainParameter)
    .use(campaignsRewardsReport)
    .use(campaignUnclaimed)
    .use(claims)
    .use(compoundV2)
    .use(createCampaign)
    .use(dolomite)
    .use(euler)
    .use(fetch)
    .use(health)
    .use(lostyield)
    .use(merkl)
    .use(morphoMarkets)
    .use(morphoVaults)
    .use(multiChainPositions)
    .use(opportunity)
    .use(overview)
    .use(parse)
    .use(payload)
    .use(poolInfo)
    .use(positions)
    .use(radiant)
    .use(recipients)
    .use(rewards)
    .use(rewardsReport)
    .use(silo)
    .use(token)
    .use(updates)
    .use(userRewards)
    .use(uniswapv4);
