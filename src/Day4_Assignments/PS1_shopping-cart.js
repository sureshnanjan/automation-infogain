// Cart can store only string values (product names)
var cart = []; //Ensures cart can hold multiple string values
function addToCart(productNames) {
    for (var _i = 0, productNames_1 = productNames; _i < productNames_1.length; _i++) {
        var product = productNames_1[_i];
        cart.push(product);
    }
    return cart;
}
console.log("Cart Items are: " +
    addToCart(["Moto G Play, 4th Gen", "Apple iPhone 5s"]).join(", "));
