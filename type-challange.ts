//  Challange 1
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Challange 2
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Challange 3 - Tuples to object

type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P;
};

type Tuple = ["name", "age", "email"];
type MyObject = TupleToObject<Tuple>;

// Challange 4 - Implement a generic that takes an Array of T and returns its first element;
type First<T extends any[]> = T extends [] ? never : T[0];
// --- alternative better method
type First1<T extends unknown[]> = T["length"] extends 0 ? never : T[0];
type First2<T extends unknown[]> = T extends [infer Head, ...infer _] ? Head : never;

// Challange 4 boost- Implement a generic that takes an Array of T and returns its last element;
// type Last<T extends unknown[]> = T extends [...any, infer Last] ? Last : never;

// Challange 5 - Length of tuple
type Length<T extends readonly unknown[]> = T["length"];

// Challange 6 - Exclude ||| type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
type MyExclude<T, U> = T extends U ? never : T;

// Challange 7 - Awaited
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : T;

type SomeType = number;

// type MyConditional = SomeType extends string ? string : null;

/// Challange 7 - If
type If<C extends boolean, T, F> = C extends true ? T : F;

/// Challange 8 - Concat
type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U];

type FillArray<T, N extends number, A extends any[] = []> = A["length"] extends N
  ? A
  : FillArray<T, N, [...A, T]>;

interface LengthWise {
  length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
