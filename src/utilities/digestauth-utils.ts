export const DIGEST_AUTH_BASE_URL =
  'https://the-internet.herokuapp.com/digest_auth'; //Base URL for Digest Authentication page

  /**
 * Default credentials for Digest Authentication
 * Can be overridden using environment variables
 */
export const DIGEST_AUTH = {
  username: process.env.DIGEST_USER || 'admin',       
  password: process.env.DIGEST_PASS || 'admin',         
};
