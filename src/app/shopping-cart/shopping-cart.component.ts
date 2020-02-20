import {Component, OnInit} from '@angular/core';
import {Product} from "../shared/product.model";
import {ProductsService} from "../products/products.service";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: Observable<{products: Product[]}>;

  constructor(
    private productsService: ProductsService,
    private store: Store<{ shoppingCart: { products: Product[] } }>,
  ) {
  }

  ngOnInit() {
    this.products = this.store.select('shoppingCart');
    // this.products = this.productsService.sampleProducts;
  }

}
