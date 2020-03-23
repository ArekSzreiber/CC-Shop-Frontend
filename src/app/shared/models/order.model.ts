import {PersonalData} from "./personal-data.model";
import {Address} from "./address.model";
import {LineItem} from "./line-item.model";

export class Order {

  constructor(
    public personalData: PersonalData,
    public billingAddress: Address,
    public shippingAddress: Address,
    public lineItems: LineItem[],
    public orderId: number = null,
  ) {
  }
}
