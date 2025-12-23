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

/*************************************************
 * Activity 1: Comment Specific Lines
 *************************************************/

// Commenting the return statement will cause a compile-time error
// return mobileList;

/*
Observed Behavior:
- Function execution fails
- Compilation error occurs
- Return type string[] is not satisfied
*/


// Correct execution
console.log("The available mobile list:", getMobileByManufacturer("Samsung"));



/*************************************************
 * Activity 2: Modify Function Call
 *************************************************/

// Modified function call using + operator
console.log("The available mobile list: " + getMobileByManufacturer("Nokia"));

/*
Explanation:
- Array is converted to a comma-separated string
*/
