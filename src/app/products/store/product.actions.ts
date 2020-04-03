import {Action} from "@ngrx/store";

export const FETCH_PRODUCTS = '[Products] Fetch Products';


export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;

  constructor(public payload: string) {// payload is URL from where we will fetch recipes
  }
}


export type ProductActions =
  FetchProducts
  ;
