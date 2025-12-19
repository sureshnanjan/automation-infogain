//Assignment 2:
/*Consider that a developer needs to declare an enum variable named 
MobilePrice and assign three different parameters like Black, Gold, 
and White with 250, 280, and 300 dollars respectivtely as default 
values. It also consists of the function named calculateAmount 
which would help the developer in calculating totalAmount variable 
based on different parameter like discount and color of Mobile.*/

enum MobilePrice {
    Black=250,
    Gold=280,
    White=300
    } 
  
    let totalAmount=0;
    function calculateAmount(discount:number, mobilePrice:MobilePrice):number{
        const discountedAmount=mobilePrice * (discount/100);
        return totalAmount=mobilePrice-discountedAmount;
    }
    
    console.log("Total amount is: "+calculateAmount(10, MobilePrice.Black));  //Output: Total amount is: 225

/*Activity:
Modify Line no 2 as given below and re-execute the code.
enum MobilePrice {Black, Gold, White}
*/
    
/* enum MobilePrice {
    Black,
    Gold,
    White
    }

console.log("Total amount is: "+calculateAmount(15, MobilePrice.Gold));   //Output: Total amount is: 0.85 
*/

/* 
Modify Line no 2 as given below and re-execute the code and populate the actual and final price of White color mobile.
enum MobilePrice {Black, Gold=30000, White}
*/

/*enum MobilePrice {
    Black,
    Gold=30000,
    White
    }

console.log("Total amount is: "+calculateAmount(20, MobilePrice.White));   //Output: Total amount is: 24000.8
*/
