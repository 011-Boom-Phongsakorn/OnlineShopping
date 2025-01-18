"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const Customer_1 = require("./Customer");
class Account extends Customer_1.Customer {
    constructor(webUser, id, address, phone, email, accountId, billing_address, is_closed, open, closed) {
        super(webUser, id, address, phone, email);
        this.accountId = accountId;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
    }
    getId() {
        return this.accountId;
    }
    getBilling_address() {
        return this.billing_address;
    }
    setBilling_address(billing_address) {
        this.billing_address = billing_address;
    }
    getIs_closed() {
        return this.is_closed;
    }
    setIs_closed(is_closed) {
        this.is_closed = is_closed;
    }
    getOpen() {
        return this.open;
    }
    setOpen(open) {
        this.open = open;
    }
    getClosed() {
        return this.closed;
    }
    setClosed(closed) {
        this.closed = closed;
    }
    toString() {
        return `Account | [id: ${this.accountId}, billing_address: ${this.billing_address}, is_closed: ${this.is_closed}, open: ${this.open}, closed: ${this.closed}, [Customer ${super.toString()}]]`;
    }
}
exports.Account = Account;
