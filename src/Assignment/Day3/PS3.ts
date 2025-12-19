/*Activity1
enum MobilePrice { Black, Gold, White }

function calculateAmount(discount: number, color: MobilePrice): number {
  return color - discount;
}

const discount = 1;

// By default TS assigns numeric value
console.log("Actual Price:", MobilePrice.Black);
console.log("Actual Price:", MobilePrice.Gold);
console.log("Actual Price:", MobilePrice.White);
console.log("Final Price after Discount:", calculateAmount(discount, MobilePrice.White));
*/

//Activity2
enum MobilePrice {
  Black3,
  Gold3= 30000,
  White3
}

function calculateAmount3 (discount: number, color: MobilePrice): number {
  return color - discount;
}

const discount3= 1000;
console.log("Actual Price of Mobile(Black,Gold):", MobilePrice.Black3 , MobilePrice.Gold3 );
console.log("Actual Price of White Mobile:", MobilePrice.White3 );
console.log("Final Price after Discount:", calculateAmount3 (discount3, MobilePrice.White3));



