type t3dCoord = [x: number, y: number, z: number];

export type t3dCoordTuple = t3dCoord[];

function add3dCoord(a: t3dCoord, b: t3dCoord): t3dCoord {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

console.log(add3dCoord([1, 2, 3], [4, 5, 6]));

function simpleStringState(initial: string): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [name, setName] = simpleStringState("hello");

console.log(name());
setName("world");
console.log(name());

function useState(initial: unknown): [unknown, (v: unknown) => void] {
  let state: unknown = initial;
  return [
    state,
    (v: unknown) => {
      state = v;
    },
  ];
}

const [a, setA] = useState(1);

console.log(a);
