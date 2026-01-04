/*
Problem Statement
As part of application development, a developer needs to work with Tuples in TypeScript to represent product availability information. This activity is designed to help understand tuple structure, type enforcement, and the labeled tuple concept introduced in TypeScript.
Task Description
The developer is required to declare a tuple variable named productAvailable consisting of:
•
A string value representing the product name
•
A boolean value representing the availability status
Based on the availability status:
•
If the value is true, display the message: “The product <productName> is available”
•
If the value is false, display the message: “The product <productName> is not available”
Appropriate logic should be implemented to assign and read the productName and availability values from the tuple.
Initial Requirements
1.
Declare a tuple variable named productAvailable with the correct data types.
2.
Assign initial values to the tuple.
3.
Implement conditional logic to check product availability.
4.
Display the appropriate message on the console based on the availability value.
*/

// Declaring a tuple variable named productAvailable
let productAvailableinTuple: [string, boolean]; 

// Assigning initial values to the tuple
productAvailableinTuple = ["Samsung Galaxy J5", true];

// Implementing conditional logic to check product availability
if (productAvailableinTuple[1]) {
    console.log(`The product ${productAvailableinTuple[0]} is available`);
} else {  
    console.log(`The product ${productAvailableinTuple[0]} is not available`);
}

//Activity 1: Modify Tuple Using push() with Extra Values
//productAvailableinTuple.push("Samsung Galaxy ultra", false, 1); //Argument of type '1' is not assignable to parameter of type 'string | boolean'.ts(
console.log("Tuple after push:", productAvailableinTuple[0]);

//Activity 2: Modify Tuple with Incorrect Data Order  

//productAvailableinTuple = [true, "Samsung Galaxy J5"]; // Type 'boolean' is not assignable to type 'string'.ts(2322)

//Activity 3: Implement Labeled Tuple   
type ProductAvailability = [productName: string, isAvailable: boolean];

let labeledProductAvailable: ProductAvailability = ["iPhone 13", false];  
