function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  {
    name: "Mimi",
    age: 10,
  },
  {
    name: "Rex",
    age: 3,
  },
];

console.log(pluck(dogs, "name"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
  console.log(name, data);
}

sendEvent("addToCart", {
  productId: "123",
  quantity: 2,
  time: new Date().getTime(),
  user: "John",
});

sendEvent("checkout", {
  time: new Date().getTime(),
  user: "Bob",
});

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "John",
  age: 30,
};




// function getKeys<T>(obj: T): Array<keyof T> {
//   return Object.keys(obj) as Array<keyof T>
// } 