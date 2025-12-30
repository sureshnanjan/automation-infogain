import { HomePageOperations } from "@src/operations/HomePageOperations";
import { HomePage } from "@src/web-implementation/HomePage";
import { Page } from "@playwright/test";
export function getHerokuAppUrl(): string {
    // Env Files
    // URL Factory - testing , stshing, production, customer , 
    return 'https://the-internet.herokuapp.com/';
}

export async function getHerokuApp(page:Page): Promise<HomePageOperations> {
    // App Factory
    // How call a async factory method from here?
    return new HomePage(page);
}