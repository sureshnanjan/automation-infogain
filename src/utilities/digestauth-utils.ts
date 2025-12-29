export const DIGEST_AUTH = {
  username: process.env.DIGEST_USER ?? 'admin',
  password: process.env.DIGEST_PASS ?? 'admin',
};

export const DIGEST_AUTH_BASE_URL =
  'https://the-internet.herokuapp.com/digest_auth';
