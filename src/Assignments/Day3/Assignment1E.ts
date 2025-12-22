/**As part of application development, a developer needs to implement a TypeScript function to 
retrieve a list of mobile phones based on the manufacturer name provided as input. This exercise 
helps in understanding function declaration, parameter passing, return types, and code behavior 
after commenting specific lines */

interface Manufacturer {
    id: string;
    price: number;
  }
  
  const manufacturers1: Manufacturer[] = [
    { id: "Apple", price: 300 },
    { id: "Samsung", price: 250 },
    { id: "Nokia", price: 150 },
    { id: "Microsoft", price: 220 }
  ];

  const myFunction1 = (): string[] => {
    const result: string[] = [];
  
    for (const manufacturer of manufacturers) {
      if (manufacturer.price >= 200) {
        result.push(manufacturer.id);
      }
    }
  
    return result;
  };
  
  console.log("Manufacturers with price >= 200:", myFunction());
  
  