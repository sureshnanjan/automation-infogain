/*As part of application development, a developer needs to work with arrays of objects and arrow 
functions in TypeScript. This activity focuses on filtering data based on conditions and 
understanding how arrow functions and loop logic can be modified to control output.

Task Description
The developer is required to declare a manufacturers array consisting of four objects, where each 
object contains:
• id (manufacturer name)
Assignment # 3 Topic: TypeScript
Infogain Internal
• price (price in dollars)
An arrow function named myFunction must be implemented to populate the manufacturer id values
whose price is greater than or equal to 200 dollars.
Initial Requirements
1. Declare an array named manufacturers with four manufacturer objects.
2. Each object must have id and price properties.
3. Implement an arrow function myFunction to filter manufacturers based on price ≥ 200.
4. Display the result on the console.*/

interface manufacturer{
    id:string
    price:number
}

const manufacturers:manufacturer[]=
[
{id:"Apple",price:1000},
{id:"Iqoo",price:2000},
{id:"Oppo",price:3000},
{id:"Samsung",price:4000}
]

function myFunction(result1:string): string[] {
    const result: string[] = [];
  
    for (const manufacturer of manufacturers) {
      if (manufacturer.price >= 200) {
        result.push(manufacturer.id);
      }
    }
  
    return result;
  };
  console.log("Manufacturers with price >= 200:", myFunction("Apple"));

