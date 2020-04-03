import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product.model";
import {ProductsService} from "../products.service";
import {Subscription} from "rxjs";
import {DataStorageService} from "../../shared/data-storage.service";
import {ActivatedRoute} from "@angular/router";
import {Parameter} from "../../shared/models/parameter.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  subscription: Subscription;
  filters: Parameter[];// ale najpierw trzeba zrobić jakiś products reducer

  constructor(
    private productsService: ProductsService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.productList = this.productsService.getProducts();
    this.subscription = this.productsService.productsChanged.subscribe(
      (products: Product[]) => {
        this.productList = products;
      }
    );
    if (+this.route.snapshot.params.id) {
      this.dataStorageService.fetchProductsByCategoryId(+this.route.snapshot.params.id);
    } else {
      this.dataStorageService.fetchAllProducts();
    }
  }

}
