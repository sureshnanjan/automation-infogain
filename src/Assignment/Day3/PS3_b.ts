//Activity2
enum MobilePrice4{
  Black4,
  Gold_a=30000,
  White4
}

function calculateAmount4 (discount4: number, color4: MobilePrice4 ): number {
  return color4- discount4;
}

const discount4= 1000;
console.log("Actual Price of Mobile(Black,Gold):", MobilePrice4.Black4,
     MobilePrice4.Gold_a);
console.log("Actual Price of White Mobile:", MobilePrice4.White4);
console.log("Final Price after Discount:", calculateAmount4(discount4,MobilePrice4.White4));