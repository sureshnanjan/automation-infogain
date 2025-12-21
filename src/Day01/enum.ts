enum MobilePrice{
    Black = 250,
    Gold = 280,
    White = 300,
}

function calculateAmount(color:MobilePrice, discount:number ){
    const mobilePrice = color;
    const discountPercentage = (mobilePrice * discount)/100;
    const finalPrice = mobilePrice-discountPercentage;
    console.log("Actual Price of white mobile:", MobilePrice.White);
    console.log("Final Price After Discount:", finalPrice);
    return finalPrice;
}

console.log(calculateAmount(MobilePrice.Black,5));
