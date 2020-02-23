import {Action} from "@ngrx/store";
import {LineItem} from "../../shared/line-item.model";

export const ADD_PRODUCT = '[Shopping Cart] Add Ingredient';

export class AddProduct implements Action {
  readonly type: string = ADD_PRODUCT;

  constructor(public payload: LineItem) {
  }
}
