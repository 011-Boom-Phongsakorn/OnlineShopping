import { OrderStatus } from "./OrderStatus"
import { LineItem } from "./LineItem"
import { Payment } from "./Payment"

export class Order {
    private lineItems: LineItem[] = []
    private payment: Payment[] = []
    private number: string
    private ordered: string
    private shipped: string
    private ship_to: string
    private status: OrderStatus
    private total: number = 0

    constructor( number: string, ordered: string, shipped: string, ship_to: string){
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

    public getPayments():Payment[]{
        return this.payment
    }

    public addPayment(payment: Payment):void{
        this.payment.push(payment)
    }

    public addLineItem(lineItems: LineItem):void{
        this.lineItems.push(lineItems)
    }

    public getLineItems():LineItem[]{
        return this.lineItems
    }



    public toString():string{
        return `Order | [number = ${this.number}, ordered = ${this.ordered}, shipped = ${this.shipped}, ship_to = ${this.ship_to}, status = ${this.status}, total = ${this.total}, [Payment | ${this.payment}]]`
    }

}