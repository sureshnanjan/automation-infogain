export{};

/*************************************************
 * Activity 1: Modify Tuple Using push()
 *************************************************/

// Declare tuple
let productAvailable: [string, boolean];

// Initialize tuple
productAvailable = ["Samsung Galaxy S23", true];

// Push extra values (allowed but unsafe)
productAvailable.push("Samsung Galaxy J5", false);

// Access elements
const productName = productAvailable[0];
const availability = productAvailable[1];

// Output
console.log("=== Activity 1 Output ===");
console.log("Product Name:", productName);
console.log("Availability:", availability);
console.log("Full Tuple:", productAvailable);



/*************************************************/
 /* Activity 2: Modify Tuple with Incorrect Data Order
 *************************************************/

// Incorrect assignment (uncomment to see compile-time error)
// productAvailable = [true, "Samsung Galaxy S23"];

/*
Expected Error:
Type 'boolean' is not assignable to type 'string'.
Type 'string' is not assignable to type 'boolean'.
*/

// Correct assignment
productAvailable = ["Samsung Galaxy S23", true];

console.log("\n=== Activity 2 Output ===");
console.log(productAvailable);



/*************************************************
 * Activity 3: Accessing Tuple with Incorrect Index Type
 *************************************************/

// Incorrect index access (uncomment to see error)
// const wrongAccess = productAvailable["0"];

/*
Expected Error:
Element implicitly has an 'any' type because index expression is not of type 'number'.
*/

// ✅ Correct access
const correctProductName = productAvailable[0];
const correctAvailability = productAvailable[1];

console.log("Product Name:", correctProductName);
console.log("Availability:", correctAvailability);
