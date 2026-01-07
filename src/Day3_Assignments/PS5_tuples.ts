export{};
// Activity 3: Labeled Tuple
let productAvailable: [productName: string, availability: boolean];

// Activity 2 (Original declaration without labels)
// let productAvailable: [string, boolean];

// Activity 1: Assign initial values to the tuple
productAvailable = ["Samsung Galaxy J5", true];

// Read values from tuple
const productName = productAvailable[0];
const availability = productAvailable[1];

// Conditional logic to check availability
if (availability) {
  console.log(`The product ${productName} is available`);
} else {
  console.log(`The product ${productName} is not available`);
}

/*
-----------------------------------------------------
Activity 1: Modify Tuple Using push() with Extra Values
-----------------------------------------------------

Uncomment the line below to execute Activity 1

productAvailable.push("Samsung Galaxy J5", false, 1);
console.log(productAvailable);

*/

/*
-----------------------------------------------------
Activity 2: Modify Tuple with Incorrect Data Order
-----------------------------------------------------

Uncomment the line below to execute Activity 2

productAvailable.push(false, "Samsung Galaxy J5");
console.log(productAvailable);

*/
