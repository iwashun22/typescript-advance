enum ShirtSize {
  SMALL = "s",
  MIDDLE = "m",
  LARGE = "l"
}

const myShirtSize = ShirtSize.MIDDLE;

`

####### saperate code ########

`
// The compiled Javascript code is different if you declare const in enum

const enum Status {
  BEGINNER,
  ADVANCE,
  EXPERT,
  MASTER,
  GRANDMASTER
}

const myStatus = Status.EXPERT