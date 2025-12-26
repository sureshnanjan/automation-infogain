/**
 * Assignment - Day 4
 * Author - Amlana Kumar Sahoo
 * Date - 18th Dec 2025
 * ------------------------------------------Assignment------------------------------------------------------------ 
E-commerce – Shopping Cart Item
Problem Statement: Create an interface named CartItem with:
    • itemId (number)
    • itemName (string)
    • quantity (number)

A function should calculate and display the total quantity of items added to the cart.
Activity
    1. Declare the CartItem interface.
    2. Create multiple cart item objects.
    3. Pass them to a function and display the total quantity. 
 */
//------------------------------------------Program------------------------------------------------------------

interface Products {
    itemId: number;
    itemName: string;
    quantity: number;
}

const Item1: Products = {
    itemId: 501,
    itemName: "Wireless Headphones",
    quantity: 1 
};

const Item2: Products = {
    itemId: 502,
    itemName: "Digital watch",
    quantity: 2 
};

const Item3: Products = {
    itemId: 503,
    itemName: "Mobile Charger",
    quantity: 3
};

function displayItemDetails(item: Products): void {
    console.log(`Item ID: ${item.itemId}`);
    console.log(`Item Name: ${item.itemName}`);
    console.log(`Quantity: ${item.quantity}`);
}

displayItemDetails(Item1);
displayItemDetails(Item2);
displayItemDetails(Item3);

/** Expected Output:
 Item ID: 501
Item Name: Wireless Headphones
Quantity: 1
Item ID: 502
Item Name: Digital watch
Quantity: 2
Item ID: 503
Item Name: Mobile Charger
Quantity: 3
*/

//------------------------------------------End of Assignment 3------------------------------------------------------------