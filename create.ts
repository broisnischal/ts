type CustomPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

function f() {
  return { x: 10, y: "hello" };
}

type P = ReturnType<typeof f>;

type Person = {
  name: string;
  age: number;
  alive: boolean;
};

type Age = Person["age"];

type I1 = Person["age" | "name"];
type I2 = Person[keyof Person];

// @ts-expect-error
const obj: I2 = {
  name: "asdf",
};

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;
//   ^?

type ReturnTypee<T> = T extends (...args: any[]) => infer R ? R : any;

function greet(): string | number {
  return "Good morning, Folks!";
}

type Greeting = ReturnTypee<typeof greet>;

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   throw "unimplemented";
// }

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends string | number>(nameOrId: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");

let b = createLabel(123);

type COmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type personWithOutAlive = COmit<Person, "alive">;

type CExclude<T, K> = T extends K ? never : T;

type mytype = string | number;

type mytype2 = CExclude<mytype, string>;

// @ts-expect-error
type MessageOf<T> = T["message"];

type MessageOff<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessagecontents = MessageOff<Email>;

type Message<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  woof(): void;
}

type dogmessagecontact = Message<Dog>;

type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>;

type Num = Flatten<number[]>;



