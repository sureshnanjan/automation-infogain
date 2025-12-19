// Initialize variables for cart
let productId: number = 202;
let productDescription: string = "Electronic Accessory";
let productName: string = "Wireless Headphone";
let productAvailable: boolean = true;

// Use an object so value can be reassigned
const discountPercentage = { value: 15 };

// Log initial data types
console.log("Data type of productId is:", typeof productId);
console.log("Data type of productDescription is:", typeof productDescription);
console.log("Data type of productName is:", typeof productName);
console.log("Data type of productAvailable is:", typeof productAvailable);
console.log("Discount %:", discountPercentage.value);

// --------------------------------------------------
// Activity 1: Modify Data Type
// Change the data type of productName from string to number
let productNameAsNumber: number = 5001;
console.log("Product name (as number):", productNameAsNumber);
console.log("Data type of productNameAsNumber is:", typeof productNameAsNumber);

// --------------------------------------------------
// Activity 2: Reassign values

// Reassign productAvailable
productAvailable = false;

// Reassign discountPercentage to 30
discountPercentage.value = 30;

// Log updated values
console.log("\n--- Activity 2 Output ---");
console.log("Product available:", productAvailable);
console.log("Updated discount %:", discountPercentage.value);
