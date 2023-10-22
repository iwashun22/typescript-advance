// public and private are only available in typescript
// in javascript, use #(VARNAME) to create private variable

enum state{
  LOGOUT,
  LOGIN
}


export class User {
  private _password: string;
  private _email: string | null = null;
  private _age: number | null;

  public username: string;
  public state: state;

  constructor(username: string, password: string, age?: number) {
    this.username = username;
    this._password = password;
    this.state = state.LOGOUT;
    this._age = age || null;
  }

  authenticate(password: string) {
    if(this._password === password) {
      console.log("Welcome "+this.username+"!");
      this.state = state.LOGIN;
    } else {
      console.log("Wrong password, please try again.");
    }
  }
  logout() {
    this.state = state.LOGOUT;
  }
  // getter
  get getStatus() {
    if(this.state === state.LOGIN) {
      return "logged in";
    }
    return "logged out"
  }
  get getEmail() {
    return this._email;
  }
  get getAge() {
    return this._age ? this._age : "User's age hasn't set";
  }
  // setter
  set setAge(age: number) {
    if( 0 < age && age < 200 ) {
      this._age = age;
      console.log("Set age to " + age);
    } else {
      throw new Error("Age should be bigger than 0 and lesser than 200");
    }
  }
  addEmail(email: string) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(regex)) {
      this._email = email;
      console.log("Success adding email address!");
    } else {
      console.log("Please provide valid email address.");
    }
  }
}

const user = new User("test_user", "test1234");
console.log(user.getStatus);

user.authenticate("1234");
user.authenticate("test1234");

console.log(user.getStatus);

user.addEmail("thisisnotemail@l22na");
user.addEmail("test@gmail.com");

console.log(user.getEmail);

try {
  console.log(user.getAge);
  user.setAge = 21;
  user.setAge = 543; // throw error
} catch (err) {
  console.log(err);
}
console.log(user.getAge);