// Step 1: Declare cart as a string array
let cart: string[] = [];

// Step 2: Function accepts multiple product names as string array
function addToCart(productNames: string[]): string[] {
  for (let product of productNames) {
    cart.push(product);
  }
  return cart;
}

// Step 3: Correct function call with string array
console.log(
  "Cart Items are: " +
    addToCart(["Moto G Play, 4th Gen", "Apple iPhone 5s"]).join(", ")
);
