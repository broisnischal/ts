type Return = boolean extends true ? 1 : 0;
//   ^?

const func = (check: boolean) => {
  return "asdf" as const;
};

const whatever = {};

type ReturnTyepe<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type something = FakeReturnTyepe<typeof func>;
//   ^?

type Result2 = typeof whatever extends (...args: any[]) => infer R ? R : never;
//   ^?

type Something = "asdfasdfasd" | Result2 | 3214324;
//     ^?

type FakeReturnTyepe<T> = T extends ((...args: any) => infer R extends string)
  ? `${R}_return_type`
  : never;

// type GetFromDeepObject<T> = T extends { [key: string]: infer R } ? R : never;
type GetFromDeepObject<T> = T extends {
  a: {
    b: {
      c: infer C;
    };
  };
}
  ? C
  : never;

type C = GetFromDeepObject<{
  a: {
    b: {
      d: boolean;
    };
  };
}>;

type Letters = "a" | "b" | "c";

// type MyExclude<T, U> = T extends U ? never : T;

// type Result = MyExclude<"a" | "b" | "c", "a">;

type WithoutC<T> = T extends "c" ? never : T;

type Result = WithoutC<Letters>;
//    ^?

// type NameOrId<T> = T extends string ? { name: T } : { id: T };

// type Name = NameOrId<string>;
// type Id = NameOrId<number>;
