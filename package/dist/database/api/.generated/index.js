
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.1
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.1",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CampaignScalarFieldEnum = {
  id: 'id',
  computeChainId: 'computeChainId',
  distributionChainId: 'distributionChainId',
  campaignId: 'campaignId',
  type: 'type',
  distributionType: 'distributionType',
  subType: 'subType',
  rewardTokenId: 'rewardTokenId',
  amount: 'amount',
  opportunityId: 'opportunityId',
  startTimestamp: 'startTimestamp',
  endTimestamp: 'endTimestamp',
  params: 'params',
  description: 'description',
  creatorAddress: 'creatorAddress',
  manualOverrides: 'manualOverrides',
  createdAt: 'createdAt',
  rootCampaignId: 'rootCampaignId',
  parentCampaignId: 'parentCampaignId'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.CampaignStatusScalarFieldEnum = {
  campaignId: 'campaignId',
  computedUntil: 'computedUntil',
  processingStarted: 'processingStarted',
  status: 'status',
  error: 'error',
  details: 'details'
};

exports.Prisma.CampaignComputedValueScalarFieldEnum = {
  campaignId: 'campaignId',
  averageBoost: 'averageBoost',
  totalDistributedInUSD: 'totalDistributedInUSD',
  forfeitingBoost: 'forfeitingBoost'
};

exports.Prisma.UserComputedValueScalarFieldEnum = {
  id: 'id',
  campaignId: 'campaignId',
  address: 'address',
  reason: 'reason',
  boost: 'boost'
};

exports.Prisma.ChainScalarFieldEnum = {
  id: 'id',
  name: 'name',
  icon: 'icon'
};

exports.Prisma.ExplorerScalarFieldEnum = {
  id: 'id',
  type: 'type',
  url: 'url',
  chainId: 'chainId'
};

exports.Prisma.OpportunityScalarFieldEnum = {
  id: 'id',
  chainId: 'chainId',
  type: 'type',
  identifier: 'identifier',
  name: 'name',
  description: 'description',
  howToSteps: 'howToSteps',
  depositUrl: 'depositUrl',
  explorerAddress: 'explorerAddress',
  status: 'status',
  action: 'action',
  mainProtocolId: 'mainProtocolId',
  tvl: 'tvl',
  apr: 'apr',
  dailyRewards: 'dailyRewards',
  tags: 'tags',
  lastCampaignCreatedAt: 'lastCampaignCreatedAt',
  manualOverrides: 'manualOverrides'
};

exports.Prisma.ProtocolScalarFieldEnum = {
  id: 'id',
  tags: 'tags',
  name: 'name',
  description: 'description',
  url: 'url',
  icon: 'icon'
};

exports.Prisma.TokenScalarFieldEnum = {
  id: 'id',
  name: 'name',
  chainId: 'chainId',
  address: 'address',
  decimals: 'decimals',
  symbol: 'symbol',
  displaySymbol: 'displaySymbol',
  icon: 'icon',
  verified: 'verified',
  isTest: 'isTest',
  isPoint: 'isPoint',
  isPreTGE: 'isPreTGE',
  isNative: 'isNative',
  price: 'price'
};

exports.Prisma.AprRecordScalarFieldEnum = {
  id: 'id',
  timestamp: 'timestamp',
  cumulated: 'cumulated',
  opportunityId: 'opportunityId'
};

exports.Prisma.AprBreakdownScalarFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  type: 'type',
  value: 'value',
  aprRecordId: 'aprRecordId'
};

exports.Prisma.TVLRecordScalarFieldEnum = {
  id: 'id',
  timestamp: 'timestamp',
  total: 'total',
  opportunityId: 'opportunityId'
};

exports.Prisma.TVLBreakdownScalarFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  type: 'type',
  value: 'value',
  tvlRecordId: 'tvlRecordId'
};

exports.Prisma.DailyRewardsRecordScalarFieldEnum = {
  id: 'id',
  timestamp: 'timestamp',
  total: 'total',
  opportunityId: 'opportunityId'
};

exports.Prisma.DailyRewardsBreakdownScalarFieldEnum = {
  id: 'id',
  value: 'value',
  campaignId: 'campaignId',
  dailyRewardsRecordId: 'dailyRewardsRecordId'
};

exports.Prisma.UserScalarFieldEnum = {
  address: 'address',
  tags: 'tags',
  creatorId: 'creatorId'
};

exports.Prisma.CreatorScalarFieldEnum = {
  id: 'id',
  icon: 'icon',
  name: 'name',
  rebateFee: 'rebateFee'
};

exports.Prisma.RewardScalarFieldEnum = {
  id: 'id',
  root: 'root',
  recipient: 'recipient',
  rewardTokenId: 'rewardTokenId',
  amount: 'amount',
  claimed: 'claimed',
  pending: 'pending',
  proofs: 'proofs'
};

exports.Prisma.RewardBreakdownScalarFieldEnum = {
  id: 'id',
  protocolId: 'protocolId',
  reason: 'reason',
  amount: 'amount',
  claimed: 'claimed',
  pending: 'pending',
  rewardId: 'rewardId',
  campaignId: 'campaignId',
  subCampaignId: 'subCampaignId'
};

exports.Prisma.MerklRootScalarFieldEnum = {
  root: 'root',
  chainId: 'chainId',
  epoch: 'epoch',
  timestamp: 'timestamp'
};

exports.Prisma.PriceSourceScalarFieldEnum = {
  id: 'id',
  symbol: 'symbol',
  method: 'method',
  args: 'args'
};

exports.Prisma.BlacklistScalarFieldEnum = {
  id: 'id',
  chainId: 'chainId',
  poolAddress: 'poolAddress',
  userAddress: 'userAddress',
  arrestTimestamp: 'arrestTimestamp',
  arrestDetails: 'arrestDetails'
};

