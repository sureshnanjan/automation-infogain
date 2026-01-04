/*
An e-commerce system needs to manage order details using an interface named Order.
Properties:
• orderId (number)
• customerName (string)
• orderAmount (number)
Activity
1. Declare the Order interface.
2. Create an order object missing one mandatory property.
3. Fix the object to satisfy the interface.
4. Display order details on the console.
*/

// Declaring the interface Order with orderId, customerName, and orderAmount properties

interface Order {
    orderId: number;
    customerName: string;
    orderAmount: number;
}
// Creating an order object missing the orderAmount property

// let order1: Order = {
//     orderId: 1001,
//     customerName: "John Doe"
// };
   


let order2: Order = {
    orderId: 1001,
    customerName: "John Doe",
    orderAmount: 250.75
};
// Displaying order details on the console    
console.log(`Order ID: ${order2.orderId}`);
console.log(`Customer Name: ${order2.customerName}`);
console.log(`Order Amount: $${order2.orderAmount}`);  

