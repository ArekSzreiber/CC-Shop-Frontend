import {Parameter} from "./parameter.model";

export class Product {
  constructor(
    public productId: number,
    public title: string,
    public description: string,
    public imageURL: string,
    public price: number,
    public parameters: Parameter[],
  ) {
  }
}