exports.Prisma.DumpScalarFieldEnum = {
  id: 'id',
  chainId: 'chainId',
  fromTokenId: 'fromTokenId',
  toTokenId: 'toTokenId',
  multisig: 'multisig',
  recipient: 'recipient',
  amountIn: 'amountIn',
  amountOut: 'amountOut',
  datetime: 'datetime',
  timestamp: 'timestamp'
};

exports.Prisma.LoggedScalarFieldEnum = {
  id: 'id',
  chainId: 'chainId',
  type: 'type',
  address: 'address',
  fetchAtBlock: 'fetchAtBlock',
  caughtFromAddress: 'caughtFromAddress',
  entityData: 'entityData'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.CampaignOrderByRelevanceFieldEnum = {
  id: 'id',
  campaignId: 'campaignId',
  type: 'type',
  rewardTokenId: 'rewardTokenId',
  amount: 'amount',
  opportunityId: 'opportunityId',
  description: 'description',
  creatorAddress: 'creatorAddress',
  rootCampaignId: 'rootCampaignId',
  parentCampaignId: 'parentCampaignId'
};

exports.Prisma.CampaignStatusOrderByRelevanceFieldEnum = {
  campaignId: 'campaignId',
  error: 'error'
};

exports.Prisma.CampaignComputedValueOrderByRelevanceFieldEnum = {
  campaignId: 'campaignId'
};

exports.Prisma.UserComputedValueOrderByRelevanceFieldEnum = {
  id: 'id',
  campaignId: 'campaignId',
  address: 'address',
  reason: 'reason'
};

exports.Prisma.ChainOrderByRelevanceFieldEnum = {
  name: 'name',
  icon: 'icon'
};

exports.Prisma.ExplorerOrderByRelevanceFieldEnum = {
  id: 'id',
  url: 'url'
};

exports.Prisma.OpportunityOrderByRelevanceFieldEnum = {
  id: 'id',
  type: 'type',
  identifier: 'identifier',
  name: 'name',
  description: 'description',
  howToSteps: 'howToSteps',
  depositUrl: 'depositUrl',
  explorerAddress: 'explorerAddress',
  mainProtocolId: 'mainProtocolId',
  tags: 'tags'
};

exports.Prisma.ProtocolOrderByRelevanceFieldEnum = {
  id: 'id',
  tags: 'tags',
  name: 'name',
  description: 'description',
  url: 'url',
  icon: 'icon'
};

exports.Prisma.TokenOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  symbol: 'symbol',
  displaySymbol: 'displaySymbol',
  icon: 'icon'
};

exports.Prisma.AprRecordOrderByRelevanceFieldEnum = {
  id: 'id',
  opportunityId: 'opportunityId'
};

exports.Prisma.AprBreakdownOrderByRelevanceFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  aprRecordId: 'aprRecordId'
};

exports.Prisma.TVLRecordOrderByRelevanceFieldEnum = {
  id: 'id',
  opportunityId: 'opportunityId'
};

exports.Prisma.TVLBreakdownOrderByRelevanceFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  tvlRecordId: 'tvlRecordId'
};

exports.Prisma.DailyRewardsRecordOrderByRelevanceFieldEnum = {
  id: 'id',
  opportunityId: 'opportunityId'
};

exports.Prisma.DailyRewardsBreakdownOrderByRelevanceFieldEnum = {
  id: 'id',
  campaignId: 'campaignId',
  dailyRewardsRecordId: 'dailyRewardsRecordId'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  address: 'address',
  tags: 'tags',
  creatorId: 'creatorId'
};

exports.Prisma.CreatorOrderByRelevanceFieldEnum = {
  id: 'id',
  icon: 'icon',
  name: 'name'
};

exports.Prisma.RewardOrderByRelevanceFieldEnum = {
  id: 'id',
  root: 'root',
  recipient: 'recipient',
  rewardTokenId: 'rewardTokenId',
  amount: 'amount',
  claimed: 'claimed',
  pending: 'pending',
  proofs: 'proofs'
};

exports.Prisma.RewardBreakdownOrderByRelevanceFieldEnum = {
  id: 'id',
  protocolId: 'protocolId',
  reason: 'reason',
  amount: 'amount',
  claimed: 'claimed',
  pending: 'pending',
  rewardId: 'rewardId',
  campaignId: 'campaignId',
  subCampaignId: 'subCampaignId'
};

exports.Prisma.MerklRootOrderByRelevanceFieldEnum = {
  root: 'root'
};

exports.Prisma.PriceSourceOrderByRelevanceFieldEnum = {
  symbol: 'symbol'
};

exports.Prisma.BlacklistOrderByRelevanceFieldEnum = {
  id: 'id',
  poolAddress: 'poolAddress',
  userAddress: 'userAddress'
};

exports.Prisma.DumpOrderByRelevanceFieldEnum = {
  id: 'id',
  fromTokenId: 'fromTokenId',
  toTokenId: 'toTokenId',
  multisig: 'multisig',
  recipient: 'recipient',
  amountIn: 'amountIn',
  amountOut: 'amountOut'
};

exports.Prisma.LoggedOrderByRelevanceFieldEnum = {
  id: 'id',
  address: 'address',
  caughtFromAddress: 'caughtFromAddress'
};
exports.LoggedEntityType = exports.$Enums.LoggedEntityType = {
  UNKNOWN: 'UNKNOWN',
  EULER_VAULT: 'EULER_VAULT',
  UNISWAP_V4: 'UNISWAP_V4',
  COMPOUND_v2: 'COMPOUND_v2'
};

exports.RunStatus = exports.$Enums.RunStatus = {
  PROCESSING: 'PROCESSING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  SKIPPED: 'SKIPPED'
};

exports.OpportunityAction = exports.$Enums.OpportunityAction = {
  POOL: 'POOL',
  HOLD: 'HOLD',
  DROP: 'DROP',
  LEND: 'LEND',
  BORROW: 'BORROW',
  LONG: 'LONG',
  SHORT: 'SHORT',
  SWAP: 'SWAP',
  INVALID: 'INVALID'
};

