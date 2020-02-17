import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/product.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = [
    new Product('asdasdasd',
      'ajsghdajgdjadgasd',
      'https://c.allegroimg.com/s160/0308ae/6d1c45c44e0ab9d2dcefd9ffcc7c/Continental-Race-KING-26x2-0-drut-czarna-wys-24h',
      2),
    new Product('Rama Accent',
      'asdasdadasdadadasdsa',
      'https://www.centrumrowerowe.pl/photo/product/rama-accent-ranger-2-65149-f-sk6-w1550-h1080_1.png',
      1),
  ];

  constructor() { }

  ngOnInit() {
  }

}
