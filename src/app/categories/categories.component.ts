import { Component, OnInit } from '@angular/core';
import {Category} from "../shared/category.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [
    new Category('Batteries'),
    new Category('BMS'),
    new Category('Boost'),
    new Category('Brakes'),
    new Category('Cars'),
    new Category('Chassis'),
    new Category('Drive'),
    new Category('Engines'),
    new Category('Gears'),
    new Category('Suspension'),
    new Category('Tyres'),
    new Category('Wheels'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
