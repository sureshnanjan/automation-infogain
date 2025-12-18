//interface with values of the Cart Item
interface CartItem{
    itemId: number;
    itemName: string;
    quantity: number;
}

const product1 = {itemId:1, itemName: "Sony Speaker", quantity:2};
const product2 = {itemId:2, itemName: "JBL Speaker", quantity:4};

/**
 * 
 * @param item list of Cart Items 
 * @returns sum of the quantity in the Cart
 */
function displayTotalQuantity(item : CartItem[]) : number{
    let totalQuantity = 0;
    for(const q of item){
        totalQuantity = totalQuantity + q.quantity;
    }
    return totalQuantity;
}

console.log(`Total Quantity in Cart: ${displayTotalQuantity([product1, product2])}`);