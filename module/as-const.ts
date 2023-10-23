const myObj = Object.freeze({
  one: 1,
  two: "2",
  three: {
    someProp: "hello"
  }
})
myObj.three.someProp = "world"; // no error (Object can't freeze deeper properties)

const someRoutes = {
  home: "/",
  user: "/user",
  login: "/login",
  room: {
    chat: "/room/chat"
  }
} as const;
// indicate an error
// ! someRoutes.room.chat = "/";

type Routes = (typeof someRoutes)[keyof typeof someRoutes];
function getRequest(route: Routes) {
  console.log("Request url: " + route);
}

getRequest("/user");