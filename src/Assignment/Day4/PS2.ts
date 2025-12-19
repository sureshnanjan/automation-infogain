//Create an interface
interface Product {
  productId?: number; // May or may not will shown
  productName: string;
  productPrice?: number;
}
//Create function
function displayProductDetails(product: Product): void {
  console.log("Product ID:", product.productId);
  console.log("Product Name:", product.productName);
  console.log("Product Price:", product.productPrice);
}
 let productObj = {
   productName: "Samsung Galaxy A5"
 };
let productObj1 = {
  productId: 101,
  productName: "Laptop",
  productPrice: 75000 // extra property – ignored by interface
};
displayProductDetails(productObj);
displayProductDetails(productObj1);






