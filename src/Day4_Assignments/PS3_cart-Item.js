// Create multiple cart item objects.
var item1 = {
    itemId: 1,
    itemName: "OnePlus 15R",
    quantity: 1
};
var item2 = {
    itemId: 2,
    itemName: "Samsung Galaxy S24",
    quantity: 3
};
var item3 = {
    itemId: 3,
    itemName: "Xiaomi 14 Pro",
    quantity: 4
};
// Pass them to a function and display the total quantity.
function calculateTotalQuantity(cartItems) {
    var totalQuantity = 0;
    for (var _i = 0, cartItems_1 = cartItems; _i < cartItems_1.length; _i++) {
        var item = cartItems_1[_i];
        totalQuantity += item.quantity;
    }
    return totalQuantity;
}
var Cart = [item1, item2, item3];
console.log("Total Quantity of Items in Cart:", calculateTotalQuantity(Cart));
