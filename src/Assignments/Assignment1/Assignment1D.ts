function getMobileByManufacturer(manufacturer: string): string[] {

    if (manufacturer === "Samsung") {
      return ["Galaxy1", "Galaxy2", "Galaxy3"];
    } 
    else if (manufacturer === "Apple") {
      return ["iPhone 15", "iPhone 14", "iPhone 17"];
    } 
    else if (manufacturer === "OnePlus") {
      return ["OnePlus 12", "OnePlus 13", "OnePlus 14"];
    } 
    else {
      return ["No mobiles available for this manufacturer"];
    }
  }

const mobiles = getMobileByManufacturer("Apple");
console.log("Available Mobiles:", mobiles);

  