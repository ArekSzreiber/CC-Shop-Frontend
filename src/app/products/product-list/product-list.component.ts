import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
