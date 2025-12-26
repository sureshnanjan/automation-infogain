/**
 * Assignment - Day 4
 * Author - Amlana Kumar Sahoo
 * Date - 18th Dec 2025
 * ------------------------------------------Assignment------------------------------------------------------------ 

E-commerce – Order Details
Problem Statement
An e-commerce system needs to manage order details using an interface named Order.

Properties:
    • orderId (number)
    • customerName (string)
    • orderAmount (number)
Activity
    1.Declare the Order interface.
    2.Create an order object missing one mandatory property.
    3.Fix the object to satisfy the interface.
    4.Display order details on the console.
*/

//------------------------------------------Program------------------------------------------------------------
interface Order {
    orderId: number;
    customerName?: string;
    orderAmount: number;
}

const order1: Order = {
    orderId: 1001,
    customerName: "Alice Johnson",
    orderAmount: 250.75
};

const order2: Order = {
    orderId: 1002,
    orderAmount: 320.75
};

function displayOrderDetails(order: Order): void {
    console.log(`Order ID: ${order.orderId}`);
    console.log(`Customer Name: ${order.customerName ?? "N/A"}`);
    console.log(`Order Amount: $${order.orderAmount}`);
}
displayOrderDetails(order1);
displayOrderDetails(order2);

/** Expected Output:

Order ID: 1001
Customer Name: Alice Johnson
Order Amount: $250.75
Order ID: 1002
Customer Name: N/A
Order Amount: $320.75
    */