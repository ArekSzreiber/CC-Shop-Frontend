import {Product} from "../../shared/models/product.model";
import * as ProductActions from './product.actions';

export interface State {
  products: Product[],
}

const initialState: State = {
  products: [],
};

export function productReducer(state: State = initialState,
                               action: ProductActions.ProductActions) {

}
