enum MobilePrice{ 
    Black = 250,
    Gold = 280,
    White = 300,
}
function calculateAmount(color :MobilePrice, discount:number){
    const mobileprice=color;
    const discountAmount=(mobileprice *discount)/100;
    const finalPrice = mobileprice-discountAmount;
    return finalPrice;
}
console.log(MobilePrice)
console.log(calculateAmount(MobilePrice.Black,5))

//Activity 1: Modify Enum Without Explicit Values
// enum MobilePrice
// {
//     black,
//     gold,
//     white
// }
// console.log(MobilePrice)

//Activity 2: Modify Enum with Partial Explicit Values

// enum MobilePrice { 
//     Black, 
//     Gold = 30000,
//     White ,
//     }
