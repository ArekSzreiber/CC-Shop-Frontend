export class Product {
  constructor(
    public title: string,
    public description: string,
    public imageURL: string,
    public price: number,
    public amount: number = 1,
  ) {
  }
}
