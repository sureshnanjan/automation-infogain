//declare enum
enum mobilePrice{
    Black  = 250,
    Gold = 280,
    White = 300
}
//calculate total amt
function calculateAmount(Discount:number,color:mobilePrice):void{
    const ActualPrice=color;
    const discountAmount = (ActualPrice * Discount) / 100;
    const FinalPrize=ActualPrice-discountAmount;
  
console.log("Actual Price of mobile $",ActualPrice,"\nDiscount of %",Discount,"\nDiscount Ammount $",discountAmount,"\nFinalPrize $ ",FinalPrize)
 
 
}

calculateAmount(10,mobilePrice.White);



