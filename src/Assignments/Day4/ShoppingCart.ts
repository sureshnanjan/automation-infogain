/**
 * Assignment #2
 * Topic: Shopping Cart
 */

// Step 1: Declare cart as string array
let cart: string[] = [];

// Step 2: Function to add multiple products
function addToCart(productNames: string[]): string[] {
    for (const product of productNames) {
        cart.push(product);
    }
    return cart;
}

// Step 3:function call and output
console.log(
    "Cart Items are: " +
    addToCart(["Moto G Play, 4th Gen", "Apple iPhone 5s"]).join(", ")
);
