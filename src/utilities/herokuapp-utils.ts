import { Page } from '@playwright/test';
import { HomePage } from '@src/web-implementation/HomePage';
import { HomePageOperations } from '@src/operations/HomePageOperations';
export function getHerokuAppUrl(): string {
 return 'https://the-internet.herokuapp.com/';
}
export async function getHerokuApp(page: Page): Promise<HomePageOperations> {
 return await HomePage.create(page);
}
export async function getDynamicControlsPage(page: Page) {
 const { DynamicControlsPage } = await import(
   '@src/web-implementation/DynamicControlsPage'
 );
 return new DynamicControlsPage(page);
}