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
        await expect(page).toHaveURL('/dynamic_content');

    })

    test('default dynamic page shows three rows with images and texts', async({page}) =>{
        const dynamic: DynamicContentPageOperations = new DynamicContentPage(page);
        await dynamic.goto();
        await dynamic.isLoaded();
        const texts = await dynamic.getRowText();
        const images = await dynamic.getImageSources();

        expect(texts.length).toBe(3);
        expect(images.length).toBe(3);

        for (const t of texts) {
            expect(t.length).toBeGreaterThan(0);
        }

        for (const src of images) {
            expect(src).toContain('/img/');
        }
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
        await dynamic.gotoStaticVersion();
        await dynamic.isLoaded();
        const firstRunTexts = await dynamic.getRowText();
        await page.reload();
        await dynamic.isLoaded();
        const secondRunTexts = await dynamic.getRowText();
        //const { unchangedIndexes } = 
    })


    test('static version can be enabled via "click here" link', async({page}) =>{
        
    })

})
