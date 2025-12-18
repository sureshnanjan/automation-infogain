//Problem 5 and Problem 7
function getMobileByManufacturer(manufacturer: string): string[] {
  let mobiles: string[] = [];

  if (manufacturer === "Apple") {
    mobiles = ["iPhone 13", "iPhone 14", "iPhone 15"];
  } else if (manufacturer === "Samsung") {
    mobiles = ["Galaxy S22", "Galaxy S23", "Galaxy M51"];
  } else if (manufacturer === "Nokia") {
    mobiles = ["Nokia C12", "Nokia C21", "Nokia C32"];
  } else {
    mobiles = ["No models found"];
  }
  return mobiles;
}
console.log("List of Available mobiles: " + getMobileByManufacturer("Nokia"));


//Problem 7
// function getMobileByManufacturer(manufacturer: string = "Samsung", id?: number): string[] {
//   // Special case: if id is 101 → return Moto list regardless of manufacturer
//   if (id === 101) {
//     return ["Moto G", "Moto X", "Moto Edge"];
//   }

//   if (manufacturer === "Samsung") {
//     return ["Galaxy S22", "Galaxy S23", "Galaxy Z Fold"];
//   } else if (manufacturer === "Apple") {
//     return ["iPhone 13", "iPhone 14", "iPhone 15"];
//   } else {
//     return ["No models found"];
//   }
// }

// // Display results
// console.log("The available mobile list : " + getMobileByManufacturer("Apple"));
// console.log("The available mobile list : " + getMobileByManufacturer("Samsung"));