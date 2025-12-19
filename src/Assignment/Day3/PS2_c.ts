//Activity2

<<<<<<< HEAD
enum MobilePrice2{
=======
enum MobilePrice {
>>>>>>> f023031 (Adding changes)
  Black2,
  Gold2= 30000,
  White2
}

<<<<<<< HEAD
function calculateAmount2   (color: MobilePrice2, discount2 : number): number {
  let totalAmount2= color - discount2;
=======
function calculateAmount2   (color: MobilePrice, discount: number): number {
  let totalAmount2= color - discount;
>>>>>>> f023031 (Adding changes)
  return totalAmount2;
}

let discount2= 1000;

<<<<<<< HEAD
console.log("Actual Price of White Mobile:", MobilePrice2.White2);
console.log(
  "Final Price after Discount:",
  calculateAmount2(MobilePrice2.White2, discount2));
=======
console.log("Actual Price of White Mobile:", MobilePrice.White2);
console.log(
  "Final Price after Discount:",
  calculateAmount(MobilePrice.White, discount2));
>>>>>>> f023031 (Adding changes)

