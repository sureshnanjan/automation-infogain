//Problem 5 and Problem 7
export function getMobileByManufacturer(manufacturer: string): string[] {
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


