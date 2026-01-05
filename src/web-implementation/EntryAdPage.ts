
import { Page, Locator } from '@playwright/test';
import { HomePageOperations } from "@src/operations/HomePageOperations";
import { EntryAdPageOperations } from '@src/operations/EntryAdPageOperations';
import { getHerokuAppUrl } from "@src/utilities/herokuapp-utils";
import { HerokuAppOperations } from "@src/operations/HerokuAppOperations";
import { BasePage } from "@src/web-implementation/BasePage";
 
export class EntryAdPage implements EntryAdPageOperations {

  // Variable decleration 
  private readonly page:Page ;
  private readonly modelWindowTitle: Locator;
  private readonly closeModalButton:Locator;
  private readonly entryAdTitle:Locator;
  private readonly entryAdDes:Locator;
  private readonly reEnablePopUp:Locator;
  private readonly footerText:Locator;
  private readonly entryAdEle:Locator;
  

  //intializing  declered variables
  constructor(page: Page) {
    this.page = page;
   
    this.entryAdEle = page.getByRole('link', { name: 'Entry Ad' });
    this.modelWindowTitle = page.getByText('This is a modal window It\'s');
    this.closeModalButton = page.getByText('Close', { exact: true });
    this.entryAdTitle =page.getByRole('heading');
    this.entryAdDes = page.locator('#content');
    this.reEnablePopUp = page.getByRole('link', { name: 'click here' });
    this.footerText=page.getByText('Powered by Elemental Selenium');
    
    //this.page.goto(getHerokuAppUrl());
  }/*
  static async create(page:Page) {
          const instance = new HomePage(page);
          // Do async initialization here
          //await instance.navigate();
          return instance;
        }
      
    async navigate(): Promise<void> {
        // Log the properties of 
        await this.page.goto(`${getHerokuAppUrl()}entry_ad`);
    }
  async clickOnEntryAd(): Promise<void> {
    await this.entryAdEle.click();
  }
    
  async modalWindowVisible(): Promise<void> {
    await this.modelWindowTitle.waitFor({state:'visible'});  //visiblity of popup
    
  }
 
  async closeModalWindow(): Promise<void> {
    await this.closeModalButton.click();
  }

  async getEntryAdTitle() :Promise<string|null>{
    
    return await this.entryAdTitle.textContent();
  }
  async getEntryAdDes() :Promise<string|null>{
    return await this.entryAdDes.textContent();
    
  }

  async getReEnablePopUp(): Promise<void> {
    await this.reEnablePopUp.click();
  }

  async getFooterText(): Promise<string|null> {
    return await this.footerText.textContent();
    
  }
    */
   async navigateToHome():Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  async clickOnEntryAd() :Promise<void>{
    //await this.page.getByRole('link', { name: 'Entry Ad' }).click();
    await this.entryAdEle.click();
  }

  async modalWindowVisible() :Promise<void>{
    //await expect(this.page.getByText("This is a modal window It's")).toBeVisible();
    await this.modelWindowTitle.waitFor({state:'visible'});
  }

  async closeModalWindow(): Promise<void>{
    //await this.page.getByText('Close', { exact: true }).click();
    await this.closeModalButton.click();
  }
   async navigateDirectEntryAdPage() {
    await this.page.goto('https://the-internet.herokuapp.com/entry_ad');
  }
  async getEntryAdTitle():Promise<string|null> {
    //await expect(this.page.getByRole('heading')).toContainText(text);
    return await this.entryAdTitle.textContent();
  }


  async getReEnablePopUp():Promise<void> {
    await this.reEnablePopUp.click();
  }
}

