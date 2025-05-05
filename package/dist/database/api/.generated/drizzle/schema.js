import { relations, sql } from 'drizzle-orm';
import { bigint, boolean, doublePrecision, foreignKey, integer, jsonb, pgEnum, pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
export const LoggedEntityType = pgEnum('LoggedEntityType', ['UNKNOWN', 'EULER_VAULT', 'UNISWAP_V4', 'COMPOUND_v2']);
export const RunStatus = pgEnum('RunStatus', ['PROCESSING', 'SUCCESS', 'FAILED', 'SKIPPED']);
export const OpportunityAction = pgEnum('OpportunityAction', ['POOL', 'HOLD', 'DROP', 'LEND', 'BORROW', 'LONG', 'SHORT', 'SWAP', 'INVALID']);
export const Status = pgEnum('Status', ['NONE', 'PAST', 'LIVE', 'SOON']);
export const ExplorerType = pgEnum('ExplorerType', ['ETHERSCAN', 'BLOCKSCOUT']);
export const AprType = pgEnum('AprType', ['CAMPAIGN', 'TOKEN', 'PROTOCOL']);
export const TvlType = pgEnum('TvlType', ['TOKEN', 'PROTOCOL']);
export const PriceSourceMethod = pgEnum('PriceSourceMethod', ['COINGECKO', 'CONSTANT', 'EQUAL_TO', 'ERC4626', 'DEXSCREENER', 'INDEXCOOP', 'DEFILLAMA']);
export const CampaignManualOverride = pgEnum('CampaignManualOverride', ['opportunityId', 'creatorAddress']);
export const OpportunityManualOverride = pgEnum('OpportunityManualOverride', ['name', 'depositUrl', 'explorerAddress', 'action', 'description', 'howToSteps']);
export const DistributionType = pgEnum('DistributionType', ['DUTCH_AUCTION', 'FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE', 'FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE', 'FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT', 'FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT']);
export const Campaign = pgTable('Campaign', {
    id: text('id').notNull().primaryKey(),
    computeChainId: integer('computeChainId').notNull(),
    distributionChainId: integer('distributionChainId').notNull(),
    campaignId: text('campaignId').notNull(),
    type: text('type').notNull(),
    distributionType: DistributionType('distributionType').notNull().default("DUTCH_AUCTION"),
    subType: integer('subType'),
    rewardTokenId: text('rewardTokenId').notNull(),
    amount: text('amount').notNull(),
    opportunityId: text('opportunityId').notNull(),
    startTimestamp: bigint('startTimestamp', { mode: 'bigint' }).notNull(),
    endTimestamp: bigint('endTimestamp', { mode: 'bigint' }).notNull(),
    params: jsonb('params').notNull(),
    description: text('description'),
    creatorAddress: text('creatorAddress').notNull(),
    manualOverrides: CampaignManualOverride('manualOverrides').array().notNull().default([]),
    createdAt: timestamp('createdAt', { precision: 3 }).notNull().defaultNow(),
    rootCampaignId: text('rootCampaignId'),
    parentCampaignId: text('parentCampaignId')
}, (Campaign) => ({
    'Campaign_ComputeChain_fkey': foreignKey({
        name: 'Campaign_ComputeChain_fkey',
        columns: [Campaign.computeChainId],
        foreignColumns: [Chain.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Campaign_DistributionChain_fkey': foreignKey({
        name: 'Campaign_DistributionChain_fkey',
        columns: [Campaign.distributionChainId],
        foreignColumns: [Chain.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Campaign_RewardToken_fkey': foreignKey({
        name: 'Campaign_RewardToken_fkey',
        columns: [Campaign.rewardTokenId],
        foreignColumns: [Token.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Campaign_Opportunity_fkey': foreignKey({
        name: 'Campaign_Opportunity_fkey',
        columns: [Campaign.opportunityId],
        foreignColumns: [Opportunity.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Campaign_Creator_fkey': foreignKey({
        name: 'Campaign_Creator_fkey',
        columns: [Campaign.creatorAddress],
        foreignColumns: [User.address]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Campaign_rootCampaign_fkey': foreignKey({
        name: 'Campaign_rootCampaign_fkey',
        columns: [Campaign.rootCampaignId],
        foreignColumns: [Campaign.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Campaign_parentCampaign_fkey': foreignKey({
        name: 'Campaign_parentCampaign_fkey',
        columns: [Campaign.parentCampaignId],
        foreignColumns: [Campaign.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Campaign_distributionChainId_campaignId_unique_idx': uniqueIndex('Campaign_distributionChainId_campaignId_key')
        .on(Campaign.distributionChainId, Campaign.campaignId)
}));
export const CampaignStatus = pgTable('CampaignStatus', {
    campaignId: text('campaignId').notNull().primaryKey(),
    computedUntil: bigint('computedUntil', { mode: 'bigint' }).notNull(),
    processingStarted: bigint('processingStarted', { mode: 'bigint' }).notNull(),
    status: RunStatus('status').notNull().default("SUCCESS"),
    error: text('error').notNull(),
    details: jsonb('details').notNull().default("{}")
}, (CampaignStatus) => ({
    'CampaignStatus_Campaign_fkey': foreignKey({
        name: 'CampaignStatus_Campaign_fkey',
        columns: [CampaignStatus.campaignId],
        foreignColumns: [Campaign.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade')
}));
export const CampaignComputedValue = pgTable('CampaignComputedValue', {
    campaignId: text('campaignId').notNull().primaryKey(),
    averageBoost: doublePrecision('averageBoost'),
    totalDistributedInUSD: doublePrecision('totalDistributedInUSD'),
    forfeitingBoost: doublePrecision('forfeitingBoost')
}, (CampaignComputedValue) => ({
    'CampaignComputedValue_Campaign_fkey': foreignKey({
        name: 'CampaignComputedValue_Campaign_fkey',
        columns: [CampaignComputedValue.campaignId],
        foreignColumns: [Campaign.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade')
}));
export const UserComputedValue = pgTable('UserComputedValue', {
    id: text('id').notNull().primaryKey().default(sql `gen_random_uuid()`),
    campaignId: text('campaignId').notNull(),
    address: text('address').notNull(),
    reason: text('reason').notNull(),
    boost: doublePrecision('boost')
}, (UserComputedValue) => ({
    'UserComputedValue_Campaign_fkey': foreignKey({
        name: 'UserComputedValue_Campaign_fkey',
        columns: [UserComputedValue.campaignId],
        foreignColumns: [Campaign.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'UserComputedValue_User_fkey': foreignKey({
        name: 'UserComputedValue_User_fkey',
        columns: [UserComputedValue.address],
        foreignColumns: [User.address]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'UserComputedValue_campaignId_address_reason_unique_idx': uniqueIndex('UserComputedValue_campaignId_address_reason_key')
        .on(UserComputedValue.campaignId, UserComputedValue.address, UserComputedValue.reason)
}));
export const Chain = pgTable('Chain', {
    id: integer('id').notNull().primaryKey(),
    name: text('name').notNull(),
    icon: text('icon').notNull()
});
export const Explorer = pgTable('Explorer', {
    id: text('id').notNull().primaryKey(),
    type: ExplorerType('type').notNull(),
    url: text('url').notNull(),
    chainId: integer('chainId').notNull()
}, (Explorer) => ({
    'Explorer_Chain_fkey': foreignKey({
        name: 'Explorer_Chain_fkey',
        columns: [Explorer.chainId],
        foreignColumns: [Chain.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Explorer_type_chainId_unique_idx': uniqueIndex('Explorer_type_chainId_key')
        .on(Explorer.type, Explorer.chainId)
}));
export const Opportunity = pgTable('Opportunity', {
    id: text('id').notNull().primaryKey(),
    chainId: integer('chainId').notNull(),
    type: text('type').notNull(),
    identifier: text('identifier').notNull(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    howToSteps: text('howToSteps').array().notNull().default([]),
    depositUrl: text('depositUrl'),
    explorerAddress: text('explorerAddress'),
    status: Status('status').notNull(),
    action: OpportunityAction('action').notNull(),
    mainProtocolId: text('mainProtocolId'),
    tvl: doublePrecision('tvl').notNull(),
    apr: doublePrecision('apr').notNull(),
    dailyRewards: doublePrecision('dailyRewards').notNull(),
    tags: text('tags').array().notNull().default([]),
    lastCampaignCreatedAt: timestamp('lastCampaignCreatedAt', { precision: 3 }).notNull().defaultNow(),
    manualOverrides: OpportunityManualOverride('manualOverrides').array().notNull().default([])
}, (Opportunity) => ({
    'Opportunity_Chain_fkey': foreignKey({
        name: 'Opportunity_Chain_fkey',
        columns: [Opportunity.chainId],
        foreignColumns: [Chain.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Opportunity_MainProtocol_fkey': foreignKey({
        name: 'Opportunity_MainProtocol_fkey',
        columns: [Opportunity.mainProtocolId],
        foreignColumns: [Protocol.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Opportunity_chainId_type_identifier_unique_idx': uniqueIndex('Opportunity_chainId_type_identifier_key')
        .on(Opportunity.chainId, Opportunity.type, Opportunity.identifier)
}));
export const Protocol = pgTable('Protocol', {
    id: text('id').notNull().primaryKey(),
    tags: text('tags').array().notNull().default([]),
    name: text('name').notNull(),
    description: text('description').notNull(),
    url: text('url').notNull(),
    icon: text('icon').notNull()
});
export const Token = pgTable('Token', {
    id: text('id').notNull().primaryKey(),
    name: text('name'),
    chainId: integer('chainId').notNull(),
    address: text('address').notNull(),
    decimals: integer('decimals').notNull(),
    symbol: text('symbol').notNull(),
    displaySymbol: text('displaySymbol').notNull(),
    icon: text('icon').notNull(),
    verified: boolean('verified').notNull(),
    isTest: boolean('isTest').notNull(),
    isPoint: boolean('isPoint').notNull(),
    isPreTGE: boolean('isPreTGE').notNull(),
    isNative: boolean('isNative').notNull(),
    price: doublePrecision('price')
}, (Token) => ({
    'Token_Chain_fkey': foreignKey({
        name: 'Token_Chain_fkey',
        columns: [Token.chainId],
        foreignColumns: [Chain.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Token_chainId_address_unique_idx': uniqueIndex('Token_chainId_address_key')
        .on(Token.chainId, Token.address)
}));
export const AprRecord = pgTable('AprRecord', {
    id: text('id').notNull().primaryKey(),
    timestamp: bigint('timestamp', { mode: 'bigint' }).notNull(),
    cumulated: doublePrecision('cumulated').notNull(),
    opportunityId: text('opportunityId').notNull()
}, (AprRecord) => ({
    'AprRecord_Opportunity_fkey': foreignKey({
        name: 'AprRecord_Opportunity_fkey',
        columns: [AprRecord.opportunityId],
        foreignColumns: [Opportunity.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'AprRecord_opportunityId_timestamp_unique_idx': uniqueIndex('AprRecord_opportunityId_timestamp_key')
        .on(AprRecord.opportunityId, AprRecord.timestamp)
}));
export const AprBreakdown = pgTable('AprBreakdown', {
    id: text('id').notNull().primaryKey().default(sql `gen_random_uuid()`),
    identifier: text('identifier').notNull(),
    type: AprType('type').notNull(),
    value: doublePrecision('value').notNull(),
    aprRecordId: text('aprRecordId').notNull()
}, (AprBreakdown) => ({
    'AprBreakdown_AprRecord_fkey': foreignKey({
        name: 'AprBreakdown_AprRecord_fkey',
        columns: [AprBreakdown.aprRecordId],
        foreignColumns: [AprRecord.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade')
}));
export const TVLRecord = pgTable('TVLRecord', {
    id: text('id').notNull().primaryKey(),
    timestamp: bigint('timestamp', { mode: 'bigint' }).notNull(),
    total: doublePrecision('total').notNull(),
    opportunityId: text('opportunityId').notNull()
}, (TVLRecord) => ({
    'TVLRecord_Opportunity_fkey': foreignKey({
        name: 'TVLRecord_Opportunity_fkey',
        columns: [TVLRecord.opportunityId],
        foreignColumns: [Opportunity.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'TVLRecord_opportunityId_timestamp_unique_idx': uniqueIndex('TVLRecord_opportunityId_timestamp_key')
        .on(TVLRecord.opportunityId, TVLRecord.timestamp)
}));
export const TVLBreakdown = pgTable('TVLBreakdown', {
    id: text('id').notNull().primaryKey().default(sql `gen_random_uuid()`),
    identifier: text('identifier').notNull(),
    type: TvlType('type').notNull(),
    value: doublePrecision('value').notNull(),
    tvlRecordId: text('tvlRecordId').notNull()
}, (TVLBreakdown) => ({
    'TVLBreakdown_TvlRecord_fkey': foreignKey({
        name: 'TVLBreakdown_TvlRecord_fkey',
        columns: [TVLBreakdown.tvlRecordId],
        foreignColumns: [TVLRecord.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade')
}));
export const DailyRewardsRecord = pgTable('DailyRewardsRecord', {
    id: text('id').notNull().primaryKey(),
    timestamp: bigint('timestamp', { mode: 'bigint' }).notNull(),
    total: doublePrecision('total').notNull(),
    opportunityId: text('opportunityId').notNull()
}, (DailyRewardsRecord) => ({
    'DailyRewardsRecord_Opportunity_fkey': foreignKey({
        name: 'DailyRewardsRecord_Opportunity_fkey',
        columns: [DailyRewardsRecord.opportunityId],
        foreignColumns: [Opportunity.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'DailyRewardsRecord_opportunityId_timestamp_unique_idx': uniqueIndex('DailyRewardsRecord_opportunityId_timestamp_key')
        .on(DailyRewardsRecord.opportunityId, DailyRewardsRecord.timestamp)
}));
export const DailyRewardsBreakdown = pgTable('DailyRewardsBreakdown', {
    id: text('id').notNull().primaryKey().default(sql `gen_random_uuid()`),
    value: doublePrecision('value').notNull(),
    campaignId: text('campaignId').notNull(),
    dailyRewardsRecordId: text('dailyRewardsRecordId').notNull()
}, (DailyRewardsBreakdown) => ({
    'DailyRewardsBreakdown_Campaign_fkey': foreignKey({
        name: 'DailyRewardsBreakdown_Campaign_fkey',
        columns: [DailyRewardsBreakdown.campaignId],
        foreignColumns: [Campaign.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'DailyRewardsBreakdown_DailyRewardsRecord_fkey': foreignKey({
        name: 'DailyRewardsBreakdown_DailyRewardsRecord_fkey',
        columns: [DailyRewardsBreakdown.dailyRewardsRecordId],
        foreignColumns: [DailyRewardsRecord.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade')
}));
export const User = pgTable('User', {
    address: text('address').notNull().primaryKey(),
    tags: text('tags').array().notNull(),
    creatorId: text('creatorId')
}, (User) => ({
    'User_Creator_fkey': foreignKey({
        name: 'User_Creator_fkey',
        columns: [User.creatorId],
        foreignColumns: [Creator.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade')
}));
export const Creator = pgTable('Creator', {
    id: text('id').notNull().primaryKey(),
    icon: text('icon'),
    name: text('name').notNull(),
    rebateFee: integer('rebateFee').notNull()
});
export const Reward = pgTable('Reward', {
    id: text('id').notNull().primaryKey(),
    root: text('root').notNull(),
    recipient: text('recipient').notNull(),
    rewardTokenId: text('rewardTokenId').notNull(),
    amount: text('amount').notNull().default("0"),
    claimed: text('claimed').notNull().default("0"),
    pending: text('pending').notNull().default("0"),
    proofs: text('proofs').array().notNull()
}, (Reward) => ({
    'Reward_MerklRoot_fkey': foreignKey({
        name: 'Reward_MerklRoot_fkey',
        columns: [Reward.root],
        foreignColumns: [MerklRoot.root]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Reward_User_fkey': foreignKey({
        name: 'Reward_User_fkey',
        columns: [Reward.recipient],
        foreignColumns: [User.address]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Reward_RewardToken_fkey': foreignKey({
        name: 'Reward_RewardToken_fkey',
        columns: [Reward.rewardTokenId],
        foreignColumns: [Token.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Reward_root_recipient_rewardTokenId_unique_idx': uniqueIndex('Reward_root_recipient_rewardTokenId_key')
        .on(Reward.root, Reward.recipient, Reward.rewardTokenId)
}));
export const RewardBreakdown = pgTable('RewardBreakdown', {
    id: text('id').notNull().primaryKey().default(sql `gen_random_uuid()`),
    protocolId: text('protocolId'),
    reason: text('reason').notNull(),
    amount: text('amount').notNull(),
    claimed: text('claimed').notNull(),
    pending: text('pending').notNull(),
    rewardId: text('rewardId').notNull(),
    campaignId: text('campaignId').notNull(),
    subCampaignId: text('subCampaignId')
}, (RewardBreakdown) => ({
    'RewardBreakdown_Protocol_fkey': foreignKey({
        name: 'RewardBreakdown_Protocol_fkey',
        columns: [RewardBreakdown.protocolId],
        foreignColumns: [Protocol.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'RewardBreakdown_Reward_fkey': foreignKey({
        name: 'RewardBreakdown_Reward_fkey',
        columns: [RewardBreakdown.rewardId],
        foreignColumns: [Reward.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'RewardBreakdown_Campaign_fkey': foreignKey({
        name: 'RewardBreakdown_Campaign_fkey',
        columns: [RewardBreakdown.campaignId],
        foreignColumns: [Campaign.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'RewardBreakdown_SubCampaign_fkey': foreignKey({
        name: 'RewardBreakdown_SubCampaign_fkey',
        columns: [RewardBreakdown.subCampaignId],
        foreignColumns: [Campaign.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'RewardBreakdown_rewardId_campaignId_reason_unique_idx': uniqueIndex('RewardBreakdown_rewardId_campaignId_reason_key')
        .on(RewardBreakdown.rewardId, RewardBreakdown.campaignId, RewardBreakdown.reason)
}));
export const MerklRoot = pgTable('MerklRoot', {
    root: text('root').notNull().primaryKey(),
    chainId: integer('chainId').notNull(),
    epoch: integer('epoch').notNull(),
    timestamp: bigint('timestamp', { mode: 'bigint' }).notNull()
}, (MerklRoot) => ({
    'MerklRoot_Chain_fkey': foreignKey({
        name: 'MerklRoot_Chain_fkey',
        columns: [MerklRoot.chainId],
        foreignColumns: [Chain.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade')
}));
export const PriceSource = pgTable('PriceSource', {
    id: serial('id').notNull().primaryKey(),
    symbol: text('symbol').notNull().unique(),
    method: PriceSourceMethod('method').notNull(),
    args: jsonb('args')
});
export const Blacklist = pgTable('Blacklist', {
    id: text('id').notNull().primaryKey(),
    chainId: integer('chainId').notNull(),
    poolAddress: text('poolAddress').notNull(),
    userAddress: text('userAddress').notNull(),
    arrestTimestamp: bigint('arrestTimestamp', { mode: 'bigint' }).notNull(),
    arrestDetails: jsonb('arrestDetails').notNull()
}, (Blacklist) => ({
    'Blacklist_Chain_fkey': foreignKey({
        name: 'Blacklist_Chain_fkey',
        columns: [Blacklist.chainId],
        foreignColumns: [Chain.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Blacklist_User_fkey': foreignKey({
        name: 'Blacklist_User_fkey',
        columns: [Blacklist.userAddress],
        foreignColumns: [User.address]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Blacklist_chainId_userAddress_poolAddress_unique_idx': uniqueIndex('Blacklist_chainId_userAddress_poolAddress_key')
        .on(Blacklist.chainId, Blacklist.userAddress, Blacklist.poolAddress)
}));
export const Dump = pgTable('Dump', {
    id: text('id').notNull().primaryKey(),
    chainId: integer('chainId').notNull(),
    fromTokenId: text('fromTokenId').notNull(),
    toTokenId: text('toTokenId').notNull(),
    multisig: text('multisig').notNull(),
    recipient: text('recipient').notNull(),
    amountIn: text('amountIn').notNull().default("0"),
    amountOut: text('amountOut').notNull().default("0"),
    datetime: timestamp('datetime', { precision: 3 }).notNull(),
    timestamp: integer('timestamp').notNull()
}, (Dump) => ({
    'Dump_Chain_fkey': foreignKey({
        name: 'Dump_Chain_fkey',
        columns: [Dump.chainId],
        foreignColumns: [Chain.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Dump_FromToken_fkey': foreignKey({
        name: 'Dump_FromToken_fkey',
        columns: [Dump.fromTokenId],
        foreignColumns: [Token.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Dump_ToToken_fkey': foreignKey({
        name: 'Dump_ToToken_fkey',
        columns: [Dump.toTokenId],
        foreignColumns: [Token.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    'Dump_chainId_fromTokenId_toTokenId_timestamp_unique_idx': uniqueIndex('Dump_chainId_fromTokenId_toTokenId_timestamp_key')
        .on(Dump.chainId, Dump.fromTokenId, Dump.toTokenId, Dump.timestamp)
}));
export const Logged = pgTable('Logged', {
    id: text('id').notNull().primaryKey(),
    chainId: integer('chainId').notNull(),
    type: LoggedEntityType('type').notNull().default("UNKNOWN"),
    address: text('address'),
    fetchAtBlock: integer('fetchAtBlock').notNull(),
    caughtFromAddress: text('caughtFromAddress').notNull(),
    entityData: jsonb('entityData').notNull()
}, (Logged) => ({
    'Logged_chainId_address_unique_idx': uniqueIndex('Logged_chainId_address_key')
        .on(Logged.chainId, Logged.address)
}));
export const OpportunityToToken = pgTable('_OpportunityToToken', {
    TokenId: text('A').notNull(),
    OpportunityId: text('B').notNull()
}, (OpportunityToToken) => ({
    '_OpportunityToToken_Token_fkey': foreignKey({
        name: '_OpportunityToToken_Token_fkey',
        columns: [OpportunityToToken.TokenId],
        foreignColumns: [Token.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    '_OpportunityToToken_Opportunity_fkey': foreignKey({
        name: '_OpportunityToToken_Opportunity_fkey',
        columns: [OpportunityToToken.OpportunityId],
        foreignColumns: [Opportunity.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade')
}));
export const OpportunityToProtocol = pgTable('_OpportunityToProtocol', {
    ProtocolId: text('A').notNull(),
    OpportunityId: text('B').notNull()
}, (OpportunityToProtocol) => ({
    '_OpportunityToProtocol_Protocol_fkey': foreignKey({
        name: '_OpportunityToProtocol_Protocol_fkey',
        columns: [OpportunityToProtocol.ProtocolId],
        foreignColumns: [Protocol.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade'),
    '_OpportunityToProtocol_Opportunity_fkey': foreignKey({
        name: '_OpportunityToProtocol_Opportunity_fkey',
        columns: [OpportunityToProtocol.OpportunityId],
        foreignColumns: [Opportunity.id]
    })
        .onDelete('cascade')
        .onUpdate('cascade')
}));
export const CampaignRelations = relations(Campaign, ({ one, many }) => ({
    ComputeChain: one(Chain, {
        relationName: 'compute',
        fields: [Campaign.computeChainId],
        references: [Chain.id]
    }),
    DistributionChain: one(Chain, {
        relationName: 'distribution',
        fields: [Campaign.distributionChainId],
        references: [Chain.id]
    }),
    RewardToken: one(Token, {
        relationName: 'CampaignToToken',
        fields: [Campaign.rewardTokenId],
        references: [Token.id]
    }),
    Opportunity: one(Opportunity, {
        relationName: 'CampaignToOpportunity',
        fields: [Campaign.opportunityId],
        references: [Opportunity.id]
    }),
    RewardBreakdown: many(RewardBreakdown, {
        relationName: 'Campaign'
    }),
    DailyRewardsBreakdown: many(DailyRewardsBreakdown, {
        relationName: 'CampaignToDailyRewardsBreakdown'
    }),
    Creator: one(User, {
        relationName: 'CampaignToUser',
        fields: [Campaign.creatorAddress],
        references: [User.address]
    }),
    CampaignStatus: many(CampaignStatus, {
        relationName: 'CampaignToCampaignStatus'
    }),
    CampaignEngineValues: many(CampaignComputedValue, {
        relationName: 'CampaignToCampaignComputedValue'
    }),
    UserComputedValue: many(UserComputedValue, {
        relationName: 'CampaignToUserComputedValue'
    }),
    rootCampaign: one(Campaign, {
        relationName: 'root',
        fields: [Campaign.rootCampaignId],
        references: [Campaign.id]
    }),
    subCampaigns: many(Campaign, {
        relationName: 'root'
    }),
    parentCampaign: one(Campaign, {
        relationName: 'parent',
        fields: [Campaign.parentCampaignId],
        references: [Campaign.id]
    }),
    childCampaigns: many(Campaign, {
        relationName: 'parent'
    }),
    RewardBreakdownSubCampaign: many(RewardBreakdown, {
        relationName: 'SubCampaign'
    })
}));
export const CampaignStatusRelations = relations(CampaignStatus, ({ one }) => ({
    Campaign: one(Campaign, {
        relationName: 'CampaignToCampaignStatus',
        fields: [CampaignStatus.campaignId],
        references: [Campaign.id]
    })
}));
export const CampaignComputedValueRelations = relations(CampaignComputedValue, ({ one }) => ({
    Campaign: one(Campaign, {
        relationName: 'CampaignToCampaignComputedValue',
        fields: [CampaignComputedValue.campaignId],
        references: [Campaign.id]
    })
}));
export const UserComputedValueRelations = relations(UserComputedValue, ({ one }) => ({
    Campaign: one(Campaign, {
        relationName: 'CampaignToUserComputedValue',
        fields: [UserComputedValue.campaignId],
        references: [Campaign.id]
    }),
    User: one(User, {
        relationName: 'UserToUserComputedValue',
        fields: [UserComputedValue.address],
        references: [User.address]
    })
}));
export const ChainRelations = relations(Chain, ({ many }) => ({
    Explorer: many(Explorer, {
        relationName: 'ChainToExplorer'
    }),
    Campaigns: many(Campaign, {
        relationName: 'compute'
    }),
    Distribution: many(Campaign, {
        relationName: 'distribution'
    }),
    Token: many(Token, {
        relationName: 'ChainToToken'
    }),
    Opportunity: many(Opportunity, {
        relationName: 'ChainToOpportunity'
    }),
    MerklRoot: many(MerklRoot, {
        relationName: 'ChainToMerklRoot'
    }),
    Blacklist: many(Blacklist, {
        relationName: 'BlacklistToChain'
    }),
    Dump: many(Dump, {
        relationName: 'ChainToDump'
    })
}));
export const ExplorerRelations = relations(Explorer, ({ one }) => ({
    Chain: one(Chain, {
        relationName: 'ChainToExplorer',
        fields: [Explorer.chainId],
        references: [Chain.id]
    })
}));
export const OpportunityRelations = relations(Opportunity, ({ one, many }) => ({
    Chain: one(Chain, {
        relationName: 'ChainToOpportunity',
        fields: [Opportunity.chainId],
        references: [Chain.id]
    }),
    Tokens: many(OpportunityToToken, {
        relationName: 'OpportunityToOpportunityToToken'
    }),
    Campaigns: many(Campaign, {
        relationName: 'CampaignToOpportunity'
    }),
    Protocols: many(OpportunityToProtocol, {
        relationName: 'OpportunityToOpportunityToProtocol'
    }),
    MainProtocol: one(Protocol, {
        relationName: 'main',
        fields: [Opportunity.mainProtocolId],
        references: [Protocol.id]
    }),
    TvlRecords: many(TVLRecord, {
        relationName: 'OpportunityToTVLRecord'
    }),
    AprRecords: many(AprRecord, {
        relationName: 'AprRecordToOpportunity'
    }),
    DailyRewardsRecords: many(DailyRewardsRecord, {
        relationName: 'DailyRewardsRecordToOpportunity'
    })
}));
export const ProtocolRelations = relations(Protocol, ({ many }) => ({
    MainOpportunities: many(Opportunity, {
        relationName: 'main'
    }),
    Opportunities: many(OpportunityToProtocol, {
        relationName: 'ProtocolToOpportunityToProtocol'
    }),
    RewardBreakdown: many(RewardBreakdown, {
        relationName: 'ProtocolToRewardBreakdown'
    })
}));
export const TokenRelations = relations(Token, ({ one, many }) => ({
    Chain: one(Chain, {
        relationName: 'ChainToToken',
        fields: [Token.chainId],
        references: [Chain.id]
    }),
    Opportunity: many(OpportunityToToken, {
        relationName: 'TokenToOpportunityToToken'
    }),
    Campaigns: many(Campaign, {
        relationName: 'CampaignToToken'
    }),
    Reward: many(Reward, {
        relationName: 'RewardToToken'
    }),
    DumpTo: many(Dump, {
        relationName: 'to'
    }),
    DumpFrom: many(Dump, {
        relationName: 'from'
    })
}));
export const AprRecordRelations = relations(AprRecord, ({ many, one }) => ({
    AprBreakdown: many(AprBreakdown, {
        relationName: 'AprBreakdownToAprRecord'
    }),
    Opportunity: one(Opportunity, {
        relationName: 'AprRecordToOpportunity',
        fields: [AprRecord.opportunityId],
        references: [Opportunity.id]
    })
}));
export const AprBreakdownRelations = relations(AprBreakdown, ({ one }) => ({
    AprRecord: one(AprRecord, {
        relationName: 'AprBreakdownToAprRecord',
        fields: [AprBreakdown.aprRecordId],
        references: [AprRecord.id]
    })
}));
export const TVLRecordRelations = relations(TVLRecord, ({ many, one }) => ({
    TvlBreakdown: many(TVLBreakdown, {
        relationName: 'TVLBreakdownToTVLRecord'
    }),
    Opportunity: one(Opportunity, {
        relationName: 'OpportunityToTVLRecord',
        fields: [TVLRecord.opportunityId],
        references: [Opportunity.id]
    })
}));
export const TVLBreakdownRelations = relations(TVLBreakdown, ({ one }) => ({
    TvlRecord: one(TVLRecord, {
        relationName: 'TVLBreakdownToTVLRecord',
        fields: [TVLBreakdown.tvlRecordId],
        references: [TVLRecord.id]
    })
}));
export const DailyRewardsRecordRelations = relations(DailyRewardsRecord, ({ many, one }) => ({
    DailyRewardsBreakdown: many(DailyRewardsBreakdown, {
        relationName: 'DailyRewardsBreakdownToDailyRewardsRecord'
    }),
    Opportunity: one(Opportunity, {
        relationName: 'DailyRewardsRecordToOpportunity',
        fields: [DailyRewardsRecord.opportunityId],
        references: [Opportunity.id]
    })
}));
export const DailyRewardsBreakdownRelations = relations(DailyRewardsBreakdown, ({ one }) => ({
    Campaign: one(Campaign, {
        relationName: 'CampaignToDailyRewardsBreakdown',
        fields: [DailyRewardsBreakdown.campaignId],
        references: [Campaign.id]
    }),
    DailyRewardsRecord: one(DailyRewardsRecord, {
        relationName: 'DailyRewardsBreakdownToDailyRewardsRecord',
        fields: [DailyRewardsBreakdown.dailyRewardsRecordId],
        references: [DailyRewardsRecord.id]
    })
}));
export const UserRelations = relations(User, ({ many, one }) => ({
    Rewards: many(Reward, {
        relationName: 'RewardToUser'
    }),
    Blacklist: many(Blacklist, {
        relationName: 'BlacklistToUser'
    }),
    CampaignsCreated: many(Campaign, {
        relationName: 'CampaignToUser'
    }),
    UserComputedValue: many(UserComputedValue, {
        relationName: 'UserToUserComputedValue'
    }),
    Creator: one(Creator, {
        relationName: 'CreatorToUser',
        fields: [User.creatorId],
        references: [Creator.id]
    })
}));
export const CreatorRelations = relations(Creator, ({ many }) => ({
    Users: many(User, {
        relationName: 'CreatorToUser'
    })
}));
export const RewardRelations = relations(Reward, ({ one, many }) => ({
    MerklRoot: one(MerklRoot, {
        relationName: 'MerklRootToReward',
        fields: [Reward.root],
        references: [MerklRoot.root]
    }),
    User: one(User, {
        relationName: 'RewardToUser',
        fields: [Reward.recipient],
        references: [User.address]
    }),
    RewardToken: one(Token, {
        relationName: 'RewardToToken',
        fields: [Reward.rewardTokenId],
        references: [Token.id]
    }),
    Breakdown: many(RewardBreakdown, {
        relationName: 'RewardToRewardBreakdown'
    })
}));
export const RewardBreakdownRelations = relations(RewardBreakdown, ({ one }) => ({
    Protocol: one(Protocol, {
        relationName: 'ProtocolToRewardBreakdown',
        fields: [RewardBreakdown.protocolId],
        references: [Protocol.id]
    }),
    Reward: one(Reward, {
        relationName: 'RewardToRewardBreakdown',
        fields: [RewardBreakdown.rewardId],
        references: [Reward.id]
    }),
    Campaign: one(Campaign, {
        relationName: 'Campaign',
        fields: [RewardBreakdown.campaignId],
        references: [Campaign.id]
    }),
    SubCampaign: one(Campaign, {
        relationName: 'SubCampaign',
        fields: [RewardBreakdown.subCampaignId],
        references: [Campaign.id]
    })
}));
export const MerklRootRelations = relations(MerklRoot, ({ one, many }) => ({
    Chain: one(Chain, {
        relationName: 'ChainToMerklRoot',
        fields: [MerklRoot.chainId],
        references: [Chain.id]
    }),
    Rewards: many(Reward, {
        relationName: 'MerklRootToReward'
    })
}));
export const BlacklistRelations = relations(Blacklist, ({ one }) => ({
    Chain: one(Chain, {
        relationName: 'BlacklistToChain',
        fields: [Blacklist.chainId],
        references: [Chain.id]
    }),
    User: one(User, {
        relationName: 'BlacklistToUser',
        fields: [Blacklist.userAddress],
        references: [User.address]
    })
}));
export const DumpRelations = relations(Dump, ({ one }) => ({
    Chain: one(Chain, {
        relationName: 'ChainToDump',
        fields: [Dump.chainId],
        references: [Chain.id]
    }),
    FromToken: one(Token, {
        relationName: 'from',
        fields: [Dump.fromTokenId],
        references: [Token.id]
    }),
    ToToken: one(Token, {
        relationName: 'to',
        fields: [Dump.toTokenId],
        references: [Token.id]
    })
}));
export const OpportunityToTokenRelations = relations(OpportunityToToken, ({ one }) => ({
    Token: one(Token, {
        relationName: 'TokenToOpportunityToToken',
        fields: [OpportunityToToken.TokenId],
        references: [Token.id]
    }),
    Opportunity: one(Opportunity, {
        relationName: 'OpportunityToOpportunityToToken',
        fields: [OpportunityToToken.OpportunityId],
        references: [Opportunity.id]
    })
}));
export const OpportunityToProtocolRelations = relations(OpportunityToProtocol, ({ one }) => ({
    Protocol: one(Protocol, {
        relationName: 'ProtocolToOpportunityToProtocol',
        fields: [OpportunityToProtocol.ProtocolId],
        references: [Protocol.id]
    }),
    Opportunity: one(Opportunity, {
        relationName: 'OpportunityToOpportunityToProtocol',
        fields: [OpportunityToProtocol.OpportunityId],
        references: [Opportunity.id]
    })
}));
