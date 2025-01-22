import { Order } from "./Order";
import { Payment } from "./Payment";
import { ShoppingCart } from "./ShoppingCart";

class Account {
  private payments: Payment[] = []
  private shoppingCart: ShoppingCart
  private orders: Order[] = []
  private accountId: string;
  private billing_address: string;
  private is_closed: boolean;
  private open: string;
  private closed: string | null;

  constructor(accountId: string, billing_address: string, is_closed: boolean, open: string, closed: string | null) {
    this.shoppingCart = new ShoppingCart("now")
    this.accountId = accountId;
    this.billing_address = billing_address;
    this.is_closed = is_closed;
    this.open = open;
    this.closed = closed;
  }

  public getId():string {
    return this.accountId
  }

  public getBilling_address():string{
    return this.billing_address
  }

  public setBilling_address(billing_address: string):void{
    this.billing_address = billing_address
  }

  public getIs_closed():boolean{
    return this.is_closed
  }

  public setIs_closed(is_closed: boolean):void{
    this.is_closed = is_closed
  }

  public getOpen():string{
    return this.open
  }

  public setOpen(open: string):void{
    this.open = open
  }

  public getClosed():string | null{
    return this.closed
  }

  public setClosed(closed: string | null):void{
    this.closed = closed
  }

  public getOrders():Order[]{
    return this.orders
  }

  public addOrder(order: Order):void{
    this.orders.push(order)
  }

  public getPayments():Payment[]{
    return this.payments
  }

  public addPayment(payment: Payment):void{
    this.payments.push(payment)
  }

  public getShoppingCart():ShoppingCart{
    return this.shoppingCart
  }


  public toString():string {
    return `Account | [id: ${this.accountId}, billing_address: ${this.billing_address}, is_closed: ${this.is_closed}, open: ${this.open}, closed: ${this.closed},}]]`
  }

}

export { Account }
