/*
Create an interface named CartItem with:
itemId (number)
itemName (string)
quantity (number)
A function should calculate and display the total quantity of items added to the cart.
Activity
1.Declare the CartItem interface.
2.Create multiple cart item objects.
3.Pass them to a function and display the total quantity.
*/


// Declaring the interface CartItem with itemId, itemName, and quantity properties

interface CartItem {
    itemId: number;
    itemName: string;
    quantity: number;
}

// Function to calculate and display the total quantity of items in the cart

function calculateTotalQuantity(...items: CartItem[]): number {
    let totalQuantity: number = 0;
    for (let item of items) {
        totalQuantity += item.quantity;
    }

    console.log(`Total Quantity of Items in Cart: ${totalQuantity}`);
    return totalQuantity;
} 

// Creating multiple cart item objects

let item1: CartItem = {

    itemId: 1,
    itemName: "Laptop",
    quantity: 2
};

let item2: CartItem = {
    itemId: 2,
    itemName: "Smartphone",
    quantity: 3
};
let item3: CartItem = {
    itemId: 3,
    itemName: "Headphones",
    quantity: 1
};

// Calling the function to calculate and display the total quantity of items in the cart

calculateTotalQuantity(item1, item2, item3);  
