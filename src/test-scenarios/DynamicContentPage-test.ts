import { test, expect } from '@playwright/test';
import { DynamicContentPage } from '@src/web-implementation/DynamicContentPage';
import { IDynamicContentPage } from '@src/operations/IDynamicContentPage';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import {getHerokuAppUrl,getHerokuApp} from '../utilities/herokuapp-utils';

/**
 * All test use page object model
 * Dynamic content page tests
 */
test.describe('Dynamic Content', () =>{
    test('user can navigate from home page to Dynamic Content page', async({page}) => {

        const home: HomePageOperations = getHerokuApp(page);
        const dynamic: IDynamicContentPage = new DynamicContentPage(page);
        await dynamic.goto();
        await dynamic.isLoaded(expect);
        await expect(page).toHaveURL('/dynamic_content');

    })

    test('default dynamic page shows three rows with images and texts', async({page}) =>{
        const dynamic: IDynamicContentPage = new DynamicContentPage(page);
        await dynamic.goto();
        await dynamic.isLoaded(expect);
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
        const dynamic: IDynamicContentPage = new DynamicContentPage(page);
        await dynamic.goto();
        await dynamic.isLoaded(expect);
        const firstRunText = await dynamic.getRowText();
        await page.reload();
        await dynamic.isLoaded(expect);
        const secondRunText = await dynamic.getRowText();
        
        const hasChange = firstRunText.some((t, i) => t !== secondRunText[i]);
        expect(hasChange).toBeTruthy();
    })

    test('static version keeps some of the content unchanged when page reloaded', async({page}) =>{
        
    })

    test('static version can be enebled via "click here" link', async({page}) =>{
        
    })

})
