// Assignments 2 and 3
/**
 * Mobile Price enum - illustrates numeric enums with explicit values and 
 * discount calculation
 */
    
enum MobilePrice {
    Black = 250,
    Gold = 280,
    White = 300
}
/**
 * Calculate mobile final price after discount
 * @paran discount - Discount percentage
 * @param color - Mobile color enum
 * @return Final price after discount
 */

//UNION TYPE: Either enum can be passed
type MobilePrice_Or_PartialUpdate = MobilePrice | MobilePrice_PartialUpdate;

function calculateAmount(discount:number,color:MobilePrice_Or_PartialUpdate): number {
    let mobile_Color: string = "";
    const originalPrice: number = color;
    const finalPrice = originalPrice * (1 - discount/100);

   if (color in MobilePrice ) mobile_Color = MobilePrice[color as MobilePrice];
   else mobile_Color = MobilePrice_PartialUpdate[color as MobilePrice_PartialUpdate];

    console.log(`Original price (${mobile_Color}): $${originalPrice}`);
    console.log(`Final Price (discount ${discount}%): $${finalPrice.toFixed(2)}`);

    return finalPrice;
}

//Method call
calculateAmount(10, MobilePrice.White); //Original price (White): $300; Final Price (discount 10%): $270.00

//Activity 1: Modify Enum Without Explicit Values
enum MobilePrice_Modified {
    Black,
    Gold,
    White
}

console.log('Activity 1: Modify Enum Without Explicit Values');
console.log(MobilePrice_Modified); // Black = 0, Gold= 1, White = 2

//Activity 2: Modify Enum with Partial Explicit Values
enum MobilePrice_PartialUpdate {
    Black,
    Gold = 30000,
    White
}

console.log("Activity 2: Modify Enum with Partial Explicit Values");
console.log(MobilePrice_PartialUpdate); // Black = 0, Gold= 30000, White = 30001
calculateAmount(10, MobilePrice_PartialUpdate.White); // Original price (White): $30001; Final Price (discount 10%): $27000.90