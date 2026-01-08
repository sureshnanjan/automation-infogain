import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
describe('Network Intercepts and Mocks', () => {
    //['en-US','fr-FR'].forEach(locale => {
    test.use({ baseURL: 'http://localhost:3000', locale: 'en-US' });
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });
    test('intercepts users API request', async ({ page, request }) => {
        await page.route('**/users', route => {
            console.log('Intercepted users API request');
            console.log('URL:', route.request().url());
            console.log('Method:', route.request().method());
            route.continue();
        });
       // request.
        await page.click('#loadUsers');
    });

    test('mock users API with fake data', async ({ page }) => {
        await page.route('**/users', route => {
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify([
                    { id: 1, name: 'Mock Alice', email: 'alice@test.com' }
                ])
            });
        });

        await page.click('#loadUsers');

        await expect(page.getByText('Mock Alice')).toBeVisible();
    });

    test('waits for users API response', async ({ page }) => {
        const responsePromise = page.waitForResponse(res =>
            res.url().includes('/users') && res.status() === 200
        );

        await page.click('#loadUsers');

        const response = await responsePromise;
        expect(response.ok()).toBeTruthy();
    });

    test('shows loading spinner while users load', async ({ page }) => {
        await page.route('**/users', async route => {
            await new Promise(r => setTimeout(r, 2000));
            route.continue();
        });

        await page.click('#loadUsers');

        await expect(page.locator('#spinner')).toBeVisible();
        await expect(page.locator('#spinner')).toBeHidden();
    });

    test('handles users API error', async ({ page }) => {
        await page.route('**/users', route => {
            route.fulfill({ status: 500 });
        });

        await page.click('#loadUsers');

        await expect(page.getByText('Failed to load users')).toBeVisible();
    });
    test('mock users but allow posts API', async ({ page }) => {
        await page.route('**/users', route =>
            route.fulfill({
                status: 200,
                body: JSON.stringify([{ id: 99, name: 'Only Users Mocked', email: 'u@test.com' }])
            })
        );

        await page.click('#loadUsers');
        await page.click('#loadPosts');

        await expect(page.getByText('Only Users Mocked')).toBeVisible();
        await expect(page.locator('#posts li')).toHaveCount(5);
    });

    test('offline mode shows error', async ({ page }) => {
        await page.context().setOffline(true);

        await page.click('#loadUsers');

        await expect(page.getByText('Failed to load users')).toBeVisible();

        await page.context().setOffline(false);
    });

    test('page.route does not affect APIRequestContext', async ({ page, request }) => {
        await page.route('**/users', route => {
            route.fulfill({
                status: 200,
                body: JSON.stringify([{ name: 'Mocked in Browser' }])
            });
        });

        // Browser call
        await page.goto('http://localhost:3000');
        await page.click('#loadUsers');
        await expect(page.getByText('Mocked in Browser')).toBeVisible();

        // Direct API call
        const apiResponse = await request.get('https://jsonplaceholder.typicode.com/users');
        const data = await apiResponse.json();

        console.log(data[0].name); // REAL backend data
    });
});
