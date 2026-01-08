
/**
 * Interface defining operations for the Basic Authentication Page.
 * This includes methods to get page header, page content and footer text
 * @interface BasicAuthPageOperations
 */
export interface BasicAuthPageOperations {
  doLogic(username:string,password:string):void;
  getStatusMessage():Promise<string| null>;
}