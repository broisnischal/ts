enum Mode {
  dark,
  light,
}

console.log(Mode.dark);
//                ^?
console.log(Mode.light);
//                ^?

function Setup(mode: Mode) {
  console.log(mode);
  //           ^?
}

Setup(Mode.dark);
Setup(1);
// Setup(33) they have fixed this issue

console.log(Mode[0]); // dark
console.log(Mode["light"]); // 1
console.log(Object.keys(Mode)); // [ '0', '1', 'dark', 'light' ]

type LoginMode = "login" | "signup" | "logout";

function app(Mode: LoginMode) {
  console.log(Mode);
  //            ^?
}

app("signup");

type Color =
  | string
  | {
      r: number;
      g: number;
      b: number;
    };

const red: Color = "red";
//          ^?

const green = "green" as Color;
//       ^?

const blue = "blue" satisfies Color;
//      ^?
