/**
 * TypeScript_Exercises_1
 *
 * @module assignments_Day3/day3
 * Author: Pavithra
 * Date: 17th Dec 2025
 */
var discountPercentage = 5;
function productDetails1() {
    var productId;
    var productDescription;
    var productName;
    var productAvailable;
    productId = 7001;
    productDescription = "Standard features";
    productName = "Nokia";
    productAvailable = true;
    console.log("Product ID: ".concat(typeof productId));
    console.log("Product Description: ".concat(typeof productDescription));
    console.log("Product Name: ".concat(typeof productName));
    console.log("Product Available: ".concat(typeof productAvailable));
    console.log("Discount Percentage: ".concat(typeof discountPercentage, ",discountPercentage: ").concat(discountPercentage, " "));
}
productDetails1();
/*
Activity 1: Modify Data Type
• Change the data type of productName from string to number a
• Re-execute the program and observe the output.
*/
function productDetails2() {
    var productName = 56;
    console.log("Modified Product Name: ".concat(typeof productName)); // Output: number
    console.log("productName value:", productName); // Output:iPhone 15 Pro
}
productDetails2();
/*
Activity 2: Update Variable Values
perform the following updates:
• Reassign productAvailable to false
• Reassign discountPercentage to 30
• Print the updated values on the console
• Re-execute the code and verify the changes
*/
var productAvailable = false;
function productDetails3() {
    //discountPercentage = 30; // This will cause an error since discountPercentage is a constant
    console.log("Updated Product Available: ".concat(productAvailable)); // Output: false
    console.log("Discount Percentage remains unchanged: ".concat(discountPercentage)); // Output: 15.5
}
productDetails3();
