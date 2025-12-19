interface Customer {
    customerId: number;
    customerName: string;
}
//Create a customer object with an extra property accountType. 
let customer1 = {
    customerId: 701,
    customerName: "Charle",
    accountType: "Savings"
};
// Pass the object to the function and display valid details only. 
function displayCustomerDetails(customer: Customer): void {
    console.log("Customer Id:", customer.customerId);
    console.log("Customer Name:", customer.customerName);
}

displayCustomerDetails(customer1);
