//Activity1
enum MobilePrice3{ Black3 , Gold3 , White3}

function calculateAmount3 (discount3: number, color3: MobilePrice3): number {
  return color3- discount3;
}

const discount3= 1;

// By default TS assigns numeric value
console.log("Actual Price:", MobilePrice3.Black3);
console.log("Actual Price:", MobilePrice3.Gold3);
console.log("Actual Price:", MobilePrice3.White3);
console.log("Final Price after Discount:", calculateAmount3(discount3 , MobilePrice3.White3));


