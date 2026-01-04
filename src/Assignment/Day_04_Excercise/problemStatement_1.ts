/*
A developer needs to implement business logic to add multiple product values into a shopping cart. The cart should store product names as strings only, and the solution must support adding multiple products at once.
The existing code has type mismatches and incorrect function usage, which must be fixed according to the given activity instructions.
*/

// Declaring the cart variable as a string array to store product names
let cart: string[] = [];


// Function to add multiple product names to the cart

function addToCart(...products: string[]): string[] {
    for (let product of products) {
        cart.push(product);
    } 
    return cart;
} 
// Calling the addToCart function with multiple product names

let updatedCart = addToCart("Laptop", "Smartphone", "Headphones");

// Displaying the updated cart items

console.log("Cart Items:", updatedCart);

// Calling the addToCart function with additional product names

updatedCart = addToCart("Tablet", "Smartwatch");

// Displaying the updated cart items again

console.log("Updated Cart Items:", updatedCart);

// Calling the addToCart function with a non-string value (should be rejected by TypeScript)
// updatedCart = addToCart("Camera", 123 as any); // This line is commented out to avoid type error
// console.log("Cart Items after adding non-string value:", updatedCart); 
// The above line is commented out because TypeScript will throw a type error for non-string values





