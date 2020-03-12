import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Supplier} from "../shared/models/supplier.model";

@Injectable({providedIn: 'root'})
export class SuppliersService {
  suppliers: Supplier[] = [];
  suppliersChanged = new Subject<Supplier[]>();


  getSuppliers() {
    return this.suppliers;
  }

  setSuppliers(suppliers: Supplier[]) {
    this.suppliers = suppliers;
    this.suppliersChanged.next(this.suppliers.slice());
  }

}
