
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