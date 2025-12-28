/**
 * TypeScript_Exercises_2
 *
 * @module assignments_Day4/day4
 * Author: Pavithra
 * Date: 18th Dec 2025
 */
//1.Activity-Based Refactoring
var cart = [];
function addToCart(productNames) {
    for (var _i = 0, productNames_1 = productNames; _i < productNames_1.length; _i++) {
        var product = productNames_1[_i];
        cart.push(product);
    }
    return cart;
}
console.log("Cart Items are: " +
    addToCart(["Moto G Play, 4th Gen", "Apple iPhone 5s"]).join(", "));
function productDetails(product) {
    console.log("Product ID is ".concat(product.productId, " Product Name is ").concat(product.productName));
}
//Passing parameters
productDetails({
    productId: 2003,
    productName: "Keyboard",
});
//Create multiple cart item objects
var item1 = { itemId: 1, itemName: "Basket", quantity: 2 };
var item2 = { itemId: 2, itemName: "Pen", quantity: 5 };
var item3 = { itemId: 3, itemName: "Pencil", quantity: 7 };
var item4 = { itemId: 4, itemName: "Paste", quantity: 18 };
function itemQuantity(cartitems) {
    var totalQuantity = 0;
    for (var _i = 0, cartitems_1 = cartitems; _i < cartitems_1.length; _i++) {
        var item = cartitems_1[_i];
        totalQuantity = totalQuantity + item.quantity;
    }
    console.log("Total Quantity is ".concat(totalQuantity));
    return totalQuantity;
}
itemQuantity([item1, item2, item3, item4]); //Calling function
var order1 = { orderId: 21, customerName: "Kesav", orderAmount: 2908 };
var order2 = {
    orderId: 34,
    customerName: "Sumathi",
    orderAmount: 9760,
};
function orderDetails(orderdetail) {
    for (var _i = 0, orderdetail_1 = orderdetail; _i < orderdetail_1.length; _i++) {
        var details = orderdetail_1[_i];
        console.log("Order Details:\n         ID=".concat(details.orderId, ", Customer=").concat(details.customerName, ", Amount=").concat(details.orderAmount));
    }
}
orderDetails([order1, order2]); //calling function
var customer1 = {
    customerId: 2345,
    customerName: "Geetha",
    accountType: "Savings",
};
// const customer2:Customer={customerId:1111,customerName:'Mathi'}
// const customer3:Customer={customerId:4578,customerName:'Sugan'}
var accHolder = customer1;
function custmerDetails(customer) {
    console.log("Customer Details:".concat(customer.customerId, " ").concat(customer.customerName));
}
custmerDetails(accHolder);
