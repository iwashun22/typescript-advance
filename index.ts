import handleReadonlyArray from "./module/readonly-array";
import { squareNumber, addItemToBox, cardBox, Card } from "./module/generics";
import "./module/clean-compile-enum";
import "./module/interface";
import "./module/class";

handleReadonlyArray(["one", "two"]);

console.log(squareNumber(3))

const threeYears = 3 * (1000 * 60 * 60 * 24 * 365)
const newCard: Card = {
  id: "abcd1234",
  name: "drivers license",
  expiryDate: new Date(Date.now() + threeYears)
}
addItemToBox(cardBox, newCard)