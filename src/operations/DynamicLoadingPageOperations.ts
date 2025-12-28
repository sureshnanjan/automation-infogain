/**
 * Author: Pavithra
 * Date: 24th Dec 2025
 * Dynamic loading Page interface
 * from "https://the-internet.herokuapp.com/"
 */

export interface DynamicLoadingPageOperations {
  goto(): Promise<void>;
  getTitle(): Promise<string | null>;
  getDescription(): Promise<string | null>;
  getLinks(): Promise<string[] | null>;
  clickLink1(): Promise<void>;
  clickLink2(): Promise<void>;
  getResult(): Promise<string | null>;
}
