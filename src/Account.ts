import { Customer } from "./Customer";
import { WebUser } from "./WebUser";

class Account extends Customer {
  private accountId: string;
  private billing_address: string;
  private is_closed: boolean;
  private open: string;
  private closed: string | null;

  constructor(webUser: WebUser,id: string, address: string, phone: string, email: string, accountId: string, billing_address: string, is_closed: boolean, open: string, closed: string | null) {
    super(webUser, id, address, phone, email)
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

  public toString():string {
    return `Account | [id: ${this.accountId}, billing_address: ${this.billing_address}, is_closed: ${this.is_closed}, open: ${this.open}, closed: ${this.closed}, [Customer ${super.toString()}]]`
  }

}

export { Account }
