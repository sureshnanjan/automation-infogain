let cart: string[] = []; // this will accept multiple string values
 
//function that accepts multiple products to the cart
function addToCart(productNames: string[]): string[] {
    for ( let product of productNames ) {
        if( typeof product !== "string") {
            throw new Error(`Invalid Product type: ${product}, only strings are allowed`);
        }
        cart.push(product);
    }
    return cart;
}
 
// addToCart(['Samsung S23', 'Mac Book Air 3', 'Dell Inspiron']);
// addToCart(['Banana', 'Orange', 'Strawberry']);
 
// console.log('Items added to cart are - ', cart);

console.log("Cart Items are: " + addToCart(['Samsung S23', 'Mac Book Air 3', 'Dell Inspiron']).join(", "));