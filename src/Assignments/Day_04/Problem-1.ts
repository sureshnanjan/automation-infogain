
let cart:string[]=[];
/**
 * Adding items to the cart
 * @param items 
 * @returns string[]
 */
function addToCart(items:string[]):string[]{
   // const cart:string[]=[];
    for(let item =0; item < items.length; item++){
        if(typeof(items[item])==="string")
           cart.push(items[item]);
    }
    return cart;
}

const updatedCart=addToCart(["Mobile","Watches","Monitor","Keyboard"]);
console.log("Cart Items are:",updatedCart);