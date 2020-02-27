import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../shared/product.model";
import {Store} from "@ngrx/store";
import {LineItem} from "../../../shared/line-item.model";

import * as ShoppingCartActions from "../../../shopping-cart/store/shopping-cart.actions";
import * as fromShoppingCart from '../../../shopping-cart/store/shopping-cart.reducer';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() quantity: number = 1;

  constructor(
    private store: Store<fromShoppingCart.AppState>,
  ) { }

  ngOnInit() {
  }

  addToShoppingCart() {
    if(this.quantity < 0){
      this.quantity = 1;
    }
    const lineItem = new LineItem(this.product, this.quantity);
    this.store.dispatch(new ShoppingCartActions.AddProduct(lineItem));
    this.quantity = 1;
  }
}
