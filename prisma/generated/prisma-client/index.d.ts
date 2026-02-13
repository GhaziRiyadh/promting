
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PromptType
 * 
 */
export type PromptType = $Result.DefaultSelection<Prisma.$PromptTypePayload>
/**
 * Model PromptField
 * 
 */
export type PromptField = $Result.DefaultSelection<Prisma.$PromptFieldPayload>
/**
 * Model Prompt
 * 
 */
export type Prompt = $Result.DefaultSelection<Prisma.$PromptPayload>
/**
 * Model GlobalKeyword
 * 
 */
export type GlobalKeyword = $Result.DefaultSelection<Prisma.$GlobalKeywordPayload>
/**
 * Model AIModel
 * 
 */
export type AIModel = $Result.DefaultSelection<Prisma.$AIModelPayload>
/**
 * Model AILog
 * 
 */
export type AILog = $Result.DefaultSelection<Prisma.$AILogPayload>
/**
 * Model LandingContent
 * 
 */
export type LandingContent = $Result.DefaultSelection<Prisma.$LandingContentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promptType`: Exposes CRUD operations for the **PromptType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptTypes
    * const promptTypes = await prisma.promptType.findMany()
    * ```
    */
  get promptType(): Prisma.PromptTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promptField`: Exposes CRUD operations for the **PromptField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptFields
    * const promptFields = await prisma.promptField.findMany()
    * ```
    */
  get promptField(): Prisma.PromptFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prompt`: Exposes CRUD operations for the **Prompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompt.findMany()
    * ```
    */
  get prompt(): Prisma.PromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalKeyword`: Exposes CRUD operations for the **GlobalKeyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalKeywords
    * const globalKeywords = await prisma.globalKeyword.findMany()
    * ```
    */
  get globalKeyword(): Prisma.GlobalKeywordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIModel`: Exposes CRUD operations for the **AIModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIModels
    * const aIModels = await prisma.aIModel.findMany()
    * ```
    */
  get aIModel(): Prisma.AIModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aILog`: Exposes CRUD operations for the **AILog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AILogs
    * const aILogs = await prisma.aILog.findMany()
    * ```
    */
  get aILog(): Prisma.AILogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.landingContent`: Exposes CRUD operations for the **LandingContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LandingContents
    * const landingContents = await prisma.landingContent.findMany()
    * ```
    */
  get landingContent(): Prisma.LandingContentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    PromptType: 'PromptType',
    PromptField: 'PromptField',
    Prompt: 'Prompt',
    GlobalKeyword: 'GlobalKeyword',
    AIModel: 'AIModel',
    AILog: 'AILog',
    LandingContent: 'LandingContent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "promptType" | "promptField" | "prompt" | "globalKeyword" | "aIModel" | "aILog" | "landingContent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PromptType: {
        payload: Prisma.$PromptTypePayload<ExtArgs>
        fields: Prisma.PromptTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload>
          }
          findFirst: {
            args: Prisma.PromptTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload>
          }
          findMany: {
            args: Prisma.PromptTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload>[]
          }
          create: {
            args: Prisma.PromptTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload>
          }
          createMany: {
            args: Prisma.PromptTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload>[]
          }
          delete: {
            args: Prisma.PromptTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload>
          }
          update: {
            args: Prisma.PromptTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload>
          }
          deleteMany: {
            args: Prisma.PromptTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload>[]
          }
          upsert: {
            args: Prisma.PromptTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTypePayload>
          }
          aggregate: {
            args: Prisma.PromptTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptType>
          }
          groupBy: {
            args: Prisma.PromptTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptTypeCountArgs<ExtArgs>
            result: $Utils.Optional<PromptTypeCountAggregateOutputType> | number
          }
        }
      }
      PromptField: {
        payload: Prisma.$PromptFieldPayload<ExtArgs>
        fields: Prisma.PromptFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload>
          }
          findFirst: {
            args: Prisma.PromptFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload>
          }
          findMany: {
            args: Prisma.PromptFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload>[]
          }
          create: {
            args: Prisma.PromptFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload>
          }
          createMany: {
            args: Prisma.PromptFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload>[]
          }
          delete: {
            args: Prisma.PromptFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload>
          }
          update: {
            args: Prisma.PromptFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload>
          }
          deleteMany: {
            args: Prisma.PromptFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload>[]
          }
          upsert: {
            args: Prisma.PromptFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptFieldPayload>
          }
          aggregate: {
            args: Prisma.PromptFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptField>
          }
          groupBy: {
            args: Prisma.PromptFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptFieldCountArgs<ExtArgs>
            result: $Utils.Optional<PromptFieldCountAggregateOutputType> | number
          }
        }
      }
      Prompt: {
        payload: Prisma.$PromptPayload<ExtArgs>
        fields: Prisma.PromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findFirst: {
            args: Prisma.PromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findMany: {
            args: Prisma.PromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          create: {
            args: Prisma.PromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          createMany: {
            args: Prisma.PromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          delete: {
            args: Prisma.PromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          update: {
            args: Prisma.PromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          deleteMany: {
            args: Prisma.PromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          upsert: {
            args: Prisma.PromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          aggregate: {
            args: Prisma.PromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrompt>
          }
          groupBy: {
            args: Prisma.PromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptCountArgs<ExtArgs>
            result: $Utils.Optional<PromptCountAggregateOutputType> | number
          }
        }
      }
      GlobalKeyword: {
        payload: Prisma.$GlobalKeywordPayload<ExtArgs>
        fields: Prisma.GlobalKeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalKeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalKeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload>
          }
          findFirst: {
            args: Prisma.GlobalKeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalKeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload>
          }
          findMany: {
            args: Prisma.GlobalKeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload>[]
          }
          create: {
            args: Prisma.GlobalKeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload>
          }
          createMany: {
            args: Prisma.GlobalKeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalKeywordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload>[]
          }
          delete: {
            args: Prisma.GlobalKeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload>
          }
          update: {
            args: Prisma.GlobalKeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload>
          }
          deleteMany: {
            args: Prisma.GlobalKeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalKeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalKeywordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload>[]
          }
          upsert: {
            args: Prisma.GlobalKeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalKeywordPayload>
          }
          aggregate: {
            args: Prisma.GlobalKeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalKeyword>
          }
          groupBy: {
            args: Prisma.GlobalKeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalKeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalKeywordCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalKeywordCountAggregateOutputType> | number
          }
        }
      }
      AIModel: {
        payload: Prisma.$AIModelPayload<ExtArgs>
        fields: Prisma.AIModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          findFirst: {
            args: Prisma.AIModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          findMany: {
            args: Prisma.AIModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>[]
          }
          create: {
            args: Prisma.AIModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          createMany: {
            args: Prisma.AIModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>[]
          }
          delete: {
            args: Prisma.AIModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          update: {
            args: Prisma.AIModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          deleteMany: {
            args: Prisma.AIModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>[]
          }
          upsert: {
            args: Prisma.AIModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          aggregate: {
            args: Prisma.AIModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIModel>
          }
          groupBy: {
            args: Prisma.AIModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIModelCountArgs<ExtArgs>
            result: $Utils.Optional<AIModelCountAggregateOutputType> | number
          }
        }
      }
      AILog: {
        payload: Prisma.$AILogPayload<ExtArgs>
        fields: Prisma.AILogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AILogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AILogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload>
          }
          findFirst: {
            args: Prisma.AILogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AILogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload>
          }
          findMany: {
            args: Prisma.AILogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload>[]
          }
          create: {
            args: Prisma.AILogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload>
          }
          createMany: {
            args: Prisma.AILogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AILogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload>[]
          }
          delete: {
            args: Prisma.AILogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload>
          }
          update: {
            args: Prisma.AILogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload>
          }
          deleteMany: {
            args: Prisma.AILogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AILogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AILogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload>[]
          }
          upsert: {
            args: Prisma.AILogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AILogPayload>
          }
          aggregate: {
            args: Prisma.AILogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAILog>
          }
          groupBy: {
            args: Prisma.AILogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AILogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AILogCountArgs<ExtArgs>
            result: $Utils.Optional<AILogCountAggregateOutputType> | number
          }
        }
      }
      LandingContent: {
        payload: Prisma.$LandingContentPayload<ExtArgs>
        fields: Prisma.LandingContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandingContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandingContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          findFirst: {
            args: Prisma.LandingContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandingContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          findMany: {
            args: Prisma.LandingContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>[]
          }
          create: {
            args: Prisma.LandingContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          createMany: {
            args: Prisma.LandingContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandingContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>[]
          }
          delete: {
            args: Prisma.LandingContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          update: {
            args: Prisma.LandingContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          deleteMany: {
            args: Prisma.LandingContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandingContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandingContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>[]
          }
          upsert: {
            args: Prisma.LandingContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          aggregate: {
            args: Prisma.LandingContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandingContent>
          }
          groupBy: {
            args: Prisma.LandingContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandingContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandingContentCountArgs<ExtArgs>
            result: $Utils.Optional<LandingContentCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    promptType?: PromptTypeOmit
    promptField?: PromptFieldOmit
    prompt?: PromptOmit
    globalKeyword?: GlobalKeywordOmit
    aIModel?: AIModelOmit
    aILog?: AILogOmit
    landingContent?: LandingContentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    prompts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | UserCountOutputTypeCountPromptsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
  }


  /**
   * Count Type PromptTypeCountOutputType
   */

  export type PromptTypeCountOutputType = {
    fields: number
    prompts: number
  }

  export type PromptTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | PromptTypeCountOutputTypeCountFieldsArgs
    prompts?: boolean | PromptTypeCountOutputTypeCountPromptsArgs
  }

  // Custom InputTypes
  /**
   * PromptTypeCountOutputType without action
   */
  export type PromptTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTypeCountOutputType
     */
    select?: PromptTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromptTypeCountOutputType without action
   */
  export type PromptTypeCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptFieldWhereInput
  }

  /**
   * PromptTypeCountOutputType without action
   */
  export type PromptTypeCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    preferredLanguage: string | null
    preferredTheme: string | null
    role: $Enums.UserRole | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    preferredLanguage: string | null
    preferredTheme: string | null
    role: $Enums.UserRole | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    preferredLanguage: number
    preferredTheme: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    preferredLanguage?: true
    preferredTheme?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    preferredLanguage?: true
    preferredTheme?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    preferredLanguage?: true
    preferredTheme?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    preferredLanguage: string | null
    preferredTheme: string | null
    role: $Enums.UserRole
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    preferredLanguage?: boolean
    preferredTheme?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompts?: boolean | User$promptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    preferredLanguage?: boolean
    preferredTheme?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    preferredLanguage?: boolean
    preferredTheme?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    preferredLanguage?: boolean
    preferredTheme?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "preferredLanguage" | "preferredTheme" | "role" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | User$promptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      prompts: Prisma.$PromptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      preferredLanguage: string | null
      preferredTheme: string | null
      role: $Enums.UserRole
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompts<T extends User$promptsArgs<ExtArgs> = {}>(args?: Subset<T, User$promptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly preferredLanguage: FieldRef<"User", 'String'>
    readonly preferredTheme: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.prompts
   */
  export type User$promptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    cursor?: PromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PromptType
   */

  export type AggregatePromptType = {
    _count: PromptTypeCountAggregateOutputType | null
    _min: PromptTypeMinAggregateOutputType | null
    _max: PromptTypeMaxAggregateOutputType | null
  }

  export type PromptTypeMinAggregateOutputType = {
    id: string | null
    key: string | null
    rolePrompt: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptTypeMaxAggregateOutputType = {
    id: string | null
    key: string | null
    rolePrompt: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptTypeCountAggregateOutputType = {
    id: number
    key: number
    name_i18n: number
    description_i18n: number
    rolePrompt: number
    isActive: number
    suggestedKeywords: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptTypeMinAggregateInputType = {
    id?: true
    key?: true
    rolePrompt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptTypeMaxAggregateInputType = {
    id?: true
    key?: true
    rolePrompt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptTypeCountAggregateInputType = {
    id?: true
    key?: true
    name_i18n?: true
    description_i18n?: true
    rolePrompt?: true
    isActive?: true
    suggestedKeywords?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptType to aggregate.
     */
    where?: PromptTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTypes to fetch.
     */
    orderBy?: PromptTypeOrderByWithRelationInput | PromptTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptTypes
    **/
    _count?: true | PromptTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptTypeMaxAggregateInputType
  }

  export type GetPromptTypeAggregateType<T extends PromptTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptType[P]>
      : GetScalarType<T[P], AggregatePromptType[P]>
  }




  export type PromptTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptTypeWhereInput
    orderBy?: PromptTypeOrderByWithAggregationInput | PromptTypeOrderByWithAggregationInput[]
    by: PromptTypeScalarFieldEnum[] | PromptTypeScalarFieldEnum
    having?: PromptTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptTypeCountAggregateInputType | true
    _min?: PromptTypeMinAggregateInputType
    _max?: PromptTypeMaxAggregateInputType
  }

  export type PromptTypeGroupByOutputType = {
    id: string
    key: string
    name_i18n: JsonValue
    description_i18n: JsonValue | null
    rolePrompt: string
    isActive: boolean
    suggestedKeywords: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PromptTypeCountAggregateOutputType | null
    _min: PromptTypeMinAggregateOutputType | null
    _max: PromptTypeMaxAggregateOutputType | null
  }

  type GetPromptTypeGroupByPayload<T extends PromptTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PromptTypeGroupByOutputType[P]>
        }
      >
    >


  export type PromptTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name_i18n?: boolean
    description_i18n?: boolean
    rolePrompt?: boolean
    isActive?: boolean
    suggestedKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fields?: boolean | PromptType$fieldsArgs<ExtArgs>
    prompts?: boolean | PromptType$promptsArgs<ExtArgs>
    _count?: boolean | PromptTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptType"]>

  export type PromptTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name_i18n?: boolean
    description_i18n?: boolean
    rolePrompt?: boolean
    isActive?: boolean
    suggestedKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promptType"]>

  export type PromptTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name_i18n?: boolean
    description_i18n?: boolean
    rolePrompt?: boolean
    isActive?: boolean
    suggestedKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promptType"]>

  export type PromptTypeSelectScalar = {
    id?: boolean
    key?: boolean
    name_i18n?: boolean
    description_i18n?: boolean
    rolePrompt?: boolean
    isActive?: boolean
    suggestedKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name_i18n" | "description_i18n" | "rolePrompt" | "isActive" | "suggestedKeywords" | "createdAt" | "updatedAt", ExtArgs["result"]["promptType"]>
  export type PromptTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | PromptType$fieldsArgs<ExtArgs>
    prompts?: boolean | PromptType$promptsArgs<ExtArgs>
    _count?: boolean | PromptTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromptTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromptTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromptTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptType"
    objects: {
      fields: Prisma.$PromptFieldPayload<ExtArgs>[]
      prompts: Prisma.$PromptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name_i18n: Prisma.JsonValue
      description_i18n: Prisma.JsonValue | null
      rolePrompt: string
      isActive: boolean
      suggestedKeywords: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promptType"]>
    composites: {}
  }

  type PromptTypeGetPayload<S extends boolean | null | undefined | PromptTypeDefaultArgs> = $Result.GetResult<Prisma.$PromptTypePayload, S>

  type PromptTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptTypeCountAggregateInputType | true
    }

  export interface PromptTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptType'], meta: { name: 'PromptType' } }
    /**
     * Find zero or one PromptType that matches the filter.
     * @param {PromptTypeFindUniqueArgs} args - Arguments to find a PromptType
     * @example
     * // Get one PromptType
     * const promptType = await prisma.promptType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptTypeFindUniqueArgs>(args: SelectSubset<T, PromptTypeFindUniqueArgs<ExtArgs>>): Prisma__PromptTypeClient<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromptType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptTypeFindUniqueOrThrowArgs} args - Arguments to find a PromptType
     * @example
     * // Get one PromptType
     * const promptType = await prisma.promptType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptTypeClient<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTypeFindFirstArgs} args - Arguments to find a PromptType
     * @example
     * // Get one PromptType
     * const promptType = await prisma.promptType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptTypeFindFirstArgs>(args?: SelectSubset<T, PromptTypeFindFirstArgs<ExtArgs>>): Prisma__PromptTypeClient<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTypeFindFirstOrThrowArgs} args - Arguments to find a PromptType
     * @example
     * // Get one PromptType
     * const promptType = await prisma.promptType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptTypeClient<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromptTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptTypes
     * const promptTypes = await prisma.promptType.findMany()
     * 
     * // Get first 10 PromptTypes
     * const promptTypes = await prisma.promptType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptTypeWithIdOnly = await prisma.promptType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptTypeFindManyArgs>(args?: SelectSubset<T, PromptTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromptType.
     * @param {PromptTypeCreateArgs} args - Arguments to create a PromptType.
     * @example
     * // Create one PromptType
     * const PromptType = await prisma.promptType.create({
     *   data: {
     *     // ... data to create a PromptType
     *   }
     * })
     * 
     */
    create<T extends PromptTypeCreateArgs>(args: SelectSubset<T, PromptTypeCreateArgs<ExtArgs>>): Prisma__PromptTypeClient<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromptTypes.
     * @param {PromptTypeCreateManyArgs} args - Arguments to create many PromptTypes.
     * @example
     * // Create many PromptTypes
     * const promptType = await prisma.promptType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptTypeCreateManyArgs>(args?: SelectSubset<T, PromptTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptTypes and returns the data saved in the database.
     * @param {PromptTypeCreateManyAndReturnArgs} args - Arguments to create many PromptTypes.
     * @example
     * // Create many PromptTypes
     * const promptType = await prisma.promptType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptTypes and only return the `id`
     * const promptTypeWithIdOnly = await prisma.promptType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromptType.
     * @param {PromptTypeDeleteArgs} args - Arguments to delete one PromptType.
     * @example
     * // Delete one PromptType
     * const PromptType = await prisma.promptType.delete({
     *   where: {
     *     // ... filter to delete one PromptType
     *   }
     * })
     * 
     */
    delete<T extends PromptTypeDeleteArgs>(args: SelectSubset<T, PromptTypeDeleteArgs<ExtArgs>>): Prisma__PromptTypeClient<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromptType.
     * @param {PromptTypeUpdateArgs} args - Arguments to update one PromptType.
     * @example
     * // Update one PromptType
     * const promptType = await prisma.promptType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptTypeUpdateArgs>(args: SelectSubset<T, PromptTypeUpdateArgs<ExtArgs>>): Prisma__PromptTypeClient<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromptTypes.
     * @param {PromptTypeDeleteManyArgs} args - Arguments to filter PromptTypes to delete.
     * @example
     * // Delete a few PromptTypes
     * const { count } = await prisma.promptType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptTypeDeleteManyArgs>(args?: SelectSubset<T, PromptTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptTypes
     * const promptType = await prisma.promptType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptTypeUpdateManyArgs>(args: SelectSubset<T, PromptTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptTypes and returns the data updated in the database.
     * @param {PromptTypeUpdateManyAndReturnArgs} args - Arguments to update many PromptTypes.
     * @example
     * // Update many PromptTypes
     * const promptType = await prisma.promptType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromptTypes and only return the `id`
     * const promptTypeWithIdOnly = await prisma.promptType.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromptTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromptType.
     * @param {PromptTypeUpsertArgs} args - Arguments to update or create a PromptType.
     * @example
     * // Update or create a PromptType
     * const promptType = await prisma.promptType.upsert({
     *   create: {
     *     // ... data to create a PromptType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptType we want to update
     *   }
     * })
     */
    upsert<T extends PromptTypeUpsertArgs>(args: SelectSubset<T, PromptTypeUpsertArgs<ExtArgs>>): Prisma__PromptTypeClient<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromptTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTypeCountArgs} args - Arguments to filter PromptTypes to count.
     * @example
     * // Count the number of PromptTypes
     * const count = await prisma.promptType.count({
     *   where: {
     *     // ... the filter for the PromptTypes we want to count
     *   }
     * })
    **/
    count<T extends PromptTypeCountArgs>(
      args?: Subset<T, PromptTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptTypeAggregateArgs>(args: Subset<T, PromptTypeAggregateArgs>): Prisma.PrismaPromise<GetPromptTypeAggregateType<T>>

    /**
     * Group by PromptType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTypeGroupByArgs} args - Group by arguments.
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
      T extends PromptTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptTypeGroupByArgs['orderBy'] }
        : { orderBy?: PromptTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptType model
   */
  readonly fields: PromptTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fields<T extends PromptType$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, PromptType$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prompts<T extends PromptType$promptsArgs<ExtArgs> = {}>(args?: Subset<T, PromptType$promptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PromptType model
   */
  interface PromptTypeFieldRefs {
    readonly id: FieldRef<"PromptType", 'String'>
    readonly key: FieldRef<"PromptType", 'String'>
    readonly name_i18n: FieldRef<"PromptType", 'Json'>
    readonly description_i18n: FieldRef<"PromptType", 'Json'>
    readonly rolePrompt: FieldRef<"PromptType", 'String'>
    readonly isActive: FieldRef<"PromptType", 'Boolean'>
    readonly suggestedKeywords: FieldRef<"PromptType", 'Json'>
    readonly createdAt: FieldRef<"PromptType", 'DateTime'>
    readonly updatedAt: FieldRef<"PromptType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromptType findUnique
   */
  export type PromptTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTypeInclude<ExtArgs> | null
    /**
     * Filter, which PromptType to fetch.
     */
    where: PromptTypeWhereUniqueInput
  }

  /**
   * PromptType findUniqueOrThrow
   */
  export type PromptTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTypeInclude<ExtArgs> | null
    /**
     * Filter, which PromptType to fetch.
     */
    where: PromptTypeWhereUniqueInput
  }

  /**
   * PromptType findFirst
   */
  export type PromptTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTypeInclude<ExtArgs> | null
    /**
     * Filter, which PromptType to fetch.
     */
    where?: PromptTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTypes to fetch.
     */
    orderBy?: PromptTypeOrderByWithRelationInput | PromptTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTypes.
     */
    cursor?: PromptTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTypes.
     */
    distinct?: PromptTypeScalarFieldEnum | PromptTypeScalarFieldEnum[]
  }

  /**
   * PromptType findFirstOrThrow
   */
  export type PromptTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTypeInclude<ExtArgs> | null
    /**
     * Filter, which PromptType to fetch.
     */
    where?: PromptTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTypes to fetch.
     */
    orderBy?: PromptTypeOrderByWithRelationInput | PromptTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTypes.
     */
    cursor?: PromptTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTypes.
     */
    distinct?: PromptTypeScalarFieldEnum | PromptTypeScalarFieldEnum[]
  }

  /**
   * PromptType findMany
   */
  export type PromptTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTypeInclude<ExtArgs> | null
    /**
     * Filter, which PromptTypes to fetch.
     */
    where?: PromptTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTypes to fetch.
     */
    orderBy?: PromptTypeOrderByWithRelationInput | PromptTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptTypes.
     */
    cursor?: PromptTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTypes.
     */
    skip?: number
    distinct?: PromptTypeScalarFieldEnum | PromptTypeScalarFieldEnum[]
  }

  /**
   * PromptType create
   */
  export type PromptTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a PromptType.
     */
    data: XOR<PromptTypeCreateInput, PromptTypeUncheckedCreateInput>
  }

  /**
   * PromptType createMany
   */
  export type PromptTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptTypes.
     */
    data: PromptTypeCreateManyInput | PromptTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptType createManyAndReturn
   */
  export type PromptTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * The data used to create many PromptTypes.
     */
    data: PromptTypeCreateManyInput | PromptTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptType update
   */
  export type PromptTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a PromptType.
     */
    data: XOR<PromptTypeUpdateInput, PromptTypeUncheckedUpdateInput>
    /**
     * Choose, which PromptType to update.
     */
    where: PromptTypeWhereUniqueInput
  }

  /**
   * PromptType updateMany
   */
  export type PromptTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptTypes.
     */
    data: XOR<PromptTypeUpdateManyMutationInput, PromptTypeUncheckedUpdateManyInput>
    /**
     * Filter which PromptTypes to update
     */
    where?: PromptTypeWhereInput
    /**
     * Limit how many PromptTypes to update.
     */
    limit?: number
  }

  /**
   * PromptType updateManyAndReturn
   */
  export type PromptTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * The data used to update PromptTypes.
     */
    data: XOR<PromptTypeUpdateManyMutationInput, PromptTypeUncheckedUpdateManyInput>
    /**
     * Filter which PromptTypes to update
     */
    where?: PromptTypeWhereInput
    /**
     * Limit how many PromptTypes to update.
     */
    limit?: number
  }

  /**
   * PromptType upsert
   */
  export type PromptTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the PromptType to update in case it exists.
     */
    where: PromptTypeWhereUniqueInput
    /**
     * In case the PromptType found by the `where` argument doesn't exist, create a new PromptType with this data.
     */
    create: XOR<PromptTypeCreateInput, PromptTypeUncheckedCreateInput>
    /**
     * In case the PromptType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptTypeUpdateInput, PromptTypeUncheckedUpdateInput>
  }

  /**
   * PromptType delete
   */
  export type PromptTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTypeInclude<ExtArgs> | null
    /**
     * Filter which PromptType to delete.
     */
    where: PromptTypeWhereUniqueInput
  }

  /**
   * PromptType deleteMany
   */
  export type PromptTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTypes to delete
     */
    where?: PromptTypeWhereInput
    /**
     * Limit how many PromptTypes to delete.
     */
    limit?: number
  }

  /**
   * PromptType.fields
   */
  export type PromptType$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
    where?: PromptFieldWhereInput
    orderBy?: PromptFieldOrderByWithRelationInput | PromptFieldOrderByWithRelationInput[]
    cursor?: PromptFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptFieldScalarFieldEnum | PromptFieldScalarFieldEnum[]
  }

  /**
   * PromptType.prompts
   */
  export type PromptType$promptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    cursor?: PromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * PromptType without action
   */
  export type PromptTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptType
     */
    select?: PromptTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptType
     */
    omit?: PromptTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTypeInclude<ExtArgs> | null
  }


  /**
   * Model PromptField
   */

  export type AggregatePromptField = {
    _count: PromptFieldCountAggregateOutputType | null
    _avg: PromptFieldAvgAggregateOutputType | null
    _sum: PromptFieldSumAggregateOutputType | null
    _min: PromptFieldMinAggregateOutputType | null
    _max: PromptFieldMaxAggregateOutputType | null
  }

  export type PromptFieldAvgAggregateOutputType = {
    order: number | null
  }

  export type PromptFieldSumAggregateOutputType = {
    order: number | null
  }

  export type PromptFieldMinAggregateOutputType = {
    id: string | null
    promptTypeId: string | null
    key: string | null
    type: string | null
    required: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptFieldMaxAggregateOutputType = {
    id: string | null
    promptTypeId: string | null
    key: string | null
    type: string | null
    required: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptFieldCountAggregateOutputType = {
    id: number
    promptTypeId: number
    key: number
    type: number
    label_i18n: number
    placeholder_i18n: number
    required: number
    order: number
    options: number
    rules: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptFieldAvgAggregateInputType = {
    order?: true
  }

  export type PromptFieldSumAggregateInputType = {
    order?: true
  }

  export type PromptFieldMinAggregateInputType = {
    id?: true
    promptTypeId?: true
    key?: true
    type?: true
    required?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptFieldMaxAggregateInputType = {
    id?: true
    promptTypeId?: true
    key?: true
    type?: true
    required?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptFieldCountAggregateInputType = {
    id?: true
    promptTypeId?: true
    key?: true
    type?: true
    label_i18n?: true
    placeholder_i18n?: true
    required?: true
    order?: true
    options?: true
    rules?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptField to aggregate.
     */
    where?: PromptFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptFields to fetch.
     */
    orderBy?: PromptFieldOrderByWithRelationInput | PromptFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptFields
    **/
    _count?: true | PromptFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptFieldMaxAggregateInputType
  }

  export type GetPromptFieldAggregateType<T extends PromptFieldAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptField[P]>
      : GetScalarType<T[P], AggregatePromptField[P]>
  }




  export type PromptFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptFieldWhereInput
    orderBy?: PromptFieldOrderByWithAggregationInput | PromptFieldOrderByWithAggregationInput[]
    by: PromptFieldScalarFieldEnum[] | PromptFieldScalarFieldEnum
    having?: PromptFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptFieldCountAggregateInputType | true
    _avg?: PromptFieldAvgAggregateInputType
    _sum?: PromptFieldSumAggregateInputType
    _min?: PromptFieldMinAggregateInputType
    _max?: PromptFieldMaxAggregateInputType
  }

  export type PromptFieldGroupByOutputType = {
    id: string
    promptTypeId: string
    key: string
    type: string
    label_i18n: JsonValue
    placeholder_i18n: JsonValue | null
    required: boolean
    order: number
    options: JsonValue | null
    rules: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PromptFieldCountAggregateOutputType | null
    _avg: PromptFieldAvgAggregateOutputType | null
    _sum: PromptFieldSumAggregateOutputType | null
    _min: PromptFieldMinAggregateOutputType | null
    _max: PromptFieldMaxAggregateOutputType | null
  }

  type GetPromptFieldGroupByPayload<T extends PromptFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptFieldGroupByOutputType[P]>
            : GetScalarType<T[P], PromptFieldGroupByOutputType[P]>
        }
      >
    >


  export type PromptFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promptTypeId?: boolean
    key?: boolean
    type?: boolean
    label_i18n?: boolean
    placeholder_i18n?: boolean
    required?: boolean
    order?: boolean
    options?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptField"]>

  export type PromptFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promptTypeId?: boolean
    key?: boolean
    type?: boolean
    label_i18n?: boolean
    placeholder_i18n?: boolean
    required?: boolean
    order?: boolean
    options?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptField"]>

  export type PromptFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promptTypeId?: boolean
    key?: boolean
    type?: boolean
    label_i18n?: boolean
    placeholder_i18n?: boolean
    required?: boolean
    order?: boolean
    options?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptField"]>

  export type PromptFieldSelectScalar = {
    id?: boolean
    promptTypeId?: boolean
    key?: boolean
    type?: boolean
    label_i18n?: boolean
    placeholder_i18n?: boolean
    required?: boolean
    order?: boolean
    options?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "promptTypeId" | "key" | "type" | "label_i18n" | "placeholder_i18n" | "required" | "order" | "options" | "rules" | "createdAt" | "updatedAt", ExtArgs["result"]["promptField"]>
  export type PromptFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }
  export type PromptFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }
  export type PromptFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }

  export type $PromptFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptField"
    objects: {
      promptType: Prisma.$PromptTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      promptTypeId: string
      key: string
      type: string
      label_i18n: Prisma.JsonValue
      placeholder_i18n: Prisma.JsonValue | null
      required: boolean
      order: number
      options: Prisma.JsonValue | null
      rules: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promptField"]>
    composites: {}
  }

  type PromptFieldGetPayload<S extends boolean | null | undefined | PromptFieldDefaultArgs> = $Result.GetResult<Prisma.$PromptFieldPayload, S>

  type PromptFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptFieldCountAggregateInputType | true
    }

  export interface PromptFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptField'], meta: { name: 'PromptField' } }
    /**
     * Find zero or one PromptField that matches the filter.
     * @param {PromptFieldFindUniqueArgs} args - Arguments to find a PromptField
     * @example
     * // Get one PromptField
     * const promptField = await prisma.promptField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptFieldFindUniqueArgs>(args: SelectSubset<T, PromptFieldFindUniqueArgs<ExtArgs>>): Prisma__PromptFieldClient<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromptField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptFieldFindUniqueOrThrowArgs} args - Arguments to find a PromptField
     * @example
     * // Get one PromptField
     * const promptField = await prisma.promptField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptFieldClient<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFieldFindFirstArgs} args - Arguments to find a PromptField
     * @example
     * // Get one PromptField
     * const promptField = await prisma.promptField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptFieldFindFirstArgs>(args?: SelectSubset<T, PromptFieldFindFirstArgs<ExtArgs>>): Prisma__PromptFieldClient<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFieldFindFirstOrThrowArgs} args - Arguments to find a PromptField
     * @example
     * // Get one PromptField
     * const promptField = await prisma.promptField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptFieldClient<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromptFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptFields
     * const promptFields = await prisma.promptField.findMany()
     * 
     * // Get first 10 PromptFields
     * const promptFields = await prisma.promptField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptFieldWithIdOnly = await prisma.promptField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptFieldFindManyArgs>(args?: SelectSubset<T, PromptFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromptField.
     * @param {PromptFieldCreateArgs} args - Arguments to create a PromptField.
     * @example
     * // Create one PromptField
     * const PromptField = await prisma.promptField.create({
     *   data: {
     *     // ... data to create a PromptField
     *   }
     * })
     * 
     */
    create<T extends PromptFieldCreateArgs>(args: SelectSubset<T, PromptFieldCreateArgs<ExtArgs>>): Prisma__PromptFieldClient<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromptFields.
     * @param {PromptFieldCreateManyArgs} args - Arguments to create many PromptFields.
     * @example
     * // Create many PromptFields
     * const promptField = await prisma.promptField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptFieldCreateManyArgs>(args?: SelectSubset<T, PromptFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptFields and returns the data saved in the database.
     * @param {PromptFieldCreateManyAndReturnArgs} args - Arguments to create many PromptFields.
     * @example
     * // Create many PromptFields
     * const promptField = await prisma.promptField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptFields and only return the `id`
     * const promptFieldWithIdOnly = await prisma.promptField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromptField.
     * @param {PromptFieldDeleteArgs} args - Arguments to delete one PromptField.
     * @example
     * // Delete one PromptField
     * const PromptField = await prisma.promptField.delete({
     *   where: {
     *     // ... filter to delete one PromptField
     *   }
     * })
     * 
     */
    delete<T extends PromptFieldDeleteArgs>(args: SelectSubset<T, PromptFieldDeleteArgs<ExtArgs>>): Prisma__PromptFieldClient<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromptField.
     * @param {PromptFieldUpdateArgs} args - Arguments to update one PromptField.
     * @example
     * // Update one PromptField
     * const promptField = await prisma.promptField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptFieldUpdateArgs>(args: SelectSubset<T, PromptFieldUpdateArgs<ExtArgs>>): Prisma__PromptFieldClient<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromptFields.
     * @param {PromptFieldDeleteManyArgs} args - Arguments to filter PromptFields to delete.
     * @example
     * // Delete a few PromptFields
     * const { count } = await prisma.promptField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptFieldDeleteManyArgs>(args?: SelectSubset<T, PromptFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptFields
     * const promptField = await prisma.promptField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptFieldUpdateManyArgs>(args: SelectSubset<T, PromptFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptFields and returns the data updated in the database.
     * @param {PromptFieldUpdateManyAndReturnArgs} args - Arguments to update many PromptFields.
     * @example
     * // Update many PromptFields
     * const promptField = await prisma.promptField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromptFields and only return the `id`
     * const promptFieldWithIdOnly = await prisma.promptField.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromptFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromptField.
     * @param {PromptFieldUpsertArgs} args - Arguments to update or create a PromptField.
     * @example
     * // Update or create a PromptField
     * const promptField = await prisma.promptField.upsert({
     *   create: {
     *     // ... data to create a PromptField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptField we want to update
     *   }
     * })
     */
    upsert<T extends PromptFieldUpsertArgs>(args: SelectSubset<T, PromptFieldUpsertArgs<ExtArgs>>): Prisma__PromptFieldClient<$Result.GetResult<Prisma.$PromptFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromptFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFieldCountArgs} args - Arguments to filter PromptFields to count.
     * @example
     * // Count the number of PromptFields
     * const count = await prisma.promptField.count({
     *   where: {
     *     // ... the filter for the PromptFields we want to count
     *   }
     * })
    **/
    count<T extends PromptFieldCountArgs>(
      args?: Subset<T, PromptFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptFieldAggregateArgs>(args: Subset<T, PromptFieldAggregateArgs>): Prisma.PrismaPromise<GetPromptFieldAggregateType<T>>

    /**
     * Group by PromptField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFieldGroupByArgs} args - Group by arguments.
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
      T extends PromptFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptFieldGroupByArgs['orderBy'] }
        : { orderBy?: PromptFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptField model
   */
  readonly fields: PromptFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promptType<T extends PromptTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptTypeDefaultArgs<ExtArgs>>): Prisma__PromptTypeClient<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PromptField model
   */
  interface PromptFieldFieldRefs {
    readonly id: FieldRef<"PromptField", 'String'>
    readonly promptTypeId: FieldRef<"PromptField", 'String'>
    readonly key: FieldRef<"PromptField", 'String'>
    readonly type: FieldRef<"PromptField", 'String'>
    readonly label_i18n: FieldRef<"PromptField", 'Json'>
    readonly placeholder_i18n: FieldRef<"PromptField", 'Json'>
    readonly required: FieldRef<"PromptField", 'Boolean'>
    readonly order: FieldRef<"PromptField", 'Int'>
    readonly options: FieldRef<"PromptField", 'Json'>
    readonly rules: FieldRef<"PromptField", 'Json'>
    readonly createdAt: FieldRef<"PromptField", 'DateTime'>
    readonly updatedAt: FieldRef<"PromptField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromptField findUnique
   */
  export type PromptFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
    /**
     * Filter, which PromptField to fetch.
     */
    where: PromptFieldWhereUniqueInput
  }

  /**
   * PromptField findUniqueOrThrow
   */
  export type PromptFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
    /**
     * Filter, which PromptField to fetch.
     */
    where: PromptFieldWhereUniqueInput
  }

  /**
   * PromptField findFirst
   */
  export type PromptFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
    /**
     * Filter, which PromptField to fetch.
     */
    where?: PromptFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptFields to fetch.
     */
    orderBy?: PromptFieldOrderByWithRelationInput | PromptFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptFields.
     */
    cursor?: PromptFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptFields.
     */
    distinct?: PromptFieldScalarFieldEnum | PromptFieldScalarFieldEnum[]
  }

  /**
   * PromptField findFirstOrThrow
   */
  export type PromptFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
    /**
     * Filter, which PromptField to fetch.
     */
    where?: PromptFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptFields to fetch.
     */
    orderBy?: PromptFieldOrderByWithRelationInput | PromptFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptFields.
     */
    cursor?: PromptFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptFields.
     */
    distinct?: PromptFieldScalarFieldEnum | PromptFieldScalarFieldEnum[]
  }

  /**
   * PromptField findMany
   */
  export type PromptFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
    /**
     * Filter, which PromptFields to fetch.
     */
    where?: PromptFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptFields to fetch.
     */
    orderBy?: PromptFieldOrderByWithRelationInput | PromptFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptFields.
     */
    cursor?: PromptFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptFields.
     */
    skip?: number
    distinct?: PromptFieldScalarFieldEnum | PromptFieldScalarFieldEnum[]
  }

  /**
   * PromptField create
   */
  export type PromptFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a PromptField.
     */
    data: XOR<PromptFieldCreateInput, PromptFieldUncheckedCreateInput>
  }

  /**
   * PromptField createMany
   */
  export type PromptFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptFields.
     */
    data: PromptFieldCreateManyInput | PromptFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptField createManyAndReturn
   */
  export type PromptFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * The data used to create many PromptFields.
     */
    data: PromptFieldCreateManyInput | PromptFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptField update
   */
  export type PromptFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a PromptField.
     */
    data: XOR<PromptFieldUpdateInput, PromptFieldUncheckedUpdateInput>
    /**
     * Choose, which PromptField to update.
     */
    where: PromptFieldWhereUniqueInput
  }

  /**
   * PromptField updateMany
   */
  export type PromptFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptFields.
     */
    data: XOR<PromptFieldUpdateManyMutationInput, PromptFieldUncheckedUpdateManyInput>
    /**
     * Filter which PromptFields to update
     */
    where?: PromptFieldWhereInput
    /**
     * Limit how many PromptFields to update.
     */
    limit?: number
  }

  /**
   * PromptField updateManyAndReturn
   */
  export type PromptFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * The data used to update PromptFields.
     */
    data: XOR<PromptFieldUpdateManyMutationInput, PromptFieldUncheckedUpdateManyInput>
    /**
     * Filter which PromptFields to update
     */
    where?: PromptFieldWhereInput
    /**
     * Limit how many PromptFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptField upsert
   */
  export type PromptFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the PromptField to update in case it exists.
     */
    where: PromptFieldWhereUniqueInput
    /**
     * In case the PromptField found by the `where` argument doesn't exist, create a new PromptField with this data.
     */
    create: XOR<PromptFieldCreateInput, PromptFieldUncheckedCreateInput>
    /**
     * In case the PromptField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptFieldUpdateInput, PromptFieldUncheckedUpdateInput>
  }

  /**
   * PromptField delete
   */
  export type PromptFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
    /**
     * Filter which PromptField to delete.
     */
    where: PromptFieldWhereUniqueInput
  }

  /**
   * PromptField deleteMany
   */
  export type PromptFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptFields to delete
     */
    where?: PromptFieldWhereInput
    /**
     * Limit how many PromptFields to delete.
     */
    limit?: number
  }

  /**
   * PromptField without action
   */
  export type PromptFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptField
     */
    select?: PromptFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptField
     */
    omit?: PromptFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptFieldInclude<ExtArgs> | null
  }


  /**
   * Model Prompt
   */

  export type AggregatePrompt = {
    _count: PromptCountAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  export type PromptMinAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    promptTypeId: string | null
    finalPrompt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptMaxAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    promptTypeId: string | null
    finalPrompt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptCountAggregateOutputType = {
    id: number
    title: number
    userId: number
    promptTypeId: number
    inputs: number
    finalPrompt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptMinAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    promptTypeId?: true
    finalPrompt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptMaxAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    promptTypeId?: true
    finalPrompt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptCountAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    promptTypeId?: true
    inputs?: true
    finalPrompt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompt to aggregate.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptMaxAggregateInputType
  }

  export type GetPromptAggregateType<T extends PromptAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompt[P]>
      : GetScalarType<T[P], AggregatePrompt[P]>
  }




  export type PromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithAggregationInput | PromptOrderByWithAggregationInput[]
    by: PromptScalarFieldEnum[] | PromptScalarFieldEnum
    having?: PromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptCountAggregateInputType | true
    _min?: PromptMinAggregateInputType
    _max?: PromptMaxAggregateInputType
  }

  export type PromptGroupByOutputType = {
    id: string
    title: string
    userId: string
    promptTypeId: string
    inputs: JsonValue
    finalPrompt: string
    createdAt: Date
    updatedAt: Date
    _count: PromptCountAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  type GetPromptGroupByPayload<T extends PromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptGroupByOutputType[P]>
            : GetScalarType<T[P], PromptGroupByOutputType[P]>
        }
      >
    >


  export type PromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    promptTypeId?: boolean
    inputs?: boolean
    finalPrompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    promptTypeId?: boolean
    inputs?: boolean
    finalPrompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    promptTypeId?: boolean
    inputs?: boolean
    finalPrompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectScalar = {
    id?: boolean
    title?: boolean
    userId?: boolean
    promptTypeId?: boolean
    inputs?: boolean
    finalPrompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "userId" | "promptTypeId" | "inputs" | "finalPrompt" | "createdAt" | "updatedAt", ExtArgs["result"]["prompt"]>
  export type PromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }
  export type PromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }
  export type PromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    promptType?: boolean | PromptTypeDefaultArgs<ExtArgs>
  }

  export type $PromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      promptType: Prisma.$PromptTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      userId: string
      promptTypeId: string
      inputs: Prisma.JsonValue
      finalPrompt: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prompt"]>
    composites: {}
  }

  type PromptGetPayload<S extends boolean | null | undefined | PromptDefaultArgs> = $Result.GetResult<Prisma.$PromptPayload, S>

  type PromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptCountAggregateInputType | true
    }

  export interface PromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompt'], meta: { name: 'Prompt' } }
    /**
     * Find zero or one Prompt that matches the filter.
     * @param {PromptFindUniqueArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptFindUniqueArgs>(args: SelectSubset<T, PromptFindUniqueArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptFindUniqueOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptFindFirstArgs>(args?: SelectSubset<T, PromptFindFirstArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompt.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptWithIdOnly = await prisma.prompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptFindManyArgs>(args?: SelectSubset<T, PromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prompt.
     * @param {PromptCreateArgs} args - Arguments to create a Prompt.
     * @example
     * // Create one Prompt
     * const Prompt = await prisma.prompt.create({
     *   data: {
     *     // ... data to create a Prompt
     *   }
     * })
     * 
     */
    create<T extends PromptCreateArgs>(args: SelectSubset<T, PromptCreateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prompts.
     * @param {PromptCreateManyArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptCreateManyArgs>(args?: SelectSubset<T, PromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prompts and returns the data saved in the database.
     * @param {PromptCreateManyAndReturnArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prompt.
     * @param {PromptDeleteArgs} args - Arguments to delete one Prompt.
     * @example
     * // Delete one Prompt
     * const Prompt = await prisma.prompt.delete({
     *   where: {
     *     // ... filter to delete one Prompt
     *   }
     * })
     * 
     */
    delete<T extends PromptDeleteArgs>(args: SelectSubset<T, PromptDeleteArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prompt.
     * @param {PromptUpdateArgs} args - Arguments to update one Prompt.
     * @example
     * // Update one Prompt
     * const prompt = await prisma.prompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptUpdateArgs>(args: SelectSubset<T, PromptUpdateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prompts.
     * @param {PromptDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptDeleteManyArgs>(args?: SelectSubset<T, PromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptUpdateManyArgs>(args: SelectSubset<T, PromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts and returns the data updated in the database.
     * @param {PromptUpdateManyAndReturnArgs} args - Arguments to update many Prompts.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromptUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prompt.
     * @param {PromptUpsertArgs} args - Arguments to update or create a Prompt.
     * @example
     * // Update or create a Prompt
     * const prompt = await prisma.prompt.upsert({
     *   create: {
     *     // ... data to create a Prompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompt we want to update
     *   }
     * })
     */
    upsert<T extends PromptUpsertArgs>(args: SelectSubset<T, PromptUpsertArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompt.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptCountArgs>(
      args?: Subset<T, PromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptAggregateArgs>(args: Subset<T, PromptAggregateArgs>): Prisma.PrismaPromise<GetPromptAggregateType<T>>

    /**
     * Group by Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptGroupByArgs} args - Group by arguments.
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
      T extends PromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptGroupByArgs['orderBy'] }
        : { orderBy?: PromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompt model
   */
  readonly fields: PromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    promptType<T extends PromptTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptTypeDefaultArgs<ExtArgs>>): Prisma__PromptTypeClient<$Result.GetResult<Prisma.$PromptTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prompt model
   */
  interface PromptFieldRefs {
    readonly id: FieldRef<"Prompt", 'String'>
    readonly title: FieldRef<"Prompt", 'String'>
    readonly userId: FieldRef<"Prompt", 'String'>
    readonly promptTypeId: FieldRef<"Prompt", 'String'>
    readonly inputs: FieldRef<"Prompt", 'Json'>
    readonly finalPrompt: FieldRef<"Prompt", 'String'>
    readonly createdAt: FieldRef<"Prompt", 'DateTime'>
    readonly updatedAt: FieldRef<"Prompt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prompt findUnique
   */
  export type PromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findUniqueOrThrow
   */
  export type PromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findFirst
   */
  export type PromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findFirstOrThrow
   */
  export type PromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findMany
   */
  export type PromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt create
   */
  export type PromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to create a Prompt.
     */
    data: XOR<PromptCreateInput, PromptUncheckedCreateInput>
  }

  /**
   * Prompt createMany
   */
  export type PromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompt createManyAndReturn
   */
  export type PromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prompt update
   */
  export type PromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to update a Prompt.
     */
    data: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
    /**
     * Choose, which Prompt to update.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt updateMany
   */
  export type PromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompt updateManyAndReturn
   */
  export type PromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prompt upsert
   */
  export type PromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The filter to search for the Prompt to update in case it exists.
     */
    where: PromptWhereUniqueInput
    /**
     * In case the Prompt found by the `where` argument doesn't exist, create a new Prompt with this data.
     */
    create: XOR<PromptCreateInput, PromptUncheckedCreateInput>
    /**
     * In case the Prompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
  }

  /**
   * Prompt delete
   */
  export type PromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter which Prompt to delete.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt deleteMany
   */
  export type PromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to delete.
     */
    limit?: number
  }

  /**
   * Prompt without action
   */
  export type PromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
  }


  /**
   * Model GlobalKeyword
   */

  export type AggregateGlobalKeyword = {
    _count: GlobalKeywordCountAggregateOutputType | null
    _min: GlobalKeywordMinAggregateOutputType | null
    _max: GlobalKeywordMaxAggregateOutputType | null
  }

  export type GlobalKeywordMinAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalKeywordMaxAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalKeywordCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GlobalKeywordMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalKeywordMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalKeywordCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GlobalKeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalKeyword to aggregate.
     */
    where?: GlobalKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalKeywords to fetch.
     */
    orderBy?: GlobalKeywordOrderByWithRelationInput | GlobalKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalKeywords
    **/
    _count?: true | GlobalKeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalKeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalKeywordMaxAggregateInputType
  }

  export type GetGlobalKeywordAggregateType<T extends GlobalKeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalKeyword[P]>
      : GetScalarType<T[P], AggregateGlobalKeyword[P]>
  }




  export type GlobalKeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalKeywordWhereInput
    orderBy?: GlobalKeywordOrderByWithAggregationInput | GlobalKeywordOrderByWithAggregationInput[]
    by: GlobalKeywordScalarFieldEnum[] | GlobalKeywordScalarFieldEnum
    having?: GlobalKeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalKeywordCountAggregateInputType | true
    _min?: GlobalKeywordMinAggregateInputType
    _max?: GlobalKeywordMaxAggregateInputType
  }

  export type GlobalKeywordGroupByOutputType = {
    id: string
    text: string
    createdAt: Date
    updatedAt: Date
    _count: GlobalKeywordCountAggregateOutputType | null
    _min: GlobalKeywordMinAggregateOutputType | null
    _max: GlobalKeywordMaxAggregateOutputType | null
  }

  type GetGlobalKeywordGroupByPayload<T extends GlobalKeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalKeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalKeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalKeywordGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalKeywordGroupByOutputType[P]>
        }
      >
    >


  export type GlobalKeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalKeyword"]>

  export type GlobalKeywordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalKeyword"]>

  export type GlobalKeywordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalKeyword"]>

  export type GlobalKeywordSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GlobalKeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "createdAt" | "updatedAt", ExtArgs["result"]["globalKeyword"]>

  export type $GlobalKeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalKeyword"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["globalKeyword"]>
    composites: {}
  }

  type GlobalKeywordGetPayload<S extends boolean | null | undefined | GlobalKeywordDefaultArgs> = $Result.GetResult<Prisma.$GlobalKeywordPayload, S>

  type GlobalKeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalKeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalKeywordCountAggregateInputType | true
    }

  export interface GlobalKeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalKeyword'], meta: { name: 'GlobalKeyword' } }
    /**
     * Find zero or one GlobalKeyword that matches the filter.
     * @param {GlobalKeywordFindUniqueArgs} args - Arguments to find a GlobalKeyword
     * @example
     * // Get one GlobalKeyword
     * const globalKeyword = await prisma.globalKeyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalKeywordFindUniqueArgs>(args: SelectSubset<T, GlobalKeywordFindUniqueArgs<ExtArgs>>): Prisma__GlobalKeywordClient<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalKeyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalKeywordFindUniqueOrThrowArgs} args - Arguments to find a GlobalKeyword
     * @example
     * // Get one GlobalKeyword
     * const globalKeyword = await prisma.globalKeyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalKeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalKeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalKeywordClient<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalKeyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalKeywordFindFirstArgs} args - Arguments to find a GlobalKeyword
     * @example
     * // Get one GlobalKeyword
     * const globalKeyword = await prisma.globalKeyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalKeywordFindFirstArgs>(args?: SelectSubset<T, GlobalKeywordFindFirstArgs<ExtArgs>>): Prisma__GlobalKeywordClient<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalKeyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalKeywordFindFirstOrThrowArgs} args - Arguments to find a GlobalKeyword
     * @example
     * // Get one GlobalKeyword
     * const globalKeyword = await prisma.globalKeyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalKeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalKeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalKeywordClient<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalKeywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalKeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalKeywords
     * const globalKeywords = await prisma.globalKeyword.findMany()
     * 
     * // Get first 10 GlobalKeywords
     * const globalKeywords = await prisma.globalKeyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalKeywordWithIdOnly = await prisma.globalKeyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalKeywordFindManyArgs>(args?: SelectSubset<T, GlobalKeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalKeyword.
     * @param {GlobalKeywordCreateArgs} args - Arguments to create a GlobalKeyword.
     * @example
     * // Create one GlobalKeyword
     * const GlobalKeyword = await prisma.globalKeyword.create({
     *   data: {
     *     // ... data to create a GlobalKeyword
     *   }
     * })
     * 
     */
    create<T extends GlobalKeywordCreateArgs>(args: SelectSubset<T, GlobalKeywordCreateArgs<ExtArgs>>): Prisma__GlobalKeywordClient<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalKeywords.
     * @param {GlobalKeywordCreateManyArgs} args - Arguments to create many GlobalKeywords.
     * @example
     * // Create many GlobalKeywords
     * const globalKeyword = await prisma.globalKeyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalKeywordCreateManyArgs>(args?: SelectSubset<T, GlobalKeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalKeywords and returns the data saved in the database.
     * @param {GlobalKeywordCreateManyAndReturnArgs} args - Arguments to create many GlobalKeywords.
     * @example
     * // Create many GlobalKeywords
     * const globalKeyword = await prisma.globalKeyword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalKeywords and only return the `id`
     * const globalKeywordWithIdOnly = await prisma.globalKeyword.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalKeywordCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalKeywordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalKeyword.
     * @param {GlobalKeywordDeleteArgs} args - Arguments to delete one GlobalKeyword.
     * @example
     * // Delete one GlobalKeyword
     * const GlobalKeyword = await prisma.globalKeyword.delete({
     *   where: {
     *     // ... filter to delete one GlobalKeyword
     *   }
     * })
     * 
     */
    delete<T extends GlobalKeywordDeleteArgs>(args: SelectSubset<T, GlobalKeywordDeleteArgs<ExtArgs>>): Prisma__GlobalKeywordClient<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalKeyword.
     * @param {GlobalKeywordUpdateArgs} args - Arguments to update one GlobalKeyword.
     * @example
     * // Update one GlobalKeyword
     * const globalKeyword = await prisma.globalKeyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalKeywordUpdateArgs>(args: SelectSubset<T, GlobalKeywordUpdateArgs<ExtArgs>>): Prisma__GlobalKeywordClient<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalKeywords.
     * @param {GlobalKeywordDeleteManyArgs} args - Arguments to filter GlobalKeywords to delete.
     * @example
     * // Delete a few GlobalKeywords
     * const { count } = await prisma.globalKeyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalKeywordDeleteManyArgs>(args?: SelectSubset<T, GlobalKeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalKeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalKeywords
     * const globalKeyword = await prisma.globalKeyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalKeywordUpdateManyArgs>(args: SelectSubset<T, GlobalKeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalKeywords and returns the data updated in the database.
     * @param {GlobalKeywordUpdateManyAndReturnArgs} args - Arguments to update many GlobalKeywords.
     * @example
     * // Update many GlobalKeywords
     * const globalKeyword = await prisma.globalKeyword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalKeywords and only return the `id`
     * const globalKeywordWithIdOnly = await prisma.globalKeyword.updateManyAndReturn({
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
    updateManyAndReturn<T extends GlobalKeywordUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalKeywordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalKeyword.
     * @param {GlobalKeywordUpsertArgs} args - Arguments to update or create a GlobalKeyword.
     * @example
     * // Update or create a GlobalKeyword
     * const globalKeyword = await prisma.globalKeyword.upsert({
     *   create: {
     *     // ... data to create a GlobalKeyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalKeyword we want to update
     *   }
     * })
     */
    upsert<T extends GlobalKeywordUpsertArgs>(args: SelectSubset<T, GlobalKeywordUpsertArgs<ExtArgs>>): Prisma__GlobalKeywordClient<$Result.GetResult<Prisma.$GlobalKeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalKeywordCountArgs} args - Arguments to filter GlobalKeywords to count.
     * @example
     * // Count the number of GlobalKeywords
     * const count = await prisma.globalKeyword.count({
     *   where: {
     *     // ... the filter for the GlobalKeywords we want to count
     *   }
     * })
    **/
    count<T extends GlobalKeywordCountArgs>(
      args?: Subset<T, GlobalKeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalKeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalKeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlobalKeywordAggregateArgs>(args: Subset<T, GlobalKeywordAggregateArgs>): Prisma.PrismaPromise<GetGlobalKeywordAggregateType<T>>

    /**
     * Group by GlobalKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalKeywordGroupByArgs} args - Group by arguments.
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
      T extends GlobalKeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalKeywordGroupByArgs['orderBy'] }
        : { orderBy?: GlobalKeywordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlobalKeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalKeyword model
   */
  readonly fields: GlobalKeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalKeyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalKeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GlobalKeyword model
   */
  interface GlobalKeywordFieldRefs {
    readonly id: FieldRef<"GlobalKeyword", 'String'>
    readonly text: FieldRef<"GlobalKeyword", 'String'>
    readonly createdAt: FieldRef<"GlobalKeyword", 'DateTime'>
    readonly updatedAt: FieldRef<"GlobalKeyword", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalKeyword findUnique
   */
  export type GlobalKeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * Filter, which GlobalKeyword to fetch.
     */
    where: GlobalKeywordWhereUniqueInput
  }

  /**
   * GlobalKeyword findUniqueOrThrow
   */
  export type GlobalKeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * Filter, which GlobalKeyword to fetch.
     */
    where: GlobalKeywordWhereUniqueInput
  }

  /**
   * GlobalKeyword findFirst
   */
  export type GlobalKeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * Filter, which GlobalKeyword to fetch.
     */
    where?: GlobalKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalKeywords to fetch.
     */
    orderBy?: GlobalKeywordOrderByWithRelationInput | GlobalKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalKeywords.
     */
    cursor?: GlobalKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalKeywords.
     */
    distinct?: GlobalKeywordScalarFieldEnum | GlobalKeywordScalarFieldEnum[]
  }

  /**
   * GlobalKeyword findFirstOrThrow
   */
  export type GlobalKeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * Filter, which GlobalKeyword to fetch.
     */
    where?: GlobalKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalKeywords to fetch.
     */
    orderBy?: GlobalKeywordOrderByWithRelationInput | GlobalKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalKeywords.
     */
    cursor?: GlobalKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalKeywords.
     */
    distinct?: GlobalKeywordScalarFieldEnum | GlobalKeywordScalarFieldEnum[]
  }

  /**
   * GlobalKeyword findMany
   */
  export type GlobalKeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * Filter, which GlobalKeywords to fetch.
     */
    where?: GlobalKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalKeywords to fetch.
     */
    orderBy?: GlobalKeywordOrderByWithRelationInput | GlobalKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalKeywords.
     */
    cursor?: GlobalKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalKeywords.
     */
    skip?: number
    distinct?: GlobalKeywordScalarFieldEnum | GlobalKeywordScalarFieldEnum[]
  }

  /**
   * GlobalKeyword create
   */
  export type GlobalKeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalKeyword.
     */
    data: XOR<GlobalKeywordCreateInput, GlobalKeywordUncheckedCreateInput>
  }

  /**
   * GlobalKeyword createMany
   */
  export type GlobalKeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalKeywords.
     */
    data: GlobalKeywordCreateManyInput | GlobalKeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalKeyword createManyAndReturn
   */
  export type GlobalKeywordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalKeywords.
     */
    data: GlobalKeywordCreateManyInput | GlobalKeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalKeyword update
   */
  export type GlobalKeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalKeyword.
     */
    data: XOR<GlobalKeywordUpdateInput, GlobalKeywordUncheckedUpdateInput>
    /**
     * Choose, which GlobalKeyword to update.
     */
    where: GlobalKeywordWhereUniqueInput
  }

  /**
   * GlobalKeyword updateMany
   */
  export type GlobalKeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalKeywords.
     */
    data: XOR<GlobalKeywordUpdateManyMutationInput, GlobalKeywordUncheckedUpdateManyInput>
    /**
     * Filter which GlobalKeywords to update
     */
    where?: GlobalKeywordWhereInput
    /**
     * Limit how many GlobalKeywords to update.
     */
    limit?: number
  }

  /**
   * GlobalKeyword updateManyAndReturn
   */
  export type GlobalKeywordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * The data used to update GlobalKeywords.
     */
    data: XOR<GlobalKeywordUpdateManyMutationInput, GlobalKeywordUncheckedUpdateManyInput>
    /**
     * Filter which GlobalKeywords to update
     */
    where?: GlobalKeywordWhereInput
    /**
     * Limit how many GlobalKeywords to update.
     */
    limit?: number
  }

  /**
   * GlobalKeyword upsert
   */
  export type GlobalKeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalKeyword to update in case it exists.
     */
    where: GlobalKeywordWhereUniqueInput
    /**
     * In case the GlobalKeyword found by the `where` argument doesn't exist, create a new GlobalKeyword with this data.
     */
    create: XOR<GlobalKeywordCreateInput, GlobalKeywordUncheckedCreateInput>
    /**
     * In case the GlobalKeyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalKeywordUpdateInput, GlobalKeywordUncheckedUpdateInput>
  }

  /**
   * GlobalKeyword delete
   */
  export type GlobalKeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
    /**
     * Filter which GlobalKeyword to delete.
     */
    where: GlobalKeywordWhereUniqueInput
  }

  /**
   * GlobalKeyword deleteMany
   */
  export type GlobalKeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalKeywords to delete
     */
    where?: GlobalKeywordWhereInput
    /**
     * Limit how many GlobalKeywords to delete.
     */
    limit?: number
  }

  /**
   * GlobalKeyword without action
   */
  export type GlobalKeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalKeyword
     */
    select?: GlobalKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalKeyword
     */
    omit?: GlobalKeywordOmit<ExtArgs> | null
  }


  /**
   * Model AIModel
   */

  export type AggregateAIModel = {
    _count: AIModelCountAggregateOutputType | null
    _min: AIModelMinAggregateOutputType | null
    _max: AIModelMaxAggregateOutputType | null
  }

  export type AIModelMinAggregateOutputType = {
    id: string | null
    name: string | null
    providerId: string | null
    modelId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIModelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    providerId: string | null
    modelId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIModelCountAggregateOutputType = {
    id: number
    name: number
    providerId: number
    modelId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AIModelMinAggregateInputType = {
    id?: true
    name?: true
    providerId?: true
    modelId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIModelMaxAggregateInputType = {
    id?: true
    name?: true
    providerId?: true
    modelId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIModelCountAggregateInputType = {
    id?: true
    name?: true
    providerId?: true
    modelId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AIModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIModel to aggregate.
     */
    where?: AIModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIModels to fetch.
     */
    orderBy?: AIModelOrderByWithRelationInput | AIModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIModels
    **/
    _count?: true | AIModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIModelMaxAggregateInputType
  }

  export type GetAIModelAggregateType<T extends AIModelAggregateArgs> = {
        [P in keyof T & keyof AggregateAIModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIModel[P]>
      : GetScalarType<T[P], AggregateAIModel[P]>
  }




  export type AIModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIModelWhereInput
    orderBy?: AIModelOrderByWithAggregationInput | AIModelOrderByWithAggregationInput[]
    by: AIModelScalarFieldEnum[] | AIModelScalarFieldEnum
    having?: AIModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIModelCountAggregateInputType | true
    _min?: AIModelMinAggregateInputType
    _max?: AIModelMaxAggregateInputType
  }

  export type AIModelGroupByOutputType = {
    id: string
    name: string
    providerId: string
    modelId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AIModelCountAggregateOutputType | null
    _min: AIModelMinAggregateOutputType | null
    _max: AIModelMaxAggregateOutputType | null
  }

  type GetAIModelGroupByPayload<T extends AIModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIModelGroupByOutputType[P]>
            : GetScalarType<T[P], AIModelGroupByOutputType[P]>
        }
      >
    >


  export type AIModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    providerId?: boolean
    modelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIModel"]>

  export type AIModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    providerId?: boolean
    modelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIModel"]>

  export type AIModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    providerId?: boolean
    modelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIModel"]>

  export type AIModelSelectScalar = {
    id?: boolean
    name?: boolean
    providerId?: boolean
    modelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AIModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "providerId" | "modelId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["aIModel"]>

  export type $AIModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIModel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      providerId: string
      modelId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aIModel"]>
    composites: {}
  }

  type AIModelGetPayload<S extends boolean | null | undefined | AIModelDefaultArgs> = $Result.GetResult<Prisma.$AIModelPayload, S>

  type AIModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIModelCountAggregateInputType | true
    }

  export interface AIModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIModel'], meta: { name: 'AIModel' } }
    /**
     * Find zero or one AIModel that matches the filter.
     * @param {AIModelFindUniqueArgs} args - Arguments to find a AIModel
     * @example
     * // Get one AIModel
     * const aIModel = await prisma.aIModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIModelFindUniqueArgs>(args: SelectSubset<T, AIModelFindUniqueArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIModelFindUniqueOrThrowArgs} args - Arguments to find a AIModel
     * @example
     * // Get one AIModel
     * const aIModel = await prisma.aIModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIModelFindUniqueOrThrowArgs>(args: SelectSubset<T, AIModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelFindFirstArgs} args - Arguments to find a AIModel
     * @example
     * // Get one AIModel
     * const aIModel = await prisma.aIModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIModelFindFirstArgs>(args?: SelectSubset<T, AIModelFindFirstArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelFindFirstOrThrowArgs} args - Arguments to find a AIModel
     * @example
     * // Get one AIModel
     * const aIModel = await prisma.aIModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIModelFindFirstOrThrowArgs>(args?: SelectSubset<T, AIModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIModels
     * const aIModels = await prisma.aIModel.findMany()
     * 
     * // Get first 10 AIModels
     * const aIModels = await prisma.aIModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIModelWithIdOnly = await prisma.aIModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIModelFindManyArgs>(args?: SelectSubset<T, AIModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIModel.
     * @param {AIModelCreateArgs} args - Arguments to create a AIModel.
     * @example
     * // Create one AIModel
     * const AIModel = await prisma.aIModel.create({
     *   data: {
     *     // ... data to create a AIModel
     *   }
     * })
     * 
     */
    create<T extends AIModelCreateArgs>(args: SelectSubset<T, AIModelCreateArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIModels.
     * @param {AIModelCreateManyArgs} args - Arguments to create many AIModels.
     * @example
     * // Create many AIModels
     * const aIModel = await prisma.aIModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIModelCreateManyArgs>(args?: SelectSubset<T, AIModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIModels and returns the data saved in the database.
     * @param {AIModelCreateManyAndReturnArgs} args - Arguments to create many AIModels.
     * @example
     * // Create many AIModels
     * const aIModel = await prisma.aIModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIModels and only return the `id`
     * const aIModelWithIdOnly = await prisma.aIModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIModelCreateManyAndReturnArgs>(args?: SelectSubset<T, AIModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIModel.
     * @param {AIModelDeleteArgs} args - Arguments to delete one AIModel.
     * @example
     * // Delete one AIModel
     * const AIModel = await prisma.aIModel.delete({
     *   where: {
     *     // ... filter to delete one AIModel
     *   }
     * })
     * 
     */
    delete<T extends AIModelDeleteArgs>(args: SelectSubset<T, AIModelDeleteArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIModel.
     * @param {AIModelUpdateArgs} args - Arguments to update one AIModel.
     * @example
     * // Update one AIModel
     * const aIModel = await prisma.aIModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIModelUpdateArgs>(args: SelectSubset<T, AIModelUpdateArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIModels.
     * @param {AIModelDeleteManyArgs} args - Arguments to filter AIModels to delete.
     * @example
     * // Delete a few AIModels
     * const { count } = await prisma.aIModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIModelDeleteManyArgs>(args?: SelectSubset<T, AIModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIModels
     * const aIModel = await prisma.aIModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIModelUpdateManyArgs>(args: SelectSubset<T, AIModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIModels and returns the data updated in the database.
     * @param {AIModelUpdateManyAndReturnArgs} args - Arguments to update many AIModels.
     * @example
     * // Update many AIModels
     * const aIModel = await prisma.aIModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIModels and only return the `id`
     * const aIModelWithIdOnly = await prisma.aIModel.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIModelUpdateManyAndReturnArgs>(args: SelectSubset<T, AIModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIModel.
     * @param {AIModelUpsertArgs} args - Arguments to update or create a AIModel.
     * @example
     * // Update or create a AIModel
     * const aIModel = await prisma.aIModel.upsert({
     *   create: {
     *     // ... data to create a AIModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIModel we want to update
     *   }
     * })
     */
    upsert<T extends AIModelUpsertArgs>(args: SelectSubset<T, AIModelUpsertArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelCountArgs} args - Arguments to filter AIModels to count.
     * @example
     * // Count the number of AIModels
     * const count = await prisma.aIModel.count({
     *   where: {
     *     // ... the filter for the AIModels we want to count
     *   }
     * })
    **/
    count<T extends AIModelCountArgs>(
      args?: Subset<T, AIModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIModelAggregateArgs>(args: Subset<T, AIModelAggregateArgs>): Prisma.PrismaPromise<GetAIModelAggregateType<T>>

    /**
     * Group by AIModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelGroupByArgs} args - Group by arguments.
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
      T extends AIModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIModelGroupByArgs['orderBy'] }
        : { orderBy?: AIModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIModel model
   */
  readonly fields: AIModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AIModel model
   */
  interface AIModelFieldRefs {
    readonly id: FieldRef<"AIModel", 'String'>
    readonly name: FieldRef<"AIModel", 'String'>
    readonly providerId: FieldRef<"AIModel", 'String'>
    readonly modelId: FieldRef<"AIModel", 'String'>
    readonly isActive: FieldRef<"AIModel", 'Boolean'>
    readonly createdAt: FieldRef<"AIModel", 'DateTime'>
    readonly updatedAt: FieldRef<"AIModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIModel findUnique
   */
  export type AIModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Filter, which AIModel to fetch.
     */
    where: AIModelWhereUniqueInput
  }

  /**
   * AIModel findUniqueOrThrow
   */
  export type AIModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Filter, which AIModel to fetch.
     */
    where: AIModelWhereUniqueInput
  }

  /**
   * AIModel findFirst
   */
  export type AIModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Filter, which AIModel to fetch.
     */
    where?: AIModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIModels to fetch.
     */
    orderBy?: AIModelOrderByWithRelationInput | AIModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIModels.
     */
    cursor?: AIModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIModels.
     */
    distinct?: AIModelScalarFieldEnum | AIModelScalarFieldEnum[]
  }

  /**
   * AIModel findFirstOrThrow
   */
  export type AIModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Filter, which AIModel to fetch.
     */
    where?: AIModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIModels to fetch.
     */
    orderBy?: AIModelOrderByWithRelationInput | AIModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIModels.
     */
    cursor?: AIModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIModels.
     */
    distinct?: AIModelScalarFieldEnum | AIModelScalarFieldEnum[]
  }

  /**
   * AIModel findMany
   */
  export type AIModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Filter, which AIModels to fetch.
     */
    where?: AIModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIModels to fetch.
     */
    orderBy?: AIModelOrderByWithRelationInput | AIModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIModels.
     */
    cursor?: AIModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIModels.
     */
    skip?: number
    distinct?: AIModelScalarFieldEnum | AIModelScalarFieldEnum[]
  }

  /**
   * AIModel create
   */
  export type AIModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * The data needed to create a AIModel.
     */
    data: XOR<AIModelCreateInput, AIModelUncheckedCreateInput>
  }

  /**
   * AIModel createMany
   */
  export type AIModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIModels.
     */
    data: AIModelCreateManyInput | AIModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIModel createManyAndReturn
   */
  export type AIModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * The data used to create many AIModels.
     */
    data: AIModelCreateManyInput | AIModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIModel update
   */
  export type AIModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * The data needed to update a AIModel.
     */
    data: XOR<AIModelUpdateInput, AIModelUncheckedUpdateInput>
    /**
     * Choose, which AIModel to update.
     */
    where: AIModelWhereUniqueInput
  }

  /**
   * AIModel updateMany
   */
  export type AIModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIModels.
     */
    data: XOR<AIModelUpdateManyMutationInput, AIModelUncheckedUpdateManyInput>
    /**
     * Filter which AIModels to update
     */
    where?: AIModelWhereInput
    /**
     * Limit how many AIModels to update.
     */
    limit?: number
  }

  /**
   * AIModel updateManyAndReturn
   */
  export type AIModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * The data used to update AIModels.
     */
    data: XOR<AIModelUpdateManyMutationInput, AIModelUncheckedUpdateManyInput>
    /**
     * Filter which AIModels to update
     */
    where?: AIModelWhereInput
    /**
     * Limit how many AIModels to update.
     */
    limit?: number
  }

  /**
   * AIModel upsert
   */
  export type AIModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * The filter to search for the AIModel to update in case it exists.
     */
    where: AIModelWhereUniqueInput
    /**
     * In case the AIModel found by the `where` argument doesn't exist, create a new AIModel with this data.
     */
    create: XOR<AIModelCreateInput, AIModelUncheckedCreateInput>
    /**
     * In case the AIModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIModelUpdateInput, AIModelUncheckedUpdateInput>
  }

  /**
   * AIModel delete
   */
  export type AIModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Filter which AIModel to delete.
     */
    where: AIModelWhereUniqueInput
  }

  /**
   * AIModel deleteMany
   */
  export type AIModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIModels to delete
     */
    where?: AIModelWhereInput
    /**
     * Limit how many AIModels to delete.
     */
    limit?: number
  }

  /**
   * AIModel without action
   */
  export type AIModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
  }


  /**
   * Model AILog
   */

  export type AggregateAILog = {
    _count: AILogCountAggregateOutputType | null
    _avg: AILogAvgAggregateOutputType | null
    _sum: AILogSumAggregateOutputType | null
    _min: AILogMinAggregateOutputType | null
    _max: AILogMaxAggregateOutputType | null
  }

  export type AILogAvgAggregateOutputType = {
    tokensIn: number | null
    tokensOut: number | null
    durationMs: number | null
  }

  export type AILogSumAggregateOutputType = {
    tokensIn: number | null
    tokensOut: number | null
    durationMs: number | null
  }

  export type AILogMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    response: string | null
    modelId: string | null
    providerId: string | null
    type: string | null
    userId: string | null
    tokensIn: number | null
    tokensOut: number | null
    durationMs: number | null
    createdAt: Date | null
  }

  export type AILogMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    response: string | null
    modelId: string | null
    providerId: string | null
    type: string | null
    userId: string | null
    tokensIn: number | null
    tokensOut: number | null
    durationMs: number | null
    createdAt: Date | null
  }

  export type AILogCountAggregateOutputType = {
    id: number
    prompt: number
    response: number
    modelId: number
    providerId: number
    type: number
    userId: number
    tokensIn: number
    tokensOut: number
    durationMs: number
    createdAt: number
    _all: number
  }


  export type AILogAvgAggregateInputType = {
    tokensIn?: true
    tokensOut?: true
    durationMs?: true
  }

  export type AILogSumAggregateInputType = {
    tokensIn?: true
    tokensOut?: true
    durationMs?: true
  }

  export type AILogMinAggregateInputType = {
    id?: true
    prompt?: true
    response?: true
    modelId?: true
    providerId?: true
    type?: true
    userId?: true
    tokensIn?: true
    tokensOut?: true
    durationMs?: true
    createdAt?: true
  }

  export type AILogMaxAggregateInputType = {
    id?: true
    prompt?: true
    response?: true
    modelId?: true
    providerId?: true
    type?: true
    userId?: true
    tokensIn?: true
    tokensOut?: true
    durationMs?: true
    createdAt?: true
  }

  export type AILogCountAggregateInputType = {
    id?: true
    prompt?: true
    response?: true
    modelId?: true
    providerId?: true
    type?: true
    userId?: true
    tokensIn?: true
    tokensOut?: true
    durationMs?: true
    createdAt?: true
    _all?: true
  }

  export type AILogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AILog to aggregate.
     */
    where?: AILogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AILogs to fetch.
     */
    orderBy?: AILogOrderByWithRelationInput | AILogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AILogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AILogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AILogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AILogs
    **/
    _count?: true | AILogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AILogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AILogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AILogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AILogMaxAggregateInputType
  }

  export type GetAILogAggregateType<T extends AILogAggregateArgs> = {
        [P in keyof T & keyof AggregateAILog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAILog[P]>
      : GetScalarType<T[P], AggregateAILog[P]>
  }




  export type AILogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AILogWhereInput
    orderBy?: AILogOrderByWithAggregationInput | AILogOrderByWithAggregationInput[]
    by: AILogScalarFieldEnum[] | AILogScalarFieldEnum
    having?: AILogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AILogCountAggregateInputType | true
    _avg?: AILogAvgAggregateInputType
    _sum?: AILogSumAggregateInputType
    _min?: AILogMinAggregateInputType
    _max?: AILogMaxAggregateInputType
  }

  export type AILogGroupByOutputType = {
    id: string
    prompt: string
    response: string
    modelId: string
    providerId: string
    type: string
    userId: string | null
    tokensIn: number | null
    tokensOut: number | null
    durationMs: number | null
    createdAt: Date
    _count: AILogCountAggregateOutputType | null
    _avg: AILogAvgAggregateOutputType | null
    _sum: AILogSumAggregateOutputType | null
    _min: AILogMinAggregateOutputType | null
    _max: AILogMaxAggregateOutputType | null
  }

  type GetAILogGroupByPayload<T extends AILogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AILogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AILogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AILogGroupByOutputType[P]>
            : GetScalarType<T[P], AILogGroupByOutputType[P]>
        }
      >
    >


  export type AILogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    response?: boolean
    modelId?: boolean
    providerId?: boolean
    type?: boolean
    userId?: boolean
    tokensIn?: boolean
    tokensOut?: boolean
    durationMs?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aILog"]>

  export type AILogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    response?: boolean
    modelId?: boolean
    providerId?: boolean
    type?: boolean
    userId?: boolean
    tokensIn?: boolean
    tokensOut?: boolean
    durationMs?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aILog"]>

  export type AILogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    response?: boolean
    modelId?: boolean
    providerId?: boolean
    type?: boolean
    userId?: boolean
    tokensIn?: boolean
    tokensOut?: boolean
    durationMs?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aILog"]>

  export type AILogSelectScalar = {
    id?: boolean
    prompt?: boolean
    response?: boolean
    modelId?: boolean
    providerId?: boolean
    type?: boolean
    userId?: boolean
    tokensIn?: boolean
    tokensOut?: boolean
    durationMs?: boolean
    createdAt?: boolean
  }

  export type AILogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "response" | "modelId" | "providerId" | "type" | "userId" | "tokensIn" | "tokensOut" | "durationMs" | "createdAt", ExtArgs["result"]["aILog"]>

  export type $AILogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AILog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string
      response: string
      modelId: string
      providerId: string
      type: string
      userId: string | null
      tokensIn: number | null
      tokensOut: number | null
      durationMs: number | null
      createdAt: Date
    }, ExtArgs["result"]["aILog"]>
    composites: {}
  }

  type AILogGetPayload<S extends boolean | null | undefined | AILogDefaultArgs> = $Result.GetResult<Prisma.$AILogPayload, S>

  type AILogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AILogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AILogCountAggregateInputType | true
    }

  export interface AILogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AILog'], meta: { name: 'AILog' } }
    /**
     * Find zero or one AILog that matches the filter.
     * @param {AILogFindUniqueArgs} args - Arguments to find a AILog
     * @example
     * // Get one AILog
     * const aILog = await prisma.aILog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AILogFindUniqueArgs>(args: SelectSubset<T, AILogFindUniqueArgs<ExtArgs>>): Prisma__AILogClient<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AILog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AILogFindUniqueOrThrowArgs} args - Arguments to find a AILog
     * @example
     * // Get one AILog
     * const aILog = await prisma.aILog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AILogFindUniqueOrThrowArgs>(args: SelectSubset<T, AILogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AILogClient<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AILog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AILogFindFirstArgs} args - Arguments to find a AILog
     * @example
     * // Get one AILog
     * const aILog = await prisma.aILog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AILogFindFirstArgs>(args?: SelectSubset<T, AILogFindFirstArgs<ExtArgs>>): Prisma__AILogClient<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AILog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AILogFindFirstOrThrowArgs} args - Arguments to find a AILog
     * @example
     * // Get one AILog
     * const aILog = await prisma.aILog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AILogFindFirstOrThrowArgs>(args?: SelectSubset<T, AILogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AILogClient<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AILogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AILogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AILogs
     * const aILogs = await prisma.aILog.findMany()
     * 
     * // Get first 10 AILogs
     * const aILogs = await prisma.aILog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aILogWithIdOnly = await prisma.aILog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AILogFindManyArgs>(args?: SelectSubset<T, AILogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AILog.
     * @param {AILogCreateArgs} args - Arguments to create a AILog.
     * @example
     * // Create one AILog
     * const AILog = await prisma.aILog.create({
     *   data: {
     *     // ... data to create a AILog
     *   }
     * })
     * 
     */
    create<T extends AILogCreateArgs>(args: SelectSubset<T, AILogCreateArgs<ExtArgs>>): Prisma__AILogClient<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AILogs.
     * @param {AILogCreateManyArgs} args - Arguments to create many AILogs.
     * @example
     * // Create many AILogs
     * const aILog = await prisma.aILog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AILogCreateManyArgs>(args?: SelectSubset<T, AILogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AILogs and returns the data saved in the database.
     * @param {AILogCreateManyAndReturnArgs} args - Arguments to create many AILogs.
     * @example
     * // Create many AILogs
     * const aILog = await prisma.aILog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AILogs and only return the `id`
     * const aILogWithIdOnly = await prisma.aILog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AILogCreateManyAndReturnArgs>(args?: SelectSubset<T, AILogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AILog.
     * @param {AILogDeleteArgs} args - Arguments to delete one AILog.
     * @example
     * // Delete one AILog
     * const AILog = await prisma.aILog.delete({
     *   where: {
     *     // ... filter to delete one AILog
     *   }
     * })
     * 
     */
    delete<T extends AILogDeleteArgs>(args: SelectSubset<T, AILogDeleteArgs<ExtArgs>>): Prisma__AILogClient<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AILog.
     * @param {AILogUpdateArgs} args - Arguments to update one AILog.
     * @example
     * // Update one AILog
     * const aILog = await prisma.aILog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AILogUpdateArgs>(args: SelectSubset<T, AILogUpdateArgs<ExtArgs>>): Prisma__AILogClient<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AILogs.
     * @param {AILogDeleteManyArgs} args - Arguments to filter AILogs to delete.
     * @example
     * // Delete a few AILogs
     * const { count } = await prisma.aILog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AILogDeleteManyArgs>(args?: SelectSubset<T, AILogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AILogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AILogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AILogs
     * const aILog = await prisma.aILog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AILogUpdateManyArgs>(args: SelectSubset<T, AILogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AILogs and returns the data updated in the database.
     * @param {AILogUpdateManyAndReturnArgs} args - Arguments to update many AILogs.
     * @example
     * // Update many AILogs
     * const aILog = await prisma.aILog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AILogs and only return the `id`
     * const aILogWithIdOnly = await prisma.aILog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AILogUpdateManyAndReturnArgs>(args: SelectSubset<T, AILogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AILog.
     * @param {AILogUpsertArgs} args - Arguments to update or create a AILog.
     * @example
     * // Update or create a AILog
     * const aILog = await prisma.aILog.upsert({
     *   create: {
     *     // ... data to create a AILog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AILog we want to update
     *   }
     * })
     */
    upsert<T extends AILogUpsertArgs>(args: SelectSubset<T, AILogUpsertArgs<ExtArgs>>): Prisma__AILogClient<$Result.GetResult<Prisma.$AILogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AILogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AILogCountArgs} args - Arguments to filter AILogs to count.
     * @example
     * // Count the number of AILogs
     * const count = await prisma.aILog.count({
     *   where: {
     *     // ... the filter for the AILogs we want to count
     *   }
     * })
    **/
    count<T extends AILogCountArgs>(
      args?: Subset<T, AILogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AILogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AILog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AILogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AILogAggregateArgs>(args: Subset<T, AILogAggregateArgs>): Prisma.PrismaPromise<GetAILogAggregateType<T>>

    /**
     * Group by AILog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AILogGroupByArgs} args - Group by arguments.
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
      T extends AILogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AILogGroupByArgs['orderBy'] }
        : { orderBy?: AILogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AILogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAILogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AILog model
   */
  readonly fields: AILogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AILog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AILogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AILog model
   */
  interface AILogFieldRefs {
    readonly id: FieldRef<"AILog", 'String'>
    readonly prompt: FieldRef<"AILog", 'String'>
    readonly response: FieldRef<"AILog", 'String'>
    readonly modelId: FieldRef<"AILog", 'String'>
    readonly providerId: FieldRef<"AILog", 'String'>
    readonly type: FieldRef<"AILog", 'String'>
    readonly userId: FieldRef<"AILog", 'String'>
    readonly tokensIn: FieldRef<"AILog", 'Int'>
    readonly tokensOut: FieldRef<"AILog", 'Int'>
    readonly durationMs: FieldRef<"AILog", 'Int'>
    readonly createdAt: FieldRef<"AILog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AILog findUnique
   */
  export type AILogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * Filter, which AILog to fetch.
     */
    where: AILogWhereUniqueInput
  }

  /**
   * AILog findUniqueOrThrow
   */
  export type AILogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * Filter, which AILog to fetch.
     */
    where: AILogWhereUniqueInput
  }

  /**
   * AILog findFirst
   */
  export type AILogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * Filter, which AILog to fetch.
     */
    where?: AILogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AILogs to fetch.
     */
    orderBy?: AILogOrderByWithRelationInput | AILogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AILogs.
     */
    cursor?: AILogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AILogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AILogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AILogs.
     */
    distinct?: AILogScalarFieldEnum | AILogScalarFieldEnum[]
  }

  /**
   * AILog findFirstOrThrow
   */
  export type AILogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * Filter, which AILog to fetch.
     */
    where?: AILogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AILogs to fetch.
     */
    orderBy?: AILogOrderByWithRelationInput | AILogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AILogs.
     */
    cursor?: AILogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AILogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AILogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AILogs.
     */
    distinct?: AILogScalarFieldEnum | AILogScalarFieldEnum[]
  }

  /**
   * AILog findMany
   */
  export type AILogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * Filter, which AILogs to fetch.
     */
    where?: AILogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AILogs to fetch.
     */
    orderBy?: AILogOrderByWithRelationInput | AILogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AILogs.
     */
    cursor?: AILogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AILogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AILogs.
     */
    skip?: number
    distinct?: AILogScalarFieldEnum | AILogScalarFieldEnum[]
  }

  /**
   * AILog create
   */
  export type AILogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * The data needed to create a AILog.
     */
    data: XOR<AILogCreateInput, AILogUncheckedCreateInput>
  }

  /**
   * AILog createMany
   */
  export type AILogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AILogs.
     */
    data: AILogCreateManyInput | AILogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AILog createManyAndReturn
   */
  export type AILogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * The data used to create many AILogs.
     */
    data: AILogCreateManyInput | AILogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AILog update
   */
  export type AILogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * The data needed to update a AILog.
     */
    data: XOR<AILogUpdateInput, AILogUncheckedUpdateInput>
    /**
     * Choose, which AILog to update.
     */
    where: AILogWhereUniqueInput
  }

  /**
   * AILog updateMany
   */
  export type AILogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AILogs.
     */
    data: XOR<AILogUpdateManyMutationInput, AILogUncheckedUpdateManyInput>
    /**
     * Filter which AILogs to update
     */
    where?: AILogWhereInput
    /**
     * Limit how many AILogs to update.
     */
    limit?: number
  }

  /**
   * AILog updateManyAndReturn
   */
  export type AILogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * The data used to update AILogs.
     */
    data: XOR<AILogUpdateManyMutationInput, AILogUncheckedUpdateManyInput>
    /**
     * Filter which AILogs to update
     */
    where?: AILogWhereInput
    /**
     * Limit how many AILogs to update.
     */
    limit?: number
  }

  /**
   * AILog upsert
   */
  export type AILogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * The filter to search for the AILog to update in case it exists.
     */
    where: AILogWhereUniqueInput
    /**
     * In case the AILog found by the `where` argument doesn't exist, create a new AILog with this data.
     */
    create: XOR<AILogCreateInput, AILogUncheckedCreateInput>
    /**
     * In case the AILog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AILogUpdateInput, AILogUncheckedUpdateInput>
  }

  /**
   * AILog delete
   */
  export type AILogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
    /**
     * Filter which AILog to delete.
     */
    where: AILogWhereUniqueInput
  }

  /**
   * AILog deleteMany
   */
  export type AILogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AILogs to delete
     */
    where?: AILogWhereInput
    /**
     * Limit how many AILogs to delete.
     */
    limit?: number
  }

  /**
   * AILog without action
   */
  export type AILogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AILog
     */
    select?: AILogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AILog
     */
    omit?: AILogOmit<ExtArgs> | null
  }


  /**
   * Model LandingContent
   */

  export type AggregateLandingContent = {
    _count: LandingContentCountAggregateOutputType | null
    _min: LandingContentMinAggregateOutputType | null
    _max: LandingContentMaxAggregateOutputType | null
  }

  export type LandingContentMinAggregateOutputType = {
    id: string | null
    section: string | null
    key: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LandingContentMaxAggregateOutputType = {
    id: string | null
    section: string | null
    key: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LandingContentCountAggregateOutputType = {
    id: number
    section: number
    key: number
    content: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LandingContentMinAggregateInputType = {
    id?: true
    section?: true
    key?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LandingContentMaxAggregateInputType = {
    id?: true
    section?: true
    key?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LandingContentCountAggregateInputType = {
    id?: true
    section?: true
    key?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LandingContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandingContent to aggregate.
     */
    where?: LandingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingContents to fetch.
     */
    orderBy?: LandingContentOrderByWithRelationInput | LandingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LandingContents
    **/
    _count?: true | LandingContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandingContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandingContentMaxAggregateInputType
  }

  export type GetLandingContentAggregateType<T extends LandingContentAggregateArgs> = {
        [P in keyof T & keyof AggregateLandingContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandingContent[P]>
      : GetScalarType<T[P], AggregateLandingContent[P]>
  }




  export type LandingContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandingContentWhereInput
    orderBy?: LandingContentOrderByWithAggregationInput | LandingContentOrderByWithAggregationInput[]
    by: LandingContentScalarFieldEnum[] | LandingContentScalarFieldEnum
    having?: LandingContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandingContentCountAggregateInputType | true
    _min?: LandingContentMinAggregateInputType
    _max?: LandingContentMaxAggregateInputType
  }

  export type LandingContentGroupByOutputType = {
    id: string
    section: string
    key: string
    content: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: LandingContentCountAggregateOutputType | null
    _min: LandingContentMinAggregateOutputType | null
    _max: LandingContentMaxAggregateOutputType | null
  }

  type GetLandingContentGroupByPayload<T extends LandingContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandingContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandingContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandingContentGroupByOutputType[P]>
            : GetScalarType<T[P], LandingContentGroupByOutputType[P]>
        }
      >
    >


  export type LandingContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    key?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["landingContent"]>

  export type LandingContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    key?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["landingContent"]>

  export type LandingContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    key?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["landingContent"]>

  export type LandingContentSelectScalar = {
    id?: boolean
    section?: boolean
    key?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LandingContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "section" | "key" | "content" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["landingContent"]>

  export type $LandingContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LandingContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      section: string
      key: string
      content: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["landingContent"]>
    composites: {}
  }

  type LandingContentGetPayload<S extends boolean | null | undefined | LandingContentDefaultArgs> = $Result.GetResult<Prisma.$LandingContentPayload, S>

  type LandingContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandingContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandingContentCountAggregateInputType | true
    }

  export interface LandingContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LandingContent'], meta: { name: 'LandingContent' } }
    /**
     * Find zero or one LandingContent that matches the filter.
     * @param {LandingContentFindUniqueArgs} args - Arguments to find a LandingContent
     * @example
     * // Get one LandingContent
     * const landingContent = await prisma.landingContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandingContentFindUniqueArgs>(args: SelectSubset<T, LandingContentFindUniqueArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LandingContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandingContentFindUniqueOrThrowArgs} args - Arguments to find a LandingContent
     * @example
     * // Get one LandingContent
     * const landingContent = await prisma.landingContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandingContentFindUniqueOrThrowArgs>(args: SelectSubset<T, LandingContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LandingContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentFindFirstArgs} args - Arguments to find a LandingContent
     * @example
     * // Get one LandingContent
     * const landingContent = await prisma.landingContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandingContentFindFirstArgs>(args?: SelectSubset<T, LandingContentFindFirstArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LandingContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentFindFirstOrThrowArgs} args - Arguments to find a LandingContent
     * @example
     * // Get one LandingContent
     * const landingContent = await prisma.landingContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandingContentFindFirstOrThrowArgs>(args?: SelectSubset<T, LandingContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LandingContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LandingContents
     * const landingContents = await prisma.landingContent.findMany()
     * 
     * // Get first 10 LandingContents
     * const landingContents = await prisma.landingContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landingContentWithIdOnly = await prisma.landingContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandingContentFindManyArgs>(args?: SelectSubset<T, LandingContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LandingContent.
     * @param {LandingContentCreateArgs} args - Arguments to create a LandingContent.
     * @example
     * // Create one LandingContent
     * const LandingContent = await prisma.landingContent.create({
     *   data: {
     *     // ... data to create a LandingContent
     *   }
     * })
     * 
     */
    create<T extends LandingContentCreateArgs>(args: SelectSubset<T, LandingContentCreateArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LandingContents.
     * @param {LandingContentCreateManyArgs} args - Arguments to create many LandingContents.
     * @example
     * // Create many LandingContents
     * const landingContent = await prisma.landingContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandingContentCreateManyArgs>(args?: SelectSubset<T, LandingContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LandingContents and returns the data saved in the database.
     * @param {LandingContentCreateManyAndReturnArgs} args - Arguments to create many LandingContents.
     * @example
     * // Create many LandingContents
     * const landingContent = await prisma.landingContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LandingContents and only return the `id`
     * const landingContentWithIdOnly = await prisma.landingContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandingContentCreateManyAndReturnArgs>(args?: SelectSubset<T, LandingContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LandingContent.
     * @param {LandingContentDeleteArgs} args - Arguments to delete one LandingContent.
     * @example
     * // Delete one LandingContent
     * const LandingContent = await prisma.landingContent.delete({
     *   where: {
     *     // ... filter to delete one LandingContent
     *   }
     * })
     * 
     */
    delete<T extends LandingContentDeleteArgs>(args: SelectSubset<T, LandingContentDeleteArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LandingContent.
     * @param {LandingContentUpdateArgs} args - Arguments to update one LandingContent.
     * @example
     * // Update one LandingContent
     * const landingContent = await prisma.landingContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandingContentUpdateArgs>(args: SelectSubset<T, LandingContentUpdateArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LandingContents.
     * @param {LandingContentDeleteManyArgs} args - Arguments to filter LandingContents to delete.
     * @example
     * // Delete a few LandingContents
     * const { count } = await prisma.landingContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandingContentDeleteManyArgs>(args?: SelectSubset<T, LandingContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandingContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LandingContents
     * const landingContent = await prisma.landingContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandingContentUpdateManyArgs>(args: SelectSubset<T, LandingContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandingContents and returns the data updated in the database.
     * @param {LandingContentUpdateManyAndReturnArgs} args - Arguments to update many LandingContents.
     * @example
     * // Update many LandingContents
     * const landingContent = await prisma.landingContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LandingContents and only return the `id`
     * const landingContentWithIdOnly = await prisma.landingContent.updateManyAndReturn({
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
    updateManyAndReturn<T extends LandingContentUpdateManyAndReturnArgs>(args: SelectSubset<T, LandingContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LandingContent.
     * @param {LandingContentUpsertArgs} args - Arguments to update or create a LandingContent.
     * @example
     * // Update or create a LandingContent
     * const landingContent = await prisma.landingContent.upsert({
     *   create: {
     *     // ... data to create a LandingContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LandingContent we want to update
     *   }
     * })
     */
    upsert<T extends LandingContentUpsertArgs>(args: SelectSubset<T, LandingContentUpsertArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LandingContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentCountArgs} args - Arguments to filter LandingContents to count.
     * @example
     * // Count the number of LandingContents
     * const count = await prisma.landingContent.count({
     *   where: {
     *     // ... the filter for the LandingContents we want to count
     *   }
     * })
    **/
    count<T extends LandingContentCountArgs>(
      args?: Subset<T, LandingContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandingContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LandingContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LandingContentAggregateArgs>(args: Subset<T, LandingContentAggregateArgs>): Prisma.PrismaPromise<GetLandingContentAggregateType<T>>

    /**
     * Group by LandingContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentGroupByArgs} args - Group by arguments.
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
      T extends LandingContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandingContentGroupByArgs['orderBy'] }
        : { orderBy?: LandingContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LandingContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandingContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LandingContent model
   */
  readonly fields: LandingContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LandingContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandingContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LandingContent model
   */
  interface LandingContentFieldRefs {
    readonly id: FieldRef<"LandingContent", 'String'>
    readonly section: FieldRef<"LandingContent", 'String'>
    readonly key: FieldRef<"LandingContent", 'String'>
    readonly content: FieldRef<"LandingContent", 'Json'>
    readonly isActive: FieldRef<"LandingContent", 'Boolean'>
    readonly createdAt: FieldRef<"LandingContent", 'DateTime'>
    readonly updatedAt: FieldRef<"LandingContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LandingContent findUnique
   */
  export type LandingContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter, which LandingContent to fetch.
     */
    where: LandingContentWhereUniqueInput
  }

  /**
   * LandingContent findUniqueOrThrow
   */
  export type LandingContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter, which LandingContent to fetch.
     */
    where: LandingContentWhereUniqueInput
  }

  /**
   * LandingContent findFirst
   */
  export type LandingContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter, which LandingContent to fetch.
     */
    where?: LandingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingContents to fetch.
     */
    orderBy?: LandingContentOrderByWithRelationInput | LandingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandingContents.
     */
    cursor?: LandingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandingContents.
     */
    distinct?: LandingContentScalarFieldEnum | LandingContentScalarFieldEnum[]
  }

  /**
   * LandingContent findFirstOrThrow
   */
  export type LandingContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter, which LandingContent to fetch.
     */
    where?: LandingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingContents to fetch.
     */
    orderBy?: LandingContentOrderByWithRelationInput | LandingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandingContents.
     */
    cursor?: LandingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandingContents.
     */
    distinct?: LandingContentScalarFieldEnum | LandingContentScalarFieldEnum[]
  }

  /**
   * LandingContent findMany
   */
  export type LandingContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter, which LandingContents to fetch.
     */
    where?: LandingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingContents to fetch.
     */
    orderBy?: LandingContentOrderByWithRelationInput | LandingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LandingContents.
     */
    cursor?: LandingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingContents.
     */
    skip?: number
    distinct?: LandingContentScalarFieldEnum | LandingContentScalarFieldEnum[]
  }

  /**
   * LandingContent create
   */
  export type LandingContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * The data needed to create a LandingContent.
     */
    data: XOR<LandingContentCreateInput, LandingContentUncheckedCreateInput>
  }

  /**
   * LandingContent createMany
   */
  export type LandingContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LandingContents.
     */
    data: LandingContentCreateManyInput | LandingContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LandingContent createManyAndReturn
   */
  export type LandingContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * The data used to create many LandingContents.
     */
    data: LandingContentCreateManyInput | LandingContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LandingContent update
   */
  export type LandingContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * The data needed to update a LandingContent.
     */
    data: XOR<LandingContentUpdateInput, LandingContentUncheckedUpdateInput>
    /**
     * Choose, which LandingContent to update.
     */
    where: LandingContentWhereUniqueInput
  }

  /**
   * LandingContent updateMany
   */
  export type LandingContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LandingContents.
     */
    data: XOR<LandingContentUpdateManyMutationInput, LandingContentUncheckedUpdateManyInput>
    /**
     * Filter which LandingContents to update
     */
    where?: LandingContentWhereInput
    /**
     * Limit how many LandingContents to update.
     */
    limit?: number
  }

  /**
   * LandingContent updateManyAndReturn
   */
  export type LandingContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * The data used to update LandingContents.
     */
    data: XOR<LandingContentUpdateManyMutationInput, LandingContentUncheckedUpdateManyInput>
    /**
     * Filter which LandingContents to update
     */
    where?: LandingContentWhereInput
    /**
     * Limit how many LandingContents to update.
     */
    limit?: number
  }

  /**
   * LandingContent upsert
   */
  export type LandingContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * The filter to search for the LandingContent to update in case it exists.
     */
    where: LandingContentWhereUniqueInput
    /**
     * In case the LandingContent found by the `where` argument doesn't exist, create a new LandingContent with this data.
     */
    create: XOR<LandingContentCreateInput, LandingContentUncheckedCreateInput>
    /**
     * In case the LandingContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandingContentUpdateInput, LandingContentUncheckedUpdateInput>
  }

  /**
   * LandingContent delete
   */
  export type LandingContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter which LandingContent to delete.
     */
    where: LandingContentWhereUniqueInput
  }

  /**
   * LandingContent deleteMany
   */
  export type LandingContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandingContents to delete
     */
    where?: LandingContentWhereInput
    /**
     * Limit how many LandingContents to delete.
     */
    limit?: number
  }

  /**
   * LandingContent without action
   */
  export type LandingContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    preferredLanguage: 'preferredLanguage',
    preferredTheme: 'preferredTheme',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PromptTypeScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name_i18n: 'name_i18n',
    description_i18n: 'description_i18n',
    rolePrompt: 'rolePrompt',
    isActive: 'isActive',
    suggestedKeywords: 'suggestedKeywords',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromptTypeScalarFieldEnum = (typeof PromptTypeScalarFieldEnum)[keyof typeof PromptTypeScalarFieldEnum]


  export const PromptFieldScalarFieldEnum: {
    id: 'id',
    promptTypeId: 'promptTypeId',
    key: 'key',
    type: 'type',
    label_i18n: 'label_i18n',
    placeholder_i18n: 'placeholder_i18n',
    required: 'required',
    order: 'order',
    options: 'options',
    rules: 'rules',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromptFieldScalarFieldEnum = (typeof PromptFieldScalarFieldEnum)[keyof typeof PromptFieldScalarFieldEnum]


  export const PromptScalarFieldEnum: {
    id: 'id',
    title: 'title',
    userId: 'userId',
    promptTypeId: 'promptTypeId',
    inputs: 'inputs',
    finalPrompt: 'finalPrompt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromptScalarFieldEnum = (typeof PromptScalarFieldEnum)[keyof typeof PromptScalarFieldEnum]


  export const GlobalKeywordScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GlobalKeywordScalarFieldEnum = (typeof GlobalKeywordScalarFieldEnum)[keyof typeof GlobalKeywordScalarFieldEnum]


  export const AIModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    providerId: 'providerId',
    modelId: 'modelId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AIModelScalarFieldEnum = (typeof AIModelScalarFieldEnum)[keyof typeof AIModelScalarFieldEnum]


  export const AILogScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    response: 'response',
    modelId: 'modelId',
    providerId: 'providerId',
    type: 'type',
    userId: 'userId',
    tokensIn: 'tokensIn',
    tokensOut: 'tokensOut',
    durationMs: 'durationMs',
    createdAt: 'createdAt'
  };

  export type AILogScalarFieldEnum = (typeof AILogScalarFieldEnum)[keyof typeof AILogScalarFieldEnum]


  export const LandingContentScalarFieldEnum: {
    id: 'id',
    section: 'section',
    key: 'key',
    content: 'content',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LandingContentScalarFieldEnum = (typeof LandingContentScalarFieldEnum)[keyof typeof LandingContentScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    preferredLanguage?: StringNullableFilter<"User"> | string | null
    preferredTheme?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    prompts?: PromptListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    preferredLanguage?: SortOrderInput | SortOrder
    preferredTheme?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prompts?: PromptOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    preferredLanguage?: StringNullableFilter<"User"> | string | null
    preferredTheme?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    prompts?: PromptListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    preferredLanguage?: SortOrderInput | SortOrder
    preferredTheme?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    preferredLanguage?: StringNullableWithAggregatesFilter<"User"> | string | null
    preferredTheme?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PromptTypeWhereInput = {
    AND?: PromptTypeWhereInput | PromptTypeWhereInput[]
    OR?: PromptTypeWhereInput[]
    NOT?: PromptTypeWhereInput | PromptTypeWhereInput[]
    id?: StringFilter<"PromptType"> | string
    key?: StringFilter<"PromptType"> | string
    name_i18n?: JsonFilter<"PromptType">
    description_i18n?: JsonNullableFilter<"PromptType">
    rolePrompt?: StringFilter<"PromptType"> | string
    isActive?: BoolFilter<"PromptType"> | boolean
    suggestedKeywords?: JsonNullableFilter<"PromptType">
    createdAt?: DateTimeFilter<"PromptType"> | Date | string
    updatedAt?: DateTimeFilter<"PromptType"> | Date | string
    fields?: PromptFieldListRelationFilter
    prompts?: PromptListRelationFilter
  }

  export type PromptTypeOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name_i18n?: SortOrder
    description_i18n?: SortOrderInput | SortOrder
    rolePrompt?: SortOrder
    isActive?: SortOrder
    suggestedKeywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fields?: PromptFieldOrderByRelationAggregateInput
    prompts?: PromptOrderByRelationAggregateInput
  }

  export type PromptTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: PromptTypeWhereInput | PromptTypeWhereInput[]
    OR?: PromptTypeWhereInput[]
    NOT?: PromptTypeWhereInput | PromptTypeWhereInput[]
    name_i18n?: JsonFilter<"PromptType">
    description_i18n?: JsonNullableFilter<"PromptType">
    rolePrompt?: StringFilter<"PromptType"> | string
    isActive?: BoolFilter<"PromptType"> | boolean
    suggestedKeywords?: JsonNullableFilter<"PromptType">
    createdAt?: DateTimeFilter<"PromptType"> | Date | string
    updatedAt?: DateTimeFilter<"PromptType"> | Date | string
    fields?: PromptFieldListRelationFilter
    prompts?: PromptListRelationFilter
  }, "id" | "key">

  export type PromptTypeOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name_i18n?: SortOrder
    description_i18n?: SortOrderInput | SortOrder
    rolePrompt?: SortOrder
    isActive?: SortOrder
    suggestedKeywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptTypeCountOrderByAggregateInput
    _max?: PromptTypeMaxOrderByAggregateInput
    _min?: PromptTypeMinOrderByAggregateInput
  }

  export type PromptTypeScalarWhereWithAggregatesInput = {
    AND?: PromptTypeScalarWhereWithAggregatesInput | PromptTypeScalarWhereWithAggregatesInput[]
    OR?: PromptTypeScalarWhereWithAggregatesInput[]
    NOT?: PromptTypeScalarWhereWithAggregatesInput | PromptTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromptType"> | string
    key?: StringWithAggregatesFilter<"PromptType"> | string
    name_i18n?: JsonWithAggregatesFilter<"PromptType">
    description_i18n?: JsonNullableWithAggregatesFilter<"PromptType">
    rolePrompt?: StringWithAggregatesFilter<"PromptType"> | string
    isActive?: BoolWithAggregatesFilter<"PromptType"> | boolean
    suggestedKeywords?: JsonNullableWithAggregatesFilter<"PromptType">
    createdAt?: DateTimeWithAggregatesFilter<"PromptType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PromptType"> | Date | string
  }

  export type PromptFieldWhereInput = {
    AND?: PromptFieldWhereInput | PromptFieldWhereInput[]
    OR?: PromptFieldWhereInput[]
    NOT?: PromptFieldWhereInput | PromptFieldWhereInput[]
    id?: StringFilter<"PromptField"> | string
    promptTypeId?: StringFilter<"PromptField"> | string
    key?: StringFilter<"PromptField"> | string
    type?: StringFilter<"PromptField"> | string
    label_i18n?: JsonFilter<"PromptField">
    placeholder_i18n?: JsonNullableFilter<"PromptField">
    required?: BoolFilter<"PromptField"> | boolean
    order?: IntFilter<"PromptField"> | number
    options?: JsonNullableFilter<"PromptField">
    rules?: JsonNullableFilter<"PromptField">
    createdAt?: DateTimeFilter<"PromptField"> | Date | string
    updatedAt?: DateTimeFilter<"PromptField"> | Date | string
    promptType?: XOR<PromptTypeScalarRelationFilter, PromptTypeWhereInput>
  }

  export type PromptFieldOrderByWithRelationInput = {
    id?: SortOrder
    promptTypeId?: SortOrder
    key?: SortOrder
    type?: SortOrder
    label_i18n?: SortOrder
    placeholder_i18n?: SortOrderInput | SortOrder
    required?: SortOrder
    order?: SortOrder
    options?: SortOrderInput | SortOrder
    rules?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    promptType?: PromptTypeOrderByWithRelationInput
  }

  export type PromptFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    promptTypeId_key?: PromptFieldPromptTypeIdKeyCompoundUniqueInput
    AND?: PromptFieldWhereInput | PromptFieldWhereInput[]
    OR?: PromptFieldWhereInput[]
    NOT?: PromptFieldWhereInput | PromptFieldWhereInput[]
    promptTypeId?: StringFilter<"PromptField"> | string
    key?: StringFilter<"PromptField"> | string
    type?: StringFilter<"PromptField"> | string
    label_i18n?: JsonFilter<"PromptField">
    placeholder_i18n?: JsonNullableFilter<"PromptField">
    required?: BoolFilter<"PromptField"> | boolean
    order?: IntFilter<"PromptField"> | number
    options?: JsonNullableFilter<"PromptField">
    rules?: JsonNullableFilter<"PromptField">
    createdAt?: DateTimeFilter<"PromptField"> | Date | string
    updatedAt?: DateTimeFilter<"PromptField"> | Date | string
    promptType?: XOR<PromptTypeScalarRelationFilter, PromptTypeWhereInput>
  }, "id" | "promptTypeId_key">

  export type PromptFieldOrderByWithAggregationInput = {
    id?: SortOrder
    promptTypeId?: SortOrder
    key?: SortOrder
    type?: SortOrder
    label_i18n?: SortOrder
    placeholder_i18n?: SortOrderInput | SortOrder
    required?: SortOrder
    order?: SortOrder
    options?: SortOrderInput | SortOrder
    rules?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptFieldCountOrderByAggregateInput
    _avg?: PromptFieldAvgOrderByAggregateInput
    _max?: PromptFieldMaxOrderByAggregateInput
    _min?: PromptFieldMinOrderByAggregateInput
    _sum?: PromptFieldSumOrderByAggregateInput
  }

  export type PromptFieldScalarWhereWithAggregatesInput = {
    AND?: PromptFieldScalarWhereWithAggregatesInput | PromptFieldScalarWhereWithAggregatesInput[]
    OR?: PromptFieldScalarWhereWithAggregatesInput[]
    NOT?: PromptFieldScalarWhereWithAggregatesInput | PromptFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromptField"> | string
    promptTypeId?: StringWithAggregatesFilter<"PromptField"> | string
    key?: StringWithAggregatesFilter<"PromptField"> | string
    type?: StringWithAggregatesFilter<"PromptField"> | string
    label_i18n?: JsonWithAggregatesFilter<"PromptField">
    placeholder_i18n?: JsonNullableWithAggregatesFilter<"PromptField">
    required?: BoolWithAggregatesFilter<"PromptField"> | boolean
    order?: IntWithAggregatesFilter<"PromptField"> | number
    options?: JsonNullableWithAggregatesFilter<"PromptField">
    rules?: JsonNullableWithAggregatesFilter<"PromptField">
    createdAt?: DateTimeWithAggregatesFilter<"PromptField"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PromptField"> | Date | string
  }

  export type PromptWhereInput = {
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    id?: StringFilter<"Prompt"> | string
    title?: StringFilter<"Prompt"> | string
    userId?: StringFilter<"Prompt"> | string
    promptTypeId?: StringFilter<"Prompt"> | string
    inputs?: JsonFilter<"Prompt">
    finalPrompt?: StringFilter<"Prompt"> | string
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    promptType?: XOR<PromptTypeScalarRelationFilter, PromptTypeWhereInput>
  }

  export type PromptOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    promptTypeId?: SortOrder
    inputs?: SortOrder
    finalPrompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    promptType?: PromptTypeOrderByWithRelationInput
  }

  export type PromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    title?: StringFilter<"Prompt"> | string
    userId?: StringFilter<"Prompt"> | string
    promptTypeId?: StringFilter<"Prompt"> | string
    inputs?: JsonFilter<"Prompt">
    finalPrompt?: StringFilter<"Prompt"> | string
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    promptType?: XOR<PromptTypeScalarRelationFilter, PromptTypeWhereInput>
  }, "id">

  export type PromptOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    promptTypeId?: SortOrder
    inputs?: SortOrder
    finalPrompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptCountOrderByAggregateInput
    _max?: PromptMaxOrderByAggregateInput
    _min?: PromptMinOrderByAggregateInput
  }

  export type PromptScalarWhereWithAggregatesInput = {
    AND?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    OR?: PromptScalarWhereWithAggregatesInput[]
    NOT?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prompt"> | string
    title?: StringWithAggregatesFilter<"Prompt"> | string
    userId?: StringWithAggregatesFilter<"Prompt"> | string
    promptTypeId?: StringWithAggregatesFilter<"Prompt"> | string
    inputs?: JsonWithAggregatesFilter<"Prompt">
    finalPrompt?: StringWithAggregatesFilter<"Prompt"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
  }

  export type GlobalKeywordWhereInput = {
    AND?: GlobalKeywordWhereInput | GlobalKeywordWhereInput[]
    OR?: GlobalKeywordWhereInput[]
    NOT?: GlobalKeywordWhereInput | GlobalKeywordWhereInput[]
    id?: StringFilter<"GlobalKeyword"> | string
    text?: StringFilter<"GlobalKeyword"> | string
    createdAt?: DateTimeFilter<"GlobalKeyword"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalKeyword"> | Date | string
  }

  export type GlobalKeywordOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalKeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    text?: string
    AND?: GlobalKeywordWhereInput | GlobalKeywordWhereInput[]
    OR?: GlobalKeywordWhereInput[]
    NOT?: GlobalKeywordWhereInput | GlobalKeywordWhereInput[]
    createdAt?: DateTimeFilter<"GlobalKeyword"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalKeyword"> | Date | string
  }, "id" | "text">

  export type GlobalKeywordOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GlobalKeywordCountOrderByAggregateInput
    _max?: GlobalKeywordMaxOrderByAggregateInput
    _min?: GlobalKeywordMinOrderByAggregateInput
  }

  export type GlobalKeywordScalarWhereWithAggregatesInput = {
    AND?: GlobalKeywordScalarWhereWithAggregatesInput | GlobalKeywordScalarWhereWithAggregatesInput[]
    OR?: GlobalKeywordScalarWhereWithAggregatesInput[]
    NOT?: GlobalKeywordScalarWhereWithAggregatesInput | GlobalKeywordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalKeyword"> | string
    text?: StringWithAggregatesFilter<"GlobalKeyword"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GlobalKeyword"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlobalKeyword"> | Date | string
  }

  export type AIModelWhereInput = {
    AND?: AIModelWhereInput | AIModelWhereInput[]
    OR?: AIModelWhereInput[]
    NOT?: AIModelWhereInput | AIModelWhereInput[]
    id?: StringFilter<"AIModel"> | string
    name?: StringFilter<"AIModel"> | string
    providerId?: StringFilter<"AIModel"> | string
    modelId?: StringFilter<"AIModel"> | string
    isActive?: BoolFilter<"AIModel"> | boolean
    createdAt?: DateTimeFilter<"AIModel"> | Date | string
    updatedAt?: DateTimeFilter<"AIModel"> | Date | string
  }

  export type AIModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    modelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId_modelId?: AIModelProviderIdModelIdCompoundUniqueInput
    AND?: AIModelWhereInput | AIModelWhereInput[]
    OR?: AIModelWhereInput[]
    NOT?: AIModelWhereInput | AIModelWhereInput[]
    name?: StringFilter<"AIModel"> | string
    providerId?: StringFilter<"AIModel"> | string
    modelId?: StringFilter<"AIModel"> | string
    isActive?: BoolFilter<"AIModel"> | boolean
    createdAt?: DateTimeFilter<"AIModel"> | Date | string
    updatedAt?: DateTimeFilter<"AIModel"> | Date | string
  }, "id" | "providerId_modelId">

  export type AIModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    modelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AIModelCountOrderByAggregateInput
    _max?: AIModelMaxOrderByAggregateInput
    _min?: AIModelMinOrderByAggregateInput
  }

  export type AIModelScalarWhereWithAggregatesInput = {
    AND?: AIModelScalarWhereWithAggregatesInput | AIModelScalarWhereWithAggregatesInput[]
    OR?: AIModelScalarWhereWithAggregatesInput[]
    NOT?: AIModelScalarWhereWithAggregatesInput | AIModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIModel"> | string
    name?: StringWithAggregatesFilter<"AIModel"> | string
    providerId?: StringWithAggregatesFilter<"AIModel"> | string
    modelId?: StringWithAggregatesFilter<"AIModel"> | string
    isActive?: BoolWithAggregatesFilter<"AIModel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AIModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIModel"> | Date | string
  }

  export type AILogWhereInput = {
    AND?: AILogWhereInput | AILogWhereInput[]
    OR?: AILogWhereInput[]
    NOT?: AILogWhereInput | AILogWhereInput[]
    id?: StringFilter<"AILog"> | string
    prompt?: StringFilter<"AILog"> | string
    response?: StringFilter<"AILog"> | string
    modelId?: StringFilter<"AILog"> | string
    providerId?: StringFilter<"AILog"> | string
    type?: StringFilter<"AILog"> | string
    userId?: StringNullableFilter<"AILog"> | string | null
    tokensIn?: IntNullableFilter<"AILog"> | number | null
    tokensOut?: IntNullableFilter<"AILog"> | number | null
    durationMs?: IntNullableFilter<"AILog"> | number | null
    createdAt?: DateTimeFilter<"AILog"> | Date | string
  }

  export type AILogOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    modelId?: SortOrder
    providerId?: SortOrder
    type?: SortOrder
    userId?: SortOrderInput | SortOrder
    tokensIn?: SortOrderInput | SortOrder
    tokensOut?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AILogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AILogWhereInput | AILogWhereInput[]
    OR?: AILogWhereInput[]
    NOT?: AILogWhereInput | AILogWhereInput[]
    prompt?: StringFilter<"AILog"> | string
    response?: StringFilter<"AILog"> | string
    modelId?: StringFilter<"AILog"> | string
    providerId?: StringFilter<"AILog"> | string
    type?: StringFilter<"AILog"> | string
    userId?: StringNullableFilter<"AILog"> | string | null
    tokensIn?: IntNullableFilter<"AILog"> | number | null
    tokensOut?: IntNullableFilter<"AILog"> | number | null
    durationMs?: IntNullableFilter<"AILog"> | number | null
    createdAt?: DateTimeFilter<"AILog"> | Date | string
  }, "id">

  export type AILogOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    modelId?: SortOrder
    providerId?: SortOrder
    type?: SortOrder
    userId?: SortOrderInput | SortOrder
    tokensIn?: SortOrderInput | SortOrder
    tokensOut?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AILogCountOrderByAggregateInput
    _avg?: AILogAvgOrderByAggregateInput
    _max?: AILogMaxOrderByAggregateInput
    _min?: AILogMinOrderByAggregateInput
    _sum?: AILogSumOrderByAggregateInput
  }

  export type AILogScalarWhereWithAggregatesInput = {
    AND?: AILogScalarWhereWithAggregatesInput | AILogScalarWhereWithAggregatesInput[]
    OR?: AILogScalarWhereWithAggregatesInput[]
    NOT?: AILogScalarWhereWithAggregatesInput | AILogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AILog"> | string
    prompt?: StringWithAggregatesFilter<"AILog"> | string
    response?: StringWithAggregatesFilter<"AILog"> | string
    modelId?: StringWithAggregatesFilter<"AILog"> | string
    providerId?: StringWithAggregatesFilter<"AILog"> | string
    type?: StringWithAggregatesFilter<"AILog"> | string
    userId?: StringNullableWithAggregatesFilter<"AILog"> | string | null
    tokensIn?: IntNullableWithAggregatesFilter<"AILog"> | number | null
    tokensOut?: IntNullableWithAggregatesFilter<"AILog"> | number | null
    durationMs?: IntNullableWithAggregatesFilter<"AILog"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AILog"> | Date | string
  }

  export type LandingContentWhereInput = {
    AND?: LandingContentWhereInput | LandingContentWhereInput[]
    OR?: LandingContentWhereInput[]
    NOT?: LandingContentWhereInput | LandingContentWhereInput[]
    id?: StringFilter<"LandingContent"> | string
    section?: StringFilter<"LandingContent"> | string
    key?: StringFilter<"LandingContent"> | string
    content?: JsonFilter<"LandingContent">
    isActive?: BoolFilter<"LandingContent"> | boolean
    createdAt?: DateTimeFilter<"LandingContent"> | Date | string
    updatedAt?: DateTimeFilter<"LandingContent"> | Date | string
  }

  export type LandingContentOrderByWithRelationInput = {
    id?: SortOrder
    section?: SortOrder
    key?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandingContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    section_key?: LandingContentSectionKeyCompoundUniqueInput
    AND?: LandingContentWhereInput | LandingContentWhereInput[]
    OR?: LandingContentWhereInput[]
    NOT?: LandingContentWhereInput | LandingContentWhereInput[]
    section?: StringFilter<"LandingContent"> | string
    key?: StringFilter<"LandingContent"> | string
    content?: JsonFilter<"LandingContent">
    isActive?: BoolFilter<"LandingContent"> | boolean
    createdAt?: DateTimeFilter<"LandingContent"> | Date | string
    updatedAt?: DateTimeFilter<"LandingContent"> | Date | string
  }, "id" | "section_key">

  export type LandingContentOrderByWithAggregationInput = {
    id?: SortOrder
    section?: SortOrder
    key?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LandingContentCountOrderByAggregateInput
    _max?: LandingContentMaxOrderByAggregateInput
    _min?: LandingContentMinOrderByAggregateInput
  }

  export type LandingContentScalarWhereWithAggregatesInput = {
    AND?: LandingContentScalarWhereWithAggregatesInput | LandingContentScalarWhereWithAggregatesInput[]
    OR?: LandingContentScalarWhereWithAggregatesInput[]
    NOT?: LandingContentScalarWhereWithAggregatesInput | LandingContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LandingContent"> | string
    section?: StringWithAggregatesFilter<"LandingContent"> | string
    key?: StringWithAggregatesFilter<"LandingContent"> | string
    content?: JsonWithAggregatesFilter<"LandingContent">
    isActive?: BoolWithAggregatesFilter<"LandingContent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LandingContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LandingContent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    preferredLanguage?: string | null
    preferredTheme?: string | null
    role?: $Enums.UserRole
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    preferredLanguage?: string | null
    preferredTheme?: string | null
    role?: $Enums.UserRole
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    preferredTheme?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    preferredTheme?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    preferredLanguage?: string | null
    preferredTheme?: string | null
    role?: $Enums.UserRole
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    preferredTheme?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    preferredTheme?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTypeCreateInput = {
    id?: string
    key: string
    name_i18n: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt: string
    isActive?: boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: PromptFieldCreateNestedManyWithoutPromptTypeInput
    prompts?: PromptCreateNestedManyWithoutPromptTypeInput
  }

  export type PromptTypeUncheckedCreateInput = {
    id?: string
    key: string
    name_i18n: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt: string
    isActive?: boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: PromptFieldUncheckedCreateNestedManyWithoutPromptTypeInput
    prompts?: PromptUncheckedCreateNestedManyWithoutPromptTypeInput
  }

  export type PromptTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name_i18n?: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: PromptFieldUpdateManyWithoutPromptTypeNestedInput
    prompts?: PromptUpdateManyWithoutPromptTypeNestedInput
  }

  export type PromptTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name_i18n?: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: PromptFieldUncheckedUpdateManyWithoutPromptTypeNestedInput
    prompts?: PromptUncheckedUpdateManyWithoutPromptTypeNestedInput
  }

  export type PromptTypeCreateManyInput = {
    id?: string
    key: string
    name_i18n: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt: string
    isActive?: boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name_i18n?: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name_i18n?: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptFieldCreateInput = {
    id?: string
    key: string
    type: string
    label_i18n: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: boolean
    order?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    promptType: PromptTypeCreateNestedOneWithoutFieldsInput
  }

  export type PromptFieldUncheckedCreateInput = {
    id?: string
    promptTypeId: string
    key: string
    type: string
    label_i18n: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: boolean
    order?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label_i18n?: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promptType?: PromptTypeUpdateOneRequiredWithoutFieldsNestedInput
  }

  export type PromptFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptTypeId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label_i18n?: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptFieldCreateManyInput = {
    id?: string
    promptTypeId: string
    key: string
    type: string
    label_i18n: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: boolean
    order?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label_i18n?: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptTypeId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label_i18n?: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptCreateInput = {
    id?: string
    title: string
    inputs: JsonNullValueInput | InputJsonValue
    finalPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPromptsInput
    promptType: PromptTypeCreateNestedOneWithoutPromptsInput
  }

  export type PromptUncheckedCreateInput = {
    id?: string
    title: string
    userId: string
    promptTypeId: string
    inputs: JsonNullValueInput | InputJsonValue
    finalPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    inputs?: JsonNullValueInput | InputJsonValue
    finalPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPromptsNestedInput
    promptType?: PromptTypeUpdateOneRequiredWithoutPromptsNestedInput
  }

  export type PromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    promptTypeId?: StringFieldUpdateOperationsInput | string
    inputs?: JsonNullValueInput | InputJsonValue
    finalPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptCreateManyInput = {
    id?: string
    title: string
    userId: string
    promptTypeId: string
    inputs: JsonNullValueInput | InputJsonValue
    finalPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    inputs?: JsonNullValueInput | InputJsonValue
    finalPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    promptTypeId?: StringFieldUpdateOperationsInput | string
    inputs?: JsonNullValueInput | InputJsonValue
    finalPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalKeywordCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalKeywordUncheckedCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalKeywordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalKeywordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalKeywordCreateManyInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalKeywordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalKeywordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIModelCreateInput = {
    id?: string
    name: string
    providerId: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIModelUncheckedCreateInput = {
    id?: string
    name: string
    providerId: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIModelCreateManyInput = {
    id?: string
    name: string
    providerId: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AILogCreateInput = {
    id?: string
    prompt: string
    response: string
    modelId: string
    providerId: string
    type: string
    userId?: string | null
    tokensIn?: number | null
    tokensOut?: number | null
    durationMs?: number | null
    createdAt?: Date | string
  }

  export type AILogUncheckedCreateInput = {
    id?: string
    prompt: string
    response: string
    modelId: string
    providerId: string
    type: string
    userId?: string | null
    tokensIn?: number | null
    tokensOut?: number | null
    durationMs?: number | null
    createdAt?: Date | string
  }

  export type AILogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    tokensIn?: NullableIntFieldUpdateOperationsInput | number | null
    tokensOut?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AILogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    tokensIn?: NullableIntFieldUpdateOperationsInput | number | null
    tokensOut?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AILogCreateManyInput = {
    id?: string
    prompt: string
    response: string
    modelId: string
    providerId: string
    type: string
    userId?: string | null
    tokensIn?: number | null
    tokensOut?: number | null
    durationMs?: number | null
    createdAt?: Date | string
  }

  export type AILogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    tokensIn?: NullableIntFieldUpdateOperationsInput | number | null
    tokensOut?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AILogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    tokensIn?: NullableIntFieldUpdateOperationsInput | number | null
    tokensOut?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingContentCreateInput = {
    id?: string
    section: string
    key: string
    content: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandingContentUncheckedCreateInput = {
    id?: string
    section: string
    key: string
    content: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandingContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingContentCreateManyInput = {
    id?: string
    section: string
    key: string
    content: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandingContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PromptListRelationFilter = {
    every?: PromptWhereInput
    some?: PromptWhereInput
    none?: PromptWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    preferredLanguage?: SortOrder
    preferredTheme?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    preferredLanguage?: SortOrder
    preferredTheme?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    preferredLanguage?: SortOrder
    preferredTheme?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PromptFieldListRelationFilter = {
    every?: PromptFieldWhereInput
    some?: PromptFieldWhereInput
    none?: PromptFieldWhereInput
  }

  export type PromptFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromptTypeCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name_i18n?: SortOrder
    description_i18n?: SortOrder
    rolePrompt?: SortOrder
    isActive?: SortOrder
    suggestedKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    rolePrompt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTypeMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    rolePrompt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PromptTypeScalarRelationFilter = {
    is?: PromptTypeWhereInput
    isNot?: PromptTypeWhereInput
  }

  export type PromptFieldPromptTypeIdKeyCompoundUniqueInput = {
    promptTypeId: string
    key: string
  }

  export type PromptFieldCountOrderByAggregateInput = {
    id?: SortOrder
    promptTypeId?: SortOrder
    key?: SortOrder
    type?: SortOrder
    label_i18n?: SortOrder
    placeholder_i18n?: SortOrder
    required?: SortOrder
    order?: SortOrder
    options?: SortOrder
    rules?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptFieldAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type PromptFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    promptTypeId?: SortOrder
    key?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptFieldMinOrderByAggregateInput = {
    id?: SortOrder
    promptTypeId?: SortOrder
    key?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptFieldSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PromptCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    promptTypeId?: SortOrder
    inputs?: SortOrder
    finalPrompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    promptTypeId?: SortOrder
    finalPrompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    promptTypeId?: SortOrder
    finalPrompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalKeywordCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalKeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalKeywordMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIModelProviderIdModelIdCompoundUniqueInput = {
    providerId: string
    modelId: string
  }

  export type AIModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    modelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    modelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    modelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AILogCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    modelId?: SortOrder
    providerId?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    tokensIn?: SortOrder
    tokensOut?: SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
  }

  export type AILogAvgOrderByAggregateInput = {
    tokensIn?: SortOrder
    tokensOut?: SortOrder
    durationMs?: SortOrder
  }

  export type AILogMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    modelId?: SortOrder
    providerId?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    tokensIn?: SortOrder
    tokensOut?: SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
  }

  export type AILogMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    modelId?: SortOrder
    providerId?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    tokensIn?: SortOrder
    tokensOut?: SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
  }

  export type AILogSumOrderByAggregateInput = {
    tokensIn?: SortOrder
    tokensOut?: SortOrder
    durationMs?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LandingContentSectionKeyCompoundUniqueInput = {
    section: string
    key: string
  }

  export type LandingContentCountOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    key?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandingContentMaxOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    key?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandingContentMinOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    key?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptCreateNestedManyWithoutUserInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
  }

  export type PromptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PromptUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    upsert?: PromptUpsertWithWhereUniqueWithoutUserInput | PromptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    set?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    disconnect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    delete?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    update?: PromptUpdateWithWhereUniqueWithoutUserInput | PromptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromptUpdateManyWithWhereWithoutUserInput | PromptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromptScalarWhereInput | PromptScalarWhereInput[]
  }

  export type PromptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    upsert?: PromptUpsertWithWhereUniqueWithoutUserInput | PromptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    set?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    disconnect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    delete?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    update?: PromptUpdateWithWhereUniqueWithoutUserInput | PromptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromptUpdateManyWithWhereWithoutUserInput | PromptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromptScalarWhereInput | PromptScalarWhereInput[]
  }

  export type PromptFieldCreateNestedManyWithoutPromptTypeInput = {
    create?: XOR<PromptFieldCreateWithoutPromptTypeInput, PromptFieldUncheckedCreateWithoutPromptTypeInput> | PromptFieldCreateWithoutPromptTypeInput[] | PromptFieldUncheckedCreateWithoutPromptTypeInput[]
    connectOrCreate?: PromptFieldCreateOrConnectWithoutPromptTypeInput | PromptFieldCreateOrConnectWithoutPromptTypeInput[]
    createMany?: PromptFieldCreateManyPromptTypeInputEnvelope
    connect?: PromptFieldWhereUniqueInput | PromptFieldWhereUniqueInput[]
  }

  export type PromptCreateNestedManyWithoutPromptTypeInput = {
    create?: XOR<PromptCreateWithoutPromptTypeInput, PromptUncheckedCreateWithoutPromptTypeInput> | PromptCreateWithoutPromptTypeInput[] | PromptUncheckedCreateWithoutPromptTypeInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutPromptTypeInput | PromptCreateOrConnectWithoutPromptTypeInput[]
    createMany?: PromptCreateManyPromptTypeInputEnvelope
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
  }

  export type PromptFieldUncheckedCreateNestedManyWithoutPromptTypeInput = {
    create?: XOR<PromptFieldCreateWithoutPromptTypeInput, PromptFieldUncheckedCreateWithoutPromptTypeInput> | PromptFieldCreateWithoutPromptTypeInput[] | PromptFieldUncheckedCreateWithoutPromptTypeInput[]
    connectOrCreate?: PromptFieldCreateOrConnectWithoutPromptTypeInput | PromptFieldCreateOrConnectWithoutPromptTypeInput[]
    createMany?: PromptFieldCreateManyPromptTypeInputEnvelope
    connect?: PromptFieldWhereUniqueInput | PromptFieldWhereUniqueInput[]
  }

  export type PromptUncheckedCreateNestedManyWithoutPromptTypeInput = {
    create?: XOR<PromptCreateWithoutPromptTypeInput, PromptUncheckedCreateWithoutPromptTypeInput> | PromptCreateWithoutPromptTypeInput[] | PromptUncheckedCreateWithoutPromptTypeInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutPromptTypeInput | PromptCreateOrConnectWithoutPromptTypeInput[]
    createMany?: PromptCreateManyPromptTypeInputEnvelope
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PromptFieldUpdateManyWithoutPromptTypeNestedInput = {
    create?: XOR<PromptFieldCreateWithoutPromptTypeInput, PromptFieldUncheckedCreateWithoutPromptTypeInput> | PromptFieldCreateWithoutPromptTypeInput[] | PromptFieldUncheckedCreateWithoutPromptTypeInput[]
    connectOrCreate?: PromptFieldCreateOrConnectWithoutPromptTypeInput | PromptFieldCreateOrConnectWithoutPromptTypeInput[]
    upsert?: PromptFieldUpsertWithWhereUniqueWithoutPromptTypeInput | PromptFieldUpsertWithWhereUniqueWithoutPromptTypeInput[]
    createMany?: PromptFieldCreateManyPromptTypeInputEnvelope
    set?: PromptFieldWhereUniqueInput | PromptFieldWhereUniqueInput[]
    disconnect?: PromptFieldWhereUniqueInput | PromptFieldWhereUniqueInput[]
    delete?: PromptFieldWhereUniqueInput | PromptFieldWhereUniqueInput[]
    connect?: PromptFieldWhereUniqueInput | PromptFieldWhereUniqueInput[]
    update?: PromptFieldUpdateWithWhereUniqueWithoutPromptTypeInput | PromptFieldUpdateWithWhereUniqueWithoutPromptTypeInput[]
    updateMany?: PromptFieldUpdateManyWithWhereWithoutPromptTypeInput | PromptFieldUpdateManyWithWhereWithoutPromptTypeInput[]
    deleteMany?: PromptFieldScalarWhereInput | PromptFieldScalarWhereInput[]
  }

  export type PromptUpdateManyWithoutPromptTypeNestedInput = {
    create?: XOR<PromptCreateWithoutPromptTypeInput, PromptUncheckedCreateWithoutPromptTypeInput> | PromptCreateWithoutPromptTypeInput[] | PromptUncheckedCreateWithoutPromptTypeInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutPromptTypeInput | PromptCreateOrConnectWithoutPromptTypeInput[]
    upsert?: PromptUpsertWithWhereUniqueWithoutPromptTypeInput | PromptUpsertWithWhereUniqueWithoutPromptTypeInput[]
    createMany?: PromptCreateManyPromptTypeInputEnvelope
    set?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    disconnect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    delete?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    update?: PromptUpdateWithWhereUniqueWithoutPromptTypeInput | PromptUpdateWithWhereUniqueWithoutPromptTypeInput[]
    updateMany?: PromptUpdateManyWithWhereWithoutPromptTypeInput | PromptUpdateManyWithWhereWithoutPromptTypeInput[]
    deleteMany?: PromptScalarWhereInput | PromptScalarWhereInput[]
  }

  export type PromptFieldUncheckedUpdateManyWithoutPromptTypeNestedInput = {
    create?: XOR<PromptFieldCreateWithoutPromptTypeInput, PromptFieldUncheckedCreateWithoutPromptTypeInput> | PromptFieldCreateWithoutPromptTypeInput[] | PromptFieldUncheckedCreateWithoutPromptTypeInput[]
    connectOrCreate?: PromptFieldCreateOrConnectWithoutPromptTypeInput | PromptFieldCreateOrConnectWithoutPromptTypeInput[]
    upsert?: PromptFieldUpsertWithWhereUniqueWithoutPromptTypeInput | PromptFieldUpsertWithWhereUniqueWithoutPromptTypeInput[]
    createMany?: PromptFieldCreateManyPromptTypeInputEnvelope
    set?: PromptFieldWhereUniqueInput | PromptFieldWhereUniqueInput[]
    disconnect?: PromptFieldWhereUniqueInput | PromptFieldWhereUniqueInput[]
    delete?: PromptFieldWhereUniqueInput | PromptFieldWhereUniqueInput[]
    connect?: PromptFieldWhereUniqueInput | PromptFieldWhereUniqueInput[]
    update?: PromptFieldUpdateWithWhereUniqueWithoutPromptTypeInput | PromptFieldUpdateWithWhereUniqueWithoutPromptTypeInput[]
    updateMany?: PromptFieldUpdateManyWithWhereWithoutPromptTypeInput | PromptFieldUpdateManyWithWhereWithoutPromptTypeInput[]
    deleteMany?: PromptFieldScalarWhereInput | PromptFieldScalarWhereInput[]
  }

  export type PromptUncheckedUpdateManyWithoutPromptTypeNestedInput = {
    create?: XOR<PromptCreateWithoutPromptTypeInput, PromptUncheckedCreateWithoutPromptTypeInput> | PromptCreateWithoutPromptTypeInput[] | PromptUncheckedCreateWithoutPromptTypeInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutPromptTypeInput | PromptCreateOrConnectWithoutPromptTypeInput[]
    upsert?: PromptUpsertWithWhereUniqueWithoutPromptTypeInput | PromptUpsertWithWhereUniqueWithoutPromptTypeInput[]
    createMany?: PromptCreateManyPromptTypeInputEnvelope
    set?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    disconnect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    delete?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    update?: PromptUpdateWithWhereUniqueWithoutPromptTypeInput | PromptUpdateWithWhereUniqueWithoutPromptTypeInput[]
    updateMany?: PromptUpdateManyWithWhereWithoutPromptTypeInput | PromptUpdateManyWithWhereWithoutPromptTypeInput[]
    deleteMany?: PromptScalarWhereInput | PromptScalarWhereInput[]
  }

  export type PromptTypeCreateNestedOneWithoutFieldsInput = {
    create?: XOR<PromptTypeCreateWithoutFieldsInput, PromptTypeUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: PromptTypeCreateOrConnectWithoutFieldsInput
    connect?: PromptTypeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PromptTypeUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<PromptTypeCreateWithoutFieldsInput, PromptTypeUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: PromptTypeCreateOrConnectWithoutFieldsInput
    upsert?: PromptTypeUpsertWithoutFieldsInput
    connect?: PromptTypeWhereUniqueInput
    update?: XOR<XOR<PromptTypeUpdateToOneWithWhereWithoutFieldsInput, PromptTypeUpdateWithoutFieldsInput>, PromptTypeUncheckedUpdateWithoutFieldsInput>
  }

  export type UserCreateNestedOneWithoutPromptsInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    connect?: UserWhereUniqueInput
  }

  export type PromptTypeCreateNestedOneWithoutPromptsInput = {
    create?: XOR<PromptTypeCreateWithoutPromptsInput, PromptTypeUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: PromptTypeCreateOrConnectWithoutPromptsInput
    connect?: PromptTypeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPromptsNestedInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    upsert?: UserUpsertWithoutPromptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPromptsInput, UserUpdateWithoutPromptsInput>, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type PromptTypeUpdateOneRequiredWithoutPromptsNestedInput = {
    create?: XOR<PromptTypeCreateWithoutPromptsInput, PromptTypeUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: PromptTypeCreateOrConnectWithoutPromptsInput
    upsert?: PromptTypeUpsertWithoutPromptsInput
    connect?: PromptTypeWhereUniqueInput
    update?: XOR<XOR<PromptTypeUpdateToOneWithWhereWithoutPromptsInput, PromptTypeUpdateWithoutPromptsInput>, PromptTypeUncheckedUpdateWithoutPromptsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PromptCreateWithoutUserInput = {
    id?: string
    title: string
    inputs: JsonNullValueInput | InputJsonValue
    finalPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    promptType: PromptTypeCreateNestedOneWithoutPromptsInput
  }

  export type PromptUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    promptTypeId: string
    inputs: JsonNullValueInput | InputJsonValue
    finalPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptCreateOrConnectWithoutUserInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput>
  }

  export type PromptCreateManyUserInputEnvelope = {
    data: PromptCreateManyUserInput | PromptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PromptUpsertWithWhereUniqueWithoutUserInput = {
    where: PromptWhereUniqueInput
    update: XOR<PromptUpdateWithoutUserInput, PromptUncheckedUpdateWithoutUserInput>
    create: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput>
  }

  export type PromptUpdateWithWhereUniqueWithoutUserInput = {
    where: PromptWhereUniqueInput
    data: XOR<PromptUpdateWithoutUserInput, PromptUncheckedUpdateWithoutUserInput>
  }

  export type PromptUpdateManyWithWhereWithoutUserInput = {
    where: PromptScalarWhereInput
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyWithoutUserInput>
  }

  export type PromptScalarWhereInput = {
    AND?: PromptScalarWhereInput | PromptScalarWhereInput[]
    OR?: PromptScalarWhereInput[]
    NOT?: PromptScalarWhereInput | PromptScalarWhereInput[]
    id?: StringFilter<"Prompt"> | string
    title?: StringFilter<"Prompt"> | string
    userId?: StringFilter<"Prompt"> | string
    promptTypeId?: StringFilter<"Prompt"> | string
    inputs?: JsonFilter<"Prompt">
    finalPrompt?: StringFilter<"Prompt"> | string
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
  }

  export type PromptFieldCreateWithoutPromptTypeInput = {
    id?: string
    key: string
    type: string
    label_i18n: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: boolean
    order?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptFieldUncheckedCreateWithoutPromptTypeInput = {
    id?: string
    key: string
    type: string
    label_i18n: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: boolean
    order?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptFieldCreateOrConnectWithoutPromptTypeInput = {
    where: PromptFieldWhereUniqueInput
    create: XOR<PromptFieldCreateWithoutPromptTypeInput, PromptFieldUncheckedCreateWithoutPromptTypeInput>
  }

  export type PromptFieldCreateManyPromptTypeInputEnvelope = {
    data: PromptFieldCreateManyPromptTypeInput | PromptFieldCreateManyPromptTypeInput[]
    skipDuplicates?: boolean
  }

  export type PromptCreateWithoutPromptTypeInput = {
    id?: string
    title: string
    inputs: JsonNullValueInput | InputJsonValue
    finalPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPromptsInput
  }

  export type PromptUncheckedCreateWithoutPromptTypeInput = {
    id?: string
    title: string
    userId: string
    inputs: JsonNullValueInput | InputJsonValue
    finalPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptCreateOrConnectWithoutPromptTypeInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutPromptTypeInput, PromptUncheckedCreateWithoutPromptTypeInput>
  }

  export type PromptCreateManyPromptTypeInputEnvelope = {
    data: PromptCreateManyPromptTypeInput | PromptCreateManyPromptTypeInput[]
    skipDuplicates?: boolean
  }

  export type PromptFieldUpsertWithWhereUniqueWithoutPromptTypeInput = {
    where: PromptFieldWhereUniqueInput
    update: XOR<PromptFieldUpdateWithoutPromptTypeInput, PromptFieldUncheckedUpdateWithoutPromptTypeInput>
    create: XOR<PromptFieldCreateWithoutPromptTypeInput, PromptFieldUncheckedCreateWithoutPromptTypeInput>
  }

  export type PromptFieldUpdateWithWhereUniqueWithoutPromptTypeInput = {
    where: PromptFieldWhereUniqueInput
    data: XOR<PromptFieldUpdateWithoutPromptTypeInput, PromptFieldUncheckedUpdateWithoutPromptTypeInput>
  }

  export type PromptFieldUpdateManyWithWhereWithoutPromptTypeInput = {
    where: PromptFieldScalarWhereInput
    data: XOR<PromptFieldUpdateManyMutationInput, PromptFieldUncheckedUpdateManyWithoutPromptTypeInput>
  }

  export type PromptFieldScalarWhereInput = {
    AND?: PromptFieldScalarWhereInput | PromptFieldScalarWhereInput[]
    OR?: PromptFieldScalarWhereInput[]
    NOT?: PromptFieldScalarWhereInput | PromptFieldScalarWhereInput[]
    id?: StringFilter<"PromptField"> | string
    promptTypeId?: StringFilter<"PromptField"> | string
    key?: StringFilter<"PromptField"> | string
    type?: StringFilter<"PromptField"> | string
    label_i18n?: JsonFilter<"PromptField">
    placeholder_i18n?: JsonNullableFilter<"PromptField">
    required?: BoolFilter<"PromptField"> | boolean
    order?: IntFilter<"PromptField"> | number
    options?: JsonNullableFilter<"PromptField">
    rules?: JsonNullableFilter<"PromptField">
    createdAt?: DateTimeFilter<"PromptField"> | Date | string
    updatedAt?: DateTimeFilter<"PromptField"> | Date | string
  }

  export type PromptUpsertWithWhereUniqueWithoutPromptTypeInput = {
    where: PromptWhereUniqueInput
    update: XOR<PromptUpdateWithoutPromptTypeInput, PromptUncheckedUpdateWithoutPromptTypeInput>
    create: XOR<PromptCreateWithoutPromptTypeInput, PromptUncheckedCreateWithoutPromptTypeInput>
  }

  export type PromptUpdateWithWhereUniqueWithoutPromptTypeInput = {
    where: PromptWhereUniqueInput
    data: XOR<PromptUpdateWithoutPromptTypeInput, PromptUncheckedUpdateWithoutPromptTypeInput>
  }

  export type PromptUpdateManyWithWhereWithoutPromptTypeInput = {
    where: PromptScalarWhereInput
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyWithoutPromptTypeInput>
  }

  export type PromptTypeCreateWithoutFieldsInput = {
    id?: string
    key: string
    name_i18n: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt: string
    isActive?: boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutPromptTypeInput
  }

  export type PromptTypeUncheckedCreateWithoutFieldsInput = {
    id?: string
    key: string
    name_i18n: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt: string
    isActive?: boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutPromptTypeInput
  }

  export type PromptTypeCreateOrConnectWithoutFieldsInput = {
    where: PromptTypeWhereUniqueInput
    create: XOR<PromptTypeCreateWithoutFieldsInput, PromptTypeUncheckedCreateWithoutFieldsInput>
  }

  export type PromptTypeUpsertWithoutFieldsInput = {
    update: XOR<PromptTypeUpdateWithoutFieldsInput, PromptTypeUncheckedUpdateWithoutFieldsInput>
    create: XOR<PromptTypeCreateWithoutFieldsInput, PromptTypeUncheckedCreateWithoutFieldsInput>
    where?: PromptTypeWhereInput
  }

  export type PromptTypeUpdateToOneWithWhereWithoutFieldsInput = {
    where?: PromptTypeWhereInput
    data: XOR<PromptTypeUpdateWithoutFieldsInput, PromptTypeUncheckedUpdateWithoutFieldsInput>
  }

  export type PromptTypeUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name_i18n?: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutPromptTypeNestedInput
  }

  export type PromptTypeUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name_i18n?: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutPromptTypeNestedInput
  }

  export type UserCreateWithoutPromptsInput = {
    id?: string
    email: string
    name?: string | null
    preferredLanguage?: string | null
    preferredTheme?: string | null
    role?: $Enums.UserRole
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPromptsInput = {
    id?: string
    email: string
    name?: string | null
    preferredLanguage?: string | null
    preferredTheme?: string | null
    role?: $Enums.UserRole
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPromptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
  }

  export type PromptTypeCreateWithoutPromptsInput = {
    id?: string
    key: string
    name_i18n: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt: string
    isActive?: boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: PromptFieldCreateNestedManyWithoutPromptTypeInput
  }

  export type PromptTypeUncheckedCreateWithoutPromptsInput = {
    id?: string
    key: string
    name_i18n: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt: string
    isActive?: boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: PromptFieldUncheckedCreateNestedManyWithoutPromptTypeInput
  }

  export type PromptTypeCreateOrConnectWithoutPromptsInput = {
    where: PromptTypeWhereUniqueInput
    create: XOR<PromptTypeCreateWithoutPromptsInput, PromptTypeUncheckedCreateWithoutPromptsInput>
  }

  export type UserUpsertWithoutPromptsInput = {
    update: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPromptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type UserUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    preferredTheme?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    preferredTheme?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTypeUpsertWithoutPromptsInput = {
    update: XOR<PromptTypeUpdateWithoutPromptsInput, PromptTypeUncheckedUpdateWithoutPromptsInput>
    create: XOR<PromptTypeCreateWithoutPromptsInput, PromptTypeUncheckedCreateWithoutPromptsInput>
    where?: PromptTypeWhereInput
  }

  export type PromptTypeUpdateToOneWithWhereWithoutPromptsInput = {
    where?: PromptTypeWhereInput
    data: XOR<PromptTypeUpdateWithoutPromptsInput, PromptTypeUncheckedUpdateWithoutPromptsInput>
  }

  export type PromptTypeUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name_i18n?: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: PromptFieldUpdateManyWithoutPromptTypeNestedInput
  }

  export type PromptTypeUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name_i18n?: JsonNullValueInput | InputJsonValue
    description_i18n?: NullableJsonNullValueInput | InputJsonValue
    rolePrompt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    suggestedKeywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: PromptFieldUncheckedUpdateManyWithoutPromptTypeNestedInput
  }

  export type PromptCreateManyUserInput = {
    id?: string
    title: string
    promptTypeId: string
    inputs: JsonNullValueInput | InputJsonValue
    finalPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    inputs?: JsonNullValueInput | InputJsonValue
    finalPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promptType?: PromptTypeUpdateOneRequiredWithoutPromptsNestedInput
  }

  export type PromptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    promptTypeId?: StringFieldUpdateOperationsInput | string
    inputs?: JsonNullValueInput | InputJsonValue
    finalPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    promptTypeId?: StringFieldUpdateOperationsInput | string
    inputs?: JsonNullValueInput | InputJsonValue
    finalPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptFieldCreateManyPromptTypeInput = {
    id?: string
    key: string
    type: string
    label_i18n: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: boolean
    order?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptCreateManyPromptTypeInput = {
    id?: string
    title: string
    userId: string
    inputs: JsonNullValueInput | InputJsonValue
    finalPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptFieldUpdateWithoutPromptTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label_i18n?: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptFieldUncheckedUpdateWithoutPromptTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label_i18n?: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptFieldUncheckedUpdateManyWithoutPromptTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label_i18n?: JsonNullValueInput | InputJsonValue
    placeholder_i18n?: NullableJsonNullValueInput | InputJsonValue
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUpdateWithoutPromptTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    inputs?: JsonNullValueInput | InputJsonValue
    finalPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPromptsNestedInput
  }

  export type PromptUncheckedUpdateWithoutPromptTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inputs?: JsonNullValueInput | InputJsonValue
    finalPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateManyWithoutPromptTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inputs?: JsonNullValueInput | InputJsonValue
    finalPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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