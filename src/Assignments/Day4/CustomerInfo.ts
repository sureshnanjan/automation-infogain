/**
 * Banking – Customer Information
 */

// Declare Customer interface
interface Customer {
    customerId: number;
    customerName: string;
}

// Create customer object with extra property
const customerObj = {
    customerId: 5001,
    customerName: "Mahantesh",
    accountType: "Savings" // extra property
};

// Function to accept Customer and display details
function displayCustomerDetails(customer: Customer): void {
    console.log("Customer ID:", customer.customerId);
    console.log("Customer Name:", customer.customerName);
}

// Function call
displayCustomerDetails(customerObj);
