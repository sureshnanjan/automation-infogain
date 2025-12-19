/**
 * Problem 1: Basic Data Types illustrations
 * mcart Product variables- Demonstarte Typescript basic data types, const/let usage
 * 
 */

function mCart(): void {
let productId: number = 1234;
let productDescription: string = "32-inch LED Tv";
let productName: string = "LG LED Tv"
let productAvailable: boolean = true;
const discountPercentage: number = 10;

//Display types and discount
console.log("productId type: ", typeof(productId));
console.log(`productDescription type: ${typeof productDescription}`);
console.log(`productName type: ${typeof productName}`);
console.log(`productAvailable type: ${typeof productAvailable}`);
console.log(`discountPercentage type: ${typeof discountPercentage}`);

console.log(`Product Availability: ${productAvailable}`);
console.log(`Given Discount Percentage : ${discountPercentage}`);

//Activity 1: Modify Data Type 
//let modifiedProductName:number = "HP Laptop"; //Type 'string' is not assignable to type 'number'.

//Activity 2: Update Variable Values
productAvailable = false;
//discountPercentage = 30; //Cannot reassign to 'discountPercentage' because it is a constant.

console.log(`Updated Availability: ${productAvailable}`);

}

//Function call
mCart();