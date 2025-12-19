// Enum declaring
/*enum MobilePrice {
  Black = 250,
  Gold = 280,
  White = 300
}*/
// Activity: 
// • Modify Line no 2 as given below and re-execute the code.  
//enum MobilePrice {Black, Gold, White}
// Activity: 
// • Modify Line no 2 as given below and re-execute the code and populate the actual and final 
// price of White color mobile.  
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["Black"] = 0] = "Black";
    MobilePrice[MobilePrice["Gold"] = 30000] = "Gold";
    MobilePrice[MobilePrice["White"] = 30001] = "White";
})(MobilePrice || (MobilePrice = {}));
// Function to calculating final amount
function calculateAmount(discount, color) {
    var totalAmount = color - (color * discount) / 100;
    return totalAmount;
}
// Test values
var discount = 10;
var finalAmount = calculateAmount(discount, MobilePrice.White);
console.log("Actual Price of White Mobile:", MobilePrice.White);
console.log("Final Price after Discount:", finalAmount);
