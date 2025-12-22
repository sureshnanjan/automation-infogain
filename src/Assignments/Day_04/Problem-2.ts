
/**
 * Product Interface represents the structure of a product object
 * @interface Product 
 */
interface Product{
    productId: number;
    productName: string;
}

/**
 * Displays the details of a product
 * @param product 
 */
function displayProductDetails(product: Product): void {
    console.log(`Product ID: ${product.productId}, Product Name: ${product.productName}`);
}

const product1: Product = { productId: 115, productName: "MobilesWatches" };
displayProductDetails(product1);
const product2: Product = { productId: 125, productName: "Smartphone" };
displayProductDetails(product2);

//Activity 1: Add a New Property to the Interface

// Initially missing productId
// let productObj: Product = {
//    productName: "Laptop" // Error: Property 'productId' is missing in type '{ productName: string; }' but required in type 'Product'.
//  };

// Corrected with productId
let productObj = {
  productId: 145,
  productName: "Headphone",
  productPrice: 10000 //Extra property is ignored
};

// Display product details
displayProductDetails(productObj);