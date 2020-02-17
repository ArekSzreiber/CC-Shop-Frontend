import { Component, OnInit } from '@angular/core';
import {Supplier} from "../shared/supplier.model";

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier[] = [
    new Supplier('Mysuko'),
    new Supplier('Titan'),
    new Supplier('Caltech'),
    new Supplier('Itex'),
    new Supplier('R-Line'),
    new Supplier('TGR'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
