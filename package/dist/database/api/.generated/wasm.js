
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
exports.DistributionType = exports.$Enums.DistributionType = {
  DUTCH_AUCTION: 'DUTCH_AUCTION',
  FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE: 'FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE',
  FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE: 'FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE',
  FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT: 'FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT',
  FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT: 'FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT'
};

exports.CampaignManualOverride = exports.$Enums.CampaignManualOverride = {
  opportunityId: 'opportunityId',
  creatorAddress: 'creatorAddress'
};

exports.RunStatus = exports.$Enums.RunStatus = {
  PROCESSING: 'PROCESSING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  SKIPPED: 'SKIPPED'
};

exports.ExplorerType = exports.$Enums.ExplorerType = {
  ETHERSCAN: 'ETHERSCAN',
  BLOCKSCOUT: 'BLOCKSCOUT'
};

exports.Status = exports.$Enums.Status = {
  NONE: 'NONE',
  PAST: 'PAST',
  LIVE: 'LIVE',
  SOON: 'SOON'
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

exports.OpportunityManualOverride = exports.$Enums.OpportunityManualOverride = {
  name: 'name',
  depositUrl: 'depositUrl',
  explorerAddress: 'explorerAddress',
  action: 'action',
  description: 'description',
  howToSteps: 'howToSteps'
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

exports.LoggedEntityType = exports.$Enums.LoggedEntityType = {
  UNKNOWN: 'UNKNOWN',
  EULER_VAULT: 'EULER_VAULT',
  UNISWAP_V4: 'UNISWAP_V4',
  COMPOUND_v2: 'COMPOUND_v2'
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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
