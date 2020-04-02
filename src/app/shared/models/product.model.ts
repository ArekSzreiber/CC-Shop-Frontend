import {Property} from "./property.model";

export class Product {
  constructor(
    public productId: number,
    public title: string,
    public description: string,
    public imageURL: string,
    public price: number,
    public properties: Property[],
  ) {
  }
}
