/*As part of the mCart application development, you are required to demonstrate the use of basic data types in TypeScript by declaring and manipulating product-related variables.
Variable Name                Description                            Data Type
productId           Unique identifier of the product                  number
productDescription  Description of the product                        string
productName            Name of the product                            string
productAvailable          Availability status of the product      boolean
discountPercentage       Discount offered on the product            number (constant)
*/


// Declaring variables with appropriate data types
let productId: number = 101;
let productDescription: string = "High-quality wireless headphones with noise cancellation.";
let productName: string = "Wireless Headphones";
let productAvailable: boolean = true;
const discountPercentage: number = 10;

//Display the type of each variable using typeof.
console.log("Type of productId:", typeof productId);
console.log("Type of productDescription:", typeof productDescription);
console.log("Type of productName:", typeof productName);
console.log("Type of productAvailable:", typeof productAvailable);
console.log("Type of discountPercentage:", typeof discountPercentage);


console.log("Product ID: " + productId);
console.log("Product Name: " + productName);
console.log("Product Description: " + productDescription);
console.log("Product Available: " + (productAvailable ? "In Stock" : "Out of Stock"));
console.log("Discount Percentage: " + discountPercentage + "%");

//Printing variable values and types in a tabular format
console.table({
    productId: { value: productId, type: typeof productId },
    productName: { value: productName, type: typeof productName },
    productDescription: { value: productDescription, type: typeof productDescription },
    productAvailable: { value: productAvailable ? "In Stock" : "Out of Stock", type: typeof productAvailable },
    discountPercentage: { value: discountPercentage + "%", type: typeof discountPercentage }
});
//Activity 1: Modify Data Type Change the data type of productName from string to number

//let productName: number = 12345; // This will cause a type error

//Update Variable Values Reassign productAvailable to false and Reassign discountPercentage to 30
productAvailable = false;
//discountPercentage = 30;  // This will cause an error since discountPercentage is a constant
console.log("Updated Product Available: " + (productAvailable ? "In Stock" : "Out of Stock"));
