/**
 * E-commerce – Shopping Cart Item
 * Topic: TypeScript Interfaces
 */

// Declare CartItem interface
interface CartItem {
    itemId: number;
    itemName: string;
    quantity: number;
}

// Create multiple cart item objects
const item1: CartItem = {
    itemId: 1,
    itemName: "Laptop",
    quantity: 2
};

const item2: CartItem = {
    itemId: 2,
    itemName: "Mouse",
    quantity: 3
};

const item3: CartItem = {
    itemId: 3,
    itemName: "Keyboard",
    quantity: 1
};

// Function to calculate and display total quantity
function calculateTotalQuantity(items: CartItem[]): number {
    let totalQuantity = 0;

    for (const item of items) {
        totalQuantity += item.quantity;
    }

    return totalQuantity;
}

// Function call and output
const cartItems: CartItem[] = [item1, item2, item3];
const total = calculateTotalQuantity(cartItems);

console.log("Total Quantity in Cart:", total);
