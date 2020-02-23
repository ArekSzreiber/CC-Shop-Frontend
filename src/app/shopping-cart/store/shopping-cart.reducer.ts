import * as ShoppingCartActions from './shopping-cart.actions';

const initialState = {
  lineItems: [],
};

export function shoppingCartReducer(
  state = initialState,
  action: ShoppingCartActions.AddProduct
) {
  switch (action.type) {
    case ShoppingCartActions.ADD_PRODUCT:
      return {
        ...state,
        lineItems: [
          ...state.lineItems,
          action.payload,
        ]
      };
    default:
      return state;
  }
}
