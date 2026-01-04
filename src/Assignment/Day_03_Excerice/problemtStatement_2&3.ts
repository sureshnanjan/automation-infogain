/*
Task Description
The developer needs to declare an enum variable named MobilePrice with the following color options and their respective default prices:

Mobile Color         Price (in Dollars)

Black                250
Gold                 280
White                300
*/
// Declaring the enum MobilePrice with color options and their respective prices
enum MobilePrice {
    Black = 250,
    Gold = 280,
    White = 300
} 
// Second  enum with explicit values

enum MobilePrice_Updated {
    Black,
    Gold = 30000,
    White
}
// union type of both enums
type MobilePrice1 = MobilePrice | MobilePrice_Updated;


// Create the function named calculateAmount which would help the developer in calculating ////totalAmount variable based on different parameter like discount and color of Mobile.


function calculateAmount(color: MobilePrice1, discount: number = 0): number {
    let basePrice: number = color;
    let totalAmount = basePrice - (basePrice * discount / 100);
    return totalAmount;
}
// call the function calculateAmount with different color options and discount values to demonstrate its functionality.
let amount1 = calculateAmount(MobilePrice.Black, 10); // Black color with 10% discount
console.log(`Total Amount for Black Mobile with 10% discount: $${amount1}`);  


let amount2 = calculateAmount(MobilePrice_Updated.Gold, 15); // Gold color with 15% discount

console.log(`Total Amount for Gold Mobile with 15% discount: $${amount2}`);