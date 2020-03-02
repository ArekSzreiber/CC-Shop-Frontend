export class Order {
  constructor(
    public firstName: string,
    public lastName: string,
    public emailAddress: string,
    public phoneNumber: string,
    public billingCountry: string,
    public billingCity: string,
    public billingZipCode: string,
    public billingAddress: string,
    public shippingCountry: string,
    public shippingCity: string,
    public shippingZipCode: string,
    public shippingAddress: string
  ) {
  }
}
