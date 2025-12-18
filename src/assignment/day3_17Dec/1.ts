// Student interface for type declaration
interface Student {
    name:string,
    rollnumber:number
}
//function utilizing Student interface
function displayStudentDetails(stu :Student ):void{
//console.log(stu.name,stu.rollnumber)
}
//Calling function by passing Student interface values as param
displayStudentDetails({name:"Mani",rollnumber:117})
//enum declaration
enum Statuscode {
    Success=200,
    ClientError=400
}
//console.log(Statuscode.Success)
/***********************************************************************************/ 
let productId:number = 10
let productDescription:string = "Android"
let productName:string = "Samsung s24"
let productAvailable:boolean = false
const discountPercentage:number = 30

console.log(`Product Id: `, typeof(productId));
console.log(`Product Description: `, typeof(productDescription));
console.log(`Product Name: `, typeof(productName));
console.log(`Product Available: `, typeof(productAvailable));
console.log(`Discount Percentage: `, discountPercentage);
console.log(`Product Available`, productAvailable);