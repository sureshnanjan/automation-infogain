/*
 * Assignment #3 – Basics of TypeScript

 * Author - Nimitha 

 * Date - 17/12/2025

/* ====================================================

   /*Problem Statement
 As part of the mCart application development, you are required to demonstrate the use of basic data types in TypeScript by declaring and manipulating product-related variables.
 The objective of this exercise is to help you understand:
• Type declaration in TypeScript
• Usage of const and let
• Type reassignment and value updates
• Console output validation after code changes

   ==================================================== */

// Declaring product-related variables with proper data types as initial requirements

let productId: number = 101; 

let productDescription: string = "Smartphone with AMOLED display";

let productName: string = "Samsung Galaxy S23";

let productAvailable: boolean = true;

// Discount is constant and should not be reassigned

const discountPercentage: number = 20;

// Displaying data types of each variable using typeof

console.log("Type of productId:", typeof productId);

console.log("Type of productDescription:", typeof productDescription);

console.log("Type of productName:", typeof productName);

console.log("Type of productAvailable:", typeof productAvailable);

// Displaying discount percentage value

console.log("Discount Percentage:", discountPercentage);


/* Activity 1: Modifying the Data Type 

// Changing productName data type from string to number

// (Declared again for demonstration purpose)

let productNameAsNumber: number = 12345;

// Observing the changed data type

console.log("Type of productName after modification:", typeof productNameAsNumber);



/* Activity 2: Updating Variable Values 

// Updating availability status

productAvailable = false;

// discountPercentage = 30; This will throw compilation error since its also declared as const aand can not be reassigned

// Printing updated values

console.log("Updated product availability:", productAvailable);

console.log("Discount Percentage (unchanged):", discountPercentage);


/* ====================================================

   PROBLEM 2: ENUM - MOBILE PRICE CALCULATION
  
As part of the mCart application development, you are required to demonstrate the use of basic data types in TypeScript by declaring and manipulating product-related variables.
The objective of this exercise is to help you understand:
• Type declaration in TypeScript
• Usage of const and let
• Type reassignment and value updates
• Console output validation after code changes
*/

// Declaring enum with explicit values for each mobile color

enum MobilePrice 
{

  Black = 250,

  Gold = 280,

  White = 300

}

// Function to calculate final price after discount

function calculateAmount(discount: number, color: MobilePrice): void {

  // Actual price derived from enum value

  const actualPrice: number = color;

  // Final price after applying discount

  const finalPrice: number = actualPrice - (actualPrice * discount) / 100;

  // Displaying price details

  console.log("Actual Price:", actualPrice);

  console.log("Final Price after discount:", finalPrice);

}

// Calling function for White color mobile with 10% discount

calculateAmount(10, MobilePrice.White);


/* Activity 1: Enum Without Explicit Values

// Enum without explicit values (TypeScript assigns default numeric values)

enum MobilePriceDefault {

  Black,

  Gold,

  White

}

// Observing default enum values

console.log("Default Black price:", MobilePriceDefault.Black); // 0

console.log("Default Gold price:", MobilePriceDefault.Gold);   // 1

console.log("Default White price:", MobilePriceDefault.White); // 2


/* ---------- Activity 2: Partial Explicit Enum Values ---------- */

// Enum with partial explicit value

enum MobilePricePartial {

  Black,

  Gold = 30000,

  White

}

// Calculating actual and final price for White color

const actualWhitePrice: number = MobilePricePartial.White;

const discount: number = 10;

const finalWhitePrice: number =

  actualWhitePrice - (actualWhitePrice * discount) / 100;

// Displaying calculated prices

console.log("Actual price of White mobile:", actualWhitePrice);

console.log("Final price after discount:", finalWhitePrice);
 