enum MobilePrice {
  Black = 250,
  Gold = 280,
  White = 300
}

function calculateAmount(color: MobilePrice, discount: number): number {
  let totalAmount = color - discount;
  return totalAmount;
}

// Example usage
let discount = 20;
let finalPrice = calculateAmount(MobilePrice.White, discount);

console.log("Actual Price:", MobilePrice.White);
console.log("Final Price after discount:", finalPrice);
