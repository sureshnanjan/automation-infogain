export interface BasicAuthenticationOps{
    doLogin(username, password):Promise<void>;
    getStatusMessage():Promise<string>;
    getTite():Promise<string>;
}