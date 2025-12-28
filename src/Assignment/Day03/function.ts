/**
 * TypeScript_Exercises_1
 *
 * @module assignments_Day3/day3
 * Author: Pavithra
 * Date: 17th Dec 2025
 */
function getMobileByManufacturer(manufacturer_name:string ): string[]{
     let mobileList:string[]=[]

     if(manufacturer_name=='Apple'){
        mobileList=["iPhone 12", "iPhone 13", "iPhone 14"];
     }else if(manufacturer_name=="Nokia"){
        mobileList=["Nokia 3310", "Nokia G21", "Nokia X30"];
     }else if(manufacturer_name=='Samsung'){
        mobileList=["Galaxy S22", "Galaxy S23", "Galaxy A54"]
     }else{
        mobileList=["No mobiles"]
     }
     console.log(`Available mobiles are ${mobileList}`)
    return mobileList;
}

getMobileByManufacturer("Apple")