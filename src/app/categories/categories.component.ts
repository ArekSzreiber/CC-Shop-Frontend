import {Component, OnInit} from '@angular/core';
import {Category} from "../shared/category.model";
import {DataStorageService} from "../shared/data-storage.service";
import {Subscription} from "rxjs";
import {CategoriesService} from "./categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  subscription: Subscription;

  constructor(
    private categoriesService: CategoriesService,
    private dataStorageService: DataStorageService,
  ) {
  }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    this.subscription = this.categoriesService.categoriesChanged.subscribe(
      (categories: Category[])=>{
        this.categories = categories;
      }
    );
    this.dataStorageService.fetchCategories();
  }

}
