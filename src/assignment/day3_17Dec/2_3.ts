enum MobilePrice {Black, Gold = 30000, White} 
// enum MobilePrice {
//     Black = 250,
//     Gold = 280,
//     White = 300
// }
function calculateAmount(discount: number, price: MobilePrice) : number {
    let totalAmount = price - ( price * discount / 100);
    return totalAmount;
}
//Problem 3:
console.log ('Actual price of Black Mobile', MobilePrice.Black);
console.log(`Price of Black Mobile after discount`, calculateAmount(5, MobilePrice.Black));
console.log ('Actual price of Gold Mobile', MobilePrice.Gold);
console.log(`Price of Gold Mobile after discount`, calculateAmount(5, MobilePrice.Gold));
console.log ('Actual price of White Mobile', MobilePrice.White);
console.log(`Price of White Mobile after discount`, calculateAmount(5, MobilePrice.White));
//Problem 2:
// console.log(`Price of Black Mobile after discount`, calculateAmount(5, MobilePrice.Black));
// console.log(`Price of Gold Mobile after discount`, calculateAmount(5, MobilePrice.Gold));
// console.log(`Price of White Mobile after discount`, calculateAmount(5, MobilePrice.White));
// console.log ('Actual price of White Mobile', MobilePrice.White);
