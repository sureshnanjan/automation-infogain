/*************************************************
 * Function: getMobileByManufacturer
 * Demonstrates optional parameters & default values
 *************************************************/

// Activity 1: Modified function declaration
function getMobileByManufacturer(
    manufacturer: string,
    id?: number
): string[] {

    // Special case: id = 101 returns Moto list
    if (id === 101) {
        return ["Moto G73", "Moto Edge 40", "Moto G Power"];
    }

    // Manufacturer-based logic
    if (manufacturer === "Samsung") {
        return ["Galaxy S23", "Galaxy A54", "Galaxy Z Fold"];
    } 
    else if (manufacturer === "Apple") {
        return ["iPhone 14", "iPhone 15", "iPhone 15 Pro"];
    } 
    else {
        return ["No mobiles available"];
    }
}

/*************************************************
 * Activity 2: Modified function invocations
 *************************************************/

// Default manufacturer behavior (Samsung)
console.log(
    "The available mobile list : " + getMobileByManufacturer(undefined)
);

// Special id-based logic (Moto list)
console.log(
    "The available mobile list : " + getMobileByManufacturer(undefined, 101)
);

// Undefined manufacturer with non-special id
console.log(
    "The available mobile list : " + getMobileByManufacturer(undefined, 102)
);
