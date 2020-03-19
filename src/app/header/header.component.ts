import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import * as fromShoppingCart from '../shopping-cart/store/shopping-cart.reducer';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  itemsInCart: number;

  constructor(
    private store: Store<fromShoppingCart.AppState>,
  ) {
  }

  ngOnInit() {
    this.subscription = this.store.select("shoppingCart").subscribe(
      stateData => {
        this.itemsInCart = stateData.numberOfItems;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
