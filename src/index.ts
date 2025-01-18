const { WebUser } = require('./WebUser')
const { UserState } = require('./UserState')
import { Customer } from './Customer'
import { Product } from './Product'
import { LineItem } from './LineItem'
import { Order } from './Order'
import { Account } from './Account'
import { ShoppingCart } from './ShoppingCart'

console.log("############## WEBUSER ##############")

const webUser = new WebUser("1", "p123")
webUser.setState(UserState.BANNED)
console.log(webUser.toString())

console.log("############## CUSTOMER ##############")

const cus1 = new Customer(webUser, "1", "London", "099-9999-999", "zny@gmail.com")
console.log(cus1.toString())

console.log("############## Product ##############")
const product = new Product("1", "water", "Somchai")
console.log(product.toString())

console.log("############## LineItem ##############")
const lineitem = new LineItem(product ,10, 199)
console.log(lineitem)
console.log(lineitem.toString())

console.log("############## Order ##############")
const order = new Order([lineitem], "1" , "Y", "N", "LA")
console.log(order.toString())
console.log(order.calTotal())

console.log("############## Account ##############")
const account = new Account(webUser, cus1.getId(),  cus1.getAddress(), cus1.getPhone(), cus1.getEmail(), '1', 'London', false, 'open', 'no')

console.log(account)
console.log(account.getId())
console.log(account.toString())

console.log("############## ShoppingCart ##############")
const shoppingcart = new ShoppingCart(webUser, cus1.getId(), cus1.getAddress(), cus1.getPhone(), cus1.getEmail(), account.getId(), account.getBilling_address(), account.getIs_closed(), account.getOpen(), account.getClosed(), 'last month', [lineitem])
console.log(shoppingcart)
console.log(shoppingcart.toString())