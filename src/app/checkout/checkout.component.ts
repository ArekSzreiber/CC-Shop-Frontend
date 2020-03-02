import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Order} from "../shared/order.model";
import {PersonalData} from "../shared/personal-data.model";
import {Address} from "../shared/address.model";
import {Store} from "@ngrx/store";
import {LineItem} from "../shared/line-item.model";
import {Subscription} from "rxjs";
import {OrderLineItem} from "../shared/order-line-item.model";

import * as fromShoppingCart from '../shopping-cart/store/shopping-cart.reducer';
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  @ViewChild('form', {static: false}) checkoutForm: NgForm;

  telephonePattern;
  telephonePatternTestCases;
  orderLineItems: OrderLineItem[];
  stateSubscription: Subscription;


  constructor(
    private store: Store<fromShoppingCart.AppState>,
    private dataStorageService: DataStorageService,
  ) {
  }

  ngOnInit() {
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

    this.stateSubscription = this.store.select('shoppingCart')
      .subscribe(
        (stateData) => {
          this.orderLineItems = stateData.lineItems.map((lineItem: LineItem) => {
            return new OrderLineItem(lineItem.product.id, lineItem.quantity);
          }, []);
        }
      );
  }

  onSubmit(form: NgForm) {
    const order = this.composeOrder(form);
    console.log(order);
    this.dataStorageService.sendOrder(order);
  }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }


  composeOrder(form: NgForm): Order {
    const value = form.value;
    const personalData = new PersonalData(
      value.firstName,
      value.lastName,
      value.emailAddress,
      value.phoneNumber,
    );

    const billingAddress = new Address(
      value.billingCountry,
      value.billingCity,
      value.billingZipCode,
      value.billingAddress,
    );

    let shippingAddress;
    if (value.addressesAreTheSame) {
      shippingAddress = billingAddress;
    } else {
      shippingAddress = new Address(
        value.shippingCountry,
        value.shippingCity,
        value.shippingZipCode,
        value.shippingAddress,
      );
    }
    return new Order(
      personalData,
      billingAddress,
      shippingAddress,
      // this.orderLineItems,
    );
  }


}
