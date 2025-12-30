import { HomePageOperations } from "@src/operations/HomePageOperations";
import { HomePage } from "@src/web-implementation/HomePage";
import { Page } from "@playwright/test";
import { DynamicContentPageOperations } from "@src/operations/DynamicContentPageOperations";
import { DynamicContentPage } from "@src/web-implementation/DynamicContentPage";
export function getHerokuAppUrl(): string {
    // Env Files
    return 'https://the-internet.herokuapp.com/';
}

export async function getHerokuApp(page:Page): Promise<HomePageOperations> {
    // How call a async factory method from here?

    return  HomePage.create(page);
    //app.navigate();
    //return app;
}

export async function getDynamicContentPage(page:Page): Promise<DynamicContentPageOperations> {
    return  DynamicContentPage.create(page);
}