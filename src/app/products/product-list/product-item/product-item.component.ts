import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../shared/product.model";
import * as ShoppingCartActions from "../../../shopping-cart/store/shopping-cart.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(
    private store: Store<{shoppingCart: {products: Product[]}}>,
  ) { }

  ngOnInit() {
  }
  addToShoppingCart() {
    this.store.dispatch(new ShoppingCartActions.AddProduct(this.product));
  }
}
