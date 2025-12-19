function getMobileByManufacturer(manufacturer) {
    var mobileList = [];
    if (manufacturer === "Apple") {
        mobileList = ["iPhone 13", "iPhone 14", "iPhone 15"];
    }
    else if (manufacturer === "Samsung") {
        mobileList = ["Galaxy S22", "Galaxy S23", "Galaxy A54"];
    }
    else if (manufacturer === "Nokia") {
        mobileList = ["Nokia 3310", "Nokia G21", "Nokia X30"];
    }
    else {
        mobileList = ["No mobiles available"];
    }
    //Activity 1: Comment Specific Lines
    // • Re-execute the code. 
    // • Observe how commenting these lines affects: 
    // o Function execution 
    // o Returned output 
    // o Console display  
    return mobileList;
}
// Function call
//console.log("The available mobile list: " + getMobileByManufacturer("Apple"));
// Modifying the function call
console.log("The available mobile list:" + getMobileByManufacturer("Nokia"));
