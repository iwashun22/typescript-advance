interface LocationInterface {
  country: string,
  city: string,
  district: string,
  street?: string
}
abstract class PlaceLocation implements LocationInterface {
  constructor(
    public country: string,
    public city: string,
    public district: string,
    public street?: string,
  ) {}

  abstract getFormatted(): string;
}

// FIXME: ERROR: Cannot create an instance of an abstract class.
// const someAddress = new PlaceLocation("bluh bluh", ...);

class Address extends PlaceLocation {
  private address: string
  constructor({
    country,
    city,
    district,
    address,
    street = undefined,
  }: LocationInterface & { address: string }) {
    super(country, city, district, street);
    this.address = address;
  }
  public get getAddress() {
    return this.address;
  }
  // indicate error if didn't provide abstract method
  getFormatted() {
    return `${this.address}${this.street ? `, ${this.street},` : ","} ${this.district} Dist. ${this.city}, ${this.country}`;
  }
}

const someHouse = new Address({
  country: 'Japan',
  city: 'Tokyo',
  district: 'Ropponngi',
  address: '12/34'
});

console.log(someHouse.getAddress);
console.log(someHouse.getFormatted());
