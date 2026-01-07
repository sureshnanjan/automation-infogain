// tests/api/system.spec.ts
import { test, expect } from './api-fixture';

test('GET /health returns 200', async ({ api }) => {
  const res = await api.get('/health');
  expect(res.status()).toBe(200);
});
