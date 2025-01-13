import { stringify } from "querystring"
import { OrderStatus } from "./OrderStatus"
import { LineItem } from "./LineItem"

export class Order {
    private lineItems: LineItem[] = []
    private number: string
    private ordered: string
    private shipped: string
    private ship_to: string
    private status: OrderStatus
    private total: number = 0

    constructor(lineItems: LineItem[],number: string, ordered: string, shipped: string, ship_to: string){
        this.lineItems = lineItems
        this.number = number
        this.ordered = ordered
        this.shipped = shipped
        this.ship_to = ship_to
        this.status = OrderStatus.NEW
    }

    public getNumber():string{
        return this.number
    }

    public getOrderedDate():string{
        return this.ordered
    }

    public getShippedDate():string{
        return this.shipped
    }

    public setShippedDate(shipped: string):void{
        this.shipped = shipped
    }

    public getShip_toAddress():string{
        return this.ship_to
    }

    public setShip_toAddress(ship: string):void{
        this.ship_to = ship
    }

    public getStatus():OrderStatus {
        return this.status
    }

    public setStatus(status: OrderStatus):void {
        this.status = status
    }

    public getTotal():number{
        return this.total
    }

    public setTotal(total: number):void{
        this.total = total
    }

    public calTotal():number{
        let total = 0
        for(let i = 0; i < this.lineItems.length; i++){
            total += this.lineItems[i].getQuantity() * this.lineItems[i].getPrice()
        }
        return total
    }

    public toString():string{
        return `Order | [number = ${this.number}, ordered = ${this.ordered}, shipped = ${this.shipped}, ship_to = ${this.ship_to}, status = ${this.status}, total = ${this.total}]`
    }

}