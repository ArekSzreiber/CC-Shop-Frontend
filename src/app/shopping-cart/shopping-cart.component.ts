import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {LineItem} from "../shared/line-item.model";

import * as fromShoppingCart from './store/shopping-cart.reducer';
import * as ShoppingCartActions from "../shopping-cart/store/shopping-cart.actions";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  lineItems: Observable<{ lineItems: LineItem[] }>;

  constructor(
    private store: Store<fromShoppingCart.AppState>,
  ) {
  }

  ngOnInit() {
    this.lineItems = this.store.select('shoppingCart');
  }

  incrementQuantity(lineItem: LineItem) {
    lineItem.quantity++;
    this.store.dispatch(new ShoppingCartActions.UpdateLineItem(lineItem));
  }
}
