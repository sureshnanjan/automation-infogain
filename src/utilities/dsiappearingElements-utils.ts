import { Page } from "@playwright/test";
import { DisappearingElementsOperations } from "@src/operations/DisappearingElementsOperations";
import { DisappearingElements } from "@src/web-implementation/DisappearingElementsPage";


export async function getDisappearingElementsApp(page: Page): Promise<DisappearingElementsOperations> {
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
    return new DisappearingElements(page);
}