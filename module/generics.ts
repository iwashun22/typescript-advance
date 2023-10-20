interface Item {
  product: string,
  rate: number,
  price: number,
  tags?: string[]
}
// Generics <Type>
// with function
function getHighestRateItem<T extends { rate: number }>(items: T[]): T {
  items = items.sort((a, b) => b.rate - a.rate);
  // get high-rated item
  return items[0];
}
// with arrow function
const getCheapestItem = <T extends { price: number }>(items: T[]): T => {
  items = items.sort((a, b) => a.price - b.price);
  // get cheapest item
  return items[0];
}
const items: Item[] = [
  { rate: 3.6, product: 'Basketball shoes', price: 50, tags: ["shoes", "cheap"] },
  { rate: 4.6, product: 'headband', price: 80 }
]
console.log(getHighestRateItem(items));
console.log(getCheapestItem(items));

function getProperty<Type, Key extends keyof Type>(object: Type, key: Key): Type[Key] {
  return object[key];
}
const myObject = { a: 1, b: "2", c: "cat", d: true };
getProperty(myObject, "a");
// FIXME: 
// # Argument of type '"m"' is not assignable to parameter 
// # of type '"c" | "a" | "b" | "d"'.
// getProperty(myObject, "m");

export type Letters = "a" | "b" | "c" | "d";

type RemoveC<TType> = TType extends 'c' ? never : TType;
type WithoutC = RemoveC<Letters>

const example: WithoutC = "a"

type DefineFunction<ArgType, ReturnType> = (arg: ArgType) => ReturnType;

const squareNumber: DefineFunction<number, number> = (arg) => {
  return arg ** 2;
}
squareNumber(2);

// not really a good example
type Box<Type> = Array<Type>

type Card = {
  id: string | number,
  name: string,
  expiryDate: Date
}

const cardBox: Box<Card> = [];

function addItemToBox<Type>(box: Box<Type>, item: Type): void {
  box.push(item);
  console.log("item added!");
  console.log(box)
}

export {
  squareNumber,
  addItemToBox,
  cardBox,
  Card,
  getProperty
}