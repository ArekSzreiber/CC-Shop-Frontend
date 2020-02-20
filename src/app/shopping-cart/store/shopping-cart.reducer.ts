import * as ShoppingCartActions from './shopping-cart.actions';
import {Product} from "../../shared/product.model";

const initialState = {
  products: [
    new Product(
      'test title',
      'description',
      'https://image.made-in-china.com/2f0j00FRtYZAelEsqz/High-Lever-Good-Quality-Mountain-Bike-Cassette-Freewheel-11-Speed-Bicycle-Freewheel.jpg',
      17.99,
      4,
    )
  ],
};

export function shoppingCartReducer(
  state = initialState,
  action: ShoppingCartActions.AddProduct
) {
  switch (action.type) {
    case ShoppingCartActions.ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          action.payload,
        ]
      };
    default:
      return state;
  }
}
