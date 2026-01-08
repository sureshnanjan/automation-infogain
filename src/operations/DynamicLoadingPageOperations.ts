export interface DynamicLoadingPageOperations {
  goto(): Promise<void>;
  getTitle(): Promise<string | null>;
  getDescription(): Promise<string | null>;
  getLinks(): Promise<string[] | null>;
  clickLink1(): Promise<void>;
  clickLink2(): Promise<void>;
  getResult(): Promise<string | null>;
}