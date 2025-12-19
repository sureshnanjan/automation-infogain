interface Order {
    orderId: number;
    customerName: string;
    orderAmount: number;
}

// Create an order object missing one mandatory property.
// let order1 = {
//     orderId: 101,
//     customerName: "Ravi"
// };

let order1: Order = {
    orderId: 101,
    customerName: "Ravi",
    orderAmount: 3500
};

console.log("Order Id:", order1.orderId);
console.log("Customer Name:", order1.customerName);
console.log("Order Amount:", order1.orderAmount);
