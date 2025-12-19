//Activity2

enum MobilePrice {
  Black2,
  Gold2= 30000,
  White2
}

function calculateAmount2   (color: MobilePrice, discount: number): number {
  let totalAmount2= color - discount;
  return totalAmount2;
}

let discount2= 1000;

console.log("Actual Price of White Mobile:", MobilePrice.White2);
console.log(
  "Final Price after Discount:",
  calculateAmount(MobilePrice.White, discount2));

