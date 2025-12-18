// interface with values of the Customer Details
interface Customer {
  customerId: number;
  customerName: string;
}
 
// Create a customer object with an extra property accountType
const customer = {
  customerId: 3,
  customerName: "Manikandan",
  accountType: "Salary"
};
 
/**
 * 
 * @param customer values with customer details
 */
function displayCustomer(customer: Customer): void {
  console.log(`Customer Details: ${customer.customerId}, ${customer.customerName}`);
}
 
displayCustomer(customer);