
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TempLeaves
 * 
 */
export type TempLeaves = $Result.DefaultSelection<Prisma.$TempLeavesPayload>
/**
 * Model Leaves
 * 
 */
export type Leaves = $Result.DefaultSelection<Prisma.$LeavesPayload>
/**
 * Model Proofs
 * 
 */
export type Proofs = $Result.DefaultSelection<Prisma.$ProofsPayload>
/**
 * Model MerklRoots
 * 
 */
export type MerklRoots = $Result.DefaultSelection<Prisma.$MerklRootsPayload>
/**
 * Model Campaigns
 * 
 */
export type Campaigns = $Result.DefaultSelection<Prisma.$CampaignsPayload>
/**
 * Model CampaignsToProcess
 * 
 */
export type CampaignsToProcess = $Result.DefaultSelection<Prisma.$CampaignsToProcessPayload>
/**
 * Model Claims
 * 
 */
export type Claims = $Result.DefaultSelection<Prisma.$ClaimsPayload>
/**
 * Model ClaimsOverTime
 * 
 */
export type ClaimsOverTime = $Result.DefaultSelection<Prisma.$ClaimsOverTimePayload>
/**
 * Model ALMs
 * 
 */
export type ALMs = $Result.DefaultSelection<Prisma.$ALMsPayload>
/**
 * Model ERC20Holders
 * 
 */
export type ERC20Holders = $Result.DefaultSelection<Prisma.$ERC20HoldersPayload>
/**
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>
/**
 * Model StateSave
 * 
 */
export type StateSave = $Result.DefaultSelection<Prisma.$StateSavePayload>
/**
 * Model Nodes
 * 
 */
export type Nodes = $Result.DefaultSelection<Prisma.$NodesPayload>
/**
 * Model NodesSources
 * 
 */
export type NodesSources = $Result.DefaultSelection<Prisma.$NodesSourcesPayload>
/**
 * Model CampaignCreators
 * 
 */
export type CampaignCreators = $Result.DefaultSelection<Prisma.$CampaignCreatorsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TempLeaves
 * const tempLeaves = await prisma.tempLeaves.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TempLeaves
   * const tempLeaves = await prisma.tempLeaves.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.tempLeaves`: Exposes CRUD operations for the **TempLeaves** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempLeaves
    * const tempLeaves = await prisma.tempLeaves.findMany()
    * ```
    */
  get tempLeaves(): Prisma.TempLeavesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaves`: Exposes CRUD operations for the **Leaves** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaves
    * const leaves = await prisma.leaves.findMany()
    * ```
    */
  get leaves(): Prisma.LeavesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proofs`: Exposes CRUD operations for the **Proofs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proofs
    * const proofs = await prisma.proofs.findMany()
    * ```
    */
  get proofs(): Prisma.ProofsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.merklRoots`: Exposes CRUD operations for the **MerklRoots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MerklRoots
    * const merklRoots = await prisma.merklRoots.findMany()
    * ```
    */
  get merklRoots(): Prisma.MerklRootsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaigns`: Exposes CRUD operations for the **Campaigns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaigns.findMany()
    * ```
    */
  get campaigns(): Prisma.CampaignsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignsToProcess`: Exposes CRUD operations for the **CampaignsToProcess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignsToProcesses
    * const campaignsToProcesses = await prisma.campaignsToProcess.findMany()
    * ```
    */
  get campaignsToProcess(): Prisma.CampaignsToProcessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claims`: Exposes CRUD operations for the **Claims** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claims.findMany()
    * ```
    */
  get claims(): Prisma.ClaimsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claimsOverTime`: Exposes CRUD operations for the **ClaimsOverTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClaimsOverTimes
    * const claimsOverTimes = await prisma.claimsOverTime.findMany()
    * ```
    */
  get claimsOverTime(): Prisma.ClaimsOverTimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aLMs`: Exposes CRUD operations for the **ALMs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ALMs
    * const aLMs = await prisma.aLMs.findMany()
    * ```
    */
  get aLMs(): Prisma.ALMsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eRC20Holders`: Exposes CRUD operations for the **ERC20Holders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ERC20Holders
    * const eRC20Holders = await prisma.eRC20Holders.findMany()
    * ```
    */
  get eRC20Holders(): Prisma.ERC20HoldersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stateSave`: Exposes CRUD operations for the **StateSave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StateSaves
    * const stateSaves = await prisma.stateSave.findMany()
    * ```
    */
  get stateSave(): Prisma.StateSaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nodes`: Exposes CRUD operations for the **Nodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nodes
    * const nodes = await prisma.nodes.findMany()
    * ```
    */
  get nodes(): Prisma.NodesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nodesSources`: Exposes CRUD operations for the **NodesSources** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NodesSources
    * const nodesSources = await prisma.nodesSources.findMany()
    * ```
    */
  get nodesSources(): Prisma.NodesSourcesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignCreators`: Exposes CRUD operations for the **CampaignCreators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignCreators
    * const campaignCreators = await prisma.campaignCreators.findMany()
    * ```
    */
  get campaignCreators(): Prisma.CampaignCreatorsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "tempLeaves" | "leaves" | "proofs" | "merklRoots" | "campaigns" | "campaignsToProcess" | "claims" | "claimsOverTime" | "aLMs" | "eRC20Holders" | "tokens" | "stateSave" | "nodes" | "nodesSources" | "campaignCreators"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TempLeaves: {
        payload: Prisma.$TempLeavesPayload<ExtArgs>
        fields: Prisma.TempLeavesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TempLeavesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TempLeavesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload>
          }
          findFirst: {
            args: Prisma.TempLeavesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TempLeavesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload>
          }
          findMany: {
            args: Prisma.TempLeavesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload>[]
          }
          create: {
            args: Prisma.TempLeavesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload>
          }
          createMany: {
            args: Prisma.TempLeavesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TempLeavesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload>[]
          }
          delete: {
            args: Prisma.TempLeavesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload>
          }
          update: {
            args: Prisma.TempLeavesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload>
          }
          deleteMany: {
            args: Prisma.TempLeavesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TempLeavesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TempLeavesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload>[]
          }
          upsert: {
            args: Prisma.TempLeavesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempLeavesPayload>
          }
          aggregate: {
            args: Prisma.TempLeavesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTempLeaves>
          }
          groupBy: {
            args: Prisma.TempLeavesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TempLeavesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TempLeavesCountArgs<ExtArgs>
            result: $Utils.Optional<TempLeavesCountAggregateOutputType> | number
          }
        }
      }
      Leaves: {
        payload: Prisma.$LeavesPayload<ExtArgs>
        fields: Prisma.LeavesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeavesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeavesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload>
          }
          findFirst: {
            args: Prisma.LeavesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeavesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload>
          }
          findMany: {
            args: Prisma.LeavesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload>[]
          }
          create: {
            args: Prisma.LeavesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload>
          }
          createMany: {
            args: Prisma.LeavesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeavesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload>[]
          }
          delete: {
            args: Prisma.LeavesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload>
          }
          update: {
            args: Prisma.LeavesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload>
          }
          deleteMany: {
            args: Prisma.LeavesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeavesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeavesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload>[]
          }
          upsert: {
            args: Prisma.LeavesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavesPayload>
          }
          aggregate: {
            args: Prisma.LeavesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaves>
          }
          groupBy: {
            args: Prisma.LeavesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeavesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeavesCountArgs<ExtArgs>
            result: $Utils.Optional<LeavesCountAggregateOutputType> | number
          }
        }
      }
      Proofs: {
        payload: Prisma.$ProofsPayload<ExtArgs>
        fields: Prisma.ProofsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProofsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProofsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload>
          }
          findFirst: {
            args: Prisma.ProofsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProofsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload>
          }
          findMany: {
            args: Prisma.ProofsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload>[]
          }
          create: {
            args: Prisma.ProofsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload>
          }
          createMany: {
            args: Prisma.ProofsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProofsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload>[]
          }
          delete: {
            args: Prisma.ProofsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload>
          }
          update: {
            args: Prisma.ProofsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload>
          }
          deleteMany: {
            args: Prisma.ProofsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProofsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProofsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload>[]
          }
          upsert: {
            args: Prisma.ProofsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofsPayload>
          }
          aggregate: {
            args: Prisma.ProofsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProofs>
          }
          groupBy: {
            args: Prisma.ProofsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProofsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProofsCountArgs<ExtArgs>
            result: $Utils.Optional<ProofsCountAggregateOutputType> | number
          }
        }
      }
      MerklRoots: {
        payload: Prisma.$MerklRootsPayload<ExtArgs>
        fields: Prisma.MerklRootsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerklRootsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerklRootsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload>
          }
          findFirst: {
            args: Prisma.MerklRootsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerklRootsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload>
          }
          findMany: {
            args: Prisma.MerklRootsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload>[]
          }
          create: {
            args: Prisma.MerklRootsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload>
          }
          createMany: {
            args: Prisma.MerklRootsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerklRootsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload>[]
          }
          delete: {
            args: Prisma.MerklRootsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload>
          }
          update: {
            args: Prisma.MerklRootsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload>
          }
          deleteMany: {
            args: Prisma.MerklRootsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerklRootsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MerklRootsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload>[]
          }
          upsert: {
            args: Prisma.MerklRootsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerklRootsPayload>
          }
          aggregate: {
            args: Prisma.MerklRootsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerklRoots>
          }
          groupBy: {
            args: Prisma.MerklRootsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerklRootsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerklRootsCountArgs<ExtArgs>
            result: $Utils.Optional<MerklRootsCountAggregateOutputType> | number
          }
        }
      }
      Campaigns: {
        payload: Prisma.$CampaignsPayload<ExtArgs>
        fields: Prisma.CampaignsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          findFirst: {
            args: Prisma.CampaignsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          findMany: {
            args: Prisma.CampaignsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>[]
          }
          create: {
            args: Prisma.CampaignsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          createMany: {
            args: Prisma.CampaignsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>[]
          }
          delete: {
            args: Prisma.CampaignsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          update: {
            args: Prisma.CampaignsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          deleteMany: {
            args: Prisma.CampaignsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>[]
          }
          upsert: {
            args: Prisma.CampaignsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          aggregate: {
            args: Prisma.CampaignsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaigns>
          }
          groupBy: {
            args: Prisma.CampaignsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignsCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignsCountAggregateOutputType> | number
          }
        }
      }
      CampaignsToProcess: {
        payload: Prisma.$CampaignsToProcessPayload<ExtArgs>
        fields: Prisma.CampaignsToProcessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignsToProcessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignsToProcessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload>
          }
          findFirst: {
            args: Prisma.CampaignsToProcessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignsToProcessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload>
          }
          findMany: {
            args: Prisma.CampaignsToProcessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload>[]
          }
          create: {
            args: Prisma.CampaignsToProcessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload>
          }
          createMany: {
            args: Prisma.CampaignsToProcessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignsToProcessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload>[]
          }
          delete: {
            args: Prisma.CampaignsToProcessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload>
          }
          update: {
            args: Prisma.CampaignsToProcessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload>
          }
          deleteMany: {
            args: Prisma.CampaignsToProcessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignsToProcessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignsToProcessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload>[]
          }
          upsert: {
            args: Prisma.CampaignsToProcessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsToProcessPayload>
          }
          aggregate: {
            args: Prisma.CampaignsToProcessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignsToProcess>
          }
          groupBy: {
            args: Prisma.CampaignsToProcessGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignsToProcessGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignsToProcessCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignsToProcessCountAggregateOutputType> | number
          }
        }
      }
      Claims: {
        payload: Prisma.$ClaimsPayload<ExtArgs>
        fields: Prisma.ClaimsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload>
          }
          findFirst: {
            args: Prisma.ClaimsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload>
          }
          findMany: {
            args: Prisma.ClaimsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload>[]
          }
          create: {
            args: Prisma.ClaimsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload>
          }
          createMany: {
            args: Prisma.ClaimsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload>[]
          }
          delete: {
            args: Prisma.ClaimsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload>
          }
          update: {
            args: Prisma.ClaimsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload>
          }
          deleteMany: {
            args: Prisma.ClaimsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaimsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload>[]
          }
          upsert: {
            args: Prisma.ClaimsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsPayload>
          }
          aggregate: {
            args: Prisma.ClaimsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaims>
          }
          groupBy: {
            args: Prisma.ClaimsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimsCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimsCountAggregateOutputType> | number
          }
        }
      }
      ClaimsOverTime: {
        payload: Prisma.$ClaimsOverTimePayload<ExtArgs>
        fields: Prisma.ClaimsOverTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimsOverTimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimsOverTimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload>
          }
          findFirst: {
            args: Prisma.ClaimsOverTimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimsOverTimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload>
          }
          findMany: {
            args: Prisma.ClaimsOverTimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload>[]
          }
          create: {
            args: Prisma.ClaimsOverTimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload>
          }
          createMany: {
            args: Prisma.ClaimsOverTimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimsOverTimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload>[]
          }
          delete: {
            args: Prisma.ClaimsOverTimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload>
          }
          update: {
            args: Prisma.ClaimsOverTimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload>
          }
          deleteMany: {
            args: Prisma.ClaimsOverTimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimsOverTimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaimsOverTimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload>[]
          }
          upsert: {
            args: Prisma.ClaimsOverTimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimsOverTimePayload>
          }
          aggregate: {
            args: Prisma.ClaimsOverTimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaimsOverTime>
          }
          groupBy: {
            args: Prisma.ClaimsOverTimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimsOverTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimsOverTimeCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimsOverTimeCountAggregateOutputType> | number
          }
        }
      }
      ALMs: {
        payload: Prisma.$ALMsPayload<ExtArgs>
        fields: Prisma.ALMsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ALMsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ALMsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload>
          }
          findFirst: {
            args: Prisma.ALMsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ALMsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload>
          }
          findMany: {
            args: Prisma.ALMsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload>[]
          }
          create: {
            args: Prisma.ALMsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload>
          }
          createMany: {
            args: Prisma.ALMsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ALMsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload>[]
          }
          delete: {
            args: Prisma.ALMsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload>
          }
          update: {
            args: Prisma.ALMsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload>
          }
          deleteMany: {
            args: Prisma.ALMsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ALMsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ALMsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload>[]
          }
          upsert: {
            args: Prisma.ALMsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALMsPayload>
          }
          aggregate: {
            args: Prisma.ALMsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateALMs>
          }
          groupBy: {
            args: Prisma.ALMsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ALMsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ALMsCountArgs<ExtArgs>
            result: $Utils.Optional<ALMsCountAggregateOutputType> | number
          }
        }
      }
      ERC20Holders: {
        payload: Prisma.$ERC20HoldersPayload<ExtArgs>
        fields: Prisma.ERC20HoldersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ERC20HoldersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ERC20HoldersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload>
          }
          findFirst: {
            args: Prisma.ERC20HoldersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ERC20HoldersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload>
          }
          findMany: {
            args: Prisma.ERC20HoldersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload>[]
          }
          create: {
            args: Prisma.ERC20HoldersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload>
          }
          createMany: {
            args: Prisma.ERC20HoldersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ERC20HoldersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload>[]
          }
          delete: {
            args: Prisma.ERC20HoldersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload>
          }
          update: {
            args: Prisma.ERC20HoldersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload>
          }
          deleteMany: {
            args: Prisma.ERC20HoldersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ERC20HoldersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ERC20HoldersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload>[]
          }
          upsert: {
            args: Prisma.ERC20HoldersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ERC20HoldersPayload>
          }
          aggregate: {
            args: Prisma.ERC20HoldersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateERC20Holders>
          }
          groupBy: {
            args: Prisma.ERC20HoldersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ERC20HoldersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ERC20HoldersCountArgs<ExtArgs>
            result: $Utils.Optional<ERC20HoldersCountAggregateOutputType> | number
          }
        }
      }
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      StateSave: {
        payload: Prisma.$StateSavePayload<ExtArgs>
        fields: Prisma.StateSaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateSaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateSaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload>
          }
          findFirst: {
            args: Prisma.StateSaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateSaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload>
          }
          findMany: {
            args: Prisma.StateSaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload>[]
          }
          create: {
            args: Prisma.StateSaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload>
          }
          createMany: {
            args: Prisma.StateSaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateSaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload>[]
          }
          delete: {
            args: Prisma.StateSaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload>
          }
          update: {
            args: Prisma.StateSaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload>
          }
          deleteMany: {
            args: Prisma.StateSaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateSaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateSaveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload>[]
          }
          upsert: {
            args: Prisma.StateSaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateSavePayload>
          }
          aggregate: {
            args: Prisma.StateSaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStateSave>
          }
          groupBy: {
            args: Prisma.StateSaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateSaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateSaveCountArgs<ExtArgs>
            result: $Utils.Optional<StateSaveCountAggregateOutputType> | number
          }
        }
      }
      Nodes: {
        payload: Prisma.$NodesPayload<ExtArgs>
        fields: Prisma.NodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload>
          }
          findFirst: {
            args: Prisma.NodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload>
          }
          findMany: {
            args: Prisma.NodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload>[]
          }
          create: {
            args: Prisma.NodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload>
          }
          createMany: {
            args: Prisma.NodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload>[]
          }
          delete: {
            args: Prisma.NodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload>
          }
          update: {
            args: Prisma.NodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload>
          }
          deleteMany: {
            args: Prisma.NodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload>[]
          }
          upsert: {
            args: Prisma.NodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesPayload>
          }
          aggregate: {
            args: Prisma.NodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNodes>
          }
          groupBy: {
            args: Prisma.NodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodesCountArgs<ExtArgs>
            result: $Utils.Optional<NodesCountAggregateOutputType> | number
          }
        }
      }
      NodesSources: {
        payload: Prisma.$NodesSourcesPayload<ExtArgs>
        fields: Prisma.NodesSourcesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodesSourcesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodesSourcesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload>
          }
          findFirst: {
            args: Prisma.NodesSourcesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodesSourcesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload>
          }
          findMany: {
            args: Prisma.NodesSourcesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload>[]
          }
          create: {
            args: Prisma.NodesSourcesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload>
          }
          createMany: {
            args: Prisma.NodesSourcesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodesSourcesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload>[]
          }
          delete: {
            args: Prisma.NodesSourcesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload>
          }
          update: {
            args: Prisma.NodesSourcesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload>
          }
          deleteMany: {
            args: Prisma.NodesSourcesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodesSourcesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodesSourcesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload>[]
          }
          upsert: {
            args: Prisma.NodesSourcesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodesSourcesPayload>
          }
          aggregate: {
            args: Prisma.NodesSourcesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNodesSources>
          }
          groupBy: {
            args: Prisma.NodesSourcesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodesSourcesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodesSourcesCountArgs<ExtArgs>
            result: $Utils.Optional<NodesSourcesCountAggregateOutputType> | number
          }
        }
      }
      CampaignCreators: {
        payload: Prisma.$CampaignCreatorsPayload<ExtArgs>
        fields: Prisma.CampaignCreatorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignCreatorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignCreatorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload>
          }
          findFirst: {
            args: Prisma.CampaignCreatorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignCreatorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload>
          }
          findMany: {
            args: Prisma.CampaignCreatorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload>[]
          }
          create: {
            args: Prisma.CampaignCreatorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload>
          }
          createMany: {
            args: Prisma.CampaignCreatorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreatorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload>[]
          }
          delete: {
            args: Prisma.CampaignCreatorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload>
          }
          update: {
            args: Prisma.CampaignCreatorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload>
          }
          deleteMany: {
            args: Prisma.CampaignCreatorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignCreatorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignCreatorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload>[]
          }
          upsert: {
            args: Prisma.CampaignCreatorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCreatorsPayload>
          }
          aggregate: {
            args: Prisma.CampaignCreatorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignCreators>
          }
          groupBy: {
            args: Prisma.CampaignCreatorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignCreatorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCreatorsCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCreatorsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tempLeaves?: TempLeavesOmit
    leaves?: LeavesOmit
    proofs?: ProofsOmit
    merklRoots?: MerklRootsOmit
    campaigns?: CampaignsOmit
    campaignsToProcess?: CampaignsToProcessOmit
    claims?: ClaimsOmit
    claimsOverTime?: ClaimsOverTimeOmit
    aLMs?: ALMsOmit
    eRC20Holders?: ERC20HoldersOmit
    tokens?: TokensOmit
    stateSave?: StateSaveOmit
    nodes?: NodesOmit
    nodesSources?: NodesSourcesOmit
    campaignCreators?: CampaignCreatorsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NodesSourcesCountOutputType
   */

  export type NodesSourcesCountOutputType = {
    nodes: number
  }

  export type NodesSourcesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | NodesSourcesCountOutputTypeCountNodesArgs
  }

  // Custom InputTypes
  /**
   * NodesSourcesCountOutputType without action
   */
  export type NodesSourcesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSourcesCountOutputType
     */
    select?: NodesSourcesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NodesSourcesCountOutputType without action
   */
  export type NodesSourcesCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TempLeaves
   */

  export type AggregateTempLeaves = {
    _count: TempLeavesCountAggregateOutputType | null
    _avg: TempLeavesAvgAggregateOutputType | null
    _sum: TempLeavesSumAggregateOutputType | null
    _min: TempLeavesMinAggregateOutputType | null
    _max: TempLeavesMaxAggregateOutputType | null
  }

  export type TempLeavesAvgAggregateOutputType = {
    chainId: number | null
    lastProcessedTimestamp: number | null
  }

  export type TempLeavesSumAggregateOutputType = {
    chainId: number | null
    lastProcessedTimestamp: number | null
  }

  export type TempLeavesMinAggregateOutputType = {
    chainId: number | null
    campaignId: string | null
    recipient: string | null
    reason: string | null
    rewardToken: string | null
    amount: string | null
    lastProcessedTimestamp: number | null
  }

  export type TempLeavesMaxAggregateOutputType = {
    chainId: number | null
    campaignId: string | null
    recipient: string | null
    reason: string | null
    rewardToken: string | null
    amount: string | null
    lastProcessedTimestamp: number | null
  }

  export type TempLeavesCountAggregateOutputType = {
    chainId: number
    campaignId: number
    recipient: number
    reason: number
    rewardToken: number
    amount: number
    lastProcessedTimestamp: number
    _all: number
  }


  export type TempLeavesAvgAggregateInputType = {
    chainId?: true
    lastProcessedTimestamp?: true
  }

  export type TempLeavesSumAggregateInputType = {
    chainId?: true
    lastProcessedTimestamp?: true
  }

  export type TempLeavesMinAggregateInputType = {
    chainId?: true
    campaignId?: true
    recipient?: true
    reason?: true
    rewardToken?: true
    amount?: true
    lastProcessedTimestamp?: true
  }

  export type TempLeavesMaxAggregateInputType = {
    chainId?: true
    campaignId?: true
    recipient?: true
    reason?: true
    rewardToken?: true
    amount?: true
    lastProcessedTimestamp?: true
  }

  export type TempLeavesCountAggregateInputType = {
    chainId?: true
    campaignId?: true
    recipient?: true
    reason?: true
    rewardToken?: true
    amount?: true
    lastProcessedTimestamp?: true
    _all?: true
  }

  export type TempLeavesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempLeaves to aggregate.
     */
    where?: TempLeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempLeaves to fetch.
     */
    orderBy?: TempLeavesOrderByWithRelationInput | TempLeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempLeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempLeaves
    **/
    _count?: true | TempLeavesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TempLeavesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TempLeavesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempLeavesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempLeavesMaxAggregateInputType
  }

  export type GetTempLeavesAggregateType<T extends TempLeavesAggregateArgs> = {
        [P in keyof T & keyof AggregateTempLeaves]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempLeaves[P]>
      : GetScalarType<T[P], AggregateTempLeaves[P]>
  }




  export type TempLeavesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempLeavesWhereInput
    orderBy?: TempLeavesOrderByWithAggregationInput | TempLeavesOrderByWithAggregationInput[]
    by: TempLeavesScalarFieldEnum[] | TempLeavesScalarFieldEnum
    having?: TempLeavesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempLeavesCountAggregateInputType | true
    _avg?: TempLeavesAvgAggregateInputType
    _sum?: TempLeavesSumAggregateInputType
    _min?: TempLeavesMinAggregateInputType
    _max?: TempLeavesMaxAggregateInputType
  }

  export type TempLeavesGroupByOutputType = {
    chainId: number
    campaignId: string
    recipient: string
    reason: string
    rewardToken: string
    amount: string
    lastProcessedTimestamp: number
    _count: TempLeavesCountAggregateOutputType | null
    _avg: TempLeavesAvgAggregateOutputType | null
    _sum: TempLeavesSumAggregateOutputType | null
    _min: TempLeavesMinAggregateOutputType | null
    _max: TempLeavesMaxAggregateOutputType | null
  }

  type GetTempLeavesGroupByPayload<T extends TempLeavesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempLeavesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempLeavesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempLeavesGroupByOutputType[P]>
            : GetScalarType<T[P], TempLeavesGroupByOutputType[P]>
        }
      >
    >


  export type TempLeavesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    campaignId?: boolean
    recipient?: boolean
    reason?: boolean
    rewardToken?: boolean
    amount?: boolean
    lastProcessedTimestamp?: boolean
  }, ExtArgs["result"]["tempLeaves"]>

  export type TempLeavesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    campaignId?: boolean
    recipient?: boolean
    reason?: boolean
    rewardToken?: boolean
    amount?: boolean
    lastProcessedTimestamp?: boolean
  }, ExtArgs["result"]["tempLeaves"]>

  export type TempLeavesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    campaignId?: boolean
    recipient?: boolean
    reason?: boolean
    rewardToken?: boolean
    amount?: boolean
    lastProcessedTimestamp?: boolean
  }, ExtArgs["result"]["tempLeaves"]>

  export type TempLeavesSelectScalar = {
    chainId?: boolean
    campaignId?: boolean
    recipient?: boolean
    reason?: boolean
    rewardToken?: boolean
    amount?: boolean
    lastProcessedTimestamp?: boolean
  }

  export type TempLeavesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "campaignId" | "recipient" | "reason" | "rewardToken" | "amount" | "lastProcessedTimestamp", ExtArgs["result"]["tempLeaves"]>

  export type $TempLeavesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TempLeaves"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      campaignId: string
      recipient: string
      reason: string
      rewardToken: string
      amount: string
      lastProcessedTimestamp: number
    }, ExtArgs["result"]["tempLeaves"]>
    composites: {}
  }

  type TempLeavesGetPayload<S extends boolean | null | undefined | TempLeavesDefaultArgs> = $Result.GetResult<Prisma.$TempLeavesPayload, S>

  type TempLeavesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TempLeavesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TempLeavesCountAggregateInputType | true
    }

  export interface TempLeavesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TempLeaves'], meta: { name: 'TempLeaves' } }
    /**
     * Find zero or one TempLeaves that matches the filter.
     * @param {TempLeavesFindUniqueArgs} args - Arguments to find a TempLeaves
     * @example
     * // Get one TempLeaves
     * const tempLeaves = await prisma.tempLeaves.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TempLeavesFindUniqueArgs>(args: SelectSubset<T, TempLeavesFindUniqueArgs<ExtArgs>>): Prisma__TempLeavesClient<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TempLeaves that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TempLeavesFindUniqueOrThrowArgs} args - Arguments to find a TempLeaves
     * @example
     * // Get one TempLeaves
     * const tempLeaves = await prisma.tempLeaves.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TempLeavesFindUniqueOrThrowArgs>(args: SelectSubset<T, TempLeavesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TempLeavesClient<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TempLeaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempLeavesFindFirstArgs} args - Arguments to find a TempLeaves
     * @example
     * // Get one TempLeaves
     * const tempLeaves = await prisma.tempLeaves.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TempLeavesFindFirstArgs>(args?: SelectSubset<T, TempLeavesFindFirstArgs<ExtArgs>>): Prisma__TempLeavesClient<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TempLeaves that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempLeavesFindFirstOrThrowArgs} args - Arguments to find a TempLeaves
     * @example
     * // Get one TempLeaves
     * const tempLeaves = await prisma.tempLeaves.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TempLeavesFindFirstOrThrowArgs>(args?: SelectSubset<T, TempLeavesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TempLeavesClient<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TempLeaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempLeavesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempLeaves
     * const tempLeaves = await prisma.tempLeaves.findMany()
     * 
     * // Get first 10 TempLeaves
     * const tempLeaves = await prisma.tempLeaves.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const tempLeavesWithChainIdOnly = await prisma.tempLeaves.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends TempLeavesFindManyArgs>(args?: SelectSubset<T, TempLeavesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TempLeaves.
     * @param {TempLeavesCreateArgs} args - Arguments to create a TempLeaves.
     * @example
     * // Create one TempLeaves
     * const TempLeaves = await prisma.tempLeaves.create({
     *   data: {
     *     // ... data to create a TempLeaves
     *   }
     * })
     * 
     */
    create<T extends TempLeavesCreateArgs>(args: SelectSubset<T, TempLeavesCreateArgs<ExtArgs>>): Prisma__TempLeavesClient<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TempLeaves.
     * @param {TempLeavesCreateManyArgs} args - Arguments to create many TempLeaves.
     * @example
     * // Create many TempLeaves
     * const tempLeaves = await prisma.tempLeaves.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TempLeavesCreateManyArgs>(args?: SelectSubset<T, TempLeavesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TempLeaves and returns the data saved in the database.
     * @param {TempLeavesCreateManyAndReturnArgs} args - Arguments to create many TempLeaves.
     * @example
     * // Create many TempLeaves
     * const tempLeaves = await prisma.tempLeaves.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TempLeaves and only return the `chainId`
     * const tempLeavesWithChainIdOnly = await prisma.tempLeaves.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TempLeavesCreateManyAndReturnArgs>(args?: SelectSubset<T, TempLeavesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TempLeaves.
     * @param {TempLeavesDeleteArgs} args - Arguments to delete one TempLeaves.
     * @example
     * // Delete one TempLeaves
     * const TempLeaves = await prisma.tempLeaves.delete({
     *   where: {
     *     // ... filter to delete one TempLeaves
     *   }
     * })
     * 
     */
    delete<T extends TempLeavesDeleteArgs>(args: SelectSubset<T, TempLeavesDeleteArgs<ExtArgs>>): Prisma__TempLeavesClient<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TempLeaves.
     * @param {TempLeavesUpdateArgs} args - Arguments to update one TempLeaves.
     * @example
     * // Update one TempLeaves
     * const tempLeaves = await prisma.tempLeaves.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TempLeavesUpdateArgs>(args: SelectSubset<T, TempLeavesUpdateArgs<ExtArgs>>): Prisma__TempLeavesClient<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TempLeaves.
     * @param {TempLeavesDeleteManyArgs} args - Arguments to filter TempLeaves to delete.
     * @example
     * // Delete a few TempLeaves
     * const { count } = await prisma.tempLeaves.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TempLeavesDeleteManyArgs>(args?: SelectSubset<T, TempLeavesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempLeavesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempLeaves
     * const tempLeaves = await prisma.tempLeaves.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TempLeavesUpdateManyArgs>(args: SelectSubset<T, TempLeavesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempLeaves and returns the data updated in the database.
     * @param {TempLeavesUpdateManyAndReturnArgs} args - Arguments to update many TempLeaves.
     * @example
     * // Update many TempLeaves
     * const tempLeaves = await prisma.tempLeaves.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TempLeaves and only return the `chainId`
     * const tempLeavesWithChainIdOnly = await prisma.tempLeaves.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TempLeavesUpdateManyAndReturnArgs>(args: SelectSubset<T, TempLeavesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TempLeaves.
     * @param {TempLeavesUpsertArgs} args - Arguments to update or create a TempLeaves.
     * @example
     * // Update or create a TempLeaves
     * const tempLeaves = await prisma.tempLeaves.upsert({
     *   create: {
     *     // ... data to create a TempLeaves
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempLeaves we want to update
     *   }
     * })
     */
    upsert<T extends TempLeavesUpsertArgs>(args: SelectSubset<T, TempLeavesUpsertArgs<ExtArgs>>): Prisma__TempLeavesClient<$Result.GetResult<Prisma.$TempLeavesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TempLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempLeavesCountArgs} args - Arguments to filter TempLeaves to count.
     * @example
     * // Count the number of TempLeaves
     * const count = await prisma.tempLeaves.count({
     *   where: {
     *     // ... the filter for the TempLeaves we want to count
     *   }
     * })
    **/
    count<T extends TempLeavesCountArgs>(
      args?: Subset<T, TempLeavesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempLeavesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempLeavesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TempLeavesAggregateArgs>(args: Subset<T, TempLeavesAggregateArgs>): Prisma.PrismaPromise<GetTempLeavesAggregateType<T>>

    /**
     * Group by TempLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempLeavesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TempLeavesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempLeavesGroupByArgs['orderBy'] }
        : { orderBy?: TempLeavesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TempLeavesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempLeavesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TempLeaves model
   */
  readonly fields: TempLeavesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TempLeaves.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TempLeavesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TempLeaves model
   */ 
  interface TempLeavesFieldRefs {
    readonly chainId: FieldRef<"TempLeaves", 'Int'>
    readonly campaignId: FieldRef<"TempLeaves", 'String'>
    readonly recipient: FieldRef<"TempLeaves", 'String'>
    readonly reason: FieldRef<"TempLeaves", 'String'>
    readonly rewardToken: FieldRef<"TempLeaves", 'String'>
    readonly amount: FieldRef<"TempLeaves", 'String'>
    readonly lastProcessedTimestamp: FieldRef<"TempLeaves", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TempLeaves findUnique
   */
  export type TempLeavesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * Filter, which TempLeaves to fetch.
     */
    where: TempLeavesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TempLeaves findUniqueOrThrow
   */
  export type TempLeavesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * Filter, which TempLeaves to fetch.
     */
    where: TempLeavesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TempLeaves findFirst
   */
  export type TempLeavesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * Filter, which TempLeaves to fetch.
     */
    where?: TempLeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempLeaves to fetch.
     */
    orderBy?: TempLeavesOrderByWithRelationInput | TempLeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempLeaves.
     */
    cursor?: TempLeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempLeaves.
     */
    distinct?: TempLeavesScalarFieldEnum | TempLeavesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TempLeaves findFirstOrThrow
   */
  export type TempLeavesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * Filter, which TempLeaves to fetch.
     */
    where?: TempLeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempLeaves to fetch.
     */
    orderBy?: TempLeavesOrderByWithRelationInput | TempLeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempLeaves.
     */
    cursor?: TempLeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempLeaves.
     */
    distinct?: TempLeavesScalarFieldEnum | TempLeavesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TempLeaves findMany
   */
  export type TempLeavesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * Filter, which TempLeaves to fetch.
     */
    where?: TempLeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempLeaves to fetch.
     */
    orderBy?: TempLeavesOrderByWithRelationInput | TempLeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempLeaves.
     */
    cursor?: TempLeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempLeaves.
     */
    skip?: number
    distinct?: TempLeavesScalarFieldEnum | TempLeavesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TempLeaves create
   */
  export type TempLeavesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * The data needed to create a TempLeaves.
     */
    data: XOR<TempLeavesCreateInput, TempLeavesUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TempLeaves createMany
   */
  export type TempLeavesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TempLeaves.
     */
    data: TempLeavesCreateManyInput | TempLeavesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TempLeaves createManyAndReturn
   */
  export type TempLeavesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * The data used to create many TempLeaves.
     */
    data: TempLeavesCreateManyInput | TempLeavesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TempLeaves update
   */
  export type TempLeavesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * The data needed to update a TempLeaves.
     */
    data: XOR<TempLeavesUpdateInput, TempLeavesUncheckedUpdateInput>
    /**
     * Choose, which TempLeaves to update.
     */
    where: TempLeavesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TempLeaves updateMany
   */
  export type TempLeavesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TempLeaves.
     */
    data: XOR<TempLeavesUpdateManyMutationInput, TempLeavesUncheckedUpdateManyInput>
    /**
     * Filter which TempLeaves to update
     */
    where?: TempLeavesWhereInput
    /**
     * Limit how many TempLeaves to update.
     */
    limit?: number
  }

  /**
   * TempLeaves updateManyAndReturn
   */
  export type TempLeavesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * The data used to update TempLeaves.
     */
    data: XOR<TempLeavesUpdateManyMutationInput, TempLeavesUncheckedUpdateManyInput>
    /**
     * Filter which TempLeaves to update
     */
    where?: TempLeavesWhereInput
    /**
     * Limit how many TempLeaves to update.
     */
    limit?: number
  }

  /**
   * TempLeaves upsert
   */
  export type TempLeavesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * The filter to search for the TempLeaves to update in case it exists.
     */
    where: TempLeavesWhereUniqueInput
    /**
     * In case the TempLeaves found by the `where` argument doesn't exist, create a new TempLeaves with this data.
     */
    create: XOR<TempLeavesCreateInput, TempLeavesUncheckedCreateInput>
    /**
     * In case the TempLeaves was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempLeavesUpdateInput, TempLeavesUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TempLeaves delete
   */
  export type TempLeavesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
    /**
     * Filter which TempLeaves to delete.
     */
    where: TempLeavesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TempLeaves deleteMany
   */
  export type TempLeavesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempLeaves to delete
     */
    where?: TempLeavesWhereInput
    /**
     * Limit how many TempLeaves to delete.
     */
    limit?: number
  }

  /**
   * TempLeaves without action
   */
  export type TempLeavesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempLeaves
     */
    select?: TempLeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempLeaves
     */
    omit?: TempLeavesOmit<ExtArgs> | null
  }


  /**
   * Model Leaves
   */

  export type AggregateLeaves = {
    _count: LeavesCountAggregateOutputType | null
    _avg: LeavesAvgAggregateOutputType | null
    _sum: LeavesSumAggregateOutputType | null
    _min: LeavesMinAggregateOutputType | null
    _max: LeavesMaxAggregateOutputType | null
  }

  export type LeavesAvgAggregateOutputType = {
    chainId: number | null
    lastProcessedTimestamp: number | null
  }

  export type LeavesSumAggregateOutputType = {
    chainId: number | null
    lastProcessedTimestamp: number | null
  }

  export type LeavesMinAggregateOutputType = {
    chainId: number | null
    root: string | null
    campaignId: string | null
    recipient: string | null
    reason: string | null
    rewardToken: string | null
    amount: string | null
    lastProcessedTimestamp: number | null
  }

  export type LeavesMaxAggregateOutputType = {
    chainId: number | null
    root: string | null
    campaignId: string | null
    recipient: string | null
    reason: string | null
    rewardToken: string | null
    amount: string | null
    lastProcessedTimestamp: number | null
  }

  export type LeavesCountAggregateOutputType = {
    chainId: number
    root: number
    campaignId: number
    recipient: number
    reason: number
    rewardToken: number
    amount: number
    lastProcessedTimestamp: number
    _all: number
  }


  export type LeavesAvgAggregateInputType = {
    chainId?: true
    lastProcessedTimestamp?: true
  }

  export type LeavesSumAggregateInputType = {
    chainId?: true
    lastProcessedTimestamp?: true
  }

  export type LeavesMinAggregateInputType = {
    chainId?: true
    root?: true
    campaignId?: true
    recipient?: true
    reason?: true
    rewardToken?: true
    amount?: true
    lastProcessedTimestamp?: true
  }

  export type LeavesMaxAggregateInputType = {
    chainId?: true
    root?: true
    campaignId?: true
    recipient?: true
    reason?: true
    rewardToken?: true
    amount?: true
    lastProcessedTimestamp?: true
  }

  export type LeavesCountAggregateInputType = {
    chainId?: true
    root?: true
    campaignId?: true
    recipient?: true
    reason?: true
    rewardToken?: true
    amount?: true
    lastProcessedTimestamp?: true
    _all?: true
  }

  export type LeavesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaves to aggregate.
     */
    where?: LeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeavesOrderByWithRelationInput | LeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaves
    **/
    _count?: true | LeavesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeavesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeavesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeavesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeavesMaxAggregateInputType
  }

  export type GetLeavesAggregateType<T extends LeavesAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaves]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaves[P]>
      : GetScalarType<T[P], AggregateLeaves[P]>
  }




  export type LeavesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeavesWhereInput
    orderBy?: LeavesOrderByWithAggregationInput | LeavesOrderByWithAggregationInput[]
    by: LeavesScalarFieldEnum[] | LeavesScalarFieldEnum
    having?: LeavesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeavesCountAggregateInputType | true
    _avg?: LeavesAvgAggregateInputType
    _sum?: LeavesSumAggregateInputType
    _min?: LeavesMinAggregateInputType
    _max?: LeavesMaxAggregateInputType
  }

  export type LeavesGroupByOutputType = {
    chainId: number
    root: string
    campaignId: string
    recipient: string
    reason: string
    rewardToken: string
    amount: string
    lastProcessedTimestamp: number
    _count: LeavesCountAggregateOutputType | null
    _avg: LeavesAvgAggregateOutputType | null
    _sum: LeavesSumAggregateOutputType | null
    _min: LeavesMinAggregateOutputType | null
    _max: LeavesMaxAggregateOutputType | null
  }

  type GetLeavesGroupByPayload<T extends LeavesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeavesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeavesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeavesGroupByOutputType[P]>
            : GetScalarType<T[P], LeavesGroupByOutputType[P]>
        }
      >
    >


  export type LeavesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    root?: boolean
    campaignId?: boolean
    recipient?: boolean
    reason?: boolean
    rewardToken?: boolean
    amount?: boolean
    lastProcessedTimestamp?: boolean
  }, ExtArgs["result"]["leaves"]>

  export type LeavesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    root?: boolean
    campaignId?: boolean
    recipient?: boolean
    reason?: boolean
    rewardToken?: boolean
    amount?: boolean
    lastProcessedTimestamp?: boolean
  }, ExtArgs["result"]["leaves"]>

  export type LeavesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    root?: boolean
    campaignId?: boolean
    recipient?: boolean
    reason?: boolean
    rewardToken?: boolean
    amount?: boolean
    lastProcessedTimestamp?: boolean
  }, ExtArgs["result"]["leaves"]>

  export type LeavesSelectScalar = {
    chainId?: boolean
    root?: boolean
    campaignId?: boolean
    recipient?: boolean
    reason?: boolean
    rewardToken?: boolean
    amount?: boolean
    lastProcessedTimestamp?: boolean
  }

  export type LeavesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "root" | "campaignId" | "recipient" | "reason" | "rewardToken" | "amount" | "lastProcessedTimestamp", ExtArgs["result"]["leaves"]>

  export type $LeavesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leaves"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      root: string
      campaignId: string
      recipient: string
      reason: string
      rewardToken: string
      amount: string
      lastProcessedTimestamp: number
    }, ExtArgs["result"]["leaves"]>
    composites: {}
  }

  type LeavesGetPayload<S extends boolean | null | undefined | LeavesDefaultArgs> = $Result.GetResult<Prisma.$LeavesPayload, S>

  type LeavesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeavesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: LeavesCountAggregateInputType | true
    }

  export interface LeavesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leaves'], meta: { name: 'Leaves' } }
    /**
     * Find zero or one Leaves that matches the filter.
     * @param {LeavesFindUniqueArgs} args - Arguments to find a Leaves
     * @example
     * // Get one Leaves
     * const leaves = await prisma.leaves.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeavesFindUniqueArgs>(args: SelectSubset<T, LeavesFindUniqueArgs<ExtArgs>>): Prisma__LeavesClient<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Leaves that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeavesFindUniqueOrThrowArgs} args - Arguments to find a Leaves
     * @example
     * // Get one Leaves
     * const leaves = await prisma.leaves.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeavesFindUniqueOrThrowArgs>(args: SelectSubset<T, LeavesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeavesClient<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavesFindFirstArgs} args - Arguments to find a Leaves
     * @example
     * // Get one Leaves
     * const leaves = await prisma.leaves.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeavesFindFirstArgs>(args?: SelectSubset<T, LeavesFindFirstArgs<ExtArgs>>): Prisma__LeavesClient<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Leaves that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavesFindFirstOrThrowArgs} args - Arguments to find a Leaves
     * @example
     * // Get one Leaves
     * const leaves = await prisma.leaves.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeavesFindFirstOrThrowArgs>(args?: SelectSubset<T, LeavesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeavesClient<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaves
     * const leaves = await prisma.leaves.findMany()
     * 
     * // Get first 10 Leaves
     * const leaves = await prisma.leaves.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const leavesWithChainIdOnly = await prisma.leaves.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends LeavesFindManyArgs>(args?: SelectSubset<T, LeavesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Leaves.
     * @param {LeavesCreateArgs} args - Arguments to create a Leaves.
     * @example
     * // Create one Leaves
     * const Leaves = await prisma.leaves.create({
     *   data: {
     *     // ... data to create a Leaves
     *   }
     * })
     * 
     */
    create<T extends LeavesCreateArgs>(args: SelectSubset<T, LeavesCreateArgs<ExtArgs>>): Prisma__LeavesClient<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Leaves.
     * @param {LeavesCreateManyArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leaves = await prisma.leaves.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeavesCreateManyArgs>(args?: SelectSubset<T, LeavesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaves and returns the data saved in the database.
     * @param {LeavesCreateManyAndReturnArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leaves = await prisma.leaves.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaves and only return the `chainId`
     * const leavesWithChainIdOnly = await prisma.leaves.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeavesCreateManyAndReturnArgs>(args?: SelectSubset<T, LeavesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Leaves.
     * @param {LeavesDeleteArgs} args - Arguments to delete one Leaves.
     * @example
     * // Delete one Leaves
     * const Leaves = await prisma.leaves.delete({
     *   where: {
     *     // ... filter to delete one Leaves
     *   }
     * })
     * 
     */
    delete<T extends LeavesDeleteArgs>(args: SelectSubset<T, LeavesDeleteArgs<ExtArgs>>): Prisma__LeavesClient<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Leaves.
     * @param {LeavesUpdateArgs} args - Arguments to update one Leaves.
     * @example
     * // Update one Leaves
     * const leaves = await prisma.leaves.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeavesUpdateArgs>(args: SelectSubset<T, LeavesUpdateArgs<ExtArgs>>): Prisma__LeavesClient<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Leaves.
     * @param {LeavesDeleteManyArgs} args - Arguments to filter Leaves to delete.
     * @example
     * // Delete a few Leaves
     * const { count } = await prisma.leaves.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeavesDeleteManyArgs>(args?: SelectSubset<T, LeavesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaves
     * const leaves = await prisma.leaves.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeavesUpdateManyArgs>(args: SelectSubset<T, LeavesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves and returns the data updated in the database.
     * @param {LeavesUpdateManyAndReturnArgs} args - Arguments to update many Leaves.
     * @example
     * // Update many Leaves
     * const leaves = await prisma.leaves.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leaves and only return the `chainId`
     * const leavesWithChainIdOnly = await prisma.leaves.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeavesUpdateManyAndReturnArgs>(args: SelectSubset<T, LeavesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Leaves.
     * @param {LeavesUpsertArgs} args - Arguments to update or create a Leaves.
     * @example
     * // Update or create a Leaves
     * const leaves = await prisma.leaves.upsert({
     *   create: {
     *     // ... data to create a Leaves
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leaves we want to update
     *   }
     * })
     */
    upsert<T extends LeavesUpsertArgs>(args: SelectSubset<T, LeavesUpsertArgs<ExtArgs>>): Prisma__LeavesClient<$Result.GetResult<Prisma.$LeavesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavesCountArgs} args - Arguments to filter Leaves to count.
     * @example
     * // Count the number of Leaves
     * const count = await prisma.leaves.count({
     *   where: {
     *     // ... the filter for the Leaves we want to count
     *   }
     * })
    **/
    count<T extends LeavesCountArgs>(
      args?: Subset<T, LeavesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeavesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeavesAggregateArgs>(args: Subset<T, LeavesAggregateArgs>): Prisma.PrismaPromise<GetLeavesAggregateType<T>>

    /**
     * Group by Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeavesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeavesGroupByArgs['orderBy'] }
        : { orderBy?: LeavesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeavesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeavesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leaves model
   */
  readonly fields: LeavesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leaves.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeavesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leaves model
   */ 
  interface LeavesFieldRefs {
    readonly chainId: FieldRef<"Leaves", 'Int'>
    readonly root: FieldRef<"Leaves", 'String'>
    readonly campaignId: FieldRef<"Leaves", 'String'>
    readonly recipient: FieldRef<"Leaves", 'String'>
    readonly reason: FieldRef<"Leaves", 'String'>
    readonly rewardToken: FieldRef<"Leaves", 'String'>
    readonly amount: FieldRef<"Leaves", 'String'>
    readonly lastProcessedTimestamp: FieldRef<"Leaves", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Leaves findUnique
   */
  export type LeavesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where: LeavesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Leaves findUniqueOrThrow
   */
  export type LeavesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where: LeavesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Leaves findFirst
   */
  export type LeavesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where?: LeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeavesOrderByWithRelationInput | LeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeavesScalarFieldEnum | LeavesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Leaves findFirstOrThrow
   */
  export type LeavesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where?: LeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeavesOrderByWithRelationInput | LeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeavesScalarFieldEnum | LeavesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Leaves findMany
   */
  export type LeavesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where?: LeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeavesOrderByWithRelationInput | LeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaves.
     */
    cursor?: LeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    distinct?: LeavesScalarFieldEnum | LeavesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Leaves create
   */
  export type LeavesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * The data needed to create a Leaves.
     */
    data: XOR<LeavesCreateInput, LeavesUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Leaves createMany
   */
  export type LeavesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaves.
     */
    data: LeavesCreateManyInput | LeavesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leaves createManyAndReturn
   */
  export type LeavesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * The data used to create many Leaves.
     */
    data: LeavesCreateManyInput | LeavesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leaves update
   */
  export type LeavesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * The data needed to update a Leaves.
     */
    data: XOR<LeavesUpdateInput, LeavesUncheckedUpdateInput>
    /**
     * Choose, which Leaves to update.
     */
    where: LeavesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Leaves updateMany
   */
  export type LeavesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeavesUpdateManyMutationInput, LeavesUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeavesWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
  }

  /**
   * Leaves updateManyAndReturn
   */
  export type LeavesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeavesUpdateManyMutationInput, LeavesUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeavesWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
  }

  /**
   * Leaves upsert
   */
  export type LeavesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * The filter to search for the Leaves to update in case it exists.
     */
    where: LeavesWhereUniqueInput
    /**
     * In case the Leaves found by the `where` argument doesn't exist, create a new Leaves with this data.
     */
    create: XOR<LeavesCreateInput, LeavesUncheckedCreateInput>
    /**
     * In case the Leaves was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeavesUpdateInput, LeavesUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Leaves delete
   */
  export type LeavesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
    /**
     * Filter which Leaves to delete.
     */
    where: LeavesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Leaves deleteMany
   */
  export type LeavesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaves to delete
     */
    where?: LeavesWhereInput
    /**
     * Limit how many Leaves to delete.
     */
    limit?: number
  }

  /**
   * Leaves without action
   */
  export type LeavesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaves
     */
    select?: LeavesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaves
     */
    omit?: LeavesOmit<ExtArgs> | null
  }


  /**
   * Model Proofs
   */

  export type AggregateProofs = {
    _count: ProofsCountAggregateOutputType | null
    _avg: ProofsAvgAggregateOutputType | null
    _sum: ProofsSumAggregateOutputType | null
    _min: ProofsMinAggregateOutputType | null
    _max: ProofsMaxAggregateOutputType | null
  }

  export type ProofsAvgAggregateOutputType = {
    chainId: number | null
  }

  export type ProofsSumAggregateOutputType = {
    chainId: number | null
  }

  export type ProofsMinAggregateOutputType = {
    chainId: number | null
    root: string | null
    recipient: string | null
    rewardToken: string | null
  }

  export type ProofsMaxAggregateOutputType = {
    chainId: number | null
    root: string | null
    recipient: string | null
    rewardToken: string | null
  }

  export type ProofsCountAggregateOutputType = {
    chainId: number
    root: number
    recipient: number
    rewardToken: number
    proof: number
    _all: number
  }


  export type ProofsAvgAggregateInputType = {
    chainId?: true
  }

  export type ProofsSumAggregateInputType = {
    chainId?: true
  }

  export type ProofsMinAggregateInputType = {
    chainId?: true
    root?: true
    recipient?: true
    rewardToken?: true
  }

  export type ProofsMaxAggregateInputType = {
    chainId?: true
    root?: true
    recipient?: true
    rewardToken?: true
  }

  export type ProofsCountAggregateInputType = {
    chainId?: true
    root?: true
    recipient?: true
    rewardToken?: true
    proof?: true
    _all?: true
  }

  export type ProofsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proofs to aggregate.
     */
    where?: ProofsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proofs to fetch.
     */
    orderBy?: ProofsOrderByWithRelationInput | ProofsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProofsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proofs
    **/
    _count?: true | ProofsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProofsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProofsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProofsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProofsMaxAggregateInputType
  }

  export type GetProofsAggregateType<T extends ProofsAggregateArgs> = {
        [P in keyof T & keyof AggregateProofs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProofs[P]>
      : GetScalarType<T[P], AggregateProofs[P]>
  }




  export type ProofsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProofsWhereInput
    orderBy?: ProofsOrderByWithAggregationInput | ProofsOrderByWithAggregationInput[]
    by: ProofsScalarFieldEnum[] | ProofsScalarFieldEnum
    having?: ProofsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProofsCountAggregateInputType | true
    _avg?: ProofsAvgAggregateInputType
    _sum?: ProofsSumAggregateInputType
    _min?: ProofsMinAggregateInputType
    _max?: ProofsMaxAggregateInputType
  }

  export type ProofsGroupByOutputType = {
    chainId: number
    root: string
    recipient: string
    rewardToken: string
    proof: string[]
    _count: ProofsCountAggregateOutputType | null
    _avg: ProofsAvgAggregateOutputType | null
    _sum: ProofsSumAggregateOutputType | null
    _min: ProofsMinAggregateOutputType | null
    _max: ProofsMaxAggregateOutputType | null
  }

  type GetProofsGroupByPayload<T extends ProofsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProofsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProofsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProofsGroupByOutputType[P]>
            : GetScalarType<T[P], ProofsGroupByOutputType[P]>
        }
      >
    >


  export type ProofsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    root?: boolean
    recipient?: boolean
    rewardToken?: boolean
    proof?: boolean
  }, ExtArgs["result"]["proofs"]>

  export type ProofsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    root?: boolean
    recipient?: boolean
    rewardToken?: boolean
    proof?: boolean
  }, ExtArgs["result"]["proofs"]>

  export type ProofsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    root?: boolean
    recipient?: boolean
    rewardToken?: boolean
    proof?: boolean
  }, ExtArgs["result"]["proofs"]>

  export type ProofsSelectScalar = {
    chainId?: boolean
    root?: boolean
    recipient?: boolean
    rewardToken?: boolean
    proof?: boolean
  }

  export type ProofsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "root" | "recipient" | "rewardToken" | "proof", ExtArgs["result"]["proofs"]>

  export type $ProofsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proofs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      root: string
      recipient: string
      rewardToken: string
      proof: string[]
    }, ExtArgs["result"]["proofs"]>
    composites: {}
  }

  type ProofsGetPayload<S extends boolean | null | undefined | ProofsDefaultArgs> = $Result.GetResult<Prisma.$ProofsPayload, S>

  type ProofsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProofsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ProofsCountAggregateInputType | true
    }

  export interface ProofsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proofs'], meta: { name: 'Proofs' } }
    /**
     * Find zero or one Proofs that matches the filter.
     * @param {ProofsFindUniqueArgs} args - Arguments to find a Proofs
     * @example
     * // Get one Proofs
     * const proofs = await prisma.proofs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProofsFindUniqueArgs>(args: SelectSubset<T, ProofsFindUniqueArgs<ExtArgs>>): Prisma__ProofsClient<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Proofs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProofsFindUniqueOrThrowArgs} args - Arguments to find a Proofs
     * @example
     * // Get one Proofs
     * const proofs = await prisma.proofs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProofsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProofsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProofsClient<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Proofs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsFindFirstArgs} args - Arguments to find a Proofs
     * @example
     * // Get one Proofs
     * const proofs = await prisma.proofs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProofsFindFirstArgs>(args?: SelectSubset<T, ProofsFindFirstArgs<ExtArgs>>): Prisma__ProofsClient<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Proofs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsFindFirstOrThrowArgs} args - Arguments to find a Proofs
     * @example
     * // Get one Proofs
     * const proofs = await prisma.proofs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProofsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProofsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProofsClient<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Proofs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proofs
     * const proofs = await prisma.proofs.findMany()
     * 
     * // Get first 10 Proofs
     * const proofs = await prisma.proofs.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const proofsWithChainIdOnly = await prisma.proofs.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends ProofsFindManyArgs>(args?: SelectSubset<T, ProofsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Proofs.
     * @param {ProofsCreateArgs} args - Arguments to create a Proofs.
     * @example
     * // Create one Proofs
     * const Proofs = await prisma.proofs.create({
     *   data: {
     *     // ... data to create a Proofs
     *   }
     * })
     * 
     */
    create<T extends ProofsCreateArgs>(args: SelectSubset<T, ProofsCreateArgs<ExtArgs>>): Prisma__ProofsClient<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Proofs.
     * @param {ProofsCreateManyArgs} args - Arguments to create many Proofs.
     * @example
     * // Create many Proofs
     * const proofs = await prisma.proofs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProofsCreateManyArgs>(args?: SelectSubset<T, ProofsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proofs and returns the data saved in the database.
     * @param {ProofsCreateManyAndReturnArgs} args - Arguments to create many Proofs.
     * @example
     * // Create many Proofs
     * const proofs = await prisma.proofs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proofs and only return the `chainId`
     * const proofsWithChainIdOnly = await prisma.proofs.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProofsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProofsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Proofs.
     * @param {ProofsDeleteArgs} args - Arguments to delete one Proofs.
     * @example
     * // Delete one Proofs
     * const Proofs = await prisma.proofs.delete({
     *   where: {
     *     // ... filter to delete one Proofs
     *   }
     * })
     * 
     */
    delete<T extends ProofsDeleteArgs>(args: SelectSubset<T, ProofsDeleteArgs<ExtArgs>>): Prisma__ProofsClient<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Proofs.
     * @param {ProofsUpdateArgs} args - Arguments to update one Proofs.
     * @example
     * // Update one Proofs
     * const proofs = await prisma.proofs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProofsUpdateArgs>(args: SelectSubset<T, ProofsUpdateArgs<ExtArgs>>): Prisma__ProofsClient<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Proofs.
     * @param {ProofsDeleteManyArgs} args - Arguments to filter Proofs to delete.
     * @example
     * // Delete a few Proofs
     * const { count } = await prisma.proofs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProofsDeleteManyArgs>(args?: SelectSubset<T, ProofsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proofs
     * const proofs = await prisma.proofs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProofsUpdateManyArgs>(args: SelectSubset<T, ProofsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proofs and returns the data updated in the database.
     * @param {ProofsUpdateManyAndReturnArgs} args - Arguments to update many Proofs.
     * @example
     * // Update many Proofs
     * const proofs = await prisma.proofs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proofs and only return the `chainId`
     * const proofsWithChainIdOnly = await prisma.proofs.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProofsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProofsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Proofs.
     * @param {ProofsUpsertArgs} args - Arguments to update or create a Proofs.
     * @example
     * // Update or create a Proofs
     * const proofs = await prisma.proofs.upsert({
     *   create: {
     *     // ... data to create a Proofs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proofs we want to update
     *   }
     * })
     */
    upsert<T extends ProofsUpsertArgs>(args: SelectSubset<T, ProofsUpsertArgs<ExtArgs>>): Prisma__ProofsClient<$Result.GetResult<Prisma.$ProofsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Proofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsCountArgs} args - Arguments to filter Proofs to count.
     * @example
     * // Count the number of Proofs
     * const count = await prisma.proofs.count({
     *   where: {
     *     // ... the filter for the Proofs we want to count
     *   }
     * })
    **/
    count<T extends ProofsCountArgs>(
      args?: Subset<T, ProofsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProofsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProofsAggregateArgs>(args: Subset<T, ProofsAggregateArgs>): Prisma.PrismaPromise<GetProofsAggregateType<T>>

    /**
     * Group by Proofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProofsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProofsGroupByArgs['orderBy'] }
        : { orderBy?: ProofsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProofsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProofsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proofs model
   */
  readonly fields: ProofsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proofs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProofsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proofs model
   */ 
  interface ProofsFieldRefs {
    readonly chainId: FieldRef<"Proofs", 'Int'>
    readonly root: FieldRef<"Proofs", 'String'>
    readonly recipient: FieldRef<"Proofs", 'String'>
    readonly rewardToken: FieldRef<"Proofs", 'String'>
    readonly proof: FieldRef<"Proofs", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Proofs findUnique
   */
  export type ProofsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * Filter, which Proofs to fetch.
     */
    where: ProofsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Proofs findUniqueOrThrow
   */
  export type ProofsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * Filter, which Proofs to fetch.
     */
    where: ProofsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Proofs findFirst
   */
  export type ProofsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * Filter, which Proofs to fetch.
     */
    where?: ProofsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proofs to fetch.
     */
    orderBy?: ProofsOrderByWithRelationInput | ProofsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proofs.
     */
    cursor?: ProofsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proofs.
     */
    distinct?: ProofsScalarFieldEnum | ProofsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Proofs findFirstOrThrow
   */
  export type ProofsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * Filter, which Proofs to fetch.
     */
    where?: ProofsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proofs to fetch.
     */
    orderBy?: ProofsOrderByWithRelationInput | ProofsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proofs.
     */
    cursor?: ProofsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proofs.
     */
    distinct?: ProofsScalarFieldEnum | ProofsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Proofs findMany
   */
  export type ProofsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * Filter, which Proofs to fetch.
     */
    where?: ProofsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proofs to fetch.
     */
    orderBy?: ProofsOrderByWithRelationInput | ProofsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proofs.
     */
    cursor?: ProofsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proofs.
     */
    skip?: number
    distinct?: ProofsScalarFieldEnum | ProofsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Proofs create
   */
  export type ProofsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * The data needed to create a Proofs.
     */
    data: XOR<ProofsCreateInput, ProofsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Proofs createMany
   */
  export type ProofsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proofs.
     */
    data: ProofsCreateManyInput | ProofsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proofs createManyAndReturn
   */
  export type ProofsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * The data used to create many Proofs.
     */
    data: ProofsCreateManyInput | ProofsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proofs update
   */
  export type ProofsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * The data needed to update a Proofs.
     */
    data: XOR<ProofsUpdateInput, ProofsUncheckedUpdateInput>
    /**
     * Choose, which Proofs to update.
     */
    where: ProofsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Proofs updateMany
   */
  export type ProofsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proofs.
     */
    data: XOR<ProofsUpdateManyMutationInput, ProofsUncheckedUpdateManyInput>
    /**
     * Filter which Proofs to update
     */
    where?: ProofsWhereInput
    /**
     * Limit how many Proofs to update.
     */
    limit?: number
  }

  /**
   * Proofs updateManyAndReturn
   */
  export type ProofsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * The data used to update Proofs.
     */
    data: XOR<ProofsUpdateManyMutationInput, ProofsUncheckedUpdateManyInput>
    /**
     * Filter which Proofs to update
     */
    where?: ProofsWhereInput
    /**
     * Limit how many Proofs to update.
     */
    limit?: number
  }

  /**
   * Proofs upsert
   */
  export type ProofsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * The filter to search for the Proofs to update in case it exists.
     */
    where: ProofsWhereUniqueInput
    /**
     * In case the Proofs found by the `where` argument doesn't exist, create a new Proofs with this data.
     */
    create: XOR<ProofsCreateInput, ProofsUncheckedCreateInput>
    /**
     * In case the Proofs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProofsUpdateInput, ProofsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Proofs delete
   */
  export type ProofsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
    /**
     * Filter which Proofs to delete.
     */
    where: ProofsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Proofs deleteMany
   */
  export type ProofsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proofs to delete
     */
    where?: ProofsWhereInput
    /**
     * Limit how many Proofs to delete.
     */
    limit?: number
  }

  /**
   * Proofs without action
   */
  export type ProofsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proofs
     */
    select?: ProofsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proofs
     */
    omit?: ProofsOmit<ExtArgs> | null
  }


  /**
   * Model MerklRoots
   */

  export type AggregateMerklRoots = {
    _count: MerklRootsCountAggregateOutputType | null
    _avg: MerklRootsAvgAggregateOutputType | null
    _sum: MerklRootsSumAggregateOutputType | null
    _min: MerklRootsMinAggregateOutputType | null
    _max: MerklRootsMaxAggregateOutputType | null
  }

  export type MerklRootsAvgAggregateOutputType = {
    chainId: number | null
    epoch: number | null
    timestamp: number | null
  }

  export type MerklRootsSumAggregateOutputType = {
    chainId: number | null
    epoch: number | null
    timestamp: number | null
  }

  export type MerklRootsMinAggregateOutputType = {
    chainId: number | null
    epoch: number | null
    timestamp: number | null
    root: string | null
  }

  export type MerklRootsMaxAggregateOutputType = {
    chainId: number | null
    epoch: number | null
    timestamp: number | null
    root: string | null
  }

  export type MerklRootsCountAggregateOutputType = {
    chainId: number
    epoch: number
    timestamp: number
    root: number
    _all: number
  }


  export type MerklRootsAvgAggregateInputType = {
    chainId?: true
    epoch?: true
    timestamp?: true
  }

  export type MerklRootsSumAggregateInputType = {
    chainId?: true
    epoch?: true
    timestamp?: true
  }

  export type MerklRootsMinAggregateInputType = {
    chainId?: true
    epoch?: true
    timestamp?: true
    root?: true
  }

  export type MerklRootsMaxAggregateInputType = {
    chainId?: true
    epoch?: true
    timestamp?: true
    root?: true
  }

  export type MerklRootsCountAggregateInputType = {
    chainId?: true
    epoch?: true
    timestamp?: true
    root?: true
    _all?: true
  }

  export type MerklRootsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerklRoots to aggregate.
     */
    where?: MerklRootsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerklRoots to fetch.
     */
    orderBy?: MerklRootsOrderByWithRelationInput | MerklRootsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerklRootsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerklRoots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerklRoots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MerklRoots
    **/
    _count?: true | MerklRootsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerklRootsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerklRootsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerklRootsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerklRootsMaxAggregateInputType
  }

  export type GetMerklRootsAggregateType<T extends MerklRootsAggregateArgs> = {
        [P in keyof T & keyof AggregateMerklRoots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerklRoots[P]>
      : GetScalarType<T[P], AggregateMerklRoots[P]>
  }




  export type MerklRootsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerklRootsWhereInput
    orderBy?: MerklRootsOrderByWithAggregationInput | MerklRootsOrderByWithAggregationInput[]
    by: MerklRootsScalarFieldEnum[] | MerklRootsScalarFieldEnum
    having?: MerklRootsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerklRootsCountAggregateInputType | true
    _avg?: MerklRootsAvgAggregateInputType
    _sum?: MerklRootsSumAggregateInputType
    _min?: MerklRootsMinAggregateInputType
    _max?: MerklRootsMaxAggregateInputType
  }

  export type MerklRootsGroupByOutputType = {
    chainId: number
    epoch: number
    timestamp: number
    root: string
    _count: MerklRootsCountAggregateOutputType | null
    _avg: MerklRootsAvgAggregateOutputType | null
    _sum: MerklRootsSumAggregateOutputType | null
    _min: MerklRootsMinAggregateOutputType | null
    _max: MerklRootsMaxAggregateOutputType | null
  }

  type GetMerklRootsGroupByPayload<T extends MerklRootsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerklRootsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerklRootsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerklRootsGroupByOutputType[P]>
            : GetScalarType<T[P], MerklRootsGroupByOutputType[P]>
        }
      >
    >


  export type MerklRootsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    epoch?: boolean
    timestamp?: boolean
    root?: boolean
  }, ExtArgs["result"]["merklRoots"]>

  export type MerklRootsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    epoch?: boolean
    timestamp?: boolean
    root?: boolean
  }, ExtArgs["result"]["merklRoots"]>

  export type MerklRootsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    epoch?: boolean
    timestamp?: boolean
    root?: boolean
  }, ExtArgs["result"]["merklRoots"]>

  export type MerklRootsSelectScalar = {
    chainId?: boolean
    epoch?: boolean
    timestamp?: boolean
    root?: boolean
  }

  export type MerklRootsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "epoch" | "timestamp" | "root", ExtArgs["result"]["merklRoots"]>

  export type $MerklRootsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MerklRoots"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      epoch: number
      timestamp: number
      root: string
    }, ExtArgs["result"]["merklRoots"]>
    composites: {}
  }

  type MerklRootsGetPayload<S extends boolean | null | undefined | MerklRootsDefaultArgs> = $Result.GetResult<Prisma.$MerklRootsPayload, S>

  type MerklRootsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MerklRootsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: MerklRootsCountAggregateInputType | true
    }

  export interface MerklRootsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MerklRoots'], meta: { name: 'MerklRoots' } }
    /**
     * Find zero or one MerklRoots that matches the filter.
     * @param {MerklRootsFindUniqueArgs} args - Arguments to find a MerklRoots
     * @example
     * // Get one MerklRoots
     * const merklRoots = await prisma.merklRoots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerklRootsFindUniqueArgs>(args: SelectSubset<T, MerklRootsFindUniqueArgs<ExtArgs>>): Prisma__MerklRootsClient<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MerklRoots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MerklRootsFindUniqueOrThrowArgs} args - Arguments to find a MerklRoots
     * @example
     * // Get one MerklRoots
     * const merklRoots = await prisma.merklRoots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerklRootsFindUniqueOrThrowArgs>(args: SelectSubset<T, MerklRootsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerklRootsClient<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MerklRoots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerklRootsFindFirstArgs} args - Arguments to find a MerklRoots
     * @example
     * // Get one MerklRoots
     * const merklRoots = await prisma.merklRoots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerklRootsFindFirstArgs>(args?: SelectSubset<T, MerklRootsFindFirstArgs<ExtArgs>>): Prisma__MerklRootsClient<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MerklRoots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerklRootsFindFirstOrThrowArgs} args - Arguments to find a MerklRoots
     * @example
     * // Get one MerklRoots
     * const merklRoots = await prisma.merklRoots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerklRootsFindFirstOrThrowArgs>(args?: SelectSubset<T, MerklRootsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerklRootsClient<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MerklRoots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerklRootsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MerklRoots
     * const merklRoots = await prisma.merklRoots.findMany()
     * 
     * // Get first 10 MerklRoots
     * const merklRoots = await prisma.merklRoots.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const merklRootsWithChainIdOnly = await prisma.merklRoots.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends MerklRootsFindManyArgs>(args?: SelectSubset<T, MerklRootsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MerklRoots.
     * @param {MerklRootsCreateArgs} args - Arguments to create a MerklRoots.
     * @example
     * // Create one MerklRoots
     * const MerklRoots = await prisma.merklRoots.create({
     *   data: {
     *     // ... data to create a MerklRoots
     *   }
     * })
     * 
     */
    create<T extends MerklRootsCreateArgs>(args: SelectSubset<T, MerklRootsCreateArgs<ExtArgs>>): Prisma__MerklRootsClient<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MerklRoots.
     * @param {MerklRootsCreateManyArgs} args - Arguments to create many MerklRoots.
     * @example
     * // Create many MerklRoots
     * const merklRoots = await prisma.merklRoots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerklRootsCreateManyArgs>(args?: SelectSubset<T, MerklRootsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MerklRoots and returns the data saved in the database.
     * @param {MerklRootsCreateManyAndReturnArgs} args - Arguments to create many MerklRoots.
     * @example
     * // Create many MerklRoots
     * const merklRoots = await prisma.merklRoots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MerklRoots and only return the `chainId`
     * const merklRootsWithChainIdOnly = await prisma.merklRoots.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerklRootsCreateManyAndReturnArgs>(args?: SelectSubset<T, MerklRootsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MerklRoots.
     * @param {MerklRootsDeleteArgs} args - Arguments to delete one MerklRoots.
     * @example
     * // Delete one MerklRoots
     * const MerklRoots = await prisma.merklRoots.delete({
     *   where: {
     *     // ... filter to delete one MerklRoots
     *   }
     * })
     * 
     */
    delete<T extends MerklRootsDeleteArgs>(args: SelectSubset<T, MerklRootsDeleteArgs<ExtArgs>>): Prisma__MerklRootsClient<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MerklRoots.
     * @param {MerklRootsUpdateArgs} args - Arguments to update one MerklRoots.
     * @example
     * // Update one MerklRoots
     * const merklRoots = await prisma.merklRoots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerklRootsUpdateArgs>(args: SelectSubset<T, MerklRootsUpdateArgs<ExtArgs>>): Prisma__MerklRootsClient<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MerklRoots.
     * @param {MerklRootsDeleteManyArgs} args - Arguments to filter MerklRoots to delete.
     * @example
     * // Delete a few MerklRoots
     * const { count } = await prisma.merklRoots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerklRootsDeleteManyArgs>(args?: SelectSubset<T, MerklRootsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MerklRoots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerklRootsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MerklRoots
     * const merklRoots = await prisma.merklRoots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerklRootsUpdateManyArgs>(args: SelectSubset<T, MerklRootsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MerklRoots and returns the data updated in the database.
     * @param {MerklRootsUpdateManyAndReturnArgs} args - Arguments to update many MerklRoots.
     * @example
     * // Update many MerklRoots
     * const merklRoots = await prisma.merklRoots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MerklRoots and only return the `chainId`
     * const merklRootsWithChainIdOnly = await prisma.merklRoots.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MerklRootsUpdateManyAndReturnArgs>(args: SelectSubset<T, MerklRootsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MerklRoots.
     * @param {MerklRootsUpsertArgs} args - Arguments to update or create a MerklRoots.
     * @example
     * // Update or create a MerklRoots
     * const merklRoots = await prisma.merklRoots.upsert({
     *   create: {
     *     // ... data to create a MerklRoots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MerklRoots we want to update
     *   }
     * })
     */
    upsert<T extends MerklRootsUpsertArgs>(args: SelectSubset<T, MerklRootsUpsertArgs<ExtArgs>>): Prisma__MerklRootsClient<$Result.GetResult<Prisma.$MerklRootsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MerklRoots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerklRootsCountArgs} args - Arguments to filter MerklRoots to count.
     * @example
     * // Count the number of MerklRoots
     * const count = await prisma.merklRoots.count({
     *   where: {
     *     // ... the filter for the MerklRoots we want to count
     *   }
     * })
    **/
    count<T extends MerklRootsCountArgs>(
      args?: Subset<T, MerklRootsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerklRootsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MerklRoots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerklRootsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MerklRootsAggregateArgs>(args: Subset<T, MerklRootsAggregateArgs>): Prisma.PrismaPromise<GetMerklRootsAggregateType<T>>

    /**
     * Group by MerklRoots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerklRootsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MerklRootsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerklRootsGroupByArgs['orderBy'] }
        : { orderBy?: MerklRootsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MerklRootsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerklRootsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MerklRoots model
   */
  readonly fields: MerklRootsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MerklRoots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerklRootsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MerklRoots model
   */ 
  interface MerklRootsFieldRefs {
    readonly chainId: FieldRef<"MerklRoots", 'Int'>
    readonly epoch: FieldRef<"MerklRoots", 'Int'>
    readonly timestamp: FieldRef<"MerklRoots", 'Int'>
    readonly root: FieldRef<"MerklRoots", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MerklRoots findUnique
   */
  export type MerklRootsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * Filter, which MerklRoots to fetch.
     */
    where: MerklRootsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * MerklRoots findUniqueOrThrow
   */
  export type MerklRootsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * Filter, which MerklRoots to fetch.
     */
    where: MerklRootsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * MerklRoots findFirst
   */
  export type MerklRootsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * Filter, which MerklRoots to fetch.
     */
    where?: MerklRootsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerklRoots to fetch.
     */
    orderBy?: MerklRootsOrderByWithRelationInput | MerklRootsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerklRoots.
     */
    cursor?: MerklRootsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerklRoots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerklRoots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerklRoots.
     */
    distinct?: MerklRootsScalarFieldEnum | MerklRootsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * MerklRoots findFirstOrThrow
   */
  export type MerklRootsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * Filter, which MerklRoots to fetch.
     */
    where?: MerklRootsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerklRoots to fetch.
     */
    orderBy?: MerklRootsOrderByWithRelationInput | MerklRootsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerklRoots.
     */
    cursor?: MerklRootsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerklRoots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerklRoots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerklRoots.
     */
    distinct?: MerklRootsScalarFieldEnum | MerklRootsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * MerklRoots findMany
   */
  export type MerklRootsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * Filter, which MerklRoots to fetch.
     */
    where?: MerklRootsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerklRoots to fetch.
     */
    orderBy?: MerklRootsOrderByWithRelationInput | MerklRootsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MerklRoots.
     */
    cursor?: MerklRootsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerklRoots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerklRoots.
     */
    skip?: number
    distinct?: MerklRootsScalarFieldEnum | MerklRootsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * MerklRoots create
   */
  export type MerklRootsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * The data needed to create a MerklRoots.
     */
    data: XOR<MerklRootsCreateInput, MerklRootsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * MerklRoots createMany
   */
  export type MerklRootsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MerklRoots.
     */
    data: MerklRootsCreateManyInput | MerklRootsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MerklRoots createManyAndReturn
   */
  export type MerklRootsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * The data used to create many MerklRoots.
     */
    data: MerklRootsCreateManyInput | MerklRootsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MerklRoots update
   */
  export type MerklRootsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * The data needed to update a MerklRoots.
     */
    data: XOR<MerklRootsUpdateInput, MerklRootsUncheckedUpdateInput>
    /**
     * Choose, which MerklRoots to update.
     */
    where: MerklRootsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * MerklRoots updateMany
   */
  export type MerklRootsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MerklRoots.
     */
    data: XOR<MerklRootsUpdateManyMutationInput, MerklRootsUncheckedUpdateManyInput>
    /**
     * Filter which MerklRoots to update
     */
    where?: MerklRootsWhereInput
    /**
     * Limit how many MerklRoots to update.
     */
    limit?: number
  }

  /**
   * MerklRoots updateManyAndReturn
   */
  export type MerklRootsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * The data used to update MerklRoots.
     */
    data: XOR<MerklRootsUpdateManyMutationInput, MerklRootsUncheckedUpdateManyInput>
    /**
     * Filter which MerklRoots to update
     */
    where?: MerklRootsWhereInput
    /**
     * Limit how many MerklRoots to update.
     */
    limit?: number
  }

  /**
   * MerklRoots upsert
   */
  export type MerklRootsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * The filter to search for the MerklRoots to update in case it exists.
     */
    where: MerklRootsWhereUniqueInput
    /**
     * In case the MerklRoots found by the `where` argument doesn't exist, create a new MerklRoots with this data.
     */
    create: XOR<MerklRootsCreateInput, MerklRootsUncheckedCreateInput>
    /**
     * In case the MerklRoots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerklRootsUpdateInput, MerklRootsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * MerklRoots delete
   */
  export type MerklRootsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
    /**
     * Filter which MerklRoots to delete.
     */
    where: MerklRootsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * MerklRoots deleteMany
   */
  export type MerklRootsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerklRoots to delete
     */
    where?: MerklRootsWhereInput
    /**
     * Limit how many MerklRoots to delete.
     */
    limit?: number
  }

  /**
   * MerklRoots without action
   */
  export type MerklRootsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerklRoots
     */
    select?: MerklRootsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerklRoots
     */
    omit?: MerklRootsOmit<ExtArgs> | null
  }


  /**
   * Model Campaigns
   */

  export type AggregateCampaigns = {
    _count: CampaignsCountAggregateOutputType | null
    _avg: CampaignsAvgAggregateOutputType | null
    _sum: CampaignsSumAggregateOutputType | null
    _min: CampaignsMinAggregateOutputType | null
    _max: CampaignsMaxAggregateOutputType | null
  }

  export type CampaignsAvgAggregateOutputType = {
    chainId: number | null
    computeChainId: number | null
    index: number | null
    campaignType: number | null
    campaignSubType: number | null
    startTimestamp: number | null
    endTimestamp: number | null
  }

  export type CampaignsSumAggregateOutputType = {
    chainId: number | null
    computeChainId: number | null
    index: number | null
    campaignType: number | null
    campaignSubType: number | null
    startTimestamp: number | null
    endTimestamp: number | null
  }

  export type CampaignsMinAggregateOutputType = {
    chainId: number | null
    computeChainId: number | null
    index: number | null
    campaignId: string | null
    creator: string | null
    campaignType: number | null
    campaignSubType: number | null
    rewardToken: string | null
    amount: string | null
    startTimestamp: number | null
    endTimestamp: number | null
    mainParameter: string | null
  }

  export type CampaignsMaxAggregateOutputType = {
    chainId: number | null
    computeChainId: number | null
    index: number | null
    campaignId: string | null
    creator: string | null
    campaignType: number | null
    campaignSubType: number | null
    rewardToken: string | null
    amount: string | null
    startTimestamp: number | null
    endTimestamp: number | null
    mainParameter: string | null
  }

  export type CampaignsCountAggregateOutputType = {
    chainId: number
    computeChainId: number
    index: number
    campaignId: number
    creator: number
    campaignType: number
    campaignSubType: number
    rewardToken: number
    amount: number
    startTimestamp: number
    endTimestamp: number
    mainParameter: number
    campaignParameters: number
    _all: number
  }


  export type CampaignsAvgAggregateInputType = {
    chainId?: true
    computeChainId?: true
    index?: true
    campaignType?: true
    campaignSubType?: true
    startTimestamp?: true
    endTimestamp?: true
  }

  export type CampaignsSumAggregateInputType = {
    chainId?: true
    computeChainId?: true
    index?: true
    campaignType?: true
    campaignSubType?: true
    startTimestamp?: true
    endTimestamp?: true
  }

  export type CampaignsMinAggregateInputType = {
    chainId?: true
    computeChainId?: true
    index?: true
    campaignId?: true
    creator?: true
    campaignType?: true
    campaignSubType?: true
    rewardToken?: true
    amount?: true
    startTimestamp?: true
    endTimestamp?: true
    mainParameter?: true
  }

  export type CampaignsMaxAggregateInputType = {
    chainId?: true
    computeChainId?: true
    index?: true
    campaignId?: true
    creator?: true
    campaignType?: true
    campaignSubType?: true
    rewardToken?: true
    amount?: true
    startTimestamp?: true
    endTimestamp?: true
    mainParameter?: true
  }

  export type CampaignsCountAggregateInputType = {
    chainId?: true
    computeChainId?: true
    index?: true
    campaignId?: true
    creator?: true
    campaignType?: true
    campaignSubType?: true
    rewardToken?: true
    amount?: true
    startTimestamp?: true
    endTimestamp?: true
    mainParameter?: true
    campaignParameters?: true
    _all?: true
  }

  export type CampaignsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to aggregate.
     */
    where?: CampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignsOrderByWithRelationInput | CampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignsMaxAggregateInputType
  }

  export type GetCampaignsAggregateType<T extends CampaignsAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaigns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaigns[P]>
      : GetScalarType<T[P], AggregateCampaigns[P]>
  }




  export type CampaignsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignsWhereInput
    orderBy?: CampaignsOrderByWithAggregationInput | CampaignsOrderByWithAggregationInput[]
    by: CampaignsScalarFieldEnum[] | CampaignsScalarFieldEnum
    having?: CampaignsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignsCountAggregateInputType | true
    _avg?: CampaignsAvgAggregateInputType
    _sum?: CampaignsSumAggregateInputType
    _min?: CampaignsMinAggregateInputType
    _max?: CampaignsMaxAggregateInputType
  }

  export type CampaignsGroupByOutputType = {
    chainId: number
    computeChainId: number
    index: number
    campaignId: string
    creator: string
    campaignType: number
    campaignSubType: number
    rewardToken: string
    amount: string
    startTimestamp: number
    endTimestamp: number
    mainParameter: string
    campaignParameters: JsonValue
    _count: CampaignsCountAggregateOutputType | null
    _avg: CampaignsAvgAggregateOutputType | null
    _sum: CampaignsSumAggregateOutputType | null
    _min: CampaignsMinAggregateOutputType | null
    _max: CampaignsMaxAggregateOutputType | null
  }

  type GetCampaignsGroupByPayload<T extends CampaignsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignsGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignsGroupByOutputType[P]>
        }
      >
    >


  export type CampaignsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    computeChainId?: boolean
    index?: boolean
    campaignId?: boolean
    creator?: boolean
    campaignType?: boolean
    campaignSubType?: boolean
    rewardToken?: boolean
    amount?: boolean
    startTimestamp?: boolean
    endTimestamp?: boolean
    mainParameter?: boolean
    campaignParameters?: boolean
  }, ExtArgs["result"]["campaigns"]>

  export type CampaignsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    computeChainId?: boolean
    index?: boolean
    campaignId?: boolean
    creator?: boolean
    campaignType?: boolean
    campaignSubType?: boolean
    rewardToken?: boolean
    amount?: boolean
    startTimestamp?: boolean
    endTimestamp?: boolean
    mainParameter?: boolean
    campaignParameters?: boolean
  }, ExtArgs["result"]["campaigns"]>

  export type CampaignsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    computeChainId?: boolean
    index?: boolean
    campaignId?: boolean
    creator?: boolean
    campaignType?: boolean
    campaignSubType?: boolean
    rewardToken?: boolean
    amount?: boolean
    startTimestamp?: boolean
    endTimestamp?: boolean
    mainParameter?: boolean
    campaignParameters?: boolean
  }, ExtArgs["result"]["campaigns"]>

  export type CampaignsSelectScalar = {
    chainId?: boolean
    computeChainId?: boolean
    index?: boolean
    campaignId?: boolean
    creator?: boolean
    campaignType?: boolean
    campaignSubType?: boolean
    rewardToken?: boolean
    amount?: boolean
    startTimestamp?: boolean
    endTimestamp?: boolean
    mainParameter?: boolean
    campaignParameters?: boolean
  }

  export type CampaignsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "computeChainId" | "index" | "campaignId" | "creator" | "campaignType" | "campaignSubType" | "rewardToken" | "amount" | "startTimestamp" | "endTimestamp" | "mainParameter" | "campaignParameters", ExtArgs["result"]["campaigns"]>

  export type $CampaignsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaigns"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      computeChainId: number
      index: number
      campaignId: string
      creator: string
      campaignType: number
      campaignSubType: number
      rewardToken: string
      amount: string
      startTimestamp: number
      endTimestamp: number
      mainParameter: string
      campaignParameters: Prisma.JsonValue
    }, ExtArgs["result"]["campaigns"]>
    composites: {}
  }

  type CampaignsGetPayload<S extends boolean | null | undefined | CampaignsDefaultArgs> = $Result.GetResult<Prisma.$CampaignsPayload, S>

  type CampaignsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CampaignsCountAggregateInputType | true
    }

  export interface CampaignsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaigns'], meta: { name: 'Campaigns' } }
    /**
     * Find zero or one Campaigns that matches the filter.
     * @param {CampaignsFindUniqueArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignsFindUniqueArgs>(args: SelectSubset<T, CampaignsFindUniqueArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Campaigns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignsFindUniqueOrThrowArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignsFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsFindFirstArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignsFindFirstArgs>(args?: SelectSubset<T, CampaignsFindFirstArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Campaigns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsFindFirstOrThrowArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignsFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaigns.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaigns.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const campaignsWithChainIdOnly = await prisma.campaigns.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends CampaignsFindManyArgs>(args?: SelectSubset<T, CampaignsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Campaigns.
     * @param {CampaignsCreateArgs} args - Arguments to create a Campaigns.
     * @example
     * // Create one Campaigns
     * const Campaigns = await prisma.campaigns.create({
     *   data: {
     *     // ... data to create a Campaigns
     *   }
     * })
     * 
     */
    create<T extends CampaignsCreateArgs>(args: SelectSubset<T, CampaignsCreateArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignsCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaigns = await prisma.campaigns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignsCreateManyArgs>(args?: SelectSubset<T, CampaignsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignsCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaigns = await prisma.campaigns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `chainId`
     * const campaignsWithChainIdOnly = await prisma.campaigns.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignsCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Campaigns.
     * @param {CampaignsDeleteArgs} args - Arguments to delete one Campaigns.
     * @example
     * // Delete one Campaigns
     * const Campaigns = await prisma.campaigns.delete({
     *   where: {
     *     // ... filter to delete one Campaigns
     *   }
     * })
     * 
     */
    delete<T extends CampaignsDeleteArgs>(args: SelectSubset<T, CampaignsDeleteArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Campaigns.
     * @param {CampaignsUpdateArgs} args - Arguments to update one Campaigns.
     * @example
     * // Update one Campaigns
     * const campaigns = await prisma.campaigns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignsUpdateArgs>(args: SelectSubset<T, CampaignsUpdateArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignsDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaigns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignsDeleteManyArgs>(args?: SelectSubset<T, CampaignsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaigns = await prisma.campaigns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignsUpdateManyArgs>(args: SelectSubset<T, CampaignsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignsUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaigns = await prisma.campaigns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `chainId`
     * const campaignsWithChainIdOnly = await prisma.campaigns.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignsUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Campaigns.
     * @param {CampaignsUpsertArgs} args - Arguments to update or create a Campaigns.
     * @example
     * // Update or create a Campaigns
     * const campaigns = await prisma.campaigns.upsert({
     *   create: {
     *     // ... data to create a Campaigns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaigns we want to update
     *   }
     * })
     */
    upsert<T extends CampaignsUpsertArgs>(args: SelectSubset<T, CampaignsUpsertArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaigns.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignsCountArgs>(
      args?: Subset<T, CampaignsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignsAggregateArgs>(args: Subset<T, CampaignsAggregateArgs>): Prisma.PrismaPromise<GetCampaignsAggregateType<T>>

    /**
     * Group by Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignsGroupByArgs['orderBy'] }
        : { orderBy?: CampaignsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaigns model
   */
  readonly fields: CampaignsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaigns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaigns model
   */ 
  interface CampaignsFieldRefs {
    readonly chainId: FieldRef<"Campaigns", 'Int'>
    readonly computeChainId: FieldRef<"Campaigns", 'Int'>
    readonly index: FieldRef<"Campaigns", 'Int'>
    readonly campaignId: FieldRef<"Campaigns", 'String'>
    readonly creator: FieldRef<"Campaigns", 'String'>
    readonly campaignType: FieldRef<"Campaigns", 'Int'>
    readonly campaignSubType: FieldRef<"Campaigns", 'Int'>
    readonly rewardToken: FieldRef<"Campaigns", 'String'>
    readonly amount: FieldRef<"Campaigns", 'String'>
    readonly startTimestamp: FieldRef<"Campaigns", 'Int'>
    readonly endTimestamp: FieldRef<"Campaigns", 'Int'>
    readonly mainParameter: FieldRef<"Campaigns", 'String'>
    readonly campaignParameters: FieldRef<"Campaigns", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Campaigns findUnique
   */
  export type CampaignsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where: CampaignsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Campaigns findUniqueOrThrow
   */
  export type CampaignsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where: CampaignsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Campaigns findFirst
   */
  export type CampaignsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignsOrderByWithRelationInput | CampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Campaigns findFirstOrThrow
   */
  export type CampaignsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignsOrderByWithRelationInput | CampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Campaigns findMany
   */
  export type CampaignsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignsOrderByWithRelationInput | CampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Campaigns create
   */
  export type CampaignsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * The data needed to create a Campaigns.
     */
    data: XOR<CampaignsCreateInput, CampaignsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Campaigns createMany
   */
  export type CampaignsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignsCreateManyInput | CampaignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaigns createManyAndReturn
   */
  export type CampaignsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignsCreateManyInput | CampaignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaigns update
   */
  export type CampaignsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * The data needed to update a Campaigns.
     */
    data: XOR<CampaignsUpdateInput, CampaignsUncheckedUpdateInput>
    /**
     * Choose, which Campaigns to update.
     */
    where: CampaignsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Campaigns updateMany
   */
  export type CampaignsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignsUpdateManyMutationInput, CampaignsUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignsWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaigns updateManyAndReturn
   */
  export type CampaignsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignsUpdateManyMutationInput, CampaignsUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignsWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaigns upsert
   */
  export type CampaignsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * The filter to search for the Campaigns to update in case it exists.
     */
    where: CampaignsWhereUniqueInput
    /**
     * In case the Campaigns found by the `where` argument doesn't exist, create a new Campaigns with this data.
     */
    create: XOR<CampaignsCreateInput, CampaignsUncheckedCreateInput>
    /**
     * In case the Campaigns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignsUpdateInput, CampaignsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Campaigns delete
   */
  export type CampaignsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Filter which Campaigns to delete.
     */
    where: CampaignsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Campaigns deleteMany
   */
  export type CampaignsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignsWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaigns without action
   */
  export type CampaignsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
  }


  /**
   * Model CampaignsToProcess
   */

  export type AggregateCampaignsToProcess = {
    _count: CampaignsToProcessCountAggregateOutputType | null
    _avg: CampaignsToProcessAvgAggregateOutputType | null
    _sum: CampaignsToProcessSumAggregateOutputType | null
    _min: CampaignsToProcessMinAggregateOutputType | null
    _max: CampaignsToProcessMaxAggregateOutputType | null
  }

  export type CampaignsToProcessAvgAggregateOutputType = {
    chainId: number | null
    computeChainId: number | null
    index: number | null
    campaignType: number | null
    campaignSubType: number | null
    startTimestamp: number | null
    endTimestamp: number | null
    lastProcessedTimestamp: number | null
    processUntilTimestamp: number | null
    jobIndex: number | null
  }

  export type CampaignsToProcessSumAggregateOutputType = {
    chainId: number | null
    computeChainId: number | null
    index: number | null
    campaignType: number | null
    campaignSubType: number | null
    startTimestamp: number | null
    endTimestamp: number | null
    lastProcessedTimestamp: number | null
    processUntilTimestamp: number | null
    jobIndex: number | null
  }

  export type CampaignsToProcessMinAggregateOutputType = {
    chainId: number | null
    computeChainId: number | null
    index: number | null
    campaignId: string | null
    creator: string | null
    campaignType: number | null
    campaignSubType: number | null
    rewardToken: string | null
    amount: string | null
    startTimestamp: number | null
    endTimestamp: number | null
    mainParameter: string | null
    lastProcessedTimestamp: number | null
    processUntilTimestamp: number | null
    jobIndex: number | null
  }

  export type CampaignsToProcessMaxAggregateOutputType = {
    chainId: number | null
    computeChainId: number | null
    index: number | null
    campaignId: string | null
    creator: string | null
    campaignType: number | null
    campaignSubType: number | null
    rewardToken: string | null
    amount: string | null
    startTimestamp: number | null
    endTimestamp: number | null
    mainParameter: string | null
    lastProcessedTimestamp: number | null
    processUntilTimestamp: number | null
    jobIndex: number | null
  }

  export type CampaignsToProcessCountAggregateOutputType = {
    chainId: number
    computeChainId: number
    index: number
    campaignId: number
    creator: number
    campaignType: number
    campaignSubType: number
    rewardToken: number
    amount: number
    startTimestamp: number
    endTimestamp: number
    mainParameter: number
    campaignParameters: number
    lastProcessedTimestamp: number
    processUntilTimestamp: number
    jobIndex: number
    _all: number
  }


  export type CampaignsToProcessAvgAggregateInputType = {
    chainId?: true
    computeChainId?: true
    index?: true
    campaignType?: true
    campaignSubType?: true
    startTimestamp?: true
    endTimestamp?: true
    lastProcessedTimestamp?: true
    processUntilTimestamp?: true
    jobIndex?: true
  }

  export type CampaignsToProcessSumAggregateInputType = {
    chainId?: true
    computeChainId?: true
    index?: true
    campaignType?: true
    campaignSubType?: true
    startTimestamp?: true
    endTimestamp?: true
    lastProcessedTimestamp?: true
    processUntilTimestamp?: true
    jobIndex?: true
  }

  export type CampaignsToProcessMinAggregateInputType = {
    chainId?: true
    computeChainId?: true
    index?: true
    campaignId?: true
    creator?: true
    campaignType?: true
    campaignSubType?: true
    rewardToken?: true
    amount?: true
    startTimestamp?: true
    endTimestamp?: true
    mainParameter?: true
    lastProcessedTimestamp?: true
    processUntilTimestamp?: true
    jobIndex?: true
  }

  export type CampaignsToProcessMaxAggregateInputType = {
    chainId?: true
    computeChainId?: true
    index?: true
    campaignId?: true
    creator?: true
    campaignType?: true
    campaignSubType?: true
    rewardToken?: true
    amount?: true
    startTimestamp?: true
    endTimestamp?: true
    mainParameter?: true
    lastProcessedTimestamp?: true
    processUntilTimestamp?: true
    jobIndex?: true
  }

  export type CampaignsToProcessCountAggregateInputType = {
    chainId?: true
    computeChainId?: true
    index?: true
    campaignId?: true
    creator?: true
    campaignType?: true
    campaignSubType?: true
    rewardToken?: true
    amount?: true
    startTimestamp?: true
    endTimestamp?: true
    mainParameter?: true
    campaignParameters?: true
    lastProcessedTimestamp?: true
    processUntilTimestamp?: true
    jobIndex?: true
    _all?: true
  }

  export type CampaignsToProcessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignsToProcess to aggregate.
     */
    where?: CampaignsToProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignsToProcesses to fetch.
     */
    orderBy?: CampaignsToProcessOrderByWithRelationInput | CampaignsToProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignsToProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignsToProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignsToProcesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignsToProcesses
    **/
    _count?: true | CampaignsToProcessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignsToProcessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignsToProcessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignsToProcessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignsToProcessMaxAggregateInputType
  }

  export type GetCampaignsToProcessAggregateType<T extends CampaignsToProcessAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignsToProcess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignsToProcess[P]>
      : GetScalarType<T[P], AggregateCampaignsToProcess[P]>
  }




  export type CampaignsToProcessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignsToProcessWhereInput
    orderBy?: CampaignsToProcessOrderByWithAggregationInput | CampaignsToProcessOrderByWithAggregationInput[]
    by: CampaignsToProcessScalarFieldEnum[] | CampaignsToProcessScalarFieldEnum
    having?: CampaignsToProcessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignsToProcessCountAggregateInputType | true
    _avg?: CampaignsToProcessAvgAggregateInputType
    _sum?: CampaignsToProcessSumAggregateInputType
    _min?: CampaignsToProcessMinAggregateInputType
    _max?: CampaignsToProcessMaxAggregateInputType
  }

  export type CampaignsToProcessGroupByOutputType = {
    chainId: number
    computeChainId: number
    index: number
    campaignId: string
    creator: string
    campaignType: number
    campaignSubType: number
    rewardToken: string
    amount: string
    startTimestamp: number
    endTimestamp: number
    mainParameter: string
    campaignParameters: JsonValue
    lastProcessedTimestamp: number
    processUntilTimestamp: number
    jobIndex: number
    _count: CampaignsToProcessCountAggregateOutputType | null
    _avg: CampaignsToProcessAvgAggregateOutputType | null
    _sum: CampaignsToProcessSumAggregateOutputType | null
    _min: CampaignsToProcessMinAggregateOutputType | null
    _max: CampaignsToProcessMaxAggregateOutputType | null
  }

  type GetCampaignsToProcessGroupByPayload<T extends CampaignsToProcessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignsToProcessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignsToProcessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignsToProcessGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignsToProcessGroupByOutputType[P]>
        }
      >
    >


  export type CampaignsToProcessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    computeChainId?: boolean
    index?: boolean
    campaignId?: boolean
    creator?: boolean
    campaignType?: boolean
    campaignSubType?: boolean
    rewardToken?: boolean
    amount?: boolean
    startTimestamp?: boolean
    endTimestamp?: boolean
    mainParameter?: boolean
    campaignParameters?: boolean
    lastProcessedTimestamp?: boolean
    processUntilTimestamp?: boolean
    jobIndex?: boolean
  }, ExtArgs["result"]["campaignsToProcess"]>

  export type CampaignsToProcessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    computeChainId?: boolean
    index?: boolean
    campaignId?: boolean
    creator?: boolean
    campaignType?: boolean
    campaignSubType?: boolean
    rewardToken?: boolean
    amount?: boolean
    startTimestamp?: boolean
    endTimestamp?: boolean
    mainParameter?: boolean
    campaignParameters?: boolean
    lastProcessedTimestamp?: boolean
    processUntilTimestamp?: boolean
    jobIndex?: boolean
  }, ExtArgs["result"]["campaignsToProcess"]>

  export type CampaignsToProcessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    computeChainId?: boolean
    index?: boolean
    campaignId?: boolean
    creator?: boolean
    campaignType?: boolean
    campaignSubType?: boolean
    rewardToken?: boolean
    amount?: boolean
    startTimestamp?: boolean
    endTimestamp?: boolean
    mainParameter?: boolean
    campaignParameters?: boolean
    lastProcessedTimestamp?: boolean
    processUntilTimestamp?: boolean
    jobIndex?: boolean
  }, ExtArgs["result"]["campaignsToProcess"]>

  export type CampaignsToProcessSelectScalar = {
    chainId?: boolean
    computeChainId?: boolean
    index?: boolean
    campaignId?: boolean
    creator?: boolean
    campaignType?: boolean
    campaignSubType?: boolean
    rewardToken?: boolean
    amount?: boolean
    startTimestamp?: boolean
    endTimestamp?: boolean
    mainParameter?: boolean
    campaignParameters?: boolean
    lastProcessedTimestamp?: boolean
    processUntilTimestamp?: boolean
    jobIndex?: boolean
  }

  export type CampaignsToProcessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "computeChainId" | "index" | "campaignId" | "creator" | "campaignType" | "campaignSubType" | "rewardToken" | "amount" | "startTimestamp" | "endTimestamp" | "mainParameter" | "campaignParameters" | "lastProcessedTimestamp" | "processUntilTimestamp" | "jobIndex", ExtArgs["result"]["campaignsToProcess"]>

  export type $CampaignsToProcessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignsToProcess"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      computeChainId: number
      index: number
      campaignId: string
      creator: string
      campaignType: number
      campaignSubType: number
      rewardToken: string
      amount: string
      startTimestamp: number
      endTimestamp: number
      mainParameter: string
      campaignParameters: Prisma.JsonValue
      lastProcessedTimestamp: number
      processUntilTimestamp: number
      jobIndex: number
    }, ExtArgs["result"]["campaignsToProcess"]>
    composites: {}
  }

  type CampaignsToProcessGetPayload<S extends boolean | null | undefined | CampaignsToProcessDefaultArgs> = $Result.GetResult<Prisma.$CampaignsToProcessPayload, S>

  type CampaignsToProcessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignsToProcessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CampaignsToProcessCountAggregateInputType | true
    }

  export interface CampaignsToProcessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignsToProcess'], meta: { name: 'CampaignsToProcess' } }
    /**
     * Find zero or one CampaignsToProcess that matches the filter.
     * @param {CampaignsToProcessFindUniqueArgs} args - Arguments to find a CampaignsToProcess
     * @example
     * // Get one CampaignsToProcess
     * const campaignsToProcess = await prisma.campaignsToProcess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignsToProcessFindUniqueArgs>(args: SelectSubset<T, CampaignsToProcessFindUniqueArgs<ExtArgs>>): Prisma__CampaignsToProcessClient<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CampaignsToProcess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignsToProcessFindUniqueOrThrowArgs} args - Arguments to find a CampaignsToProcess
     * @example
     * // Get one CampaignsToProcess
     * const campaignsToProcess = await prisma.campaignsToProcess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignsToProcessFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignsToProcessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignsToProcessClient<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CampaignsToProcess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsToProcessFindFirstArgs} args - Arguments to find a CampaignsToProcess
     * @example
     * // Get one CampaignsToProcess
     * const campaignsToProcess = await prisma.campaignsToProcess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignsToProcessFindFirstArgs>(args?: SelectSubset<T, CampaignsToProcessFindFirstArgs<ExtArgs>>): Prisma__CampaignsToProcessClient<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CampaignsToProcess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsToProcessFindFirstOrThrowArgs} args - Arguments to find a CampaignsToProcess
     * @example
     * // Get one CampaignsToProcess
     * const campaignsToProcess = await prisma.campaignsToProcess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignsToProcessFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignsToProcessFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignsToProcessClient<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CampaignsToProcesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsToProcessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignsToProcesses
     * const campaignsToProcesses = await prisma.campaignsToProcess.findMany()
     * 
     * // Get first 10 CampaignsToProcesses
     * const campaignsToProcesses = await prisma.campaignsToProcess.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const campaignsToProcessWithChainIdOnly = await prisma.campaignsToProcess.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends CampaignsToProcessFindManyArgs>(args?: SelectSubset<T, CampaignsToProcessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CampaignsToProcess.
     * @param {CampaignsToProcessCreateArgs} args - Arguments to create a CampaignsToProcess.
     * @example
     * // Create one CampaignsToProcess
     * const CampaignsToProcess = await prisma.campaignsToProcess.create({
     *   data: {
     *     // ... data to create a CampaignsToProcess
     *   }
     * })
     * 
     */
    create<T extends CampaignsToProcessCreateArgs>(args: SelectSubset<T, CampaignsToProcessCreateArgs<ExtArgs>>): Prisma__CampaignsToProcessClient<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CampaignsToProcesses.
     * @param {CampaignsToProcessCreateManyArgs} args - Arguments to create many CampaignsToProcesses.
     * @example
     * // Create many CampaignsToProcesses
     * const campaignsToProcess = await prisma.campaignsToProcess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignsToProcessCreateManyArgs>(args?: SelectSubset<T, CampaignsToProcessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignsToProcesses and returns the data saved in the database.
     * @param {CampaignsToProcessCreateManyAndReturnArgs} args - Arguments to create many CampaignsToProcesses.
     * @example
     * // Create many CampaignsToProcesses
     * const campaignsToProcess = await prisma.campaignsToProcess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignsToProcesses and only return the `chainId`
     * const campaignsToProcessWithChainIdOnly = await prisma.campaignsToProcess.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignsToProcessCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignsToProcessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CampaignsToProcess.
     * @param {CampaignsToProcessDeleteArgs} args - Arguments to delete one CampaignsToProcess.
     * @example
     * // Delete one CampaignsToProcess
     * const CampaignsToProcess = await prisma.campaignsToProcess.delete({
     *   where: {
     *     // ... filter to delete one CampaignsToProcess
     *   }
     * })
     * 
     */
    delete<T extends CampaignsToProcessDeleteArgs>(args: SelectSubset<T, CampaignsToProcessDeleteArgs<ExtArgs>>): Prisma__CampaignsToProcessClient<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CampaignsToProcess.
     * @param {CampaignsToProcessUpdateArgs} args - Arguments to update one CampaignsToProcess.
     * @example
     * // Update one CampaignsToProcess
     * const campaignsToProcess = await prisma.campaignsToProcess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignsToProcessUpdateArgs>(args: SelectSubset<T, CampaignsToProcessUpdateArgs<ExtArgs>>): Prisma__CampaignsToProcessClient<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CampaignsToProcesses.
     * @param {CampaignsToProcessDeleteManyArgs} args - Arguments to filter CampaignsToProcesses to delete.
     * @example
     * // Delete a few CampaignsToProcesses
     * const { count } = await prisma.campaignsToProcess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignsToProcessDeleteManyArgs>(args?: SelectSubset<T, CampaignsToProcessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignsToProcesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsToProcessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignsToProcesses
     * const campaignsToProcess = await prisma.campaignsToProcess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignsToProcessUpdateManyArgs>(args: SelectSubset<T, CampaignsToProcessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignsToProcesses and returns the data updated in the database.
     * @param {CampaignsToProcessUpdateManyAndReturnArgs} args - Arguments to update many CampaignsToProcesses.
     * @example
     * // Update many CampaignsToProcesses
     * const campaignsToProcess = await prisma.campaignsToProcess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignsToProcesses and only return the `chainId`
     * const campaignsToProcessWithChainIdOnly = await prisma.campaignsToProcess.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignsToProcessUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignsToProcessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CampaignsToProcess.
     * @param {CampaignsToProcessUpsertArgs} args - Arguments to update or create a CampaignsToProcess.
     * @example
     * // Update or create a CampaignsToProcess
     * const campaignsToProcess = await prisma.campaignsToProcess.upsert({
     *   create: {
     *     // ... data to create a CampaignsToProcess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignsToProcess we want to update
     *   }
     * })
     */
    upsert<T extends CampaignsToProcessUpsertArgs>(args: SelectSubset<T, CampaignsToProcessUpsertArgs<ExtArgs>>): Prisma__CampaignsToProcessClient<$Result.GetResult<Prisma.$CampaignsToProcessPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CampaignsToProcesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsToProcessCountArgs} args - Arguments to filter CampaignsToProcesses to count.
     * @example
     * // Count the number of CampaignsToProcesses
     * const count = await prisma.campaignsToProcess.count({
     *   where: {
     *     // ... the filter for the CampaignsToProcesses we want to count
     *   }
     * })
    **/
    count<T extends CampaignsToProcessCountArgs>(
      args?: Subset<T, CampaignsToProcessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignsToProcessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignsToProcess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsToProcessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignsToProcessAggregateArgs>(args: Subset<T, CampaignsToProcessAggregateArgs>): Prisma.PrismaPromise<GetCampaignsToProcessAggregateType<T>>

    /**
     * Group by CampaignsToProcess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsToProcessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignsToProcessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignsToProcessGroupByArgs['orderBy'] }
        : { orderBy?: CampaignsToProcessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignsToProcessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignsToProcessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignsToProcess model
   */
  readonly fields: CampaignsToProcessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignsToProcess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignsToProcessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CampaignsToProcess model
   */ 
  interface CampaignsToProcessFieldRefs {
    readonly chainId: FieldRef<"CampaignsToProcess", 'Int'>
    readonly computeChainId: FieldRef<"CampaignsToProcess", 'Int'>
    readonly index: FieldRef<"CampaignsToProcess", 'Int'>
    readonly campaignId: FieldRef<"CampaignsToProcess", 'String'>
    readonly creator: FieldRef<"CampaignsToProcess", 'String'>
    readonly campaignType: FieldRef<"CampaignsToProcess", 'Int'>
    readonly campaignSubType: FieldRef<"CampaignsToProcess", 'Int'>
    readonly rewardToken: FieldRef<"CampaignsToProcess", 'String'>
    readonly amount: FieldRef<"CampaignsToProcess", 'String'>
    readonly startTimestamp: FieldRef<"CampaignsToProcess", 'Int'>
    readonly endTimestamp: FieldRef<"CampaignsToProcess", 'Int'>
    readonly mainParameter: FieldRef<"CampaignsToProcess", 'String'>
    readonly campaignParameters: FieldRef<"CampaignsToProcess", 'Json'>
    readonly lastProcessedTimestamp: FieldRef<"CampaignsToProcess", 'Int'>
    readonly processUntilTimestamp: FieldRef<"CampaignsToProcess", 'Int'>
    readonly jobIndex: FieldRef<"CampaignsToProcess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CampaignsToProcess findUnique
   */
  export type CampaignsToProcessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * Filter, which CampaignsToProcess to fetch.
     */
    where: CampaignsToProcessWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignsToProcess findUniqueOrThrow
   */
  export type CampaignsToProcessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * Filter, which CampaignsToProcess to fetch.
     */
    where: CampaignsToProcessWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignsToProcess findFirst
   */
  export type CampaignsToProcessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * Filter, which CampaignsToProcess to fetch.
     */
    where?: CampaignsToProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignsToProcesses to fetch.
     */
    orderBy?: CampaignsToProcessOrderByWithRelationInput | CampaignsToProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignsToProcesses.
     */
    cursor?: CampaignsToProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignsToProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignsToProcesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignsToProcesses.
     */
    distinct?: CampaignsToProcessScalarFieldEnum | CampaignsToProcessScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignsToProcess findFirstOrThrow
   */
  export type CampaignsToProcessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * Filter, which CampaignsToProcess to fetch.
     */
    where?: CampaignsToProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignsToProcesses to fetch.
     */
    orderBy?: CampaignsToProcessOrderByWithRelationInput | CampaignsToProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignsToProcesses.
     */
    cursor?: CampaignsToProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignsToProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignsToProcesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignsToProcesses.
     */
    distinct?: CampaignsToProcessScalarFieldEnum | CampaignsToProcessScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignsToProcess findMany
   */
  export type CampaignsToProcessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * Filter, which CampaignsToProcesses to fetch.
     */
    where?: CampaignsToProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignsToProcesses to fetch.
     */
    orderBy?: CampaignsToProcessOrderByWithRelationInput | CampaignsToProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignsToProcesses.
     */
    cursor?: CampaignsToProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignsToProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignsToProcesses.
     */
    skip?: number
    distinct?: CampaignsToProcessScalarFieldEnum | CampaignsToProcessScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignsToProcess create
   */
  export type CampaignsToProcessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * The data needed to create a CampaignsToProcess.
     */
    data: XOR<CampaignsToProcessCreateInput, CampaignsToProcessUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignsToProcess createMany
   */
  export type CampaignsToProcessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignsToProcesses.
     */
    data: CampaignsToProcessCreateManyInput | CampaignsToProcessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignsToProcess createManyAndReturn
   */
  export type CampaignsToProcessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignsToProcesses.
     */
    data: CampaignsToProcessCreateManyInput | CampaignsToProcessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignsToProcess update
   */
  export type CampaignsToProcessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * The data needed to update a CampaignsToProcess.
     */
    data: XOR<CampaignsToProcessUpdateInput, CampaignsToProcessUncheckedUpdateInput>
    /**
     * Choose, which CampaignsToProcess to update.
     */
    where: CampaignsToProcessWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignsToProcess updateMany
   */
  export type CampaignsToProcessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignsToProcesses.
     */
    data: XOR<CampaignsToProcessUpdateManyMutationInput, CampaignsToProcessUncheckedUpdateManyInput>
    /**
     * Filter which CampaignsToProcesses to update
     */
    where?: CampaignsToProcessWhereInput
    /**
     * Limit how many CampaignsToProcesses to update.
     */
    limit?: number
  }

  /**
   * CampaignsToProcess updateManyAndReturn
   */
  export type CampaignsToProcessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * The data used to update CampaignsToProcesses.
     */
    data: XOR<CampaignsToProcessUpdateManyMutationInput, CampaignsToProcessUncheckedUpdateManyInput>
    /**
     * Filter which CampaignsToProcesses to update
     */
    where?: CampaignsToProcessWhereInput
    /**
     * Limit how many CampaignsToProcesses to update.
     */
    limit?: number
  }

  /**
   * CampaignsToProcess upsert
   */
  export type CampaignsToProcessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * The filter to search for the CampaignsToProcess to update in case it exists.
     */
    where: CampaignsToProcessWhereUniqueInput
    /**
     * In case the CampaignsToProcess found by the `where` argument doesn't exist, create a new CampaignsToProcess with this data.
     */
    create: XOR<CampaignsToProcessCreateInput, CampaignsToProcessUncheckedCreateInput>
    /**
     * In case the CampaignsToProcess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignsToProcessUpdateInput, CampaignsToProcessUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignsToProcess delete
   */
  export type CampaignsToProcessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
    /**
     * Filter which CampaignsToProcess to delete.
     */
    where: CampaignsToProcessWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignsToProcess deleteMany
   */
  export type CampaignsToProcessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignsToProcesses to delete
     */
    where?: CampaignsToProcessWhereInput
    /**
     * Limit how many CampaignsToProcesses to delete.
     */
    limit?: number
  }

  /**
   * CampaignsToProcess without action
   */
  export type CampaignsToProcessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsToProcess
     */
    select?: CampaignsToProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignsToProcess
     */
    omit?: CampaignsToProcessOmit<ExtArgs> | null
  }


  /**
   * Model Claims
   */

  export type AggregateClaims = {
    _count: ClaimsCountAggregateOutputType | null
    _avg: ClaimsAvgAggregateOutputType | null
    _sum: ClaimsSumAggregateOutputType | null
    _min: ClaimsMinAggregateOutputType | null
    _max: ClaimsMaxAggregateOutputType | null
  }

  export type ClaimsAvgAggregateOutputType = {
    chainId: number | null
    timestamp: number | null
  }

  export type ClaimsSumAggregateOutputType = {
    chainId: number | null
    timestamp: number | null
  }

  export type ClaimsMinAggregateOutputType = {
    chainId: number | null
    recipient: string | null
    campaignId: string | null
    rewardToken: string | null
    reason: string | null
    root: string | null
    claimed: string | null
    timestamp: number | null
  }

  export type ClaimsMaxAggregateOutputType = {
    chainId: number | null
    recipient: string | null
    campaignId: string | null
    rewardToken: string | null
    reason: string | null
    root: string | null
    claimed: string | null
    timestamp: number | null
  }

  export type ClaimsCountAggregateOutputType = {
    chainId: number
    recipient: number
    campaignId: number
    rewardToken: number
    reason: number
    root: number
    claimed: number
    timestamp: number
    _all: number
  }


  export type ClaimsAvgAggregateInputType = {
    chainId?: true
    timestamp?: true
  }

  export type ClaimsSumAggregateInputType = {
    chainId?: true
    timestamp?: true
  }

  export type ClaimsMinAggregateInputType = {
    chainId?: true
    recipient?: true
    campaignId?: true
    rewardToken?: true
    reason?: true
    root?: true
    claimed?: true
    timestamp?: true
  }

  export type ClaimsMaxAggregateInputType = {
    chainId?: true
    recipient?: true
    campaignId?: true
    rewardToken?: true
    reason?: true
    root?: true
    claimed?: true
    timestamp?: true
  }

  export type ClaimsCountAggregateInputType = {
    chainId?: true
    recipient?: true
    campaignId?: true
    rewardToken?: true
    reason?: true
    root?: true
    claimed?: true
    timestamp?: true
    _all?: true
  }

  export type ClaimsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to aggregate.
     */
    where?: ClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimsOrderByWithRelationInput | ClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claims
    **/
    _count?: true | ClaimsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimsMaxAggregateInputType
  }

  export type GetClaimsAggregateType<T extends ClaimsAggregateArgs> = {
        [P in keyof T & keyof AggregateClaims]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaims[P]>
      : GetScalarType<T[P], AggregateClaims[P]>
  }




  export type ClaimsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimsWhereInput
    orderBy?: ClaimsOrderByWithAggregationInput | ClaimsOrderByWithAggregationInput[]
    by: ClaimsScalarFieldEnum[] | ClaimsScalarFieldEnum
    having?: ClaimsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimsCountAggregateInputType | true
    _avg?: ClaimsAvgAggregateInputType
    _sum?: ClaimsSumAggregateInputType
    _min?: ClaimsMinAggregateInputType
    _max?: ClaimsMaxAggregateInputType
  }

  export type ClaimsGroupByOutputType = {
    chainId: number
    recipient: string
    campaignId: string
    rewardToken: string
    reason: string
    root: string
    claimed: string
    timestamp: number
    _count: ClaimsCountAggregateOutputType | null
    _avg: ClaimsAvgAggregateOutputType | null
    _sum: ClaimsSumAggregateOutputType | null
    _min: ClaimsMinAggregateOutputType | null
    _max: ClaimsMaxAggregateOutputType | null
  }

  type GetClaimsGroupByPayload<T extends ClaimsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimsGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimsGroupByOutputType[P]>
        }
      >
    >


  export type ClaimsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    recipient?: boolean
    campaignId?: boolean
    rewardToken?: boolean
    reason?: boolean
    root?: boolean
    claimed?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["claims"]>

  export type ClaimsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    recipient?: boolean
    campaignId?: boolean
    rewardToken?: boolean
    reason?: boolean
    root?: boolean
    claimed?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["claims"]>

  export type ClaimsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    recipient?: boolean
    campaignId?: boolean
    rewardToken?: boolean
    reason?: boolean
    root?: boolean
    claimed?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["claims"]>

  export type ClaimsSelectScalar = {
    chainId?: boolean
    recipient?: boolean
    campaignId?: boolean
    rewardToken?: boolean
    reason?: boolean
    root?: boolean
    claimed?: boolean
    timestamp?: boolean
  }

  export type ClaimsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "recipient" | "campaignId" | "rewardToken" | "reason" | "root" | "claimed" | "timestamp", ExtArgs["result"]["claims"]>

  export type $ClaimsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Claims"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      recipient: string
      campaignId: string
      rewardToken: string
      reason: string
      root: string
      claimed: string
      timestamp: number
    }, ExtArgs["result"]["claims"]>
    composites: {}
  }

  type ClaimsGetPayload<S extends boolean | null | undefined | ClaimsDefaultArgs> = $Result.GetResult<Prisma.$ClaimsPayload, S>

  type ClaimsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaimsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ClaimsCountAggregateInputType | true
    }

  export interface ClaimsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Claims'], meta: { name: 'Claims' } }
    /**
     * Find zero or one Claims that matches the filter.
     * @param {ClaimsFindUniqueArgs} args - Arguments to find a Claims
     * @example
     * // Get one Claims
     * const claims = await prisma.claims.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimsFindUniqueArgs>(args: SelectSubset<T, ClaimsFindUniqueArgs<ExtArgs>>): Prisma__ClaimsClient<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Claims that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaimsFindUniqueOrThrowArgs} args - Arguments to find a Claims
     * @example
     * // Get one Claims
     * const claims = await prisma.claims.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimsClient<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsFindFirstArgs} args - Arguments to find a Claims
     * @example
     * // Get one Claims
     * const claims = await prisma.claims.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimsFindFirstArgs>(args?: SelectSubset<T, ClaimsFindFirstArgs<ExtArgs>>): Prisma__ClaimsClient<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Claims that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsFindFirstOrThrowArgs} args - Arguments to find a Claims
     * @example
     * // Get one Claims
     * const claims = await prisma.claims.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimsClient<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claims.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claims.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const claimsWithChainIdOnly = await prisma.claims.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends ClaimsFindManyArgs>(args?: SelectSubset<T, ClaimsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Claims.
     * @param {ClaimsCreateArgs} args - Arguments to create a Claims.
     * @example
     * // Create one Claims
     * const Claims = await prisma.claims.create({
     *   data: {
     *     // ... data to create a Claims
     *   }
     * })
     * 
     */
    create<T extends ClaimsCreateArgs>(args: SelectSubset<T, ClaimsCreateArgs<ExtArgs>>): Prisma__ClaimsClient<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Claims.
     * @param {ClaimsCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claims = await prisma.claims.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimsCreateManyArgs>(args?: SelectSubset<T, ClaimsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claims and returns the data saved in the database.
     * @param {ClaimsCreateManyAndReturnArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claims = await prisma.claims.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claims and only return the `chainId`
     * const claimsWithChainIdOnly = await prisma.claims.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Claims.
     * @param {ClaimsDeleteArgs} args - Arguments to delete one Claims.
     * @example
     * // Delete one Claims
     * const Claims = await prisma.claims.delete({
     *   where: {
     *     // ... filter to delete one Claims
     *   }
     * })
     * 
     */
    delete<T extends ClaimsDeleteArgs>(args: SelectSubset<T, ClaimsDeleteArgs<ExtArgs>>): Prisma__ClaimsClient<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Claims.
     * @param {ClaimsUpdateArgs} args - Arguments to update one Claims.
     * @example
     * // Update one Claims
     * const claims = await prisma.claims.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimsUpdateArgs>(args: SelectSubset<T, ClaimsUpdateArgs<ExtArgs>>): Prisma__ClaimsClient<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Claims.
     * @param {ClaimsDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claims.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimsDeleteManyArgs>(args?: SelectSubset<T, ClaimsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claims = await prisma.claims.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimsUpdateManyArgs>(args: SelectSubset<T, ClaimsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims and returns the data updated in the database.
     * @param {ClaimsUpdateManyAndReturnArgs} args - Arguments to update many Claims.
     * @example
     * // Update many Claims
     * const claims = await prisma.claims.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claims and only return the `chainId`
     * const claimsWithChainIdOnly = await prisma.claims.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClaimsUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaimsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Claims.
     * @param {ClaimsUpsertArgs} args - Arguments to update or create a Claims.
     * @example
     * // Update or create a Claims
     * const claims = await prisma.claims.upsert({
     *   create: {
     *     // ... data to create a Claims
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claims we want to update
     *   }
     * })
     */
    upsert<T extends ClaimsUpsertArgs>(args: SelectSubset<T, ClaimsUpsertArgs<ExtArgs>>): Prisma__ClaimsClient<$Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claims.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimsCountArgs>(
      args?: Subset<T, ClaimsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaimsAggregateArgs>(args: Subset<T, ClaimsAggregateArgs>): Prisma.PrismaPromise<GetClaimsAggregateType<T>>

    /**
     * Group by Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaimsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimsGroupByArgs['orderBy'] }
        : { orderBy?: ClaimsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaimsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Claims model
   */
  readonly fields: ClaimsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claims.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Claims model
   */ 
  interface ClaimsFieldRefs {
    readonly chainId: FieldRef<"Claims", 'Int'>
    readonly recipient: FieldRef<"Claims", 'String'>
    readonly campaignId: FieldRef<"Claims", 'String'>
    readonly rewardToken: FieldRef<"Claims", 'String'>
    readonly reason: FieldRef<"Claims", 'String'>
    readonly root: FieldRef<"Claims", 'String'>
    readonly claimed: FieldRef<"Claims", 'String'>
    readonly timestamp: FieldRef<"Claims", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Claims findUnique
   */
  export type ClaimsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where: ClaimsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Claims findUniqueOrThrow
   */
  export type ClaimsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where: ClaimsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Claims findFirst
   */
  export type ClaimsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimsOrderByWithRelationInput | ClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimsScalarFieldEnum | ClaimsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Claims findFirstOrThrow
   */
  export type ClaimsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimsOrderByWithRelationInput | ClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimsScalarFieldEnum | ClaimsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Claims findMany
   */
  export type ClaimsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimsOrderByWithRelationInput | ClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claims.
     */
    cursor?: ClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    distinct?: ClaimsScalarFieldEnum | ClaimsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Claims create
   */
  export type ClaimsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * The data needed to create a Claims.
     */
    data: XOR<ClaimsCreateInput, ClaimsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Claims createMany
   */
  export type ClaimsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claims.
     */
    data: ClaimsCreateManyInput | ClaimsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Claims createManyAndReturn
   */
  export type ClaimsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * The data used to create many Claims.
     */
    data: ClaimsCreateManyInput | ClaimsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Claims update
   */
  export type ClaimsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * The data needed to update a Claims.
     */
    data: XOR<ClaimsUpdateInput, ClaimsUncheckedUpdateInput>
    /**
     * Choose, which Claims to update.
     */
    where: ClaimsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Claims updateMany
   */
  export type ClaimsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimsUpdateManyMutationInput, ClaimsUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimsWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
  }

  /**
   * Claims updateManyAndReturn
   */
  export type ClaimsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimsUpdateManyMutationInput, ClaimsUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimsWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
  }

  /**
   * Claims upsert
   */
  export type ClaimsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * The filter to search for the Claims to update in case it exists.
     */
    where: ClaimsWhereUniqueInput
    /**
     * In case the Claims found by the `where` argument doesn't exist, create a new Claims with this data.
     */
    create: XOR<ClaimsCreateInput, ClaimsUncheckedCreateInput>
    /**
     * In case the Claims was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimsUpdateInput, ClaimsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Claims delete
   */
  export type ClaimsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
    /**
     * Filter which Claims to delete.
     */
    where: ClaimsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Claims deleteMany
   */
  export type ClaimsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to delete
     */
    where?: ClaimsWhereInput
    /**
     * Limit how many Claims to delete.
     */
    limit?: number
  }

  /**
   * Claims without action
   */
  export type ClaimsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: ClaimsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claims
     */
    omit?: ClaimsOmit<ExtArgs> | null
  }


  /**
   * Model ClaimsOverTime
   */

  export type AggregateClaimsOverTime = {
    _count: ClaimsOverTimeCountAggregateOutputType | null
    _avg: ClaimsOverTimeAvgAggregateOutputType | null
    _sum: ClaimsOverTimeSumAggregateOutputType | null
    _min: ClaimsOverTimeMinAggregateOutputType | null
    _max: ClaimsOverTimeMaxAggregateOutputType | null
  }

  export type ClaimsOverTimeAvgAggregateOutputType = {
    chainId: number | null
    timestamp: number | null
  }

  export type ClaimsOverTimeSumAggregateOutputType = {
    chainId: number | null
    timestamp: number | null
  }

  export type ClaimsOverTimeMinAggregateOutputType = {
    chainId: number | null
    recipient: string | null
    campaignId: string | null
    rewardToken: string | null
    reason: string | null
    root: string | null
    claimed: string | null
    timestamp: number | null
  }

  export type ClaimsOverTimeMaxAggregateOutputType = {
    chainId: number | null
    recipient: string | null
    campaignId: string | null
    rewardToken: string | null
    reason: string | null
    root: string | null
    claimed: string | null
    timestamp: number | null
  }

  export type ClaimsOverTimeCountAggregateOutputType = {
    chainId: number
    recipient: number
    campaignId: number
    rewardToken: number
    reason: number
    root: number
    claimed: number
    timestamp: number
    _all: number
  }


  export type ClaimsOverTimeAvgAggregateInputType = {
    chainId?: true
    timestamp?: true
  }

  export type ClaimsOverTimeSumAggregateInputType = {
    chainId?: true
    timestamp?: true
  }

  export type ClaimsOverTimeMinAggregateInputType = {
    chainId?: true
    recipient?: true
    campaignId?: true
    rewardToken?: true
    reason?: true
    root?: true
    claimed?: true
    timestamp?: true
  }

  export type ClaimsOverTimeMaxAggregateInputType = {
    chainId?: true
    recipient?: true
    campaignId?: true
    rewardToken?: true
    reason?: true
    root?: true
    claimed?: true
    timestamp?: true
  }

  export type ClaimsOverTimeCountAggregateInputType = {
    chainId?: true
    recipient?: true
    campaignId?: true
    rewardToken?: true
    reason?: true
    root?: true
    claimed?: true
    timestamp?: true
    _all?: true
  }

  export type ClaimsOverTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaimsOverTime to aggregate.
     */
    where?: ClaimsOverTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimsOverTimes to fetch.
     */
    orderBy?: ClaimsOverTimeOrderByWithRelationInput | ClaimsOverTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimsOverTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimsOverTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimsOverTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClaimsOverTimes
    **/
    _count?: true | ClaimsOverTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimsOverTimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimsOverTimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimsOverTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimsOverTimeMaxAggregateInputType
  }

  export type GetClaimsOverTimeAggregateType<T extends ClaimsOverTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateClaimsOverTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaimsOverTime[P]>
      : GetScalarType<T[P], AggregateClaimsOverTime[P]>
  }




  export type ClaimsOverTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimsOverTimeWhereInput
    orderBy?: ClaimsOverTimeOrderByWithAggregationInput | ClaimsOverTimeOrderByWithAggregationInput[]
    by: ClaimsOverTimeScalarFieldEnum[] | ClaimsOverTimeScalarFieldEnum
    having?: ClaimsOverTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimsOverTimeCountAggregateInputType | true
    _avg?: ClaimsOverTimeAvgAggregateInputType
    _sum?: ClaimsOverTimeSumAggregateInputType
    _min?: ClaimsOverTimeMinAggregateInputType
    _max?: ClaimsOverTimeMaxAggregateInputType
  }

  export type ClaimsOverTimeGroupByOutputType = {
    chainId: number
    recipient: string
    campaignId: string
    rewardToken: string
    reason: string
    root: string
    claimed: string
    timestamp: number
    _count: ClaimsOverTimeCountAggregateOutputType | null
    _avg: ClaimsOverTimeAvgAggregateOutputType | null
    _sum: ClaimsOverTimeSumAggregateOutputType | null
    _min: ClaimsOverTimeMinAggregateOutputType | null
    _max: ClaimsOverTimeMaxAggregateOutputType | null
  }

  type GetClaimsOverTimeGroupByPayload<T extends ClaimsOverTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimsOverTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimsOverTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimsOverTimeGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimsOverTimeGroupByOutputType[P]>
        }
      >
    >


  export type ClaimsOverTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    recipient?: boolean
    campaignId?: boolean
    rewardToken?: boolean
    reason?: boolean
    root?: boolean
    claimed?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["claimsOverTime"]>

  export type ClaimsOverTimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    recipient?: boolean
    campaignId?: boolean
    rewardToken?: boolean
    reason?: boolean
    root?: boolean
    claimed?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["claimsOverTime"]>

  export type ClaimsOverTimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    recipient?: boolean
    campaignId?: boolean
    rewardToken?: boolean
    reason?: boolean
    root?: boolean
    claimed?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["claimsOverTime"]>

  export type ClaimsOverTimeSelectScalar = {
    chainId?: boolean
    recipient?: boolean
    campaignId?: boolean
    rewardToken?: boolean
    reason?: boolean
    root?: boolean
    claimed?: boolean
    timestamp?: boolean
  }

  export type ClaimsOverTimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "recipient" | "campaignId" | "rewardToken" | "reason" | "root" | "claimed" | "timestamp", ExtArgs["result"]["claimsOverTime"]>

  export type $ClaimsOverTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClaimsOverTime"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      recipient: string
      campaignId: string
      rewardToken: string
      reason: string
      root: string
      claimed: string
      timestamp: number
    }, ExtArgs["result"]["claimsOverTime"]>
    composites: {}
  }

  type ClaimsOverTimeGetPayload<S extends boolean | null | undefined | ClaimsOverTimeDefaultArgs> = $Result.GetResult<Prisma.$ClaimsOverTimePayload, S>

  type ClaimsOverTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaimsOverTimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ClaimsOverTimeCountAggregateInputType | true
    }

  export interface ClaimsOverTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClaimsOverTime'], meta: { name: 'ClaimsOverTime' } }
    /**
     * Find zero or one ClaimsOverTime that matches the filter.
     * @param {ClaimsOverTimeFindUniqueArgs} args - Arguments to find a ClaimsOverTime
     * @example
     * // Get one ClaimsOverTime
     * const claimsOverTime = await prisma.claimsOverTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimsOverTimeFindUniqueArgs>(args: SelectSubset<T, ClaimsOverTimeFindUniqueArgs<ExtArgs>>): Prisma__ClaimsOverTimeClient<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ClaimsOverTime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaimsOverTimeFindUniqueOrThrowArgs} args - Arguments to find a ClaimsOverTime
     * @example
     * // Get one ClaimsOverTime
     * const claimsOverTime = await prisma.claimsOverTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimsOverTimeFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimsOverTimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimsOverTimeClient<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ClaimsOverTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsOverTimeFindFirstArgs} args - Arguments to find a ClaimsOverTime
     * @example
     * // Get one ClaimsOverTime
     * const claimsOverTime = await prisma.claimsOverTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimsOverTimeFindFirstArgs>(args?: SelectSubset<T, ClaimsOverTimeFindFirstArgs<ExtArgs>>): Prisma__ClaimsOverTimeClient<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ClaimsOverTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsOverTimeFindFirstOrThrowArgs} args - Arguments to find a ClaimsOverTime
     * @example
     * // Get one ClaimsOverTime
     * const claimsOverTime = await prisma.claimsOverTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimsOverTimeFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimsOverTimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimsOverTimeClient<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ClaimsOverTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsOverTimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClaimsOverTimes
     * const claimsOverTimes = await prisma.claimsOverTime.findMany()
     * 
     * // Get first 10 ClaimsOverTimes
     * const claimsOverTimes = await prisma.claimsOverTime.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const claimsOverTimeWithChainIdOnly = await prisma.claimsOverTime.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends ClaimsOverTimeFindManyArgs>(args?: SelectSubset<T, ClaimsOverTimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ClaimsOverTime.
     * @param {ClaimsOverTimeCreateArgs} args - Arguments to create a ClaimsOverTime.
     * @example
     * // Create one ClaimsOverTime
     * const ClaimsOverTime = await prisma.claimsOverTime.create({
     *   data: {
     *     // ... data to create a ClaimsOverTime
     *   }
     * })
     * 
     */
    create<T extends ClaimsOverTimeCreateArgs>(args: SelectSubset<T, ClaimsOverTimeCreateArgs<ExtArgs>>): Prisma__ClaimsOverTimeClient<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ClaimsOverTimes.
     * @param {ClaimsOverTimeCreateManyArgs} args - Arguments to create many ClaimsOverTimes.
     * @example
     * // Create many ClaimsOverTimes
     * const claimsOverTime = await prisma.claimsOverTime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimsOverTimeCreateManyArgs>(args?: SelectSubset<T, ClaimsOverTimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClaimsOverTimes and returns the data saved in the database.
     * @param {ClaimsOverTimeCreateManyAndReturnArgs} args - Arguments to create many ClaimsOverTimes.
     * @example
     * // Create many ClaimsOverTimes
     * const claimsOverTime = await prisma.claimsOverTime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClaimsOverTimes and only return the `chainId`
     * const claimsOverTimeWithChainIdOnly = await prisma.claimsOverTime.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimsOverTimeCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimsOverTimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ClaimsOverTime.
     * @param {ClaimsOverTimeDeleteArgs} args - Arguments to delete one ClaimsOverTime.
     * @example
     * // Delete one ClaimsOverTime
     * const ClaimsOverTime = await prisma.claimsOverTime.delete({
     *   where: {
     *     // ... filter to delete one ClaimsOverTime
     *   }
     * })
     * 
     */
    delete<T extends ClaimsOverTimeDeleteArgs>(args: SelectSubset<T, ClaimsOverTimeDeleteArgs<ExtArgs>>): Prisma__ClaimsOverTimeClient<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ClaimsOverTime.
     * @param {ClaimsOverTimeUpdateArgs} args - Arguments to update one ClaimsOverTime.
     * @example
     * // Update one ClaimsOverTime
     * const claimsOverTime = await prisma.claimsOverTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimsOverTimeUpdateArgs>(args: SelectSubset<T, ClaimsOverTimeUpdateArgs<ExtArgs>>): Prisma__ClaimsOverTimeClient<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ClaimsOverTimes.
     * @param {ClaimsOverTimeDeleteManyArgs} args - Arguments to filter ClaimsOverTimes to delete.
     * @example
     * // Delete a few ClaimsOverTimes
     * const { count } = await prisma.claimsOverTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimsOverTimeDeleteManyArgs>(args?: SelectSubset<T, ClaimsOverTimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClaimsOverTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsOverTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClaimsOverTimes
     * const claimsOverTime = await prisma.claimsOverTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimsOverTimeUpdateManyArgs>(args: SelectSubset<T, ClaimsOverTimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClaimsOverTimes and returns the data updated in the database.
     * @param {ClaimsOverTimeUpdateManyAndReturnArgs} args - Arguments to update many ClaimsOverTimes.
     * @example
     * // Update many ClaimsOverTimes
     * const claimsOverTime = await prisma.claimsOverTime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClaimsOverTimes and only return the `chainId`
     * const claimsOverTimeWithChainIdOnly = await prisma.claimsOverTime.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClaimsOverTimeUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaimsOverTimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ClaimsOverTime.
     * @param {ClaimsOverTimeUpsertArgs} args - Arguments to update or create a ClaimsOverTime.
     * @example
     * // Update or create a ClaimsOverTime
     * const claimsOverTime = await prisma.claimsOverTime.upsert({
     *   create: {
     *     // ... data to create a ClaimsOverTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClaimsOverTime we want to update
     *   }
     * })
     */
    upsert<T extends ClaimsOverTimeUpsertArgs>(args: SelectSubset<T, ClaimsOverTimeUpsertArgs<ExtArgs>>): Prisma__ClaimsOverTimeClient<$Result.GetResult<Prisma.$ClaimsOverTimePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ClaimsOverTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsOverTimeCountArgs} args - Arguments to filter ClaimsOverTimes to count.
     * @example
     * // Count the number of ClaimsOverTimes
     * const count = await prisma.claimsOverTime.count({
     *   where: {
     *     // ... the filter for the ClaimsOverTimes we want to count
     *   }
     * })
    **/
    count<T extends ClaimsOverTimeCountArgs>(
      args?: Subset<T, ClaimsOverTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimsOverTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClaimsOverTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsOverTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaimsOverTimeAggregateArgs>(args: Subset<T, ClaimsOverTimeAggregateArgs>): Prisma.PrismaPromise<GetClaimsOverTimeAggregateType<T>>

    /**
     * Group by ClaimsOverTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsOverTimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaimsOverTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimsOverTimeGroupByArgs['orderBy'] }
        : { orderBy?: ClaimsOverTimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaimsOverTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimsOverTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClaimsOverTime model
   */
  readonly fields: ClaimsOverTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClaimsOverTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimsOverTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClaimsOverTime model
   */ 
  interface ClaimsOverTimeFieldRefs {
    readonly chainId: FieldRef<"ClaimsOverTime", 'Int'>
    readonly recipient: FieldRef<"ClaimsOverTime", 'String'>
    readonly campaignId: FieldRef<"ClaimsOverTime", 'String'>
    readonly rewardToken: FieldRef<"ClaimsOverTime", 'String'>
    readonly reason: FieldRef<"ClaimsOverTime", 'String'>
    readonly root: FieldRef<"ClaimsOverTime", 'String'>
    readonly claimed: FieldRef<"ClaimsOverTime", 'String'>
    readonly timestamp: FieldRef<"ClaimsOverTime", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClaimsOverTime findUnique
   */
  export type ClaimsOverTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * Filter, which ClaimsOverTime to fetch.
     */
    where: ClaimsOverTimeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ClaimsOverTime findUniqueOrThrow
   */
  export type ClaimsOverTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * Filter, which ClaimsOverTime to fetch.
     */
    where: ClaimsOverTimeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ClaimsOverTime findFirst
   */
  export type ClaimsOverTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * Filter, which ClaimsOverTime to fetch.
     */
    where?: ClaimsOverTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimsOverTimes to fetch.
     */
    orderBy?: ClaimsOverTimeOrderByWithRelationInput | ClaimsOverTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimsOverTimes.
     */
    cursor?: ClaimsOverTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimsOverTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimsOverTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimsOverTimes.
     */
    distinct?: ClaimsOverTimeScalarFieldEnum | ClaimsOverTimeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ClaimsOverTime findFirstOrThrow
   */
  export type ClaimsOverTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * Filter, which ClaimsOverTime to fetch.
     */
    where?: ClaimsOverTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimsOverTimes to fetch.
     */
    orderBy?: ClaimsOverTimeOrderByWithRelationInput | ClaimsOverTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimsOverTimes.
     */
    cursor?: ClaimsOverTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimsOverTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimsOverTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimsOverTimes.
     */
    distinct?: ClaimsOverTimeScalarFieldEnum | ClaimsOverTimeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ClaimsOverTime findMany
   */
  export type ClaimsOverTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * Filter, which ClaimsOverTimes to fetch.
     */
    where?: ClaimsOverTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimsOverTimes to fetch.
     */
    orderBy?: ClaimsOverTimeOrderByWithRelationInput | ClaimsOverTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClaimsOverTimes.
     */
    cursor?: ClaimsOverTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimsOverTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimsOverTimes.
     */
    skip?: number
    distinct?: ClaimsOverTimeScalarFieldEnum | ClaimsOverTimeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ClaimsOverTime create
   */
  export type ClaimsOverTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * The data needed to create a ClaimsOverTime.
     */
    data: XOR<ClaimsOverTimeCreateInput, ClaimsOverTimeUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ClaimsOverTime createMany
   */
  export type ClaimsOverTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClaimsOverTimes.
     */
    data: ClaimsOverTimeCreateManyInput | ClaimsOverTimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClaimsOverTime createManyAndReturn
   */
  export type ClaimsOverTimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * The data used to create many ClaimsOverTimes.
     */
    data: ClaimsOverTimeCreateManyInput | ClaimsOverTimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClaimsOverTime update
   */
  export type ClaimsOverTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * The data needed to update a ClaimsOverTime.
     */
    data: XOR<ClaimsOverTimeUpdateInput, ClaimsOverTimeUncheckedUpdateInput>
    /**
     * Choose, which ClaimsOverTime to update.
     */
    where: ClaimsOverTimeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ClaimsOverTime updateMany
   */
  export type ClaimsOverTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClaimsOverTimes.
     */
    data: XOR<ClaimsOverTimeUpdateManyMutationInput, ClaimsOverTimeUncheckedUpdateManyInput>
    /**
     * Filter which ClaimsOverTimes to update
     */
    where?: ClaimsOverTimeWhereInput
    /**
     * Limit how many ClaimsOverTimes to update.
     */
    limit?: number
  }

  /**
   * ClaimsOverTime updateManyAndReturn
   */
  export type ClaimsOverTimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * The data used to update ClaimsOverTimes.
     */
    data: XOR<ClaimsOverTimeUpdateManyMutationInput, ClaimsOverTimeUncheckedUpdateManyInput>
    /**
     * Filter which ClaimsOverTimes to update
     */
    where?: ClaimsOverTimeWhereInput
    /**
     * Limit how many ClaimsOverTimes to update.
     */
    limit?: number
  }

  /**
   * ClaimsOverTime upsert
   */
  export type ClaimsOverTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * The filter to search for the ClaimsOverTime to update in case it exists.
     */
    where: ClaimsOverTimeWhereUniqueInput
    /**
     * In case the ClaimsOverTime found by the `where` argument doesn't exist, create a new ClaimsOverTime with this data.
     */
    create: XOR<ClaimsOverTimeCreateInput, ClaimsOverTimeUncheckedCreateInput>
    /**
     * In case the ClaimsOverTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimsOverTimeUpdateInput, ClaimsOverTimeUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ClaimsOverTime delete
   */
  export type ClaimsOverTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
    /**
     * Filter which ClaimsOverTime to delete.
     */
    where: ClaimsOverTimeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ClaimsOverTime deleteMany
   */
  export type ClaimsOverTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaimsOverTimes to delete
     */
    where?: ClaimsOverTimeWhereInput
    /**
     * Limit how many ClaimsOverTimes to delete.
     */
    limit?: number
  }

  /**
   * ClaimsOverTime without action
   */
  export type ClaimsOverTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimsOverTime
     */
    select?: ClaimsOverTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaimsOverTime
     */
    omit?: ClaimsOverTimeOmit<ExtArgs> | null
  }


  /**
   * Model ALMs
   */

  export type AggregateALMs = {
    _count: ALMsCountAggregateOutputType | null
    _avg: ALMsAvgAggregateOutputType | null
    _sum: ALMsSumAggregateOutputType | null
    _min: ALMsMinAggregateOutputType | null
    _max: ALMsMaxAggregateOutputType | null
  }

  export type ALMsAvgAggregateOutputType = {
    chainId: number | null
  }

  export type ALMsSumAggregateOutputType = {
    chainId: number | null
  }

  export type ALMsMinAggregateOutputType = {
    chainId: number | null
    campaignId: string | null
    name: string | null
    type: string | null
    address: string | null
    target: string | null
    owner: string | null
    underlyingPool: string | null
  }

  export type ALMsMaxAggregateOutputType = {
    chainId: number | null
    campaignId: string | null
    name: string | null
    type: string | null
    address: string | null
    target: string | null
    owner: string | null
    underlyingPool: string | null
  }

  export type ALMsCountAggregateOutputType = {
    chainId: number
    campaignId: number
    name: number
    type: number
    address: number
    target: number
    owner: number
    underlyingPool: number
    _all: number
  }


  export type ALMsAvgAggregateInputType = {
    chainId?: true
  }

  export type ALMsSumAggregateInputType = {
    chainId?: true
  }

  export type ALMsMinAggregateInputType = {
    chainId?: true
    campaignId?: true
    name?: true
    type?: true
    address?: true
    target?: true
    owner?: true
    underlyingPool?: true
  }

  export type ALMsMaxAggregateInputType = {
    chainId?: true
    campaignId?: true
    name?: true
    type?: true
    address?: true
    target?: true
    owner?: true
    underlyingPool?: true
  }

  export type ALMsCountAggregateInputType = {
    chainId?: true
    campaignId?: true
    name?: true
    type?: true
    address?: true
    target?: true
    owner?: true
    underlyingPool?: true
    _all?: true
  }

  export type ALMsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ALMs to aggregate.
     */
    where?: ALMsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ALMs to fetch.
     */
    orderBy?: ALMsOrderByWithRelationInput | ALMsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ALMsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ALMs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ALMs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ALMs
    **/
    _count?: true | ALMsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ALMsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ALMsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ALMsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ALMsMaxAggregateInputType
  }

  export type GetALMsAggregateType<T extends ALMsAggregateArgs> = {
        [P in keyof T & keyof AggregateALMs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateALMs[P]>
      : GetScalarType<T[P], AggregateALMs[P]>
  }




  export type ALMsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ALMsWhereInput
    orderBy?: ALMsOrderByWithAggregationInput | ALMsOrderByWithAggregationInput[]
    by: ALMsScalarFieldEnum[] | ALMsScalarFieldEnum
    having?: ALMsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ALMsCountAggregateInputType | true
    _avg?: ALMsAvgAggregateInputType
    _sum?: ALMsSumAggregateInputType
    _min?: ALMsMinAggregateInputType
    _max?: ALMsMaxAggregateInputType
  }

  export type ALMsGroupByOutputType = {
    chainId: number
    campaignId: string
    name: string
    type: string
    address: string
    target: string
    owner: string
    underlyingPool: string
    _count: ALMsCountAggregateOutputType | null
    _avg: ALMsAvgAggregateOutputType | null
    _sum: ALMsSumAggregateOutputType | null
    _min: ALMsMinAggregateOutputType | null
    _max: ALMsMaxAggregateOutputType | null
  }

  type GetALMsGroupByPayload<T extends ALMsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ALMsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ALMsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ALMsGroupByOutputType[P]>
            : GetScalarType<T[P], ALMsGroupByOutputType[P]>
        }
      >
    >


  export type ALMsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    campaignId?: boolean
    name?: boolean
    type?: boolean
    address?: boolean
    target?: boolean
    owner?: boolean
    underlyingPool?: boolean
  }, ExtArgs["result"]["aLMs"]>

  export type ALMsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    campaignId?: boolean
    name?: boolean
    type?: boolean
    address?: boolean
    target?: boolean
    owner?: boolean
    underlyingPool?: boolean
  }, ExtArgs["result"]["aLMs"]>

  export type ALMsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    campaignId?: boolean
    name?: boolean
    type?: boolean
    address?: boolean
    target?: boolean
    owner?: boolean
    underlyingPool?: boolean
  }, ExtArgs["result"]["aLMs"]>

  export type ALMsSelectScalar = {
    chainId?: boolean
    campaignId?: boolean
    name?: boolean
    type?: boolean
    address?: boolean
    target?: boolean
    owner?: boolean
    underlyingPool?: boolean
  }

  export type ALMsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "campaignId" | "name" | "type" | "address" | "target" | "owner" | "underlyingPool", ExtArgs["result"]["aLMs"]>

  export type $ALMsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ALMs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      campaignId: string
      name: string
      type: string
      address: string
      target: string
      owner: string
      underlyingPool: string
    }, ExtArgs["result"]["aLMs"]>
    composites: {}
  }

  type ALMsGetPayload<S extends boolean | null | undefined | ALMsDefaultArgs> = $Result.GetResult<Prisma.$ALMsPayload, S>

  type ALMsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ALMsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ALMsCountAggregateInputType | true
    }

  export interface ALMsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ALMs'], meta: { name: 'ALMs' } }
    /**
     * Find zero or one ALMs that matches the filter.
     * @param {ALMsFindUniqueArgs} args - Arguments to find a ALMs
     * @example
     * // Get one ALMs
     * const aLMs = await prisma.aLMs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ALMsFindUniqueArgs>(args: SelectSubset<T, ALMsFindUniqueArgs<ExtArgs>>): Prisma__ALMsClient<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ALMs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ALMsFindUniqueOrThrowArgs} args - Arguments to find a ALMs
     * @example
     * // Get one ALMs
     * const aLMs = await prisma.aLMs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ALMsFindUniqueOrThrowArgs>(args: SelectSubset<T, ALMsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ALMsClient<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ALMs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALMsFindFirstArgs} args - Arguments to find a ALMs
     * @example
     * // Get one ALMs
     * const aLMs = await prisma.aLMs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ALMsFindFirstArgs>(args?: SelectSubset<T, ALMsFindFirstArgs<ExtArgs>>): Prisma__ALMsClient<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ALMs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALMsFindFirstOrThrowArgs} args - Arguments to find a ALMs
     * @example
     * // Get one ALMs
     * const aLMs = await prisma.aLMs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ALMsFindFirstOrThrowArgs>(args?: SelectSubset<T, ALMsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ALMsClient<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ALMs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALMsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ALMs
     * const aLMs = await prisma.aLMs.findMany()
     * 
     * // Get first 10 ALMs
     * const aLMs = await prisma.aLMs.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const aLMsWithChainIdOnly = await prisma.aLMs.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends ALMsFindManyArgs>(args?: SelectSubset<T, ALMsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ALMs.
     * @param {ALMsCreateArgs} args - Arguments to create a ALMs.
     * @example
     * // Create one ALMs
     * const ALMs = await prisma.aLMs.create({
     *   data: {
     *     // ... data to create a ALMs
     *   }
     * })
     * 
     */
    create<T extends ALMsCreateArgs>(args: SelectSubset<T, ALMsCreateArgs<ExtArgs>>): Prisma__ALMsClient<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ALMs.
     * @param {ALMsCreateManyArgs} args - Arguments to create many ALMs.
     * @example
     * // Create many ALMs
     * const aLMs = await prisma.aLMs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ALMsCreateManyArgs>(args?: SelectSubset<T, ALMsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ALMs and returns the data saved in the database.
     * @param {ALMsCreateManyAndReturnArgs} args - Arguments to create many ALMs.
     * @example
     * // Create many ALMs
     * const aLMs = await prisma.aLMs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ALMs and only return the `chainId`
     * const aLMsWithChainIdOnly = await prisma.aLMs.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ALMsCreateManyAndReturnArgs>(args?: SelectSubset<T, ALMsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ALMs.
     * @param {ALMsDeleteArgs} args - Arguments to delete one ALMs.
     * @example
     * // Delete one ALMs
     * const ALMs = await prisma.aLMs.delete({
     *   where: {
     *     // ... filter to delete one ALMs
     *   }
     * })
     * 
     */
    delete<T extends ALMsDeleteArgs>(args: SelectSubset<T, ALMsDeleteArgs<ExtArgs>>): Prisma__ALMsClient<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ALMs.
     * @param {ALMsUpdateArgs} args - Arguments to update one ALMs.
     * @example
     * // Update one ALMs
     * const aLMs = await prisma.aLMs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ALMsUpdateArgs>(args: SelectSubset<T, ALMsUpdateArgs<ExtArgs>>): Prisma__ALMsClient<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ALMs.
     * @param {ALMsDeleteManyArgs} args - Arguments to filter ALMs to delete.
     * @example
     * // Delete a few ALMs
     * const { count } = await prisma.aLMs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ALMsDeleteManyArgs>(args?: SelectSubset<T, ALMsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ALMs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALMsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ALMs
     * const aLMs = await prisma.aLMs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ALMsUpdateManyArgs>(args: SelectSubset<T, ALMsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ALMs and returns the data updated in the database.
     * @param {ALMsUpdateManyAndReturnArgs} args - Arguments to update many ALMs.
     * @example
     * // Update many ALMs
     * const aLMs = await prisma.aLMs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ALMs and only return the `chainId`
     * const aLMsWithChainIdOnly = await prisma.aLMs.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ALMsUpdateManyAndReturnArgs>(args: SelectSubset<T, ALMsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ALMs.
     * @param {ALMsUpsertArgs} args - Arguments to update or create a ALMs.
     * @example
     * // Update or create a ALMs
     * const aLMs = await prisma.aLMs.upsert({
     *   create: {
     *     // ... data to create a ALMs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ALMs we want to update
     *   }
     * })
     */
    upsert<T extends ALMsUpsertArgs>(args: SelectSubset<T, ALMsUpsertArgs<ExtArgs>>): Prisma__ALMsClient<$Result.GetResult<Prisma.$ALMsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ALMs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALMsCountArgs} args - Arguments to filter ALMs to count.
     * @example
     * // Count the number of ALMs
     * const count = await prisma.aLMs.count({
     *   where: {
     *     // ... the filter for the ALMs we want to count
     *   }
     * })
    **/
    count<T extends ALMsCountArgs>(
      args?: Subset<T, ALMsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ALMsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ALMs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALMsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ALMsAggregateArgs>(args: Subset<T, ALMsAggregateArgs>): Prisma.PrismaPromise<GetALMsAggregateType<T>>

    /**
     * Group by ALMs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALMsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ALMsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ALMsGroupByArgs['orderBy'] }
        : { orderBy?: ALMsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ALMsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetALMsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ALMs model
   */
  readonly fields: ALMsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ALMs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ALMsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ALMs model
   */ 
  interface ALMsFieldRefs {
    readonly chainId: FieldRef<"ALMs", 'Int'>
    readonly campaignId: FieldRef<"ALMs", 'String'>
    readonly name: FieldRef<"ALMs", 'String'>
    readonly type: FieldRef<"ALMs", 'String'>
    readonly address: FieldRef<"ALMs", 'String'>
    readonly target: FieldRef<"ALMs", 'String'>
    readonly owner: FieldRef<"ALMs", 'String'>
    readonly underlyingPool: FieldRef<"ALMs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ALMs findUnique
   */
  export type ALMsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * Filter, which ALMs to fetch.
     */
    where: ALMsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ALMs findUniqueOrThrow
   */
  export type ALMsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * Filter, which ALMs to fetch.
     */
    where: ALMsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ALMs findFirst
   */
  export type ALMsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * Filter, which ALMs to fetch.
     */
    where?: ALMsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ALMs to fetch.
     */
    orderBy?: ALMsOrderByWithRelationInput | ALMsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ALMs.
     */
    cursor?: ALMsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ALMs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ALMs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ALMs.
     */
    distinct?: ALMsScalarFieldEnum | ALMsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ALMs findFirstOrThrow
   */
  export type ALMsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * Filter, which ALMs to fetch.
     */
    where?: ALMsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ALMs to fetch.
     */
    orderBy?: ALMsOrderByWithRelationInput | ALMsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ALMs.
     */
    cursor?: ALMsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ALMs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ALMs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ALMs.
     */
    distinct?: ALMsScalarFieldEnum | ALMsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ALMs findMany
   */
  export type ALMsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * Filter, which ALMs to fetch.
     */
    where?: ALMsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ALMs to fetch.
     */
    orderBy?: ALMsOrderByWithRelationInput | ALMsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ALMs.
     */
    cursor?: ALMsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ALMs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ALMs.
     */
    skip?: number
    distinct?: ALMsScalarFieldEnum | ALMsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ALMs create
   */
  export type ALMsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * The data needed to create a ALMs.
     */
    data: XOR<ALMsCreateInput, ALMsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ALMs createMany
   */
  export type ALMsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ALMs.
     */
    data: ALMsCreateManyInput | ALMsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ALMs createManyAndReturn
   */
  export type ALMsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * The data used to create many ALMs.
     */
    data: ALMsCreateManyInput | ALMsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ALMs update
   */
  export type ALMsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * The data needed to update a ALMs.
     */
    data: XOR<ALMsUpdateInput, ALMsUncheckedUpdateInput>
    /**
     * Choose, which ALMs to update.
     */
    where: ALMsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ALMs updateMany
   */
  export type ALMsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ALMs.
     */
    data: XOR<ALMsUpdateManyMutationInput, ALMsUncheckedUpdateManyInput>
    /**
     * Filter which ALMs to update
     */
    where?: ALMsWhereInput
    /**
     * Limit how many ALMs to update.
     */
    limit?: number
  }

  /**
   * ALMs updateManyAndReturn
   */
  export type ALMsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * The data used to update ALMs.
     */
    data: XOR<ALMsUpdateManyMutationInput, ALMsUncheckedUpdateManyInput>
    /**
     * Filter which ALMs to update
     */
    where?: ALMsWhereInput
    /**
     * Limit how many ALMs to update.
     */
    limit?: number
  }

  /**
   * ALMs upsert
   */
  export type ALMsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * The filter to search for the ALMs to update in case it exists.
     */
    where: ALMsWhereUniqueInput
    /**
     * In case the ALMs found by the `where` argument doesn't exist, create a new ALMs with this data.
     */
    create: XOR<ALMsCreateInput, ALMsUncheckedCreateInput>
    /**
     * In case the ALMs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ALMsUpdateInput, ALMsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ALMs delete
   */
  export type ALMsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
    /**
     * Filter which ALMs to delete.
     */
    where: ALMsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ALMs deleteMany
   */
  export type ALMsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ALMs to delete
     */
    where?: ALMsWhereInput
    /**
     * Limit how many ALMs to delete.
     */
    limit?: number
  }

  /**
   * ALMs without action
   */
  export type ALMsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALMs
     */
    select?: ALMsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ALMs
     */
    omit?: ALMsOmit<ExtArgs> | null
  }


  /**
   * Model ERC20Holders
   */

  export type AggregateERC20Holders = {
    _count: ERC20HoldersCountAggregateOutputType | null
    _avg: ERC20HoldersAvgAggregateOutputType | null
    _sum: ERC20HoldersSumAggregateOutputType | null
    _min: ERC20HoldersMinAggregateOutputType | null
    _max: ERC20HoldersMaxAggregateOutputType | null
  }

  export type ERC20HoldersAvgAggregateOutputType = {
    chainId: number | null
    blockNumber: number | null
  }

  export type ERC20HoldersSumAggregateOutputType = {
    chainId: number | null
    blockNumber: number | null
  }

  export type ERC20HoldersMinAggregateOutputType = {
    chainId: number | null
    token: string | null
    blockNumber: number | null
  }

  export type ERC20HoldersMaxAggregateOutputType = {
    chainId: number | null
    token: string | null
    blockNumber: number | null
  }

  export type ERC20HoldersCountAggregateOutputType = {
    chainId: number
    token: number
    holders: number
    blockNumber: number
    _all: number
  }


  export type ERC20HoldersAvgAggregateInputType = {
    chainId?: true
    blockNumber?: true
  }

  export type ERC20HoldersSumAggregateInputType = {
    chainId?: true
    blockNumber?: true
  }

  export type ERC20HoldersMinAggregateInputType = {
    chainId?: true
    token?: true
    blockNumber?: true
  }

  export type ERC20HoldersMaxAggregateInputType = {
    chainId?: true
    token?: true
    blockNumber?: true
  }

  export type ERC20HoldersCountAggregateInputType = {
    chainId?: true
    token?: true
    holders?: true
    blockNumber?: true
    _all?: true
  }

  export type ERC20HoldersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ERC20Holders to aggregate.
     */
    where?: ERC20HoldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ERC20Holders to fetch.
     */
    orderBy?: ERC20HoldersOrderByWithRelationInput | ERC20HoldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ERC20HoldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ERC20Holders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ERC20Holders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ERC20Holders
    **/
    _count?: true | ERC20HoldersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ERC20HoldersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ERC20HoldersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ERC20HoldersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ERC20HoldersMaxAggregateInputType
  }

  export type GetERC20HoldersAggregateType<T extends ERC20HoldersAggregateArgs> = {
        [P in keyof T & keyof AggregateERC20Holders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateERC20Holders[P]>
      : GetScalarType<T[P], AggregateERC20Holders[P]>
  }




  export type ERC20HoldersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ERC20HoldersWhereInput
    orderBy?: ERC20HoldersOrderByWithAggregationInput | ERC20HoldersOrderByWithAggregationInput[]
    by: ERC20HoldersScalarFieldEnum[] | ERC20HoldersScalarFieldEnum
    having?: ERC20HoldersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ERC20HoldersCountAggregateInputType | true
    _avg?: ERC20HoldersAvgAggregateInputType
    _sum?: ERC20HoldersSumAggregateInputType
    _min?: ERC20HoldersMinAggregateInputType
    _max?: ERC20HoldersMaxAggregateInputType
  }

  export type ERC20HoldersGroupByOutputType = {
    chainId: number
    token: string
    holders: string[]
    blockNumber: number
    _count: ERC20HoldersCountAggregateOutputType | null
    _avg: ERC20HoldersAvgAggregateOutputType | null
    _sum: ERC20HoldersSumAggregateOutputType | null
    _min: ERC20HoldersMinAggregateOutputType | null
    _max: ERC20HoldersMaxAggregateOutputType | null
  }

  type GetERC20HoldersGroupByPayload<T extends ERC20HoldersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ERC20HoldersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ERC20HoldersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ERC20HoldersGroupByOutputType[P]>
            : GetScalarType<T[P], ERC20HoldersGroupByOutputType[P]>
        }
      >
    >


  export type ERC20HoldersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    token?: boolean
    holders?: boolean
    blockNumber?: boolean
  }, ExtArgs["result"]["eRC20Holders"]>

  export type ERC20HoldersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    token?: boolean
    holders?: boolean
    blockNumber?: boolean
  }, ExtArgs["result"]["eRC20Holders"]>

  export type ERC20HoldersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    token?: boolean
    holders?: boolean
    blockNumber?: boolean
  }, ExtArgs["result"]["eRC20Holders"]>

  export type ERC20HoldersSelectScalar = {
    chainId?: boolean
    token?: boolean
    holders?: boolean
    blockNumber?: boolean
  }

  export type ERC20HoldersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "token" | "holders" | "blockNumber", ExtArgs["result"]["eRC20Holders"]>

  export type $ERC20HoldersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ERC20Holders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      token: string
      holders: string[]
      blockNumber: number
    }, ExtArgs["result"]["eRC20Holders"]>
    composites: {}
  }

  type ERC20HoldersGetPayload<S extends boolean | null | undefined | ERC20HoldersDefaultArgs> = $Result.GetResult<Prisma.$ERC20HoldersPayload, S>

  type ERC20HoldersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ERC20HoldersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ERC20HoldersCountAggregateInputType | true
    }

  export interface ERC20HoldersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ERC20Holders'], meta: { name: 'ERC20Holders' } }
    /**
     * Find zero or one ERC20Holders that matches the filter.
     * @param {ERC20HoldersFindUniqueArgs} args - Arguments to find a ERC20Holders
     * @example
     * // Get one ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ERC20HoldersFindUniqueArgs>(args: SelectSubset<T, ERC20HoldersFindUniqueArgs<ExtArgs>>): Prisma__ERC20HoldersClient<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ERC20Holders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ERC20HoldersFindUniqueOrThrowArgs} args - Arguments to find a ERC20Holders
     * @example
     * // Get one ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ERC20HoldersFindUniqueOrThrowArgs>(args: SelectSubset<T, ERC20HoldersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ERC20HoldersClient<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ERC20Holders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ERC20HoldersFindFirstArgs} args - Arguments to find a ERC20Holders
     * @example
     * // Get one ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ERC20HoldersFindFirstArgs>(args?: SelectSubset<T, ERC20HoldersFindFirstArgs<ExtArgs>>): Prisma__ERC20HoldersClient<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ERC20Holders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ERC20HoldersFindFirstOrThrowArgs} args - Arguments to find a ERC20Holders
     * @example
     * // Get one ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ERC20HoldersFindFirstOrThrowArgs>(args?: SelectSubset<T, ERC20HoldersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ERC20HoldersClient<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ERC20Holders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ERC20HoldersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.findMany()
     * 
     * // Get first 10 ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const eRC20HoldersWithChainIdOnly = await prisma.eRC20Holders.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends ERC20HoldersFindManyArgs>(args?: SelectSubset<T, ERC20HoldersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ERC20Holders.
     * @param {ERC20HoldersCreateArgs} args - Arguments to create a ERC20Holders.
     * @example
     * // Create one ERC20Holders
     * const ERC20Holders = await prisma.eRC20Holders.create({
     *   data: {
     *     // ... data to create a ERC20Holders
     *   }
     * })
     * 
     */
    create<T extends ERC20HoldersCreateArgs>(args: SelectSubset<T, ERC20HoldersCreateArgs<ExtArgs>>): Prisma__ERC20HoldersClient<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ERC20Holders.
     * @param {ERC20HoldersCreateManyArgs} args - Arguments to create many ERC20Holders.
     * @example
     * // Create many ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ERC20HoldersCreateManyArgs>(args?: SelectSubset<T, ERC20HoldersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ERC20Holders and returns the data saved in the database.
     * @param {ERC20HoldersCreateManyAndReturnArgs} args - Arguments to create many ERC20Holders.
     * @example
     * // Create many ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ERC20Holders and only return the `chainId`
     * const eRC20HoldersWithChainIdOnly = await prisma.eRC20Holders.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ERC20HoldersCreateManyAndReturnArgs>(args?: SelectSubset<T, ERC20HoldersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ERC20Holders.
     * @param {ERC20HoldersDeleteArgs} args - Arguments to delete one ERC20Holders.
     * @example
     * // Delete one ERC20Holders
     * const ERC20Holders = await prisma.eRC20Holders.delete({
     *   where: {
     *     // ... filter to delete one ERC20Holders
     *   }
     * })
     * 
     */
    delete<T extends ERC20HoldersDeleteArgs>(args: SelectSubset<T, ERC20HoldersDeleteArgs<ExtArgs>>): Prisma__ERC20HoldersClient<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ERC20Holders.
     * @param {ERC20HoldersUpdateArgs} args - Arguments to update one ERC20Holders.
     * @example
     * // Update one ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ERC20HoldersUpdateArgs>(args: SelectSubset<T, ERC20HoldersUpdateArgs<ExtArgs>>): Prisma__ERC20HoldersClient<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ERC20Holders.
     * @param {ERC20HoldersDeleteManyArgs} args - Arguments to filter ERC20Holders to delete.
     * @example
     * // Delete a few ERC20Holders
     * const { count } = await prisma.eRC20Holders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ERC20HoldersDeleteManyArgs>(args?: SelectSubset<T, ERC20HoldersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ERC20Holders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ERC20HoldersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ERC20HoldersUpdateManyArgs>(args: SelectSubset<T, ERC20HoldersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ERC20Holders and returns the data updated in the database.
     * @param {ERC20HoldersUpdateManyAndReturnArgs} args - Arguments to update many ERC20Holders.
     * @example
     * // Update many ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ERC20Holders and only return the `chainId`
     * const eRC20HoldersWithChainIdOnly = await prisma.eRC20Holders.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ERC20HoldersUpdateManyAndReturnArgs>(args: SelectSubset<T, ERC20HoldersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ERC20Holders.
     * @param {ERC20HoldersUpsertArgs} args - Arguments to update or create a ERC20Holders.
     * @example
     * // Update or create a ERC20Holders
     * const eRC20Holders = await prisma.eRC20Holders.upsert({
     *   create: {
     *     // ... data to create a ERC20Holders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ERC20Holders we want to update
     *   }
     * })
     */
    upsert<T extends ERC20HoldersUpsertArgs>(args: SelectSubset<T, ERC20HoldersUpsertArgs<ExtArgs>>): Prisma__ERC20HoldersClient<$Result.GetResult<Prisma.$ERC20HoldersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ERC20Holders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ERC20HoldersCountArgs} args - Arguments to filter ERC20Holders to count.
     * @example
     * // Count the number of ERC20Holders
     * const count = await prisma.eRC20Holders.count({
     *   where: {
     *     // ... the filter for the ERC20Holders we want to count
     *   }
     * })
    **/
    count<T extends ERC20HoldersCountArgs>(
      args?: Subset<T, ERC20HoldersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ERC20HoldersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ERC20Holders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ERC20HoldersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ERC20HoldersAggregateArgs>(args: Subset<T, ERC20HoldersAggregateArgs>): Prisma.PrismaPromise<GetERC20HoldersAggregateType<T>>

    /**
     * Group by ERC20Holders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ERC20HoldersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ERC20HoldersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ERC20HoldersGroupByArgs['orderBy'] }
        : { orderBy?: ERC20HoldersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ERC20HoldersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetERC20HoldersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ERC20Holders model
   */
  readonly fields: ERC20HoldersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ERC20Holders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ERC20HoldersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ERC20Holders model
   */ 
  interface ERC20HoldersFieldRefs {
    readonly chainId: FieldRef<"ERC20Holders", 'Int'>
    readonly token: FieldRef<"ERC20Holders", 'String'>
    readonly holders: FieldRef<"ERC20Holders", 'String[]'>
    readonly blockNumber: FieldRef<"ERC20Holders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ERC20Holders findUnique
   */
  export type ERC20HoldersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * Filter, which ERC20Holders to fetch.
     */
    where: ERC20HoldersWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ERC20Holders findUniqueOrThrow
   */
  export type ERC20HoldersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * Filter, which ERC20Holders to fetch.
     */
    where: ERC20HoldersWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ERC20Holders findFirst
   */
  export type ERC20HoldersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * Filter, which ERC20Holders to fetch.
     */
    where?: ERC20HoldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ERC20Holders to fetch.
     */
    orderBy?: ERC20HoldersOrderByWithRelationInput | ERC20HoldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ERC20Holders.
     */
    cursor?: ERC20HoldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ERC20Holders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ERC20Holders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ERC20Holders.
     */
    distinct?: ERC20HoldersScalarFieldEnum | ERC20HoldersScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ERC20Holders findFirstOrThrow
   */
  export type ERC20HoldersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * Filter, which ERC20Holders to fetch.
     */
    where?: ERC20HoldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ERC20Holders to fetch.
     */
    orderBy?: ERC20HoldersOrderByWithRelationInput | ERC20HoldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ERC20Holders.
     */
    cursor?: ERC20HoldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ERC20Holders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ERC20Holders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ERC20Holders.
     */
    distinct?: ERC20HoldersScalarFieldEnum | ERC20HoldersScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ERC20Holders findMany
   */
  export type ERC20HoldersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * Filter, which ERC20Holders to fetch.
     */
    where?: ERC20HoldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ERC20Holders to fetch.
     */
    orderBy?: ERC20HoldersOrderByWithRelationInput | ERC20HoldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ERC20Holders.
     */
    cursor?: ERC20HoldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ERC20Holders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ERC20Holders.
     */
    skip?: number
    distinct?: ERC20HoldersScalarFieldEnum | ERC20HoldersScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ERC20Holders create
   */
  export type ERC20HoldersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * The data needed to create a ERC20Holders.
     */
    data: XOR<ERC20HoldersCreateInput, ERC20HoldersUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ERC20Holders createMany
   */
  export type ERC20HoldersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ERC20Holders.
     */
    data: ERC20HoldersCreateManyInput | ERC20HoldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ERC20Holders createManyAndReturn
   */
  export type ERC20HoldersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * The data used to create many ERC20Holders.
     */
    data: ERC20HoldersCreateManyInput | ERC20HoldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ERC20Holders update
   */
  export type ERC20HoldersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * The data needed to update a ERC20Holders.
     */
    data: XOR<ERC20HoldersUpdateInput, ERC20HoldersUncheckedUpdateInput>
    /**
     * Choose, which ERC20Holders to update.
     */
    where: ERC20HoldersWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ERC20Holders updateMany
   */
  export type ERC20HoldersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ERC20Holders.
     */
    data: XOR<ERC20HoldersUpdateManyMutationInput, ERC20HoldersUncheckedUpdateManyInput>
    /**
     * Filter which ERC20Holders to update
     */
    where?: ERC20HoldersWhereInput
    /**
     * Limit how many ERC20Holders to update.
     */
    limit?: number
  }

  /**
   * ERC20Holders updateManyAndReturn
   */
  export type ERC20HoldersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * The data used to update ERC20Holders.
     */
    data: XOR<ERC20HoldersUpdateManyMutationInput, ERC20HoldersUncheckedUpdateManyInput>
    /**
     * Filter which ERC20Holders to update
     */
    where?: ERC20HoldersWhereInput
    /**
     * Limit how many ERC20Holders to update.
     */
    limit?: number
  }

  /**
   * ERC20Holders upsert
   */
  export type ERC20HoldersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * The filter to search for the ERC20Holders to update in case it exists.
     */
    where: ERC20HoldersWhereUniqueInput
    /**
     * In case the ERC20Holders found by the `where` argument doesn't exist, create a new ERC20Holders with this data.
     */
    create: XOR<ERC20HoldersCreateInput, ERC20HoldersUncheckedCreateInput>
    /**
     * In case the ERC20Holders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ERC20HoldersUpdateInput, ERC20HoldersUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ERC20Holders delete
   */
  export type ERC20HoldersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
    /**
     * Filter which ERC20Holders to delete.
     */
    where: ERC20HoldersWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ERC20Holders deleteMany
   */
  export type ERC20HoldersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ERC20Holders to delete
     */
    where?: ERC20HoldersWhereInput
    /**
     * Limit how many ERC20Holders to delete.
     */
    limit?: number
  }

  /**
   * ERC20Holders without action
   */
  export type ERC20HoldersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ERC20Holders
     */
    select?: ERC20HoldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ERC20Holders
     */
    omit?: ERC20HoldersOmit<ExtArgs> | null
  }


  /**
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensAvgAggregateOutputType = {
    chainId: number | null
    decimals: number | null
  }

  export type TokensSumAggregateOutputType = {
    chainId: number | null
    decimals: number | null
  }

  export type TokensMinAggregateOutputType = {
    chainId: number | null
    address: string | null
    symbol: string | null
    decimals: number | null
  }

  export type TokensMaxAggregateOutputType = {
    chainId: number | null
    address: string | null
    symbol: string | null
    decimals: number | null
  }

  export type TokensCountAggregateOutputType = {
    chainId: number
    address: number
    symbol: number
    decimals: number
    _all: number
  }


  export type TokensAvgAggregateInputType = {
    chainId?: true
    decimals?: true
  }

  export type TokensSumAggregateInputType = {
    chainId?: true
    decimals?: true
  }

  export type TokensMinAggregateInputType = {
    chainId?: true
    address?: true
    symbol?: true
    decimals?: true
  }

  export type TokensMaxAggregateInputType = {
    chainId?: true
    address?: true
    symbol?: true
    decimals?: true
  }

  export type TokensCountAggregateInputType = {
    chainId?: true
    address?: true
    symbol?: true
    decimals?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _avg?: TokensAvgAggregateInputType
    _sum?: TokensSumAggregateInputType
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    chainId: number
    address: string
    symbol: string
    decimals: number
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    address?: boolean
    symbol?: boolean
    decimals?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    address?: boolean
    symbol?: boolean
    decimals?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chainId?: boolean
    address?: boolean
    symbol?: boolean
    decimals?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectScalar = {
    chainId?: boolean
    address?: boolean
    symbol?: boolean
    decimals?: boolean
  }

  export type TokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chainId" | "address" | "symbol" | "decimals", ExtArgs["result"]["tokens"]>

  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chainId: number
      address: string
      symbol: string
      decimals: number
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokensFindUniqueArgs>(args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs>(args: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokensFindFirstArgs>(args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs>(args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `chainId`
     * const tokensWithChainIdOnly = await prisma.tokens.findMany({ select: { chainId: true } })
     * 
     */
    findMany<T extends TokensFindManyArgs>(args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends TokensCreateArgs>(args: SelectSubset<T, TokensCreateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tokens.
     * @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokensCreateManyArgs>(args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokensCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `chainId`
     * const tokensWithChainIdOnly = await prisma.tokens.createManyAndReturn({
     *   select: { chainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokensCreateManyAndReturnArgs>(args?: SelectSubset<T, TokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends TokensDeleteArgs>(args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokensUpdateArgs>(args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokensDeleteManyArgs>(args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokensUpdateManyArgs>(args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokensUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `chainId`
     * const tokensWithChainIdOnly = await prisma.tokens.updateManyAndReturn({
     *   select: { chainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokensUpdateManyAndReturnArgs>(args: SelectSubset<T, TokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends TokensUpsertArgs>(args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tokens model
   */ 
  interface TokensFieldRefs {
    readonly chainId: FieldRef<"Tokens", 'Int'>
    readonly address: FieldRef<"Tokens", 'String'>
    readonly symbol: FieldRef<"Tokens", 'String'>
    readonly decimals: FieldRef<"Tokens", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens createManyAndReturn
   */
  export type TokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Tokens updateManyAndReturn
   */
  export type TokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
  }


  /**
   * Model StateSave
   */

  export type AggregateStateSave = {
    _count: StateSaveCountAggregateOutputType | null
    _avg: StateSaveAvgAggregateOutputType | null
    _sum: StateSaveSumAggregateOutputType | null
    _min: StateSaveMinAggregateOutputType | null
    _max: StateSaveMaxAggregateOutputType | null
  }

  export type StateSaveAvgAggregateOutputType = {
    blockNumber: number | null
  }

  export type StateSaveSumAggregateOutputType = {
    blockNumber: number | null
  }

  export type StateSaveMinAggregateOutputType = {
    id: string | null
    blockNumber: number | null
  }

  export type StateSaveMaxAggregateOutputType = {
    id: string | null
    blockNumber: number | null
  }

  export type StateSaveCountAggregateOutputType = {
    id: number
    blockNumber: number
    state: number
    _all: number
  }


  export type StateSaveAvgAggregateInputType = {
    blockNumber?: true
  }

  export type StateSaveSumAggregateInputType = {
    blockNumber?: true
  }

  export type StateSaveMinAggregateInputType = {
    id?: true
    blockNumber?: true
  }

  export type StateSaveMaxAggregateInputType = {
    id?: true
    blockNumber?: true
  }

  export type StateSaveCountAggregateInputType = {
    id?: true
    blockNumber?: true
    state?: true
    _all?: true
  }

  export type StateSaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StateSave to aggregate.
     */
    where?: StateSaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateSaves to fetch.
     */
    orderBy?: StateSaveOrderByWithRelationInput | StateSaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateSaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateSaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateSaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StateSaves
    **/
    _count?: true | StateSaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateSaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateSaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateSaveMaxAggregateInputType
  }

  export type GetStateSaveAggregateType<T extends StateSaveAggregateArgs> = {
        [P in keyof T & keyof AggregateStateSave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStateSave[P]>
      : GetScalarType<T[P], AggregateStateSave[P]>
  }




  export type StateSaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateSaveWhereInput
    orderBy?: StateSaveOrderByWithAggregationInput | StateSaveOrderByWithAggregationInput[]
    by: StateSaveScalarFieldEnum[] | StateSaveScalarFieldEnum
    having?: StateSaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateSaveCountAggregateInputType | true
    _avg?: StateSaveAvgAggregateInputType
    _sum?: StateSaveSumAggregateInputType
    _min?: StateSaveMinAggregateInputType
    _max?: StateSaveMaxAggregateInputType
  }

  export type StateSaveGroupByOutputType = {
    id: string
    blockNumber: number
    state: JsonValue
    _count: StateSaveCountAggregateOutputType | null
    _avg: StateSaveAvgAggregateOutputType | null
    _sum: StateSaveSumAggregateOutputType | null
    _min: StateSaveMinAggregateOutputType | null
    _max: StateSaveMaxAggregateOutputType | null
  }

  type GetStateSaveGroupByPayload<T extends StateSaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateSaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateSaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateSaveGroupByOutputType[P]>
            : GetScalarType<T[P], StateSaveGroupByOutputType[P]>
        }
      >
    >


  export type StateSaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockNumber?: boolean
    state?: boolean
  }, ExtArgs["result"]["stateSave"]>

  export type StateSaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockNumber?: boolean
    state?: boolean
  }, ExtArgs["result"]["stateSave"]>

  export type StateSaveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockNumber?: boolean
    state?: boolean
  }, ExtArgs["result"]["stateSave"]>

  export type StateSaveSelectScalar = {
    id?: boolean
    blockNumber?: boolean
    state?: boolean
  }

  export type StateSaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockNumber" | "state", ExtArgs["result"]["stateSave"]>

  export type $StateSavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StateSave"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blockNumber: number
      state: Prisma.JsonValue
    }, ExtArgs["result"]["stateSave"]>
    composites: {}
  }

  type StateSaveGetPayload<S extends boolean | null | undefined | StateSaveDefaultArgs> = $Result.GetResult<Prisma.$StateSavePayload, S>

  type StateSaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateSaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: StateSaveCountAggregateInputType | true
    }

  export interface StateSaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StateSave'], meta: { name: 'StateSave' } }
    /**
     * Find zero or one StateSave that matches the filter.
     * @param {StateSaveFindUniqueArgs} args - Arguments to find a StateSave
     * @example
     * // Get one StateSave
     * const stateSave = await prisma.stateSave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateSaveFindUniqueArgs>(args: SelectSubset<T, StateSaveFindUniqueArgs<ExtArgs>>): Prisma__StateSaveClient<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StateSave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateSaveFindUniqueOrThrowArgs} args - Arguments to find a StateSave
     * @example
     * // Get one StateSave
     * const stateSave = await prisma.stateSave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateSaveFindUniqueOrThrowArgs>(args: SelectSubset<T, StateSaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateSaveClient<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StateSave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateSaveFindFirstArgs} args - Arguments to find a StateSave
     * @example
     * // Get one StateSave
     * const stateSave = await prisma.stateSave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateSaveFindFirstArgs>(args?: SelectSubset<T, StateSaveFindFirstArgs<ExtArgs>>): Prisma__StateSaveClient<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StateSave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateSaveFindFirstOrThrowArgs} args - Arguments to find a StateSave
     * @example
     * // Get one StateSave
     * const stateSave = await prisma.stateSave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateSaveFindFirstOrThrowArgs>(args?: SelectSubset<T, StateSaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateSaveClient<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StateSaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateSaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StateSaves
     * const stateSaves = await prisma.stateSave.findMany()
     * 
     * // Get first 10 StateSaves
     * const stateSaves = await prisma.stateSave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateSaveWithIdOnly = await prisma.stateSave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateSaveFindManyArgs>(args?: SelectSubset<T, StateSaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StateSave.
     * @param {StateSaveCreateArgs} args - Arguments to create a StateSave.
     * @example
     * // Create one StateSave
     * const StateSave = await prisma.stateSave.create({
     *   data: {
     *     // ... data to create a StateSave
     *   }
     * })
     * 
     */
    create<T extends StateSaveCreateArgs>(args: SelectSubset<T, StateSaveCreateArgs<ExtArgs>>): Prisma__StateSaveClient<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StateSaves.
     * @param {StateSaveCreateManyArgs} args - Arguments to create many StateSaves.
     * @example
     * // Create many StateSaves
     * const stateSave = await prisma.stateSave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateSaveCreateManyArgs>(args?: SelectSubset<T, StateSaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StateSaves and returns the data saved in the database.
     * @param {StateSaveCreateManyAndReturnArgs} args - Arguments to create many StateSaves.
     * @example
     * // Create many StateSaves
     * const stateSave = await prisma.stateSave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StateSaves and only return the `id`
     * const stateSaveWithIdOnly = await prisma.stateSave.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateSaveCreateManyAndReturnArgs>(args?: SelectSubset<T, StateSaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a StateSave.
     * @param {StateSaveDeleteArgs} args - Arguments to delete one StateSave.
     * @example
     * // Delete one StateSave
     * const StateSave = await prisma.stateSave.delete({
     *   where: {
     *     // ... filter to delete one StateSave
     *   }
     * })
     * 
     */
    delete<T extends StateSaveDeleteArgs>(args: SelectSubset<T, StateSaveDeleteArgs<ExtArgs>>): Prisma__StateSaveClient<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StateSave.
     * @param {StateSaveUpdateArgs} args - Arguments to update one StateSave.
     * @example
     * // Update one StateSave
     * const stateSave = await prisma.stateSave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateSaveUpdateArgs>(args: SelectSubset<T, StateSaveUpdateArgs<ExtArgs>>): Prisma__StateSaveClient<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StateSaves.
     * @param {StateSaveDeleteManyArgs} args - Arguments to filter StateSaves to delete.
     * @example
     * // Delete a few StateSaves
     * const { count } = await prisma.stateSave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateSaveDeleteManyArgs>(args?: SelectSubset<T, StateSaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StateSaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateSaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StateSaves
     * const stateSave = await prisma.stateSave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateSaveUpdateManyArgs>(args: SelectSubset<T, StateSaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StateSaves and returns the data updated in the database.
     * @param {StateSaveUpdateManyAndReturnArgs} args - Arguments to update many StateSaves.
     * @example
     * // Update many StateSaves
     * const stateSave = await prisma.stateSave.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StateSaves and only return the `id`
     * const stateSaveWithIdOnly = await prisma.stateSave.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StateSaveUpdateManyAndReturnArgs>(args: SelectSubset<T, StateSaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one StateSave.
     * @param {StateSaveUpsertArgs} args - Arguments to update or create a StateSave.
     * @example
     * // Update or create a StateSave
     * const stateSave = await prisma.stateSave.upsert({
     *   create: {
     *     // ... data to create a StateSave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StateSave we want to update
     *   }
     * })
     */
    upsert<T extends StateSaveUpsertArgs>(args: SelectSubset<T, StateSaveUpsertArgs<ExtArgs>>): Prisma__StateSaveClient<$Result.GetResult<Prisma.$StateSavePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of StateSaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateSaveCountArgs} args - Arguments to filter StateSaves to count.
     * @example
     * // Count the number of StateSaves
     * const count = await prisma.stateSave.count({
     *   where: {
     *     // ... the filter for the StateSaves we want to count
     *   }
     * })
    **/
    count<T extends StateSaveCountArgs>(
      args?: Subset<T, StateSaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateSaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StateSave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateSaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateSaveAggregateArgs>(args: Subset<T, StateSaveAggregateArgs>): Prisma.PrismaPromise<GetStateSaveAggregateType<T>>

    /**
     * Group by StateSave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateSaveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StateSaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateSaveGroupByArgs['orderBy'] }
        : { orderBy?: StateSaveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StateSaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateSaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StateSave model
   */
  readonly fields: StateSaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StateSave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateSaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StateSave model
   */ 
  interface StateSaveFieldRefs {
    readonly id: FieldRef<"StateSave", 'String'>
    readonly blockNumber: FieldRef<"StateSave", 'Int'>
    readonly state: FieldRef<"StateSave", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * StateSave findUnique
   */
  export type StateSaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * Filter, which StateSave to fetch.
     */
    where: StateSaveWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * StateSave findUniqueOrThrow
   */
  export type StateSaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * Filter, which StateSave to fetch.
     */
    where: StateSaveWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * StateSave findFirst
   */
  export type StateSaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * Filter, which StateSave to fetch.
     */
    where?: StateSaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateSaves to fetch.
     */
    orderBy?: StateSaveOrderByWithRelationInput | StateSaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StateSaves.
     */
    cursor?: StateSaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateSaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateSaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StateSaves.
     */
    distinct?: StateSaveScalarFieldEnum | StateSaveScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * StateSave findFirstOrThrow
   */
  export type StateSaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * Filter, which StateSave to fetch.
     */
    where?: StateSaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateSaves to fetch.
     */
    orderBy?: StateSaveOrderByWithRelationInput | StateSaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StateSaves.
     */
    cursor?: StateSaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateSaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateSaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StateSaves.
     */
    distinct?: StateSaveScalarFieldEnum | StateSaveScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * StateSave findMany
   */
  export type StateSaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * Filter, which StateSaves to fetch.
     */
    where?: StateSaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateSaves to fetch.
     */
    orderBy?: StateSaveOrderByWithRelationInput | StateSaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StateSaves.
     */
    cursor?: StateSaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateSaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateSaves.
     */
    skip?: number
    distinct?: StateSaveScalarFieldEnum | StateSaveScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * StateSave create
   */
  export type StateSaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * The data needed to create a StateSave.
     */
    data: XOR<StateSaveCreateInput, StateSaveUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * StateSave createMany
   */
  export type StateSaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StateSaves.
     */
    data: StateSaveCreateManyInput | StateSaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StateSave createManyAndReturn
   */
  export type StateSaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * The data used to create many StateSaves.
     */
    data: StateSaveCreateManyInput | StateSaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StateSave update
   */
  export type StateSaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * The data needed to update a StateSave.
     */
    data: XOR<StateSaveUpdateInput, StateSaveUncheckedUpdateInput>
    /**
     * Choose, which StateSave to update.
     */
    where: StateSaveWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * StateSave updateMany
   */
  export type StateSaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StateSaves.
     */
    data: XOR<StateSaveUpdateManyMutationInput, StateSaveUncheckedUpdateManyInput>
    /**
     * Filter which StateSaves to update
     */
    where?: StateSaveWhereInput
    /**
     * Limit how many StateSaves to update.
     */
    limit?: number
  }

  /**
   * StateSave updateManyAndReturn
   */
  export type StateSaveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * The data used to update StateSaves.
     */
    data: XOR<StateSaveUpdateManyMutationInput, StateSaveUncheckedUpdateManyInput>
    /**
     * Filter which StateSaves to update
     */
    where?: StateSaveWhereInput
    /**
     * Limit how many StateSaves to update.
     */
    limit?: number
  }

  /**
   * StateSave upsert
   */
  export type StateSaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * The filter to search for the StateSave to update in case it exists.
     */
    where: StateSaveWhereUniqueInput
    /**
     * In case the StateSave found by the `where` argument doesn't exist, create a new StateSave with this data.
     */
    create: XOR<StateSaveCreateInput, StateSaveUncheckedCreateInput>
    /**
     * In case the StateSave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateSaveUpdateInput, StateSaveUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * StateSave delete
   */
  export type StateSaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
    /**
     * Filter which StateSave to delete.
     */
    where: StateSaveWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * StateSave deleteMany
   */
  export type StateSaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StateSaves to delete
     */
    where?: StateSaveWhereInput
    /**
     * Limit how many StateSaves to delete.
     */
    limit?: number
  }

  /**
   * StateSave without action
   */
  export type StateSaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateSave
     */
    select?: StateSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateSave
     */
    omit?: StateSaveOmit<ExtArgs> | null
  }


  /**
   * Model Nodes
   */

  export type AggregateNodes = {
    _count: NodesCountAggregateOutputType | null
    _avg: NodesAvgAggregateOutputType | null
    _sum: NodesSumAggregateOutputType | null
    _min: NodesMinAggregateOutputType | null
    _max: NodesMaxAggregateOutputType | null
  }

  export type NodesAvgAggregateOutputType = {
    chainId: number | null
    creationBlockNumber: number | null
  }

  export type NodesSumAggregateOutputType = {
    chainId: number | null
    creationBlockNumber: number | null
  }

  export type NodesMinAggregateOutputType = {
    id: string | null
    chainId: number | null
    nodeType: string | null
    recipient: string | null
    nodesSourceId: string | null
    creationBlockNumber: number | null
  }

  export type NodesMaxAggregateOutputType = {
    id: string | null
    chainId: number | null
    nodeType: string | null
    recipient: string | null
    nodesSourceId: string | null
    creationBlockNumber: number | null
  }

  export type NodesCountAggregateOutputType = {
    id: number
    chainId: number
    nodeType: number
    recipient: number
    nodesSourceId: number
    creationBlockNumber: number
    metadata: number
    _all: number
  }


  export type NodesAvgAggregateInputType = {
    chainId?: true
    creationBlockNumber?: true
  }

  export type NodesSumAggregateInputType = {
    chainId?: true
    creationBlockNumber?: true
  }

  export type NodesMinAggregateInputType = {
    id?: true
    chainId?: true
    nodeType?: true
    recipient?: true
    nodesSourceId?: true
    creationBlockNumber?: true
  }

  export type NodesMaxAggregateInputType = {
    id?: true
    chainId?: true
    nodeType?: true
    recipient?: true
    nodesSourceId?: true
    creationBlockNumber?: true
  }

  export type NodesCountAggregateInputType = {
    id?: true
    chainId?: true
    nodeType?: true
    recipient?: true
    nodesSourceId?: true
    creationBlockNumber?: true
    metadata?: true
    _all?: true
  }

  export type NodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nodes to aggregate.
     */
    where?: NodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodesOrderByWithRelationInput | NodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nodes
    **/
    _count?: true | NodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodesMaxAggregateInputType
  }

  export type GetNodesAggregateType<T extends NodesAggregateArgs> = {
        [P in keyof T & keyof AggregateNodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNodes[P]>
      : GetScalarType<T[P], AggregateNodes[P]>
  }




  export type NodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodesWhereInput
    orderBy?: NodesOrderByWithAggregationInput | NodesOrderByWithAggregationInput[]
    by: NodesScalarFieldEnum[] | NodesScalarFieldEnum
    having?: NodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodesCountAggregateInputType | true
    _avg?: NodesAvgAggregateInputType
    _sum?: NodesSumAggregateInputType
    _min?: NodesMinAggregateInputType
    _max?: NodesMaxAggregateInputType
  }

  export type NodesGroupByOutputType = {
    id: string
    chainId: number
    nodeType: string
    recipient: string
    nodesSourceId: string
    creationBlockNumber: number
    metadata: JsonValue | null
    _count: NodesCountAggregateOutputType | null
    _avg: NodesAvgAggregateOutputType | null
    _sum: NodesSumAggregateOutputType | null
    _min: NodesMinAggregateOutputType | null
    _max: NodesMaxAggregateOutputType | null
  }

  type GetNodesGroupByPayload<T extends NodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodesGroupByOutputType[P]>
            : GetScalarType<T[P], NodesGroupByOutputType[P]>
        }
      >
    >


  export type NodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chainId?: boolean
    nodeType?: boolean
    recipient?: boolean
    nodesSourceId?: boolean
    creationBlockNumber?: boolean
    metadata?: boolean
    NodesSources?: boolean | NodesSourcesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodes"]>

  export type NodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chainId?: boolean
    nodeType?: boolean
    recipient?: boolean
    nodesSourceId?: boolean
    creationBlockNumber?: boolean
    metadata?: boolean
    NodesSources?: boolean | NodesSourcesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodes"]>

  export type NodesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chainId?: boolean
    nodeType?: boolean
    recipient?: boolean
    nodesSourceId?: boolean
    creationBlockNumber?: boolean
    metadata?: boolean
    NodesSources?: boolean | NodesSourcesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodes"]>

  export type NodesSelectScalar = {
    id?: boolean
    chainId?: boolean
    nodeType?: boolean
    recipient?: boolean
    nodesSourceId?: boolean
    creationBlockNumber?: boolean
    metadata?: boolean
  }

  export type NodesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chainId" | "nodeType" | "recipient" | "nodesSourceId" | "creationBlockNumber" | "metadata", ExtArgs["result"]["nodes"]>
  export type NodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NodesSources?: boolean | NodesSourcesDefaultArgs<ExtArgs>
  }
  export type NodesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NodesSources?: boolean | NodesSourcesDefaultArgs<ExtArgs>
  }
  export type NodesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NodesSources?: boolean | NodesSourcesDefaultArgs<ExtArgs>
  }

  export type $NodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nodes"
    objects: {
      NodesSources: Prisma.$NodesSourcesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chainId: number
      nodeType: string
      recipient: string
      nodesSourceId: string
      creationBlockNumber: number
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["nodes"]>
    composites: {}
  }

  type NodesGetPayload<S extends boolean | null | undefined | NodesDefaultArgs> = $Result.GetResult<Prisma.$NodesPayload, S>

  type NodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: NodesCountAggregateInputType | true
    }

  export interface NodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nodes'], meta: { name: 'Nodes' } }
    /**
     * Find zero or one Nodes that matches the filter.
     * @param {NodesFindUniqueArgs} args - Arguments to find a Nodes
     * @example
     * // Get one Nodes
     * const nodes = await prisma.nodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodesFindUniqueArgs>(args: SelectSubset<T, NodesFindUniqueArgs<ExtArgs>>): Prisma__NodesClient<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Nodes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodesFindUniqueOrThrowArgs} args - Arguments to find a Nodes
     * @example
     * // Get one Nodes
     * const nodes = await prisma.nodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodesFindUniqueOrThrowArgs>(args: SelectSubset<T, NodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodesClient<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesFindFirstArgs} args - Arguments to find a Nodes
     * @example
     * // Get one Nodes
     * const nodes = await prisma.nodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodesFindFirstArgs>(args?: SelectSubset<T, NodesFindFirstArgs<ExtArgs>>): Prisma__NodesClient<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Nodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesFindFirstOrThrowArgs} args - Arguments to find a Nodes
     * @example
     * // Get one Nodes
     * const nodes = await prisma.nodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodesFindFirstOrThrowArgs>(args?: SelectSubset<T, NodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodesClient<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nodes
     * const nodes = await prisma.nodes.findMany()
     * 
     * // Get first 10 Nodes
     * const nodes = await prisma.nodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodesWithIdOnly = await prisma.nodes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodesFindManyArgs>(args?: SelectSubset<T, NodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Nodes.
     * @param {NodesCreateArgs} args - Arguments to create a Nodes.
     * @example
     * // Create one Nodes
     * const Nodes = await prisma.nodes.create({
     *   data: {
     *     // ... data to create a Nodes
     *   }
     * })
     * 
     */
    create<T extends NodesCreateArgs>(args: SelectSubset<T, NodesCreateArgs<ExtArgs>>): Prisma__NodesClient<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Nodes.
     * @param {NodesCreateManyArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const nodes = await prisma.nodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodesCreateManyArgs>(args?: SelectSubset<T, NodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nodes and returns the data saved in the database.
     * @param {NodesCreateManyAndReturnArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const nodes = await prisma.nodes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nodes and only return the `id`
     * const nodesWithIdOnly = await prisma.nodes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodesCreateManyAndReturnArgs>(args?: SelectSubset<T, NodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Nodes.
     * @param {NodesDeleteArgs} args - Arguments to delete one Nodes.
     * @example
     * // Delete one Nodes
     * const Nodes = await prisma.nodes.delete({
     *   where: {
     *     // ... filter to delete one Nodes
     *   }
     * })
     * 
     */
    delete<T extends NodesDeleteArgs>(args: SelectSubset<T, NodesDeleteArgs<ExtArgs>>): Prisma__NodesClient<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Nodes.
     * @param {NodesUpdateArgs} args - Arguments to update one Nodes.
     * @example
     * // Update one Nodes
     * const nodes = await prisma.nodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodesUpdateArgs>(args: SelectSubset<T, NodesUpdateArgs<ExtArgs>>): Prisma__NodesClient<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Nodes.
     * @param {NodesDeleteManyArgs} args - Arguments to filter Nodes to delete.
     * @example
     * // Delete a few Nodes
     * const { count } = await prisma.nodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodesDeleteManyArgs>(args?: SelectSubset<T, NodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nodes
     * const nodes = await prisma.nodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodesUpdateManyArgs>(args: SelectSubset<T, NodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes and returns the data updated in the database.
     * @param {NodesUpdateManyAndReturnArgs} args - Arguments to update many Nodes.
     * @example
     * // Update many Nodes
     * const nodes = await prisma.nodes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nodes and only return the `id`
     * const nodesWithIdOnly = await prisma.nodes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NodesUpdateManyAndReturnArgs>(args: SelectSubset<T, NodesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Nodes.
     * @param {NodesUpsertArgs} args - Arguments to update or create a Nodes.
     * @example
     * // Update or create a Nodes
     * const nodes = await prisma.nodes.upsert({
     *   create: {
     *     // ... data to create a Nodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nodes we want to update
     *   }
     * })
     */
    upsert<T extends NodesUpsertArgs>(args: SelectSubset<T, NodesUpsertArgs<ExtArgs>>): Prisma__NodesClient<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesCountArgs} args - Arguments to filter Nodes to count.
     * @example
     * // Count the number of Nodes
     * const count = await prisma.nodes.count({
     *   where: {
     *     // ... the filter for the Nodes we want to count
     *   }
     * })
    **/
    count<T extends NodesCountArgs>(
      args?: Subset<T, NodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NodesAggregateArgs>(args: Subset<T, NodesAggregateArgs>): Prisma.PrismaPromise<GetNodesAggregateType<T>>

    /**
     * Group by Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodesGroupByArgs['orderBy'] }
        : { orderBy?: NodesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nodes model
   */
  readonly fields: NodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NodesSources<T extends NodesSourcesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NodesSourcesDefaultArgs<ExtArgs>>): Prisma__NodesSourcesClient<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nodes model
   */ 
  interface NodesFieldRefs {
    readonly id: FieldRef<"Nodes", 'String'>
    readonly chainId: FieldRef<"Nodes", 'Int'>
    readonly nodeType: FieldRef<"Nodes", 'String'>
    readonly recipient: FieldRef<"Nodes", 'String'>
    readonly nodesSourceId: FieldRef<"Nodes", 'String'>
    readonly creationBlockNumber: FieldRef<"Nodes", 'Int'>
    readonly metadata: FieldRef<"Nodes", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Nodes findUnique
   */
  export type NodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where: NodesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Nodes findUniqueOrThrow
   */
  export type NodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where: NodesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Nodes findFirst
   */
  export type NodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where?: NodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodesOrderByWithRelationInput | NodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodesScalarFieldEnum | NodesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Nodes findFirstOrThrow
   */
  export type NodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where?: NodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodesOrderByWithRelationInput | NodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodesScalarFieldEnum | NodesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Nodes findMany
   */
  export type NodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where?: NodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodesOrderByWithRelationInput | NodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nodes.
     */
    cursor?: NodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    distinct?: NodesScalarFieldEnum | NodesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Nodes create
   */
  export type NodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
    /**
     * The data needed to create a Nodes.
     */
    data: XOR<NodesCreateInput, NodesUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Nodes createMany
   */
  export type NodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nodes.
     */
    data: NodesCreateManyInput | NodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nodes createManyAndReturn
   */
  export type NodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * The data used to create many Nodes.
     */
    data: NodesCreateManyInput | NodesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nodes update
   */
  export type NodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
    /**
     * The data needed to update a Nodes.
     */
    data: XOR<NodesUpdateInput, NodesUncheckedUpdateInput>
    /**
     * Choose, which Nodes to update.
     */
    where: NodesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Nodes updateMany
   */
  export type NodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodesUpdateManyMutationInput, NodesUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodesWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
  }

  /**
   * Nodes updateManyAndReturn
   */
  export type NodesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodesUpdateManyMutationInput, NodesUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodesWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nodes upsert
   */
  export type NodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
    /**
     * The filter to search for the Nodes to update in case it exists.
     */
    where: NodesWhereUniqueInput
    /**
     * In case the Nodes found by the `where` argument doesn't exist, create a new Nodes with this data.
     */
    create: XOR<NodesCreateInput, NodesUncheckedCreateInput>
    /**
     * In case the Nodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodesUpdateInput, NodesUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Nodes delete
   */
  export type NodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
    /**
     * Filter which Nodes to delete.
     */
    where: NodesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Nodes deleteMany
   */
  export type NodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nodes to delete
     */
    where?: NodesWhereInput
    /**
     * Limit how many Nodes to delete.
     */
    limit?: number
  }

  /**
   * Nodes without action
   */
  export type NodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
  }


  /**
   * Model NodesSources
   */

  export type AggregateNodesSources = {
    _count: NodesSourcesCountAggregateOutputType | null
    _avg: NodesSourcesAvgAggregateOutputType | null
    _sum: NodesSourcesSumAggregateOutputType | null
    _min: NodesSourcesMinAggregateOutputType | null
    _max: NodesSourcesMaxAggregateOutputType | null
  }

  export type NodesSourcesAvgAggregateOutputType = {
    lastFetchedBlockNumber: number | null
    chainId: number | null
  }

  export type NodesSourcesSumAggregateOutputType = {
    lastFetchedBlockNumber: number | null
    chainId: number | null
  }

  export type NodesSourcesMinAggregateOutputType = {
    id: string | null
    lastFetchedBlockNumber: number | null
    nodeType: string | null
    chainId: number | null
    source: string | null
  }

  export type NodesSourcesMaxAggregateOutputType = {
    id: string | null
    lastFetchedBlockNumber: number | null
    nodeType: string | null
    chainId: number | null
    source: string | null
  }

  export type NodesSourcesCountAggregateOutputType = {
    id: number
    lastFetchedBlockNumber: number
    nodeType: number
    chainId: number
    source: number
    topics: number
    _all: number
  }


  export type NodesSourcesAvgAggregateInputType = {
    lastFetchedBlockNumber?: true
    chainId?: true
  }

  export type NodesSourcesSumAggregateInputType = {
    lastFetchedBlockNumber?: true
    chainId?: true
  }

  export type NodesSourcesMinAggregateInputType = {
    id?: true
    lastFetchedBlockNumber?: true
    nodeType?: true
    chainId?: true
    source?: true
  }

  export type NodesSourcesMaxAggregateInputType = {
    id?: true
    lastFetchedBlockNumber?: true
    nodeType?: true
    chainId?: true
    source?: true
  }

  export type NodesSourcesCountAggregateInputType = {
    id?: true
    lastFetchedBlockNumber?: true
    nodeType?: true
    chainId?: true
    source?: true
    topics?: true
    _all?: true
  }

  export type NodesSourcesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NodesSources to aggregate.
     */
    where?: NodesSourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodesSources to fetch.
     */
    orderBy?: NodesSourcesOrderByWithRelationInput | NodesSourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodesSourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodesSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodesSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NodesSources
    **/
    _count?: true | NodesSourcesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NodesSourcesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NodesSourcesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodesSourcesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodesSourcesMaxAggregateInputType
  }

  export type GetNodesSourcesAggregateType<T extends NodesSourcesAggregateArgs> = {
        [P in keyof T & keyof AggregateNodesSources]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNodesSources[P]>
      : GetScalarType<T[P], AggregateNodesSources[P]>
  }




  export type NodesSourcesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodesSourcesWhereInput
    orderBy?: NodesSourcesOrderByWithAggregationInput | NodesSourcesOrderByWithAggregationInput[]
    by: NodesSourcesScalarFieldEnum[] | NodesSourcesScalarFieldEnum
    having?: NodesSourcesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodesSourcesCountAggregateInputType | true
    _avg?: NodesSourcesAvgAggregateInputType
    _sum?: NodesSourcesSumAggregateInputType
    _min?: NodesSourcesMinAggregateInputType
    _max?: NodesSourcesMaxAggregateInputType
  }

  export type NodesSourcesGroupByOutputType = {
    id: string
    lastFetchedBlockNumber: number
    nodeType: string
    chainId: number
    source: string
    topics: string[]
    _count: NodesSourcesCountAggregateOutputType | null
    _avg: NodesSourcesAvgAggregateOutputType | null
    _sum: NodesSourcesSumAggregateOutputType | null
    _min: NodesSourcesMinAggregateOutputType | null
    _max: NodesSourcesMaxAggregateOutputType | null
  }

  type GetNodesSourcesGroupByPayload<T extends NodesSourcesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodesSourcesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodesSourcesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodesSourcesGroupByOutputType[P]>
            : GetScalarType<T[P], NodesSourcesGroupByOutputType[P]>
        }
      >
    >


  export type NodesSourcesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastFetchedBlockNumber?: boolean
    nodeType?: boolean
    chainId?: boolean
    source?: boolean
    topics?: boolean
    nodes?: boolean | NodesSources$nodesArgs<ExtArgs>
    _count?: boolean | NodesSourcesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodesSources"]>

  export type NodesSourcesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastFetchedBlockNumber?: boolean
    nodeType?: boolean
    chainId?: boolean
    source?: boolean
    topics?: boolean
  }, ExtArgs["result"]["nodesSources"]>

  export type NodesSourcesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastFetchedBlockNumber?: boolean
    nodeType?: boolean
    chainId?: boolean
    source?: boolean
    topics?: boolean
  }, ExtArgs["result"]["nodesSources"]>

  export type NodesSourcesSelectScalar = {
    id?: boolean
    lastFetchedBlockNumber?: boolean
    nodeType?: boolean
    chainId?: boolean
    source?: boolean
    topics?: boolean
  }

  export type NodesSourcesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastFetchedBlockNumber" | "nodeType" | "chainId" | "source" | "topics", ExtArgs["result"]["nodesSources"]>
  export type NodesSourcesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | NodesSources$nodesArgs<ExtArgs>
    _count?: boolean | NodesSourcesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NodesSourcesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NodesSourcesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NodesSourcesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NodesSources"
    objects: {
      nodes: Prisma.$NodesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastFetchedBlockNumber: number
      nodeType: string
      chainId: number
      source: string
      topics: string[]
    }, ExtArgs["result"]["nodesSources"]>
    composites: {}
  }

  type NodesSourcesGetPayload<S extends boolean | null | undefined | NodesSourcesDefaultArgs> = $Result.GetResult<Prisma.$NodesSourcesPayload, S>

  type NodesSourcesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodesSourcesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: NodesSourcesCountAggregateInputType | true
    }

  export interface NodesSourcesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NodesSources'], meta: { name: 'NodesSources' } }
    /**
     * Find zero or one NodesSources that matches the filter.
     * @param {NodesSourcesFindUniqueArgs} args - Arguments to find a NodesSources
     * @example
     * // Get one NodesSources
     * const nodesSources = await prisma.nodesSources.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodesSourcesFindUniqueArgs>(args: SelectSubset<T, NodesSourcesFindUniqueArgs<ExtArgs>>): Prisma__NodesSourcesClient<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one NodesSources that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodesSourcesFindUniqueOrThrowArgs} args - Arguments to find a NodesSources
     * @example
     * // Get one NodesSources
     * const nodesSources = await prisma.nodesSources.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodesSourcesFindUniqueOrThrowArgs>(args: SelectSubset<T, NodesSourcesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodesSourcesClient<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first NodesSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesSourcesFindFirstArgs} args - Arguments to find a NodesSources
     * @example
     * // Get one NodesSources
     * const nodesSources = await prisma.nodesSources.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodesSourcesFindFirstArgs>(args?: SelectSubset<T, NodesSourcesFindFirstArgs<ExtArgs>>): Prisma__NodesSourcesClient<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first NodesSources that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesSourcesFindFirstOrThrowArgs} args - Arguments to find a NodesSources
     * @example
     * // Get one NodesSources
     * const nodesSources = await prisma.nodesSources.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodesSourcesFindFirstOrThrowArgs>(args?: SelectSubset<T, NodesSourcesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodesSourcesClient<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more NodesSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesSourcesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NodesSources
     * const nodesSources = await prisma.nodesSources.findMany()
     * 
     * // Get first 10 NodesSources
     * const nodesSources = await prisma.nodesSources.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodesSourcesWithIdOnly = await prisma.nodesSources.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodesSourcesFindManyArgs>(args?: SelectSubset<T, NodesSourcesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a NodesSources.
     * @param {NodesSourcesCreateArgs} args - Arguments to create a NodesSources.
     * @example
     * // Create one NodesSources
     * const NodesSources = await prisma.nodesSources.create({
     *   data: {
     *     // ... data to create a NodesSources
     *   }
     * })
     * 
     */
    create<T extends NodesSourcesCreateArgs>(args: SelectSubset<T, NodesSourcesCreateArgs<ExtArgs>>): Prisma__NodesSourcesClient<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many NodesSources.
     * @param {NodesSourcesCreateManyArgs} args - Arguments to create many NodesSources.
     * @example
     * // Create many NodesSources
     * const nodesSources = await prisma.nodesSources.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodesSourcesCreateManyArgs>(args?: SelectSubset<T, NodesSourcesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NodesSources and returns the data saved in the database.
     * @param {NodesSourcesCreateManyAndReturnArgs} args - Arguments to create many NodesSources.
     * @example
     * // Create many NodesSources
     * const nodesSources = await prisma.nodesSources.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NodesSources and only return the `id`
     * const nodesSourcesWithIdOnly = await prisma.nodesSources.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodesSourcesCreateManyAndReturnArgs>(args?: SelectSubset<T, NodesSourcesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a NodesSources.
     * @param {NodesSourcesDeleteArgs} args - Arguments to delete one NodesSources.
     * @example
     * // Delete one NodesSources
     * const NodesSources = await prisma.nodesSources.delete({
     *   where: {
     *     // ... filter to delete one NodesSources
     *   }
     * })
     * 
     */
    delete<T extends NodesSourcesDeleteArgs>(args: SelectSubset<T, NodesSourcesDeleteArgs<ExtArgs>>): Prisma__NodesSourcesClient<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one NodesSources.
     * @param {NodesSourcesUpdateArgs} args - Arguments to update one NodesSources.
     * @example
     * // Update one NodesSources
     * const nodesSources = await prisma.nodesSources.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodesSourcesUpdateArgs>(args: SelectSubset<T, NodesSourcesUpdateArgs<ExtArgs>>): Prisma__NodesSourcesClient<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more NodesSources.
     * @param {NodesSourcesDeleteManyArgs} args - Arguments to filter NodesSources to delete.
     * @example
     * // Delete a few NodesSources
     * const { count } = await prisma.nodesSources.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodesSourcesDeleteManyArgs>(args?: SelectSubset<T, NodesSourcesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NodesSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesSourcesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NodesSources
     * const nodesSources = await prisma.nodesSources.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodesSourcesUpdateManyArgs>(args: SelectSubset<T, NodesSourcesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NodesSources and returns the data updated in the database.
     * @param {NodesSourcesUpdateManyAndReturnArgs} args - Arguments to update many NodesSources.
     * @example
     * // Update many NodesSources
     * const nodesSources = await prisma.nodesSources.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NodesSources and only return the `id`
     * const nodesSourcesWithIdOnly = await prisma.nodesSources.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NodesSourcesUpdateManyAndReturnArgs>(args: SelectSubset<T, NodesSourcesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one NodesSources.
     * @param {NodesSourcesUpsertArgs} args - Arguments to update or create a NodesSources.
     * @example
     * // Update or create a NodesSources
     * const nodesSources = await prisma.nodesSources.upsert({
     *   create: {
     *     // ... data to create a NodesSources
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NodesSources we want to update
     *   }
     * })
     */
    upsert<T extends NodesSourcesUpsertArgs>(args: SelectSubset<T, NodesSourcesUpsertArgs<ExtArgs>>): Prisma__NodesSourcesClient<$Result.GetResult<Prisma.$NodesSourcesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of NodesSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesSourcesCountArgs} args - Arguments to filter NodesSources to count.
     * @example
     * // Count the number of NodesSources
     * const count = await prisma.nodesSources.count({
     *   where: {
     *     // ... the filter for the NodesSources we want to count
     *   }
     * })
    **/
    count<T extends NodesSourcesCountArgs>(
      args?: Subset<T, NodesSourcesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodesSourcesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NodesSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesSourcesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NodesSourcesAggregateArgs>(args: Subset<T, NodesSourcesAggregateArgs>): Prisma.PrismaPromise<GetNodesSourcesAggregateType<T>>

    /**
     * Group by NodesSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodesSourcesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NodesSourcesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodesSourcesGroupByArgs['orderBy'] }
        : { orderBy?: NodesSourcesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NodesSourcesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodesSourcesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NodesSources model
   */
  readonly fields: NodesSourcesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NodesSources.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodesSourcesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nodes<T extends NodesSources$nodesArgs<ExtArgs> = {}>(args?: Subset<T, NodesSources$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NodesSources model
   */ 
  interface NodesSourcesFieldRefs {
    readonly id: FieldRef<"NodesSources", 'String'>
    readonly lastFetchedBlockNumber: FieldRef<"NodesSources", 'Int'>
    readonly nodeType: FieldRef<"NodesSources", 'String'>
    readonly chainId: FieldRef<"NodesSources", 'Int'>
    readonly source: FieldRef<"NodesSources", 'String'>
    readonly topics: FieldRef<"NodesSources", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * NodesSources findUnique
   */
  export type NodesSourcesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesSourcesInclude<ExtArgs> | null
    /**
     * Filter, which NodesSources to fetch.
     */
    where: NodesSourcesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * NodesSources findUniqueOrThrow
   */
  export type NodesSourcesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesSourcesInclude<ExtArgs> | null
    /**
     * Filter, which NodesSources to fetch.
     */
    where: NodesSourcesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * NodesSources findFirst
   */
  export type NodesSourcesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesSourcesInclude<ExtArgs> | null
    /**
     * Filter, which NodesSources to fetch.
     */
    where?: NodesSourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodesSources to fetch.
     */
    orderBy?: NodesSourcesOrderByWithRelationInput | NodesSourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NodesSources.
     */
    cursor?: NodesSourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodesSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodesSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodesSources.
     */
    distinct?: NodesSourcesScalarFieldEnum | NodesSourcesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * NodesSources findFirstOrThrow
   */
  export type NodesSourcesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesSourcesInclude<ExtArgs> | null
    /**
     * Filter, which NodesSources to fetch.
     */
    where?: NodesSourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodesSources to fetch.
     */
    orderBy?: NodesSourcesOrderByWithRelationInput | NodesSourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NodesSources.
     */
    cursor?: NodesSourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodesSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodesSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodesSources.
     */
    distinct?: NodesSourcesScalarFieldEnum | NodesSourcesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * NodesSources findMany
   */
  export type NodesSourcesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesSourcesInclude<ExtArgs> | null
    /**
     * Filter, which NodesSources to fetch.
     */
    where?: NodesSourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodesSources to fetch.
     */
    orderBy?: NodesSourcesOrderByWithRelationInput | NodesSourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NodesSources.
     */
    cursor?: NodesSourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodesSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodesSources.
     */
    skip?: number
    distinct?: NodesSourcesScalarFieldEnum | NodesSourcesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * NodesSources create
   */
  export type NodesSourcesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesSourcesInclude<ExtArgs> | null
    /**
     * The data needed to create a NodesSources.
     */
    data: XOR<NodesSourcesCreateInput, NodesSourcesUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * NodesSources createMany
   */
  export type NodesSourcesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NodesSources.
     */
    data: NodesSourcesCreateManyInput | NodesSourcesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NodesSources createManyAndReturn
   */
  export type NodesSourcesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * The data used to create many NodesSources.
     */
    data: NodesSourcesCreateManyInput | NodesSourcesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NodesSources update
   */
  export type NodesSourcesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesSourcesInclude<ExtArgs> | null
    /**
     * The data needed to update a NodesSources.
     */
    data: XOR<NodesSourcesUpdateInput, NodesSourcesUncheckedUpdateInput>
    /**
     * Choose, which NodesSources to update.
     */
    where: NodesSourcesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * NodesSources updateMany
   */
  export type NodesSourcesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NodesSources.
     */
    data: XOR<NodesSourcesUpdateManyMutationInput, NodesSourcesUncheckedUpdateManyInput>
    /**
     * Filter which NodesSources to update
     */
    where?: NodesSourcesWhereInput
    /**
     * Limit how many NodesSources to update.
     */
    limit?: number
  }

  /**
   * NodesSources updateManyAndReturn
   */
  export type NodesSourcesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * The data used to update NodesSources.
     */
    data: XOR<NodesSourcesUpdateManyMutationInput, NodesSourcesUncheckedUpdateManyInput>
    /**
     * Filter which NodesSources to update
     */
    where?: NodesSourcesWhereInput
    /**
     * Limit how many NodesSources to update.
     */
    limit?: number
  }

  /**
   * NodesSources upsert
   */
  export type NodesSourcesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesSourcesInclude<ExtArgs> | null
    /**
     * The filter to search for the NodesSources to update in case it exists.
     */
    where: NodesSourcesWhereUniqueInput
    /**
     * In case the NodesSources found by the `where` argument doesn't exist, create a new NodesSources with this data.
     */
    create: XOR<NodesSourcesCreateInput, NodesSourcesUncheckedCreateInput>
    /**
     * In case the NodesSources was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodesSourcesUpdateInput, NodesSourcesUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * NodesSources delete
   */
  export type NodesSourcesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesSourcesInclude<ExtArgs> | null
    /**
     * Filter which NodesSources to delete.
     */
    where: NodesSourcesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * NodesSources deleteMany
   */
  export type NodesSourcesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NodesSources to delete
     */
    where?: NodesSourcesWhereInput
    /**
     * Limit how many NodesSources to delete.
     */
    limit?: number
  }

  /**
   * NodesSources.nodes
   */
  export type NodesSources$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nodes
     */
    select?: NodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nodes
     */
    omit?: NodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesInclude<ExtArgs> | null
    where?: NodesWhereInput
    orderBy?: NodesOrderByWithRelationInput | NodesOrderByWithRelationInput[]
    cursor?: NodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodesScalarFieldEnum | NodesScalarFieldEnum[]
  }

  /**
   * NodesSources without action
   */
  export type NodesSourcesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodesSources
     */
    select?: NodesSourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodesSources
     */
    omit?: NodesSourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodesSourcesInclude<ExtArgs> | null
  }


  /**
   * Model CampaignCreators
   */

  export type AggregateCampaignCreators = {
    _count: CampaignCreatorsCountAggregateOutputType | null
    _min: CampaignCreatorsMinAggregateOutputType | null
    _max: CampaignCreatorsMaxAggregateOutputType | null
  }

  export type CampaignCreatorsMinAggregateOutputType = {
    address: string | null
    tags: string | null
  }

  export type CampaignCreatorsMaxAggregateOutputType = {
    address: string | null
    tags: string | null
  }

  export type CampaignCreatorsCountAggregateOutputType = {
    address: number
    tags: number
    _all: number
  }


  export type CampaignCreatorsMinAggregateInputType = {
    address?: true
    tags?: true
  }

  export type CampaignCreatorsMaxAggregateInputType = {
    address?: true
    tags?: true
  }

  export type CampaignCreatorsCountAggregateInputType = {
    address?: true
    tags?: true
    _all?: true
  }

  export type CampaignCreatorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignCreators to aggregate.
     */
    where?: CampaignCreatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignCreators to fetch.
     */
    orderBy?: CampaignCreatorsOrderByWithRelationInput | CampaignCreatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignCreatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignCreators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignCreators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignCreators
    **/
    _count?: true | CampaignCreatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignCreatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignCreatorsMaxAggregateInputType
  }

  export type GetCampaignCreatorsAggregateType<T extends CampaignCreatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignCreators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignCreators[P]>
      : GetScalarType<T[P], AggregateCampaignCreators[P]>
  }




  export type CampaignCreatorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignCreatorsWhereInput
    orderBy?: CampaignCreatorsOrderByWithAggregationInput | CampaignCreatorsOrderByWithAggregationInput[]
    by: CampaignCreatorsScalarFieldEnum[] | CampaignCreatorsScalarFieldEnum
    having?: CampaignCreatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCreatorsCountAggregateInputType | true
    _min?: CampaignCreatorsMinAggregateInputType
    _max?: CampaignCreatorsMaxAggregateInputType
  }

  export type CampaignCreatorsGroupByOutputType = {
    address: string
    tags: string
    _count: CampaignCreatorsCountAggregateOutputType | null
    _min: CampaignCreatorsMinAggregateOutputType | null
    _max: CampaignCreatorsMaxAggregateOutputType | null
  }

  type GetCampaignCreatorsGroupByPayload<T extends CampaignCreatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignCreatorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignCreatorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignCreatorsGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignCreatorsGroupByOutputType[P]>
        }
      >
    >


  export type CampaignCreatorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    tags?: boolean
  }, ExtArgs["result"]["campaignCreators"]>

  export type CampaignCreatorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    tags?: boolean
  }, ExtArgs["result"]["campaignCreators"]>

  export type CampaignCreatorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    tags?: boolean
  }, ExtArgs["result"]["campaignCreators"]>

  export type CampaignCreatorsSelectScalar = {
    address?: boolean
    tags?: boolean
  }

  export type CampaignCreatorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"address" | "tags", ExtArgs["result"]["campaignCreators"]>

  export type $CampaignCreatorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignCreators"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      address: string
      tags: string
    }, ExtArgs["result"]["campaignCreators"]>
    composites: {}
  }

  type CampaignCreatorsGetPayload<S extends boolean | null | undefined | CampaignCreatorsDefaultArgs> = $Result.GetResult<Prisma.$CampaignCreatorsPayload, S>

  type CampaignCreatorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignCreatorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CampaignCreatorsCountAggregateInputType | true
    }

  export interface CampaignCreatorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignCreators'], meta: { name: 'CampaignCreators' } }
    /**
     * Find zero or one CampaignCreators that matches the filter.
     * @param {CampaignCreatorsFindUniqueArgs} args - Arguments to find a CampaignCreators
     * @example
     * // Get one CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignCreatorsFindUniqueArgs>(args: SelectSubset<T, CampaignCreatorsFindUniqueArgs<ExtArgs>>): Prisma__CampaignCreatorsClient<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CampaignCreators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignCreatorsFindUniqueOrThrowArgs} args - Arguments to find a CampaignCreators
     * @example
     * // Get one CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignCreatorsFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignCreatorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignCreatorsClient<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CampaignCreators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCreatorsFindFirstArgs} args - Arguments to find a CampaignCreators
     * @example
     * // Get one CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignCreatorsFindFirstArgs>(args?: SelectSubset<T, CampaignCreatorsFindFirstArgs<ExtArgs>>): Prisma__CampaignCreatorsClient<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CampaignCreators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCreatorsFindFirstOrThrowArgs} args - Arguments to find a CampaignCreators
     * @example
     * // Get one CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignCreatorsFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignCreatorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignCreatorsClient<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CampaignCreators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCreatorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.findMany()
     * 
     * // Get first 10 CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const campaignCreatorsWithAddressOnly = await prisma.campaignCreators.findMany({ select: { address: true } })
     * 
     */
    findMany<T extends CampaignCreatorsFindManyArgs>(args?: SelectSubset<T, CampaignCreatorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CampaignCreators.
     * @param {CampaignCreatorsCreateArgs} args - Arguments to create a CampaignCreators.
     * @example
     * // Create one CampaignCreators
     * const CampaignCreators = await prisma.campaignCreators.create({
     *   data: {
     *     // ... data to create a CampaignCreators
     *   }
     * })
     * 
     */
    create<T extends CampaignCreatorsCreateArgs>(args: SelectSubset<T, CampaignCreatorsCreateArgs<ExtArgs>>): Prisma__CampaignCreatorsClient<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CampaignCreators.
     * @param {CampaignCreatorsCreateManyArgs} args - Arguments to create many CampaignCreators.
     * @example
     * // Create many CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreatorsCreateManyArgs>(args?: SelectSubset<T, CampaignCreatorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignCreators and returns the data saved in the database.
     * @param {CampaignCreatorsCreateManyAndReturnArgs} args - Arguments to create many CampaignCreators.
     * @example
     * // Create many CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignCreators and only return the `address`
     * const campaignCreatorsWithAddressOnly = await prisma.campaignCreators.createManyAndReturn({
     *   select: { address: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreatorsCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreatorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CampaignCreators.
     * @param {CampaignCreatorsDeleteArgs} args - Arguments to delete one CampaignCreators.
     * @example
     * // Delete one CampaignCreators
     * const CampaignCreators = await prisma.campaignCreators.delete({
     *   where: {
     *     // ... filter to delete one CampaignCreators
     *   }
     * })
     * 
     */
    delete<T extends CampaignCreatorsDeleteArgs>(args: SelectSubset<T, CampaignCreatorsDeleteArgs<ExtArgs>>): Prisma__CampaignCreatorsClient<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CampaignCreators.
     * @param {CampaignCreatorsUpdateArgs} args - Arguments to update one CampaignCreators.
     * @example
     * // Update one CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignCreatorsUpdateArgs>(args: SelectSubset<T, CampaignCreatorsUpdateArgs<ExtArgs>>): Prisma__CampaignCreatorsClient<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CampaignCreators.
     * @param {CampaignCreatorsDeleteManyArgs} args - Arguments to filter CampaignCreators to delete.
     * @example
     * // Delete a few CampaignCreators
     * const { count } = await prisma.campaignCreators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignCreatorsDeleteManyArgs>(args?: SelectSubset<T, CampaignCreatorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignCreators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCreatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignCreatorsUpdateManyArgs>(args: SelectSubset<T, CampaignCreatorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignCreators and returns the data updated in the database.
     * @param {CampaignCreatorsUpdateManyAndReturnArgs} args - Arguments to update many CampaignCreators.
     * @example
     * // Update many CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignCreators and only return the `address`
     * const campaignCreatorsWithAddressOnly = await prisma.campaignCreators.updateManyAndReturn({
     *   select: { address: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignCreatorsUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignCreatorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CampaignCreators.
     * @param {CampaignCreatorsUpsertArgs} args - Arguments to update or create a CampaignCreators.
     * @example
     * // Update or create a CampaignCreators
     * const campaignCreators = await prisma.campaignCreators.upsert({
     *   create: {
     *     // ... data to create a CampaignCreators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignCreators we want to update
     *   }
     * })
     */
    upsert<T extends CampaignCreatorsUpsertArgs>(args: SelectSubset<T, CampaignCreatorsUpsertArgs<ExtArgs>>): Prisma__CampaignCreatorsClient<$Result.GetResult<Prisma.$CampaignCreatorsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CampaignCreators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCreatorsCountArgs} args - Arguments to filter CampaignCreators to count.
     * @example
     * // Count the number of CampaignCreators
     * const count = await prisma.campaignCreators.count({
     *   where: {
     *     // ... the filter for the CampaignCreators we want to count
     *   }
     * })
    **/
    count<T extends CampaignCreatorsCountArgs>(
      args?: Subset<T, CampaignCreatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCreatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignCreators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCreatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignCreatorsAggregateArgs>(args: Subset<T, CampaignCreatorsAggregateArgs>): Prisma.PrismaPromise<GetCampaignCreatorsAggregateType<T>>

    /**
     * Group by CampaignCreators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCreatorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignCreatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignCreatorsGroupByArgs['orderBy'] }
        : { orderBy?: CampaignCreatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignCreatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignCreatorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignCreators model
   */
  readonly fields: CampaignCreatorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignCreators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignCreatorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CampaignCreators model
   */ 
  interface CampaignCreatorsFieldRefs {
    readonly address: FieldRef<"CampaignCreators", 'String'>
    readonly tags: FieldRef<"CampaignCreators", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CampaignCreators findUnique
   */
  export type CampaignCreatorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * Filter, which CampaignCreators to fetch.
     */
    where: CampaignCreatorsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignCreators findUniqueOrThrow
   */
  export type CampaignCreatorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * Filter, which CampaignCreators to fetch.
     */
    where: CampaignCreatorsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignCreators findFirst
   */
  export type CampaignCreatorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * Filter, which CampaignCreators to fetch.
     */
    where?: CampaignCreatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignCreators to fetch.
     */
    orderBy?: CampaignCreatorsOrderByWithRelationInput | CampaignCreatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignCreators.
     */
    cursor?: CampaignCreatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignCreators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignCreators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignCreators.
     */
    distinct?: CampaignCreatorsScalarFieldEnum | CampaignCreatorsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignCreators findFirstOrThrow
   */
  export type CampaignCreatorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * Filter, which CampaignCreators to fetch.
     */
    where?: CampaignCreatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignCreators to fetch.
     */
    orderBy?: CampaignCreatorsOrderByWithRelationInput | CampaignCreatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignCreators.
     */
    cursor?: CampaignCreatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignCreators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignCreators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignCreators.
     */
    distinct?: CampaignCreatorsScalarFieldEnum | CampaignCreatorsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignCreators findMany
   */
  export type CampaignCreatorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * Filter, which CampaignCreators to fetch.
     */
    where?: CampaignCreatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignCreators to fetch.
     */
    orderBy?: CampaignCreatorsOrderByWithRelationInput | CampaignCreatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignCreators.
     */
    cursor?: CampaignCreatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignCreators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignCreators.
     */
    skip?: number
    distinct?: CampaignCreatorsScalarFieldEnum | CampaignCreatorsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignCreators create
   */
  export type CampaignCreatorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * The data needed to create a CampaignCreators.
     */
    data: XOR<CampaignCreatorsCreateInput, CampaignCreatorsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignCreators createMany
   */
  export type CampaignCreatorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignCreators.
     */
    data: CampaignCreatorsCreateManyInput | CampaignCreatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignCreators createManyAndReturn
   */
  export type CampaignCreatorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignCreators.
     */
    data: CampaignCreatorsCreateManyInput | CampaignCreatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignCreators update
   */
  export type CampaignCreatorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * The data needed to update a CampaignCreators.
     */
    data: XOR<CampaignCreatorsUpdateInput, CampaignCreatorsUncheckedUpdateInput>
    /**
     * Choose, which CampaignCreators to update.
     */
    where: CampaignCreatorsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignCreators updateMany
   */
  export type CampaignCreatorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignCreators.
     */
    data: XOR<CampaignCreatorsUpdateManyMutationInput, CampaignCreatorsUncheckedUpdateManyInput>
    /**
     * Filter which CampaignCreators to update
     */
    where?: CampaignCreatorsWhereInput
    /**
     * Limit how many CampaignCreators to update.
     */
    limit?: number
  }

  /**
   * CampaignCreators updateManyAndReturn
   */
  export type CampaignCreatorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * The data used to update CampaignCreators.
     */
    data: XOR<CampaignCreatorsUpdateManyMutationInput, CampaignCreatorsUncheckedUpdateManyInput>
    /**
     * Filter which CampaignCreators to update
     */
    where?: CampaignCreatorsWhereInput
    /**
     * Limit how many CampaignCreators to update.
     */
    limit?: number
  }

  /**
   * CampaignCreators upsert
   */
  export type CampaignCreatorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * The filter to search for the CampaignCreators to update in case it exists.
     */
    where: CampaignCreatorsWhereUniqueInput
    /**
     * In case the CampaignCreators found by the `where` argument doesn't exist, create a new CampaignCreators with this data.
     */
    create: XOR<CampaignCreatorsCreateInput, CampaignCreatorsUncheckedCreateInput>
    /**
     * In case the CampaignCreators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignCreatorsUpdateInput, CampaignCreatorsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignCreators delete
   */
  export type CampaignCreatorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
    /**
     * Filter which CampaignCreators to delete.
     */
    where: CampaignCreatorsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CampaignCreators deleteMany
   */
  export type CampaignCreatorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignCreators to delete
     */
    where?: CampaignCreatorsWhereInput
    /**
     * Limit how many CampaignCreators to delete.
     */
    limit?: number
  }

  /**
   * CampaignCreators without action
   */
  export type CampaignCreatorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCreators
     */
    select?: CampaignCreatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCreators
     */
    omit?: CampaignCreatorsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TempLeavesScalarFieldEnum: {
    chainId: 'chainId',
    campaignId: 'campaignId',
    recipient: 'recipient',
    reason: 'reason',
    rewardToken: 'rewardToken',
    amount: 'amount',
    lastProcessedTimestamp: 'lastProcessedTimestamp'
  };

  export type TempLeavesScalarFieldEnum = (typeof TempLeavesScalarFieldEnum)[keyof typeof TempLeavesScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const LeavesScalarFieldEnum: {
    chainId: 'chainId',
    root: 'root',
    campaignId: 'campaignId',
    recipient: 'recipient',
    reason: 'reason',
    rewardToken: 'rewardToken',
    amount: 'amount',
    lastProcessedTimestamp: 'lastProcessedTimestamp'
  };

  export type LeavesScalarFieldEnum = (typeof LeavesScalarFieldEnum)[keyof typeof LeavesScalarFieldEnum]


  export const ProofsScalarFieldEnum: {
    chainId: 'chainId',
    root: 'root',
    recipient: 'recipient',
    rewardToken: 'rewardToken',
    proof: 'proof'
  };

  export type ProofsScalarFieldEnum = (typeof ProofsScalarFieldEnum)[keyof typeof ProofsScalarFieldEnum]


  export const MerklRootsScalarFieldEnum: {
    chainId: 'chainId',
    epoch: 'epoch',
    timestamp: 'timestamp',
    root: 'root'
  };

  export type MerklRootsScalarFieldEnum = (typeof MerklRootsScalarFieldEnum)[keyof typeof MerklRootsScalarFieldEnum]


  export const CampaignsScalarFieldEnum: {
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

  export type CampaignsScalarFieldEnum = (typeof CampaignsScalarFieldEnum)[keyof typeof CampaignsScalarFieldEnum]


  export const CampaignsToProcessScalarFieldEnum: {
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

  export type CampaignsToProcessScalarFieldEnum = (typeof CampaignsToProcessScalarFieldEnum)[keyof typeof CampaignsToProcessScalarFieldEnum]


  export const ClaimsScalarFieldEnum: {
    chainId: 'chainId',
    recipient: 'recipient',
    campaignId: 'campaignId',
    rewardToken: 'rewardToken',
    reason: 'reason',
    root: 'root',
    claimed: 'claimed',
    timestamp: 'timestamp'
  };

  export type ClaimsScalarFieldEnum = (typeof ClaimsScalarFieldEnum)[keyof typeof ClaimsScalarFieldEnum]


  export const ClaimsOverTimeScalarFieldEnum: {
    chainId: 'chainId',
    recipient: 'recipient',
    campaignId: 'campaignId',
    rewardToken: 'rewardToken',
    reason: 'reason',
    root: 'root',
    claimed: 'claimed',
    timestamp: 'timestamp'
  };

  export type ClaimsOverTimeScalarFieldEnum = (typeof ClaimsOverTimeScalarFieldEnum)[keyof typeof ClaimsOverTimeScalarFieldEnum]


  export const ALMsScalarFieldEnum: {
    chainId: 'chainId',
    campaignId: 'campaignId',
    name: 'name',
    type: 'type',
    address: 'address',
    target: 'target',
    owner: 'owner',
    underlyingPool: 'underlyingPool'
  };

  export type ALMsScalarFieldEnum = (typeof ALMsScalarFieldEnum)[keyof typeof ALMsScalarFieldEnum]


  export const ERC20HoldersScalarFieldEnum: {
    chainId: 'chainId',
    token: 'token',
    holders: 'holders',
    blockNumber: 'blockNumber'
  };

  export type ERC20HoldersScalarFieldEnum = (typeof ERC20HoldersScalarFieldEnum)[keyof typeof ERC20HoldersScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    chainId: 'chainId',
    address: 'address',
    symbol: 'symbol',
    decimals: 'decimals'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const StateSaveScalarFieldEnum: {
    id: 'id',
    blockNumber: 'blockNumber',
    state: 'state'
  };

  export type StateSaveScalarFieldEnum = (typeof StateSaveScalarFieldEnum)[keyof typeof StateSaveScalarFieldEnum]


  export const NodesScalarFieldEnum: {
    id: 'id',
    chainId: 'chainId',
    nodeType: 'nodeType',
    recipient: 'recipient',
    nodesSourceId: 'nodesSourceId',
    creationBlockNumber: 'creationBlockNumber',
    metadata: 'metadata'
  };

  export type NodesScalarFieldEnum = (typeof NodesScalarFieldEnum)[keyof typeof NodesScalarFieldEnum]


  export const NodesSourcesScalarFieldEnum: {
    id: 'id',
    lastFetchedBlockNumber: 'lastFetchedBlockNumber',
    nodeType: 'nodeType',
    chainId: 'chainId',
    source: 'source',
    topics: 'topics'
  };

  export type NodesSourcesScalarFieldEnum = (typeof NodesSourcesScalarFieldEnum)[keyof typeof NodesSourcesScalarFieldEnum]


  export const CampaignCreatorsScalarFieldEnum: {
    address: 'address',
    tags: 'tags'
  };

  export type CampaignCreatorsScalarFieldEnum = (typeof CampaignCreatorsScalarFieldEnum)[keyof typeof CampaignCreatorsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const TempLeavesOrderByRelevanceFieldEnum: {
    campaignId: 'campaignId',
    recipient: 'recipient',
    reason: 'reason',
    rewardToken: 'rewardToken',
    amount: 'amount'
  };

  export type TempLeavesOrderByRelevanceFieldEnum = (typeof TempLeavesOrderByRelevanceFieldEnum)[keyof typeof TempLeavesOrderByRelevanceFieldEnum]


  export const LeavesOrderByRelevanceFieldEnum: {
    root: 'root',
    campaignId: 'campaignId',
    recipient: 'recipient',
    reason: 'reason',
    rewardToken: 'rewardToken',
    amount: 'amount'
  };

  export type LeavesOrderByRelevanceFieldEnum = (typeof LeavesOrderByRelevanceFieldEnum)[keyof typeof LeavesOrderByRelevanceFieldEnum]


  export const ProofsOrderByRelevanceFieldEnum: {
    root: 'root',
    recipient: 'recipient',
    rewardToken: 'rewardToken',
    proof: 'proof'
  };

  export type ProofsOrderByRelevanceFieldEnum = (typeof ProofsOrderByRelevanceFieldEnum)[keyof typeof ProofsOrderByRelevanceFieldEnum]


  export const MerklRootsOrderByRelevanceFieldEnum: {
    root: 'root'
  };

  export type MerklRootsOrderByRelevanceFieldEnum = (typeof MerklRootsOrderByRelevanceFieldEnum)[keyof typeof MerklRootsOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const CampaignsOrderByRelevanceFieldEnum: {
    campaignId: 'campaignId',
    creator: 'creator',
    rewardToken: 'rewardToken',
    amount: 'amount',
    mainParameter: 'mainParameter'
  };

  export type CampaignsOrderByRelevanceFieldEnum = (typeof CampaignsOrderByRelevanceFieldEnum)[keyof typeof CampaignsOrderByRelevanceFieldEnum]


  export const CampaignsToProcessOrderByRelevanceFieldEnum: {
    campaignId: 'campaignId',
    creator: 'creator',
    rewardToken: 'rewardToken',
    amount: 'amount',
    mainParameter: 'mainParameter'
  };

  export type CampaignsToProcessOrderByRelevanceFieldEnum = (typeof CampaignsToProcessOrderByRelevanceFieldEnum)[keyof typeof CampaignsToProcessOrderByRelevanceFieldEnum]


  export const ClaimsOrderByRelevanceFieldEnum: {
    recipient: 'recipient',
    campaignId: 'campaignId',
    rewardToken: 'rewardToken',
    reason: 'reason',
    root: 'root',
    claimed: 'claimed'
  };

  export type ClaimsOrderByRelevanceFieldEnum = (typeof ClaimsOrderByRelevanceFieldEnum)[keyof typeof ClaimsOrderByRelevanceFieldEnum]


  export const ClaimsOverTimeOrderByRelevanceFieldEnum: {
    recipient: 'recipient',
    campaignId: 'campaignId',
    rewardToken: 'rewardToken',
    reason: 'reason',
    root: 'root',
    claimed: 'claimed'
  };

  export type ClaimsOverTimeOrderByRelevanceFieldEnum = (typeof ClaimsOverTimeOrderByRelevanceFieldEnum)[keyof typeof ClaimsOverTimeOrderByRelevanceFieldEnum]


  export const ALMsOrderByRelevanceFieldEnum: {
    campaignId: 'campaignId',
    name: 'name',
    type: 'type',
    address: 'address',
    target: 'target',
    owner: 'owner',
    underlyingPool: 'underlyingPool'
  };

  export type ALMsOrderByRelevanceFieldEnum = (typeof ALMsOrderByRelevanceFieldEnum)[keyof typeof ALMsOrderByRelevanceFieldEnum]


  export const ERC20HoldersOrderByRelevanceFieldEnum: {
    token: 'token',
    holders: 'holders'
  };

  export type ERC20HoldersOrderByRelevanceFieldEnum = (typeof ERC20HoldersOrderByRelevanceFieldEnum)[keyof typeof ERC20HoldersOrderByRelevanceFieldEnum]


  export const TokensOrderByRelevanceFieldEnum: {
    address: 'address',
    symbol: 'symbol'
  };

  export type TokensOrderByRelevanceFieldEnum = (typeof TokensOrderByRelevanceFieldEnum)[keyof typeof TokensOrderByRelevanceFieldEnum]


  export const StateSaveOrderByRelevanceFieldEnum: {
    id: 'id'
  };

  export type StateSaveOrderByRelevanceFieldEnum = (typeof StateSaveOrderByRelevanceFieldEnum)[keyof typeof StateSaveOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const NodesOrderByRelevanceFieldEnum: {
    id: 'id',
    nodeType: 'nodeType',
    recipient: 'recipient',
    nodesSourceId: 'nodesSourceId'
  };

  export type NodesOrderByRelevanceFieldEnum = (typeof NodesOrderByRelevanceFieldEnum)[keyof typeof NodesOrderByRelevanceFieldEnum]


  export const NodesSourcesOrderByRelevanceFieldEnum: {
    id: 'id',
    nodeType: 'nodeType',
    source: 'source',
    topics: 'topics'
  };

  export type NodesSourcesOrderByRelevanceFieldEnum = (typeof NodesSourcesOrderByRelevanceFieldEnum)[keyof typeof NodesSourcesOrderByRelevanceFieldEnum]


  export const CampaignCreatorsOrderByRelevanceFieldEnum: {
    address: 'address',
    tags: 'tags'
  };

  export type CampaignCreatorsOrderByRelevanceFieldEnum = (typeof CampaignCreatorsOrderByRelevanceFieldEnum)[keyof typeof CampaignCreatorsOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TempLeavesWhereInput = {
    AND?: TempLeavesWhereInput | TempLeavesWhereInput[]
    OR?: TempLeavesWhereInput[]
    NOT?: TempLeavesWhereInput | TempLeavesWhereInput[]
    chainId?: IntFilter<"TempLeaves"> | number
    campaignId?: StringFilter<"TempLeaves"> | string
    recipient?: StringFilter<"TempLeaves"> | string
    reason?: StringFilter<"TempLeaves"> | string
    rewardToken?: StringFilter<"TempLeaves"> | string
    amount?: StringFilter<"TempLeaves"> | string
    lastProcessedTimestamp?: IntFilter<"TempLeaves"> | number
  }

  export type TempLeavesOrderByWithRelationInput = {
    chainId?: SortOrder
    campaignId?: SortOrder
    recipient?: SortOrder
    reason?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    lastProcessedTimestamp?: SortOrder
    _relevance?: TempLeavesOrderByRelevanceInput
  }

  export type TempLeavesWhereUniqueInput = Prisma.AtLeast<{
    chainId_campaignId_recipient_reason?: TempLeavesChainIdCampaignIdRecipientReasonCompoundUniqueInput
    AND?: TempLeavesWhereInput | TempLeavesWhereInput[]
    OR?: TempLeavesWhereInput[]
    NOT?: TempLeavesWhereInput | TempLeavesWhereInput[]
    chainId?: IntFilter<"TempLeaves"> | number
    campaignId?: StringFilter<"TempLeaves"> | string
    recipient?: StringFilter<"TempLeaves"> | string
    reason?: StringFilter<"TempLeaves"> | string
    rewardToken?: StringFilter<"TempLeaves"> | string
    amount?: StringFilter<"TempLeaves"> | string
    lastProcessedTimestamp?: IntFilter<"TempLeaves"> | number
  }, "chainId_campaignId_recipient_reason">

  export type TempLeavesOrderByWithAggregationInput = {
    chainId?: SortOrder
    campaignId?: SortOrder
    recipient?: SortOrder
    reason?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    lastProcessedTimestamp?: SortOrder
    _count?: TempLeavesCountOrderByAggregateInput
    _avg?: TempLeavesAvgOrderByAggregateInput
    _max?: TempLeavesMaxOrderByAggregateInput
    _min?: TempLeavesMinOrderByAggregateInput
    _sum?: TempLeavesSumOrderByAggregateInput
  }

  export type TempLeavesScalarWhereWithAggregatesInput = {
    AND?: TempLeavesScalarWhereWithAggregatesInput | TempLeavesScalarWhereWithAggregatesInput[]
    OR?: TempLeavesScalarWhereWithAggregatesInput[]
    NOT?: TempLeavesScalarWhereWithAggregatesInput | TempLeavesScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"TempLeaves"> | number
    campaignId?: StringWithAggregatesFilter<"TempLeaves"> | string
    recipient?: StringWithAggregatesFilter<"TempLeaves"> | string
    reason?: StringWithAggregatesFilter<"TempLeaves"> | string
    rewardToken?: StringWithAggregatesFilter<"TempLeaves"> | string
    amount?: StringWithAggregatesFilter<"TempLeaves"> | string
    lastProcessedTimestamp?: IntWithAggregatesFilter<"TempLeaves"> | number
  }

  export type LeavesWhereInput = {
    AND?: LeavesWhereInput | LeavesWhereInput[]
    OR?: LeavesWhereInput[]
    NOT?: LeavesWhereInput | LeavesWhereInput[]
    chainId?: IntFilter<"Leaves"> | number
    root?: StringFilter<"Leaves"> | string
    campaignId?: StringFilter<"Leaves"> | string
    recipient?: StringFilter<"Leaves"> | string
    reason?: StringFilter<"Leaves"> | string
    rewardToken?: StringFilter<"Leaves"> | string
    amount?: StringFilter<"Leaves"> | string
    lastProcessedTimestamp?: IntFilter<"Leaves"> | number
  }

  export type LeavesOrderByWithRelationInput = {
    chainId?: SortOrder
    root?: SortOrder
    campaignId?: SortOrder
    recipient?: SortOrder
    reason?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    lastProcessedTimestamp?: SortOrder
    _relevance?: LeavesOrderByRelevanceInput
  }

  export type LeavesWhereUniqueInput = Prisma.AtLeast<{
    chainId_campaignId_recipient_reason_root?: LeavesChainIdCampaignIdRecipientReasonRootCompoundUniqueInput
    AND?: LeavesWhereInput | LeavesWhereInput[]
    OR?: LeavesWhereInput[]
    NOT?: LeavesWhereInput | LeavesWhereInput[]
    chainId?: IntFilter<"Leaves"> | number
    root?: StringFilter<"Leaves"> | string
    campaignId?: StringFilter<"Leaves"> | string
    recipient?: StringFilter<"Leaves"> | string
    reason?: StringFilter<"Leaves"> | string
    rewardToken?: StringFilter<"Leaves"> | string
    amount?: StringFilter<"Leaves"> | string
    lastProcessedTimestamp?: IntFilter<"Leaves"> | number
  }, "chainId_campaignId_recipient_reason_root">

  export type LeavesOrderByWithAggregationInput = {
    chainId?: SortOrder
    root?: SortOrder
    campaignId?: SortOrder
    recipient?: SortOrder
    reason?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    lastProcessedTimestamp?: SortOrder
    _count?: LeavesCountOrderByAggregateInput
    _avg?: LeavesAvgOrderByAggregateInput
    _max?: LeavesMaxOrderByAggregateInput
    _min?: LeavesMinOrderByAggregateInput
    _sum?: LeavesSumOrderByAggregateInput
  }

  export type LeavesScalarWhereWithAggregatesInput = {
    AND?: LeavesScalarWhereWithAggregatesInput | LeavesScalarWhereWithAggregatesInput[]
    OR?: LeavesScalarWhereWithAggregatesInput[]
    NOT?: LeavesScalarWhereWithAggregatesInput | LeavesScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"Leaves"> | number
    root?: StringWithAggregatesFilter<"Leaves"> | string
    campaignId?: StringWithAggregatesFilter<"Leaves"> | string
    recipient?: StringWithAggregatesFilter<"Leaves"> | string
    reason?: StringWithAggregatesFilter<"Leaves"> | string
    rewardToken?: StringWithAggregatesFilter<"Leaves"> | string
    amount?: StringWithAggregatesFilter<"Leaves"> | string
    lastProcessedTimestamp?: IntWithAggregatesFilter<"Leaves"> | number
  }

  export type ProofsWhereInput = {
    AND?: ProofsWhereInput | ProofsWhereInput[]
    OR?: ProofsWhereInput[]
    NOT?: ProofsWhereInput | ProofsWhereInput[]
    chainId?: IntFilter<"Proofs"> | number
    root?: StringFilter<"Proofs"> | string
    recipient?: StringFilter<"Proofs"> | string
    rewardToken?: StringFilter<"Proofs"> | string
    proof?: StringNullableListFilter<"Proofs">
  }

  export type ProofsOrderByWithRelationInput = {
    chainId?: SortOrder
    root?: SortOrder
    recipient?: SortOrder
    rewardToken?: SortOrder
    proof?: SortOrder
    _relevance?: ProofsOrderByRelevanceInput
  }

  export type ProofsWhereUniqueInput = Prisma.AtLeast<{
    chainId_root_recipient_rewardToken?: ProofsChainIdRootRecipientRewardTokenCompoundUniqueInput
    AND?: ProofsWhereInput | ProofsWhereInput[]
    OR?: ProofsWhereInput[]
    NOT?: ProofsWhereInput | ProofsWhereInput[]
    chainId?: IntFilter<"Proofs"> | number
    root?: StringFilter<"Proofs"> | string
    recipient?: StringFilter<"Proofs"> | string
    rewardToken?: StringFilter<"Proofs"> | string
    proof?: StringNullableListFilter<"Proofs">
  }, "chainId_root_recipient_rewardToken">

  export type ProofsOrderByWithAggregationInput = {
    chainId?: SortOrder
    root?: SortOrder
    recipient?: SortOrder
    rewardToken?: SortOrder
    proof?: SortOrder
    _count?: ProofsCountOrderByAggregateInput
    _avg?: ProofsAvgOrderByAggregateInput
    _max?: ProofsMaxOrderByAggregateInput
    _min?: ProofsMinOrderByAggregateInput
    _sum?: ProofsSumOrderByAggregateInput
  }

  export type ProofsScalarWhereWithAggregatesInput = {
    AND?: ProofsScalarWhereWithAggregatesInput | ProofsScalarWhereWithAggregatesInput[]
    OR?: ProofsScalarWhereWithAggregatesInput[]
    NOT?: ProofsScalarWhereWithAggregatesInput | ProofsScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"Proofs"> | number
    root?: StringWithAggregatesFilter<"Proofs"> | string
    recipient?: StringWithAggregatesFilter<"Proofs"> | string
    rewardToken?: StringWithAggregatesFilter<"Proofs"> | string
    proof?: StringNullableListFilter<"Proofs">
  }

  export type MerklRootsWhereInput = {
    AND?: MerklRootsWhereInput | MerklRootsWhereInput[]
    OR?: MerklRootsWhereInput[]
    NOT?: MerklRootsWhereInput | MerklRootsWhereInput[]
    chainId?: IntFilter<"MerklRoots"> | number
    epoch?: IntFilter<"MerklRoots"> | number
    timestamp?: IntFilter<"MerklRoots"> | number
    root?: StringFilter<"MerklRoots"> | string
  }

  export type MerklRootsOrderByWithRelationInput = {
    chainId?: SortOrder
    epoch?: SortOrder
    timestamp?: SortOrder
    root?: SortOrder
    _relevance?: MerklRootsOrderByRelevanceInput
  }

  export type MerklRootsWhereUniqueInput = Prisma.AtLeast<{
    chainId_root?: MerklRootsChainIdRootCompoundUniqueInput
    AND?: MerklRootsWhereInput | MerklRootsWhereInput[]
    OR?: MerklRootsWhereInput[]
    NOT?: MerklRootsWhereInput | MerklRootsWhereInput[]
    chainId?: IntFilter<"MerklRoots"> | number
    epoch?: IntFilter<"MerklRoots"> | number
    timestamp?: IntFilter<"MerklRoots"> | number
    root?: StringFilter<"MerklRoots"> | string
  }, "chainId_root">

  export type MerklRootsOrderByWithAggregationInput = {
    chainId?: SortOrder
    epoch?: SortOrder
    timestamp?: SortOrder
    root?: SortOrder
    _count?: MerklRootsCountOrderByAggregateInput
    _avg?: MerklRootsAvgOrderByAggregateInput
    _max?: MerklRootsMaxOrderByAggregateInput
    _min?: MerklRootsMinOrderByAggregateInput
    _sum?: MerklRootsSumOrderByAggregateInput
  }

  export type MerklRootsScalarWhereWithAggregatesInput = {
    AND?: MerklRootsScalarWhereWithAggregatesInput | MerklRootsScalarWhereWithAggregatesInput[]
    OR?: MerklRootsScalarWhereWithAggregatesInput[]
    NOT?: MerklRootsScalarWhereWithAggregatesInput | MerklRootsScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"MerklRoots"> | number
    epoch?: IntWithAggregatesFilter<"MerklRoots"> | number
    timestamp?: IntWithAggregatesFilter<"MerklRoots"> | number
    root?: StringWithAggregatesFilter<"MerklRoots"> | string
  }

  export type CampaignsWhereInput = {
    AND?: CampaignsWhereInput | CampaignsWhereInput[]
    OR?: CampaignsWhereInput[]
    NOT?: CampaignsWhereInput | CampaignsWhereInput[]
    chainId?: IntFilter<"Campaigns"> | number
    computeChainId?: IntFilter<"Campaigns"> | number
    index?: IntFilter<"Campaigns"> | number
    campaignId?: StringFilter<"Campaigns"> | string
    creator?: StringFilter<"Campaigns"> | string
    campaignType?: IntFilter<"Campaigns"> | number
    campaignSubType?: IntFilter<"Campaigns"> | number
    rewardToken?: StringFilter<"Campaigns"> | string
    amount?: StringFilter<"Campaigns"> | string
    startTimestamp?: IntFilter<"Campaigns"> | number
    endTimestamp?: IntFilter<"Campaigns"> | number
    mainParameter?: StringFilter<"Campaigns"> | string
    campaignParameters?: JsonFilter<"Campaigns">
  }

  export type CampaignsOrderByWithRelationInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignId?: SortOrder
    creator?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    mainParameter?: SortOrder
    campaignParameters?: SortOrder
    _relevance?: CampaignsOrderByRelevanceInput
  }

  export type CampaignsWhereUniqueInput = Prisma.AtLeast<{
    chainId_campaignId?: CampaignsChainIdCampaignIdCompoundUniqueInput
    AND?: CampaignsWhereInput | CampaignsWhereInput[]
    OR?: CampaignsWhereInput[]
    NOT?: CampaignsWhereInput | CampaignsWhereInput[]
    chainId?: IntFilter<"Campaigns"> | number
    computeChainId?: IntFilter<"Campaigns"> | number
    index?: IntFilter<"Campaigns"> | number
    campaignId?: StringFilter<"Campaigns"> | string
    creator?: StringFilter<"Campaigns"> | string
    campaignType?: IntFilter<"Campaigns"> | number
    campaignSubType?: IntFilter<"Campaigns"> | number
    rewardToken?: StringFilter<"Campaigns"> | string
    amount?: StringFilter<"Campaigns"> | string
    startTimestamp?: IntFilter<"Campaigns"> | number
    endTimestamp?: IntFilter<"Campaigns"> | number
    mainParameter?: StringFilter<"Campaigns"> | string
    campaignParameters?: JsonFilter<"Campaigns">
  }, "chainId_campaignId">

  export type CampaignsOrderByWithAggregationInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignId?: SortOrder
    creator?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    mainParameter?: SortOrder
    campaignParameters?: SortOrder
    _count?: CampaignsCountOrderByAggregateInput
    _avg?: CampaignsAvgOrderByAggregateInput
    _max?: CampaignsMaxOrderByAggregateInput
    _min?: CampaignsMinOrderByAggregateInput
    _sum?: CampaignsSumOrderByAggregateInput
  }

  export type CampaignsScalarWhereWithAggregatesInput = {
    AND?: CampaignsScalarWhereWithAggregatesInput | CampaignsScalarWhereWithAggregatesInput[]
    OR?: CampaignsScalarWhereWithAggregatesInput[]
    NOT?: CampaignsScalarWhereWithAggregatesInput | CampaignsScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"Campaigns"> | number
    computeChainId?: IntWithAggregatesFilter<"Campaigns"> | number
    index?: IntWithAggregatesFilter<"Campaigns"> | number
    campaignId?: StringWithAggregatesFilter<"Campaigns"> | string
    creator?: StringWithAggregatesFilter<"Campaigns"> | string
    campaignType?: IntWithAggregatesFilter<"Campaigns"> | number
    campaignSubType?: IntWithAggregatesFilter<"Campaigns"> | number
    rewardToken?: StringWithAggregatesFilter<"Campaigns"> | string
    amount?: StringWithAggregatesFilter<"Campaigns"> | string
    startTimestamp?: IntWithAggregatesFilter<"Campaigns"> | number
    endTimestamp?: IntWithAggregatesFilter<"Campaigns"> | number
    mainParameter?: StringWithAggregatesFilter<"Campaigns"> | string
    campaignParameters?: JsonWithAggregatesFilter<"Campaigns">
  }

  export type CampaignsToProcessWhereInput = {
    AND?: CampaignsToProcessWhereInput | CampaignsToProcessWhereInput[]
    OR?: CampaignsToProcessWhereInput[]
    NOT?: CampaignsToProcessWhereInput | CampaignsToProcessWhereInput[]
    chainId?: IntFilter<"CampaignsToProcess"> | number
    computeChainId?: IntFilter<"CampaignsToProcess"> | number
    index?: IntFilter<"CampaignsToProcess"> | number
    campaignId?: StringFilter<"CampaignsToProcess"> | string
    creator?: StringFilter<"CampaignsToProcess"> | string
    campaignType?: IntFilter<"CampaignsToProcess"> | number
    campaignSubType?: IntFilter<"CampaignsToProcess"> | number
    rewardToken?: StringFilter<"CampaignsToProcess"> | string
    amount?: StringFilter<"CampaignsToProcess"> | string
    startTimestamp?: IntFilter<"CampaignsToProcess"> | number
    endTimestamp?: IntFilter<"CampaignsToProcess"> | number
    mainParameter?: StringFilter<"CampaignsToProcess"> | string
    campaignParameters?: JsonFilter<"CampaignsToProcess">
    lastProcessedTimestamp?: IntFilter<"CampaignsToProcess"> | number
    processUntilTimestamp?: IntFilter<"CampaignsToProcess"> | number
    jobIndex?: IntFilter<"CampaignsToProcess"> | number
  }

  export type CampaignsToProcessOrderByWithRelationInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignId?: SortOrder
    creator?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    mainParameter?: SortOrder
    campaignParameters?: SortOrder
    lastProcessedTimestamp?: SortOrder
    processUntilTimestamp?: SortOrder
    jobIndex?: SortOrder
    _relevance?: CampaignsToProcessOrderByRelevanceInput
  }

  export type CampaignsToProcessWhereUniqueInput = Prisma.AtLeast<{
    chainId_jobIndex?: CampaignsToProcessChainIdJobIndexCompoundUniqueInput
    AND?: CampaignsToProcessWhereInput | CampaignsToProcessWhereInput[]
    OR?: CampaignsToProcessWhereInput[]
    NOT?: CampaignsToProcessWhereInput | CampaignsToProcessWhereInput[]
    chainId?: IntFilter<"CampaignsToProcess"> | number
    computeChainId?: IntFilter<"CampaignsToProcess"> | number
    index?: IntFilter<"CampaignsToProcess"> | number
    campaignId?: StringFilter<"CampaignsToProcess"> | string
    creator?: StringFilter<"CampaignsToProcess"> | string
    campaignType?: IntFilter<"CampaignsToProcess"> | number
    campaignSubType?: IntFilter<"CampaignsToProcess"> | number
    rewardToken?: StringFilter<"CampaignsToProcess"> | string
    amount?: StringFilter<"CampaignsToProcess"> | string
    startTimestamp?: IntFilter<"CampaignsToProcess"> | number
    endTimestamp?: IntFilter<"CampaignsToProcess"> | number
    mainParameter?: StringFilter<"CampaignsToProcess"> | string
    campaignParameters?: JsonFilter<"CampaignsToProcess">
    lastProcessedTimestamp?: IntFilter<"CampaignsToProcess"> | number
    processUntilTimestamp?: IntFilter<"CampaignsToProcess"> | number
    jobIndex?: IntFilter<"CampaignsToProcess"> | number
  }, "chainId_jobIndex">

  export type CampaignsToProcessOrderByWithAggregationInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignId?: SortOrder
    creator?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    mainParameter?: SortOrder
    campaignParameters?: SortOrder
    lastProcessedTimestamp?: SortOrder
    processUntilTimestamp?: SortOrder
    jobIndex?: SortOrder
    _count?: CampaignsToProcessCountOrderByAggregateInput
    _avg?: CampaignsToProcessAvgOrderByAggregateInput
    _max?: CampaignsToProcessMaxOrderByAggregateInput
    _min?: CampaignsToProcessMinOrderByAggregateInput
    _sum?: CampaignsToProcessSumOrderByAggregateInput
  }

  export type CampaignsToProcessScalarWhereWithAggregatesInput = {
    AND?: CampaignsToProcessScalarWhereWithAggregatesInput | CampaignsToProcessScalarWhereWithAggregatesInput[]
    OR?: CampaignsToProcessScalarWhereWithAggregatesInput[]
    NOT?: CampaignsToProcessScalarWhereWithAggregatesInput | CampaignsToProcessScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"CampaignsToProcess"> | number
    computeChainId?: IntWithAggregatesFilter<"CampaignsToProcess"> | number
    index?: IntWithAggregatesFilter<"CampaignsToProcess"> | number
    campaignId?: StringWithAggregatesFilter<"CampaignsToProcess"> | string
    creator?: StringWithAggregatesFilter<"CampaignsToProcess"> | string
    campaignType?: IntWithAggregatesFilter<"CampaignsToProcess"> | number
    campaignSubType?: IntWithAggregatesFilter<"CampaignsToProcess"> | number
    rewardToken?: StringWithAggregatesFilter<"CampaignsToProcess"> | string
    amount?: StringWithAggregatesFilter<"CampaignsToProcess"> | string
    startTimestamp?: IntWithAggregatesFilter<"CampaignsToProcess"> | number
    endTimestamp?: IntWithAggregatesFilter<"CampaignsToProcess"> | number
    mainParameter?: StringWithAggregatesFilter<"CampaignsToProcess"> | string
    campaignParameters?: JsonWithAggregatesFilter<"CampaignsToProcess">
    lastProcessedTimestamp?: IntWithAggregatesFilter<"CampaignsToProcess"> | number
    processUntilTimestamp?: IntWithAggregatesFilter<"CampaignsToProcess"> | number
    jobIndex?: IntWithAggregatesFilter<"CampaignsToProcess"> | number
  }

  export type ClaimsWhereInput = {
    AND?: ClaimsWhereInput | ClaimsWhereInput[]
    OR?: ClaimsWhereInput[]
    NOT?: ClaimsWhereInput | ClaimsWhereInput[]
    chainId?: IntFilter<"Claims"> | number
    recipient?: StringFilter<"Claims"> | string
    campaignId?: StringFilter<"Claims"> | string
    rewardToken?: StringFilter<"Claims"> | string
    reason?: StringFilter<"Claims"> | string
    root?: StringFilter<"Claims"> | string
    claimed?: StringFilter<"Claims"> | string
    timestamp?: IntFilter<"Claims"> | number
  }

  export type ClaimsOrderByWithRelationInput = {
    chainId?: SortOrder
    recipient?: SortOrder
    campaignId?: SortOrder
    rewardToken?: SortOrder
    reason?: SortOrder
    root?: SortOrder
    claimed?: SortOrder
    timestamp?: SortOrder
    _relevance?: ClaimsOrderByRelevanceInput
  }

  export type ClaimsWhereUniqueInput = Prisma.AtLeast<{
    chainId_recipient_campaignId_rewardToken_reason?: ClaimsChainIdRecipientCampaignIdRewardTokenReasonCompoundUniqueInput
    AND?: ClaimsWhereInput | ClaimsWhereInput[]
    OR?: ClaimsWhereInput[]
    NOT?: ClaimsWhereInput | ClaimsWhereInput[]
    chainId?: IntFilter<"Claims"> | number
    recipient?: StringFilter<"Claims"> | string
    campaignId?: StringFilter<"Claims"> | string
    rewardToken?: StringFilter<"Claims"> | string
    reason?: StringFilter<"Claims"> | string
    root?: StringFilter<"Claims"> | string
    claimed?: StringFilter<"Claims"> | string
    timestamp?: IntFilter<"Claims"> | number
  }, "chainId_recipient_campaignId_rewardToken_reason">

  export type ClaimsOrderByWithAggregationInput = {
    chainId?: SortOrder
    recipient?: SortOrder
    campaignId?: SortOrder
    rewardToken?: SortOrder
    reason?: SortOrder
    root?: SortOrder
    claimed?: SortOrder
    timestamp?: SortOrder
    _count?: ClaimsCountOrderByAggregateInput
    _avg?: ClaimsAvgOrderByAggregateInput
    _max?: ClaimsMaxOrderByAggregateInput
    _min?: ClaimsMinOrderByAggregateInput
    _sum?: ClaimsSumOrderByAggregateInput
  }

  export type ClaimsScalarWhereWithAggregatesInput = {
    AND?: ClaimsScalarWhereWithAggregatesInput | ClaimsScalarWhereWithAggregatesInput[]
    OR?: ClaimsScalarWhereWithAggregatesInput[]
    NOT?: ClaimsScalarWhereWithAggregatesInput | ClaimsScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"Claims"> | number
    recipient?: StringWithAggregatesFilter<"Claims"> | string
    campaignId?: StringWithAggregatesFilter<"Claims"> | string
    rewardToken?: StringWithAggregatesFilter<"Claims"> | string
    reason?: StringWithAggregatesFilter<"Claims"> | string
    root?: StringWithAggregatesFilter<"Claims"> | string
    claimed?: StringWithAggregatesFilter<"Claims"> | string
    timestamp?: IntWithAggregatesFilter<"Claims"> | number
  }

  export type ClaimsOverTimeWhereInput = {
    AND?: ClaimsOverTimeWhereInput | ClaimsOverTimeWhereInput[]
    OR?: ClaimsOverTimeWhereInput[]
    NOT?: ClaimsOverTimeWhereInput | ClaimsOverTimeWhereInput[]
    chainId?: IntFilter<"ClaimsOverTime"> | number
    recipient?: StringFilter<"ClaimsOverTime"> | string
    campaignId?: StringFilter<"ClaimsOverTime"> | string
    rewardToken?: StringFilter<"ClaimsOverTime"> | string
    reason?: StringFilter<"ClaimsOverTime"> | string
    root?: StringFilter<"ClaimsOverTime"> | string
    claimed?: StringFilter<"ClaimsOverTime"> | string
    timestamp?: IntFilter<"ClaimsOverTime"> | number
  }

  export type ClaimsOverTimeOrderByWithRelationInput = {
    chainId?: SortOrder
    recipient?: SortOrder
    campaignId?: SortOrder
    rewardToken?: SortOrder
    reason?: SortOrder
    root?: SortOrder
    claimed?: SortOrder
    timestamp?: SortOrder
    _relevance?: ClaimsOverTimeOrderByRelevanceInput
  }

  export type ClaimsOverTimeWhereUniqueInput = Prisma.AtLeast<{
    chainId_recipient_campaignId_rewardToken_reason_timestamp?: ClaimsOverTimeChainIdRecipientCampaignIdRewardTokenReasonTimestampCompoundUniqueInput
    AND?: ClaimsOverTimeWhereInput | ClaimsOverTimeWhereInput[]
    OR?: ClaimsOverTimeWhereInput[]
    NOT?: ClaimsOverTimeWhereInput | ClaimsOverTimeWhereInput[]
    chainId?: IntFilter<"ClaimsOverTime"> | number
    recipient?: StringFilter<"ClaimsOverTime"> | string
    campaignId?: StringFilter<"ClaimsOverTime"> | string
    rewardToken?: StringFilter<"ClaimsOverTime"> | string
    reason?: StringFilter<"ClaimsOverTime"> | string
    root?: StringFilter<"ClaimsOverTime"> | string
    claimed?: StringFilter<"ClaimsOverTime"> | string
    timestamp?: IntFilter<"ClaimsOverTime"> | number
  }, "chainId_recipient_campaignId_rewardToken_reason_timestamp">

  export type ClaimsOverTimeOrderByWithAggregationInput = {
    chainId?: SortOrder
    recipient?: SortOrder
    campaignId?: SortOrder
    rewardToken?: SortOrder
    reason?: SortOrder
    root?: SortOrder
    claimed?: SortOrder
    timestamp?: SortOrder
    _count?: ClaimsOverTimeCountOrderByAggregateInput
    _avg?: ClaimsOverTimeAvgOrderByAggregateInput
    _max?: ClaimsOverTimeMaxOrderByAggregateInput
    _min?: ClaimsOverTimeMinOrderByAggregateInput
    _sum?: ClaimsOverTimeSumOrderByAggregateInput
  }

  export type ClaimsOverTimeScalarWhereWithAggregatesInput = {
    AND?: ClaimsOverTimeScalarWhereWithAggregatesInput | ClaimsOverTimeScalarWhereWithAggregatesInput[]
    OR?: ClaimsOverTimeScalarWhereWithAggregatesInput[]
    NOT?: ClaimsOverTimeScalarWhereWithAggregatesInput | ClaimsOverTimeScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"ClaimsOverTime"> | number
    recipient?: StringWithAggregatesFilter<"ClaimsOverTime"> | string
    campaignId?: StringWithAggregatesFilter<"ClaimsOverTime"> | string
    rewardToken?: StringWithAggregatesFilter<"ClaimsOverTime"> | string
    reason?: StringWithAggregatesFilter<"ClaimsOverTime"> | string
    root?: StringWithAggregatesFilter<"ClaimsOverTime"> | string
    claimed?: StringWithAggregatesFilter<"ClaimsOverTime"> | string
    timestamp?: IntWithAggregatesFilter<"ClaimsOverTime"> | number
  }

  export type ALMsWhereInput = {
    AND?: ALMsWhereInput | ALMsWhereInput[]
    OR?: ALMsWhereInput[]
    NOT?: ALMsWhereInput | ALMsWhereInput[]
    chainId?: IntFilter<"ALMs"> | number
    campaignId?: StringFilter<"ALMs"> | string
    name?: StringFilter<"ALMs"> | string
    type?: StringFilter<"ALMs"> | string
    address?: StringFilter<"ALMs"> | string
    target?: StringFilter<"ALMs"> | string
    owner?: StringFilter<"ALMs"> | string
    underlyingPool?: StringFilter<"ALMs"> | string
  }

  export type ALMsOrderByWithRelationInput = {
    chainId?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    address?: SortOrder
    target?: SortOrder
    owner?: SortOrder
    underlyingPool?: SortOrder
    _relevance?: ALMsOrderByRelevanceInput
  }

  export type ALMsWhereUniqueInput = Prisma.AtLeast<{
    chainId_campaignId_address?: ALMsChainIdCampaignIdAddressCompoundUniqueInput
    AND?: ALMsWhereInput | ALMsWhereInput[]
    OR?: ALMsWhereInput[]
    NOT?: ALMsWhereInput | ALMsWhereInput[]
    chainId?: IntFilter<"ALMs"> | number
    campaignId?: StringFilter<"ALMs"> | string
    name?: StringFilter<"ALMs"> | string
    type?: StringFilter<"ALMs"> | string
    address?: StringFilter<"ALMs"> | string
    target?: StringFilter<"ALMs"> | string
    owner?: StringFilter<"ALMs"> | string
    underlyingPool?: StringFilter<"ALMs"> | string
  }, "chainId_campaignId_address">

  export type ALMsOrderByWithAggregationInput = {
    chainId?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    address?: SortOrder
    target?: SortOrder
    owner?: SortOrder
    underlyingPool?: SortOrder
    _count?: ALMsCountOrderByAggregateInput
    _avg?: ALMsAvgOrderByAggregateInput
    _max?: ALMsMaxOrderByAggregateInput
    _min?: ALMsMinOrderByAggregateInput
    _sum?: ALMsSumOrderByAggregateInput
  }

  export type ALMsScalarWhereWithAggregatesInput = {
    AND?: ALMsScalarWhereWithAggregatesInput | ALMsScalarWhereWithAggregatesInput[]
    OR?: ALMsScalarWhereWithAggregatesInput[]
    NOT?: ALMsScalarWhereWithAggregatesInput | ALMsScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"ALMs"> | number
    campaignId?: StringWithAggregatesFilter<"ALMs"> | string
    name?: StringWithAggregatesFilter<"ALMs"> | string
    type?: StringWithAggregatesFilter<"ALMs"> | string
    address?: StringWithAggregatesFilter<"ALMs"> | string
    target?: StringWithAggregatesFilter<"ALMs"> | string
    owner?: StringWithAggregatesFilter<"ALMs"> | string
    underlyingPool?: StringWithAggregatesFilter<"ALMs"> | string
  }

  export type ERC20HoldersWhereInput = {
    AND?: ERC20HoldersWhereInput | ERC20HoldersWhereInput[]
    OR?: ERC20HoldersWhereInput[]
    NOT?: ERC20HoldersWhereInput | ERC20HoldersWhereInput[]
    chainId?: IntFilter<"ERC20Holders"> | number
    token?: StringFilter<"ERC20Holders"> | string
    holders?: StringNullableListFilter<"ERC20Holders">
    blockNumber?: IntFilter<"ERC20Holders"> | number
  }

  export type ERC20HoldersOrderByWithRelationInput = {
    chainId?: SortOrder
    token?: SortOrder
    holders?: SortOrder
    blockNumber?: SortOrder
    _relevance?: ERC20HoldersOrderByRelevanceInput
  }

  export type ERC20HoldersWhereUniqueInput = Prisma.AtLeast<{
    chainId_token?: ERC20HoldersChainIdTokenCompoundUniqueInput
    AND?: ERC20HoldersWhereInput | ERC20HoldersWhereInput[]
    OR?: ERC20HoldersWhereInput[]
    NOT?: ERC20HoldersWhereInput | ERC20HoldersWhereInput[]
    chainId?: IntFilter<"ERC20Holders"> | number
    token?: StringFilter<"ERC20Holders"> | string
    holders?: StringNullableListFilter<"ERC20Holders">
    blockNumber?: IntFilter<"ERC20Holders"> | number
  }, "chainId_token">

  export type ERC20HoldersOrderByWithAggregationInput = {
    chainId?: SortOrder
    token?: SortOrder
    holders?: SortOrder
    blockNumber?: SortOrder
    _count?: ERC20HoldersCountOrderByAggregateInput
    _avg?: ERC20HoldersAvgOrderByAggregateInput
    _max?: ERC20HoldersMaxOrderByAggregateInput
    _min?: ERC20HoldersMinOrderByAggregateInput
    _sum?: ERC20HoldersSumOrderByAggregateInput
  }

  export type ERC20HoldersScalarWhereWithAggregatesInput = {
    AND?: ERC20HoldersScalarWhereWithAggregatesInput | ERC20HoldersScalarWhereWithAggregatesInput[]
    OR?: ERC20HoldersScalarWhereWithAggregatesInput[]
    NOT?: ERC20HoldersScalarWhereWithAggregatesInput | ERC20HoldersScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"ERC20Holders"> | number
    token?: StringWithAggregatesFilter<"ERC20Holders"> | string
    holders?: StringNullableListFilter<"ERC20Holders">
    blockNumber?: IntWithAggregatesFilter<"ERC20Holders"> | number
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    chainId?: IntFilter<"Tokens"> | number
    address?: StringFilter<"Tokens"> | string
    symbol?: StringFilter<"Tokens"> | string
    decimals?: IntFilter<"Tokens"> | number
  }

  export type TokensOrderByWithRelationInput = {
    chainId?: SortOrder
    address?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    _relevance?: TokensOrderByRelevanceInput
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    chainId_address?: TokensChainIdAddressCompoundUniqueInput
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    chainId?: IntFilter<"Tokens"> | number
    address?: StringFilter<"Tokens"> | string
    symbol?: StringFilter<"Tokens"> | string
    decimals?: IntFilter<"Tokens"> | number
  }, "chainId_address">

  export type TokensOrderByWithAggregationInput = {
    chainId?: SortOrder
    address?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    _count?: TokensCountOrderByAggregateInput
    _avg?: TokensAvgOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
    _sum?: TokensSumOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    chainId?: IntWithAggregatesFilter<"Tokens"> | number
    address?: StringWithAggregatesFilter<"Tokens"> | string
    symbol?: StringWithAggregatesFilter<"Tokens"> | string
    decimals?: IntWithAggregatesFilter<"Tokens"> | number
  }

  export type StateSaveWhereInput = {
    AND?: StateSaveWhereInput | StateSaveWhereInput[]
    OR?: StateSaveWhereInput[]
    NOT?: StateSaveWhereInput | StateSaveWhereInput[]
    id?: StringFilter<"StateSave"> | string
    blockNumber?: IntFilter<"StateSave"> | number
    state?: JsonFilter<"StateSave">
  }

  export type StateSaveOrderByWithRelationInput = {
    id?: SortOrder
    blockNumber?: SortOrder
    state?: SortOrder
    _relevance?: StateSaveOrderByRelevanceInput
  }

  export type StateSaveWhereUniqueInput = Prisma.AtLeast<{
    id_blockNumber?: StateSaveIdBlockNumberCompoundUniqueInput
    AND?: StateSaveWhereInput | StateSaveWhereInput[]
    OR?: StateSaveWhereInput[]
    NOT?: StateSaveWhereInput | StateSaveWhereInput[]
    id?: StringFilter<"StateSave"> | string
    blockNumber?: IntFilter<"StateSave"> | number
    state?: JsonFilter<"StateSave">
  }, "id_blockNumber">

  export type StateSaveOrderByWithAggregationInput = {
    id?: SortOrder
    blockNumber?: SortOrder
    state?: SortOrder
    _count?: StateSaveCountOrderByAggregateInput
    _avg?: StateSaveAvgOrderByAggregateInput
    _max?: StateSaveMaxOrderByAggregateInput
    _min?: StateSaveMinOrderByAggregateInput
    _sum?: StateSaveSumOrderByAggregateInput
  }

  export type StateSaveScalarWhereWithAggregatesInput = {
    AND?: StateSaveScalarWhereWithAggregatesInput | StateSaveScalarWhereWithAggregatesInput[]
    OR?: StateSaveScalarWhereWithAggregatesInput[]
    NOT?: StateSaveScalarWhereWithAggregatesInput | StateSaveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StateSave"> | string
    blockNumber?: IntWithAggregatesFilter<"StateSave"> | number
    state?: JsonWithAggregatesFilter<"StateSave">
  }

  export type NodesWhereInput = {
    AND?: NodesWhereInput | NodesWhereInput[]
    OR?: NodesWhereInput[]
    NOT?: NodesWhereInput | NodesWhereInput[]
    id?: StringFilter<"Nodes"> | string
    chainId?: IntFilter<"Nodes"> | number
    nodeType?: StringFilter<"Nodes"> | string
    recipient?: StringFilter<"Nodes"> | string
    nodesSourceId?: StringFilter<"Nodes"> | string
    creationBlockNumber?: IntFilter<"Nodes"> | number
    metadata?: JsonNullableFilter<"Nodes">
    NodesSources?: XOR<NodesSourcesScalarRelationFilter, NodesSourcesWhereInput>
  }

  export type NodesOrderByWithRelationInput = {
    id?: SortOrder
    chainId?: SortOrder
    nodeType?: SortOrder
    recipient?: SortOrder
    nodesSourceId?: SortOrder
    creationBlockNumber?: SortOrder
    metadata?: SortOrderInput | SortOrder
    NodesSources?: NodesSourcesOrderByWithRelationInput
    _relevance?: NodesOrderByRelevanceInput
  }

  export type NodesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chainId_recipient?: NodesChainIdRecipientCompoundUniqueInput
    AND?: NodesWhereInput | NodesWhereInput[]
    OR?: NodesWhereInput[]
    NOT?: NodesWhereInput | NodesWhereInput[]
    chainId?: IntFilter<"Nodes"> | number
    nodeType?: StringFilter<"Nodes"> | string
    recipient?: StringFilter<"Nodes"> | string
    nodesSourceId?: StringFilter<"Nodes"> | string
    creationBlockNumber?: IntFilter<"Nodes"> | number
    metadata?: JsonNullableFilter<"Nodes">
    NodesSources?: XOR<NodesSourcesScalarRelationFilter, NodesSourcesWhereInput>
  }, "id" | "chainId_recipient">

  export type NodesOrderByWithAggregationInput = {
    id?: SortOrder
    chainId?: SortOrder
    nodeType?: SortOrder
    recipient?: SortOrder
    nodesSourceId?: SortOrder
    creationBlockNumber?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: NodesCountOrderByAggregateInput
    _avg?: NodesAvgOrderByAggregateInput
    _max?: NodesMaxOrderByAggregateInput
    _min?: NodesMinOrderByAggregateInput
    _sum?: NodesSumOrderByAggregateInput
  }

  export type NodesScalarWhereWithAggregatesInput = {
    AND?: NodesScalarWhereWithAggregatesInput | NodesScalarWhereWithAggregatesInput[]
    OR?: NodesScalarWhereWithAggregatesInput[]
    NOT?: NodesScalarWhereWithAggregatesInput | NodesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Nodes"> | string
    chainId?: IntWithAggregatesFilter<"Nodes"> | number
    nodeType?: StringWithAggregatesFilter<"Nodes"> | string
    recipient?: StringWithAggregatesFilter<"Nodes"> | string
    nodesSourceId?: StringWithAggregatesFilter<"Nodes"> | string
    creationBlockNumber?: IntWithAggregatesFilter<"Nodes"> | number
    metadata?: JsonNullableWithAggregatesFilter<"Nodes">
  }

  export type NodesSourcesWhereInput = {
    AND?: NodesSourcesWhereInput | NodesSourcesWhereInput[]
    OR?: NodesSourcesWhereInput[]
    NOT?: NodesSourcesWhereInput | NodesSourcesWhereInput[]
    id?: StringFilter<"NodesSources"> | string
    lastFetchedBlockNumber?: IntFilter<"NodesSources"> | number
    nodeType?: StringFilter<"NodesSources"> | string
    chainId?: IntFilter<"NodesSources"> | number
    source?: StringFilter<"NodesSources"> | string
    topics?: StringNullableListFilter<"NodesSources">
    nodes?: NodesListRelationFilter
  }

  export type NodesSourcesOrderByWithRelationInput = {
    id?: SortOrder
    lastFetchedBlockNumber?: SortOrder
    nodeType?: SortOrder
    chainId?: SortOrder
    source?: SortOrder
    topics?: SortOrder
    nodes?: NodesOrderByRelationAggregateInput
    _relevance?: NodesSourcesOrderByRelevanceInput
  }

  export type NodesSourcesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chainId_source_topics?: NodesSourcesChainIdSourceTopicsCompoundUniqueInput
    AND?: NodesSourcesWhereInput | NodesSourcesWhereInput[]
    OR?: NodesSourcesWhereInput[]
    NOT?: NodesSourcesWhereInput | NodesSourcesWhereInput[]
    lastFetchedBlockNumber?: IntFilter<"NodesSources"> | number
    nodeType?: StringFilter<"NodesSources"> | string
    chainId?: IntFilter<"NodesSources"> | number
    source?: StringFilter<"NodesSources"> | string
    topics?: StringNullableListFilter<"NodesSources">
    nodes?: NodesListRelationFilter
  }, "id" | "chainId_source_topics">

  export type NodesSourcesOrderByWithAggregationInput = {
    id?: SortOrder
    lastFetchedBlockNumber?: SortOrder
    nodeType?: SortOrder
    chainId?: SortOrder
    source?: SortOrder
    topics?: SortOrder
    _count?: NodesSourcesCountOrderByAggregateInput
    _avg?: NodesSourcesAvgOrderByAggregateInput
    _max?: NodesSourcesMaxOrderByAggregateInput
    _min?: NodesSourcesMinOrderByAggregateInput
    _sum?: NodesSourcesSumOrderByAggregateInput
  }

  export type NodesSourcesScalarWhereWithAggregatesInput = {
    AND?: NodesSourcesScalarWhereWithAggregatesInput | NodesSourcesScalarWhereWithAggregatesInput[]
    OR?: NodesSourcesScalarWhereWithAggregatesInput[]
    NOT?: NodesSourcesScalarWhereWithAggregatesInput | NodesSourcesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NodesSources"> | string
    lastFetchedBlockNumber?: IntWithAggregatesFilter<"NodesSources"> | number
    nodeType?: StringWithAggregatesFilter<"NodesSources"> | string
    chainId?: IntWithAggregatesFilter<"NodesSources"> | number
    source?: StringWithAggregatesFilter<"NodesSources"> | string
    topics?: StringNullableListFilter<"NodesSources">
  }

  export type CampaignCreatorsWhereInput = {
    AND?: CampaignCreatorsWhereInput | CampaignCreatorsWhereInput[]
    OR?: CampaignCreatorsWhereInput[]
    NOT?: CampaignCreatorsWhereInput | CampaignCreatorsWhereInput[]
    address?: StringFilter<"CampaignCreators"> | string
    tags?: StringFilter<"CampaignCreators"> | string
  }

  export type CampaignCreatorsOrderByWithRelationInput = {
    address?: SortOrder
    tags?: SortOrder
    _relevance?: CampaignCreatorsOrderByRelevanceInput
  }

  export type CampaignCreatorsWhereUniqueInput = Prisma.AtLeast<{
    address?: string
    AND?: CampaignCreatorsWhereInput | CampaignCreatorsWhereInput[]
    OR?: CampaignCreatorsWhereInput[]
    NOT?: CampaignCreatorsWhereInput | CampaignCreatorsWhereInput[]
    tags?: StringFilter<"CampaignCreators"> | string
  }, "address">

  export type CampaignCreatorsOrderByWithAggregationInput = {
    address?: SortOrder
    tags?: SortOrder
    _count?: CampaignCreatorsCountOrderByAggregateInput
    _max?: CampaignCreatorsMaxOrderByAggregateInput
    _min?: CampaignCreatorsMinOrderByAggregateInput
  }

  export type CampaignCreatorsScalarWhereWithAggregatesInput = {
    AND?: CampaignCreatorsScalarWhereWithAggregatesInput | CampaignCreatorsScalarWhereWithAggregatesInput[]
    OR?: CampaignCreatorsScalarWhereWithAggregatesInput[]
    NOT?: CampaignCreatorsScalarWhereWithAggregatesInput | CampaignCreatorsScalarWhereWithAggregatesInput[]
    address?: StringWithAggregatesFilter<"CampaignCreators"> | string
    tags?: StringWithAggregatesFilter<"CampaignCreators"> | string
  }

  export type TempLeavesCreateInput = {
    chainId: number
    campaignId: string
    recipient: string
    reason: string
    rewardToken: string
    amount?: string
    lastProcessedTimestamp: number
  }

  export type TempLeavesUncheckedCreateInput = {
    chainId: number
    campaignId: string
    recipient: string
    reason: string
    rewardToken: string
    amount?: string
    lastProcessedTimestamp: number
  }

  export type TempLeavesUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
  }

  export type TempLeavesUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
  }

  export type TempLeavesCreateManyInput = {
    chainId: number
    campaignId: string
    recipient: string
    reason: string
    rewardToken: string
    amount?: string
    lastProcessedTimestamp: number
  }

  export type TempLeavesUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
  }

  export type TempLeavesUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
  }

  export type LeavesCreateInput = {
    chainId: number
    root: string
    campaignId: string
    recipient: string
    reason: string
    rewardToken: string
    amount?: string
    lastProcessedTimestamp: number
  }

  export type LeavesUncheckedCreateInput = {
    chainId: number
    root: string
    campaignId: string
    recipient: string
    reason: string
    rewardToken: string
    amount?: string
    lastProcessedTimestamp: number
  }

  export type LeavesUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
  }

  export type LeavesUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
  }

  export type LeavesCreateManyInput = {
    chainId: number
    root: string
    campaignId: string
    recipient: string
    reason: string
    rewardToken: string
    amount?: string
    lastProcessedTimestamp: number
  }

  export type LeavesUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
  }

  export type LeavesUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
  }

  export type ProofsCreateInput = {
    chainId: number
    root: string
    recipient: string
    rewardToken: string
    proof?: ProofsCreateproofInput | string[]
  }

  export type ProofsUncheckedCreateInput = {
    chainId: number
    root: string
    recipient: string
    rewardToken: string
    proof?: ProofsCreateproofInput | string[]
  }

  export type ProofsUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    proof?: ProofsUpdateproofInput | string[]
  }

  export type ProofsUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    proof?: ProofsUpdateproofInput | string[]
  }

  export type ProofsCreateManyInput = {
    chainId: number
    root: string
    recipient: string
    rewardToken: string
    proof?: ProofsCreateproofInput | string[]
  }

  export type ProofsUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    proof?: ProofsUpdateproofInput | string[]
  }

  export type ProofsUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    proof?: ProofsUpdateproofInput | string[]
  }

  export type MerklRootsCreateInput = {
    chainId: number
    epoch: number
    timestamp: number
    root: string
  }

  export type MerklRootsUncheckedCreateInput = {
    chainId: number
    epoch: number
    timestamp: number
    root: string
  }

  export type MerklRootsUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    epoch?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
  }

  export type MerklRootsUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    epoch?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
  }

  export type MerklRootsCreateManyInput = {
    chainId: number
    epoch: number
    timestamp: number
    root: string
  }

  export type MerklRootsUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    epoch?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
  }

  export type MerklRootsUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    epoch?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    root?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignsCreateInput = {
    chainId: number
    computeChainId?: number
    index: number
    campaignId: string
    creator: string
    campaignType: number
    campaignSubType: number
    rewardToken: string
    amount: string
    startTimestamp: number
    endTimestamp: number
    mainParameter: string
    campaignParameters: JsonNullValueInput | InputJsonValue
  }

  export type CampaignsUncheckedCreateInput = {
    chainId: number
    computeChainId?: number
    index: number
    campaignId: string
    creator: string
    campaignType: number
    campaignSubType: number
    rewardToken: string
    amount: string
    startTimestamp: number
    endTimestamp: number
    mainParameter: string
    campaignParameters: JsonNullValueInput | InputJsonValue
  }

  export type CampaignsUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    computeChainId?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    campaignType?: IntFieldUpdateOperationsInput | number
    campaignSubType?: IntFieldUpdateOperationsInput | number
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    startTimestamp?: IntFieldUpdateOperationsInput | number
    endTimestamp?: IntFieldUpdateOperationsInput | number
    mainParameter?: StringFieldUpdateOperationsInput | string
    campaignParameters?: JsonNullValueInput | InputJsonValue
  }

  export type CampaignsUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    computeChainId?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    campaignType?: IntFieldUpdateOperationsInput | number
    campaignSubType?: IntFieldUpdateOperationsInput | number
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    startTimestamp?: IntFieldUpdateOperationsInput | number
    endTimestamp?: IntFieldUpdateOperationsInput | number
    mainParameter?: StringFieldUpdateOperationsInput | string
    campaignParameters?: JsonNullValueInput | InputJsonValue
  }

  export type CampaignsCreateManyInput = {
    chainId: number
    computeChainId?: number
    index: number
    campaignId: string
    creator: string
    campaignType: number
    campaignSubType: number
    rewardToken: string
    amount: string
    startTimestamp: number
    endTimestamp: number
    mainParameter: string
    campaignParameters: JsonNullValueInput | InputJsonValue
  }

  export type CampaignsUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    computeChainId?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    campaignType?: IntFieldUpdateOperationsInput | number
    campaignSubType?: IntFieldUpdateOperationsInput | number
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    startTimestamp?: IntFieldUpdateOperationsInput | number
    endTimestamp?: IntFieldUpdateOperationsInput | number
    mainParameter?: StringFieldUpdateOperationsInput | string
    campaignParameters?: JsonNullValueInput | InputJsonValue
  }

  export type CampaignsUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    computeChainId?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    campaignType?: IntFieldUpdateOperationsInput | number
    campaignSubType?: IntFieldUpdateOperationsInput | number
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    startTimestamp?: IntFieldUpdateOperationsInput | number
    endTimestamp?: IntFieldUpdateOperationsInput | number
    mainParameter?: StringFieldUpdateOperationsInput | string
    campaignParameters?: JsonNullValueInput | InputJsonValue
  }

  export type CampaignsToProcessCreateInput = {
    chainId: number
    computeChainId?: number
    index: number
    campaignId: string
    creator: string
    campaignType: number
    campaignSubType: number
    rewardToken: string
    amount: string
    startTimestamp: number
    endTimestamp: number
    mainParameter: string
    campaignParameters: JsonNullValueInput | InputJsonValue
    lastProcessedTimestamp: number
    processUntilTimestamp: number
    jobIndex: number
  }

  export type CampaignsToProcessUncheckedCreateInput = {
    chainId: number
    computeChainId?: number
    index: number
    campaignId: string
    creator: string
    campaignType: number
    campaignSubType: number
    rewardToken: string
    amount: string
    startTimestamp: number
    endTimestamp: number
    mainParameter: string
    campaignParameters: JsonNullValueInput | InputJsonValue
    lastProcessedTimestamp: number
    processUntilTimestamp: number
    jobIndex: number
  }

  export type CampaignsToProcessUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    computeChainId?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    campaignType?: IntFieldUpdateOperationsInput | number
    campaignSubType?: IntFieldUpdateOperationsInput | number
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    startTimestamp?: IntFieldUpdateOperationsInput | number
    endTimestamp?: IntFieldUpdateOperationsInput | number
    mainParameter?: StringFieldUpdateOperationsInput | string
    campaignParameters?: JsonNullValueInput | InputJsonValue
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
    processUntilTimestamp?: IntFieldUpdateOperationsInput | number
    jobIndex?: IntFieldUpdateOperationsInput | number
  }

  export type CampaignsToProcessUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    computeChainId?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    campaignType?: IntFieldUpdateOperationsInput | number
    campaignSubType?: IntFieldUpdateOperationsInput | number
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    startTimestamp?: IntFieldUpdateOperationsInput | number
    endTimestamp?: IntFieldUpdateOperationsInput | number
    mainParameter?: StringFieldUpdateOperationsInput | string
    campaignParameters?: JsonNullValueInput | InputJsonValue
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
    processUntilTimestamp?: IntFieldUpdateOperationsInput | number
    jobIndex?: IntFieldUpdateOperationsInput | number
  }

  export type CampaignsToProcessCreateManyInput = {
    chainId: number
    computeChainId?: number
    index: number
    campaignId: string
    creator: string
    campaignType: number
    campaignSubType: number
    rewardToken: string
    amount: string
    startTimestamp: number
    endTimestamp: number
    mainParameter: string
    campaignParameters: JsonNullValueInput | InputJsonValue
    lastProcessedTimestamp: number
    processUntilTimestamp: number
    jobIndex: number
  }

  export type CampaignsToProcessUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    computeChainId?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    campaignType?: IntFieldUpdateOperationsInput | number
    campaignSubType?: IntFieldUpdateOperationsInput | number
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    startTimestamp?: IntFieldUpdateOperationsInput | number
    endTimestamp?: IntFieldUpdateOperationsInput | number
    mainParameter?: StringFieldUpdateOperationsInput | string
    campaignParameters?: JsonNullValueInput | InputJsonValue
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
    processUntilTimestamp?: IntFieldUpdateOperationsInput | number
    jobIndex?: IntFieldUpdateOperationsInput | number
  }

  export type CampaignsToProcessUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    computeChainId?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    campaignType?: IntFieldUpdateOperationsInput | number
    campaignSubType?: IntFieldUpdateOperationsInput | number
    rewardToken?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    startTimestamp?: IntFieldUpdateOperationsInput | number
    endTimestamp?: IntFieldUpdateOperationsInput | number
    mainParameter?: StringFieldUpdateOperationsInput | string
    campaignParameters?: JsonNullValueInput | InputJsonValue
    lastProcessedTimestamp?: IntFieldUpdateOperationsInput | number
    processUntilTimestamp?: IntFieldUpdateOperationsInput | number
    jobIndex?: IntFieldUpdateOperationsInput | number
  }

  export type ClaimsCreateInput = {
    chainId: number
    recipient: string
    campaignId: string
    rewardToken: string
    reason: string
    root: string
    claimed?: string
    timestamp: number
  }

  export type ClaimsUncheckedCreateInput = {
    chainId: number
    recipient: string
    campaignId: string
    rewardToken: string
    reason: string
    root: string
    claimed?: string
    timestamp: number
  }

  export type ClaimsUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    root?: StringFieldUpdateOperationsInput | string
    claimed?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
  }

  export type ClaimsUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    root?: StringFieldUpdateOperationsInput | string
    claimed?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
  }

  export type ClaimsCreateManyInput = {
    chainId: number
    recipient: string
    campaignId: string
    rewardToken: string
    reason: string
    root: string
    claimed?: string
    timestamp: number
  }

  export type ClaimsUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    root?: StringFieldUpdateOperationsInput | string
    claimed?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
  }

  export type ClaimsUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    root?: StringFieldUpdateOperationsInput | string
    claimed?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
  }

  export type ClaimsOverTimeCreateInput = {
    chainId: number
    recipient: string
    campaignId: string
    rewardToken: string
    reason: string
    root: string
    claimed?: string
    timestamp: number
  }

  export type ClaimsOverTimeUncheckedCreateInput = {
    chainId: number
    recipient: string
    campaignId: string
    rewardToken: string
    reason: string
    root: string
    claimed?: string
    timestamp: number
  }

  export type ClaimsOverTimeUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    root?: StringFieldUpdateOperationsInput | string
    claimed?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
  }

  export type ClaimsOverTimeUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    root?: StringFieldUpdateOperationsInput | string
    claimed?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
  }

  export type ClaimsOverTimeCreateManyInput = {
    chainId: number
    recipient: string
    campaignId: string
    rewardToken: string
    reason: string
    root: string
    claimed?: string
    timestamp: number
  }

  export type ClaimsOverTimeUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    root?: StringFieldUpdateOperationsInput | string
    claimed?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
  }

  export type ClaimsOverTimeUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    rewardToken?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    root?: StringFieldUpdateOperationsInput | string
    claimed?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
  }

  export type ALMsCreateInput = {
    chainId: number
    campaignId: string
    name: string
    type: string
    address: string
    target: string
    owner: string
    underlyingPool: string
  }

  export type ALMsUncheckedCreateInput = {
    chainId: number
    campaignId: string
    name: string
    type: string
    address: string
    target: string
    owner: string
    underlyingPool: string
  }

  export type ALMsUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    underlyingPool?: StringFieldUpdateOperationsInput | string
  }

  export type ALMsUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    underlyingPool?: StringFieldUpdateOperationsInput | string
  }

  export type ALMsCreateManyInput = {
    chainId: number
    campaignId: string
    name: string
    type: string
    address: string
    target: string
    owner: string
    underlyingPool: string
  }

  export type ALMsUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    underlyingPool?: StringFieldUpdateOperationsInput | string
  }

  export type ALMsUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    campaignId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    underlyingPool?: StringFieldUpdateOperationsInput | string
  }

  export type ERC20HoldersCreateInput = {
    chainId: number
    token: string
    holders?: ERC20HoldersCreateholdersInput | string[]
    blockNumber: number
  }

  export type ERC20HoldersUncheckedCreateInput = {
    chainId: number
    token: string
    holders?: ERC20HoldersCreateholdersInput | string[]
    blockNumber: number
  }

  export type ERC20HoldersUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    holders?: ERC20HoldersUpdateholdersInput | string[]
    blockNumber?: IntFieldUpdateOperationsInput | number
  }

  export type ERC20HoldersUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    holders?: ERC20HoldersUpdateholdersInput | string[]
    blockNumber?: IntFieldUpdateOperationsInput | number
  }

  export type ERC20HoldersCreateManyInput = {
    chainId: number
    token: string
    holders?: ERC20HoldersCreateholdersInput | string[]
    blockNumber: number
  }

  export type ERC20HoldersUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    holders?: ERC20HoldersUpdateholdersInput | string[]
    blockNumber?: IntFieldUpdateOperationsInput | number
  }

  export type ERC20HoldersUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    holders?: ERC20HoldersUpdateholdersInput | string[]
    blockNumber?: IntFieldUpdateOperationsInput | number
  }

  export type TokensCreateInput = {
    chainId: number
    address: string
    symbol: string
    decimals: number
  }

  export type TokensUncheckedCreateInput = {
    chainId: number
    address: string
    symbol: string
    decimals: number
  }

  export type TokensUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
  }

  export type TokensUncheckedUpdateInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
  }

  export type TokensCreateManyInput = {
    chainId: number
    address: string
    symbol: string
    decimals: number
  }

  export type TokensUpdateManyMutationInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
  }

  export type TokensUncheckedUpdateManyInput = {
    chainId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
  }

  export type StateSaveCreateInput = {
    id: string
    blockNumber: number
    state: JsonNullValueInput | InputJsonValue
  }

  export type StateSaveUncheckedCreateInput = {
    id: string
    blockNumber: number
    state: JsonNullValueInput | InputJsonValue
  }

  export type StateSaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockNumber?: IntFieldUpdateOperationsInput | number
    state?: JsonNullValueInput | InputJsonValue
  }

  export type StateSaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockNumber?: IntFieldUpdateOperationsInput | number
    state?: JsonNullValueInput | InputJsonValue
  }

  export type StateSaveCreateManyInput = {
    id: string
    blockNumber: number
    state: JsonNullValueInput | InputJsonValue
  }

  export type StateSaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockNumber?: IntFieldUpdateOperationsInput | number
    state?: JsonNullValueInput | InputJsonValue
  }

  export type StateSaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockNumber?: IntFieldUpdateOperationsInput | number
    state?: JsonNullValueInput | InputJsonValue
  }

  export type NodesCreateInput = {
    id: string
    chainId: number
    nodeType: string
    recipient: string
    creationBlockNumber: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    NodesSources: NodesSourcesCreateNestedOneWithoutNodesInput
  }

  export type NodesUncheckedCreateInput = {
    id: string
    chainId: number
    nodeType: string
    recipient: string
    nodesSourceId: string
    creationBlockNumber: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NodesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    creationBlockNumber?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    NodesSources?: NodesSourcesUpdateOneRequiredWithoutNodesNestedInput
  }

  export type NodesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    nodesSourceId?: StringFieldUpdateOperationsInput | string
    creationBlockNumber?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NodesCreateManyInput = {
    id: string
    chainId: number
    nodeType: string
    recipient: string
    nodesSourceId: string
    creationBlockNumber: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NodesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    creationBlockNumber?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NodesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    nodesSourceId?: StringFieldUpdateOperationsInput | string
    creationBlockNumber?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NodesSourcesCreateInput = {
    id: string
    lastFetchedBlockNumber: number
    nodeType: string
    chainId: number
    source: string
    topics?: NodesSourcesCreatetopicsInput | string[]
    nodes?: NodesCreateNestedManyWithoutNodesSourcesInput
  }

  export type NodesSourcesUncheckedCreateInput = {
    id: string
    lastFetchedBlockNumber: number
    nodeType: string
    chainId: number
    source: string
    topics?: NodesSourcesCreatetopicsInput | string[]
    nodes?: NodesUncheckedCreateNestedManyWithoutNodesSourcesInput
  }

  export type NodesSourcesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastFetchedBlockNumber?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    topics?: NodesSourcesUpdatetopicsInput | string[]
    nodes?: NodesUpdateManyWithoutNodesSourcesNestedInput
  }

  export type NodesSourcesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastFetchedBlockNumber?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    topics?: NodesSourcesUpdatetopicsInput | string[]
    nodes?: NodesUncheckedUpdateManyWithoutNodesSourcesNestedInput
  }

  export type NodesSourcesCreateManyInput = {
    id: string
    lastFetchedBlockNumber: number
    nodeType: string
    chainId: number
    source: string
    topics?: NodesSourcesCreatetopicsInput | string[]
  }

  export type NodesSourcesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastFetchedBlockNumber?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    topics?: NodesSourcesUpdatetopicsInput | string[]
  }

  export type NodesSourcesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastFetchedBlockNumber?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    topics?: NodesSourcesUpdatetopicsInput | string[]
  }

  export type CampaignCreatorsCreateInput = {
    address: string
    tags?: string
  }

  export type CampaignCreatorsUncheckedCreateInput = {
    address: string
    tags?: string
  }

  export type CampaignCreatorsUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreatorsUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreatorsCreateManyInput = {
    address: string
    tags?: string
  }

  export type CampaignCreatorsUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreatorsUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TempLeavesOrderByRelevanceInput = {
    fields: TempLeavesOrderByRelevanceFieldEnum | TempLeavesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TempLeavesChainIdCampaignIdRecipientReasonCompoundUniqueInput = {
    chainId: number
    campaignId: string
    recipient: string
    reason: string
  }

  export type TempLeavesCountOrderByAggregateInput = {
    chainId?: SortOrder
    campaignId?: SortOrder
    recipient?: SortOrder
    reason?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    lastProcessedTimestamp?: SortOrder
  }

  export type TempLeavesAvgOrderByAggregateInput = {
    chainId?: SortOrder
    lastProcessedTimestamp?: SortOrder
  }

  export type TempLeavesMaxOrderByAggregateInput = {
    chainId?: SortOrder
    campaignId?: SortOrder
    recipient?: SortOrder
    reason?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    lastProcessedTimestamp?: SortOrder
  }

  export type TempLeavesMinOrderByAggregateInput = {
    chainId?: SortOrder
    campaignId?: SortOrder
    recipient?: SortOrder
    reason?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    lastProcessedTimestamp?: SortOrder
  }

  export type TempLeavesSumOrderByAggregateInput = {
    chainId?: SortOrder
    lastProcessedTimestamp?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type LeavesOrderByRelevanceInput = {
    fields: LeavesOrderByRelevanceFieldEnum | LeavesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LeavesChainIdCampaignIdRecipientReasonRootCompoundUniqueInput = {
    chainId: number
    campaignId: string
    recipient: string
    reason: string
    root: string
  }

  export type LeavesCountOrderByAggregateInput = {
    chainId?: SortOrder
    root?: SortOrder
    campaignId?: SortOrder
    recipient?: SortOrder
    reason?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    lastProcessedTimestamp?: SortOrder
  }

  export type LeavesAvgOrderByAggregateInput = {
    chainId?: SortOrder
    lastProcessedTimestamp?: SortOrder
  }

  export type LeavesMaxOrderByAggregateInput = {
    chainId?: SortOrder
    root?: SortOrder
    campaignId?: SortOrder
    recipient?: SortOrder
    reason?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    lastProcessedTimestamp?: SortOrder
  }

  export type LeavesMinOrderByAggregateInput = {
    chainId?: SortOrder
    root?: SortOrder
    campaignId?: SortOrder
    recipient?: SortOrder
    reason?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    lastProcessedTimestamp?: SortOrder
  }

  export type LeavesSumOrderByAggregateInput = {
    chainId?: SortOrder
    lastProcessedTimestamp?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProofsOrderByRelevanceInput = {
    fields: ProofsOrderByRelevanceFieldEnum | ProofsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProofsChainIdRootRecipientRewardTokenCompoundUniqueInput = {
    chainId: number
    root: string
    recipient: string
    rewardToken: string
  }

  export type ProofsCountOrderByAggregateInput = {
    chainId?: SortOrder
    root?: SortOrder
    recipient?: SortOrder
    rewardToken?: SortOrder
    proof?: SortOrder
  }

  export type ProofsAvgOrderByAggregateInput = {
    chainId?: SortOrder
  }

  export type ProofsMaxOrderByAggregateInput = {
    chainId?: SortOrder
    root?: SortOrder
    recipient?: SortOrder
    rewardToken?: SortOrder
  }

  export type ProofsMinOrderByAggregateInput = {
    chainId?: SortOrder
    root?: SortOrder
    recipient?: SortOrder
    rewardToken?: SortOrder
  }

  export type ProofsSumOrderByAggregateInput = {
    chainId?: SortOrder
  }

  export type MerklRootsOrderByRelevanceInput = {
    fields: MerklRootsOrderByRelevanceFieldEnum | MerklRootsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MerklRootsChainIdRootCompoundUniqueInput = {
    chainId: number
    root: string
  }

  export type MerklRootsCountOrderByAggregateInput = {
    chainId?: SortOrder
    epoch?: SortOrder
    timestamp?: SortOrder
    root?: SortOrder
  }

  export type MerklRootsAvgOrderByAggregateInput = {
    chainId?: SortOrder
    epoch?: SortOrder
    timestamp?: SortOrder
  }

  export type MerklRootsMaxOrderByAggregateInput = {
    chainId?: SortOrder
    epoch?: SortOrder
    timestamp?: SortOrder
    root?: SortOrder
  }

  export type MerklRootsMinOrderByAggregateInput = {
    chainId?: SortOrder
    epoch?: SortOrder
    timestamp?: SortOrder
    root?: SortOrder
  }

  export type MerklRootsSumOrderByAggregateInput = {
    chainId?: SortOrder
    epoch?: SortOrder
    timestamp?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CampaignsOrderByRelevanceInput = {
    fields: CampaignsOrderByRelevanceFieldEnum | CampaignsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CampaignsChainIdCampaignIdCompoundUniqueInput = {
    chainId: number
    campaignId: string
  }

  export type CampaignsCountOrderByAggregateInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignId?: SortOrder
    creator?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    mainParameter?: SortOrder
    campaignParameters?: SortOrder
  }

  export type CampaignsAvgOrderByAggregateInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
  }

  export type CampaignsMaxOrderByAggregateInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignId?: SortOrder
    creator?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    mainParameter?: SortOrder
  }

  export type CampaignsMinOrderByAggregateInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignId?: SortOrder
    creator?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    mainParameter?: SortOrder
  }

  export type CampaignsSumOrderByAggregateInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CampaignsToProcessOrderByRelevanceInput = {
    fields: CampaignsToProcessOrderByRelevanceFieldEnum | CampaignsToProcessOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CampaignsToProcessChainIdJobIndexCompoundUniqueInput = {
    chainId: number
    jobIndex: number
  }

  export type CampaignsToProcessCountOrderByAggregateInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignId?: SortOrder
    creator?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    mainParameter?: SortOrder
    campaignParameters?: SortOrder
    lastProcessedTimestamp?: SortOrder
    processUntilTimestamp?: SortOrder
    jobIndex?: SortOrder
  }

  export type CampaignsToProcessAvgOrderByAggregateInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    lastProcessedTimestamp?: SortOrder
    processUntilTimestamp?: SortOrder
    jobIndex?: SortOrder
  }

  export type CampaignsToProcessMaxOrderByAggregateInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignId?: SortOrder
    creator?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    mainParameter?: SortOrder
    lastProcessedTimestamp?: SortOrder
    processUntilTimestamp?: SortOrder
    jobIndex?: SortOrder
  }

  export type CampaignsToProcessMinOrderByAggregateInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignId?: SortOrder
    creator?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    rewardToken?: SortOrder
    amount?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    mainParameter?: SortOrder
    lastProcessedTimestamp?: SortOrder
    processUntilTimestamp?: SortOrder
    jobIndex?: SortOrder
  }

  export type CampaignsToProcessSumOrderByAggregateInput = {
    chainId?: SortOrder
    computeChainId?: SortOrder
    index?: SortOrder
    campaignType?: SortOrder
    campaignSubType?: SortOrder
    startTimestamp?: SortOrder
    endTimestamp?: SortOrder
    lastProcessedTimestamp?: SortOrder
    processUntilTimestamp?: SortOrder
    jobIndex?: SortOrder
  }

  export type ClaimsOrderByRelevanceInput = {
    fields: ClaimsOrderByRelevanceFieldEnum | ClaimsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClaimsChainIdRecipientCampaignIdRewardTokenReasonCompoundUniqueInput = {
    chainId: number
    recipient: string
    campaignId: string
    rewardToken: string
    reason: string
  }

  export type ClaimsCountOrderByAggregateInput = {
    chainId?: SortOrder
    recipient?: SortOrder
    campaignId?: SortOrder
    rewardToken?: SortOrder
    reason?: SortOrder
    root?: SortOrder
    claimed?: SortOrder
    timestamp?: SortOrder
  }

  export type ClaimsAvgOrderByAggregateInput = {
    chainId?: SortOrder
    timestamp?: SortOrder
  }

  export type ClaimsMaxOrderByAggregateInput = {
    chainId?: SortOrder
    recipient?: SortOrder
    campaignId?: SortOrder
    rewardToken?: SortOrder
    reason?: SortOrder
    root?: SortOrder
    claimed?: SortOrder
    timestamp?: SortOrder
  }

  export type ClaimsMinOrderByAggregateInput = {
    chainId?: SortOrder
    recipient?: SortOrder
    campaignId?: SortOrder
    rewardToken?: SortOrder
    reason?: SortOrder
    root?: SortOrder
    claimed?: SortOrder
    timestamp?: SortOrder
  }

  export type ClaimsSumOrderByAggregateInput = {
    chainId?: SortOrder
    timestamp?: SortOrder
  }

  export type ClaimsOverTimeOrderByRelevanceInput = {
    fields: ClaimsOverTimeOrderByRelevanceFieldEnum | ClaimsOverTimeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClaimsOverTimeChainIdRecipientCampaignIdRewardTokenReasonTimestampCompoundUniqueInput = {
    chainId: number
    recipient: string
    campaignId: string
    rewardToken: string
    reason: string
    timestamp: number
  }

  export type ClaimsOverTimeCountOrderByAggregateInput = {
    chainId?: SortOrder
    recipient?: SortOrder
    campaignId?: SortOrder
    rewardToken?: SortOrder
    reason?: SortOrder
    root?: SortOrder
    claimed?: SortOrder
    timestamp?: SortOrder
  }

  export type ClaimsOverTimeAvgOrderByAggregateInput = {
    chainId?: SortOrder
    timestamp?: SortOrder
  }

  export type ClaimsOverTimeMaxOrderByAggregateInput = {
    chainId?: SortOrder
    recipient?: SortOrder
    campaignId?: SortOrder
    rewardToken?: SortOrder
    reason?: SortOrder
    root?: SortOrder
    claimed?: SortOrder
    timestamp?: SortOrder
  }

  export type ClaimsOverTimeMinOrderByAggregateInput = {
    chainId?: SortOrder
    recipient?: SortOrder
    campaignId?: SortOrder
    rewardToken?: SortOrder
    reason?: SortOrder
    root?: SortOrder
    claimed?: SortOrder
    timestamp?: SortOrder
  }

  export type ClaimsOverTimeSumOrderByAggregateInput = {
    chainId?: SortOrder
    timestamp?: SortOrder
  }

  export type ALMsOrderByRelevanceInput = {
    fields: ALMsOrderByRelevanceFieldEnum | ALMsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ALMsChainIdCampaignIdAddressCompoundUniqueInput = {
    chainId: number
    campaignId: string
    address: string
  }

  export type ALMsCountOrderByAggregateInput = {
    chainId?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    address?: SortOrder
    target?: SortOrder
    owner?: SortOrder
    underlyingPool?: SortOrder
  }

  export type ALMsAvgOrderByAggregateInput = {
    chainId?: SortOrder
  }

  export type ALMsMaxOrderByAggregateInput = {
    chainId?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    address?: SortOrder
    target?: SortOrder
    owner?: SortOrder
    underlyingPool?: SortOrder
  }

  export type ALMsMinOrderByAggregateInput = {
    chainId?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    address?: SortOrder
    target?: SortOrder
    owner?: SortOrder
    underlyingPool?: SortOrder
  }

  export type ALMsSumOrderByAggregateInput = {
    chainId?: SortOrder
  }

  export type ERC20HoldersOrderByRelevanceInput = {
    fields: ERC20HoldersOrderByRelevanceFieldEnum | ERC20HoldersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ERC20HoldersChainIdTokenCompoundUniqueInput = {
    chainId: number
    token: string
  }

  export type ERC20HoldersCountOrderByAggregateInput = {
    chainId?: SortOrder
    token?: SortOrder
    holders?: SortOrder
    blockNumber?: SortOrder
  }

  export type ERC20HoldersAvgOrderByAggregateInput = {
    chainId?: SortOrder
    blockNumber?: SortOrder
  }

  export type ERC20HoldersMaxOrderByAggregateInput = {
    chainId?: SortOrder
    token?: SortOrder
    blockNumber?: SortOrder
  }

  export type ERC20HoldersMinOrderByAggregateInput = {
    chainId?: SortOrder
    token?: SortOrder
    blockNumber?: SortOrder
  }

  export type ERC20HoldersSumOrderByAggregateInput = {
    chainId?: SortOrder
    blockNumber?: SortOrder
  }

  export type TokensOrderByRelevanceInput = {
    fields: TokensOrderByRelevanceFieldEnum | TokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TokensChainIdAddressCompoundUniqueInput = {
    chainId: number
    address: string
  }

  export type TokensCountOrderByAggregateInput = {
    chainId?: SortOrder
    address?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
  }

  export type TokensAvgOrderByAggregateInput = {
    chainId?: SortOrder
    decimals?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    chainId?: SortOrder
    address?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    chainId?: SortOrder
    address?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
  }

  export type TokensSumOrderByAggregateInput = {
    chainId?: SortOrder
    decimals?: SortOrder
  }

  export type StateSaveOrderByRelevanceInput = {
    fields: StateSaveOrderByRelevanceFieldEnum | StateSaveOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StateSaveIdBlockNumberCompoundUniqueInput = {
    id: string
    blockNumber: number
  }

  export type StateSaveCountOrderByAggregateInput = {
    id?: SortOrder
    blockNumber?: SortOrder
    state?: SortOrder
  }

  export type StateSaveAvgOrderByAggregateInput = {
    blockNumber?: SortOrder
  }

  export type StateSaveMaxOrderByAggregateInput = {
    id?: SortOrder
    blockNumber?: SortOrder
  }

  export type StateSaveMinOrderByAggregateInput = {
    id?: SortOrder
    blockNumber?: SortOrder
  }

  export type StateSaveSumOrderByAggregateInput = {
    blockNumber?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NodesSourcesScalarRelationFilter = {
    is?: NodesSourcesWhereInput
    isNot?: NodesSourcesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NodesOrderByRelevanceInput = {
    fields: NodesOrderByRelevanceFieldEnum | NodesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NodesChainIdRecipientCompoundUniqueInput = {
    chainId: number
    recipient: string
  }

  export type NodesCountOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    nodeType?: SortOrder
    recipient?: SortOrder
    nodesSourceId?: SortOrder
    creationBlockNumber?: SortOrder
    metadata?: SortOrder
  }

  export type NodesAvgOrderByAggregateInput = {
    chainId?: SortOrder
    creationBlockNumber?: SortOrder
  }

  export type NodesMaxOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    nodeType?: SortOrder
    recipient?: SortOrder
    nodesSourceId?: SortOrder
    creationBlockNumber?: SortOrder
  }

  export type NodesMinOrderByAggregateInput = {
    id?: SortOrder
    chainId?: SortOrder
    nodeType?: SortOrder
    recipient?: SortOrder
    nodesSourceId?: SortOrder
    creationBlockNumber?: SortOrder
  }

  export type NodesSumOrderByAggregateInput = {
    chainId?: SortOrder
    creationBlockNumber?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type NodesListRelationFilter = {
    every?: NodesWhereInput
    some?: NodesWhereInput
    none?: NodesWhereInput
  }

  export type NodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NodesSourcesOrderByRelevanceInput = {
    fields: NodesSourcesOrderByRelevanceFieldEnum | NodesSourcesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NodesSourcesChainIdSourceTopicsCompoundUniqueInput = {
    chainId: number
    source: string
    topics: string[]
  }

  export type NodesSourcesCountOrderByAggregateInput = {
    id?: SortOrder
    lastFetchedBlockNumber?: SortOrder
    nodeType?: SortOrder
    chainId?: SortOrder
    source?: SortOrder
    topics?: SortOrder
  }

  export type NodesSourcesAvgOrderByAggregateInput = {
    lastFetchedBlockNumber?: SortOrder
    chainId?: SortOrder
  }

  export type NodesSourcesMaxOrderByAggregateInput = {
    id?: SortOrder
    lastFetchedBlockNumber?: SortOrder
    nodeType?: SortOrder
    chainId?: SortOrder
    source?: SortOrder
  }

  export type NodesSourcesMinOrderByAggregateInput = {
    id?: SortOrder
    lastFetchedBlockNumber?: SortOrder
    nodeType?: SortOrder
    chainId?: SortOrder
    source?: SortOrder
  }

  export type NodesSourcesSumOrderByAggregateInput = {
    lastFetchedBlockNumber?: SortOrder
    chainId?: SortOrder
  }

  export type CampaignCreatorsOrderByRelevanceInput = {
    fields: CampaignCreatorsOrderByRelevanceFieldEnum | CampaignCreatorsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CampaignCreatorsCountOrderByAggregateInput = {
    address?: SortOrder
    tags?: SortOrder
  }

  export type CampaignCreatorsMaxOrderByAggregateInput = {
    address?: SortOrder
    tags?: SortOrder
  }

  export type CampaignCreatorsMinOrderByAggregateInput = {
    address?: SortOrder
    tags?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProofsCreateproofInput = {
    set: string[]
  }

  export type ProofsUpdateproofInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ERC20HoldersCreateholdersInput = {
    set: string[]
  }

  export type ERC20HoldersUpdateholdersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NodesSourcesCreateNestedOneWithoutNodesInput = {
    create?: XOR<NodesSourcesCreateWithoutNodesInput, NodesSourcesUncheckedCreateWithoutNodesInput>
    connectOrCreate?: NodesSourcesCreateOrConnectWithoutNodesInput
    connect?: NodesSourcesWhereUniqueInput
  }

  export type NodesSourcesUpdateOneRequiredWithoutNodesNestedInput = {
    create?: XOR<NodesSourcesCreateWithoutNodesInput, NodesSourcesUncheckedCreateWithoutNodesInput>
    connectOrCreate?: NodesSourcesCreateOrConnectWithoutNodesInput
    upsert?: NodesSourcesUpsertWithoutNodesInput
    connect?: NodesSourcesWhereUniqueInput
    update?: XOR<XOR<NodesSourcesUpdateToOneWithWhereWithoutNodesInput, NodesSourcesUpdateWithoutNodesInput>, NodesSourcesUncheckedUpdateWithoutNodesInput>
  }

  export type NodesSourcesCreatetopicsInput = {
    set: string[]
  }

  export type NodesCreateNestedManyWithoutNodesSourcesInput = {
    create?: XOR<NodesCreateWithoutNodesSourcesInput, NodesUncheckedCreateWithoutNodesSourcesInput> | NodesCreateWithoutNodesSourcesInput[] | NodesUncheckedCreateWithoutNodesSourcesInput[]
    connectOrCreate?: NodesCreateOrConnectWithoutNodesSourcesInput | NodesCreateOrConnectWithoutNodesSourcesInput[]
    createMany?: NodesCreateManyNodesSourcesInputEnvelope
    connect?: NodesWhereUniqueInput | NodesWhereUniqueInput[]
  }

  export type NodesUncheckedCreateNestedManyWithoutNodesSourcesInput = {
    create?: XOR<NodesCreateWithoutNodesSourcesInput, NodesUncheckedCreateWithoutNodesSourcesInput> | NodesCreateWithoutNodesSourcesInput[] | NodesUncheckedCreateWithoutNodesSourcesInput[]
    connectOrCreate?: NodesCreateOrConnectWithoutNodesSourcesInput | NodesCreateOrConnectWithoutNodesSourcesInput[]
    createMany?: NodesCreateManyNodesSourcesInputEnvelope
    connect?: NodesWhereUniqueInput | NodesWhereUniqueInput[]
  }

  export type NodesSourcesUpdatetopicsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NodesUpdateManyWithoutNodesSourcesNestedInput = {
    create?: XOR<NodesCreateWithoutNodesSourcesInput, NodesUncheckedCreateWithoutNodesSourcesInput> | NodesCreateWithoutNodesSourcesInput[] | NodesUncheckedCreateWithoutNodesSourcesInput[]
    connectOrCreate?: NodesCreateOrConnectWithoutNodesSourcesInput | NodesCreateOrConnectWithoutNodesSourcesInput[]
    upsert?: NodesUpsertWithWhereUniqueWithoutNodesSourcesInput | NodesUpsertWithWhereUniqueWithoutNodesSourcesInput[]
    createMany?: NodesCreateManyNodesSourcesInputEnvelope
    set?: NodesWhereUniqueInput | NodesWhereUniqueInput[]
    disconnect?: NodesWhereUniqueInput | NodesWhereUniqueInput[]
    delete?: NodesWhereUniqueInput | NodesWhereUniqueInput[]
    connect?: NodesWhereUniqueInput | NodesWhereUniqueInput[]
    update?: NodesUpdateWithWhereUniqueWithoutNodesSourcesInput | NodesUpdateWithWhereUniqueWithoutNodesSourcesInput[]
    updateMany?: NodesUpdateManyWithWhereWithoutNodesSourcesInput | NodesUpdateManyWithWhereWithoutNodesSourcesInput[]
    deleteMany?: NodesScalarWhereInput | NodesScalarWhereInput[]
  }

  export type NodesUncheckedUpdateManyWithoutNodesSourcesNestedInput = {
    create?: XOR<NodesCreateWithoutNodesSourcesInput, NodesUncheckedCreateWithoutNodesSourcesInput> | NodesCreateWithoutNodesSourcesInput[] | NodesUncheckedCreateWithoutNodesSourcesInput[]
    connectOrCreate?: NodesCreateOrConnectWithoutNodesSourcesInput | NodesCreateOrConnectWithoutNodesSourcesInput[]
    upsert?: NodesUpsertWithWhereUniqueWithoutNodesSourcesInput | NodesUpsertWithWhereUniqueWithoutNodesSourcesInput[]
    createMany?: NodesCreateManyNodesSourcesInputEnvelope
    set?: NodesWhereUniqueInput | NodesWhereUniqueInput[]
    disconnect?: NodesWhereUniqueInput | NodesWhereUniqueInput[]
    delete?: NodesWhereUniqueInput | NodesWhereUniqueInput[]
    connect?: NodesWhereUniqueInput | NodesWhereUniqueInput[]
    update?: NodesUpdateWithWhereUniqueWithoutNodesSourcesInput | NodesUpdateWithWhereUniqueWithoutNodesSourcesInput[]
    updateMany?: NodesUpdateManyWithWhereWithoutNodesSourcesInput | NodesUpdateManyWithWhereWithoutNodesSourcesInput[]
    deleteMany?: NodesScalarWhereInput | NodesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NodesSourcesCreateWithoutNodesInput = {
    id: string
    lastFetchedBlockNumber: number
    nodeType: string
    chainId: number
    source: string
    topics?: NodesSourcesCreatetopicsInput | string[]
  }

  export type NodesSourcesUncheckedCreateWithoutNodesInput = {
    id: string
    lastFetchedBlockNumber: number
    nodeType: string
    chainId: number
    source: string
    topics?: NodesSourcesCreatetopicsInput | string[]
  }

  export type NodesSourcesCreateOrConnectWithoutNodesInput = {
    where: NodesSourcesWhereUniqueInput
    create: XOR<NodesSourcesCreateWithoutNodesInput, NodesSourcesUncheckedCreateWithoutNodesInput>
  }

  export type NodesSourcesUpsertWithoutNodesInput = {
    update: XOR<NodesSourcesUpdateWithoutNodesInput, NodesSourcesUncheckedUpdateWithoutNodesInput>
    create: XOR<NodesSourcesCreateWithoutNodesInput, NodesSourcesUncheckedCreateWithoutNodesInput>
    where?: NodesSourcesWhereInput
  }

  export type NodesSourcesUpdateToOneWithWhereWithoutNodesInput = {
    where?: NodesSourcesWhereInput
    data: XOR<NodesSourcesUpdateWithoutNodesInput, NodesSourcesUncheckedUpdateWithoutNodesInput>
  }

  export type NodesSourcesUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastFetchedBlockNumber?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    topics?: NodesSourcesUpdatetopicsInput | string[]
  }

  export type NodesSourcesUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastFetchedBlockNumber?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    topics?: NodesSourcesUpdatetopicsInput | string[]
  }

  export type NodesCreateWithoutNodesSourcesInput = {
    id: string
    chainId: number
    nodeType: string
    recipient: string
    creationBlockNumber: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NodesUncheckedCreateWithoutNodesSourcesInput = {
    id: string
    chainId: number
    nodeType: string
    recipient: string
    creationBlockNumber: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NodesCreateOrConnectWithoutNodesSourcesInput = {
    where: NodesWhereUniqueInput
    create: XOR<NodesCreateWithoutNodesSourcesInput, NodesUncheckedCreateWithoutNodesSourcesInput>
  }

  export type NodesCreateManyNodesSourcesInputEnvelope = {
    data: NodesCreateManyNodesSourcesInput | NodesCreateManyNodesSourcesInput[]
    skipDuplicates?: boolean
  }

  export type NodesUpsertWithWhereUniqueWithoutNodesSourcesInput = {
    where: NodesWhereUniqueInput
    update: XOR<NodesUpdateWithoutNodesSourcesInput, NodesUncheckedUpdateWithoutNodesSourcesInput>
    create: XOR<NodesCreateWithoutNodesSourcesInput, NodesUncheckedCreateWithoutNodesSourcesInput>
  }

  export type NodesUpdateWithWhereUniqueWithoutNodesSourcesInput = {
    where: NodesWhereUniqueInput
    data: XOR<NodesUpdateWithoutNodesSourcesInput, NodesUncheckedUpdateWithoutNodesSourcesInput>
  }

  export type NodesUpdateManyWithWhereWithoutNodesSourcesInput = {
    where: NodesScalarWhereInput
    data: XOR<NodesUpdateManyMutationInput, NodesUncheckedUpdateManyWithoutNodesSourcesInput>
  }

  export type NodesScalarWhereInput = {
    AND?: NodesScalarWhereInput | NodesScalarWhereInput[]
    OR?: NodesScalarWhereInput[]
    NOT?: NodesScalarWhereInput | NodesScalarWhereInput[]
    id?: StringFilter<"Nodes"> | string
    chainId?: IntFilter<"Nodes"> | number
    nodeType?: StringFilter<"Nodes"> | string
    recipient?: StringFilter<"Nodes"> | string
    nodesSourceId?: StringFilter<"Nodes"> | string
    creationBlockNumber?: IntFilter<"Nodes"> | number
    metadata?: JsonNullableFilter<"Nodes">
  }

  export type NodesCreateManyNodesSourcesInput = {
    id: string
    chainId: number
    nodeType: string
    recipient: string
    creationBlockNumber: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NodesUpdateWithoutNodesSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    creationBlockNumber?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NodesUncheckedUpdateWithoutNodesSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    creationBlockNumber?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NodesUncheckedUpdateManyWithoutNodesSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    nodeType?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    creationBlockNumber?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}