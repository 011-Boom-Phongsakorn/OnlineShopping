"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(product, quantity, price) {
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    toString() {
        return `LineItem | [Quantity = ${this.quantity}], [Price = ${this.price}], [Product = ${this.product.toString()}]`;
    }
}
exports.LineItem = LineItem;
