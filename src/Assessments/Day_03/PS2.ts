// Activity 1: Enum WITHOUT explicit values
enum MobilePrice {
  Black,
  Gold,
  White
}
 
console.log(MobilePrice.Black); // 0
console.log(MobilePrice.Gold);  // 1
console.log(MobilePrice.White); // 2
 
 
// Activity 2: Enum with PARTIAL explicit values
enum MobilePriceUpdated {
  Black,
  Gold = 30000,
  White
}
 
function calculateAmount(discount: number, color: MobilePriceUpdated): number {
  const actualPrice = color;
  const finalPrice = actualPrice - (actualPrice * discount) / 100;
 
  console.log("Actual Price:", actualPrice);
  console.log("Final Price after discount:", finalPrice);
 
  return finalPrice;
}
 
// Function call as per activity
calculateAmount(10, MobilePriceUpdated.White);