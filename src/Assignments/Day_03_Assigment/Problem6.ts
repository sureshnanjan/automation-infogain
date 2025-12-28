
// Declare array of objects
const manufacturers = [
  { id: "Apple", price: 300 },
  { id: "Samsung", price: 180 },
  { id: "Microsoft", price: 250 },
  { id: "Google", price: 220 }
];

// Arrow function to filter manufacturers with price >= 200
const myFunction = () => {
  console.log("Manufacturers with price >= 200:");
  const result = manufacturers.filter(
    manufacturer => manufacturer.price >= 200).forEach(m => {
      console.log(m.id);
    });
};

myFunction();

//Activity 1

const myFunctionModified = () => {
  const result = manufacturers.filter(
    manufacturer => manufacturer.price >= 200
  );

  console.log("Filtered Output:");
  result.forEach(m => {
    if (m.id === "Apple") {
      console.log(`Apple Price: ${m.price}`);
    } else {
      console.log(m.id);
    }
  });
};

myFunctionModified();

//Activity 2

const myFunctionLoop = () => {
  for (let i = 0; i < manufacturers.length; i++) {
    if (manufacturers[i].id === "Microsoft") {
      console.log(
        `Manufacturer: ${manufacturers[i].id}, Price: ${manufacturers[i].price}`
      );
    }
  }
};

myFunctionLoop();