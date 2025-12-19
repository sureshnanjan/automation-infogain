//Assignment 1:
/*
Initial Requirements
1.Declare all required variables using appropriate TypeScript data types.
2.Use const for the discountPercentage variable.
3.Display the type of each variable using typeof.
4.Display the discount percentage value on the console.
*/

let productId: number= 123134;
let productDescription: string= "Sleeveless T-shirt";
let productName: string= "Basic White T-shirt";
let productAvailable: boolean= true; 
const discountPercentage: number= 10;

//typeof() displays the type of the variables
console.log(typeof(productId)); // output:number 
console.log(typeof(productDescription)); // output:string 
console.log(typeof(productName)); // output:string 
console.log(typeof(productAvailable)); // output:boolean 
console.log(typeof(discountPercentage)); // output:number 

/*
Activity 1: Modify Data Type
Change the data type of productName from string to number a
Re-execute the program and observe the output.
*/
//productName:number=100;     //due to 'type safety' type cannot be changed

/*Activity 2: Update Variable Values
perform the following updates:
Reassign productAvailable to false
Reassign discountPercentage to 30
Print the updated values on the console
Re-execute the code and verify the changes
*/


productAvailable=false;
//discountPercentage=30; // since discountPercentage is of type const it cannot be changed

console.log(productName);  //Output: Basic White T-shirt
console.log(productAvailable);   //Output: false
console.log(discountPercentage);  //Output: 10