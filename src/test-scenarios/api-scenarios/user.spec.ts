import { test, expect } from './api-fixture';
test('POST /users returns 201 for valid payload', async ({ api }) => {
  const login = await api.post('/auth/login', {
    data: { email: 'admin@test.com', password: 'test' },
  });

  const token = (await login.json()).accessToken;

  const res = await api.post('/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      name: 'Suresh',
      email: 's@test.com',
    },
  });

  expect(res.status()).toBe(201);

  const body = await res.json();
  expect(body.id).toBeDefined();
  expect(body.email).toBe('s@test.com');
});
