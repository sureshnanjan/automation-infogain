//Assignment 1: Requirement
/*A developer needs to implement business logic to add multiple product values into a shopping cart. The cart should store product names as strings only, and the solution must support adding multiple products at once.
The existing code has type mismatches and incorrect function usage, which must be fixed according to the given activity instructions.
Requirements
1.The cart variable must:
    a) Be declared as a string array
    b) Store only product names (string)
2.The addToCart function must:
    a) Accept multiple product names as input
    b) Add each product to the cart
    c) Return the updated cart
3. The function should:
    a) Reject non-string values
    b) Maintain type safety using TypeScript
4. The final output must:
    a) Display all cart items correctly using console.log
*/


let cart:string[]=["Samsung","Apple","Nokia"];

function addToCart(productNames:string[]):string[]
{
    for(let productName of productNames)
    {
        cart.push(productName);
    }
  console.log("Updated cart items are: "+cart);
  return cart;
}

addToCart(["OnePlus","Sony","HTC"]); //Output: Updated cart items are: Samsung,Apple,Nokia,OnePlus,Sony,HTC


//Activity-Based Refactoring
// Step 1 changes
/* let cart: string[] = [];

//Step 2 changes
function addToCart(productNames: string[]): string[] 
{
    for (let product of productNames) 
        {
            cart.push(product);
        }
    return cart;
}

//Step 3 changes
console.log("Cart Items are: " +addToCart(["Moto G Play, 4th Gen", "Apple iPhone 5s"]).join(", ")); // Output: Cart Items are: Moto G Play, 4th Gen, Apple iPhone 5s
*/