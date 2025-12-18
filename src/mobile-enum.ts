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

enum MobilePrice {Black, Gold=30000, White} 


// Function to calculating final amount
function calculateAmount(discount: number, color: MobilePrice): number {
  let totalAmount = color - (color * discount) / 100;
  return totalAmount;
}

// Test values
let discount = 10;
let finalAmount = calculateAmount(discount, MobilePrice.White);

console.log("Actual Price of White Mobile:", MobilePrice.White);
console.log("Final Price after Discount:", finalAmount);