exports.Status = exports.$Enums.Status = {
  NONE: 'NONE',
  PAST: 'PAST',
  LIVE: 'LIVE',
  SOON: 'SOON'
};

exports.ExplorerType = exports.$Enums.ExplorerType = {
  ETHERSCAN: 'ETHERSCAN',
  BLOCKSCOUT: 'BLOCKSCOUT'
};

exports.AprType = exports.$Enums.AprType = {
  CAMPAIGN: 'CAMPAIGN',
  TOKEN: 'TOKEN',
  PROTOCOL: 'PROTOCOL'
};

exports.TvlType = exports.$Enums.TvlType = {
  TOKEN: 'TOKEN',
  PROTOCOL: 'PROTOCOL'
};

exports.PriceSourceMethod = exports.$Enums.PriceSourceMethod = {
  COINGECKO: 'COINGECKO',
  CONSTANT: 'CONSTANT',
  EQUAL_TO: 'EQUAL_TO',
  ERC4626: 'ERC4626',
  DEXSCREENER: 'DEXSCREENER',
  INDEXCOOP: 'INDEXCOOP',
  DEFILLAMA: 'DEFILLAMA'
};

exports.CampaignManualOverride = exports.$Enums.CampaignManualOverride = {
  opportunityId: 'opportunityId',
  creatorAddress: 'creatorAddress'
};

exports.OpportunityManualOverride = exports.$Enums.OpportunityManualOverride = {
  name: 'name',
  depositUrl: 'depositUrl',
  explorerAddress: 'explorerAddress',
  action: 'action',
  description: 'description',
  howToSteps: 'howToSteps'
};

exports.DistributionType = exports.$Enums.DistributionType = {
  DUTCH_AUCTION: 'DUTCH_AUCTION',
  FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE: 'FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE',
  FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE: 'FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE',
  FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT: 'FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT',
  FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT: 'FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT'
};

