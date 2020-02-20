import {Action} from "@ngrx/store";
import {Product} from "../../shared/product.model";

export const ADD_PRODUCT = '[Shopping Cart] Add Ingredient';

export class AddProduct implements Action {
  readonly type: string;
  payload: Product;
}
