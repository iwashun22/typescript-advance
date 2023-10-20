class Book {
  private _author: string;
  protected _printed_in: string;

  public readonly title: string;

  constructor(title: string, author: string = "unknown", printedIn: string = "unknown") {
    this._author = author;
    this.title = title;
    this._printed_in = printedIn
  }
  public get getAuthor() {
    return this._author;
  }
  public get getPrintedPlace() {
    return this._printed_in;
  }
}

class Manga extends Book {
  constructor(title: string, author: string = "unknown") {
    super(author, title);
  }
  // setAuthor(author: string) {
  //   FIXME: Can not access to private properties from a class Book
  //   this._author = author;
  // }
  setOriginalPrintedPlace() {
    // You can access to protected properties by class inheritance
    this._printed_in = 'Japan';
  }
}

const naruto = new Manga('Naruto', 'Masashi Kishimoto');
console.log(naruto.getAuthor);
console.log(naruto.getPrintedPlace);

naruto.setOriginalPrintedPlace();
console.log(naruto.getPrintedPlace);

export {
  Manga,
  Book
}