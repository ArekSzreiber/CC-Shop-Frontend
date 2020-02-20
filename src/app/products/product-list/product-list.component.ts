import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/product.model";
import {ProductsService} from "../products.service";
import {Subscription} from "rxjs";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  subscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private dataStorageService: DataStorageService,
  ) {
  }

  ngOnInit() {
    this.productList = this.productsService.getProducts();
    this.subscription = this.productsService.productsChanged.subscribe(
      (products: Product[])=>{
        this.productList = products;
      }
    );
    this.dataStorageService.fetchRecipes();
  }

}
