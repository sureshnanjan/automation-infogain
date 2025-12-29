
//interface for EntryAd functionality

import { Locator } from '@playwright/test';
 
 export interface EntryAdPageOperations {
 // clickOnEntryAd():Promise<void>;//clicking on entry ad 
    // ele on model window
  modalWindowVisible(): Promise<void>; //getting popup/model window
  modelWindowPara():Promise<string|null>;  // popup/model paragraph 
  closeModalWindow(): Promise<void>;   // closing popup/model
  // ele on Entry Ad Page
  getEntryAdTitle():Promise<string|null>;   //Title of Entry Ad
  getEntryAdDes():Promise<string|null>;  // Entry Ad description
  getReEnablePopUp():Promise<void>;   //closing the window
  getFooterText():Promise<string|null>;      //footer text
}

