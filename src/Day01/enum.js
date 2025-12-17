var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["Black"] = 250] = "Black";
    MobilePrice[MobilePrice["Gold"] = 280] = "Gold";
    MobilePrice[MobilePrice["White"] = 300] = "White";
})(MobilePrice || (MobilePrice = {}));
function calculateAmount(color, discount) {
    var mobileprice = color;
    var discountAmount = (mobileprice * discount) / 100;
    var finalPrice = mobileprice - discountAmount;
    return finalPrice;
}
console.log(MobilePrice);
console.log(calculateAmount(MobilePrice.Black, 5));
//Activity 1: Modify Enum Without Explicit Values
// enum MobilePrice
// {
//     black,
//     gold,
//     white
// }
console.log(MobilePrice);
