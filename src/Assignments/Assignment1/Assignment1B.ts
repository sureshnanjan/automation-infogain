enum MobilePrice{
    Black=200,
    Gold=280,
    White=300   
}


function calculateAmount(Discount:number,color:MobilePrice):void{
    const ActualPrice=color;
    const discountAmount = (ActualPrice * Discount) / 100;
    const FinalPrize=ActualPrice-discountAmount;
  
console.log("Actual Price of mobile ",ActualPrice,"\nDiscount of %",Discount,"\nDiscount Ammount",discountAmount,"\nFinalPrize ",FinalPrize)
 

}

calculateAmount(10,MobilePrice.White);


