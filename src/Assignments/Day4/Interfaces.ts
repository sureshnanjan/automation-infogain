/**
 * Assignment
 * Topic: Interfaces
 */

// Create Product interface
interface Product {
    productId: number;
    productName: string;
}

// Function that accepts Product and prints details
function displayProductDetails(product: Product): void {
    console.log("Product ID:", product.productId);
    console.log("Product Name:", product.productName);
}

// Extra property productPrice is allowed when using variable assignment
const productObj = {
    productId: 101,
    productName: "Laptop",
    productPrice: 55000 // Extra property
};

// Function call
displayProductDetails(productObj);

