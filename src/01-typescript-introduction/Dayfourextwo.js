// Step 2: Create multiple cart items
var cartItems = [
    { productId: 202, productName: "Samsung", price: 28000, quantity: 2 },
    { productId: 303, productName: "Motorola", price: 5000, quantity: 1 },
    { productId: 101, productName: "Vivo", price: 25000, quantity: 1 }
];
// Step 3: Function to calculate total amount
function calculateTotal(items) {
    var total = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        total += item.price * item.quantity;
    }
    return total;
}
// Step 4: Display total cart amount
console.log("Total Cart Amount:", calculateTotal(cartItems));
