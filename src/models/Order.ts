interface PetOrder{
    id:number,
    petId:number,
    quantity:number,
    shipDate:string,
    status:OrderStatus,
    complete:boolean
}
//enum values created for passing to the interface
enum OrderStatus{
    placed, approved, delivered
}

//Displaying the values of the Order interface
//response: contains values for the interface Order

function displayOrder(order:PetOrder):void{
    console.log(`Order Details: ${order.id},${order.petId},${order.quantity},${order.shipDate},${order.status},${order.complete}`);
}
//intialize values for Orders
let orderValues : PetOrder={
    id:11,
    petId:101,
    quantity:2,
    shipDate:"20Dec",
    status:OrderStatus.approved,
    complete:true
}
//calling displayOrder function
displayOrder(orderValues);