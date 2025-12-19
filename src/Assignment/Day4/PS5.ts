

//Banking – Customer Information

interface Customer{
    customerId: number;
    customerName: string; 
    
}
let customerObj: Customer ={customerId: 5578902, customerName: 'Praveen'};
let customerObj2={customerId: 5559870, customerName: 'Mithul', accounttype: "savings"};
 
function displayCustomerDetails(customer: Customer): void {
  console.log("Customer ID:", customer.customerId);
  console.log("Customer Name:", customer.customerName);
 
}
displayCustomerDetails(customerObj);
displayCustomerDetails(customerObj2);