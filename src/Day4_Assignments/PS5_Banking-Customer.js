//Create a customer object with an extra property accountType. 
var customer1 = {
    customerId: 701,
    customerName: "Charle",
    accountType: "Savings"
};
// Pass the object to the function and display valid details only. 
function displayCustomerDetails(customer) {
    console.log("Customer Id:", customer.customerId);
    console.log("Customer Name:", customer.customerName);
}
displayCustomerDetails(customer1);
