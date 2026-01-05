import type { Location, Page, Expect, Locator } from "@playwright/test";
//interface for EntryAd functionality
  interface EntryAdPageOperations {
     //goto(): Promise<void>;
    // ele on model window
    navigateToHome():Promise<void>; 
  clickOnEntryAd():Promise<void>;
  modalWindowVisible(): Promise<void>; 
  //modelWindowPara():Promise<string|null>;   
  closeModalWindow(): Promise<void>;   
  // ele on Entry Ad Page
  navigateDirectEntryAdPage():Promise<void>;
  getEntryAdTitle():Promise<string|null>;    
  getReEnablePopUp():Promise<void>;   
  
}

export type {EntryAdPageOperations}