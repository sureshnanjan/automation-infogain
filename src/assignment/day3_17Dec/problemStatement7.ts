/**
 * 
 * @param name Mobiles manufacturer name
 * @returns List of mobile models
 */
function getMobilesByManufacturer(name:string="Samsung",id?:number):string[]{
    let model:string[] = [];
    if(id==101){
         model=["moto xplay","moto 65"]
         return model;
    }
    if(name=="Apple" ){        
        model=["iphone 15","iphone 16"]
    }
     if(name=="Nokia"){
        model=["nokia 1100","nokia xmusic"]
    }
    if(name=="Samsung"){
        model=["S24","A55"]
    }
    return model;
}
console.log(`Models of Apple`,getMobilesByManufacturer("Apple"));
console.log(`Models of Nokia`,getMobilesByManufacturer("Nokia"));
console.log(`Models of default param`,getMobilesByManufacturer());
console.log(`Models of id 101`,getMobilesByManufacturer("",101));
console.log(`Models of id 101`,getMobilesByManufacturer("",102));