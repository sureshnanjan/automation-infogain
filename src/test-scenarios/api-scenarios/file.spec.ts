import { test, expect } from './api-fixture';
test('POST /documents accepts multipart upload', async ({ api }) => {
  const login = await api.post('/auth/login', {
    data: { email: 'user@test.com', password: 'test' },
  });

  const token = (await login.json()).accessToken;

  const res = await api.post('/documents', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    multipart: {
      file: {
        name: 'test.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('hello'),
      },
      documentType: 'INVOICE',
    },
  });

  expect(res.status()).toBe(201);
});
