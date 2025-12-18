//declare the cart variable as string array
let cart: string[] = [];

/**
 * 
 * @param product multiple product names 
 * @returns the updated cart 
 */
function addToCart(product:string[]): string[]{
    for(const p of product){
        cart.push(p);
    }
    return cart;
}

//Displaying all cart items using console log
console.log(`Cart Items are: ${addToCart(["Dairy Milk","Kitkat","Nestle"])}`);
console.log(`Cart Items are: ${addToCart(["Milky Bar","Eclairs"])}`);