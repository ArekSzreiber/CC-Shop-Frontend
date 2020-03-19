import {Component, OnDestroy, OnInit} from '@angular/core';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {LineItem} from "../shared/models/line-item.model";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";

import * as fromShoppingCart from './store/shopping-cart.reducer';
import * as ShoppingCartActions from "../shopping-cart/store/shopping-cart.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  stateSubscription: Subscription;
  totalPrice: number;
  lineItems: LineItem[];

  faTrash = faTrash;

  constructor(
    private store: Store<fromShoppingCart.AppState>,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.stateSubscription = this.store.select('shoppingCart')
      .subscribe(
        (stateData) => {
          this.totalPrice = stateData.totalPrice;
          this.lineItems = stateData.lineItems;
        }
      );
  }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }

  incrementQuantity(lineItem: LineItem) {
    lineItem.quantity++;
    this.store.dispatch(new ShoppingCartActions.UpdateLineItem(lineItem));
  }

  decrementQuantity(lineItem: LineItem) {
    lineItem.quantity--;
    this.updateLineItem(lineItem);
  }

  updateLineItem(lineItem: LineItem) {
    if (lineItem.quantity > 0) {
      this.store.dispatch(new ShoppingCartActions.UpdateLineItem(lineItem));
    } else {
      this.store.dispatch(new ShoppingCartActions.DeleteLineItem(lineItem));
    }
  }


  deleteItem(lineItem: LineItem) {
    this.store.dispatch(new ShoppingCartActions.DeleteLineItem(lineItem));
  }

  checkout() {
    if(this.lineItems.length > 0){
      this.router.navigate(['/checkout']);
    }
  }
}
