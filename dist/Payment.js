"use strict";
class Payment {
    constructor(id, paid, total, details) {
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
    }
    getId() {
        return this.id;
    }
    getPaid() {
        return this.paid;
    }
    setPaid(paid) {
        this.paid = paid;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    getDetails() {
        return this.details;
    }
    setDetails() {
        this.details = this.details;
    }
    toString() {
        return `Payment | [id: ${this.id}, paid: ${this.paid}, total: ${this.total}, details: ${this.details}]`;
    }
}
