enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
    yellow = "YELLOW"
}

function getColorName(color: Color): string {
    switch (color) {
        case Color.Red:
            return "Red";
        case Color.Green:
            return "Green";
        case Color.Blue:
            return "Blue";
        case Color.yellow:
            return "Yellow";
        default:
            return "Unknown Color";
    } }

console.log(getColorName(Color.Red));    // Output: Red
console.log(getColorName(Color.Green));  // Output: Green
console.log(getColorName(Color.Blue));   // Output: Blue 
console.log(getColorName(Color.yellow)); // Output: Yellow   