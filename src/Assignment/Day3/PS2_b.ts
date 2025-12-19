//Activity1

enum MobilePrice1{ Black1,Gold1,White1}

function calculateAmount1   (color: MobilePrice, discount1  : number): number {
    let totalAmount = color - discount1;
  return totalAmount;
}

console.log("Actual Price:", MobilePrice.White1);
console.log("Final Price:", calculateAmount1(MobilePrice.White1,1));