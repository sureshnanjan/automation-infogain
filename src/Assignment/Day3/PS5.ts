export {};

/*************************************************
 * Function: getMobileByManufacturer
 *************************************************/

function getMobileByManufacturer(manufacturer: string): string[] {
    let mobileList: string[] = [];

    if (manufacturer === "Samsung") {
        mobileList = ["Galaxy S23", "Galaxy A54", "Galaxy Z Flip"];
    } else if (manufacturer === "Apple") {
        mobileList = ["iPhone 14", "iPhone 15", "iPhone 15 Pro"];
    } else if (manufacturer === "Nokia") {
        mobileList = ["Nokia G42", "Nokia X30", "Nokia C32"];
    } else {
        mobileList = ["No mobiles available for this manufacturer"];
    }

    return mobileList;
}

console.log("The available mobile list:", getMobileByManufacturer("Samsung"));
console.log("The available mobile list: " + getMobileByManufacturer("Nokia"));
