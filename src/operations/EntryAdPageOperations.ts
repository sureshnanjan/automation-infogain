import type { Location, Page, Expect, Locator } from "@playwright/test";
//interface for EntryAd functionality
  interface EntryAdPageOperations {
 
    // ele on model window
  modalWindowVisible(): Promise<void>; 
  modelWindowPara():Promise<string|null>;   
  closeModalWindow(): Promise<void>;   
  // ele on Entry Ad Page
  getEntryAdTitle():Promise<string|null>;   
  getEntryAdDes():Promise<string|null>;  
  getReEnablePopUp():Promise<void>;   
  getFooterText():Promise<string|null>;     
}

export type {EntryAdPageOperations}