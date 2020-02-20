import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Product} from "../../shared/product.model";
import {ProductsService} from "../products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild('productForm', {static: false}) productForm: NgForm;


  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const product = new Product(
      value.title,
      value.description,
      value.imagePath,
      value.price,
      value.amount,
    );
    this.productsService.addProduct(product);
    this.onCancel();


    // this.store.dispatch(new ProductsActions.AddProduct(product));
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
