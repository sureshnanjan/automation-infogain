//interface with values of the Order Details
interface Orders{
    orderId: number;
    customerName: string;
    orderAmount: number;
}

/*
Create an order object missing one mandatory property. 
Error will be thrown
*/
// const order1 :Orders = {
//     orderId:1, 
//     customerName: "Manikandan"
// };
const order1 :Orders = {
    orderId:1, 
    customerName: "Manikandan",
    orderAmount: 2000
};

/**
 * @description Display order details on the console
 * @param item list of Order values
 */
function displayOrderDetails(item : Orders) : void{
    console.log(`Order Details: ${order1.orderId}, ${order1.orderAmount}, ${order1.customerName}`);
}

displayOrderDetails(order1);