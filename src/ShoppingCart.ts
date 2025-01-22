import { LineItem } from "./LineItem";

class ShoppingCart {
    private lineItem: LineItem[] = []
    private created: string

    constructor(created: string) {
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

    // public setLineItem(lineItem: LineItem[]):void{
    //     this.lineItem = lineItem
    // }

    public addLineItem(lineitem: LineItem):void{
        this.lineItem.push(lineitem)
    }

    public toString():string{
        return `ShoppingCart | [Created: ${this.created} LineItem: ${this.lineItem}]`
    }
}

export { ShoppingCart }
