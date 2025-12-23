// Demonstration of function overloading with proper type safety

// Function overload signatures
function getMobileByManufacturer(manufacturer: string): string[];
function getMobileByManufacturer(manufacturer: string, id: number): string[];

// Function implementation
function getMobileByManufacturer(manufacturer: string, id?: number): string[] {
    let mobiles: string[] = [];

    if (manufacturer === "Apple") {
        mobiles = ["iPhone 13", "iPhone 14", "iPhone 15"];
    } else if (manufacturer === "Samsung") {
        mobiles = ["Galaxy S21", "Galaxy S22", "Galaxy S23"];
    } else if (manufacturer === "Microsoft") {
        mobiles = ["Lumia 950", "Surface Duo"];
    } else {
        mobiles = ["No mobiles found"];
    }

    // Optional logic using id
    if (id !== undefined) {
        console.log(`Manufacturer ID: ${id}`);
    }

    return mobiles;
}

// --------------------
// Function Calls
// --------------------

// Case 1: Valid string value
let manufacturer1: string = "Apple";
console.log("Apple Mobiles:", getMobileByManufacturer(manufacturer1));

// Case 2: Another valid string
let manufacturer2: string = "Samsung";
console.log("Samsung Mobiles:", getMobileByManufacturer(manufacturer2, 101));

// Case 3: Yet another valid string
let manufacturer3: string = "Microsoft";
console.log("Microsoft Mobiles:", getMobileByManufacturer(manufacturer3));

// Case 4: Safe handling of possible undefined value
let manufacturer4: string | undefined = undefined;

if (manufacturer4) {
    console.log(getMobileByManufacturer(manufacturer4));
} else {
    console.log("Manufacturer name is undefined");
}
