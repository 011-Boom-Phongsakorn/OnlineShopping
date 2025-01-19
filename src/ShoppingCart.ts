import { Account } from "./Account"
import { WebUser } from "./WebUser"
import { LineItem } from "./LineItem";

class ShoppingCart extends Account {
    private lineItem: LineItem[] = []
    private created: string

    constructor(webUser: WebUser, id: string, address: string, phone: string, email: string, accountId: string,billing_address: string, is_closed: boolean, open: string, closed: string | null, created: string, lineItem: LineItem[]) {
        super(webUser, id, address, phone, email, accountId, billing_address, is_closed, open, closed);
        this.lineItem = lineItem
        this.created = created;
      }

    public getCreated():string{
        return this.created
    }

    public setCreated(create: string):void{
        this.created = create
    }

    public getLineItem():LineItem[]{
        return this.lineItem
    }

    public setLineItem(lineItem: LineItem[]):void{
        this.lineItem = lineItem
    }

    public toString():string{
        return `ShoppingCart | [Created: ${this.created} LineItem: ${this.lineItem}, [Account ${super.toString()}]]`
    }
}

export { ShoppingCart }
