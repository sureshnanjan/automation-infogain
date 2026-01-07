// Step 1: Declare array of manufacturers
const manufacturers = [
  { id: "Apple", price: 300 },
  { id: "Samsung", price: 150 },
  { id: "Microsoft", price: 250 },
  { id: "Sony", price: 200 }
];

// Step 2: Arrow function to check price >= 200
const myFunction = () => {
  for (let i = 0; i < manufacturers.length; i++) {
    if (manufacturers[i].price >= 200) {
      console.log(manufacturers[i].id);
    }
  }
};

// Call function
myFunction();

/*
-----------------------------
Activity 1
-----------------------------
If manufacturer is Apple, print price

if (manufacturers[i].price >= 200) {
  if (manufacturers[i].id === "Apple") {
    console.log(manufacturers[i].price);
  } else {
    console.log(manufacturers[i].id);
  }
}
*/

/*
-----------------------------
Activity 2
-----------------------------
Print only Microsoft details

if (manufacturers[i].id === "Microsoft") {
  console.log(
    manufacturers[i].id + " " + manufacturers[i].price
  );
}
*/
