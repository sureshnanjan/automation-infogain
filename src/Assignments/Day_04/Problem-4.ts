
/**
 * Define an interface 'Order' with properties 'orderId' (number), 'customerName' (string), and 'orderAmount' (number).
 * @interface Order
 */
interface OrderDetails{   //interface Order name modified to avoid conflict with other interfaces
    orderId: number;
    customerName: string;
    orderAmount: number;
}

// Create an object 'order' of type 'Order' and assign appropriate values to its properties.
// let order: Order = {
//     orderId: 325,
//     customerName: "Jimmy",
//     //orderAmount: 150.45 // Error: Property 'orderAmount' is missing in type '{ orderId: number; customerName: string; }' but required in type 'Order'.
// };

// Corrected object with all required properties
let order: OrderDetails = {
    orderId: 325,
    customerName: "Jimmy",
    orderAmount: 150.45
};

console.log("Order Details:", order);