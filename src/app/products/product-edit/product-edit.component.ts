import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ProductsService} from "../products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../shared/category.model";
import {CategoriesService} from "../../categories/categories.service";
import {Subscription} from "rxjs";
import {DataStorageService} from "../../shared/data-storage.service";
import {Supplier} from "../../shared/supplier.model";
import {SuppliersService} from "../../suppliers/suppliers.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild('productForm', {static: false}) productForm: NgForm;
  categories: Category[];
  categoriesSubscription: Subscription;
  suppliers: Supplier[];
  suppliersSubscription: Subscription;


  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private dataStorageService: DataStorageService,
    private suppliersService: SuppliersService,
  ) {
  }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    this.categoriesSubscription = this.categoriesService.categoriesChanged.subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    );
    this.dataStorageService.fetchCategories();

    this.suppliers = this.suppliersService.getSuppliers();
    this.suppliersSubscription = this.suppliersService.suppliersChanged.subscribe(
      (suppliers: Supplier[]) => {
        this.suppliers = suppliers;
      }
    );
    this.dataStorageService.fetchSuppliers();
  }

  onSubmit(form: NgForm) {
    console.log('not implemented');
    console.log(form.value);
    // const value = form.value;
    // const product = new Product(
    //   value.title,
    //   value.description,
    //   value.imagePath,
    //   value.price,
    // );
    // this.productsService.addProduct(product);
    // this.onCancel();

    // this.store.dispatch(new ProductsActions.AddProduct(product));
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
