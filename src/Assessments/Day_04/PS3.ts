// Declare interface
interface CartItem {
  itemId: number;
  itemName: string;
  quantity: number;
}
 
// Create cart items
const item1: CartItem = { itemId: 1, itemName: "Mobile", quantity: 2 };
const item2: CartItem = { itemId: 2, itemName: "Charger", quantity: 1 };
const item3: CartItem = { itemId: 3, itemName: "Headphones", quantity: 3 };
 
//Function to calculate total quantity
function calculateTotalQuantity(items: CartItem[]): void {
  let total = 0;
  for (let item of items) {
    total += item.quantity;
  }
  console.log("Total Quantity:", total);
}
 
calculateTotalQuantity([item1, item2, item3]);