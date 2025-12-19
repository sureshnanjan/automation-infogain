//E-commerce – Order Details

interface Order{
    orderId: number;
    customerName: string;
    orderAmount: number;  // orderAmount?: number;
}
//let orderObj: Order = { orderId: 10001, customerName: "Mazhil" };
let orderObj1: Order = { orderId: 10002,  customerName: "karthika",  orderAmount: 45999
};
console.log("Order ID:", orderObj1.orderId);
console.log("Customer Name:", orderObj1.customerName);
console.log("Order Amount:", orderObj1.orderAmount);
