//decelaring and initializing a variables
let productId :number=10;
let productDiscription:string="android";
var productName:String="mobile";
let productAvailable:boolean=true;
let discountPercentage:number=40;
//let productName1:number="mobile";
 productAvailable=false;
  discountPercentage=30;

//printing the data/variables
console.log("productId is:",productId);
console.log("productDiscription is:",productDiscription);
console.log("productName is:",productName);
console.log("productAvailable is available? ",productAvailable);
console.log("  After activity");
//console.log("productName is:",productName1);    //this will couse an error becouse change type is not correct
console.log("productAvailable is available? ",productAvailable);
console.log("discountPercentage is:",discountPercentage);


//Secound Problem statemant

enum MobilePrice{
    // black=250,
    // gold=280,
    // white=300,
    black,
    gold=30000,
    white
}
function calculateAmount(discount:number,color:MobilePrice):number{
    let totalPrice=color;
    let totalAmount=totalPrice-(totalPrice*discount/100);
    return totalAmount;
}
let afterDiscount=calculateAmount(11,MobilePrice.gold);
console.log(afterDiscount);

//Next Problem 

// enum moblieList{
//     oppo,
//     iPhone,
//     vivo,
//     samsung
// }
// function getMobileByManufacturer(string):string{

// }

