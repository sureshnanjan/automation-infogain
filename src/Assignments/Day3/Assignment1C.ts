//**Tuples in TypeScript to represent product availability information. 
// This activity is designed to help understand tuple 
// structure, type enforcement, and the labeled tuple concept introduced in TypeScript. */

// Tuple declaration
let productAvailable1: [productName1:string, availability:boolean];

// Assign initial values
productAvailable1 = ["Samsung", true];


//Activity 1 and 2 
/*
productAvailable1.push(false, "iphone");
console.log(productAvailable1);
*/

// Read values from tuple
const [productName1,availability] = productAvailable1;

console.log(productAvailable1)


// check availabilty of product
if (availability) {
  console.log(`The product ${productName1} is available`);
} else {
  console.log(`The product ${productName1} is not available`);
}
