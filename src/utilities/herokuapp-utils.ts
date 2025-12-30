import { HomePageOperations } from "@src/operations/HomePageOperations";
import { HomePage } from "@src/web-implementation/HomePage";
import { Page } from "@playwright/test";
export function getHerokuAppUrl(): string {
    // Env Files
    return 'https://the-internet.herokuapp.com/';
}

export function getHerokuApp(page:Page): HomePageOperations {
    return new (require('@src/web-implementation/HomePage').HomePage)(page);
}
