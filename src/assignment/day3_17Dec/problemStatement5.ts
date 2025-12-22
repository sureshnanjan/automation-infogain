/**
 * 
 * @param name Mobile manufacturer name
 * @returns List of mobile models
 */
function getMobileByManufacturer(name:string):string[]{
    let model:string[] = [];
    if(name=="Apple"){        
        model=["iphone 15","iphone 16"]
    }
     if(name=="Nokia"){
        model=["nokia 1100","nokia xmusic"]
    }
    return model;
}
console.log(`Models of Apple`,getMobileByManufacturer("Apple"));
console.log(`Models of Nokia`,getMobileByManufacturer("Nokia"));