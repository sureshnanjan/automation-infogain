// Tuple declaration
let productAvailable: [string, boolean];
productAvailable = ["Samsung Galaxy", true];

const productName = productAvailable[0];
const availability = productAvailable[1];

if (availability) {
  console.log(`The product ${productName} is available`);
} else {
  console.log(`The product ${productName} is not available`);
}

//Activity 1
//productAvailable.push("Samsung Galaxy J5", false, 1); // Error: Tuple type '[string, boolean]' of length '2' has no element at index '2'. 
//console.log(productAvailable);

//Activity 2
 productAvailable.push(false, "Samsung Galaxy J5");

 console.log(productAvailable);
// Ouput ["Samsung Galaxy J5", true, false, "Samsung Galaxy J5"]

//Activity 3
//let productAvailable: [productName: string, availability: boolean];

// productAvailable = ["Samsung Galaxy J5", false];

// const productName = productAvailable[0];
// const availability = productAvailable[1];

// if (availability) {
//   console.log(`The product ${productName} is available`);
// } else {
//   console.log(`The product ${productName} is not available`);
// }