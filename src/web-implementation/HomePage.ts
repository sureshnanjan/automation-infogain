import { HomePageOperations } from "@src/operations/HomePageOperations";
import {Page, Locator} from '@playwright/test';
import { getHerokuAppUrl } from "@src/utilities/herokuapp-utils";
export class HomePage implements HomePageOperations {
    private readonly page;
    private readonly subTitleSelector:Locator;
    private readonly titleSelector:Locator;
    private readonly exampleSelector:Locator;
    constructor(page: any) {
        this.page = page;
        this.titleSelector = page.locator('h1');
        this.subTitleSelector = page.locator('h2');
        this.exampleSelector = page.locator('ul > li');
        this.page.goto(getHerokuAppUrl());
    }   
    async getSubTitle(): Promise<string|null> {
        return this.subTitleSelector.textContent();
    }
    async getAvailableExamples(): Promise<string[]|null> {
        return this.exampleSelector.allTextContents();
    }
    async getTitle(): Promise<string|null> {
        // Implementation to get the title from the home page
        return this.titleSelector.textContent();
    }}   