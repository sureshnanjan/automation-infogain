import { test, expect } from '@playwright/test';
import { DynamicContentPageOperations } from '@src/operations/DynamicContentPageOperations';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import {getHerokuAppUrl,getHerokuApp} from '../utilities/herokuapp-utils';
import { DynamicContentPage } from '@src/web-implementation/DynamicContentPage';

/**
 * All test use page object model
 * Dynamic content page tests
 */
test.describe('Dynamic Content', () =>{
    test('user can navigate from home page to Dynamic Content page', async({page}) => {

        const homePage: HomePageOperations = await getHerokuApp(page);
        const dynamic: DynamicContentPageOperations = new DynamicContentPage(page);
        await dynamic.goto();
        await dynamic.isLoaded();
        await expect(page).toHaveURL(/.*\/dynamic_content/);

    })

    test("Verify Dynamic Content Page Title",async({page})=>{
        const dynamic: DynamicContentPageOperations = new DynamicContentPage(page);
        await dynamic.goto();
        await dynamic.isLoaded();
        const title = await dynamic.getTitle();
        expect(title).toBe("Dynamic Content");
    });

    test('default dynamic page shows three rows with images and texts', async({page}) =>{
        const dynamic: DynamicContentPageOperations = new DynamicContentPage(page);
        await dynamic.goto();
        await dynamic.isLoaded();

        const texts = await dynamic.getRowText();
        const images = await dynamic.getImageSources();
        expect(texts.length).toBe(3);
        expect(images.length).toBe(3);

        await dynamic.validateRowsHaveText();
        await dynamic.validateImagesHaveCorrectPaths('/img/');

    })

    test('content changes when reloaded on dynamic content page', async({page}) =>{
        const dynamic: DynamicContentPageOperations = new DynamicContentPage(page);
        await dynamic.goto();
        await dynamic.isLoaded();
        const firstRunText = await dynamic.getRowText();
        await page.reload();
        await dynamic.isLoaded();
        const secondRunText = await dynamic.getRowText();
        
        const hasChange = firstRunText.some((t, i) => t !== secondRunText[i]);
        expect(hasChange).toBeTruthy();
    })

    test('static version keeps some of the content unchanged when page reloaded', async({page}) =>{
        const dynamic: DynamicContentPageOperations = new DynamicContentPage(page);
        await dynamic.goto();
        await dynamic.isLoaded();
        
        await dynamic.gotoStaticVersion();
        await dynamic.isLoaded();
        const firstRunTexts = await dynamic.getRowText();

        // Perform action
        await page.reload();
        await dynamic.isLoaded();
        const secondRunTexts = await dynamic.getRowText();
        const unchangedIndexes = dynamic.findUnchangedIndexes(firstRunTexts, secondRunTexts);

        // For the Heroku static content, usually the first two rows are static
        expect(unchangedIndexes.length).toBeGreaterThan(0);
        expect(unchangedIndexes).toContain(0); // Expecting first row to be static
        expect(unchangedIndexes).toContain(1); // Expecting second row to be static

    })


    test('static version can be enabled via "click here" link', async({page}) =>{
        const dynamic: DynamicContentPageOperations = new DynamicContentPage(page);
        await dynamic.goto();
        await dynamic.isLoaded();
        // 1. Transition to static version using the UI link
        await dynamic.enableStaticViaLink();

        // 2. Capture initial state
        const firstRunTexts = await dynamic.getRowText();

        // 3. Reload to verify content remains static
        await page.reload();
        await dynamic.isLoaded();
        const secondRunTexts = await dynamic.getRowText();

        // 4. Use the helper from your class to verify static behavior
        const unchanged = dynamic.findUnchangedIndexes(firstRunTexts, secondRunTexts);

        // On the Herokuapp static version, at least some rows remain identical
        expect(unchanged.length).toBeGreaterThan(0);
        expect(page.url()).toContain('with_content=static');
        
    })

})
