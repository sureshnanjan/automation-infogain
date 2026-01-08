import { test, expect } from './api-fixture';
test('POST /users with invalid body returns 400', async ({ api }) => {
  const login = await api.post('/auth/login', {
    data: { email: 'admin@test.com', password: 'test' },
  });

  const token = (await login.json()).accessToken;

  const res = await api.post('/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {},
  });

  expect(res.status()).toBe(400);
});
