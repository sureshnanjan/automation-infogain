
/**
 * Order interface represents an order placed for a pet in the store.
 * @interface Order
 */
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
<<<<<<< HEAD
    PLACED="placed",
    APPROVED="approved",
    DELIVERED="delivered"
=======
    placed,
    approved,
    delivered
>>>>>>> 978052a (Updated Petstore Models files with interfaces and enum with examples)
}

const order1:Order={
    id:1, 
    petId:101, 
    quantity:1, 
    shipDate:"2025-12-18", 
<<<<<<< HEAD
    status:Orderstatus.PLACED, 
=======
    status:Orderstatus.placed, 
>>>>>>> 978052a (Updated Petstore Models files with interfaces and enum with examples)
    complete:true
};
console.log(order1);