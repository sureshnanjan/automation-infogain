//Problem 1
let productId: number=101;
let productDescription: string= "15.6-inch laptop with Intel";
let productName: string = "HP Laptop";
let productAvailable: boolean= true;
const discountPercentage=20;

console.log("Product Id :", typeof(productId));
console.log("Product Description :",typeof(productDescription));
console.log("Product Name :",typeof(productName));
console.log("Product Availability :",typeof(productAvailable))
console.log("Discount Percentage value: ",discountPercentage)


//Activity 1: Modify the data type
//let productName: number = "HP Laptop"; // Error: Type 'string' is not assignable to type 'number'


//Activity 2: Update the value of variables
productAvailable = false; 
// discountPercentage = 30; // Error: Cannot assign to 'discountPercentage' because it is a constant.

console.log("Updated Product Availability :",productAvailable) 


