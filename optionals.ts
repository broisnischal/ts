function printIngredients(quantity: string, ingredients: string, extra?: string) {
  console.log(`${quantity} ${ingredients} ${extra ? `${extra}` : ""}`);
}

printIngredients("1", "flour", "rotis");

interface User {
  id: number;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    //   return user.info.email!;
    return user.info.email!;
  }
  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

// optionals callbacks

function addWithCallback(x: number, y: number, callback?: () => void) {
  callback?.();
  console.log([x, y]);
}

addWithCallback(1, 2, () => {
  console.log("callback");
});
