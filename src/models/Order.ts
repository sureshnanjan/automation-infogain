
export interface Order {
  id?: number;
  petId: number;
  quantity: number;
  shipDate?: string;
  status?: OrderStatus;
  complete?: boolean;
}

enum OrderStatus {
  PLACED = 'placed',
  APPROVED = 'approved',
  DELIVERED = 'delivered',
}
function displayOrder(order : Order):void{
    console.log(`Order Details: 
        ${order.id}
        ${order.petId}
        ${order.quantity}
        ${order.shipDate}
        ${order.status}
        ${order.complete}`);
}
//intialize values for Orders
let order: Order = {
  id: 1,
  petId: 10,
  quantity: 2,
  shipDate: "2025-12-19",
  status: OrderStatus.APPROVED,
  complete: true
};

//calling displayOrder function
displayOrder(order);