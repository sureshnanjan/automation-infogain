export const DIGEST_AUTH = {
<<<<<<< HEAD
<<<<<<< HEAD
  username: process.env.DIGEST_USER ?? 'admin',
  password: process.env.DIGEST_PASS ?? 'admin',
};

export const DIGEST_AUTH_BASE_URL =
  'https://the-internet.herokuapp.com/digest_auth';
=======
  username: process.env.DIGEST_USER || 'admin',
  password: process.env.DIGEST_PASS || 'admin',
};

export function getDigestAuthUrl(username: string, password: string): string {
  return `https://${username}:${password}@the-internet.herokuapp.com/digest_auth`;
}
>>>>>>> b690760 (digest auth)
=======
  username: process.env.DIGEST_USER ?? 'admin',
  password: process.env.DIGEST_PASS ?? 'admin',
};

export const DIGEST_AUTH_BASE_URL =
  'https://the-internet.herokuapp.com/digest_auth';
>>>>>>> 8907107 (latest code)
