interface Person {
  name: string;
  age: number;
  isEmployed: boolean;
}

const john: Person = {
  name: "John Doe",
  age: 30,
  isEmployed: false,
};  

function greet(person: Person): string {
  return `Hello, my name is ${person.name}, I am ${person.age} years old and I am ${person.isEmployed ? "employed" : "unemployed"}.`;
}

console.log(greet(john));