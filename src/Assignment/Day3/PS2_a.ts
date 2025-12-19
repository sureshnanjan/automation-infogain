
enum MobilePrice {
  Black = 250,
  Gold = 280,
  White = 300
}

function calculateAmount(color: MobilePrice, discount: number): number {
    const price = color;
    const totalAmount = price - (price * discount / 100);
    return totalAmount;
}

// Example usage
let discount = 20;
let finalPrice = calculateAmount(MobilePrice.White, discount);

console.log("Actual Price:", MobilePrice.White);
console.log("Final Price after discount:", finalPrice); 