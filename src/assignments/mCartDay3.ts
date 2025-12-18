
// initialize variable for mCart
let productId: number = 101;
let productDiscription: string ="ElectronicItem";
let productName : string = "HeadPhone";
let productAvailable : boolean = false;
const discountPercentage = {value : 20};

console.log ("dataType of productId is " + typeof productId);
console.log ("dataType of productDiscription is " + typeof productDiscription);
console.log ("dataType of productName is " + typeof productName);
console.log ("dataType of productAvailable is " + typeof productAvailable);
console.log("Discount % " +discountPercentage.value);

//Activity 1: Modify Data Type 
// Change the data type of productName from string to number a



//Reassign productAvailable to false 
// Reassign discountPercentage to 30 
discountPercentage.value =30;
console.log("/n activity 2nd " );
console.log("product availabel "+ productAvailable);
console.log("discount % "+ discountPercentage.value);