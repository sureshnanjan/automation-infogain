// Step 1: Define the interface
interface CartItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

// Step 2: Create multiple cart items
const cartItems: CartItem[] = [
  { productId: 202, productName: "Samsung", price: 28000, quantity: 2 },
  { productId: 303, productName: "Motorola", price: 5000, quantity: 1 },
  { productId: 101, productName: "Vivo", price: 25000, quantity: 1 }
];

// Step 3: Function to calculate total amount
function calculateTotal(items: CartItem[]): number {
  let total = 0;
  for (let item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

// Step 4: Display total cart amount
console.log("Total Cart Amount:", calculateTotal(cartItems));