import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../products/products.service";
import {Product} from "./product.model";
import {CategoriesService} from "../categories/categories.service";
import {Category} from "./category.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {


  constructor(
    private http: HttpClient,
    private productsService: ProductsService,
    private categoryService: CategoriesService,
  ) {
  }

  private static composeFirebaseUrl(endpoint: string) {
    const firebaseUrl = 'https://chloopaki-shop.firebaseio.com/';
    const firebaseSuffix = '.json';
    return firebaseUrl + endpoint + firebaseSuffix;
  }

  storeProducts() {
    const products = this.productsService.getProducts();
    const url = DataStorageService.composeFirebaseUrl('products');
    this.http.put(url, products) // data sent with PUT (multi, overriding) is sent without ID's,
      // data sent by POST (single, appending) is stored with autogenerated ID
      .subscribe(response => {
        //todo
        console.log(response);
      });
  }

  fetchProducts(categoryId: number) {
    let url: string;
    if(categoryId === undefined){
      url = 'http://localhost:8888/products';
    }else{
      url = `http://localhost:8888/categories/${categoryId}/products`;
    }
    this.http
      .get<Product[]>(url).subscribe(response => {
      this.productsService.setProducts(response);
    })
  }

  fetchCategories() {
    const url = 'http://localhost:8888/categories';
    this.http
      .get<Category[]>(url).subscribe(response => {
      this.categoryService.setCategories(response);
    })
  }
}