exports.Prisma.ModelName = {
  Campaign: 'Campaign',
  CampaignStatus: 'CampaignStatus',
  CampaignComputedValue: 'CampaignComputedValue',
  UserComputedValue: 'UserComputedValue',
  Chain: 'Chain',
  Explorer: 'Explorer',
  Opportunity: 'Opportunity',
  Protocol: 'Protocol',
  Token: 'Token',
  AprRecord: 'AprRecord',
  AprBreakdown: 'AprBreakdown',
  TVLRecord: 'TVLRecord',
  TVLBreakdown: 'TVLBreakdown',
  DailyRewardsRecord: 'DailyRewardsRecord',
  DailyRewardsBreakdown: 'DailyRewardsBreakdown',
  User: 'User',
  Creator: 'Creator',
  Reward: 'Reward',
  RewardBreakdown: 'RewardBreakdown',
  MerklRoot: 'MerklRoot',
  PriceSource: 'PriceSource',
  Blacklist: 'Blacklist',
  Dump: 'Dump',
  Logged: 'Logged'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/runner/work/merkl-api/merkl-api/database/api/.generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "linux-arm64-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "linux-arm64-openssl-1.1.x"
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl-arm64-openssl-3.0.x"
      }
    ],
    "previewFeatures": [
      "fullTextSearchPostgres",
      "relationJoins"
    ],
    "sourceFilePath": "/home/runner/work/merkl-api/merkl-api/database/api/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "..",
  "clientVersion": "6.3.1",
  "engineVersion": "acc0b9dd43eb689cbd20c9470515d719db10d0b0",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "ciName": "GitHub Actions",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_API_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  binaryTargets   = [\"native\", \"linux-arm64-openssl-3.0.x\", \"linux-arm64-openssl-1.1.x\", \"linux-musl-arm64-openssl-3.0.x\"]\n  output          = \".generated/\"\n  previewFeatures = [\"fullTextSearchPostgres\", \"relationJoins\"]\n}\n\ngenerator drizzle {\n  provider = \"drizzle-prisma-generator\"\n  output   = \".generated/drizzle/\" // Where to put generated Drizle tables\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_API_URL\")\n}\n\nmodel Campaign {\n  id                    String                  @id\n  ComputeChain          Chain                   @relation(\"compute\", fields: [computeChainId], references: [id])\n  computeChainId        Int\n  DistributionChain     Chain                   @relation(\"distribution\", fields: [distributionChainId], references: [id])\n  distributionChainId   Int\n  campaignId            String\n  type                  String\n  distributionType      DistributionType        @default(DUTCH_AUCTION)\n  subType               Int?\n  RewardToken           Token                   @relation(fields: [rewardTokenId], references: [id])\n  rewardTokenId         String\n  amount                String\n  Opportunity           Opportunity             @relation(fields: [opportunityId], references: [id])\n  opportunityId         String\n  startTimestamp        BigInt\n  endTimestamp          BigInt\n  params                Json\n  description           String? // Can only be added manually for now\n  RewardBreakdown       RewardBreakdown[]       @relation(\"Campaign\")\n  DailyRewardsBreakdown DailyRewardsBreakdown[]\n  Creator               User                    @relation(fields: [creatorAddress], references: [address])\n  creatorAddress        String                  @db.Char(42)\n  // Should probably be a 1 to 1 relation if we do not want to keep historic records\n  CampaignStatus        CampaignStatus[]\n  CampaignEngineValues  CampaignComputedValue[]\n  UserComputedValue     UserComputedValue[]\n\n  // Fields should be automatically parsable and overriden periodically UNLESS\n  // they are manually overridden, in which case they should be kept as is\n  manualOverrides CampaignManualOverride[] @default([])\n\n  createdAt DateTime @default(now())\n\n  rootCampaignId             String? // In case this is a subCampaign, refers to the root of the subCampaign tree\n  rootCampaign               Campaign?         @relation(\"root\", fields: [rootCampaignId], references: [id])\n  subCampaigns               Campaign[]        @relation(\"root\")\n  parentCampaignId           String? // In case this is a subCampaign, refers to the parent campaign in the subCampaign tree\n  parentCampaign             Campaign?         @relation(\"parent\", fields: [parentCampaignId], references: [id])\n  childCampaigns             Campaign[]        @relation(\"parent\")\n  RewardBreakdownSubCampaign RewardBreakdown[] @relation(\"SubCampaign\")\n\n  @@unique([distributionChainId, campaignId])\n  @@index([opportunityId], type: Hash)\n}\n\n// SubTable of Campaigns that should be here as soon as the campaign is processed\nmodel CampaignStatus {\n  campaignId        String    @id\n  Campaign          Campaign  @relation(fields: [campaignId], references: [id])\n  computedUntil     BigInt\n  processingStarted BigInt\n  status            RunStatus @default(SUCCESS)\n  error             String    @default(\"\")\n  details           Json      @default(\"{}\")\n}\n\n// SubTable of Campaigns that will contain values populated by the Engine when it's running\nmodel CampaignComputedValue {\n  campaignId            String   @id\n  Campaign              Campaign @relation(fields: [campaignId], references: [id])\n  averageBoost          Float? // Average boost in case of boosting hook\n  totalDistributedInUSD Float? // Used in case there is a distribution cap\n  forfeitingBoost       Float? // In case some rewards are forfeited, resulting boost for remaining users\n}\n\nmodel UserComputedValue {\n  id         String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  campaignId String\n  Campaign   Campaign @relation(fields: [campaignId], references: [id])\n  address    String   @db.Char(42)\n  User       User?    @relation(fields: [address], references: [address])\n  reason     String\n  boost      Float?\n\n  @@unique([campaignId, address, reason])\n}\n\nmodel Chain {\n  id           Int           @id\n  name         String\n  icon         String\n  // liveCampaigns Int           @default(0)\n  // dailyRewards  Float         @default(0)\n  Explorer     Explorer[]\n  Campaigns    Campaign[]    @relation(\"compute\")\n  Distribution Campaign[]    @relation(\"distribution\")\n  Token        Token[]\n  Opportunity  Opportunity[]\n  MerklRoot    MerklRoot[]\n  Blacklist    Blacklist[]\n  Dump         Dump[]\n}\n\nmodel Explorer {\n  id      String       @id\n  type    ExplorerType\n  Chain   Chain        @relation(fields: [chainId], references: [id])\n  url     String\n  chainId Int\n\n  @@unique([type, chainId])\n}\n\nmodel Opportunity {\n  id                    String                      @id\n  Chain                 Chain                       @relation(fields: [chainId], references: [id]) // compute\n  chainId               Int // compute\n  type                  String\n  identifier            String // eg. 0xUniswapPool - formerly mainParameter\n  name                  String // Override\n  description           String                      @default(\"\") // Override  \n  howToSteps            String[]                    @default([]) // Override\n  depositUrl            String? // Override\n  explorerAddress       String? // Override\n  status                Status\n  action                OpportunityAction // Override\n  Tokens                Token[]\n  Campaigns             Campaign[]\n  Protocols             Protocol[]\n  MainProtocol          Protocol?                   @relation(name: \"main\", fields: [mainProtocolId], references: [id])\n  mainProtocolId        String?\n  tvl                   Float                       @default(0)\n  TvlRecords            TVLRecord[]\n  apr                   Float                       @default(0)\n  AprRecords            AprRecord[]\n  dailyRewards          Float                       @default(0)\n  DailyRewardsRecords   DailyRewardsRecord[]\n  tags                  String[]                    @default([])\n  lastCampaignCreatedAt DateTime                    @default(now())\n  manualOverrides       OpportunityManualOverride[] @default([])\n\n  // Fields should be automatically parsable and overriden periodically UNLESS\n  // they are manually overridden, in which case they should be kept as is\n  // manualOverrides OpportunityManualOverride[] @default([])\n\n  @@unique([chainId, type, identifier])\n}\n\nmodel Protocol {\n  id                String            @id\n  tags              String[]          @default([])\n  name              String\n  description       String            @default(\"\")\n  url               String\n  icon              String\n  // liveCampaigns     Int               @default(0)\n  // totalDailyRewards Float             @default(0)\n  MainOpportunities Opportunity[]     @relation(name: \"main\")\n  Opportunities     Opportunity[]\n  RewardBreakdown   RewardBreakdown[]\n}\n\nmodel Token {\n  id            String        @id()\n  name          String?\n  Chain         Chain         @relation(fields: [chainId], references: [id])\n  chainId       Int\n  address       String        @db.Char(42)\n  decimals      Int\n  symbol        String\n  displaySymbol String        @default(\"\")\n  icon          String\n  verified      Boolean       @default(false)\n  isTest        Boolean       @default(false)\n  isPoint       Boolean       @default(false)\n  isPreTGE      Boolean       @default(false) // Pre-TGE tokens, used to display a warning in the UI\n  isNative      Boolean       @default(false)\n  price         Float?\n  Opportunity   Opportunity[]\n  Campaigns     Campaign[]\n  Reward        Reward[]\n  DumpTo        Dump[]        @relation(\"to\")\n  DumpFrom      Dump[]        @relation(\"from\")\n\n  @@unique([chainId, address])\n  @@index([chainId], type: Hash)\n  @@index([symbol, address])\n}\n\nmodel AprRecord {\n  id            String         @id\n  timestamp     BigInt\n  cumulated     Float\n  AprBreakdown  AprBreakdown[]\n  Opportunity   Opportunity    @relation(fields: [opportunityId], references: [id])\n  opportunityId String\n\n  @@unique([opportunityId, timestamp])\n  @@index([opportunityId, timestamp(sort: Desc)])\n}\n\nmodel AprBreakdown {\n  id          String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  identifier  String\n  type        AprType\n  value       Float\n  AprRecord   AprRecord @relation(fields: [aprRecordId], references: [id], onDelete: Cascade)\n  aprRecordId String\n\n  @@index([aprRecordId], type: Hash)\n}\n\nmodel TVLRecord {\n  id           String         @id\n  timestamp    BigInt\n  total        Float\n  TvlBreakdown TVLBreakdown[]\n\n  Opportunity   Opportunity @relation(fields: [opportunityId], references: [id])\n  opportunityId String\n\n  @@unique([opportunityId, timestamp])\n  @@index([opportunityId, timestamp(sort: Desc)])\n}\n\nmodel TVLBreakdown {\n  id         String  @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  identifier String\n  type       TvlType\n  value      Float // In case type is TOKEN, this is the raw amount of tokens\n\n  TvlRecord   TVLRecord @relation(fields: [tvlRecordId], references: [id], onDelete: Cascade)\n  tvlRecordId String\n\n  @@index([tvlRecordId], type: Hash)\n}\n\nmodel DailyRewardsRecord {\n  id                    String                  @id\n  timestamp             BigInt\n  total                 Float\n  DailyRewardsBreakdown DailyRewardsBreakdown[]\n\n  Opportunity   Opportunity @relation(fields: [opportunityId], references: [id])\n  opportunityId String\n\n  @@unique([opportunityId, timestamp])\n  @@index([opportunityId, timestamp(sort: Desc)])\n}\n\nmodel DailyRewardsBreakdown {\n  id                   String             @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  value                Float\n  campaignId           String\n  Campaign             Campaign           @relation(fields: [campaignId], references: [id])\n  DailyRewardsRecord   DailyRewardsRecord @relation(fields: [dailyRewardsRecordId], references: [id], onDelete: Cascade)\n  dailyRewardsRecordId String\n\n  @@index([dailyRewardsRecordId], type: Hash)\n}\n\nmodel User {\n  address           String              @id @db.Char(42)\n  Rewards           Reward[]\n  Blacklist         Blacklist[]\n  CampaignsCreated  Campaign[]\n  UserComputedValue UserComputedValue[]\n  tags              String[]\n\n  Creator   Creator? @relation(fields: [creatorId], references: [id])\n  creatorId String?\n}\n\nmodel Creator {\n  id        String  @id\n  icon      String?\n  name      String\n  rebateFee Int     @default(0)\n  Users     User[]\n}\n\n// How much reward token per user per chain\nmodel Reward {\n  id            String            @id\n  MerklRoot     MerklRoot         @relation(fields: [root], references: [root])\n  root          String\n  User          User              @relation(fields: [recipient], references: [address])\n  recipient     String            @db.Char(42)\n  RewardToken   Token             @relation(fields: [rewardTokenId], references: [id])\n  rewardTokenId String\n  amount        String            @default(\"0\")\n  claimed       String            @default(\"0\")\n  pending       String            @default(\"0\")\n  proofs        String[]\n  Breakdown     RewardBreakdown[]\n  // Hidden index on ((CAST(amount AS INTEGER) + CAST(pending AS INTEGER)));\n\n  @@unique([root, recipient, rewardTokenId])\n  @@index([root], type: Hash)\n  @@index([recipient, rewardTokenId])\n}\n\nmodel RewardBreakdown {\n  id            String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  Protocol      Protocol? @relation(fields: [protocolId], references: [id])\n  protocolId    String?\n  reason        String\n  amount        String\n  claimed       String\n  pending       String\n  Reward        Reward    @relation(fields: [rewardId], references: [id], onDelete: Cascade)\n  rewardId      String\n  campaignId    String\n  Campaign      Campaign  @relation(name: \"Campaign\", fields: [campaignId], references: [id])\n  subCampaignId String?\n  SubCampaign   Campaign? @relation(name: \"SubCampaign\", fields: [subCampaignId], references: [id])\n\n  // Hidden index on ((CAST(amount AS INTEGER) + CAST(pending AS INTEGER)));\n  @@unique([rewardId, campaignId, reason])\n  @@index([rewardId], type: Hash)\n  @@index([campaignId], type: Hash)\n}\n\nmodel MerklRoot {\n  root      String   @id\n  Chain     Chain    @relation(fields: [chainId], references: [id])\n  chainId   Int\n  epoch     Int\n  timestamp BigInt\n  Rewards   Reward[]\n\n  @@index([chainId, root])\n}\n\nmodel PriceSource {\n  id     Int               @id @default(autoincrement()) // This should hold in Int ids\n  symbol String            @unique() // Price Id\n  method PriceSourceMethod\n  args   Json?\n}\n\n// priceId -> number\n\nmodel Blacklist {\n  id              String @id\n  Chain           Chain  @relation(fields: [chainId], references: [id])\n  chainId         Int\n  poolAddress     String @db.Char(42)\n  User            User   @relation(fields: [userAddress], references: [address])\n  userAddress     String @db.Char(42)\n  arrestTimestamp BigInt\n  arrestDetails   Json\n\n  @@unique([chainId, userAddress, poolAddress])\n  @@index([userAddress], type: Hash)\n}\n\nmodel Dump {\n  id          String   @id\n  Chain       Chain    @relation(fields: [chainId], references: [id])\n  chainId     Int\n  FromToken   Token    @relation(name: \"from\", fields: [fromTokenId], references: [id])\n  fromTokenId String\n  ToToken     Token    @relation(name: \"to\", fields: [toTokenId], references: [id])\n  toTokenId   String\n  multisig    String   @db.Char(42)\n  recipient   String   @db.Char(42)\n  amountIn    String   @default(\"0\")\n  amountOut   String   @default(\"0\")\n  datetime    DateTime\n  timestamp   Int\n\n  @@unique([chainId, fromTokenId, toTokenId, timestamp])\n}\n\nmodel Logged {\n  id                String           @id\n  chainId           Int\n  type              LoggedEntityType @default(UNKNOWN)\n  address           String?          @db.Char(42)\n  fetchAtBlock      Int\n  caughtFromAddress String           @db.Char(42)\n  entityData        Json\n\n  @@unique([chainId, address])\n}\n\n// enums\n\nenum LoggedEntityType {\n  UNKNOWN\n  EULER_VAULT\n  UNISWAP_V4\n  COMPOUND_v2\n}\n\nenum RunStatus {\n  PROCESSING\n  SUCCESS\n  FAILED\n  SKIPPED\n}\n\nenum OpportunityAction {\n  POOL\n  HOLD\n  DROP\n  LEND\n  BORROW\n  LONG\n  SHORT\n  SWAP\n  INVALID\n}\n\nenum Status {\n  NONE // This would mean that no campaigns was ever created for this opportunity\n  PAST\n  LIVE\n  SOON\n}\n\nenum ExplorerType {\n  ETHERSCAN\n  BLOCKSCOUT\n}\n\nenum AprType {\n  CAMPAIGN\n  TOKEN\n  PROTOCOL\n}\n\nenum TvlType {\n  TOKEN\n  PROTOCOL\n}\n\nenum PriceSourceMethod {\n  COINGECKO\n  CONSTANT\n  EQUAL_TO\n  ERC4626\n  DEXSCREENER\n  INDEXCOOP\n  DEFILLAMA\n}\n\nenum CampaignManualOverride {\n  opportunityId\n  creatorAddress\n}\n\nenum OpportunityManualOverride {\n  name\n  depositUrl\n  explorerAddress\n  action\n  description\n  howToSteps\n}\n\nenum DistributionType {\n  DUTCH_AUCTION\n  FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE // The fix reward value will lie in params.apr\n  FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE\n  FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT\n  FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT\n}\n",
  "inlineSchemaHash": "7a3034e5dd1b405d4418a23840b68d0a6c658eb74d4dae598b35d50c8160c27d",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "database/api/.generated",
    "api/.generated",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Campaign\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ComputeChain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"nativeType\":null,\"relationName\":\"compute\",\"relationFromFields\":[\"computeChainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"computeChainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DistributionChain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"nativeType\":null,\"relationName\":\"distribution\",\"relationFromFields\":[\"distributionChainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distributionChainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distributionType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DistributionType\",\"nativeType\":null,\"default\":\"DUTCH_AUCTION\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RewardToken\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Token\",\"nativeType\":null,\"relationName\":\"CampaignToToken\",\"relationFromFields\":[\"rewardTokenId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardTokenId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Opportunity\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Opportunity\",\"nativeType\":null,\"relationName\":\"CampaignToOpportunity\",\"relationFromFields\":[\"opportunityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opportunityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"params\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RewardBreakdown\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RewardBreakdown\",\"nativeType\":null,\"relationName\":\"Campaign\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DailyRewardsBreakdown\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DailyRewardsBreakdown\",\"nativeType\":null,\"relationName\":\"CampaignToDailyRewardsBreakdown\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"CampaignToUser\",\"relationFromFields\":[\"creatorAddress\"],\"relationToFields\":[\"address\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CampaignStatus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CampaignStatus\",\"nativeType\":null,\"relationName\":\"CampaignToCampaignStatus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CampaignEngineValues\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CampaignComputedValue\",\"nativeType\":null,\"relationName\":\"CampaignToCampaignComputedValue\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserComputedValue\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserComputedValue\",\"nativeType\":null,\"relationName\":\"CampaignToUserComputedValue\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manualOverrides\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CampaignManualOverride\",\"nativeType\":null,\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rootCampaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rootCampaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"root\",\"relationFromFields\":[\"rootCampaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subCampaigns\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"root\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentCampaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentCampaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"parent\",\"relationFromFields\":[\"parentCampaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"childCampaigns\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"parent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RewardBreakdownSubCampaign\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RewardBreakdown\",\"nativeType\":null,\"relationName\":\"SubCampaign\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"distributionChainId\",\"campaignId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"distributionChainId\",\"campaignId\"]}],\"isGenerated\":false},\"CampaignStatus\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Campaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"CampaignToCampaignStatus\",\"relationFromFields\":[\"campaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"computedUntil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"processingStarted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RunStatus\",\"nativeType\":null,\"default\":\"SUCCESS\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"error\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Json\",\"nativeType\":null,\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CampaignComputedValue\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Campaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"CampaignToCampaignComputedValue\",\"relationFromFields\":[\"campaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"averageBoost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalDistributedInUSD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"forfeitingBoost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserComputedValue\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Campaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"CampaignToUserComputedValue\",\"relationFromFields\":[\"campaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToUserComputedValue\",\"relationFromFields\":[\"address\"],\"relationToFields\":[\"address\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"campaignId\",\"address\",\"reason\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"campaignId\",\"address\",\"reason\"]}],\"isGenerated\":false},\"Chain\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Explorer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Explorer\",\"nativeType\":null,\"relationName\":\"ChainToExplorer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Campaigns\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"compute\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Distribution\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"distribution\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Token\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Token\",\"nativeType\":null,\"relationName\":\"ChainToToken\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Opportunity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Opportunity\",\"nativeType\":null,\"relationName\":\"ChainToOpportunity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MerklRoot\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MerklRoot\",\"nativeType\":null,\"relationName\":\"ChainToMerklRoot\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Blacklist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Blacklist\",\"nativeType\":null,\"relationName\":\"BlacklistToChain\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dump\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dump\",\"nativeType\":null,\"relationName\":\"ChainToDump\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Explorer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExplorerType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Chain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"nativeType\":null,\"relationName\":\"ChainToExplorer\",\"relationFromFields\":[\"chainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"type\",\"chainId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"type\",\"chainId\"]}],\"isGenerated\":false},\"Opportunity\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Chain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"nativeType\":null,\"relationName\":\"ChainToOpportunity\",\"relationFromFields\":[\"chainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"howToSteps\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"depositUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"explorerAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OpportunityAction\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tokens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Token\",\"nativeType\":null,\"relationName\":\"OpportunityToToken\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Campaigns\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"CampaignToOpportunity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Protocols\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Protocol\",\"nativeType\":null,\"relationName\":\"OpportunityToProtocol\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MainProtocol\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Protocol\",\"nativeType\":null,\"relationName\":\"main\",\"relationFromFields\":[\"mainProtocolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mainProtocolId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tvl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TvlRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TVLRecord\",\"nativeType\":null,\"relationName\":\"OpportunityToTVLRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AprRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AprRecord\",\"nativeType\":null,\"relationName\":\"AprRecordToOpportunity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dailyRewards\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DailyRewardsRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DailyRewardsRecord\",\"nativeType\":null,\"relationName\":\"DailyRewardsRecordToOpportunity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastCampaignCreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manualOverrides\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"OpportunityManualOverride\",\"nativeType\":null,\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"chainId\",\"type\",\"identifier\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"chainId\",\"type\",\"identifier\"]}],\"isGenerated\":false},\"Protocol\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MainOpportunities\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Opportunity\",\"nativeType\":null,\"relationName\":\"main\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Opportunities\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Opportunity\",\"nativeType\":null,\"relationName\":\"OpportunityToProtocol\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RewardBreakdown\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RewardBreakdown\",\"nativeType\":null,\"relationName\":\"ProtocolToRewardBreakdown\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Token\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Chain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"nativeType\":null,\"relationName\":\"ChainToToken\",\"relationFromFields\":[\"chainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decimals\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"displaySymbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isTest\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPoint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPreTGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isNative\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Opportunity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Opportunity\",\"nativeType\":null,\"relationName\":\"OpportunityToToken\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Campaigns\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"CampaignToToken\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reward\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reward\",\"nativeType\":null,\"relationName\":\"RewardToToken\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DumpTo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dump\",\"nativeType\":null,\"relationName\":\"to\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DumpFrom\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dump\",\"nativeType\":null,\"relationName\":\"from\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"chainId\",\"address\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"chainId\",\"address\"]}],\"isGenerated\":false},\"AprRecord\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cumulated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AprBreakdown\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AprBreakdown\",\"nativeType\":null,\"relationName\":\"AprBreakdownToAprRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Opportunity\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Opportunity\",\"nativeType\":null,\"relationName\":\"AprRecordToOpportunity\",\"relationFromFields\":[\"opportunityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opportunityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"opportunityId\",\"timestamp\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"opportunityId\",\"timestamp\"]}],\"isGenerated\":false},\"AprBreakdown\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AprType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AprRecord\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AprRecord\",\"nativeType\":null,\"relationName\":\"AprBreakdownToAprRecord\",\"relationFromFields\":[\"aprRecordId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aprRecordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TVLRecord\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TvlBreakdown\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TVLBreakdown\",\"nativeType\":null,\"relationName\":\"TVLBreakdownToTVLRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Opportunity\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Opportunity\",\"nativeType\":null,\"relationName\":\"OpportunityToTVLRecord\",\"relationFromFields\":[\"opportunityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opportunityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"opportunityId\",\"timestamp\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"opportunityId\",\"timestamp\"]}],\"isGenerated\":false},\"TVLBreakdown\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TvlType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TvlRecord\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TVLRecord\",\"nativeType\":null,\"relationName\":\"TVLBreakdownToTVLRecord\",\"relationFromFields\":[\"tvlRecordId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tvlRecordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DailyRewardsRecord\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DailyRewardsBreakdown\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DailyRewardsBreakdown\",\"nativeType\":null,\"relationName\":\"DailyRewardsBreakdownToDailyRewardsRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Opportunity\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Opportunity\",\"nativeType\":null,\"relationName\":\"DailyRewardsRecordToOpportunity\",\"relationFromFields\":[\"opportunityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opportunityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"opportunityId\",\"timestamp\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"opportunityId\",\"timestamp\"]}],\"isGenerated\":false},\"DailyRewardsBreakdown\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Campaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"CampaignToDailyRewardsBreakdown\",\"relationFromFields\":[\"campaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DailyRewardsRecord\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DailyRewardsRecord\",\"nativeType\":null,\"relationName\":\"DailyRewardsBreakdownToDailyRewardsRecord\",\"relationFromFields\":[\"dailyRewardsRecordId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dailyRewardsRecordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Rewards\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reward\",\"nativeType\":null,\"relationName\":\"RewardToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Blacklist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Blacklist\",\"nativeType\":null,\"relationName\":\"BlacklistToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CampaignsCreated\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"CampaignToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserComputedValue\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserComputedValue\",\"nativeType\":null,\"relationName\":\"UserToUserComputedValue\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Creator\",\"nativeType\":null,\"relationName\":\"CreatorToUser\",\"relationFromFields\":[\"creatorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Creator\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rebateFee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"CreatorToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reward\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MerklRoot\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MerklRoot\",\"nativeType\":null,\"relationName\":\"MerklRootToReward\",\"relationFromFields\":[\"root\"],\"relationToFields\":[\"root\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"root\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"RewardToUser\",\"relationFromFields\":[\"recipient\"],\"relationToFields\":[\"address\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipient\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RewardToken\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Token\",\"nativeType\":null,\"relationName\":\"RewardToToken\",\"relationFromFields\":[\"rewardTokenId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardTokenId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claimed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pending\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proofs\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Breakdown\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RewardBreakdown\",\"nativeType\":null,\"relationName\":\"RewardToRewardBreakdown\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"root\",\"recipient\",\"rewardTokenId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"root\",\"recipient\",\"rewardTokenId\"]}],\"isGenerated\":false},\"RewardBreakdown\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Protocol\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Protocol\",\"nativeType\":null,\"relationName\":\"ProtocolToRewardBreakdown\",\"relationFromFields\":[\"protocolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"protocolId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claimed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pending\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reward\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reward\",\"nativeType\":null,\"relationName\":\"RewardToRewardBreakdown\",\"relationFromFields\":[\"rewardId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Campaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"Campaign\",\"relationFromFields\":[\"campaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subCampaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SubCampaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campaign\",\"nativeType\":null,\"relationName\":\"SubCampaign\",\"relationFromFields\":[\"subCampaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"rewardId\",\"campaignId\",\"reason\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"rewardId\",\"campaignId\",\"reason\"]}],\"isGenerated\":false},\"MerklRoot\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"root\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Chain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"nativeType\":null,\"relationName\":\"ChainToMerklRoot\",\"relationFromFields\":[\"chainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Rewards\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reward\",\"nativeType\":null,\"relationName\":\"MerklRootToReward\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PriceSource\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceSourceMethod\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"args\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Blacklist\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Chain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"nativeType\":null,\"relationName\":\"BlacklistToChain\",\"relationFromFields\":[\"chainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poolAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"BlacklistToUser\",\"relationFromFields\":[\"userAddress\"],\"relationToFields\":[\"address\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arrestTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arrestDetails\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"chainId\",\"userAddress\",\"poolAddress\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"chainId\",\"userAddress\",\"poolAddress\"]}],\"isGenerated\":false},\"Dump\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Chain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"nativeType\":null,\"relationName\":\"ChainToDump\",\"relationFromFields\":[\"chainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FromToken\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Token\",\"nativeType\":null,\"relationName\":\"from\",\"relationFromFields\":[\"fromTokenId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fromTokenId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ToToken\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Token\",\"nativeType\":null,\"relationName\":\"to\",\"relationFromFields\":[\"toTokenId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toTokenId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"multisig\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipient\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amountIn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amountOut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datetime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"chainId\",\"fromTokenId\",\"toTokenId\",\"timestamp\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"chainId\",\"fromTokenId\",\"toTokenId\",\"timestamp\"]}],\"isGenerated\":false},\"Logged\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"LoggedEntityType\",\"nativeType\":null,\"default\":\"UNKNOWN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fetchAtBlock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caughtFromAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entityData\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"chainId\",\"address\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"chainId\",\"address\"]}],\"isGenerated\":false}},\"enums\":{\"LoggedEntityType\":{\"values\":[{\"name\":\"UNKNOWN\",\"dbName\":null},{\"name\":\"EULER_VAULT\",\"dbName\":null},{\"name\":\"UNISWAP_V4\",\"dbName\":null},{\"name\":\"COMPOUND_v2\",\"dbName\":null}],\"dbName\":null},\"RunStatus\":{\"values\":[{\"name\":\"PROCESSING\",\"dbName\":null},{\"name\":\"SUCCESS\",\"dbName\":null},{\"name\":\"FAILED\",\"dbName\":null},{\"name\":\"SKIPPED\",\"dbName\":null}],\"dbName\":null},\"OpportunityAction\":{\"values\":[{\"name\":\"POOL\",\"dbName\":null},{\"name\":\"HOLD\",\"dbName\":null},{\"name\":\"DROP\",\"dbName\":null},{\"name\":\"LEND\",\"dbName\":null},{\"name\":\"BORROW\",\"dbName\":null},{\"name\":\"LONG\",\"dbName\":null},{\"name\":\"SHORT\",\"dbName\":null},{\"name\":\"SWAP\",\"dbName\":null},{\"name\":\"INVALID\",\"dbName\":null}],\"dbName\":null},\"Status\":{\"values\":[{\"name\":\"NONE\",\"dbName\":null},{\"name\":\"PAST\",\"dbName\":null},{\"name\":\"LIVE\",\"dbName\":null},{\"name\":\"SOON\",\"dbName\":null}],\"dbName\":null},\"ExplorerType\":{\"values\":[{\"name\":\"ETHERSCAN\",\"dbName\":null},{\"name\":\"BLOCKSCOUT\",\"dbName\":null}],\"dbName\":null},\"AprType\":{\"values\":[{\"name\":\"CAMPAIGN\",\"dbName\":null},{\"name\":\"TOKEN\",\"dbName\":null},{\"name\":\"PROTOCOL\",\"dbName\":null}],\"dbName\":null},\"TvlType\":{\"values\":[{\"name\":\"TOKEN\",\"dbName\":null},{\"name\":\"PROTOCOL\",\"dbName\":null}],\"dbName\":null},\"PriceSourceMethod\":{\"values\":[{\"name\":\"COINGECKO\",\"dbName\":null},{\"name\":\"CONSTANT\",\"dbName\":null},{\"name\":\"EQUAL_TO\",\"dbName\":null},{\"name\":\"ERC4626\",\"dbName\":null},{\"name\":\"DEXSCREENER\",\"dbName\":null},{\"name\":\"INDEXCOOP\",\"dbName\":null},{\"name\":\"DEFILLAMA\",\"dbName\":null}],\"dbName\":null},\"CampaignManualOverride\":{\"values\":[{\"name\":\"opportunityId\",\"dbName\":null},{\"name\":\"creatorAddress\",\"dbName\":null}],\"dbName\":null},\"OpportunityManualOverride\":{\"values\":[{\"name\":\"name\",\"dbName\":null},{\"name\":\"depositUrl\",\"dbName\":null},{\"name\":\"explorerAddress\",\"dbName\":null},{\"name\":\"action\",\"dbName\":null},{\"name\":\"description\",\"dbName\":null},{\"name\":\"howToSteps\",\"dbName\":null}],\"dbName\":null},\"DistributionType\":{\"values\":[{\"name\":\"DUTCH_AUCTION\",\"dbName\":null},{\"name\":\"FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE\",\"dbName\":null},{\"name\":\"FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE\",\"dbName\":null},{\"name\":\"FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT\",\"dbName\":null},{\"name\":\"FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "database/api/.generated/libquery_engine-debian-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-arm64-openssl-3.0.x.so.node");
path.join(process.cwd(), "database/api/.generated/libquery_engine-linux-arm64-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-arm64-openssl-1.1.x.so.node");
path.join(process.cwd(), "database/api/.generated/libquery_engine-linux-arm64-openssl-1.1.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-musl-arm64-openssl-3.0.x.so.node");
path.join(process.cwd(), "database/api/.generated/libquery_engine-linux-musl-arm64-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "database/api/.generated/schema.prisma")
