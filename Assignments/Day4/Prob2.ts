//Create interface
interface Product {
  productId: number;
  productName: string;
}
 
//Function to display product details
function displayProduct(product: Product): void {
  console.log("Product ID:", product.productId);
  console.log("Product Name:", product.productName);
}
 
//Object definition (extra property ignored)
const productObj = {
  productId: 101,
  productName: "Laptop",
  productPrice: 55000
};
 
displayProduct(productObj);