import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {LineItem} from "../shared/line-item.model";

import * as fromShoppingCart from './store/shopping-cart.reducer';
import * as ShoppingCartActions from "../shopping-cart/store/shopping-cart.actions";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  shoppingCartForm: FormGroup;

  stateSubscription: Subscription;
  totalPrice: number;
  lineItems: LineItem[];

  faTrash = faTrash;

  constructor(
    private store: Store<fromShoppingCart.AppState>,
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
}
