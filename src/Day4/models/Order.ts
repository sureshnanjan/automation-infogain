//enum for Order Status
enum OrderStatus
{
    placed="placed",
    approved="approved",
    delivered="delivered"
}

//interface for Order
interface Order
{
    id: number;
    petId: number;
    quantity: number;
    shipDate: string;
    status: OrderStatus;
    complete: boolean;
}

//Create an instance of an Order object.
const order: Order ={
    id: 5566,
    petId: 67543,
    quantity: 2,    
    shipDate: "2025-12-12T10:00:00Z",
    status: OrderStatus.placed,
    complete: false
}

//Logs the details of an order to the console in a formatted string.
function printOrderInfo(order: Order): void {
    console.log(`Order Details:
    ID: ${order.id}
    Pet ID: ${order.petId}
    Quantity: ${order.quantity}
    Ship Date: ${order.shipDate}
    Status: ${order.status}
    Complete: ${order.complete}`
    );
}

// Execute the function to display the order information
printOrderInfo(order);