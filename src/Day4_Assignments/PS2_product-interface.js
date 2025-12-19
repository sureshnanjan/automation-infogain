// Create a function to: 
// o Accept a parameter of type Product 
// o Print all product details on the console
function printProductDetails(product) {
    console.log("Product Id:", product.productId);
    console.log("Product Name:", product.productName);
}
// Modify the object definition as instructed in the activity: 
// o Initially missing productId 
// o Later includes an extra property productPrice (should be ignored by the 
// interface)
var product1 = {
    productId: 101,
    productName: "iPhone 14"
};
printProductDetails(product1);
var product2 = {
    productId: 102,
    productName: "Samsung Galaxy S23",
    productPrice: 75000,
    productCategory: "Mobiles"
};
printProductDetails(product2);
