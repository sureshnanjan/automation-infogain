// /*
// Assignment: Day 3 - TypeScript Basics 
// Author: Amlana Kumar Sahoo
// Date: 17-DEC-2025
// */

// /*
// Problem Statement
// Consider that a developer needs to declare an enum variable named MobilePrice and assign three different parameters like Black, Gold, and White with 250, 280, and 300 dollars respectivtely as default values. It also consists of the function named calculateAmount which would help the developer in calculating totalAmount variable based on different parameter like discount and color of Mobile.
// Execute below given code-snippet to meet the given requirements.
// */

// enum MobilePrice {
//     Black = 250,
//     Gold = 280,
//     White = 300
// }

// function calculateAmount(color: MobilePrice, discount: number): number {
//     const price = color;
//     const totalAmount = price - (price * discount / 100);
//     return totalAmount;
// }
// console.log(`Total Amount for Black Mobile with 10% discount: $${calculateAmount(MobilePrice.Black, 10)}`); // Output: 225
// console.log(`Total Amount for Gold Mobile with 15% discount: $${calculateAmount(MobilePrice.Gold, 15)}`);   // Output: 238
// console.log(`Total Amount for White Mobile with 20% discount: $${calculateAmount(MobilePrice.White, 20)}`); // Output: 240      

// /*
// Activity 1: 
// • Modify Line no 2 as given below and re-execute the code.
// • Modify Line no 2 as given below and re-execute the code and populate the actual and final price of White color mobile.
// */
// console.log(`Total Amount for Gold Mobile with 25% discount: ${calculateAmount(MobilePrice.Gold, 25)}`);   // Output: 210
// console.log(`Total Amount for White Mobile with 25% discount: ${calculateAmount(MobilePrice.White, 25)}`);   // Output: 225


/**
 * 
 * 
 * 
 * 
 * 
 */