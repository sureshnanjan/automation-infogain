;
// Function to display customer details
// function displayCustomer(customer: Customer): void {
//     console.log(`Customer ID: ${customer.customerId}`);
//     console.log(`Customer Name: ${customer.customerName}`);
//     console.log(`Customer Age: ${customer.cutomerage}`);
// }
function displayCustomerdetails(customer) {
    console.log('customerId:', customer.customerID);
    console.log('customerName:', customer.customerName);
    console.log('customerage:', customer.cutomerage);
}
displayCustomerdetails({ customerID: 123, customerName: "Shahid", customerage: 25 });
