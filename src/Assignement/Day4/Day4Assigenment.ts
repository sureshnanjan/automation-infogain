//Problem 1:

/*Requirements
1. The cart variable must:
o Be declared as a string array
o Store only product names (string)
2. The addToCart function must:
o Accept multiple product names as input
o Add each product to the cart
o Return the updated cart
3. The function should:
o Reject non-string values
o Maintain type safety using TypeScript
4. The final output must:
o Display all cart items correctly using console.log
*/

let cart:string[]=[];   //declared as a string array

function addToCart(productName:string[]):string[]{
        for (let product of productName) {
        cart.push(product);
}
        return cart;
}
 
addToCart(["mobile","lipstic","perfume","by10101"]); // adding sting values
console.log("Added items are:",addToCart);
console.log("Added items are:",cart);


/* Output:
Added items are: [Function: addToCart]
Added items are: [ 'mobile', 'lipstic', 'perfume', 'by10101' ]
*/

//Problem 2:

interface product{
    productId1:number,
    productName1:string
}
const productDetails={
    productId1:1000,
    productName1:"bycycle",
    productPrize:"100000"
}
//Create a function 
function parameter(product:any):void{
    console.log("first product",product.profuctId1);
}
console.log(productDetails);

/* Output:
{ productId1: 1000, productName1: 'bycycle', productPrize: '100000' }

*/

//problem 3: Shopping Cart Item

interface CartItem{
    itemId :number,
    itemName :string,
    quantity :number
}
const cart1:CartItem={
    itemId :7777,
    itemName :'eeeeeeee',
    quantity :2
}
const cart2:CartItem={
    itemId :999,
    itemName :'data11',
    quantity :1
}
const cartItems:CartItem[]=[cart1,cart2];
 function totalItems(cart:CartItem):number{
     let total=0;
     for(const item of cartItems){
        total+=item.quantity;
     }
     return total;
 }
const totalQuantityFromCart=totalItems(cart2);
console.log(totalQuantityFromCart);

/* Output:
{ productId1: 1000, productName1: 'bycycle', productPrize: '100000' }
3
*/

//Problem 4:
/*Activity
1. Declare the Order interface.
2. Create an order object missing one mandatory property.
3. Fix the object to satisfy the interface.
4. Display order details on the console.
*/


interface Order{
    orderId:number,
    customerName:"string",
    customerAmount:10000
}

let OrderDetails={
    orderId:54543,
    customerAmount:10000
}

console.log(OrderDetails.orderId);
console.log(OrderDetails.customerAmount);

/* Output:
54543
10000
*/

//Problem 5 :

/*
Activity
1. Declare the Customer interface.
2. Create a customer object with an extra property accountType.
3. Pass the object to the function and display valid details only
*/

interface Customer{  //interface decleration
        customerId:number,
        customerName:'string',
        
}

const CustomerInfo = {   //object decleration
    customerId:23123,
    customerName:'Priyanka',
    accountType:'Private'  //extra property
}

function CustomerOrderDetails(customer:Customer):void{
    console.log(customer.customerId);
    console.log(customer.customerName);
   
}

 //CustomerOrderDetails(CustomerInfo); //function call
    /* 
    Output:
    problem 5 : shows this error : Argument of type '{ customerId: number; customerName: string; accountType: string; }' is not assignable to parameter of type 'Customer'.
    Types of property 'customerName' are incompatible.
    Type 'string' is not assignable to type '"string"'.ts(2345) 
    */
   

 