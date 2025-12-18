/**
 * TypeScript_Exercises_1
 *
 * @module assignments_Day3/day3
 * Author: Pavithra
 * Date: 17th Dec 2025
 */
enum MobilePrice {
  Black = 250,
  Gold = 280,
  White = 300,
}

//Activity 1: Modify Enum Without Explicit Values
// enum MobilePrice {
//   black,
//   gold,
//   white,
// }
console.log(MobilePrice);

//Activity 2: Modify Enum with Partial Explicit Values

// enum MobilePrice {
//   Black,
//   Gold = 30000,
//   White,
// }

function calculateAmount(color: MobilePrice, discount: number) {
  const mobileprice = color;
  const discountAmount = (mobileprice * discount) / 100;
  const finalPrice = mobileprice - discountAmount;
  console.log("Actual Price of White Mobile:", MobilePrice.White);
  console.log("Final Price after Discount:", finalPrice);
  return finalPrice;
}
console.log(calculateAmount(MobilePrice.Black, 5));
