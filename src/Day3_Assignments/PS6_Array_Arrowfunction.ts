export {}; // prevents redeclaration errors

// Step 1: Declare an array of manufacturer objects
const manufacturers: { id: string; price: number }[] = [
    { id: "Apple", price: 250 },
    { id: "Microsoft", price: 300 },
    { id: "Samsung", price: 180 },
    { id: "Google", price: 220 }
];

// Step 2: Implement an arrow function to filter manufacturers with price >= 200
const myFunction = (): string[] => {
    const result: string[] = [];
    for (const m of manufacturers) {
        if (m.price >= 200) {
            result.push(m.id); // store manufacturer id
        }
    }
    return result;
};

// Step 3: Display the result
console.log("Manufacturers with price >= 200:", myFunction());

// --------------------------------------------------
// Activity 1: Modify arrow function to display price for Apple
const myFunctionActivity1 = (): void => {
    for (const m of manufacturers) {
        
        if (m.id === "Apple") {
            console.log(`Price of ${m.id}: $${m.price}`);
        }
    }
};

myFunctionActivity1();

// --------------------------------------------------
// Activity 2: Modify loop to display only Microsoft id and price
for (const m of manufacturers) {
    if (m.id === "Microsoft") {
        console.log(`Manufacturer: ${m.id}, Price: $${m.price}`);
    }
}
