import { Category } from "src/models/Category";
import { Tag } from "src/models/Tag";

/**
 * Represents a Pet entity in the pet store application.
 * 
 */
export interface Pet {
  /** Unique identifier for the pet (optional as per API specification) */
  id: number;

  /** Category to which the pet belongs */
  category: Category;

  /** Name of the pet (required) */
  name: string;

  /** List of photo URLs associated with the pet */
  photoUrls: string[];

  /** List of tags associated with the pet */
  tags: Tag[];

  /** Current status of the pet in the store */
  status: "available" | "pending" | "sold";
}