interface Character {
  name: string,
  hitpoint: number,
  attack: number,
  custom?: string,
  // special: () => number
  special(): number,
  emote?: (msg: string) => void
}

// re-opening of the interface
// Type aliases can not do this
interface Character {
  readonly id: string
}

const kirby: Character =  {
  id: "a_12",
  name: "kirby",
  hitpoint: 200,
  attack: 17,
  special: function() {
    return this.attack * 4;
  },
  emote: message => {
    console.log(message);
  }
}

console.log(kirby.hitpoint);
console.log(kirby.special());
kirby.emote ? kirby.emote("Hello") : null;