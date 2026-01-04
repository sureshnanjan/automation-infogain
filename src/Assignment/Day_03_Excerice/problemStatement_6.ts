/*As part of application development, a developer needs to work with arrays of objects and arrow functions in TypeScript. This activity focuses on filtering data based on conditions and understanding how arrow functions and loop logic can be modified to control output.
Task Description
The developer is required to declare a manufacturers array consisting of four objects, where each object contains:
id (manufacturer name)
price (price in dollars)
An arrow function named myFunction must be implemented to populate the manufacturer id values whose price is greater than or equal to 200 dollars.
*/

// Declaring the manufacturers array with objects

let manufacturers: { id: string; price: number }[] = [
    { id: "Samsung", price: 250 },
    { id: "Apple", price: 300 },
    { id: "OnePlus", price: 150 },
    { id: "Nokia", price: 180 }
];
// Implementing the arrow function to filter manufacturers based on price
let myFunction = (): string[] => {
    let result: string[] = [];  
    for (let manufacturer of manufacturers) {
        if (manufacturer.price >= 200) {
            result.push(manufacturer.id);
        } 

    }
    return result;
}
// Calling the function and displaying the result on the console

let expensiveManufacturers = myFunction();
console.log("Manufacturers with price >= $200:", expensiveManufacturers);

//Activity 1: Modify Arrow Function Logic

let myFunctionModified = (): string[] => {
    let result: string[] = [];
    for (let manufacturer of manufacturers) {
        if (manufacturer.id === "Apple") {
            console.log("Price of Apple:", manufacturer.price);
        }
        if (manufacturer.price >= 200) {
            result.push(manufacturer.id);
        }
    }
    return result;
}
let expensiveManufacturersModified = myFunctionModified();
console.log("Manufacturers with price >= $200:", expensiveManufacturersModified); 

//Activity 2: Modify for Loop Logic Modify the for loop logic to: Populate only the "Microsoft" manufacturer id and price details

let myFunctionMicrosoft = (): string[] => {
    let result: string[] = [];
    for (let manufacturer of manufacturers) {
        if (manufacturer.id === "Microsoft") {
            result.push(manufacturer.id);
            console.log("Price of Microsoft:", manufacturer.price);
        } 
    }
    return result;
} 
let microsoftManufacturers = myFunctionMicrosoft();
console.log("Microsoft Manufacturer:", microsoftManufacturers); 
// This will not display anything as "Microsoft" is not in the manufacturers array  


