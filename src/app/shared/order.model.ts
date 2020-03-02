import {PersonalData} from "./personal-data.model";
import {Address} from "./address.model";
import {OrderLineItem} from "./order-line-item.model";

export class Order {
  constructor(
    public personalData: PersonalData,
    public billingAddress: Address,
    public shippingAddress: Address,
    // public orderLineItems: OrderLineItem[],
  ) {
  }
}
