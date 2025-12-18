/**
 * https://petstore.swagger.io/
 * 
 * @author: Manikandan Selvam
 * @interface: Creating Models for petstore APIs
 */

interface ApiResponse {
    code:number,
    type:string,
    message:string
}
interface Category {
    id:number,
    name:string
}
interface Pet {
    id:number,
    category:Category,
    name:string,
    photoUrls:string[],
    tags:Tag[],
    status:PetStatus
}
interface Tag{
    id:number,
    name:string
}
interface Order{
    id:number,
    petId:number,
    quantity:number,
    shipDate:string,
    status:OrderStatus,
    complete:boolean
}
interface User{
    id:number,
    username:string,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    phone:string,
    userStatus:number
}
//enum values created for passing to the interface
enum PetStatus{
     available, pending, sold
}
enum OrderStatus{
    placed, approved, delivered
}

/**
* @description: Display the values of the ApiResponse interface
* @param response: contains values for the interface ApiResponse
*/
function displayApiResponse(response: ApiResponse):void{
    console.log(`API Response: ${response.code}, ${response.type}, ${response.message}`);
}
//intialize values for ApiResponse
let responseParam : ApiResponse = {
    code:200, type: "OK", message: "Success"
}
//calling displayApiResponse function
displayApiResponse(responseParam);
/**
* @description: Display the values of the Pet interface
* @param pet: contains values for the interface Pet
*/
function displayPet(pet:Pet):void{
    console.log(`Pet details: ${pet.id},${pet.category},${pet.name},${pet.photoUrls},${pet.tags},${pet.status}`);
}
//intialize values for Pets
let petValues : Pet = {
    id:117,
    category:{
        id:1,
        name:"Dog"
    },
    name:"Max",
    photoUrls:["www.max.com","www.petstore.com"],
    tags:[{id:2, name: "milo"}],
    status:PetStatus.available
}
//calling displayPet function
displayPet(petValues);
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
/**
* @description: Display the values of the User interface
* @param user: contains values for the interface User
*/
function displayUser(user:User):void{
    console.log(`User Details: ${user.id}, ${user.username}, ${user.firstName}, ${user.lastName}, ${user.email}, ${user.password}, ${user.phone}, ${user.userStatus}`);
}
//intialize values for Users
let userDetails : User={
    id:101,
    username: "Manikandan Selvam",
    firstName: "Manikandan",
    lastName: "Selvam",
    email: "manikandanselvam@gmail.com",
    password: "123456",
    phone: "987456321",
    userStatus: 111
}
//calling displayUser function
displayUser(userDetails);