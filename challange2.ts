function myForEach<T>(items: T[], forEachFunc: (v: T, index: number) => void): void {
  items.reduce((a, v, index) => {
    forEachFunc(v, index);
    return undefined;
  }, undefined);
}

myForEach(["a", "b", "c"], (v, index) => {
  console.log(v + index);
});

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.filter(filterFunc);
}

function customFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[]);
}

console.log(myFilter(["a", "b", "c"], (v) => v === "b"));

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

console.log(myMap(["a", "b", "c"], (v) => v === "b"));
