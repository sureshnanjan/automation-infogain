/*
As part of application development, a developer needs to implement a TypeScript function that retrieves a list of mobile phones based on manufacturer and an optional identifier (id). This activity helps in understanding optional parameters, default values, and conditional logic in TypeScript functions.

The developer must declare a function named getMobileByManufacturer with the following characteristics:
Accepts two parameters:
manufacturer – a string representing the mobile manufacturer
id – an optional number parameter
If the manufacturer parameter is not provided, the function should consider Samsung as the default manufacturer

If the id is passed as 101, the function should return the Moto mobile list, regardless of the manufacturer
If the manufacturer parameter is either Samsung or Apple, the function should return the respective mobile list
The function must return a string array containing the mobile models
*/

// Declaring the function getMobileByManufacturer with an optional id parameter

function getMobileByManufacturer1(manufacturer: string = "Samsung", id?: number): string[] {
    let mobileList: string[] = [];
    if (id === 101) {
        mobileList = ["Moto G", "Moto X"];
    } else if (manufacturer === "Samsung") {
        mobileList = ["Galaxy S20", "Galaxy Note 20"];
    } else if (manufacturer === "Apple") {
        mobileList = ["iPhone 12", "iPhone 13"];
    }
    return mobileList;
}
// Calling the function and displaying the returned list on the console
let samsungMobiles1 = getMobileByManufacturer1("Samsung");
console.log("Samsung Mobiles:", samsungMobiles1);  
let appleMobiles1 = getMobileByManufacturer1("Apple");
console.log("Apple Mobiles:", appleMobiles1);  
let defaultMobiles = getMobileByManufacturer1(); 
console.log("Default (Samsung) Mobiles:", defaultMobiles);  
let motoMobiles = getMobileByManufacturer1("AnyManufacturer", 101); 
console.log("Moto Mobiles (id=101):", motoMobiles);

// // Activity 1: Modify function getMobileByManufacturer(manufacturer, id?: number): string[]
// //function getMobileByManufacturer(manufacturer: string = "Samsung", id?: number): string[] {
//     let mobileList: string[] = []; 
//     if (id === 101) {
//         mobileList = ["Moto G", "Moto X"];
//     } else if (manufacturer === "Samsung") {
//         mobileList = ["Galaxy S20", "Galaxy Note 20"];
//     } else if (manufacturer === "Apple") {
//         mobileList = ["iPhone 12", "iPhone 13"];
//     } 
//     return mobileList;
// }
// // Calling the function and displaying the returned list on the console
// let samsungMobiles1 = getMobileByManufacturer1("Samsung");
// console.log("Samsung Mobiles:", samsungMobiles1);  
// let appleMobiles1 = getMobileByManufacturer1("Apple");
// console.log("Apple Mobiles:", appleMobiles);  
// let defaultMobiles1 = getMobileByManufacturer1(); 
// console.log("Default (Samsung) Mobiles:", defaultMobiles1);  
// let motoMobiles1 = getMobileByManufacturer1("AnyManufacturer", 101); 
// console.log("Moto Mobiles (id=101):", motoMobiles1);

//Activity 2: Modify Function Invocation 
console.log("The available mobile list : " + getMobileByManufacturer1(undefined)); 
//console.log("The available mobile list : " + getMobileByManufacturer(101)); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'

console.log("The available mobile list : " + getMobileByManufacturer1(undefined, 102)); 