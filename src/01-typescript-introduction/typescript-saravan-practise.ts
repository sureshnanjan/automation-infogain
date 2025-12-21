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

function getMobileByManufacturer1(manufacturer: string = "Samsung",id?: number): string[] {

  // Special condition: if id is 101, return Moto list
  if (id === 101) {
    return ["Moto G52", "Moto Edge 40", "Moto Razr"];
  }

  // Manufacturer-based logic
  if (manufacturer === "Samsung") {
    return ["Galaxy S23", "Galaxy A54", "Galaxy Z Fold"];
  } else if (manufacturer === "Apple") {
    return ["iPhone 14", "iPhone 15", "iPhone SE"];
  } else {
    return ["No mobiles available"];
  }
}

// Normal function call
console.log("The available mobile list :", getMobileByManufacturer1("Apple"));


//Activity 1: Modify Function Declaration

function getMobileByManufacturer2(manufacturer, id?: number): string[]
{
  // Special condition: if id is 101, return Moto list
  if (id === 101) {
    return ["Moto G52", "Moto Edge 40", "Moto Razr"];
  }

  // Manufacturer-based logic
  if (manufacturer === "Samsung") {
    return ["Galaxy S23", "Galaxy A54", "Galaxy Z Fold"];
  } else if (manufacturer === "Apple") {
    return ["iPhone 14", "iPhone 15", "iPhone SE"];
  } else {
    return ["No mobiles available"];
  }
}

// Normal function call
console.log("The available mobile list :", getMobileByManufacturer1("Apple"));

//Activity 2: Modify Function Invocation

console.log("The available mobile list : " + getMobileByManufacturer1(undefined));  //Argument of type 'undefined' is not assignable to parameter of type 'string'.
//console.log("The available mobile list : " + getMobileByManufacturer1(101)); //Argument of type 'number' is not assignable to parameter of type 'string'.
console.log("The available mobile list : " + getMobileByManufacturer1(undefined, 102)); // No mobiles available

/********************************************************************************* */


//Assignment Date-18/12/2025

//Problem Statement #1

// Step 1: Declare cart as string array
let cart: string[] = [];

// Step 2: Function to add multiple products
function addToCart(productNames: string[]): string[] {
  for (let product of productNames) {
    cart.push(product);
  }
  return cart;
}

// Step 3: Correct function call
console.log(
  "Cart Items are: " +
    addToCart(["Moto G Play, 4th Gen", "Apple iPhone 5s"]).join(", ")
);



//Problem Statement #2

// Step 1:Create an interface Product
interface Product {
  productId: number;
  productName: string;
}

//Create a function
function printProductDetails(product: Product): void {
  console.log("Product ID:", product.productId);
  console.log("Product Name:", product.productName);
}


// let product: Product = {
//   productName: "iPhone 14"
// };


let product: Product = {
  productId: 101,
  productName: "iPhone 14"
};

printProductDetails(product);


let productWithPrice = {
  productId: 102,
  productName: "Samsung Galaxy S23",
  productPrice: 750
};

printProductDetails(productWithPrice);


//Problem Statement #3

// Declare the CartItem interface.
interface CartItem {
  itemId: number;
  itemName: string;
  quantity: number;
}

//Create multiple cart item objects.

const item1: CartItem = {
  itemId: 101,
  itemName: "Laptop",
  quantity: 1
};

const item2: CartItem = {
  itemId: 102,
  itemName: "Mouse",
  quantity: 2
};

const item3: CartItem = {
  itemId: 103,
  itemName: "Keyboard",
  quantity: 1
};

//Pass them to a function and display the total quantity.

function calculateTotalQuantity(items: CartItem[]): void {
  let totalQuantity = 0;

  for (let item of items) {
    totalQuantity += item.quantity;
  }

  console.log("Total Quantity of Items in Cart:", totalQuantity);
}
//Ensure the code compiles and executes without TypeScript errors.

calculateTotalQuantity([item1, item2, item3]);

//Problem Statement #4

//Declare the Order interface.
interface Order {
  orderId: number;
  customerName: string;
  orderAmount: number;
}

//Create an order object missing one mandatory property.

// const order: Order = {
//   orderId: 5001,
//   customerName: "John Doe"
// };


//Fix the object to satisfy the interface.

const order: Order = {
  orderId: 5001,
  customerName: "John Doe",
  orderAmount: 1250
};

//Display order details on the console.

function displayOrderDetails(order: Order): void {
  console.log("Order ID:", order.orderId);
  console.log("Customer Name:", order.customerName);
  console.log("Order Amount:", order.orderAmount);
}

displayOrderDetails(order);


//Problem Statement #5

// Declare the Customer interface.

interface Customer {
  customerId: number;
  customerName: string;
}

//Create a customer object with an extra property accountType.
const customerDetails = {
  customerId: 1001,
  customerName: "Ravi Kumar",
  accountType: "Savings" // Extra property
};

//Pass the object to the function and display valid details only.
function displayCustomerDetails(customer: Customer): void {
  console.log("Customer ID:", customer.customerId);
  console.log("Customer Name:", customer.customerName);
}


displayCustomerDetails(customerDetails);
