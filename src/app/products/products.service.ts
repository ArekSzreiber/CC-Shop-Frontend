import {Injectable} from "@angular/core";
import {Product} from "../shared/product.model";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductsService {

  products: Product[] = [];
  productsChanged = new Subject<Product[]>();


  getProducts() {
    return this.products;
  }

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }
}
