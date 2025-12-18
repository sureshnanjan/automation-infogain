
/**
 * Order interface represents an order placed for a pet in the store.
 * @interface Order
 */
interface Order{
    id: number;
    petId: number;
    quantity: number;
    shipDate: string;
    status: Orderstatus;
    complete: boolean;
}
/**
 * Orderstatus enum represents the possible status of an order.
 * @enum Orderstatus
 */

enum Orderstatus{
    PLACED = "placed",
    APPROVED = "approved",
    DELIVERED = "delivered"
}

const deliveredOder: Order = {
    id: 1, 
    petId: 115560, 
    quantity: 2, 
    shipDate: "2025-12-19", 
    status: Orderstatus.DELIVERED, 
    complete: true
};
function isDelivered(o: Order): boolean {
    return o.status === Orderstatus.DELIVERED;
}
const alreadyDelivered = isDelivered(deliveredOder);
console.log(alreadyDelivered)