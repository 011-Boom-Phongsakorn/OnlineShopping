"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(created) {
        this.lineItem = [];
        this.created = created;
    }
    getCreated() {
        return this.created;
    }
    setCreated(create) {
        this.created = create;
    }
    getLineItem() {
        return this.lineItem;
    }
    // public setLineItem(lineItem: LineItem[]):void{
    //     this.lineItem = lineItem
    // }
    addLineItem(lineitem) {
        this.lineItem.push(lineitem);
    }
    toString() {
        return `ShoppingCart | [Created: ${this.created} LineItem: ${this.lineItem}]`;
    }
}
exports.ShoppingCart = ShoppingCart;
