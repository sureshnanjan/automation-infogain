/**
 * Represents a Tag entity used across the application.
 * 
 * @interface Tag
 * @property {number} id - Unique identifier for the tag.
 * @property {string} name - Display name of the tag.
 */
export interface Tag {
    /** Unique identifier for the tag */
    id: number;
  
    /** Display name of the tag */
    name: string;
  }