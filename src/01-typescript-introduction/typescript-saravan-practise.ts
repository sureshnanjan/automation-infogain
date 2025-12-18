function addNumbers(a: number, b: number): number {
    return a + b;
}


console.log(addNumbers(5, 10)); // Returns 15
console.log(addNumbers(3.5, 2.5)); // Returns 6      
console.log(addNumbers(-1, 1)); // Returns 0


interface Person {
    name: string;
    age: number;
    email: string;
}

console.log({ name: "Saravan", age: 25, email: "saravan@example.com" });



const saravan: Person = { name: "Saravan",
    age: 25,
    email: "saravan@example.com"
};

console.log(saravan);
console.log(saravan.name);
console.log(saravan.age);
console.log(saravan.email);

function greet(person: Person): string {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}

console.log(greet(saravan)); // Returns "Hello, Saravan! You are 25 years old."


//const person = { name: "",   // age: ,    email: ""};
//console.log(greet(person)); // Returns "Hello, Saravan! You are 25 years old."



/********************************************************************************* */


//Assignment Date-17/12/2025

//Problem Statement #1

//Activity 1: Modify Data Type

let productId: number = 501;
let productDescription: string = "Phones";
let productName: string = "oneplus";
let productAvailable: boolean = true;
const discountPercentage: number = 20;


console.log("Type of productId:", typeof productId);
console.log("Type of productDescription:", typeof productDescription);
console.log("Type of productName:", typeof productName);
console.log("Type of productAvailable:", typeof productAvailable);
console.log("Discount Percentage:", discountPercentage);

//Activity 2: Update Variable Values

//productName: number = 5001;
//productAvailable = false;
//discountPercentage = 30;

console.log("Type of productName:", typeof productName);
console.log("Updated product availability:", productAvailable);
console.log("Updated discount percentage:", discountPercentage);

// The above lines will cause errors due to type mismatch and reassignment of a constant.


//******************************************************************************** */
//Problem Statement #2
/*
enum MobilePrice {
  Black = 250,
  Gold = 280,
  White = 300
}

function calculateAmount(color: MobilePrice, discount: number): number {
  const totalAmount = color - (color * discount / 100);
  return totalAmount;
}

//Activity
const finalPrice = calculateAmount(MobilePrice.White, 10);
console.log("Final price of White mobile:", finalPrice);
*/


/********************************************************************************/


//Problem Statement #3
/*enum MobilePrice {
  Black = 250,
  Gold = 280,
  White = 300
}

function calculateAmount(discount: number, color: MobilePrice): number {
  const finalPrice = color - (color * discount / 100);
  return finalPrice;
}

// Example
const discount = 50;
const selectedColor = MobilePrice.White;

console.log("Actual Price:", selectedColor);
console.log("Final Price after discount:", calculateAmount(discount, selectedColor));*/

//Activity 1: Modify Enum Without Explicit Values

/*enum MobilePrice {
  Black,
  Gold ,
  White
}

function calculateAmount(discount: number, color: MobilePrice): number {
  const finalPrice = color - (color * discount / 100);
  return finalPrice;
}

// Example
const discount = 50;
const selectedColor = MobilePrice.White;

console.log("Actual Price:", selectedColor);
console.log("Final Price after discount:", calculateAmount(discount, selectedColor));*/

//Activity 2: Modify Enum with Partial Explicit Values

enum MobilePrice {
  Black,
  Gold=30000,
  White
}

function calculateAmount(discount: number, color: MobilePrice): number {
  const finalPrice = color - (color * discount / 100);
  return finalPrice;
}

// Example
const discount = 50;
const selectedColor = MobilePrice.White;

console.log("Actual Price:", selectedColor);
console.log("Final Price after discount:", calculateAmount(discount, selectedColor));

/********************************************************************************/

//Problem Statement #4

// Tuples in TypeScript   is not done


/********************************************************************************/

//Problem Statement #5

function getMobileByManufacturer(manufacturer: string): string[] {
  let mobileList: string[] = [];

  if (manufacturer === "Samsung") {
    mobileList = ["Galaxy S23", "Galaxy A54", "Galaxy Z Fold"];
  } else if (manufacturer === "Apple") {
    mobileList = ["iPhone 14", "iPhone 15", "iPhone SE"];
  } else if (manufacturer === "Nokia") {
    mobileList = ["Nokia 3310", "Nokia G21", "Nokia X30"];
  } else {
    mobileList = ["No mobiles available"];
  }

  return mobileList;
}

//Activity 1: Comment Specific Lines

// Function call
console.log("The available mobile list:", getMobileByManufacturer("Samsung"));


//Activity 2: Modify Function Call

console.log("The available mobile list:" + getMobileByManufacturer("Nokia"));


/********************************************************************************/

//Problem Statement #6



