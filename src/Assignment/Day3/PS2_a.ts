
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

//Activity1

/*enum MobilePrice { Black, Gold, White }

function calculateAmount(color: MobilePrice, discount: number): number {
  return color - discount;
}

console.log("Actual Price:", MobilePrice.White);
console.log("Final Price:", calculateAmount(MobilePrice.White, 1));
*/

//Activity2

enum MobilePrice {
  Black,
  Gold = 30000,
  White
}

function calculateAmount(color: MobilePrice, discount: number): number {
  return color - discount;
}

let discount = 1000;

console.log("Actual Price of White Mobile:", MobilePrice.White);
console.log(
  "Final Price after Discount:",
  calculateAmount(MobilePrice.White, discount)
);

