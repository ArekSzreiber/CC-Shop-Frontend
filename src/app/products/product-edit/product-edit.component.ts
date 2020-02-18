import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Product} from "../../shared/product.model";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild('productForm', {static: false}) productForm: NgForm;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value);
    const product = new Product(
      value.title,
      value.description,
      value.imagePath,
      value.amount,
      value.price
    );
    console.log(product);
    // this.store.dispatch(new ProductsActions.AddProduct(product));
  }
}
