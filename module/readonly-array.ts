const arr1 = ["apple", "orange", "banana"];

arr1.push("watermelon")

export default function doStuff(arr: ReadonlyArray<string>) {
  const copy = arr.slice();
  console.log(copy);
  console.log(arr);
  //FIXME: can not mutate value
  // arr.push("mango")
}

doStuff(arr1);