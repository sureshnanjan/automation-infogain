/**
 * Assignment - Day 4
 * Author - Amlana Kumar Sahoo
 * Date - 18th Dec 2025
 * ------------------------------------------Assignment------------------------------------------------------------ 
Banking – Customer Information
Problem Statement
A banking application needs an interface named Customer with:
    •customerId (number)
    •customerName (string)
A function should accept the customer object and display details.
Activity
    1. Declare the Customer interface.
    2. Create a customer object with an extra property accountType.
    3. Pass the object to the function and display valid details only.
*/
//------------------------------------------Program------------------------------------------------------------
interface Customer {
    customerId: number;
    customerName: string;
    accountType?: string; // Optional property to allow extra properties
}
const customer1: Customer = {
    customerId: 2001,
    customerName: "John Doe",
    accountType: "Savings" // Extra property will be ignored by the interface
};
function displayCustomerDetails(customer: Customer): void {
    console.log(`Customer ID: ${customer.customerId}`);
    console.log(`Customer Name: ${customer.customerName}`);
    console.log(`Account Type: ${customer.accountType ?? "N/A"}`);
}
displayCustomerDetails(customer1);

/** Expected Output:
Customer ID: 2001
Customer Name: John Doe
Account Type: Savings
*/