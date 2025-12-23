interface Order{
    id:number;
    petId:number;
    quantity:number;
    shipDate:string;
    status:Orderstatus;
    complete:boolean;
}
/**
 * Orderstatus enum represents the possible statuses of an order.
 * @enum Orderstatus
 */

enum Orderstatus{
    PLACED="place",
    APPROVED="approv",
    DELIVERED="delivere"
}

const order1:Order={
    id: 1,
    petId: 10197,
    quantity: 6,
    shipDate: "2025-12-18",
    status: Orderstatus.PLACED,
    complete: true,
    orderId: 0,
    customerName: "string",
    customerAmount: 10000
};
console.log(order1);