//E-commerce – Shopping Cart Item

interface CartItem{
    itemId: number;
    itemName: string;
    quantity: number;
}
let item1: CartItem = { itemId: 1, itemName: "Mobile", quantity: 2 };
let item2: CartItem = { itemId: 2, itemName: "Headphones", quantity: 1 };
let item3: CartItem = { itemId: 3, itemName: "Charger", quantity: 3 };

function calculateTotalQuantity(items: CartItem[]): number {
  let total = 0;
  for (let item of items) {
    total += item.quantity;
  }
  return total;
}
console.log("Total Quantity in Cart:",  calculateTotalQuantity([item1, item2, item3])
);