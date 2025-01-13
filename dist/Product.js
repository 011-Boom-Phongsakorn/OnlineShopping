"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, supplier) {
        this.id = id;
        this.name = name;
        this.supplier = supplier;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSupplier() {
        return this.supplier;
    }
    setSupplier(supplier) {
        this.supplier = supplier;
    }
    toString() {
        return `Product | [id = ${this.id}], [name = ${this.name}], [supplier = ${this.supplier}]`;
    }
}
exports.Product = Product;
