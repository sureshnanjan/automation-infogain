import {test, expect} from '@playwright/test';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { BorkenImageOperations } from '@src/operations/BorkenImageOperations';
import { getHerokuApp } from '@src/utilities/herokuapp-utils';  
test.describe("Broken Image Tests",()=>{
    test("IMage 1 check",async({page})=>{
        const homePage:HomePageOperations = await getHerokuApp(page);
        const brokenImagePage = homePage.gotoExample('Broken Images') as unknown as BorkenImageOperations;
        const image1Details = await brokenImagePage.getImageiDetails(1)
        expect(image1Details[0].statusCode).toContain('img/');
        // img/avatar-blank.jpg
        // asdf.jpg

    });
});