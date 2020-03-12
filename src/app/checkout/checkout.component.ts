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
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  @ViewChild('form', {static: false}) checkoutForm: NgForm;

  telephonePattern: RegExp;
  telephonePatternTestCases;
  lineItems: LineItem[];
  stateSubscription: Subscription;
  loading: boolean;


  constructor(
    private store: Store<fromShoppingCart.AppState>,
    private dataStorageService: DataStorageService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loading = false;
    this.telephonePattern = /^[0-9]{9}$/;
    this.telephonePatternTestCases = [
      {pattern: 'pattern', result: false},
      {pattern: '123123123', result: true},
      {pattern: '1231231234', result: false},
      {pattern: '555666777', result: true},
    ];
    for (let testCase of this.telephonePatternTestCases) {
      if (this.telephonePattern.test(testCase.pattern) != testCase.result) {
        console.log(testCase.pattern + ' ' + testCase.result);
      }
    }

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
    // this.router.navigate(['/payment']); // todo navigate to payment
  }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }


}
