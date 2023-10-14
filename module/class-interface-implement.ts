interface Music {
  title: string,
  writer: string,
  instruments: Array<string>,
  lyrics?: string,
}
interface Play<State extends string> {
  play(): State;
  stop(): State;
}
type playState = "playing" | "paused";

class Classic implements Music, Play<playState> {
  constructor(
    public title: string,
    public writer: string,
    public instruments: Array<string>,
  ) {}
  play(): playState {
    return "playing"
  }
  stop(): playState {
    return "paused";
  }
}