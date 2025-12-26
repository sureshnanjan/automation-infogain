/*
Assignment: Day 3 - TypeScript Basics 
Author: Amlana Kumar Sahoo
Date: 17-DEC-2025
*/

/*Problem Statement
As part of the mCart application development, you are required to demonstrate the use of basic data types in TypeScript by declaring and manipulating product-related variables.
The objective of this exercise is to help you understand:
• Type declaration in TypeScript
• Usage of const and let
• Type reassignment and value updates
• Console output validation after code changes
*/

//Initial Requirements
let productId: number;
let productDescription: string;
let productName: string;
let productAvailable: boolean;
const discountPercentage: number = 15.5;

productId = 101;
productDescription = "A high-quality smartphone with advanced features.";
productName = "iPhone 15 Pro";
productAvailable = true;

console.log(`Product ID: ${typeof(productId)}`);               // Output: number
console.log(`Product Description: ${typeof(productDescription)}`);    // Output: string        
console.log(`Product Name: ${typeof(productName)}`);           // Output: string
console.log(`Product Available: ${typeof(productAvailable)}`);        // Output: boolean
console.log(`Discount Percentage: ${typeof(discountPercentage)},discountPercentage: ${discountPercentage} `);   // Output: number

/* 
Activity 1: Modify Data Type
• Change the data type of productName from string to number a
• Re-execute the program and observe the output.
*/

productName as unknown as number;  // Changed from string to number
console.log(`Modified Product Name: ${typeof(productName)}`); // Output: number

console.log("productName value:", productName); // Output:iPhone 15 Pro


/*
Activity 2: Update Variable Values
perform the following updates:
• Reassign productAvailable to false
• Reassign discountPercentage to 30
• Print the updated values on the console
• Re-execute the code and verify the changes
*/

productAvailable = false;
//discountPercentage = 30; // This will cause an error since discountPercentage is a constant
console.log(`Updated Product Available: ${productAvailable}`); // Output: false
console.log(`Discount Percentage remains unchanged: ${discountPercentage}`); // Output: 15.5