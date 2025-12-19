// Create an interface named CartItem with: 
// • itemId (number) 
// • itemName (string) 
// • quantity (number) 
interface CartItem {
    itemId: number;
    itemName: string;
    quantity: number;
}
// Create multiple cart item objects.
let item1: CartItem = {
    itemId: 1,
    itemName: "OnePlus 15R",
    quantity: 1
};

let item2: CartItem = {
    itemId: 2,
    itemName: "Samsung Galaxy S24",
    quantity: 3
};

let item3: CartItem = {
    itemId: 3,
    itemName: "Xiaomi 14 Pro",
    quantity: 4
};
// Pass them to a function and display the total quantity.

function calculateTotalQuantity(cartItems: CartItem[]): number {
    let totalQuantity = 0;

    for (let item of cartItems) {
        totalQuantity += item.quantity;
    }

    return totalQuantity;
}

let Cart: CartItem[] = [item1, item2, item3];

console.log("Total Quantity of Items in Cart:", calculateTotalQuantity(Cart));
