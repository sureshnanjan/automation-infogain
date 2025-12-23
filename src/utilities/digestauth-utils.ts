export const DIGEST_AUTH = {
  username: process.env.DIGEST_USER || 'admin',
  password: process.env.DIGEST_PASS || 'admin',
};

export function getDigestAuthUrl(username: string, password: string): string {
  return `https://${username}:${password}@the-internet.herokuapp.com/digest_auth`;
}
