import { HomePageOperations } from "@src/operations/HomePageOperations";
import { BasePage } from "@src/web-implementation/BasePage";
import {Page, Locator} from '@playwright/test';
import { getHerokuAppUrl } from "@src/utilities/herokuapp-utils";
import { HomePageBanner } from "@src/models/HomePageBanner";
import { HerokuAppOperations } from "@src/operations/HerokuAppOperations";
import { WebInteractions } from "./utilites/configuratios";
export class HomePage extends BasePage implements HomePageOperations {
    //private readonly page;
    private readonly subTitleSelector:Locator; // data-testid = subtitle
    private readonly titleSelector:Locator;
    private readonly exampleSelector:Locator;
    constructor(page: any) {
        super();
        this.page = page;
        //this.page.locator.
        this.titleSelector = page.locator('h1'); // data-testid = 'home-title'
        this.subTitleSelector = page.locator('h2'); // data-testid = 'home-subtitle'
        this.exampleSelector = page.getByRole('listitem'); // data-testid = 'example-link'
        //this.page.goto(getHerokuAppUrl());
        //this.navigate();
    }
    // Only Holds good in Async Libraries
    static async create(page:Page) {
          const instance = new HomePage(page);
          // Do async initialization here
          await instance.navigate(); 
                     return instance;
        }
      
    async navigate(): Promise<void> {
        // Log the properties of 
        await this.page.goto(getHerokuAppUrl());
        //WebInteractions.navigateTo();
    }

    getBannerInfo(): Promise<HomePageBanner | null> {
        throw new Error("Method not implemented.");
    }
    getFooterText(): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    gotoExample(exampleName: string): Promise<any> {
        this.exampleSelector.filter({ hasText: exampleName }).first().click();
        return CheckPageAndReturnPO(this.page, exampleName);
       
    }
    async getSubTitle(): Promise<string|null> {
        return this.subTitleSelector.textContent();
    }
    async getAvailableExamples(): Promise<string[]|null> {
        await this.page.waitForLoadState('domcontentloaded');
        return this.exampleSelector.allTextContents();
    }
    async getTitle(): Promise<string|null> {
        // Implementation to get the title from the home page
        
        return this.titleSelector.textContent();
    }}   

function CheckPageAndReturnPO(page, expectedTitle) {
    switch (expectedTitle) {
        case 'A/B Testing':
            return new (require('@src/web-implementation/ABTestingPage').ABTestingPage)(page);
            break;
        case 'Basic Auth':
            return new (require('@src/web-implementation/BasicAuthPage').BasicAuthPage)(page);
            break;
        case 'Sortable Data Tables':
            return new (require('@src/web-implementation/SortableTablePage').SortableTablePage)(page);
            break;
    
        default:
            break;
    }

    // const abTestingPageModule = require('@src/web-implementation/ABTestingPage');
    // // Exception Handling
    // return new abTestingPageModule.ABTestingPage(page);
    // }else if(expectedTitle==="Basic Auth") {
    //     const basicAuthPageModule = require('@src/web-implementation/BasicAuth');
    //     // Exception Handling
    //     return new basicAuthPageModule.BasicAuth(page);
    // }
}
