// tests/api/api-fixture.ts
import { APIRequestContext, test as base, request } from '@playwright/test';

const BASE_URL =
  process.env.API_TARGET === 'mock'
    ? 'http://localhost:4010'
    : 'http://localhost:3000/api/v1';

export const test = base.extend<{
  api: any;
}>({
  api: async ({}: any, use: (arg0: APIRequestContext) => any) => {
    const context = await request.newContext({
      baseURL: BASE_URL,
    });
    await use(context);
    await context.dispose();
  },
});

export { expect } from '@playwright/test';