// Problem statement 5
/**
 * Mobile manufacturer inventry
 * @param manufacturerName - manufacturers like Apple, Samsung, Nokia
 * @returns list of mobile models
 */

function getMobileByManufacturerName(manufacturerName: string): string[] {
    const mobiles: Record<string, string[]> = { "Apple": ["iPhone 13", "iPhone 14 Pro", "iPhone SE"],
        "Samsung": ["Galaxy S21", "Galaxy A50", "Galaxy Note20"],
        "Nokia": ["Nokia 8.5", "Nokia 5.4", "Nokia G10"]
    } ;
//For activity 2 comment const mobiles declaration and just maintain empty declaration;
//  const mobiles: Record<string, string[]> = {};

    return mobiles[manufacturerName] || [];
}
console.log("Apple mobiles:", getMobileByManufacturerName("Apple"));
console.log("Samsung mobiles:", getMobileByManufacturerName("Samsung"));
console.log("Nokia mobiles:", getMobileByManufacturerName("Nokia"));

//Activity 1: Comment Specific Lines 
// Commenting const mobiles declaration returns empty array

//Activity 2: Modify Function Call
console.log("The available mobile list: " + getMobileByManufacturerName("Nokia"));
