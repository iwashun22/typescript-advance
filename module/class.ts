// public and private are only available in typescript
// in javascript, use #(VARNAME) to create private variable

enum state{
  LOGOUT,
  LOGIN
}


class User {
  private password: string;

  public username: string;
  public state: state;
  public email: string | null = null;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.state = state.LOGOUT;
  }

  authenticate(password: string) {
    if(this.password === password) {
      console.log("Welcome "+this.username+"!");
      this.state = state.LOGIN;
    } else {
      console.log("Wrong password, please try again.");
    }
  }
  logout() {
    this.state = state.LOGOUT;
  }
  getStatus() {
    if(this.state === state.LOGIN) {
      return "logged in";
    }
    return "logged out"
  }
  addEmail(email: string) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(regex)) {
      console.log("Success adding email address!");
    } else {
      console.log("Please provide valid email address.");
    }
  }
}

const user = new User("test_user", "test1234");
console.log(user.getStatus());

user.authenticate("1234");
user.authenticate("test1234");

console.log(user.getStatus());

user.addEmail("thisisnotemail@l22na");
user.addEmail("test@gmail.com");