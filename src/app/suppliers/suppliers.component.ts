import { Component, OnInit } from '@angular/core';
import {Supplier} from "../shared/supplier.model";
import {Subscription} from "rxjs";
import {DataStorageService} from "../shared/data-storage.service";
import {SuppliersService} from "./suppliers.service";

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier[];
  subscription: Subscription;

  constructor(
    private suppliersService: SuppliersService,
    private dataStorageService: DataStorageService,
  ) {
  }

  ngOnInit() {
    this.suppliers = this.suppliersService.getSuppliers();
    this.subscription = this.suppliersService.suppliersChanged.subscribe(
      (suppliers: Supplier[])=>{
        this.suppliers = suppliers;
      }
    );
    this.dataStorageService.fetchSuppliers();
  }

  onLoadProducts(supplierId: number) {
    this.dataStorageService.fetchProductsBySupplierId(supplierId);
  }
}
