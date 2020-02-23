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
      console.log(state);
      const updatedLineItems = [...state.lineItems];
      const updatedLineItem = action.payload;
      updatedLineItems.forEach((lineItem, index) => {
        if (JSON.stringify(lineItem.product) == JSON.stringify(action.payload.product)) {
          updatedLineItem.quantity += lineItem.quantity;
          updatedLineItems.splice(index, 1);
          //todo break forEach function here https://stackoverflow.com/questions/2641347/short-circuit-array-foreach-like-calling-break
        }
      });

      updatedLineItems.push(updatedLineItem);

      return {
        ...state,
        lineItems: [
          ...updatedLineItems,
        ]
      };

    default:
      return state;
  }
}
