/**
 * TypeScript_Exercises_1
 *
 * @module assignments_Day3/day3
 * Author: Pavithra
 * Date: 17th Dec 2025
 */
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["Black"] = 250] = "Black";
    MobilePrice[MobilePrice["Gold"] = 280] = "Gold";
    MobilePrice[MobilePrice["White"] = 300] = "White";
})(MobilePrice || (MobilePrice = {}));
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
function calculateAmount(color, discount) {
    var mobileprice = color;
    var discountAmount = (mobileprice * discount) / 100;
    var finalPrice = mobileprice - discountAmount;
    console.log("Actual Price of White Mobile:", MobilePrice.White);
    console.log("Final Price after Discount:", finalPrice);
    return finalPrice;
}
console.log(calculateAmount(MobilePrice.Black, 5));
