/**
 * E-commerce – Order Details
 */

// Declare Order interface
interface Order1 {
    orderId: number;
    customerName: string;
    orderAmount: number;
}

// Create an order object
/*
const orderObj: Order = {
    orderId: 105,
    customerName: "Amol"
    // orderAmount is missing → TypeScript error
};
*/

// Fix the object to satisfy the interface
const order1: Order1 = {
    orderId: 105,
    customerName: "Amol",
    orderAmount: 89999,
};

// Display order details
function displayOrderDetails(order: Order1): void {
    console.log("Order ID:", order.orderId);
    console.log("Customer Name:", order.customerName);
    console.log("Order Amount:", order.orderAmount);
}

displayOrderDetails(order1);