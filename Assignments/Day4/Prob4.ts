// Declare interface
interface Order {
  orderId: number;
  customerName: string;
  orderAmount: number;
}
 
// Fix object
const order: Order = {
  orderId: 5001,
  customerName: "Arun",
  orderAmount: 12000
};
 
// Display order details
console.log("Order ID:", order.orderId);
console.log("Customer Name:", order.customerName);
console.log("Order Amount:", order.orderAmount);
 