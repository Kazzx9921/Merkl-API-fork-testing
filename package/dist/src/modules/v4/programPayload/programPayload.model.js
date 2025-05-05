import { t } from "elysia";
// ─── DTOs ────────────────────────────────────────────────────────────────────
export const CampaignPayloadInputDto = t.Object({
    campaign: t.String({ description: "Campaign identifier, these are shared by the merkl team" }),
    program: t.String({ description: "Program identifier, these are shared by the merkl team" }),
    creator: t.String({ description: "Address of the campaign creator" }),
    rewardToken: t.String({ description: "Address of the reward token to be distributed" }),
    distributionChainId: t.Numeric({ description: "Chain ID where the reward tokens will be distributed" }),
    startTimestamp: t.Numeric({ description: "Start timestamp for the campaign" }),
    endTimestamp: t.Numeric({ description: "End timestamp for the campaign" }),
    amount: t.String({ description: "Amount of the reward token to be distributed" }),
    apr: t.Optional(t.String({ description: "APR for the campaign (Fixed APR campaigns)" })),
});
export const CampaignDataDto = t.Object({
    campaignType: t.Numeric({ description: "Type of the campaign 1 : ERC20, 2: CLAMM , ..." }),
    campaignData: t.String({ description: "Campaign data" }),
    amount: t.String({ description: "Amount of the reward token to be distributed" }),
    chainId: t.Numeric({ description: "Chain ID where the reward tokens will be distributed" }),
    computeChainId: t.Numeric({ description: "Chain ID used for computation" }),
    duration: t.Numeric({ description: "Duration for the campaign" }),
    rewardToken: t.String({ description: "Address of the reward token to be distributed" }),
    startTimestamp: t.Numeric({ description: "Start timestamp for the campaign" }),
});
export const SinglePayloadInputDto = t.Object({
    distributionChainId: t.Numeric({ description: "Chain ID where the reward tokens will be distributed" }),
    rewardToken: t.String({ description: "Address of the reward token to be distributed" }),
    amount: t.String({ description: "Amount of the reward token to be distributed" }),
    startTimestamp: t.Numeric({ description: "Start timestamp for the campaign" }),
    computeChainId: t.Numeric({ description: "Chain ID used for computation" }),
    creator: t.String({ description: "Address of the campaign creator" }),
    hooks: t.Optional(t.Array(t.Object({}))),
    tokenId: t.Optional(t.String({ description: "Token ID for the campaign" })),
    whitelist: t.Optional(t.Array(t.String({ description: "List of addresses allowed to participate" }))),
    blacklist: t.Optional(t.Array(t.String({ description: "List of addresses not allowed to participate" }))),
    campaignType: t.Numeric({ description: "Type of the campaign 1 : ERC20, 2: CLAMM , ..." }),
    endTimestamp: t.Optional(t.Numeric({ description: "End timestamp for the campaign" })),
    targetToken: t.Optional(t.String({ description: "Address of the target token that is incentivized" })),
    url: t.Optional(t.String({ description: "URL for more information" })),
    forwarders: t.Optional(t.Array(t.Union([t.Object({}), t.String()]))),
    poolAddress: t.Optional(t.String({ description: "Address of the pool that is incentivized" })),
    isOutOfRangeIncentivized: t.Optional(t.Boolean({ description: "Whether out-of-range is incentivized" })),
    weightFees: t.Optional(t.Number({ description: "Weight of the fees" })),
    weightToken0: t.Optional(t.Number({ description: "Weight of token 0" })),
    weightToken1: t.Optional(t.Number({ description: "Weight of token 1" })),
    usesBlockNumber: t.Optional(t.Boolean({ description: "Whether block number is used" })),
    snapshotTimestamp: t.Optional(t.Numeric({ description: "Snapshot timestamp" })),
    snapshotBlockNumber: t.Optional(t.Numeric({ description: "Snapshot block number" })),
    jsonUrl: t.Optional(t.String({ description: "URL for JSON data for Airdrops" })),
    subCampaignType: t.Optional(t.Numeric({ description: "Type of the sub-campaign" })),
    repository: t.Optional(t.String({ description: "Repository URL" })),
    capInUSD: t.Optional(t.String({ description: "Cap in USD" })),
    marketId: t.Optional(t.String({ description: "Market ID" })),
    compFork: t.Optional(t.Numeric({ description: "Compound fork ID" })),
    poolId: t.Optional(t.String({ description: "Pool ID that is incentivized" })),
    evkAddress: t.Optional(t.String({ description: "EVK address" })),
    collateralAddress: t.Optional(t.String({ description: "Collateral address" })),
    strategy: t.Optional(t.String({ description: "Strategy that is incentivized" })),
    contract: t.Optional(t.String({ description: "Contract address" })),
});
export const ProgramPayloadInputDto = t.Object({
    program: t.String({ description: "Program identifier, these are shared by the merkl team" }),
    creator: t.String({ description: "Address of the campaign creator" }),
    rewardToken: t.String({ description: "Address of the reward token to be distributed" }),
    distributionChainId: t.Numeric({ description: "Chain ID where the reward tokens will be distributed" }),
    startTimestamp: t.Numeric({ description: "Start timestamp for the campaign" }),
    endTimestamp: t.Numeric({ description: "End timestamp for the campaign" }),
    amount: t.Optional(t.String({ description: "Amount of the reward token to be distributed" })),
    apr: t.Optional(t.String({ description: "APR for the campaign (Fixed APR campaigns)" })),
});
export const CampaignAmountsInputDto = t.Record(t.String(), t.String());
// ---- Template below ----
export const safeTemplate = {
    version: "1.0",
    chainId: "100",
    createdAt: 1708537104580,
    meta: {
        name: "Create Merkl Campaign",
        txBuilderVersion: "1.16.3",
    },
    transactions: [
        {
            to: "0x4200000000000000000000000000000000000042",
            value: "0",
            data: null,
            contractMethod: {
                inputs: [
                    {
                        name: "spender",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "amount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
                name: "approve",
                payable: false,
            },
            contractInputsValues: {
                spender: "0x8BB4C975Ff3c250e0ceEA271728547f3802B36Fd",
                amount: "2000000000000000000000",
            },
        },
        {
            to: "0x8BB4C975Ff3c250e0ceEA271728547f3802B36Fd",
            value: "0",
            data: null,
            contractMethod: {
                inputs: [],
                name: "acceptConditions",
                payable: false,
            },
            contractInputsValues: null,
        },
        {
            to: "0x8BB4C975Ff3c250e0ceEA271728547f3802B36Fd",
            value: "0",
            data: null,
            contractMethod: {
                inputs: [
                    {
                        components: [
                            {
                                internalType: "bytes32",
                                name: "campaignId",
                                type: "bytes32",
                            },
                            {
                                internalType: "address",
                                name: "creator",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "rewardToken",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                            {
                                internalType: "uint32",
                                name: "campaignType",
                                type: "uint32",
                            },
                            {
                                internalType: "uint32",
                                name: "startTimestamp",
                                type: "uint32",
                            },
                            {
                                internalType: "uint32",
                                name: "duration",
                                type: "uint32",
                            },
                            {
                                internalType: "bytes",
                                name: "campaignData",
                                type: "bytes",
                            },
                        ],
                        internalType: "struct CampaignParameters",
                        name: "newCampaign",
                        type: "tuple",
                    },
                ],
                name: "createCampaign",
                payable: false,
            },
            contractInputsValues: {
                newCampaign: '["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x31429d1856aD1377A8A0079410B297e1a9e214c2","1000000000000000000000",1,1676649600,0,"0x0000000000000000000000001a7e4e63778b4f12a199c062f3efdd288afcbce800000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"]',
            },
        },
    ],
};
