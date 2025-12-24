
/**
 * Interface defining operations for the Basic Authentication Page.
 * This includes methods to get page header, page content and footer text
 * @interface BasicAuthPageOperations
 */
export interface BasicAuthPageOperations {
  getPageHeader(): Promise<string| null>;
  getPageContent(): Promise<string| null>;
  getFooterText(): Promise<string| null>;
}