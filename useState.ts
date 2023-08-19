const useState = <T>(initial: T): [T, (v: T | ((prev: T) => T)) => void] => {
  let state: T = initial;

  const setState = (v: T | ((prev: T) => T)) => {
    if (typeof v === "function") {
      state = (v as (prev: T) => T)(state);
    } else {
      state = v;
    }
  };

  return [state, setState];
};

const [count, setCount] = useState(0);

setCount((prev) => {
  return prev + 5;
});

console.log(count);
