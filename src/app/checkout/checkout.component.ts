import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Order} from "../shared/models/order.model";
import {PersonalData} from "../shared/models/personal-data.model";
import {Address} from "../shared/models/address.model";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";

import * as fromShoppingCart from '../shopping-cart/store/shopping-cart.reducer';
import {DataStorageService} from "../shared/data-storage.service";
import {LineItem} from "../shared/models/line-item.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  @ViewChild('form', {static: false}) checkoutForm: NgForm;

  telephonePattern: RegExp;
  lineItems: LineItem[];
  stateSubscription: Subscription;

  constructor(
    private store: Store<fromShoppingCart.AppState>,
    private dataStorageService: DataStorageService,
  ) {
  }

  ngOnInit() {
    this.telephonePattern = /^[0-9]{9}$/;
  }

  onSubmit(form: NgForm) {
    const v = form.value;

    let personalData = new PersonalData(
      v.firstName,
      v.lastName,
      v.emailAddress,
      v.phoneNumber);
    let billingAddress = new Address(
      v.billingCountry,
      v.billingCity,
      v.billingZipCode,
      v.billingAddress);

    let shippingAddress: Address;
    if (v.addressesAreTheSame) {
      shippingAddress = billingAddress;
    } else {
      shippingAddress = new Address(
        v.shippingCountry,
        v.shippingCity,
        v.shippingZipCode,
        v.shippingAddress,
      );
    }

    this.stateSubscription = this.store.select('shoppingCart')
      .subscribe(
        (stateData) => {
          this.lineItems = stateData.lineItems;
        }
      );

    const order = new Order(personalData, billingAddress, shippingAddress, this.lineItems);

    this.dataStorageService.saveOrder(order);
  }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }


}
