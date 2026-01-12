
/**
 * Interface defining operations for the Basic Authentication Page.
 * This includes methods to login and retrieve status messages.
 * @interface BasicAuthPageOperations
 */
export interface BasicAuthPageOperations {
  doLogin(username:string,password:string):void;
  getStatusMessage():Promise<string| null>;
  getTitle():Promise<string>;
}