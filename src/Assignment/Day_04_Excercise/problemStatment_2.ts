/*Consider that a developer needs to declare an interface named Product with two properties:
• productId → number
• productName → string
The developer must implement logic to populate and display Product details using this interface.
The given code snippet contains incorrect and incomplete object definitions, which must be modified as per the activity instructions to satisfy the interface requirements and correctly print product details on the console.
Requirements
1.Create an interface Product with:
oproductId of type number
o productName of type string
2.Create a function to:
o Accept a parameter of type Product
o Print all product details on the console
3.Modify the object definition as instructed in the activity:
o Initially missing productId
o Later includes an extra property productPrice (should be ignored by the interface)
4.Ensure the code compiles and executes without TypeScript errors.

*/

// Declaring the interface Product with productId and productName properties

interface Product {
    productId: number;
    productName: string;
} 
// Function to display product details

function displayProductDetails(product: Product): void {
    console.log(`Product ID: ${product.productId}`);
    console.log(`Product Name: ${product.productName}`);
}

// Creating a product object with both productId and productName properties

let product1: Product = {
    productId: 101,
    productName: "Smartphone"
}; 
// Displaying product details for product1
displayProductDetails(product1);  

// Creating another product object with an extra property productPrice (will be ignored by the interface)

let product2: Product = {
    productId: 102,
    productName: "Laptop",
    // productPrice: 1500 // This property is ignored as per the interface definition
} as Product; 

// Displaying product details for product2
displayProductDetails(product2);






