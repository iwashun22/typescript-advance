
export function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  CAREFUL HANDLING EMPTY STRING ""
  //  BECAUSE EMPTY STRING "" HAS FALSY VALUE 
  //  BUT IS A TYPE OF STRING (NOT NULL)
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
  //  NEED TO CHECK THE TYPE OF strs AGAIN OUTSIDE THE SCOPE
  //  IN CASE OF EMPTY STRING ""
  if(typeof strs === "string") {
    console.log("empty string had provided in the argument");
  }
  console.log("The argument is null or falsy");
}

export function printAllWithCheck(strs: string | string[] | null) {
  if(strs && typeof strs === "object") {
    for(const s of strs) {
      console.log(s);
    }
  }
  // * THIS CODE IS DIFFERENT FROM THE FUNCTION ABOVE
  // IT WILL HANDLE BOTH WHEN THERE'S A VALUE OR AN EMPTY STRING
  if(typeof strs === "string") {
    // null check
    if(!strs) { 
      console.log("The string is empty");
      return;
    }
    console.log(strs.toUpperCase());
  }
}

printAll("");
printAllWithCheck("");

interface User {
  name: string,
  email: string
}

interface Admin extends User {
  isAdmin: boolean,
  permissions: Array<string>
}

function isAdminAccount(user: User | Admin): boolean {
  // memo: The code below will have an error because User doesn't have isAdmin property 
  // ! user.isAdmin
  if("isAdmin" in user) {
    return user.isAdmin;
  }
  return false;
}

console.log(
  "isAdmin:",
  isAdminAccount({name: 'Anthony', email: 'anthony_user99@gmail.com'})
);

// * instanceof narrowing
// memo: useful for most values that can be constructed with new(classes). 
function logValue(x: Date | string): void {
  if(x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x);
  }
  return;
}

// * using type predicates
type Bird = { fly: () => void }
type Fish = { swim: () => void }
const myPet: { bird: Bird, fish: Fish } = {
  bird: {
    fly: () => {
      console.log(
        "A bird is flying\n",
        "flap flap..."
      );
    }
  },
  fish: {
    swim: () => {
      console.log(
        "A fish is swimming\n",
        "blup blup..."
      );
    }
  }
}

// memo: when true, it will return Fish type 
function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
console.log("is a fish?", isFish(myPet.fish));

function getFood(pet: Bird | Fish): string {
  if(isFish(pet)) {
    pet.swim();
    return "fish food"
  }
  pet.fly();
  return "bird food"
}
console.log(getFood(myPet.bird));

// * discriminated union
type Circle = {
  kind: "circle",
  radius: number,
}
type Square = {
  kind: "square",
  side: number,
}
type Rectangle = {
  kind: "rectangle",
  length: number,
  width: number,
}
type Shape = Circle | Square | Rectangle;

function getSurfaceArea(shape: Shape): number {
  switch(shape.kind) {
    case "circle":
      return Math.PI * (shape.radius ** 2);
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.length * shape.width;
    
    // ! raise a type error
    // memo: when there's any case hasn't been handled. 
    // The never type is assignable to every type, but no type is assignable to never
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}