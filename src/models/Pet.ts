import {Category} from "src/models/Category";//
import {Tag} from "src/models/Tag";

/**
 * Pet model representing pet details in the store
 */
 interface Pet {
    id: number;                              // Optional as per API
    category: Category;                      // Single category object
    name: string;                            // Required field
    photoUrls: string[];                     // Required field
    tags: Tag[];                             // List of tags
    status: "available" | "pending" | "sold";// Pet status in store
  }
