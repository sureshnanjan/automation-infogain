
// Create an interface Product with: 
// o productId of type number 
// o productName of type string
interface Product {
    productId: number; 
    productName: string;
   
}
// Create a function to: 
// o Accept a parameter of type Product 
// o Print all product details on the console
function printProductDetails(product: Product): void {
    console.log("Product Id:", product.productId);
    console.log("Product Name:", product.productName);
}

// Modify the object definition as instructed in the activity: 
// o Initially missing productId 
// o Later includes an extra property productPrice (should be ignored by the 
// interface)

let product1: Product = {
    productId: 101,
    productName: "iPhone 14"
};

printProductDetails(product1);

let product2 = {
    productId: 102,
    productName: "Samsung Galaxy S23",
    productPrice: 75000,
    productCategory: "Mobiles"
};

printProductDetails(product2);
