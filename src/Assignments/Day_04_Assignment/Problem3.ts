// 1. Defining the CartItem interface
/**
 * CartItem Interface represents an item in the shopping cart
 * @interface CartItem
 */
interface CartItem{
    itemId: number;
    itemName: string;
    quantity: number;
}

// 2. Creating cart item objects
let item1: CartItem = {
    itemId: 1,
    itemName: "Laptop",
    quantity: 2
};

let item2: CartItem = {
    itemId: 2,
    itemName: "Smartphone",
    quantity: 1
};

let item3: CartItem = {
    itemId: 3,
    itemName: "Headphones",
    quantity: 3
};

// 3. Function to calculate and display total quantity
function displayTotalQuantity(cartItems: CartItem[]): void {
  let total = 0;
  for (let item of cartItems) {
    total += item.quantity;
  }
  console.log("Total Quantity of Items in Cart:", total);
}
