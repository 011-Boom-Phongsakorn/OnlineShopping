"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
const Account_1 = require("./Account");
class ShoppingCart extends Account_1.Account {
    constructor(webUser, id, address, phone, email, accountId, billing_address, is_closed, open, closed, created, lineItem) {
        super(webUser, id, address, phone, email, accountId, billing_address, is_closed, open, closed);
        this.lineItem = [];
        this.lineItem = lineItem;
        this.created = created;
    }
    getCreated() {
        return this.created;
    }
    setCreated(create) {
        this.created = create;
    }
    toString() {
        return `ShoppingCart | [Created: ${this.created} LineItem: ${this.lineItem}, [Account ${super.toString()}]]`;
    }
}
exports.ShoppingCart = ShoppingCart;
