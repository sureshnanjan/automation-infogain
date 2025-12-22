/**
 * Customer Interface represents the structure of a customer object
 * @interface Customer 
 */
interface Customer{
    customerId: number;
    customerName: string;
}

let customer1: Customer = {
    customerId: 112,
    customerName: "Manjunath"
};

/**
 * Displays the details of a customer
 * @param customer 
 */
function displayCustomerDetails(customer: Customer): void {
    console.log(`Customer ID: ${customer.customerId}, Customer Name: ${customer.customerName}`);
}
displayCustomerDetails(customer1);

//Activity : Create and display another customer object with an extra property
 let customer2={
    customerId: 106,
    customerName: "Raghav",
    acountType: "Savings" // Extra property is ignored
 }

displayCustomerDetails(customer2);