import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/product.model";
import {ProductsService} from "../products/products.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.products = this.productsService.sampleProducts;
  }

}
