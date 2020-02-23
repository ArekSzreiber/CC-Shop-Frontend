import * as ShoppingCartActions from './shopping-cart.actions';
import {LineItem} from "../../shared/line-item.model";
import {Product} from "../../shared/product.model";

const initialState = {
  lineItems: [
    new LineItem(
      new Product(
        "Test Title 99",
        "Test description",
        "http://studio408.pl/authors/skot/018.jpg",
        99
      ),
      3
    ),
    new LineItem(
      new Product(
        "Test Title 22",
        "Test description 2",
        "http://studio408.pl/authors/skot/018.jpg",
        22
      ),
      2
    ),
    new LineItem(
      new Product(
        "Test Title 7",
        "Test description 3",
        "http://studio408.pl/authors/skot/018.jpg",
        7
      ),
      1
    ),
    new LineItem(
      new Product(
        "Test Title 4",
        "Test description 4",
        "http://studio408.pl/authors/skot/018.jpg",
        4
      ),
    ),
  ],
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
