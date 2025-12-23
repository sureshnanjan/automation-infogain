/**
 * https://petstore.swagger.io/
 * 
 * @author: Manikandan Selvam
 * @interface: Creating Models for petstore APIs
 */
interface Order{
    id:number,
    petId:number,
    quantity:number,
    shipDate:string,
    status:OrderStatus,
    complete:boolean
}
enum OrderStatus{
    placed, approved, delivered
}
/**
* @description: Display the values of the Order interface
* @param response: contains values for the interface Order
*/
function displayOrder(order:Order):void{
    console.log(`Order Details: ${order.id},${order.petId},${order.quantity},${order.shipDate},${order.status},${order.complete}`);
}
//intialize values for Orders
let orderValues : Order={
    id:55,
    petId:107,
    quantity:3,
    shipDate:"18Dec",
    status:OrderStatus.approved,
    complete:true
}
//calling displayOrder function
displayOrder(orderValues);