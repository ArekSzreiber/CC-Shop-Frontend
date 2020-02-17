export class Product {
  constructor(
    public title: string,
    public description: string,
    public imagePath: string,
    public amount: number = 1,
    public price: number = 1,
  ) {
  }
}
