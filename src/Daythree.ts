var productid:number=1001;
let productdescription:String="Mobile Phone";
let productname:String="Samsung";
productname = 12345 as unknown as String 
let productavailability:boolean=false;
 
const discountpercentage:number=30;
//Below is the code for enum
enum Mobileprice{
  //Black=250,
  //Gold=280,
  //Gold=30000,
  //White=300
  Black,Gold,White
}

function calculateAmount(mobilecolor:Mobileprice,discount:number):number{
  let finalamount:number;
  finalamount=mobilecolor - (mobilecolor * discount /100);
  return finalamount;}
console.log("Final Amount after discount:"+calculateAmount(Mobileprice.Black,discountpercentage));
console.log("Final Amount after discount:"+calculateAmount(Mobileprice.White,discountpercentage));

console.log("Final Amount after discount:"+calculateAmount(Mobileprice.Gold,discountpercentage));
console.log("Product Id:"+productid);
console.log("Product Description:"+productdescription)
console.log("Product Name:"+productname);
console.info("Product Availability:" ,productavailability);
console.log("Product Availability:" ,productavailability);
console.log("Discount Percentage:"+discountpercentage);



