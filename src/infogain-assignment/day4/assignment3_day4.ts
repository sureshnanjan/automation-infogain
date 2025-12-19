//Assignment 3: Requirements:
/*
1. Create an interface named CartItem with:
a) itemId (number)
b) itemName (string)
c) quantity (number)
A function should calculate and display the total quantity of items added to the cart.
    Activity
    1.Declare the CartItem interface.
    2.Create multiple cart item objects.
    3.Pass them to a function and display the total quantity.
*/

//E-commerce – Shopping Cart Item
interface CartItem {
    itemId: number;
    itemName: string;
    quantity: number;
}

const items: CartItem[] = [
    { itemId: 101, itemName: "T-shirts", quantity: 2 },
    { itemId: 102, itemName: "Skirts", quantity: 1 },
    { itemId: 103, itemName: "Handbags", quantity: 5 }
];

function totalQuantity(entries: CartItem[]): void {
    let total:number=0;
    for(let entry of entries)
    {
        total+=entry.quantity;
    }
    console.log("Total quantity of items:", total);
}

totalQuantity(items);  //Output: Total quantity of items: 8

/*
An e-commerce system needs to manage order details using an interface named Order.
1. Properties:
a) orderId (number)
b) customerName (string)
c) orderAmount (number)
Activity
1. Declare the Order interface.
2. Create an order object missing one mandatory property.
3. Fix the object to satisfy the interface.
4. Display order details on the console.
*/

//E-commerce – Order Details
interface Order1
{
    orderId: number;
    customerName: string;
    orderAmount: number;
}

const order1: Order1=
{
    orderId:233445,
    customerName: "Anju",
    orderAmount: 3200
};

function displayOrderDetails(order: Order1):void
{
    console.log(`Order Details:
                ${order.orderId},
                ${order.customerName},
                ${order.orderAmount}`
    );
}

displayOrderDetails(order1);

/* Output:
Order Details:
                233445,
                Anju,
                3200
*/

/*
A banking application needs an interface named Customer with:
a) customerId (number)
b) customerName (string)
A function should accept the customer object and display details.
Activity
1. Declare the Customer interface.
2. Create a customer object with an extra property accountType.
3. Pass the object to the function and display valid details only.
*/

//Banking – Customer Information
interface Customer
{
    customerId: number;
    customerName: string;
    accountType?: string;
}

const cust: Customer =
{
    customerId: 5667786,
    customerName: "Anish",
    accountType:"Savings"
};

function displayCustomerDetails(custDetails:Customer): void{
    console.log(`Customer Details:
                ${custDetails.customerId},
                ${custDetails.customerName}
                ${custDetails.accountType}`
    );
}

displayCustomerDetails(cust);

/*Output:
Customer Details:
                5667786,
                Anish
                Savings
*/