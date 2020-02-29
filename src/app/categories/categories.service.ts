import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Category} from "../shared/category.model";

@Injectable({providedIn: 'root'})
export class CategoriesService {
  categories: Category[] = [];
  categoriesChanged = new Subject<Category[]>();


  getCategories() {
    return this.categories;
  }

  setCategories(categories: Category[]) {
    this.categories = categories;
    this.categoriesChanged.next(this.categories.slice());
  }

  addCategory(category: Category) {
    this.categories.push(category);
    this.categoriesChanged.next(this.categories.slice());
  }
}
