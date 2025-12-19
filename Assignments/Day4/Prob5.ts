// Declare interface
interface Customer {
  customerId: number;
  customerName: string;
}
 
// Create customer with extra property
const customerObj = {
  customerId: 201,
  customerName: "Mani",
  accountType: "Savings"
};
 
// Function to display valid details only
function displayCustomer(customer: Customer): void {
  console.log("Customer ID:", customer.customerId);
  console.log("Customer Name:", customer.customerName);
}
 
displayCustomer(customerObj);