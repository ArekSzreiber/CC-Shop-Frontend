import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../products/products.service";
import {Product} from "./product.model";
import {CategoriesService} from "../categories/categories.service";
import {Category} from "./category.model";
import {Supplier} from "./supplier.model";
import {SuppliersService} from "../suppliers/suppliers.service";
import {Order} from "./order.model";
import {PersonalData} from "./personal-data.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  private backendUrl = 'http://localhost:8888';

  constructor(
    private http: HttpClient,
    private productsService: ProductsService,
    private categoryService: CategoriesService,
    private suppliersService: SuppliersService,
  ) {
  }


  fetchAllProducts() {
    const url = this.backendUrl + '/products';
    this.getProducts(url);
  }

  fetchProductsByCategoryId(categoryId: number) {
    const url = `${this.backendUrl}/categories/${categoryId}/products`;
    this.getProducts(url);
  }

  fetchProductsBySupplierId(supplierId: number) {
    const url = `${this.backendUrl}/suppliers/${supplierId}/products`;
    this.getProducts(url);
  }

  fetchCategories() {
    const url = this.backendUrl + '/categories';
    this.http
      .get<Category[]>(url).subscribe(response => {
      this.categoryService.setCategories(response);
    })
  }

  fetchSuppliers() {
    const url = this.backendUrl + '/suppliers';
    this.http
      .get<Supplier[]>(url).subscribe(response => {
      this.suppliersService.setSuppliers(response);
    })
  }

  sendOrder(order: Order) {
    const url = this.backendUrl + '/orders';
    this.http
      .post(url, order).subscribe(response => {
      console.log("Response:");
      console.log(response);
    })
  }



  private getProducts(url: string) {
    this.http
      .get<Product[]>(url).subscribe(response => {
      this.productsService.setProducts(response);
    });
  }
}
