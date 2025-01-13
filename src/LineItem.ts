import { Product } from "./Product"

class LineItem {
    private product: Product
    private quantity: number
    private price: number

    constructor(product: Product, quantity: number, price: number){
        this.product = product
        this.quantity = quantity
        this.price = price
    }

    public getQuantity():number{
        return this.quantity
    }

    public setQuantity(quantity: number):void{
        this.quantity = quantity
    }

    public getPrice():number{
        return this.price
    }

    public setPrice(price: number):void{
        this.price = price
    }


    public toString():string{
        return `LineItem | [Quantity = ${this.quantity}], [Price = ${this.price}], [Product = ${this.product.toString()}]`
    }
}

export { LineItem }