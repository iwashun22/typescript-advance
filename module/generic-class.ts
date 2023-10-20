interface Book {
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

type CollectionTypes = {
  "clothes": Clothes,
  "book": Book
};

class Collection<T extends keyof CollectionTypes, U extends CollectionTypes[T]> {
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