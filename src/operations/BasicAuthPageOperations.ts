
/**
 * Interface defining operations for the Basic Authentication Page.
 * This includes methods for verifying the logging in,
 * logging out, verifying page content, and verifying the page title.
 * @interface BasicAuthPageOperations
 */
export interface BasicAuthPageOperations {
  getPageHeader(): Promise<string| null>;
  getPageContent(): Promise<string| null>;
  getFooterText(): Promise<string| null>;
}