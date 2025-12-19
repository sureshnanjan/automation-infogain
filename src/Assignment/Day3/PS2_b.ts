//Activity1

enum MobilePrice1{
     Black1,
     Gold1,
     White1
}

function calculateAmount1   (color: MobilePrice1, discount1  : number): number {
    let totalAmount1= color - discount1;
  return totalAmount1;
}

console.log("Actual Price:", MobilePrice1.White1);
console.log("Final Price:", calculateAmount1(MobilePrice1.White1 ,1));