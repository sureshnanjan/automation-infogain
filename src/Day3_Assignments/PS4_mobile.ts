//Activity 1: Optional Parameter Behavior
function getMobileByManufacturer(
  manufacturer: string = "Samsung",id?: number): string[] {

  const samsungMobiles: string[] = ["Galaxy S23", "Galaxy A54", "Galaxy Note 20"];
  const appleMobiles: string[] = ["iPhone 14", "iPhone 13", "iPhone SE"];
  const motoMobiles: string[] = ["Moto G73", "Moto Edge 40", "Moto G Power"];

   // Special behavior: if id is 101, always return Moto mobiles
  if (id === 101) {
    return motoMobiles;
  }

  if (manufacturer === "Samsung") {
    return samsungMobiles;
  }

  if (manufacturer === "Apple") {
    return appleMobiles;
  }

  return [];
}

// Activity 2: Function Invocations
console.log("The available mobile list : " + getMobileByManufacturer(undefined));
console.log("The available mobile list : " + getMobileByManufacturer(undefined, 101));
console.log("The available mobile list : " + getMobileByManufacturer(undefined, 102));
