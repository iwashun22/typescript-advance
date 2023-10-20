type Book = {
  name: string,
  author: string,
  genre: string,
  subject?: string
}

interface Clothes {
  brand: string,
  type: string,
  price: number
}

type CollectionTypesName = "clothes" | "book";
const {clothes, book}: { [key: string]: CollectionTypesName } = {
  clothes: "clothes",
  book: "book",
};
type IndicateCollectionType<T extends CollectionTypesName> = T extends typeof clothes ? Clothes : (T extends typeof book ? Book : never);

class Collection<T extends CollectionTypesName, U extends IndicateCollectionType<T>> {
  public store: U[] = [];
  public readonly collectionType: T;
  constructor(collectionType: T, items: U[] = []) {
    this.store = this.store.concat(items);
    this.collectionType = collectionType;
  }
  addCollectionItem(item: U) {
    this.store.push(item);
  }
}

export {
  Collection
}