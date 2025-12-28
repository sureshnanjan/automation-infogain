/**
 * TypeScript_Exercises_2
 *
 * @module assignments_Day4/day4
 * Author: Pavithra
 * Date: 18th Dec 2025
 */
//1.Activity-Based Refactoring
let cart: string[] = [];

function addToCart(productNames: string[]): string[] {
  for (let product of productNames) {
    cart.push(product);
  }
  return cart;
}
console.log(
  "Cart Items are: " +
    addToCart(["Moto G Play, 4th Gen", "Apple iPhone 5s"]).join(", "),
);

// 2.Shopping cart product details
interface Product {
  productId: number;
  productName: string;
}

function productDetails(product: Product): void {
  console.log(
    `Product ID is ${product.productId} Product Name is ${product.productName}`,
  );
}

//Passing parameters
productDetails({
  productId: 2003,
  productName: "Keyboard",
});

//3.E-commerce – Shopping Cart Item
interface CartItem {
  itemId: number;
  itemName: string;
  quantity: number;
}

//Create multiple cart item objects
const item1: CartItem = { itemId: 1, itemName: "Basket", quantity: 2 };
const item2: CartItem = { itemId: 2, itemName: "Pen", quantity: 5 };
const item3: CartItem = { itemId: 3, itemName: "Pencil", quantity: 7 };
const item4: CartItem = { itemId: 4, itemName: "Paste", quantity: 18 };

function itemQuantity(cartitems: CartItem[]): number {
  let totalQuantity = 0;
  for (let item of cartitems) {
    totalQuantity = totalQuantity + item.quantity;
  }
  console.log(`Total Quantity is ${totalQuantity}`);
  return totalQuantity;
}

itemQuantity([item1, item2, item3, item4]); //Calling function

//4. E-commerce – Order Details
interface Order {
  orderId: number;
  customerName: string;
  orderAmount: number;
}

const order1: Order = { orderId: 21, customerName: "Kesav", orderAmount: 2908 };
const order2: Order = {
  orderId: 34,
  customerName: "Sumathi",
  orderAmount: 9760,
};

function orderDetails(orderdetail: Order[]): void {
  for (let details of orderdetail) {
    console.log(`Order Details:
         ID=${details.orderId}, Customer=${details.customerName}, Amount=${details.orderAmount}`);
  }
}

orderDetails([order1, order2]); //calling function

//5.Banking – Customer Information
interface Customer {
  customerId: number;
  customerName: string;
  accountType?: string;
}

const customer1: Customer = {
  customerId: 2345,
  customerName: "Geetha",
  accountType: "Savings",
};
// const customer2:Customer={customerId:1111,customerName:'Mathi'}
// const customer3:Customer={customerId:4578,customerName:'Sugan'}

const accHolder: Customer = customer1;

function custmerDetails(customer: Customer): void {
  console.log(
    `Customer Details:CustomerId is :${customer.customerId} CustomerName is: ${customer.customerName}`,
  );
}

custmerDetails(accHolder);
