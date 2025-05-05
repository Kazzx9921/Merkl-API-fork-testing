
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

exports.Prisma.TempLeavesScalarFieldEnum = {
  chainId: 'chainId',
  campaignId: 'campaignId',
  recipient: 'recipient',
  reason: 'reason',
  rewardToken: 'rewardToken',
  amount: 'amount',
  lastProcessedTimestamp: 'lastProcessedTimestamp'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.LeavesScalarFieldEnum = {
  chainId: 'chainId',
  root: 'root',
  campaignId: 'campaignId',
  recipient: 'recipient',
  reason: 'reason',
  rewardToken: 'rewardToken',
  amount: 'amount',
  lastProcessedTimestamp: 'lastProcessedTimestamp'
};

exports.Prisma.ProofsScalarFieldEnum = {
  chainId: 'chainId',
  root: 'root',
  recipient: 'recipient',
  rewardToken: 'rewardToken',
  proof: 'proof'
};

exports.Prisma.MerklRootsScalarFieldEnum = {
  chainId: 'chainId',
  epoch: 'epoch',
  timestamp: 'timestamp',
  root: 'root'
};

exports.Prisma.CampaignsScalarFieldEnum = {
  chainId: 'chainId',
  computeChainId: 'computeChainId',
  index: 'index',
  campaignId: 'campaignId',
  creator: 'creator',
  campaignType: 'campaignType',
  campaignSubType: 'campaignSubType',
  rewardToken: 'rewardToken',
  amount: 'amount',
  startTimestamp: 'startTimestamp',
  endTimestamp: 'endTimestamp',
  mainParameter: 'mainParameter',
  campaignParameters: 'campaignParameters'
};

exports.Prisma.CampaignsToProcessScalarFieldEnum = {
  chainId: 'chainId',
  computeChainId: 'computeChainId',
  index: 'index',
  campaignId: 'campaignId',
  creator: 'creator',
  campaignType: 'campaignType',
  campaignSubType: 'campaignSubType',
  rewardToken: 'rewardToken',
  amount: 'amount',
  startTimestamp: 'startTimestamp',
  endTimestamp: 'endTimestamp',
  mainParameter: 'mainParameter',
  campaignParameters: 'campaignParameters',
  lastProcessedTimestamp: 'lastProcessedTimestamp',
  processUntilTimestamp: 'processUntilTimestamp',
  jobIndex: 'jobIndex'
};

exports.Prisma.ClaimsScalarFieldEnum = {
  chainId: 'chainId',
  recipient: 'recipient',
  campaignId: 'campaignId',
  rewardToken: 'rewardToken',
  reason: 'reason',
  root: 'root',
  claimed: 'claimed',
  timestamp: 'timestamp'
};

exports.Prisma.ClaimsOverTimeScalarFieldEnum = {
  chainId: 'chainId',
  recipient: 'recipient',
  campaignId: 'campaignId',
  rewardToken: 'rewardToken',
  reason: 'reason',
  root: 'root',
  claimed: 'claimed',
  timestamp: 'timestamp'
};

exports.Prisma.ALMsScalarFieldEnum = {
  chainId: 'chainId',
  campaignId: 'campaignId',
  name: 'name',
  type: 'type',
  address: 'address',
  target: 'target',
  owner: 'owner',
  underlyingPool: 'underlyingPool'
};

exports.Prisma.ERC20HoldersScalarFieldEnum = {
  chainId: 'chainId',
  token: 'token',
  holders: 'holders',
  blockNumber: 'blockNumber'
};

exports.Prisma.TokensScalarFieldEnum = {
  chainId: 'chainId',
  address: 'address',
  symbol: 'symbol',
  decimals: 'decimals'
};

exports.Prisma.StateSaveScalarFieldEnum = {
  id: 'id',
  blockNumber: 'blockNumber',
  state: 'state'
};

exports.Prisma.NodesScalarFieldEnum = {
  id: 'id',
  chainId: 'chainId',
  nodeType: 'nodeType',
  recipient: 'recipient',
  nodesSourceId: 'nodesSourceId',
  creationBlockNumber: 'creationBlockNumber',
  metadata: 'metadata'
};

exports.Prisma.NodesSourcesScalarFieldEnum = {
  id: 'id',
  lastFetchedBlockNumber: 'lastFetchedBlockNumber',
  nodeType: 'nodeType',
  chainId: 'chainId',
  source: 'source',
  topics: 'topics'
};

exports.Prisma.CampaignCreatorsScalarFieldEnum = {
  address: 'address',
  tags: 'tags'
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

exports.Prisma.TempLeavesOrderByRelevanceFieldEnum = {
  campaignId: 'campaignId',
  recipient: 'recipient',
  reason: 'reason',
  rewardToken: 'rewardToken',
  amount: 'amount'
};

exports.Prisma.LeavesOrderByRelevanceFieldEnum = {
  root: 'root',
  campaignId: 'campaignId',
  recipient: 'recipient',
  reason: 'reason',
  rewardToken: 'rewardToken',
  amount: 'amount'
};

exports.Prisma.ProofsOrderByRelevanceFieldEnum = {
  root: 'root',
  recipient: 'recipient',
  rewardToken: 'rewardToken',
  proof: 'proof'
};

exports.Prisma.MerklRootsOrderByRelevanceFieldEnum = {
  root: 'root'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.CampaignsOrderByRelevanceFieldEnum = {
  campaignId: 'campaignId',
  creator: 'creator',
  rewardToken: 'rewardToken',
  amount: 'amount',
  mainParameter: 'mainParameter'
};

exports.Prisma.CampaignsToProcessOrderByRelevanceFieldEnum = {
  campaignId: 'campaignId',
  creator: 'creator',
  rewardToken: 'rewardToken',
  amount: 'amount',
  mainParameter: 'mainParameter'
};

exports.Prisma.ClaimsOrderByRelevanceFieldEnum = {
  recipient: 'recipient',
  campaignId: 'campaignId',
  rewardToken: 'rewardToken',
  reason: 'reason',
  root: 'root',
  claimed: 'claimed'
};

exports.Prisma.ClaimsOverTimeOrderByRelevanceFieldEnum = {
  recipient: 'recipient',
  campaignId: 'campaignId',
  rewardToken: 'rewardToken',
  reason: 'reason',
  root: 'root',
  claimed: 'claimed'
};

exports.Prisma.ALMsOrderByRelevanceFieldEnum = {
  campaignId: 'campaignId',
  name: 'name',
  type: 'type',
  address: 'address',
  target: 'target',
  owner: 'owner',
  underlyingPool: 'underlyingPool'
};

exports.Prisma.ERC20HoldersOrderByRelevanceFieldEnum = {
  token: 'token',
  holders: 'holders'
};

exports.Prisma.TokensOrderByRelevanceFieldEnum = {
  address: 'address',
  symbol: 'symbol'
};

exports.Prisma.StateSaveOrderByRelevanceFieldEnum = {
  id: 'id'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.NodesOrderByRelevanceFieldEnum = {
  id: 'id',
  nodeType: 'nodeType',
  recipient: 'recipient',
  nodesSourceId: 'nodesSourceId'
};

exports.Prisma.NodesSourcesOrderByRelevanceFieldEnum = {
  id: 'id',
  nodeType: 'nodeType',
  source: 'source',
  topics: 'topics'
};

exports.Prisma.CampaignCreatorsOrderByRelevanceFieldEnum = {
  address: 'address',
  tags: 'tags'
};


exports.Prisma.ModelName = {
  TempLeaves: 'TempLeaves',
  Leaves: 'Leaves',
  Proofs: 'Proofs',
  MerklRoots: 'MerklRoots',
  Campaigns: 'Campaigns',
  CampaignsToProcess: 'CampaignsToProcess',
  Claims: 'Claims',
  ClaimsOverTime: 'ClaimsOverTime',
  ALMs: 'ALMs',
  ERC20Holders: 'ERC20Holders',
  Tokens: 'Tokens',
  StateSave: 'StateSave',
  Nodes: 'Nodes',
  NodesSources: 'NodesSources',
  CampaignCreators: 'CampaignCreators'
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
