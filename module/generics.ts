export type Letters = "a" | "b" | "c" | "d";

type RemoveC<TType> = TType extends 'c' ? never : TType;
type WithoutC = RemoveC<Letters>

const example: WithoutC = "a"

type DefineFunction<ArgType, ReturnType> = (arg: ArgType) => ReturnType;

const squareNumber: DefineFunction<number, number> = (arg) => {
  return arg ** 2;
}
squareNumber(2);


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
  Card
}