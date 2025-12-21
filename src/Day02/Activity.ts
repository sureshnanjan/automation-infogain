let cart:string[] = [];

function addToCart(ProductNames: string[]): string[] {
    for (let product of ProductNames){
        cart.push(product);
    }
    return cart;
}

console.log (" Cart Items are: " + 
    addToCart(["Moto G Play,4th Gen","Apple iphone 5s"]).join(",")
);

interface Product {
    productId : number;
    productName : string;
}

function productDetails(product: Product): void {
    console.log(`Product ID is :${product.productId} and Product Name is : ${product.productName}`);
}

productDetails({
    productId: 1234,
    productName: "Pen",
})

//Shopping cart item - Ecommerce

interface CartItem {
    itemId : number;
    itemName : string;
    quantity : number;
}

//Function to display total quantity of items added to cart
function quantityItems(cartitem: CartItem[]): number {
    let totalquantity = 0;
    for (let item of cartitem){
        totalquantity = totalquantity + item.quantity;
    }
    console.log(`Total Quantity is ${totalquantity}`);
    return totalquantity;
}

//multiple cart item objects
const item1: CartItem ={itemId: 1, itemName: "Shirt", quantity: 2 };
const item2: CartItem ={itemId: 2, itemName: "Jeans", quantity: 6 };
const item3: CartItem ={itemId: 3, itemName: "Jacket", quantity: 4 };

quantityItems([item1,item2,item3]);

//Order Details E-commerce
interface Order {
    orderId : number;
    customerName : string;
    orderAmount : number;
}

const order1: Order ={orderId: 1, customerName: "Arun", orderAmount: 2000 };
const order2: Order ={orderId: 2, customerName: "John", orderAmount: 6000 };
const order3: Order ={orderId: 3, customerName: "Rahul", orderAmount: 4000 };

//Function to display total quantity of items added to cart
function orderDetails(orderdetail: Order[]): void {
    for (let item of orderdetail){
    console.log(`Order Details: ID=${item.orderId}, Customer=${item.customerName}, OrderAmount=${item.orderAmount}`);
}
}

orderDetails([order1, order2, order3]);

//Customer Info Banking
interface Customer {
  customerId: number;
  customerName: string;
  accountType?: string;
}

const customer1: Customer = { customerId: 34, customerName: "Surya", accountType: "Savings"};

const accountHolder: Customer = customer1;

function custmerDetails(customer: Customer): void {
  console.log(
    `Customer Details:
    CustomerId is :${customer.customerId} CustomerName is: ${customer.customerName}`,
  );
}

custmerDetails(accountHolder);