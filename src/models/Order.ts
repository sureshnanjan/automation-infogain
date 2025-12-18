//**Represents an order placed for a pet **//
interface Order {
    id: number;         //Unique order identifier
    petId: number;      // Associated pet ID
    quantity: number;   // Number of pets ordered
    shipDate: string;     // Order shipping date (ISO string)
    status: "placed"|"approved"|"delivered"; // Current order status
    complete: boolean;    // Indicates whether order is completed
  }

  //Initialization

  const Order1={
    id:45,
    petId:1001,
    quantity: 5,
    shipDate:"Monday",
    status: "placed",
    complete: true
  }

  console.log(Order1)