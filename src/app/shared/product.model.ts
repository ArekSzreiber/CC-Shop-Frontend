export class Product {
  constructor(
    public title: string,
    public description: string,
    public imagePath: string,
    public price: number,
    public amount: number = 1,
  ) {
  }
}
