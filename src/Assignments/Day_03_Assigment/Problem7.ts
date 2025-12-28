const samsungMobiles: string[] = ["Galaxy S23", "Galaxy A54", "Galaxy M34"];
const appleMobiles: string[] = ["iPhone 14", "iPhone 15", "iPhone 15 Pro"];
const motoMobiles: string[] = ["Moto G73", "Moto Edge 40", "Moto Razr"];

function getMobileByManufacturer( manufacturer: string = "Samsung",id?:number): string[] {

  if (id === 101) {
    return motoMobiles;
  }
  if (manufacturer === "Samsung") {
    return samsungMobiles;
  }else if (manufacturer === "Apple") {
    return appleMobiles;
  }else
    return [];
}

console.log("The available mobile list : " + getMobileByManufacturer("Samsung"));
console.log("The available mobile list : " + getMobileByManufacturer("Apple"));
console.log("The available mobile list : " + getMobileByManufacturer("Moto", 101));

//Activity 1
// function getMobileByManufacturer(manufacturer = "Samsung",id?: number): string[] { 
//     if (id === 101) {
//       return motoMobiles;
//     }

//     if (manufacturer === "Samsung") {
//       return samsungMobiles;
//     } else if (manufacturer === "Apple") {
//       return appleMobiles;
//     } else
//       return [];
//   }

//Activity 2

console.log("The available mobile list : " + getMobileByManufacturer(undefined));

console.log("The available mobile list : " + getMobileByManufacturer(undefined, 101));

console.log("The available mobile list : " + getMobileByManufacturer(undefined, 102));