const manufacturers = [
    { id: "Samsung", price: 250 },
    { id: "Apple", price: 300 },
    { id: "Nokia", price: 180 },
    { id: "Microsoft", price: 220 }
];

//Activity 1: Modify Arrow Function Logic
const myFunction = () => {
    manufacturers.forEach(manufacturer => {
        if (manufacturer.id === "Apple") {
            console.log(
                "Apple Manufacturer Price:", manufacturer.price
            );
        }
    });
};
// Function call
myFunction();

//Activity 2: Modify for Loop Logic

for (let i = 0; i < manufacturers.length; i++) {
    if (manufacturers[i].id === "Microsoft") {
        console.log(
            "Manufacturer:", manufacturers[i].id,
            "| Price:", manufacturers[i].price
        );
    }
}
