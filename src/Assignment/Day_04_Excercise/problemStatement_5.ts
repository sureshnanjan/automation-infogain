/*
A banking application needs an interface named Customer with:
• customerId (number)
• customerName (string)
A function should accept the customer object and display details.
Activity
1.Declare the Customer interface.
2.Create a customer object with an extra property accountType.
3.Pass the object to the function and display valid details only.

*/

// Declaring the interface Customer with customerId and customerName properties

interface Customer {
    customerId: number;
    customerName: string;
}

// Function to display customer details

function displayCustomerDetails(customer: Customer): void {
    console.log(`Customer ID: ${customer.customerId}`);
    console.log(`Customer Name: ${customer.customerName}`);
}

// Creating a customer object with an extra property accountType (should be ignored by the interface)

let customer1: Customer = {
    customerId: 501,
    customerName: "Alice Smith",
    // accountType: "Savings" // This property is ignored as per the interface definition
} as Customer;

// Displaying customer details for customer1
displayCustomerDetails(customer1);  
 

// Creating another customer object without the extra property

let customer2: Customer = {
    customerId: 502,
    customerName: "Bob Johnson"
};
// Displaying customer details for customer2
displayCustomerDetails(customer2);    



