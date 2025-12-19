//Assignment 2: Requirement
    /*1. Create an interface Product with:
    a) productId of type number
    b) productName of type string
2. Create a function to:
    a) Accept a parameter of type Product
    b) Print all product details on the console
3. Modify the object definition as instructed in the activity:
    a) Initially missing productId
    b) Later includes an extra property productPrice (should be ignored by the interface)
4. Ensure the code compiles and executes without TypeScript errors.
*/
//Create an interface Product
interface Product
{
    productId: number;
    productName: string;
    productPrice?:number;
}

const prod: Product={
    productId: 34345,
    productName: "Shorts",
    productPrice: 1299,
};

function displayProducts(product:Product): void
{
    console.log(`Product Details:
                    Product id: ${product.productId},
                    Product Name: ${product.productName}`
    );
     
}

displayProducts(prod);   //Output:  Product Details:    Product id: 34345, Product Name: Shorts