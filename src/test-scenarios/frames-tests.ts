import { test, expect } from "@playwright/test";
import { FramesPage } from "@src/pages/FramesPage";
import { FramesPageOperations } from "@src/operations/FramesPageOperations";

let framesPage: FramesPageOperations;

test.describe("Frames Page", () => {

    test.beforeEach(async ({ page }) => {
        framesPage = new FramesPage(page);
        await framesPage.open(); // from HerokuAppOperations
    });

    test("should display Frames page title", async () => {
        const title = await framesPage.getTitle();
        expect(title).toBe("Frames");
    });

    test("should display available frame examples", async () => {
        const examples = await framesPage.getAvailableExamples();

        expect(examples).not.toBeNull();
        expect(examples).toEqual(
            expect.arrayContaining(["Nested Frames", "iFrame"])
        );
    });

    test("should display footer text", async () => {
        const footerText = await framesPage.getFooterText();
        expect(footerText).toContain("Powered by Elemental Selenium");
    });

    test("should navigate to Nested Frames page", async () => {
        const page = await framesPage.gotoExample("Nested Frames");
        const title = await page.getTitle();

        expect(title).toContain("Nested Frames");
    });

    test("should navigate to iFrame page", async () => {
        const page = await framesPage.gotoExample("iFrame");
        const title = await page.getTitle();

        expect(title).toContain("iFrame");
    });

});
