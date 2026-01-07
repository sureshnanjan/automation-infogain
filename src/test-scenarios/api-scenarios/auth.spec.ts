// tests/api/auth.spec.ts
import { test, expect } from './api-fixture';

test('POST /auth/login returns token', async ({ api }) => {
  const res = await api.post('/auth/login', {
    data: {
      email: 'admin@test.com',
      password: 'test',
    },
  });

  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.accessToken).toBeDefined();
  expect(body.role).toBeDefined();
});

test('GET /users without token returns 401', async ({ api }) => {
  const res = await api.get('/users');
  expect(res.status()).toBe(401);
});

test("Health Of Srver is OK", async ({ api }) => {
  const res = await api.get('/health');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.status).toBe('ok');
});

