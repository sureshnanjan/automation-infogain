//Activity2

enum MobilePrice2{
  Black2,
  Gold2= 30000,
  White2
}

function calculateAmount2   (color: MobilePrice2, discount2 : number): number {
  let totalAmount2= color - discount2;
  return totalAmount2;
}

let discount2= 1000;

console.log("Actual Price of White Mobile:", MobilePrice2.White2);
console.log(
  "Final Price after Discount:",
  calculateAmount2(MobilePrice2.White2, discount2));

