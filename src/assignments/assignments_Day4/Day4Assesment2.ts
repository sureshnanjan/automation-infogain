/**
 * Assignment - Day 4
 * Author - Amlana Kumar Sahoo
 * Date - 18th Dec 2025
 * ------------------------------------------Assignment------------------------------------------------------------ 
 */

/** 1.Create an interface Product with:
   o productId of type number
   o productName of type string
*/
interface Product {
    productId: number;
    productName: string;
    productPrice?: number; // Optional property to allow extra properties
}

/** 2.Create a function to:
o Accept a parameter of type Product
o Print all product details on the console
*/
function printProductDetails(product: Product): void {
    console.log("Product ID:", product.productId);
    console.log("Product Name:", product.productName);
}

/** 3. Modify the object definition as instructed in the activity:
o Initially missing productId
o Later includes an extra property productPrice (should be ignored by the interface) 
*/
const product1: Product = {
    productId: 101,
    productName: "Smartphone",
    productPrice: 699.99 // This extra property will be ignored by the interface
};

//Function call to print product details
printProductDetails(product1);


/** Expected Output:
 * Product ID: 101
 * Product Name: Smartphone
 */