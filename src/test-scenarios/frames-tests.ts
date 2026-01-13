import { test, expect } from "@playwright/test";
import { FramesPage } from "@src/web-implementation/FramesPage";
import { FramesPageOperations } from "@src/operations/FramesOperations";
import { getHerokuApp } from "@src/utilities/herokuapp-utils";
import { HomePageOperations } from "@src/operations/HomePageOperations";

let framesPage: FramesPageOperations;

test.describe("Frames Page", () => {

  test("Verify Home Page Title",async({page})=>{
    //console.info("This is detailed INformation")
    //console.trace("");
    const homePage:HomePageOperations = await getHerokuApp(page);
    const expected_title = "Welcome to the-internet"
    const title=await homePage.getTitle();
    expect(title).toBe(expected_title);
});

    test("should display Frames page title", async ({page}) => {
      const homePage:HomePageOperations = await getHerokuApp(page);
      const frames = homePage.gotoExample("Frames") as unknown as FramesPageOperations;
      const title = await frames.getTitle();

      expect(title).toBe("Frames");
    });

    test("should display available frame examples", async () => {
        const examples = await frames.getAvailableExamples();

        expect(examples).not.toBeNull();
        expect(examples).toEqual(
            expect.arrayContaining(["Nested Frames", "iFrame"])
        );
    });

    test("should display footer text", async () => {
        const footerText = await frames.getFooterText();
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
