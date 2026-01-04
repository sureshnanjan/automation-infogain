import { Page } from "@playwright/test";
import { ABTestingOperations } from "@src/operations/ABTestingOperations";
import { ABTestingPage } from "@src/web-implementation/ABTestingPage";


export async function getABTestingApp(page: Page): Promise<ABTestingOperations> {
    await page.goto('https://the-internet.herokuapp.com/abtest');
    return new ABTestingPage(page);
}
