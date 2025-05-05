
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
      "value": "/home/runner/work/merkl-api/merkl-api/database/engine/.generated",
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
    "sourceFilePath": "/home/runner/work/merkl-api/merkl-api/database/engine/schema.prisma",
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
        "fromEnvVar": "DATABASE_ENGINE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  binaryTargets   = [\"native\", \"linux-arm64-openssl-3.0.x\", \"linux-arm64-openssl-1.1.x\", \"linux-musl-arm64-openssl-3.0.x\"]\n  output          = \".generated/\"\n  previewFeatures = [\"fullTextSearchPostgres\", \"relationJoins\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_ENGINE_URL\")\n}\n\nmodel TempLeaves {\n  chainId                Int\n  campaignId             String\n  recipient              String @db.Char(42)\n  reason                 String\n  rewardToken            String @db.Char(42)\n  amount                 String @default(\"0\")\n  lastProcessedTimestamp Int\n\n  @@id([chainId, campaignId, recipient, reason])\n  @@index([chainId])\n  @@index([campaignId])\n  @@index([recipient])\n  @@index([reason])\n  @@index([rewardToken])\n}\n\nmodel Leaves {\n  chainId                Int\n  root                   String\n  campaignId             String\n  recipient              String @db.Char(42)\n  reason                 String\n  rewardToken            String @db.Char(42)\n  amount                 String @default(\"0\")\n  lastProcessedTimestamp Int\n\n  @@id([chainId, campaignId, recipient, reason, root])\n  @@index([campaignId])\n  @@index([recipient])\n  @@index([reason])\n  @@index([rewardToken])\n}\n\nmodel Proofs {\n  chainId     Int\n  root        String\n  recipient   String   @db.Char(42)\n  rewardToken String   @db.Char(42)\n  proof       String[]\n\n  @@id([chainId, root, recipient, rewardToken])\n  @@index([chainId])\n  @@index([recipient])\n  @@index([rewardToken])\n  @@index([root])\n}\n\nmodel MerklRoots {\n  chainId   Int\n  epoch     Int\n  timestamp Int\n  root      String\n\n  @@id([chainId, root])\n  @@index([chainId])\n  @@index([epoch])\n  @@index([root])\n}\n\nmodel Campaigns {\n  chainId         Int // Chain of the campaign\n  computeChainId  Int    @default(0) // Chain where the compute is done. 0 means it's the same as chainId\n  index           Int // Index of the campaign\n  campaignId      String // hash ID of the distrib\n  creator         String @db.Char(42) // Address of the creator\n  campaignType    Int // Type of campaign --> univ3, token, univ4\n  campaignSubType Int // Subtype of campaign --> UniswapV3, PancakeSwapV3\n  rewardToken     String // Address of reward token\n  amount          String\n  startTimestamp  Int\n  endTimestamp    Int\n\n  // Will be useful for table joins\n  mainParameter String @db.Char(42) // TODO: confirm it'll always be an address\n\n  // Config of the distrib\n  // A JSON with all the configuration specific to the distribution type\n  campaignParameters Json\n\n  @@id([chainId, campaignId])\n  @@index([chainId])\n  @@index([rewardToken])\n  @@index([startTimestamp])\n  @@index([endTimestamp])\n  @@index([campaignType])\n  @@index([mainParameter])\n}\n\nmodel CampaignsToProcess {\n  chainId         Int // Chain of the campaign\n  computeChainId  Int    @default(0) // Chain where the compute is done. 0 means it's the same as chainId\n  index           Int // Index of the campaign\n  campaignId      String // hash ID of the distrib\n  creator         String @db.Char(42) // Address of the creator\n  campaignType    Int // Type of campaign --> univ3, token, univ4\n  campaignSubType Int // Subtype of campaign --> UniswapV3, PancakeSwapV3\n  rewardToken     String // Address of reward token\n  amount          String\n  startTimestamp  Int\n  endTimestamp    Int\n\n  // Will be useful for table joins\n  mainParameter String @db.Char(42) // TODO: confirm it'll always be an address\n\n  // Config of the distrib\n  // A JSON with all the configuration specific to the distribution type\n  campaignParameters     Json\n  lastProcessedTimestamp Int\n  processUntilTimestamp  Int\n  jobIndex               Int\n\n  @@id([chainId, jobIndex])\n  @@index([chainId])\n  @@index([jobIndex])\n}\n\nmodel Claims {\n  chainId     Int\n  recipient   String @db.Char(42)\n  campaignId  String\n  rewardToken String @db.Char(42)\n  reason      String\n  root        String\n  claimed     String @default(\"0\")\n  timestamp   Int\n\n  @@id([chainId, recipient, campaignId, rewardToken, reason])\n  @@index([chainId])\n  @@index([recipient])\n  @@index([campaignId])\n}\n\nmodel ClaimsOverTime {\n  chainId     Int\n  recipient   String @db.Char(42)\n  campaignId  String\n  rewardToken String @db.Char(42)\n  reason      String\n  root        String\n  claimed     String @default(\"0\")\n  timestamp   Int\n\n  @@id([chainId, recipient, campaignId, rewardToken, reason, timestamp])\n  @@index([chainId])\n  @@index([recipient])\n  @@index([campaignId])\n  @@index([timestamp])\n}\n\nmodel ALMs {\n  chainId        Int\n  campaignId     String // hash ID of the distrib\n  name           String\n  type           String\n  address        String @db.Char(42)\n  target         String @db.Char(42)\n  owner          String @db.Char(42)\n  underlyingPool String @db.Char(42)\n\n  @@id([chainId, campaignId, address])\n}\n\nmodel ERC20Holders {\n  chainId     Int\n  token       String   @db.Char(42)\n  holders     String[] @db.Char(42)\n  blockNumber Int\n\n  @@id([chainId, token])\n}\n\nmodel Tokens {\n  chainId  Int\n  address  String @db.Char(42)\n  symbol   String\n  decimals Int\n\n  @@id([chainId, address])\n}\n\nmodel StateSave {\n  id          String\n  blockNumber Int\n  state       Json\n\n  @@id([id, blockNumber])\n}\n\nmodel Nodes {\n  id                  String @id\n  chainId             Int\n  nodeType            String\n  recipient           String\n  nodesSourceId       String\n  creationBlockNumber Int\n  metadata            Json?\n\n  // Solution for redundancy \n  // Many-to-one relationship\n  NodesSources NodesSources @relation(fields: [nodesSourceId], references: [id], onDelete: Cascade)\n\n  // Deleted nodeType because want to have only one nodeType per recipient\n  @@unique([chainId, recipient])\n  // Indexes for faster queries\n  @@index([chainId])\n  @@index([nodeType])\n  @@index([recipient])\n}\n\nmodel NodesSources {\n  id                     String   @id\n  lastFetchedBlockNumber Int\n  nodeType               String\n  chainId                Int\n  source                 String   @db.Char(42)\n  topics                 String[]\n\n  // We could add a count of nodes to know if we deleted some\n  // One-to-many relationship back to Nodes\n  nodes Nodes[]\n\n  // Unique constraint to ensure no duplicate blocks for the same nodeType\n  @@unique([chainId, source, topics])\n  // Indexes for faster queries\n  @@index([nodeType])\n  @@index([chainId])\n  @@index([source])\n}\n\nmodel CampaignCreators {\n  address String @db.Char(42)\n  tags    String @default(\"\")\n\n  @@id([address])\n}\n",
  "inlineSchemaHash": "01a819efa19c1b071b5fa16b2d5a7d6aa4eab197c344f085b5cd6186f72dbb9a",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "database/engine/.generated",
    "engine/.generated",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"TempLeaves\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipient\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastProcessedTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"campaignId\",\"recipient\",\"reason\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Leaves\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"root\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipient\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastProcessedTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"campaignId\",\"recipient\",\"reason\",\"root\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Proofs\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"root\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipient\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proof\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"root\",\"recipient\",\"rewardToken\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MerklRoots\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"root\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"root\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Campaigns\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"computeChainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignSubType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mainParameter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignParameters\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"campaignId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CampaignsToProcess\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"computeChainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignSubType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mainParameter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignParameters\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastProcessedTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"processUntilTimestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"jobIndex\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Claims\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipient\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"root\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claimed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"recipient\",\"campaignId\",\"rewardToken\",\"reason\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ClaimsOverTime\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipient\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"root\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claimed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"recipient\",\"campaignId\",\"rewardToken\",\"reason\",\"timestamp\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ALMs\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"target\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"underlyingPool\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"campaignId\",\"address\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ERC20Holders\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"holders\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blockNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"token\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tokens\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decimals\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"chainId\",\"address\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StateSave\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blockNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id\",\"blockNumber\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Nodes\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nodeType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipient\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nodesSourceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creationBlockNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NodesSources\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NodesSources\",\"nativeType\":null,\"relationName\":\"NodesToNodesSources\",\"relationFromFields\":[\"nodesSourceId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"chainId\",\"recipient\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"chainId\",\"recipient\"]}],\"isGenerated\":false},\"NodesSources\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastFetchedBlockNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nodeType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"topics\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nodes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Nodes\",\"nativeType\":null,\"relationName\":\"NodesToNodesSources\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"chainId\",\"source\",\"topics\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"chainId\",\"source\",\"topics\"]}],\"isGenerated\":false},\"CampaignCreators\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"42\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"address\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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
path.join(process.cwd(), "database/engine/.generated/libquery_engine-debian-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-arm64-openssl-3.0.x.so.node");
path.join(process.cwd(), "database/engine/.generated/libquery_engine-linux-arm64-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-arm64-openssl-1.1.x.so.node");
path.join(process.cwd(), "database/engine/.generated/libquery_engine-linux-arm64-openssl-1.1.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-musl-arm64-openssl-3.0.x.so.node");
path.join(process.cwd(), "database/engine/.generated/libquery_engine-linux-musl-arm64-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "database/engine/.generated/schema.prisma")
