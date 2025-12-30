import { HomePageOperations } from "@src/operations/HomePageOperations";
import { BasePage } from "@src/web-implementation/BasePage";
import {Page, Locator} from '@playwright/test';
import { getHerokuAppUrl } from "@src/utilities/herokuapp-utils";
import { HomePageBanner } from "@src/models/HomePageBanner";
import { HerokuAppOperations } from "@src/operations/HerokuAppOperations";
export class HomePage extends BasePage implements HomePageOperations {
    private readonly page;
    private readonly subTitleSelector:Locator;
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
    static async create(page:Page) {
          const instance = new HomePage(page);
          // Do async initialization here
          await instance.navigate();
          return instance;
        }
      
    async navigate(): Promise<void> {
        await this.page.goto(getHerokuAppUrl());
    }

    getBannerInfo(): Promise<HomePageBanner | null> {
        throw new Error("Method not implemented.");
    }
    getFooterText(): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    gotoExample(exampleName: string): Promise<HerokuAppOperations> {
        this.exampleSelector.filter({ hasText: exampleName }).first().click();
        switch(exampleName){
            case 'A/B Testing':
                const abTestingPageModule = require('@src/web-implementation/ABTestingPage');
                if(this.page.title().includes('A/B Testing'))return abTestingPageModule.ABTestingPage.create(this.page);
            default:
                throw new Error(`Example page for ${exampleName} is not implemented.`);
        }
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