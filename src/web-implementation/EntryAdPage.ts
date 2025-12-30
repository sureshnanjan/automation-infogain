
import { Page, Locator } from '@playwright/test';
import { HomePageOperations } from "@src/operations/HomePageOperations";
import { EntryAdPageOperations } from '@src/operations/EntryAdPageOperations';
import { getHerokuAppUrl } from "@src/utilities/herokuapp-utils";
 
export class EntryAdPage implements EntryAdPageOperations {

  // Variable decleration 
  private readonly page:Page ;
  private readonly modelWindowTitle: Locator;
  private readonly modelWindowParaText:Locator;
  private readonly closeModalButton:Locator;
  private readonly entryAdTitle:Locator;
  private readonly entryAdDes:Locator;
  private readonly reEnablePopUp:Locator;
  private readonly footerText:Locator;
  private readonly entryAdEle:Locator;
  //intializing  declered variables
  constructor(page: Page) {
    this.page = page;
    
    this.entryAdEle = page.locator('#content > ul > li:nth-child(15) > a');
    this.modelWindowTitle = page.locator('#modal > div.modal > div.modal-title > h3');
    this.modelWindowParaText = page.locator('#modal > div.modal > div.modal-body');
    this.closeModalButton = page.locator('#modal > div.modal > div.modal-footer > p');
    this.entryAdTitle =page.locator('#content > div.example > h3');
    this.entryAdDes = page.locator('#content > div.example > p:nth-child(2)');
    this.footerText=page.locator('#page-footer > div > div');
    this.reEnablePopUp = page.locator('#restart-ad');
    this.page.goto(getHerokuAppUrl());
    
  }
  async clickOnEntryAd(): Promise<void> {
    await this.entryAdEle.click();
  }
    //action on variables (Act)
  async modalWindowVisible(): Promise<void> {
    await this.modelWindowTitle.waitFor({state:'visible'});  //visiblity of popup 
  }
 
  async modelWindowPara(): Promise<string> {
    const text=await this.modelWindowParaText.textContent();
    return text ??"";
  }
 
  async closeModalWindow(): Promise<void> {
    await this.closeModalButton.click();
  }

  async getEntryAdTitle() :Promise<string>{
    const adTitle=await this.entryAdTitle.textContent(); 
    return adTitle ??"";
  }
  async getEntryAdDes() :Promise<string>{
    const adDes=await this.entryAdDes.textContent();
    return adDes ??"";
  }

  async getReEnablePopUp(): Promise<void> {
    await this.reEnablePopUp.click();
  }

  async getFooterText(): Promise<string> {
    const text=await this.footerText.textContent();
    return text ??"";
  }

}