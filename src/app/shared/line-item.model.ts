import {Product} from "./product.model";

export class LineItem {
  constructor(
    public product: Product,
    public quantity: number = 1,
  ) {
  }
}
