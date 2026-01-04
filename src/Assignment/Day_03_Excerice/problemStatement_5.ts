/*As part of application development, a developer needs to implement a TypeScript function to retrieve a list of mobile phones based on the manufacturer name provided as input. This exercise helps in understanding function declaration, parameter passing, return types, and code behavior after commenting specific lines.
Task Description
The developer is required to declare a function named getMobileByManufacturer that:
•
Accepts a string parameter representing the manufacturer name
•
Returns a list of mobile models associated with that manufacturer
•
Displays the returned list on the console
The function logic should be implemented in such a way that different manufacturers return different mobile list

*/
// Declaring the function getMobileByManufacturer
function getMobileByManufacturer(manufacturer: string): string[] {
    let mobileList: string[] = [];

    // Implementing logic to return mobile models based on manufacturer name
    if (manufacturer.toLowerCase() === "samsung") {
        mobileList = ["Samsung Galaxy S21", "Samsung Galaxy Note 20", "Samsung Galaxy A52"];
    } else if (manufacturer.toLowerCase() === "apple") {  
        mobileList = ["iPhone 13", "iPhone 12", "iPhone SE"];
    } else if (manufacturer.toLowerCase() === "oneplus") {
        mobileList = ["OnePlus 9", "OnePlus 8T", "OnePlus Nord"];
    } else {
        mobileList = ["No models found for the given manufacturer"];
    }
    return mobileList;
}

// Calling the function and displaying the returned list on the console
let samsungMobiles = getMobileByManufacturer("Samsung");
console.log("Samsung Mobiles:", samsungMobiles);  
let appleMobiles = getMobileByManufacturer("Apple");
console.log("Apple Mobiles:", appleMobiles);  
let oneplusMobiles = getMobileByManufacturer("OnePlus");
console.log("OnePlus Mobiles:", oneplusMobiles);  
let unknownMobiles = getMobileByManufacturer("Nokia");
console.log("Unknown Manufacturer Mobiles:", unknownMobiles);

//Activity 1: Comment Specific Lines , 
// Commenting let mobileList: string[] = []; gives error as mobileList is used before initialization

//Activity 2: Modify Function Call  
//let nokiaMobiles = getMobileByManufacturer("Nokia");
//console.log("Nokia Mobiles:", nokiaMobiles);  // This will cause an error since nokiaMobiles is not defined