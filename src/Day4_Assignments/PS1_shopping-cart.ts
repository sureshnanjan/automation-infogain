// Cart can store only string values (product names)
let cart: string[] = [];  //Ensures cart can hold multiple string values

function addToCart(productNames: string[]): string[] {
    for (let product of productNames) {
        cart.push(product);
    }
    return cart;
}

console.log(
  "Cart Items are: " +
  addToCart(["Moto G Play, 4th Gen", "Apple iPhone 5s"]).join(", ")
);

