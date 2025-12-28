/**
 * https://petstore.swagger.io/#/pet/uploadFile
 *
 * @module assignments_Day4/day4
 * Author: Pavithra
 * Date: 18th Dec 2025
 */
interface ApiResponse {
  code: number;
  type: string;
  message: string;
}

interface Category {
  id: number;
  name: string;
}

interface Pet {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: string[];
  tags: object[];
  status: string;
}

interface Tag {
  id: number;
  name: string;
}

interface order {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: string;
  Order: string;
  complete: boolean;
}
interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}


