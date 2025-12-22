/**
 * https://petstore.swagger.io/#/pet/uploadFile
 *
 * @module assignments_Day4/day4
 * Author: Pavithra
 * Date: 18th Dec 2025
 */
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