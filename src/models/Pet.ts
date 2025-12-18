import { Category } from "src/models/Category";
import { Tag } from "src/models/Tag";

/**
 * Represents a Pet entity in the pet store application.
 * 
 */
 interface Pet {
    id: number;                              // Optional as per API
    category: Category;                      // Single category object
    name: string;                            // Required field
    photoUrls: string[];                     // Required field
    tags: Tag[];                             // List of tags
    status: "available" | "pending" | "sold";// Pet status in store
<<<<<<< HEAD
<<<<<<< HEAD
 }
=======
  }
>>>>>>> 57ee0e0 (adding assignments)
=======
  }
>>>>>>> 91e0c18 (adding assignments)
