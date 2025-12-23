export{};
// Activity 3: Labeled Tuple declaration
let productAvailable: [productName: string, availability: boolean];

// Assign initial values to the tuple
productAvailable = ["Samsung Galaxy S21", true];

// Read values from the tuple
const productName = productAvailable[0];
const availability = productAvailable[1];

// Conditional logic to check availability
if (availability) {
    console.log(`The product ${productName} is available`);
} else {
    console.log(`The product ${productName} is not available`);
}

// --------------------------------------------------
// Activity 1: Modify Tuple Using push() with Extra Values

//productAvailable.push("Samsung Galaxy J5", false, 1);
productAvailable.push("Samsung Galaxy J5", false);

// Activity 2: Modify Tuple with Incorrect Data Order
productAvailable.push(false, "Samsung Galaxy J5");
