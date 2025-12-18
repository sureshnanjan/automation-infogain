/**
 * TypeScript_Exercises_1
 *
 * @module assignments_Day3/day3
 * Author: Pavithra
 * Date: 17th Dec 2025
 */
const discountPercentage: number = 5;
function productDetails1():void{
let productId: number;
let productDescription: string;
let productName: string;
let productAvailable: boolean;


productId = 7001;
productDescription = "Standard features";
productName = "Nokia";
productAvailable = true;

console.log(`Product ID: ${typeof productId}`);
console.log(`Product Description: ${typeof productDescription}`);
console.log(`Product Name: ${typeof productName}`);
console.log(`Product Available: ${typeof productAvailable}`);
console.log(
  `Discount Percentage: ${typeof discountPercentage},discountPercentage: ${discountPercentage} `,
);
}
productDetails1()
/* 
Activity 1: Modify Data Type
• Change the data type of productName from string to number a
• Re-execute the program and observe the output.
*/
function productDetails2():void{
let productName:number=56;
console.log(`Modified Product Name: ${typeof productName}`); // Output: number
console.log("productName value:", productName); // Output:iPhone 15 Pro
}
productDetails2()
/*
Activity 2: Update Variable Values
perform the following updates:
• Reassign productAvailable to false
• Reassign discountPercentage to 30
• Print the updated values on the console
• Re-execute the code and verify the changes
*/

let productAvailable = false;
function productDetails3():void{


//discountPercentage = 30; // This will cause an error since discountPercentage is a constant
console.log(`Updated Product Available: ${productAvailable}`); 
console.log(`Discount Percentage remains unchanged: ${discountPercentage}`);
}
productDetails3()


