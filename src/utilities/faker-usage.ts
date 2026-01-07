/**
 * When Faker Is Typically Used
 * DB seeding
 * UI demos
 * Contract testing
 * Load testing
 * Playwright / Cypress automation
 * Analytics dashboards
 * 
 */
import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: Date;
}

function createFakeUser(): User {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    createdAt: faker.date.past(),
  };
}



interface ApiUserResponse {
  userId: number;
  username: string;
  isActive: boolean;
}

function mockApiUsers(count = 5): ApiUserResponse[] {
  return Array.from({ length: count }, () => ({
    userId: faker.number.int({ min: 1, max: 10_000 }),
    username: faker.internet.username(),
    isActive: faker.datatype.boolean(),
  }));
}

interface Order {
  orderId: string;
  productName: string;
  price: number;
  quantity: number;
  orderDate: string;
}

function createFakeOrder(): Order {
  return {
    orderId: faker.string.alphanumeric(10).toUpperCase(),
    productName: faker.commerce.productName(),
    price: Number(faker.commerce.price({ min: 10, max: 500 })),
    quantity: faker.number.int({ min: 1, max: 5 }),
    orderDate: faker.date.recent().toISOString(),
  };
}




const mockUsers = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.location.streetAddress(),
}));

type LogLevel = "INFO" | "WARN" | "ERROR";

function generateLog() {
  const level: LogLevel = faker.helpers.arrayElement(["INFO", "WARN", "ERROR"]);

  return {
    timestamp: new Date().toISOString(),
    level,
    message: faker.hacker.phrase(),
    requestId: faker.string.uuid(),
  };
}




// SEER A DB WITH FAKE USERS
const users: User[] = Array.from({ length: 10 }, createFakeUser);
console.log(users);


// Data for Mocking a API Response 
//console.log(JSON.stringify(mockApiUsers(), null, 2));

// FAKE Ecommerce Orders
const orders = Array.from({ length: 3 }, createFakeOrder);
//console.table(orders);

// Make a json file with mock Users
writeFileSync(
  "mock-users.json",
  JSON.stringify(mockUsers, null, 2),
  "utf-8"
);

// Create simulated log files entries
//console.log(generateLog());


