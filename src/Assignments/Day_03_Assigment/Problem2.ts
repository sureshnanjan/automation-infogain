//Problem 2 and Problem 3
enum MobilePrice {
  Black=250 ,
  Gold =280,
  White =300
}

function calculateAmount(discount: number,color: MobilePrice): number {
  const price = color;
  const finalAmount = price - (price * discount / 100);
  return finalAmount;
}

console.log("Black Mobile Actual Price:", MobilePrice.Black); 
console.log("Black Mobile Final Price After Discount:", calculateAmount(10,MobilePrice.Black)); 

console.log("Gold Mobile Actual Price:", MobilePrice.Gold); 
console.log("Gold Mobile Final Price After Discount:", calculateAmount(5, MobilePrice.Gold)); 

console.log("White Mobile Actual Price:", MobilePrice.White); 
console.log("White Mobile Final Price After Discount:", calculateAmount(20,MobilePrice.White)); 

//Activity 1:Modify Enum Without Explicit Values
// enum MobilePrice { 
//   Black , 
//   Gold , 
//   White  
// } 

// function calculateAmount(color: MobilePrice, discount: number): number { 
//   const price = color; 
//   const finalAmount = price - (price * discount / 100); 
//   return finalAmount; 
// } 

// console.log("Black Mobile Actual Price:", MobilePrice.Black); 
// console.log("Black Mobile Final Price After Discount:", calculateAmount(10,MobilePrice.Black)); 

// console.log("Gold Mobile Actual Price:", MobilePrice.Gold); 
// console.log("Gold Mobile Final Price After Discount:", calculateAmount(5, MobilePrice.Gold)); 

// console.log("White Mobile Actual Price:", MobilePrice.White); 
// console.log("White Mobile Final Price After Discount:", calculateAmount(20,MobilePrice.White)); 


//Activity 2: Modify Enum with Partial Explicit Values
// enum MobilePrice { 
//   Black , 
//   Gold=30000 , 
//   White  
// } 

// function calculateAmount(color: MobilePrice, discount: number): number { 
//   const price = color; 
//   const finalAmount = price - (price * discount / 100); 
//   return finalAmount; 
// } 
// console.log("Black Mobile Actual Price:", MobilePrice.Black); 
// console.log("Black Mobile Final Price After Discount:", calculateAmount(10,MobilePrice.Black)); 

// console.log("Gold Mobile Actual Price:", MobilePrice.Gold); 
// console.log("Gold Mobile Final Price After Discount:", calculateAmount(5, MobilePrice.Gold)); 

// console.log("White Mobile Actual Price:", MobilePrice.White); 
// console.log("White Mobile Final Price After Discount:", calculateAmount(20,MobilePrice.White)); 
