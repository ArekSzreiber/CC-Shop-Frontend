import * as ShoppingCartActions from './shopping-cart.actions';
import {LineItem} from "../../shared/line-item.model";
import {Product} from "../../shared/product.model";

let sessionLineItems: LineItem[] = JSON.parse(sessionStorage.getItem("lineItems"));
if (!sessionLineItems) {
  sessionLineItems = [];
}

function getTotalQuantity(lineItems: LineItem[]) {
  let quantities = lineItems.map((lineItem) => {
    return lineItem.quantity;
  });
  return quantities.reduce((sum, current) => {
    return sum + current;
  }, 0);
}

function getTotalPrice(lineItems: LineItem[]) {
  let prices = lineItems.map((lineItem) => {
    return lineItem.product.price * lineItem.quantity;
  });
  return prices.reduce((sum, current) => {
    return sum + current;
  }, 0);
}



export interface AppState {
  shoppingCart: ShoppingCartState;

}

export interface ShoppingCartState {
  lineItems: LineItem[];
  numberOfItems: number;
  totalPrice: number;
}

const initialState: ShoppingCartState = {
  lineItems: sessionLineItems,
  numberOfItems: getTotalQuantity(sessionLineItems),
  totalPrice: getTotalPrice(sessionLineItems),
};

export function shoppingCartReducer(
  state: ShoppingCartState = initialState,
  action: ShoppingCartActions.ShoppingCartActions
) {
  let updatedLineItems: LineItem[];

  switch (action.type) {
    case ShoppingCartActions.ADD_PRODUCT:
      updatedLineItems = [...state.lineItems];
      const updatedLineItem = action.payload;
      updatedLineItems.some((lineItem, index) => {
        if (JSON.stringify(lineItem.product) == JSON.stringify(action.payload.product)) {
          updatedLineItem.quantity += lineItem.quantity;
          updatedLineItems.splice(index, 1);
          return true; // to break iterating over updatedLineItems
        }
      });
      updatedLineItems.push(updatedLineItem);
      sessionStorage.setItem("lineItems", JSON.stringify(updatedLineItems));
      return {
        ...state,
        lineItems: [
          ...updatedLineItems,
        ],
        numberOfItems: getTotalQuantity(updatedLineItems),
        totalPrice: getTotalPrice(updatedLineItems),
      };

    case ShoppingCartActions.UPDATE_LINE_ITEM:
      updatedLineItems = [...state.lineItems];
      updatedLineItems.some((lineItem, index) => {
        if (JSON.stringify(lineItem.product) == JSON.stringify(action.payload.product)) {
          updatedLineItems.splice(index, 1, action.payload);
          return true; // to break iterating over updatedLineItems
        }
      });

      sessionStorage.setItem("lineItems", JSON.stringify(updatedLineItems));
      return {
        ...state,
        lineItems: [
          ...updatedLineItems,
        ],
        numberOfItems: getTotalQuantity(updatedLineItems),
        totalPrice: getTotalPrice(updatedLineItems),
      };

    case ShoppingCartActions.DELETE_LINE_ITEM:
      updatedLineItems = [...state.lineItems];
      updatedLineItems.some((lineItem, index) => {
        if (JSON.stringify(lineItem.product) == JSON.stringify(action.payload.product)) {
          updatedLineItems.splice(index, 1);
          return true; // to break iterating over updatedLineItems
        }
      });
      return {
        ...state,
        lineItems: [
          ...updatedLineItems,
        ],
        numberOfItems: getTotalQuantity(updatedLineItems),
        totalPrice: getTotalPrice(updatedLineItems),
      };


    default:
      sessionStorage.setItem("lineItems", JSON.stringify(state.lineItems));
      return state;
  }
}
