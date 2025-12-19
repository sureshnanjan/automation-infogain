// Problem statement 7 Using Optional parameter
/**
 * Mobile manufacturer's inventry details
 * @param manufacturerName - manufacturers like Apple, Samsung, Nokia
 * @returns list of mobile models
 */

//for Activity 1: uncomment line 9 and comment line 10
//function getMobileByManufacturer(manufacturerName, id?: number): string[] {

function getMobileByManufacturer(manufacturerName: string = "Samsung", id?: number): string[] {
    const mobiles: Record<string, string[]> = { "Apple": ["iPhone 13", "iPhone 14 Pro", "iPhone SE"],
        "Samsung": ["Galaxy S21", "Galaxy A50", "Galaxy Note20"],
        "Nokia": ["Nokia 8.5", "Nokia 5.4", "Nokia G10"],
         "Moto": ["Moto G62", "Moto G100", "Moto Edge"]
    } ;

    if (id ===101) return mobiles["Moto"] ;
    else return mobiles[manufacturerName] || [];
}
console.log("Default Samsung", getMobileByManufacturer());
console.log("ID 101 (Moto)", getMobileByManufacturer("any", 101));
console.log("Apple mobiles:", getMobileByManufacturer("Apple"));

//Activity 1: Modify Function Declaration 
//Modify function getMobileByManufacturer(manufacturer, id?: number): string[]
// Default Samsung condition gives error

//Activity 2: Modify Function Invocation 
console.log("The available mobile list : " + getMobileByManufacturer(undefined)); 
//console.log("The available mobile list : " + getMobileByManufacturer(101)); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'

console.log("The available mobile list : " + getMobileByManufacturer(undefined, 102)); 