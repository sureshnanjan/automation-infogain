import { ABTestingOperations } from "@src/operations/ABTestingOperations";
import { BasePage } from "./BasePage";
import { Logger } from "@src/utilities/Logger";

export class ABTestingPage extends BasePage implements ABTestingOperations {
    //private page: any; // Assuming you have a page object (e.g., Playwright Page)

    constructor(page: any) {
        super()
        //this.page = page;
    }

    async getTitle(): Promise<string | null> {
        try {
            return await this.page.locator('[data-testid="ab-test-title"]').textContent();
        } catch {
            return null;
        }
    }

    // Wrapper Method
    private async getTextContent(page,element){
        // Dont fail on firt tru wait for 3 time 
        let done = false;
        let retry = 3; // This i can configure in my 
        while (!done){
            try{
                Logger.info()

                return page.locator(element).getTextContent();

            }
            catch{
                retry++;
                if (retry <= 0) {
                    Logger.Debug(``)
                    throw new Error("Maximum Retr")
                    // Take Screen shot 
                }
            }

        }
        

    }

    private async clickElement(page,element){
        return page.locator(element).click();

    }

    async getDescription(): Promise<string | null> {
        try {
            return await this.page.locator('[data-testid="ab-test-description"]').textContent();
        } catch {
            return null;
        }
    }

    async disableABTesting(): Promise<void> {
        await this.page.locator('[data-testid="disable-ab-testing"]').click();
        await this.page.waitForLoadState('networkidle');
    }

    async enableABTesting(): Promise<void> {
        await this.page.locator('[data-testid="enable-ab-testing"]').click();
        await this.page.waitForLoadState('networkidle');
    }
}