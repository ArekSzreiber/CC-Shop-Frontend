import {Action} from "@ngrx/store";
import {LineItem} from "../../shared/models/line-item.model";

export const ADD_PRODUCT = '[Shopping Cart] Add Ingredient';
export const UPDATE_LINE_ITEM = '[Shopping Cart] Update Line Item';
export const DELETE_LINE_ITEM = '[Shopping Cart] Delete Line Item';


export class AddProduct implements Action {
  readonly type: string = ADD_PRODUCT;

  constructor(public payload: LineItem) {
  }
}

export class UpdateLineItem implements Action {
  readonly type: string = UPDATE_LINE_ITEM;

  constructor(public payload: LineItem) {
  }
}

export class DeleteLineItem implements Action {
  readonly type: string = DELETE_LINE_ITEM;

  constructor(public payload: LineItem) {
  }
}


export type ShoppingCartActions =
  | AddProduct
  | UpdateLineItem
  | DeleteLineItem
  ;
