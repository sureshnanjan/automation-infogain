//Product interface to include product details
interface Product{
    productId: number,
    productName: string
}
 
/**
 * 
 * @param product details of the product 
 */
function displayProductDetails(product: Product): void {
  console.log("Product ID:", product.productId);
  console.log("Product Name:", product.productName);
}
 
//Assigning values based on the Product interface
const productObj = {
  productId: 101,
  productName: "JBL Speaker",
  productPrice: 7000 // extra values will be ignored since it is not part of the interface declaration
};
 
//calling function
displayProductDetails(productObj);