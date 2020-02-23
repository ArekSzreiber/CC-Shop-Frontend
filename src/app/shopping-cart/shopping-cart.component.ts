import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {LineItem} from "../shared/line-item.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  lineItems: Observable<{lineItems: LineItem[]}>;

  constructor(
    private store: Store<{ shoppingCart: { lineItems: LineItem[] } }>,
  ) {
  }

  ngOnInit() {
    this.lineItems = this.store.select('shoppingCart');
  }

}
