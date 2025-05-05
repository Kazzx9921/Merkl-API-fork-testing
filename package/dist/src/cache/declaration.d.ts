import { TTLType } from "./redis";
export declare const CacheDeclaration: {
    Updates: {
        compressed: false;
        redisTTL: TTLType.Minutes2;
        localCache: false;
    };
    Delays: {
        compressed: false;
        redisTTL: TTLType.Minutes2;
        localCache: false;
    };
    TwtParticipants: {
        compressed: false;
        redisTTL: TTLType.Minutes5;
        localCache: false;
    };
    LastBlockBefore: {
        compressed: false;
        redisTTL: TTLType.Hours12;
        localCache: false;
    };
    LostYield: {
        compressed: false;
        redisTTL: TTLType.Hours3;
        localCache: false;
    };
    DolomiteMarkets: {
        compressed: false;
        redisTTL: TTLType.Minutes30;
        localCache: false;
    };
    EulerV2Vaults: {
        compressed: false;
        redisTTL: TTLType.Day;
        localCache: false;
    };
    CompoundV2ForksVaults: {
        compressed: false;
        redisTTL: TTLType.Week;
        localCache: false;
    };
    RadiantMarkets: {
        compressed: false;
        redisTTL: TTLType.Minutes30;
        localCache: false;
    };
    SiloMarkets: {
        compressed: false;
        redisTTL: TTLType.Minutes30;
        localCache: false;
    };
    MorphoMarkets: {
        compressed: false;
        redisTTL: TTLType.Minutes30;
        localCache: false;
    };
    Prices: {
        compressed: true;
        redisTTL: TTLType.Minutes30;
        localCache: false;
    };
    MerklChainData: {
        compressed: false;
        redisTTL: TTLType.Minutes30;
        localCache: false;
    };
    Opportunities: {
        compressed: true;
        redisTTL: TTLType.Hours12;
        localCache: false;
    };
    OpportunitiesWithTest: {
        compressed: true;
        redisTTL: TTLType.Hours12;
        localCache: false;
    };
    Campaigns: {
        compressed: true;
        redisTTL: TTLType.Hours12;
        localCache: false;
    };
    LiveCampaigns: {
        compressed: true;
        redisTTL: TTLType.Hours12;
        localCache: false;
    };
    CampaignsOldFormat: {
        compressed: true;
        redisTTL: TTLType.Hours12;
        localCache: false;
    };
    LiveCampaignsOldFormat: {
        compressed: true;
        redisTTL: TTLType.Hours12;
        localCache: false;
    };
    StaticCampaigns: {
        compressed: true;
        redisTTL: TTLType.Hours12;
        localCache: false;
    };
    Blacklist: {
        compressed: true;
        redisTTL: TTLType.Minutes10;
        localCache: false;
    };
    TokenList: {
        compressed: false;
        redisTTL: TTLType.Minutes30;
        localCache: false;
    };
    CurrentRoot: {
        compressed: false;
        redisTTL: TTLType.Seconds30;
        localCache: true;
    };
    Chains: {
        compressed: false;
        redisTTL: TTLType.Hours3;
        localCache: true;
    };
    RootsWithRewardOnChain: {
        compressed: false;
        redisTTL: TTLType.Minutes2;
        localCache: true;
    };
    UniswapV4Pools: {
        compressed: false;
        redisTTL: TTLType.Day;
        localCache: false;
    };
};
