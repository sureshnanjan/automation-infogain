import { test, expect } from "@playwright/test";
import { FramesPage } from "@src/web-implementation/FramesPage";
import { FramesPageOperations } from "@src/operations/FramesOperations";
import { getHerokuApp } from "@src/utilities/herokuapp-utils";
import { HomePageOperations } from "@src/operations/HomePageOperations";
import { close } from "fs";

let framesPage: FramesPageOperations;


test.describe("Frames Page", () => {

  test("Verify Home Page Title",async({page})=>{
    //console.info("This is detailed INformation")
    //console.trace("");
    const homePage:HomePageOperations = await getHerokuApp(page);
    const title=await homePage.getTitle();
    expect(title).toBe("Welcome to the-internet");
});

    test("should display Frames page title", async ({page}) => {
      const homePage:HomePageOperations = await getHerokuApp(page);
      const frames = homePage.gotoExample("Frames") as unknown as FramesPageOperations;
      const title = await frames.getTitle();

      expect(title).toBe("Frames");
    });

    test("should display available frame examples", async ({page}) => {
      const homePage:HomePageOperations = await getHerokuApp(page);
      const frames = homePage.gotoExample("Frames") as unknown as FramesPageOperations;
        const examples = await frames.getAvailableExamples();

        expect(examples).not.toBeNull();
        expect(examples).toEqual(
            expect.arrayContaining(["Nested Frames", "iFrame"])
        );
    });


   
  test('reads texts from nested frames', async ({ page }) => {
    const homePage:HomePageOperations = await getHerokuApp(page);
      const frames = homePage.gotoExample("Frames") as unknown as FramesPageOperations;
      frames.getNestedFramesLink();
      
    const middle = await frames.getTopMiddle();
    expect(middle).toBe('MIDDLE');

    const left = await frames.getTopLeft();
    expect(left).toBe('LEFT');

    const right = await frames.getTopRight();
    expect(right).toBe('RIGHT');

    const bottom = await frames.getBottom();
    expect(bottom).toBe('BOTTOM');
  });
   test("should navigate to iFrame page", async ({page}) => {
      const homePage:HomePageOperations = await getHerokuApp(page);
      const frames = homePage.gotoExample("Frames") as unknown as FramesPageOperations;

      await frames.getIFrameLink();
      await frames.closePopupIfPresent
      const title = await frames.getTitle();  

        expect(title).toContain("iFrame");
    });

});
