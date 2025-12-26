/**
 * Assignment - Day 4
 * Author - Amlana Kumar Sahoo
 * Date - 18th Dec 2025
 * 
 * ------------------------------------------Assignment------------------------------------------------------------
A developer needs to implement business logic to add multiple product values into a shopping cart. 
The cart should store product names as strings only, and the solution must support adding multiple products at once.
The existing code has type mismatches and incorrect function usage, which must be fixed according to the given activity instructions.

Requirements
1. The cart variable must:
    o Be declared as a string array
    o Store only product names (string)
2. The addToCart function must:
    o Accept multiple product names as input
    o Add each product to the cart
    o Return the updated cart
3. The function should:
    o Reject non-string values
    o Maintain type safety using TypeScript
4. The final output must:
    o Display all cart items correctly using console.log
 * ------------------------------------------Solution------------------------------------------------------------
 */

//Cart declaration (string array only)
let cart: string[] = [];

//Using rest parameters to accept multiple inputs safely:
function addToCart(...products: string[]): string[] {
    for (const product of products) {
        cart.push(product);
    }
    return cart;
}

//Usage (adding multiple products at once)
addToCart("Laptop", "Mouse", "Keyboard");
addToCart("Monitor");

//The following will cause a TypeScript compile-time error (as required):
// addToCart("Phone", 123); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'

//Final Output (display cart items)
console.log("Cart Items:", cart);


/** Expected Output:
 * Cart Items: [ 'Laptop', 'Mouse', 'Keyboard', 'Monitor' ]
 */

//------------------------------------------End of Assignment 1------------------------------------------------------------

