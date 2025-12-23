/**
 * https://petstore.swagger.io/#/pet/uploadFile
 * 
 * @module assignments_Day4/day4
 * Author: Amlana Kumar Sahoo
 * Date: 18th Dec 2025
 */

interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;
}
interface Orders {
    id: number;
    petId: number;
    quantity: number;
    shipDate: string;
    status: string;
    complete: boolean;
}
interface Tag {
    id: number;
    name: string;
}
interface Pet{
    id: number;
    category: {
        id: number;
        name: string;
    };
    name: string;
    photoUrls: string[];
    tags: Tag[];
    status: string;
}


const User1: User = {
    id: 1,
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: "password123",
    phone: "123-456-7890",
    userStatus: 1,
};
const Order1: Orders = {
    id: 101,
    petId: 202,
    quantity: 1,
    shipDate: "2023-04-01T12:00:00Z",
    status: "placed",
    complete: false,
};

const Pet1: Pet = {
    id: 202,
    category: { id: 1, name: "Dogs" },
    name: "Buddy",
    photoUrls: ["http://example.com/photo1.jpg", "http://example.com/photo2.jpg"],
    tags: [{ id: 1, name: "friendly" }, { id: 2, name: "trained" }],
    status: "available",
};

function getUserInfo(user: User): string {
    return `User Info: ${user.firstName} ${user.lastName}, Email: ${user.email}, Phone: ${user.phone}`;
}
function getOrderInfo(order: Orders): string {
    return `Order Info: Order ID ${order.id}, Pet ID: ${order.petId}, Quantity: ${order.quantity}, Status: ${order.status}`;
}
function getPetInfo(pet: Pet): string {
    return `Pet Info: Name: ${pet.name}, Category: ${pet.category.name}, Status: ${pet.status}`;
}

console.log(getUserInfo(User1));
console.log(getOrderInfo(Order1));
console.log(getPetInfo(Pet1));  