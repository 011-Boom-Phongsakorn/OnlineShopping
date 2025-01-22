"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { WebUser } = require('./WebUser');
const { UserState } = require('./UserState');
const Customer_1 = require("./Customer");
const Product_1 = require("./Product");
const LineItem_1 = require("./LineItem");
const Order_1 = require("./Order");
const Account_1 = require("./Account");
const ShoppingCart_1 = require("./ShoppingCart");
const Payment_1 = require("./Payment");
console.log("############## WEBUSER ##############");
const webUser = new WebUser("1", "p123");
webUser.setState(UserState.BANNED);
console.log(webUser.toString());
console.log("############## Product ##############");
const product = new Product_1.Product("1", "water", "Somchai");
console.log(product.toString());
console.log("############## LineItem ##############");
const lineitem = new LineItem_1.LineItem(product, 10, 199);
console.log(lineitem);
console.log(lineitem.toString());
console.log("############## ShoppingCart ##############");
const shoppingcart1 = new ShoppingCart_1.ShoppingCart('last month');
// console.log(shoppingcart)
console.log(shoppingcart1.toString());
// console.log(shoppingcart.getLineItem())
console.log("############## Payment ##############");
const payment = new Payment_1.Payment('1', 'wait', 100, '===');
console.log(payment.getId());
console.log("############## Order ##############");
const order1 = new Order_1.Order("1", "Y", "N", "LA");
console.log(order1.toString());
console.log(order1.calTotal());
console.log("############## Account ##############");
const account1 = new Account_1.Account('1', 'London', false, 'open', 'no');
console.log("############## CUSTOMER ##############");
const cus1 = new Customer_1.Customer(account1, webUser, "1", "London", "099-9999-999", "zny@gmail.com");
console.log(cus1.toString());
// console.log(account)
// console.log(account.getId())
console.log(account1.toString());
console.log("############## ShoppingCart ##############");
